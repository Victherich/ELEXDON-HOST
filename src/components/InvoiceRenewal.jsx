

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "../Images/herobg5.jpg";
import logo from "../Images/logo4.jpeg";
import { useParams, useNavigate } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import Swal from  'sweetalert2'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PageWrapper = styled.div`
  background: url(${bg}) no-repeat center center/cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
padding-top:100px;
  position: relative;

  &::before {
    content: "";
    background: rgba(255, 255, 255, 0.85);
    position: absolute;
    inset: 0;
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Logo = styled.img`
  max-width: 160px;
  display: block;
  margin: 0 auto 1.5rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    color: #2b32b2;
    margin: 0;
  }

  p {
    margin: 5px 0;
  }
`;

const BillingInfo = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;

  > div {
    flex: 1;
    min-width: 260px;
  }

  h2 {
    color: #2b32b2;
    margin-bottom: 0.5rem;
  }
`;

const TableContainer = styled.div` 
    width:100%;
    overflow-x:scroll;
`


const InvoiceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;

  th,
  td {
    padding: 10px 15px;
    border: 1px solid #ccc;
  }

  th {
    background: #eaf0ff;
    color: #2b32b2;
  }
`;

const Summary = styled.div`
  text-align: right;
  font-weight: 500;
  margin-bottom: 2rem;

  p {
    margin: 0.3rem 0;
  }

  strong {
    font-weight: bold;
  }
`;

const PaymentSection = styled.div`
  text-align: center;
`;

const PayButton = styled.a`
  background: #2b32b2;
  color: white;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  border-radius: 12px;
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s;
  cursor:pointer;

  &:hover {
    background: #1e2a91;
  }
`;

const Message = styled.p`
  text-align: center;
  font-weight: bold;
  padding: 1rem;
  color: ${({ error }) => (error ? "red" : "#333")};
`;

const D = styled.div`
    display:none;

    @media(max-width:884px){
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
           }
`

const InvoiceRenewal = () => {
    const {invoiceId}=useParams();
  const [invoice, setInvoice] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
const navigate = useNavigate();
const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://www.elexdonhost.com/api_elexdonhost/get_invoice_by_id.php?id=${invoiceId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setInvoice(data.invoice);
          getUser(data.invoice.userid)
          console.log(data)
        } else {
          setError(data.message);
        }
      })
      .catch(() => setError("Failed to fetch invoice."))
      .finally(() => setLoading(false));
  }, [invoiceId]);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: invoice?.currency || "NGN",
    }).format(amount);



  const getUser = (clientId) => {
  fetch(`https://www.elexdonhost.com/api_elexdonhost/get_user_by_id.php?id=${clientId}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.success === true) {
        console.log('Client data:', data.client);
        setUser(data.client); // save to state if needed
      } else {
        setError(data.message || "Failed to fetch client.");
      }
    })
    .catch(() => setError("Request failed."));
};




const payWithPaystack = (totalAmount) => {
  if (!invoice || !user?.email || !user?.fullname) {
    Swal.fire({ icon: "warning", text: "Missing invoice or user information.", showConfirmButton: true });
    return;
  }

  const paystack = new PaystackPop();
  paystack.newTransaction({
    key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
    // key: "pk_live_3626fe7772aaca28a10724ebb1f9727dfcc5d6cb", // LIVE KEY
    amount: totalAmount * 100, // in kobo
    email: user.email,
    firstname: user.fullname,

    onSuccess: (transaction) => {
      Swal.fire({ icon: "info", title: "Verifying payment...", showConfirmButton: false, allowOutsideClick: false });

      fetch("https://www.elexdonhost.com/api_elexdonhost/verify_and_mark_paid2.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          reference: transaction.reference,
          invoiceid: invoice.invoiceid
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          Swal.fire({
            icon: "success",
            title: "Payment Successful!",
            text: "Your invoice has been marked as paid.",
            confirmButtonText: "OK"
          }).then(() => {
            // Optional: reload or redirect
            // window.location.reload();
            navigate('/login')
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Payment Verified but Failed",
            text: data.message || "Failed to mark invoice as paid.",
            confirmButtonText: "OK"
          });
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Verification Error",
          text: "Could not verify payment or mark invoice as paid.",
          confirmButtonText: "OK"
        });
      });
    },

    onCancel: () => {
      Swal.fire({ icon: "warning", text: "Payment cancelled by user.", showConfirmButton: true });
    },

    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Payment Failed",
        text: error.message || "An unknown error occurred.",
        showConfirmButton: true
      });
    }
  });
};






  return (
  <PageWrapper>
  <Container>
    <Logo src={logo} alt="Logo" />
    {loading ? (
      <Message>Loading invoice...</Message>
    ) : error ? (
      <Message error>{error}</Message>
    ) : (
      <>
        <Header>
          <h1>Invoice #{invoice?.invoiceid}</h1>
          <p>Status: <strong>{invoice?.status}</strong></p>
          <p>Due Date: {invoice?.duedate}</p>
        </Header>

        <BillingInfo>
          <div>
            <h2>Bill To</h2>
            {/* These fields depend on your invoice being extended with client info — otherwise remove */}
            <p>{user?.fullname || 'Client Name'}</p>
<p>Email: {user?.email}</p>

            <p>{invoice?.address1}</p>
            <p>{invoice?.city}, {invoice?.state} {invoice?.postcode}</p>
            <p>{invoice?.country}</p>
       
          </div>

          <div>
            <h2>Invoice Info</h2>
            <p>Invoice Date: {invoice?.date}</p>
            <p>Invoice Total: <strong>{formatCurrency(invoice?.total)}</strong></p>
            <p>Balance Due: <strong>{formatCurrency(invoice?.balance)}</strong></p>
          </div>
        </BillingInfo>
<D style={{textAlign:"center"}}><FaArrowLeft/> <p>SCROLL</p>  <FaArrowRight/> </D>
       
       <TableContainer>
         <InvoiceTable>
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {(invoice?.items?.item || []).map((item, idx) => {
              const qty = item.qty || 1;
              const amount = parseFloat(item.amount);
              return (
                <tr key={idx}>
                  <td>{item.description}</td>
                  <td>{qty}</td>
                  <td>{formatCurrency(amount / qty)}</td>
                  <td>{formatCurrency(amount)}</td>
                </tr>
              );
            })}
          </tbody>
        </InvoiceTable>

       </TableContainer>
       
       
      
        <Summary>
          <p>Subtotal: {formatCurrency(invoice?.subtotal)}</p>
          <p>Tax: {formatCurrency(invoice?.tax)}</p>
          <p><strong>Total: {formatCurrency(invoice?.total)}</strong></p>
          <p><strong>Balance Due: {formatCurrency(invoice?.balance)}</strong></p>
        </Summary>

        {parseFloat(invoice?.balance) > 0 && (
          <PaymentSection>
            <PayButton onClick={()=>payWithPaystack(invoice?.total)}>
              Pay Now
            </PayButton>
          </PaymentSection>
        )}
      </>
    )}
  </Container>
</PageWrapper>

  );
};

export default InvoiceRenewal;


