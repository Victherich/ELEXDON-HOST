

// import React, { useContext, useEffect, useState } from "react";
// import styled from "styled-components";
// import bg from "../Images/herobg5.jpg";
// import logo from "../Images/logo4.jpeg";
// import { useParams, useNavigate } from "react-router-dom";
// import PaystackPop from "@paystack/inline-js";
// import Swal from  'sweetalert2'
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Context } from "./Context";

// const PageWrapper = styled.div`
//   background: url(${bg}) no-repeat center center/cover;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 2rem;
// padding-top:100px;
//   position: relative;

//   &::before {
//     content: "";
//     background: rgba(255, 255, 255, 0.85);
//     position: absolute;
//     inset: 0;
//     z-index: 1;
//   }

//   > * {
//     position: relative;
//     z-index: 2;
//   }
// `;

// const Container = styled.div`
//   max-width: 900px;
//   width: 100%;
//   background: rgba(255, 255, 255, 0.7);
//   padding: 2rem;
//   border-radius: 20px;
//   box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// `;

// const Logo = styled.img`
//   max-width: 160px;
//   display: block;
//   margin: 0 auto 1.5rem;
// `;

// const Header = styled.header`
//   text-align: center;
//   margin-bottom: 2rem;

//   h1 {
//     color: #2b32b2;
//     margin: 0;
//   }

//   p {
//     margin: 5px 0;
//   }
// `;

// const BillingInfo = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 2rem;
//   margin-bottom: 2rem;

//   > div {
//     flex: 1;
//     min-width: 260px;
//   }

//   h2 {
//     color: #2b32b2;
//     margin-bottom: 0.5rem;
//   }
// `;

// const TableContainer = styled.div` 
//     width:100%;
//     overflow-x:scroll;
// `


// const InvoiceTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   margin-bottom: 2rem;

//   th,
//   td {
//     padding: 10px 15px;
//     border: 1px solid #ccc;
//   }

//   th {
//     background: #eaf0ff;
//     color: #2b32b2;
//   }
// `;

// const Summary = styled.div`
//   text-align: right;
//   font-weight: 500;
//   margin-bottom: 2rem;

//   p {
//     margin: 0.3rem 0;
//   }

//   strong {
//     font-weight: bold;
//   }
// `;

// const PaymentSection = styled.div`
//   text-align: center;
// `;

// const PayButton = styled.a`
//   background: #2b32b2;
//   color: white;
//   padding: 0.9rem 2rem;
//   font-size: 1.1rem;
//   border-radius: 12px;
//   text-decoration: none;
//   display: inline-block;
//   transition: background 0.3s;
//   cursor:pointer;

//   &:hover {
//     background: #1e2a91;
//   }
// `;

// const Message = styled.p`
//   text-align: center;
//   font-weight: bold;
//   padding: 1rem;
//   color: ${({ error }) => (error ? "red" : "#333")};
// `;

// const D = styled.div`
//     display:none;

//     @media(max-width:884px){
//         display:flex;
//         justify-content:center;
//         align-items:center;
//         width:100%;
//            }
// `

// const InvoicePage = () => {
//     const {invoiceId}=useParams();
//   const [invoice, setInvoice] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
// const navigate = useNavigate();
// const [user, setUser] = useState(null);
// const {api_domain, api_key}=useContext(Context)

//   useEffect(() => {
//     fetch(`${api_domain}/get_invoice_by_id.php?id=${invoiceId}&key=${api_key}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setInvoice(data.invoice);
//           getUser(data.invoice.userid)
//           console.log(data)
//         } else {
//           setError(data.message);
//         }
//       })
//       .catch(() => setError("Failed to fetch invoice."))
//       .finally(() => setLoading(false));
//   }, [invoiceId]);

//   const formatCurrency = (amount) =>
//     new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: invoice?.currency || "NGN",
//     }).format(amount);



