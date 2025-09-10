
// import React, { useContext, useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { QRCodeCanvas } from 'qrcode.react';
// import Swal from 'sweetalert2';
// import { Context } from './Context';

// const BitcoinPaymentModal = ({ onClose, domain, tld, handleSubmit }) => {
//   const { domainPricings, dollarRate } = useContext(Context);

//   const btcWallet = '1EPvkK3ANxZNtR8Ky3FUnuBULvzrZDKpBL';
//   const [btcRate, setBtcRate] = useState(null);

//   const pricing = domainPricings.find((e) => e.domain === tld);
//   const baseAmount = pricing?.register ?? 0; 
//   const amountNGN = baseAmount * 1.075; // with tax
//   const amountUSD = Number((amountNGN / dollarRate).toFixed(2));

//   // fetch BTC price (in USD)
//   useEffect(() => {
//     const fetchBTC = async () => {
//       try {
//         const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
//         const data = await res.json();
//         setBtcRate(data.bpi.USD.rate_float);
//       } catch (err) {
//         console.error("Error fetching BTC price:", err);
//       }
//     };
//     fetchBTC();
//   }, []);

//   const amountBTC = btcRate ? (amountUSD / btcRate).toFixed(8) : null;
//   const btcURI = `bitcoin:${btcWallet}?amount=${amountBTC}&label=DomainPayment`;

//   const confirmPayment = () => {
//     Swal.fire({
//       title: 'Confirm Payment',
//       text: 'Have you sent the Bitcoin payment?',
//       icon: 'question',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, I have paid',
//       cancelButtonText: 'Not yet'
//     }).then((result) => {
//       if (result.isConfirmed) {
//         handleSubmit("BTC-" + Date.now()); // mark order
//         Swal.fire({ icon: 'success', text: 'Payment marked as complete!' });
//         onClose();
//       }
//     });
//   };

//   return (
//     <Backdrop>
//       <ModalContainer>
//         <Header>Pay with Bitcoin</Header>
//         <Content>
//           <Row><strong>Domain:</strong> {domain}{tld}</Row>
//           <Row><strong>Total (NGN):</strong> ₦{Number(amountNGN).toLocaleString()}</Row>
//           <Row><strong>Total (USD):</strong> ${amountUSD}</Row>
//           {amountBTC && (
//             <Row><strong>Total (BTC):</strong> {amountBTC} BTC</Row>
//           )}
//           <Row><strong>Wallet Address:</strong></Row>
//           <WalletBox>{btcWallet}</WalletBox>

//           {amountBTC && (
//             <QRCodeWrapper>
//               <QRCode value={btcURI} size={180} />
//               <p style={{ fontSize: "0.9rem", marginTop: "10px" }}>Scan to Pay</p>
//             </QRCodeWrapper>
//           )}
//         </Content>

//         <Actions>
//           <ButtonPrimary onClick={confirmPayment}>I Have Paid</ButtonPrimary>
//           <ButtonSecondary onClick={onClose}>Cancel</ButtonSecondary>
//         </Actions>
//       </ModalContainer>
//     </Backdrop>
//   );
// };

// export default BitcoinPaymentModal;

// // ---------------- Styled Components ----------------
// const Backdrop = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0,0,0,0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 2000;
// `;

// const ModalContainer = styled.div`
//   background: #fff;
//   border-radius: 16px;
//   padding: 32px;
//   width: 90%;
//   max-width: 500px;
//   max-height: 90vh;
//   overflow-y: auto;
//   box-shadow: 0 8px 24px rgba(0,0,0,0.2);
// `;

// const Header = styled.h2`
//   margin: 0 0 24px;
//   font-size: 1.8rem;
//   text-align: center;
//   color: #f7931a; /* Bitcoin orange */
// `;

// const Content = styled.div`
//   margin-bottom: 20px;
// `;

// const Row = styled.p`
//   margin: 10px 0;
//   font-size: 1rem;
// `;

