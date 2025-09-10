
// import React, { useContext } from 'react';
// import styled from 'styled-components';
// import { Context } from './Context';
// import Swal from 'sweetalert2';
// import PaystackPop from "@paystack/inline-js";

// const PricingModalForDomainTransfer = ({ onClose, domain, tld , handleSubmit, email, checkoutType }) => {
//   const { domainPricings } = useContext(Context);

//   const pricing = domainPricings.find((e) => e.domain === tld);
//   const amount = pricing?.transfer ?? 'N/A';



// const checkUserRegistration =()=>{

// // Show loading
// Swal.fire({
//   title: 'Checking user...',
//   allowOutsideClick: false,
//   didOpen: () => {
//     Swal.showLoading();
//   }
// });

// fetch('https://www.elexdonhost.com/api_elexdonhost/check_user.php', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ email: email })
// })
// .then(res => res.json())
// .then(data => {
//   if (data.success) {
//     // payWithPaystack();
//     if(checkoutType===false){
//  Swal.fire({
//       icon: 'warning',
//       title: 'User Found',
//       text: 'You already have an account. Kindly go back and check the "i have an account box" and then proceed',
//     });
//     }else{
//       payWithPaystack();
//       // handleSubmit('by elexdon host');
//     }
   
//   } else {

//     if(checkoutType===false){
//       payWithPaystack();
//       // handleSubmit('by elexdon host');
//     } else{
//   Swal.fire({
//       icon: 'warning',
//       title: 'You do not have not an account, kindy go back and uncheck the "i have an account box" and then proceed.',
//       text: data.message,
//     });
//     }
  
//   }
// })
// .catch(error => {
//   Swal.fire({
//     icon: 'error',
//     title: 'Error',
//     text: 'An error occurred while checking the user.',
//   });
// });


  
// }






//   const payWithPaystack = () => {

  
//     const paystack = new PaystackPop();
//     paystack.newTransaction({
//     //   key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
//       key: "pk_live_3626fe7772aaca28a10724ebb1f9727dfcc5d6cb", // LIVE KEY
//       amount: amount * 100 * 1.075, // in kobo
//       email: email,
//     //   firstname: user.fullname,
  
//       onSuccess: (transaction) => {
//         // Swal.fire({ icon: "info", title: "Verifying payment...", showConfirmButton: false, allowOutsideClick: false });
  
//     handleVerify(transaction.reference);
//       },
//       onCancel: () => {
//         Swal.fire({ icon: "warning", text: "Payment cancelled by user.", showConfirmButton: true });
//       },
  
//       onError: (error) => {
//         Swal.fire({
//           icon: "error",
//           title: "Payment Failed",
//           text: error.message || "An unknown error occurred.",
//           showConfirmButton: true
//         });
//       }
//     });
//   };



//    const handleVerify = async (reference) => {  
//      const loading = Swal.fire({
//         title: 'Verifying Payment...',
//         allowOutsideClick: false,
//         didOpen: () => {
//           Swal.showLoading();
//         }
//       });
  
//       try {
//         const response = await fetch('https://www.elexdonhost.com/api_elexdonhost/verify_payment.php', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ reference })
//         });
  
//         const result = await response.json();
  
//         if (result.success) {
//           handleSubmit(reference);
//           Swal.fire({
//             title: 'Success verified!',
//             text: result.message,
//             icon: 'success',
//             confirmButtonText: 'OK'
//           });
//         } else {
//           Swal.fire({
//             title: 'Verification Failed',
//             text: result.message,
//             icon: 'error',
//             confirmButtonText: 'Try Again'
//           });
//         }
//       } catch (error) {
//         Swal.fire({
//           title: 'Error',
//           text: 'An error occurred while verifying the payment.',
//           icon: 'error',
//           confirmButtonText: 'Close'
//         });
//       }
//     };
  




//   return (
//     <Backdrop>
//       <ModalContainer>
//         <Header>Order Summary</Header>
//         <Content>
//           <Row><strong>Domain:</strong> {domain}{tld}</Row>
//           <Row><strong>Amount:</strong> ₦{amount}</Row>
//         </Content>
//         <Actions>
//           <ButtonPrimary onClick={checkUserRegistration}>Pay Now</ButtonPrimary>
//           <ButtonSecondary onClick={onClose}>Cancel</ButtonSecondary>
//         </Actions>
//       </ModalContainer>
//     </Backdrop>
//   );
// };

// export default PricingModalForDomainTransfer;

// // Styled Components
// const Backdrop = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 999;
// `;

// const ModalContainer = styled.div`
//   background: #fff;
//   border-radius: 16px;
//   padding: 24px;
//   width: 90%;
//   max-width: 400px;
//   box-shadow: 0 10px 30px rgba(0,0,0,0.1);
// `;

// const Header = styled.h2`
//   margin: 0 0 16px;
//   font-size: 1.5rem;
//   text-align: center;
//   color: #2b32b2;
// `;

// const Content = styled.div`
//   margin-bottom: 20px;
// `;

// const Row = styled.p`
//   margin: 8px 0;
//   font-size: 1rem;
// `;

// const Actions = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 10px;
// `;