//   const getUser = (clientId) => {
//   fetch(`https://www.elexdonhost.com/api_elexdonhost/get_user_by_id.php?id=${clientId}`)
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.success === true) {
//         console.log('Client data:', data.client);
//         setUser(data.client); // save to state if needed
//       } else {
//         setError(data.message || "Failed to fetch client.");
//       }
//     })
//     .catch(() => setError("Request failed."));
// };





// const payWithPaystack = (totalAmount) => {
//   if (!invoice || !user?.email || !user?.fullname) {
//     Swal.fire({ icon: "warning", text: "Missing invoice or user information.", showConfirmButton: true });
//     return;
//   }

//   const paystack = new PaystackPop();
//   paystack.newTransaction({
//     // key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
//     key: "pk_live_3626fe7772aaca28a10724ebb1f9727dfcc5d6cb", // LIVE KEY
//     amount: totalAmount * 100, // in kobo
//     email: user.email,
//     firstname: user.fullname,

//     onSuccess: (transaction) => {
//       Swal.fire({ icon: "info", title: "Verifying payment...", showConfirmButton: false, allowOutsideClick: false });

//       fetch("https://www.elexdonhost.com/api_elexdonhost/verify_and_mark_paid.php", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           reference: transaction.reference,
//           invoiceid: invoice.invoiceid
//         })
//       })
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           Swal.fire({
//             icon: "success",
//             title: "Payment Successful!",
//             text: "Your invoice has been marked as paid.",
//             confirmButtonText: "OK"
//           }).then(() => {
//             // Optional: reload or redirect
//             // window.location.reload();
//             navigate('/login')
//           });
//         } else {
//           Swal.fire({
//             icon: "error",
//             title: "Payment Verified but Failed",
//             text: data.message || "Failed to mark invoice as paid.",
//             confirmButtonText: "OK"
//           });
//         }
//       })
//       .catch(() => {
//         Swal.fire({
//           icon: "error",
//           title: "Verification Error",
//           text: "Could not verify payment or mark invoice as paid.",
//           confirmButtonText: "OK"
//         });
//       });
//     },

//     onCancel: () => {
//       Swal.fire({ icon: "warning", text: "Payment cancelled by user.", showConfirmButton: true });
//     },

//     onError: (error) => {
//       Swal.fire({
//         icon: "error",
//         title: "Payment Failed",
//         text: error.message || "An unknown error occurred.",
//         showConfirmButton: true
//       });
//     }
//   });
// };






//   return (
//   <PageWrapper>
//   <Container>
//     <Logo src={logo} alt="Logo" />
//     {loading ? (
//       <Message>Loading invoice...</Message>
//     ) : error ? (
//       <Message error>{error}</Message>
//     ) : (
//       <>
//         <Header>
//           <h1>Invoice #{invoice?.invoiceid}</h1>
//           <p>Status: <strong>{invoice?.status}</strong></p>
//           <p>Due Date: {invoice?.duedate}</p>
//         </Header>

//         <BillingInfo>
//           <div>
//             <h2>Bill To</h2>
//             {/* These fields depend on your invoice being extended with client info — otherwise remove */}
//             <p>{user?.fullname || 'Client Name'}</p>
// <p>Email: {user?.email}</p>

//             <p>{invoice?.address1}</p>
//             <p>{invoice?.city}, {invoice?.state} {invoice?.postcode}</p>
//             <p>{invoice?.country}</p>
       
//           </div>

//           <div>
//             <h2>Invoice Info</h2>
//             <p>Invoice Date: {invoice?.date}</p>
//             <p>Invoice Total: <strong>{formatCurrency(invoice?.total)}</strong></p>
//             <p>Balance Due: <strong>{formatCurrency(invoice?.balance)}</strong></p>
//           </div>
//         </BillingInfo>
// <D style={{textAlign:"center"}}><FaArrowLeft/> <p>SCROLL</p>  <FaArrowRight/> </D>
       
//        <TableContainer>
//          <InvoiceTable>
//           <thead>
//             <tr>
//               <th>Description</th>
//               <th>Qty</th>
//               <th>Unit Price</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {(invoice?.items?.item || []).map((item, idx) => {
//               const qty = item.qty || 1;
//               const amount = parseFloat(item.amount);
//               return (
//                 <tr key={idx}>
//                   <td>{item.description}</td>
//                   <td>{qty}</td>
//                   <td>{formatCurrency(amount / qty)}</td>
//                   <td>{formatCurrency(amount)}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </InvoiceTable>

//        </TableContainer>
       
       
      
//         <Summary>
//           <p>Subtotal: {formatCurrency(invoice?.subtotal)}</p>
//           <p>Tax: {formatCurrency(invoice?.tax)}</p>
//           <p><strong>Total: {formatCurrency(invoice?.total)}</strong></p>
//           <p><strong>Balance Due: {formatCurrency(invoice?.balance)}</strong></p>
//         </Summary>

//         {parseFloat(invoice?.balance) > 0 && (
//           <PaymentSection>
//             <PayButton onClick={()=>payWithPaystack(invoice?.total)}>
//               Pay Now
//             </PayButton>
//           </PaymentSection>
//         )}
//       </>
//     )}
//   </Container>
// </PageWrapper>

//   );
// };

// export default InvoicePage;




import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../Images/logo4.jpeg";
import { useParams, useNavigate } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import Swal from 'sweetalert2';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Context } from "./Context";
import { Link } from 'react-router-dom';

// -----------------------------------------------------
// Animations & Theme Colors (Matching UserProfile)
// -----------------------------------------------------
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// -----------------------------------------------------
// Styled Components
// -----------------------------------------------------
const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 2.5rem auto;
  padding: 0 20px;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.4s ease-out;

  @media (max-width: 968px) {
    padding: 0 15px;
  }
`;

const Container = styled.div`
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 20px;
  padding: 36px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Logo = styled.img`
  max-width: 140px;
  display: block;
  margin: 0 auto 10px;
  object-fit: contain;
`;

const WelcomeBanner = styled.div`
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  color: #ffffff;
  padding: 24px 28px;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
    font-weight: 500;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #ffffff;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  width: fit-content;
  
  background-color: ${({ status }) =>
    status === 'Paid' ? '#dcfce7' :
    status === 'Unpaid' ? '#fee2e2' :
    '#fef3c7'};

  color: ${({ status }) =>
    status === 'Paid' ? '#166534' :
    status === 'Unpaid' ? '#991b1b' :
    '#92400e'};
`;

const BillingInfo = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  background: #f8fafc;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  h2 {
    font-size: 1rem;
    font-weight: 700;
    color: #0F172A;
    margin: 0 0 4px 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  p {
    font-size: 0.95rem;
    color: #475569;
    margin: 0;
    font-weight: 500;
  }
`;

const TableContainer = styled.div` 
  width: 100%;
  overflow-x: auto;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
`;

const InvoiceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.95rem;

  th,
  td {
    padding: 14px 20px;
    border-bottom: 1px solid #E2E8F0;
  }

  th {
    background: #f8fafc;
    color: #475569;
    font-weight: 600;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  td {
    color: #0F172A;
    font-weight: 500;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  padding: 16px 20px;
  background: #f8fafc;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  font-size: 0.95rem;
  color: #475569;

  p {
    margin: 0;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 250px;
  }

  strong {
    color: #0F172A;
    font-weight: 700;
  }

  .total-row {
    font-size: 1.1rem;
    color: #4f46e5;
    border-top: 1px solid #E2E8F0;
    padding-top: 8px;
    margin-top: 4px;
  }
`;

const PaymentSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PayButton = styled.button`
  background: #4f46e5;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 14px 32px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);

  &:hover {
    background: #4338ca;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(79, 70, 229, 0.35);
  }
`;

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  width: 100%;
  gap: 16px;
  text-align: center;
  font-family: 'Inter', sans-serif;

  h3 {
    color: #0F172A;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }

  p {
    color: #64748B;
    font-size: 0.95rem;
    margin: 0;
  }
`;

const LoaderSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #E2E8F0;
  border-top: 3px solid #4f46e5;
  border-radius: 50%;
  animation: ${Spinner} 0.8s linear infinite;
`;

const ScrollHint = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #64748B;
  font-size: 0.85rem;
  font-weight: 500;

  @media(max-width: 884px) {
    display: flex;
  }
`;

// -----------------------------------------------------
// Component Definition
// -----------------------------------------------------
const InvoicePage = () => {
  const { invoiceId } = useParams();
  const [invoice, setInvoice] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { api_domain, api_key, paystack_key , handleSendServiceNotification} = useContext(Context);

  console.log(user)

  useEffect(() => {
    fetch(`${api_domain}/get_invoice_by_id.php?id=${invoiceId}&key=${api_key}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setInvoice(data.invoice);
          getUser(data.invoice.userid);
        } else {
          setError(data.message || "Failed to load invoice.");
        }
      })
      .catch(() => setError("Failed to fetch invoice."))
      .finally(() => setLoading(false));
  }, [invoiceId, api_domain, api_key]);

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: invoice?.currency || "NGN",
    }).format(amount);

  const getUser = (clientId) => {
    fetch(`${api_domain}/get_user_by_id.php?id=${clientId}&key=${api_key}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setUser(data.client);
        } else {
          setError(data.message || "Failed to fetch client details.");
        }
      })
      .catch(() => setError("Client request failed."));
  };

  const payWithPaystack = (totalAmount) => {
    if (!invoice || !user?.email || !user?.fullname) {
      Swal.fire({ icon: "warning", text: "Missing invoice or user information.", confirmButtonColor: '#4f46e5' });
      return;
    }


    // Determine service type based on invoice description items
    const itemsDescription = (invoice?.items?.item || [])
      .map(item => item.description.toLowerCase())
      .join(' ');

    let serviceType = "HOSTING OR DOMAIN RENEWAL";
    if ((itemsDescription.includes('renewal') || itemsDescription.includes('renew')) && 
        (itemsDescription.includes('domain'))) {
      serviceType = "DOMAIN_RENEWAL";
    } else if ((itemsDescription.includes('renewal') || itemsDescription.includes('renew')) && 
               (itemsDescription.includes('hosting') || itemsDescription.includes('host'))) {
      serviceType = "HOSTING_RENEWAL";
    }

    
        let timerInterval;
        Swal.fire({
          icon: 'info',
          title: 'Initializing Payment...',
          html: 'Opening payment gateway in <b></b> seconds.<br/><br/><i><strong>Do not refresh or close this page while making the payment.</strong></i>',
          timer: 15000,
          timerProgressBar: true,
          showConfirmButton: false,
          allowOutsideClick: false,
          didOpen: () => {
            const b = Swal.getHtmlContainer().querySelector('b');
            timerInterval = setInterval(() => {
              const timeLeft = Swal.getTimerLeft();
              if (timeLeft) {
                b.textContent = (timeLeft / 1000).toFixed(0);
              }
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
          didClose: () => { 

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key:paystack_key, // LIVE KEY
      amount: totalAmount * 100, // in kobo
      email: user.email,
      firstname: user.fullname,

      onSuccess: (transaction) => {
        Swal.fire({ icon: "info", title: "Please wait...", showConfirmButton: false, allowOutsideClick: false });

        fetch(`${api_domain}/verify_and_mark_paid.php?key=${api_key}`, {
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
               handleSendServiceNotification(serviceType, user?.email)
              Swal.fire({
                icon: "success",
                title: "Payment Successful!",
                text: "Your invoice has been marked as paid.",
                confirmButtonText: "OK",
                confirmButtonColor: '#4f46e5'
              }).then(() => {
                navigate('/login');
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Payment Verified but Failed",
                text: data.message || "Failed to mark invoice as paid.",
                confirmButtonText: "OK",
                confirmButtonColor: '#4f46e5'
              });
            }
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Verification Error",
              text: "Could not verify payment or mark invoice as paid.",
              confirmButtonText: "OK",
              confirmButtonColor: '#4f46e5'
            });
          });
      },

      onCancel: () => {
        Swal.fire({ icon: "warning", text: "Payment cancelled by user.", confirmButtonColor: '#4f46e5' });
      },

      onError: (err) => {
        Swal.fire({
          icon: "error",
          title: "Payment Failed",
          text: err.message || "An unknown error occurred.",
          showConfirmButton: true,
          confirmButtonColor: '#4f46e5'
        });
      }
    })
  }})
  };

  if (loading) {
    return (
      <PageWrapper>
        <Container>
          <StateContainer>
            <LoaderSpinner />
            <h3>Loading invoice details...</h3>
            <p>Please wait while we retrieve your billing statement.</p>
          </StateContainer>
        </Container>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper>
        <Container>
          <StateContainer>
            <h3 style={{ color: '#EF4444' }}>Unable to load invoice</h3>
            <p>{error}</p>
          </StateContainer>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container>
        <Logo src={logo} alt="Logo" />


<p>
  <Link to="/dashboard" style={{ textDecoration: 'underline', fontWeight:"bold", color: 'blue', cursor: 'pointer' }}>
    <FaArrowLeft /> Back
  </Link>
</p>
        <WelcomeBanner>
          <div>
            <p>Invoice Statement</p>
            <Title>Invoice #{invoice?.invoiceid}</Title>
          </div>
          <div>
            <p>Status</p>
            <StatusBadge status={invoice?.status}>{invoice?.status}</StatusBadge>
          </div>
        </WelcomeBanner>

        <BillingInfo>
          <div>
            <h2>Bill To</h2>
            <p><strong>{user?.fullname || 'Client Name'}</strong></p>
            <p>{user?.email}</p>
            <p>{invoice?.address1}</p>
            <p>{invoice?.city}, {invoice?.state} {invoice?.postcode}</p>
            <p>{invoice?.country}</p>
          </div>

          <div>
            <h2>Invoice Details</h2>
            <p><strong>Invoice Date:</strong> {invoice?.date}</p>
            <p><strong>Due Date:</strong> {invoice?.duedate}</p>
            <p><strong>Invoice Total:</strong> {formatCurrency(invoice?.total)}</p>
            <p><strong>Balance Due:</strong> {formatCurrency(invoice?.balance)}</p>
          </div>
        </BillingInfo>

        <ScrollHint>
          <FaArrowLeft /> Scroll table horizontally to view more <FaArrowRight />
        </ScrollHint>

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
          <p><span>Subtotal:</span> {formatCurrency(invoice?.subtotal)}</p>
          <p><span>Tax:</span> {formatCurrency(invoice?.tax)}</p>
          <p className="total-row"><span>Total:</span> <strong>{formatCurrency(invoice?.total)}</strong></p>
          <p><span>Balance Due:</span> <strong>{formatCurrency(invoice?.balance)}</strong></p>
        </Summary>

        {parseFloat(invoice?.balance) > 0 && (
          <PaymentSection>
            <PayButton onClick={() => payWithPaystack(invoice?.total)}>
              Pay Now ({formatCurrency(invoice?.total)})
            </PayButton>
          </PaymentSection>
        )}
      </Container>
    </PageWrapper>
  );
};

export default InvoicePage;