// const WalletBox = styled.div`
//   background: #f5f5f5;
//   padding: 10px;
//   border-radius: 6px;
//   word-break: break-all;
//   font-family: monospace;
//   font-size: 0.95rem;
// `;

// const QRCodeWrapper = styled.div`
//   margin-top: 20px;
//   text-align: center;
// `;

// const Actions = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 16px;
// `;

// const ButtonPrimary = styled.button`
//   padding: 14px;
//   background-color: #f7931a;
//   color: #fff;
//   font-weight: bold;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   font-size: 1rem;

//   &:hover {
//     background-color: #d67800;
//   }
// `;

// const ButtonSecondary = styled.button`
//   padding: 14px;
//   background-color: lightgray;
//   color: #333;
//   font-weight: bold;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   font-size: 1rem;

//   &:hover {
//     background-color: #bbb;
//   }
// `;




import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";
import CountdownTimer from "./CountdownTimer";

const BtcPaymentModal = ({ btcWallet, totalNgnAmount, totalBtcAmount, onClose, handleSubmit }) => {
  const [initialBalance, setInitialBalance] = useState(null);



  // Fetch balance (in BTC) from Blockstream
  const fetchBalance = async () => {
    try {
      const res = await axios.get(`https://blockstream.info/api/address/${btcWallet}`);
      const sats = res.data.chain_stats.funded_txo_sum - res.data.chain_stats.spent_txo_sum;
      return sats / 1e8;
    } catch (err) {
      console.error("Error fetching balance:", err);
      Swal.fire("Error", "Could not check wallet balance.", "error");
      return null;
    }
  };

  // On mount, store initial balance
  useEffect(() => {
    (async () => {
      const bal = await fetchBalance();
      setInitialBalance(bal);
    })();
  }, []);

  // Start polling for payment
  useEffect(() => {
    if (initialBalance === null) return;

    const interval = setInterval(async () => {
      const newBalance = await fetchBalance();
      if (newBalance !== null && newBalance - initialBalance >= parseFloat(totalBtcAmount)) {
        clearInterval(interval);
        Swal.fire("Payment Confirmed!", "We’ve received your BTC payment.", "success");
        handleSubmit(`BTC-${Date.now()}`); // Pass a pseudo tx hash or hook real txid later
        onClose();
      }
    }, 10000); // poll every 10s

    return () => clearInterval(interval);
  }, [initialBalance]);

  const btcURI = `bitcoin:${btcWallet}?amount=${totalBtcAmount}`;

  return (
    <Backdrop>
      <Modal>
        <h2 style={{color:"green"}}>Bitcoin Payment</h2>
        <p>Please send exactly <strong style={{color:"red"}}>{totalBtcAmount} BTC</strong></p>
        <p>to the below BTC address</p>
<CountdownTimer/>
        <WalletBox onClick={() => {
          navigator.clipboard.writeText(btcWallet);
          Swal.fire("Copied!", "BTC wallet address copied to clipboard.", "success");
        }}
        style={{color:"blue", fontWeight:"bold", fontSize:"1.1rem"}}
        >
          {btcWallet}
        </WalletBox>

         <WalletBox onClick={() => {
          navigator.clipboard.writeText(btcWallet);
          Swal.fire("Copied!", "BTC wallet address copied to clipboard.", "success");
        }}>
          Copy Address
        </WalletBox>

        <QRCodeCanvas value={btcURI} size={200} />

        <ButtonGroup>
          <Button className="cancel" onClick={onClose}>Cancel</Button>
        </ButtonGroup>
      </Modal>
    </Backdrop>
  );
};

export default BtcPaymentModal;

// ---------------- STYLES ----------------
const Backdrop = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.7);
  display: flex; align-items: center; justify-content: center;
  z-index: 2000;
`;

const Modal = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;
  text-align: center;
`;

const WalletBox = styled.div`
  font-size: 0.9rem;
  padding: 10px;
  margin: 15px 0;
  background: #f3f3f3;
  border-radius: 6px;
  cursor: pointer;
  word-break: break-all;
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &.cancel { background: #f44336; color: white; }
`;