// const ButtonPrimary = styled.button`
//   flex: 1;
//   padding: 12px;
//   background-color: #2b32b2;
//   color: white;
//   font-weight: bold;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background 0.2s ease;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const ButtonSecondary = styled.button`
//   flex: 1;
//   padding: 12px;
//   background-color: lightgray;
//   color: #333;
//   font-weight: bold;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background 0.2s ease;

//   &:hover {
//     background-color: #ddd;
//   }
// `;







import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './Context';
import Swal from 'sweetalert2';
import PaystackPop from "@paystack/inline-js";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PricingModalForDomainTransfer = ({ onClose, domain, tld, handleSubmit, email }) => {
  const { domainPricings, dollarRate } = useContext(Context);

  const PAYPAL_CLIENT_ID = 'AY3JP-UI68WChZpC_0f7oTadUrItrOcSwqL2E4GVFJHfo-4QPabv308FQRUTfmDS4jfNFYi9AbLZh9iV';

  const pricing = domainPricings.find((e) => e.domain === tld);
  const baseAmount = pricing?.transfer ?? 0;
  const amount = baseAmount * 1.075; // add tax
  const dollarAmount = Number((amount / dollarRate).toFixed(2));

  // ---------------- Paystack ----------------
  const payWithPaystack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_live_3626fe7772aaca28a10724ebb1f9727dfcc5d6cb",
      amount: amount * 100, // in kobo
      email,
      onSuccess: (transaction) => {
        handleVerify(transaction.reference);
      },
      onCancel: () => {
        Swal.fire({ icon: "warning", text: "Payment cancelled by user." });
      },
      onError: (error) => {
        Swal.fire({ icon: "error", title: "Payment Failed", text: error.message || "Unknown error." });
      }
    });
  };

  const handleVerify = async (reference) => {
    Swal.fire({
      title: 'Verifying Payment...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const response = await fetch('https://www.elexdonhost.com/api_elexdonhost/verify_payment.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference })
      });

      const result = await response.json();

      if (result.success) {
        handleSubmit(reference);
        Swal.fire({ title: 'Success', text: result.message, icon: 'success' });
      } else {
        Swal.fire({ title: 'Verification Failed', text: result.message, icon: 'error' });
      }
    } catch (error) {
      Swal.fire({ title: 'Error', text: 'Error verifying payment.', icon: 'error' });
    }
  };

  // ---------------- PayPal ----------------
  const createPayPalOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: `Domain Transfer: ${domain}${tld}`,
          amount: {
            currency_code: 'USD',
            value: dollarAmount,
          },
        },
      ],
    });
  };

  const onApprovePayPal = async (data, actions) => {
    Swal.fire({ text: 'Processing PayPal payment...', allowOutsideClick: false });
    Swal.showLoading();
    try {
      const order = await actions.order.capture();
      handleSubmit(order.id);
      Swal.fire({ icon: 'success', text: 'PayPal payment successful!' });
      onClose();
    } catch (error) {
      Swal.fire({ icon: 'error', text: `PayPal payment failed: ${error.message}` });
    }
  };

  const onErrorPayPal = (err) => {
    Swal.fire({ icon: 'error', text: `PayPal error: ${err.message || 'Unknown error'}` });
  };

  const onCancelPayPal = () => {
    Swal.fire({ icon: 'info', text: 'PayPal payment cancelled.' });
  };

  return (
    <Backdrop>
      <ModalContainer>
        <Header>Domain Transfer Summary</Header>

        <Content>
          <Row><strong>Domain:</strong> {domain}{tld}</Row>
          <Row><strong>Transfer Fee:</strong> ₦{Number(baseAmount).toLocaleString()}</Row>
          <Row><strong>Total (incl. Tax):</strong> ₦{Number(amount).toLocaleString()}</Row>
        </Content>

        <Row>Please choose your preferred payment method:</Row>

        <Actions>
          <ButtonPrimary onClick={payWithPaystack}>Pay with Paystack</ButtonPrimary>

          <PayPalWrapper>
            <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: 'USD' }}>
              <PayPalButtons
                style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal' }}
                createOrder={createPayPalOrder}
                onApprove={onApprovePayPal}
                onError={onErrorPayPal}
                onCancel={onCancelPayPal}
              />
            </PayPalScriptProvider>
          </PayPalWrapper>

          <ButtonSecondary onClick={onClose}>Cancel</ButtonSecondary>
        </Actions>
      </ModalContainer>
    </Backdrop>
  );
};

export default PricingModalForDomainTransfer;

// ---------------- Styled Components ----------------
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0,0,0,0.2);
`;

const Header = styled.h2`
  margin: 0 0 24px;
  font-size: 1.8rem;
  text-align: center;
  color: #2b32b2;
`;

const Content = styled.div`
  margin-bottom: 20px;
`;

const Row = styled.p`
  margin: 10px 0;
  font-size: 1rem;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonPrimary = styled.button`
  padding: 14px;
  background-color: #2b32b2;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #1f259c;
  }
`;

const ButtonSecondary = styled.button`
  padding: 14px;
  background-color: lightgray;
  color: #333;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #bbb;
  }
`;

const PayPalWrapper = styled.div`
  margin-top: 10px;
`;
