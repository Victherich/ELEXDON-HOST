// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
// import { FaShieldAlt, FaLock, FaUser, FaEnvelope, FaPhone, FaGlobe, FaArrowLeft } from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import PaystackPop from "@paystack/inline-js";

// const PageContainer = styled.div`
//   font-family: "Inter", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   color: #1a202c;
//   background-color: #f8fafc;
//   min-height: 100vh;
//   padding: 40px 20px 80px 20px;
// `;

// const CheckoutWrapper = styled.div`
//   max-width: 900px;
//   margin: 0 auto;
// `;

// const BackButton = styled.button`
//   background: none;
//   border: none;
//   color: #4f46e5;
//   font-weight: 600;
//   font-size: 0.95rem;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   cursor: pointer;
//   margin-bottom: 25px;
//   padding: 0;

//   &:hover {
//     color: #3730a3;
//     text-decoration: underline;
//   }
// `;

// const CheckoutCard = styled.div`
//   background: #ffffff;
//   border-radius: 20px;
//   border: 1px solid #eae2f8;
//   box-shadow: 0 10px 30px rgba(79, 70, 229, 0.08);
//   overflow: hidden;
//   display: grid;
//   grid-template-columns: 1fr 1.2fr;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const SummaryPane = styled.div`
//   background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.98) 100%);
//   color: white;
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   .header {
//     .badge {
//       background: rgba(79, 70, 229, 0.3);
//       border: 1px solid #818cf8;
//       padding: 5px 12px;
//       border-radius: 20px;
//       font-size: 12px;
//       font-weight: 700;
//       text-transform: uppercase;
//       color: #c7d2fe;
//       display: inline-block;
//       margin-bottom: 15px;
//     }

//     h2 {
//       font-size: 1.8rem;
//       font-weight: 900;
//       margin: 0 0 10px 0;
//     }

//     p {
//       color: #cbd5e1;
//       font-size: 0.95rem;
//       line-height: 1.5;
//     }
//   }

//   .plan-summary-box {
//     background: rgba(255, 255, 255, 0.05);
//     border: 1px solid rgba(255, 255, 255, 0.1);
//     border-radius: 14px;
//     padding: 20px;
//     margin: 30px 0;

//     .plan-id-tag {
//       font-size: 0.8rem;
//       color: #94a3b8;
//       text-transform: uppercase;
//       letter-spacing: 0.5px;
//       margin-bottom: 4px;
//     }

//     .plan-name {
//       font-size: 1.1rem;
//       font-weight: 800;
//       color: #ffffff;
//       margin-bottom: 6px;
//       display: flex;
//       align-items: center;
//       gap: 8px;

//       svg {
//         color: #818cf8;
//       }
//     }

//     .plan-price-tag {
//       font-size: 1.6rem;
//       font-weight: 900;
//       color: #818cf8;

//       span {
//         font-size: 0.8rem;
//         color: #94a3b8;
//         font-weight: normal;
//       }
//     }
//   }

//   .security-note {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     font-size: 0.85rem;
//     color: #94a3b8;

//     svg {
//       color: #34d399;
//       font-size: 1.1rem;
//     }
//   }
// `;

// const FormPane = styled.div`
//   padding: 40px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   h3 {
//     font-size: 1.4rem;
//     font-weight: 800;
//     color: #0f172a;
//     margin-bottom: 20px;
//   }

//   .form-group {
//     margin-bottom: 18px;

//     label {
//       display: block;
//       font-size: 0.88rem;
//       font-weight: 700;
//       color: #334155;
//       margin-bottom: 6px;
//     }

//     .input-with-icon {
//       position: relative;

//       svg {
//         position: absolute;
//         left: 14px;
//         top: 50%;
//         transform: translateY(-50%);
//         color: #94a3b8;
//       }

//       input {
//         width: 100%;
//         padding: 12px 14px 12px 42px;
//         border: 1px solid #cbd5e1;
//         border-radius: 10px;
//         font-size: 0.95rem;
//         color: #0f172a;
//         background: #f8fafc;
//         transition: all 0.2s ease;
//         box-sizing: border-box;

//         &:focus {
//           outline: none;
//           border-color: #4f46e5;
//           background: #ffffff;
//           box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
//         }
//       }
//     }
//   }

//   .pay-btn {
//     background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
//     color: white;
//     border: none;
//     padding: 14px;
//     border-radius: 12px;
//     font-weight: 800;
//     font-size: 1rem;
//     cursor: pointer;
//     box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
//     transition: all 0.3s ease;
//     width: 100%;
//     margin-top: 10px;

//     &:hover {
//       background: linear-gradient(135deg, #4338ca 0%, #7e22ce 100%);
//       box-shadow: 0 6px 20px rgba(147, 51, 234, 0.4);
//     }

//     &:disabled {
//       opacity: 0.7;
//       cursor: not-allowed;
//     }
//   }
// `;

// const SSLCheckoutPage = () => {
// const navigate = useNavigate();

//   // Retrieve all plan details including the ID ex2clusively from localStorage
//   const storedPlan = JSON.parse(localStorage.getItem('checkout_ssl_plan')) || {};

//   const productId = storedPlan.productId || '';
//   const planName = storedPlan.name || 'SSL Certificate';
//   const total = storedPlan.numericPrice || 0;
//   const duration = storedPlan.duration || '/year';

//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [domain, setDomain] = useState('');
//   const [loading, setLoading] = useState(false);

//   const generateCustomReference = () => {
//     const timestamp = Date.now();
//     const randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
//     return `SSL-${timestamp}-${randomString}`;
//   };

//   const handleSubmit = async (reference) => {
//     setLoading(true);
//     try {
//       const payload = {
//         reference: reference,
//         productId: productId, // Sending product id from route params to backend
//         amount: total,
//         fullName: fullName,
//         email: email,
//         phone: phone,
//         domain: domain,
//         createdAt: new Date().toISOString()
//       };

//       const response = await fetch('https://your-backend-api.com/api/ssl-orders.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify(payload)
//       });

//       const data = await response.json();

//       if (response.ok || data.success) {
//         Swal.fire({
//           icon: 'success',
//           title: 'SSL Order Successful!',
//           text: `Reference: ${reference}. We have initiated your SSL setup for ${domain}.`,
//           confirmButtonText: 'View Dashboard'
//         }).then(() => {
//           navigate('/');
//         });
//       } else {
//         throw new Error(data.message || 'Failed to save order on the backend server.');
//       }
//     } catch (err) {
//       console.error('Backend Error:', err);
//       Swal.fire({
//         icon: 'warning',
//         title: 'Payment Successful, but Save Failed',
//         text: `Your payment was completed (Ref: ${reference}), but we encountered an issue recording it. Please contact support.`,
//         confirmButtonText: 'Okay'
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const payWithPaystack = () => {
//     if (!fullName || !email || !phone || !domain) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Missing Information',
//         text: 'Please fill in all required customer details and domain name before proceeding.'
//       });
//       return;
//     }

//     const customRef = generateCustomReference();

//     const paystack = new PaystackPop();
//     paystack.newTransaction({
//         //  key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
//       key: "pk_live_3626fe7772aaca28a10724ebb1f9727dfcc5d6cb",
//       amount: Math.ceil(total * 100),
//       email: email,
//       ref: customRef,
//       onSuccess: (transaction) => {
//         handleSubmit(transaction.reference || customRef);
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

//   return (
//     <PageContainer>
//       <CheckoutWrapper>
//         <BackButton onClick={() => navigate(-1)}>
//           <FaArrowLeft /> Back to SSL Plans
//         </BackButton>

//         <CheckoutCard>
//           <SummaryPane>
//             <div className="header">
//               <span className="badge">Secure Checkout</span>
//               <h2>Complete Your Order</h2>
//               <p>You are one step away from safeguarding your website visitors with premium encryption.</p>

//               <div className="plan-summary-box">
//                 <div className="plan-id-tag">Product ID: {productId}</div>
//                 <div className="plan-name">
//                   <FaShieldAlt /> {planName}
//                 </div>
//                 <div className="plan-price-tag">
//                   ₦{total.toLocaleString()}<span>{duration}</span>
//                 </div>
//               </div>
//             </div>

//             <div className="security-note">
//               <FaLock /> 256-bit Bank Grade SSL Encryption Guaranteed
//             </div>
//           </SummaryPane>

//           <FormPane>
//             <h3>Customer & Domain Details</h3>

//             <div className="form-group">
//               <label>Full Name</label>
//               <div className="input-with-icon">
//                 <FaUser />
//                 <input
//                   type="text"
//                   placeholder="e.g. Ebubechukwu Victor"
//                   value={fullName}
//                   onChange={(e) => setFullName(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Email Address</label>
//               <div className="input-with-icon">
//                 <FaEnvelope />
//                 <input
//                   type="email"
//                   placeholder="e.g. victor@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Phone Number</label>
//               <div className="input-with-icon">
//                 <FaPhone />
//                 <input
//                   type="tel"
//                   placeholder="e.g. 08012345678"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Target Domain Name to Secure</label>
//               <div className="input-with-icon">
//                 <FaGlobe />
//                 <input
//                   type="text"
//                   placeholder="e.g. mywebsite.com"
//                   value={domain}
//                   onChange={(e) => setDomain(e.target.value)}
//                   required
//                 />
//               </div>
//             </div>

//             <button
//               className="pay-btn"
//               onClick={payWithPaystack}
//               disabled={loading}
//             >
//               {loading ? 'Processing Order...' : `Pay ₦${total.toLocaleString()} with Paystack`}
//             </button>
//           </FormPane>
//         </CheckoutCard>
//       </CheckoutWrapper>
//     </PageContainer>
//   );
// };

// export default SSLCheckoutPage;


import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaLock, FaUser, FaEnvelope, FaPhone, FaGlobe, FaArrowLeft, FaKey } from 'react-icons/fa';
import Swal from 'sweetalert2';
import PaystackPop from "@paystack/inline-js";
import { Context } from './Context';


const PageContainer = styled.div`
  font-family: "Inter", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1a202c;
  background-color: #f8fafc;
  min-height: 100vh;
  padding: 80px 20px 80px 20px;
`;

const CheckoutWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #4f46e5;
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 25px;
  padding: 0;

  &:hover {
    color: #3730a3;
    text-decoration: underline;
  }
`;

const CheckoutCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #eae2f8;
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.08);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1.2fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SummaryPane = styled.div`
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.98) 100%);
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .header {
    .badge {
      background: rgba(79, 70, 229, 0.3);
      border: 1px solid #818cf8;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      color: #c7d2fe;
      display: inline-block;
      margin-bottom: 15px;
    }

    h2 {
      font-size: 1.8rem;
      font-weight: 900;
      margin: 0 0 10px 0;
    }

    p {
      color: #cbd5e1;
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }

  .plan-summary-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 14px;
    padding: 20px;
    margin: 30px 0;

    .plan-id-tag {
      font-size: 0.8rem;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }

    .plan-name {
      font-size: 1.1rem;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: #818cf8;
      }
    }

    .plan-price-tag {
      font-size: 1.6rem;
      font-weight: 900;
      color: #818cf8;

      span {
        font-size: 0.8rem;
        color: #94a3b8;
        font-weight: normal;
      }
    }
  }

  .security-note {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.85rem;
    color: #94a3b8;

    svg {
      color: #34d399;
      font-size: 1.1rem;
    }
  }
`;

const FormPane = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 1.4rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 18px;

    label {
      display: block;
      font-size: 0.88rem;
      font-weight: 700;
      color: #334155;
      margin-bottom: 6px;
    }

    .input-with-icon {
      position: relative;

      svg {
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        color: #94a3b8;
      }

      input {
        width: 100%;
        padding: 12px 14px 12px 42px;
        border: 1px solid #cbd5e1;
        border-radius: 10px;
        font-size: 0.95rem;
        color: #0f172a;
        background: #f8fafc;
        transition: all 0.2s ease;
        box-sizing: border-box;

        &:focus {
          outline: none;
          border-color: #4f46e5;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
      }
    }
  }

  .action-btn, .pay-btn {
    background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
    color: white;
    border: none;
    padding: 14px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
    transition: all 0.3s ease;
    width: 100%;
    margin-top: 10px;

    &:hover {
      background: linear-gradient(135deg, #4338ca 0%, #7e22ce 100%);
      box-shadow: 0 6px 20px rgba(147, 51, 234, 0.4);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .verified-badge {
    font-size: 0.82rem;
    color: #10b981;
    font-weight: 700;
    margin-top: 4px;
  }
`;

const SSLCheckoutPage = () => {
  const navigate = useNavigate();
const {api_domain, paystack_key, handleSendServiceNotification}=useContext(Context);
  const storedPlan = JSON.parse(localStorage.getItem('checkout_ssl_plan')) || {};
  const productId = storedPlan.productId || '';
  const planName = storedPlan.name || 'SSL Certificate';
  const total = storedPlan.numericPrice || 0;
  const duration = storedPlan.duration || '/year';

  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [verifyingEmail, setVerifyingEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);

  // Step 1: Verify Email against backend database
  const handleVerifyEmail = async () => {
    if (!email || !email.includes('@')) {
      Swal.fire({ icon: 'warning', title: 'Invalid Email', text: 'Please enter a valid email address.' });
      return;
    }

    if (!confirmEmail || email !== confirmEmail) {
      Swal.fire({ icon: 'warning', title: 'Email Mismatch', text: 'Please confirm your email address.' });
      return;
    }
    setVerifyingEmail(true);
    try {
      const response = await fetch(`${api_domain}/verify_email.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();

      setIsEmailVerified(true);
      if (data.exists) {
        setUserExists(true);
        Swal.fire({ icon: 'info', title: 'Welcome Back!', text: 'Account found. Please enter your password to sign in.' });
      } else {
        setUserExists(false);
        Swal.fire({ icon: 'success', title: 'New Customer', text: 'Email available. Please fill in your details to create an account.' });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({ icon: 'error', title: 'Error', text: 'Could not verify email. Please try again.' });
    } finally {
      setVerifyingEmail(false);
    }
  };

  const generateCustomReference = () => {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `SSL-${timestamp}-${randomString}`;
  };

  // Step 2: Final Submission after successful Paystack Payment
  const handleCheckoutCompletion = async (reference) => {
       Swal.fire({
          text:"Please wait..."
        })
        Swal.showLoading();
    setLoading(true);
    try {
      const payload = {
        reference,
        productId,
        amount: total,
        email,
        domain,
        userExists,
        password: userExists ? password : password,
        fullName: userExists ? '' : fullName,
        phone: userExists ? '' : phone,
        createdAt: new Date().toISOString()
      };

      const response = await fetch(`${api_domain}/verify_and_checkout_ssl.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.removeItem('checkout_ssl_plan');
        if (data.user) {
          localStorage.setItem('user2', JSON.stringify(data.user));
        }
handleSendServiceNotification("SSL", email)
        Swal.fire({
          icon: 'success',
          title: 'SSL Order Successful!',
          text: `Reference: ${reference}. Your order for ${domain} has been created and activation is in progress.`,
          confirmButtonText: 'Go to Dashboard'
        }).then(() => {
          navigate('/dashboard2');
        });
      } else {
        throw new Error(data.message || 'Failed to complete order on the server.');
      }
    } catch (err) {
      console.error('Backend Error:', err);
      Swal.fire({
        icon: 'warning',
        title: 'Payment Successful, but Processing Failed',
        text: `Payment completed (Ref: ${reference}), but account/product linkage encountered an error. Please contact support.`,
        confirmButtonText: 'Okay'
      });
    } finally {
      setLoading(false);
    }
  };

  // Step 3: Trigger Paystack Gateway
  // const payWithPaystack = () => {
  //   if (!domain) {
  //     Swal.fire({ icon: 'error', title: 'Missing Domain', text: 'Please enter the target domain name to secure.' });
  //     return;
  //   }

  //   if (userExists && !password) {
  //     Swal.fire({ icon: 'error', title: 'Password Required', text: 'Please enter your account password to authenticate.' });
  //     return;
  //   }


  //     if (!userExists && (!fullName || !phone || !password || !confirmPassword)) {
  //     Swal.fire({ icon: 'error', title: 'Missing Information', text: 'Please fill in all required fields.' });
  //     return;
  //   }

  //   if (!userExists && password !== confirmPassword) {
  //     Swal.fire({ icon: 'error', title: 'Password Mismatch', text: 'Passwords do not match. Please re-enter.' });
  //     return;
  //   }

  //   const customRef = generateCustomReference();
  //   const paystack = new PaystackPop();

  //   paystack.newTransaction({
  //       key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
  //     // key: "pk_live_3626fe7772aaca28a10724ebb1f9727dfcc5d6cb",
  //     amount: Math.ceil(total * 100),
  //     email: email,
  //     ref: customRef,
  //     onSuccess: (transaction) => {
  //       handleCheckoutCompletion(transaction.reference || customRef);
  //     },
  //     onCancel: () => {
  //       Swal.fire({ icon: "warning", text: "Payment cancelled by user." });
  //     },
  //     onError: (error) => {
  //       Swal.fire({ icon: "error", title: "Payment Failed", text: error.message || "An unknown error occurred." });
  //     }
  //   });
  // };




// Step 3: Trigger Paystack Gateway
  const payWithPaystack = async () => {
    if (!domain) {
      Swal.fire({ icon: 'error', title: 'Missing Domain', text: 'Please enter the target domain name to secure.' });
      return;
    }

    if (userExists && !password) {
      Swal.fire({ icon: 'error', title: 'Password Required', text: 'Please enter your account password to authenticate.' });
      return;
    }

    if (!userExists && (!fullName || !phone || !password || !confirmPassword)) {
      Swal.fire({ icon: 'error', title: 'Missing Information', text: 'Please fill in all required fields.' });
      return;
    }

    if (!userExists && password !== confirmPassword) {
      Swal.fire({ icon: 'error', title: 'Password Mismatch', text: 'Passwords do not match. Please re-enter.' });
      return;
    }

    // IF EXISTING USER: Verify password and log them in FIRST before opening payment
    if (userExists) {
      setLoading(true);
      try {
        const authResponse = await fetch(`${api_domain}/login_user.php`, { // or your existing login endpoint
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const authData = await authResponse.json();

        if (!authResponse.ok || !authData.success) {
          setLoading(false);
          Swal.fire({ icon: 'error', title: 'Login Failed', text: authData.message || 'Invalid password.' });
          return;
        }

        // Save logged-in user data immediately
        if (authData.user) {
          localStorage.setItem('user2', JSON.stringify(authData.user));
        }
      } catch (err) {
        setLoading(false);
        Swal.fire({ icon: 'error', title: 'Authentication Error', text: 'Could not log you in. Please check your password.' });
        return;
      } finally {
        setLoading(false);
      }
    }

    // PROCEED TO PAYSTACK PAYMENT
    const customRef = generateCustomReference();
    const paystack = new PaystackPop();

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
        paystack.newTransaction({
          key: paystack_key,
          amount: Math.ceil(total * 100),
          email: email,
          ref: customRef,
          onSuccess: (transaction) => {
            handleCheckoutCompletion(transaction.reference || customRef);
          },
          onCancel: () => {
            Swal.fire({ icon: "warning", text: "Payment cancelled by user." });
          },
          onError: (error) => {
            Swal.fire({ icon: "error", title: "Payment Failed", text: error.message || "An unknown error occurred." });
          }
        });
      } 
    });
    };
  



  return (
    <PageContainer>
      <CheckoutWrapper>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back to SSL Plans
        </BackButton>

        <CheckoutCard>
          <SummaryPane>
            <div className="header">
              <span className="badge">Secure Checkout</span>
              <h2>Complete Your Order</h2>
              <p>You are one step away from safeguarding your website visitors with premium encryption.</p>

              <div className="plan-summary-box">
                <div className="plan-id-tag">Product ID: {productId}</div>
                <div className="plan-name">
                  <FaShieldAlt /> {planName}
                </div>
                <div className="plan-price-tag">
                  ₦{total.toLocaleString()}<span>{duration}</span>
                </div>
              </div>
            </div>

            <div className="security-note">
              <FaLock /> 256-bit Bank Grade SSL Encryption Guaranteed
            </div>
          </SummaryPane>

          <FormPane>
            <h3>Customer & Domain Details</h3>

            {/* Email Input & Verify Button */}
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-with-icon">
                <FaEnvelope />
                <input
                  type="email"
                  placeholder="e.g. yourname@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailVerified(false);
                  }}
                  disabled={isEmailVerified}
                  required
                />
              </div>
<br/>
              <label>Confirm Email Address</label>
              <div className="input-with-icon">
                <FaEnvelope />
                <input
                  type="email"
                  placeholder="e.g. yourname@example.com"
                  value={confirmEmail}
                  onChange={(e) => {
                    setConfirmEmail(e.target.value);
                    // setIsEmailVerified(false);
                  }}
                  // disabled={isEmailVerified}
                  required
                />
              </div>

              {!isEmailVerified ? (
                <button 
                  className="action-btn" 
                  type="button" 
                  onClick={handleVerifyEmail}
                  disabled={verifyingEmail}
                >
                  {verifyingEmail ? 'Verifying Email...' : 'Verify Email'}
                </button>
              ) : (
                <div className="verified-badge">✓ Email Verified ({userExists ? 'Existing Account' : 'New Account'})</div>
              )}
            </div>

            {/* If User Exists: Show Password Field */}
            {isEmailVerified && userExists && (
              <div className="form-group">
                <label>Account Password</label>
                <div className="input-with-icon">
                  <FaKey />
                  <input
                    type="password"
                    placeholder="Enter your password to login"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            {/* If User Does Not Exist: Show Registration Fields */}
            {isEmailVerified && !userExists && (
              <>
                <div className="form-group">
                  <label>Full Name</label>
                  <div className="input-with-icon">
                    <FaUser />
                    <input
                      type="text"
                      placeholder="e.g. Your Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <div className="input-with-icon">
                    <FaPhone />
                    <input
                      type="tel"
                      placeholder="e.g. Your Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Create Password</label>
                  <div className="input-with-icon">
                    <FaKey />
                    <input
                      type="password"
                      placeholder="Create a secure password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <div className="input-with-icon">
                    <FaKey />
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {/* Target Domain Input */}
            <div className="form-group">
              <label>Target Domain Name to Secure (Ensure to enter the correct domain name and that your domain is already registered.)</label>
              <div className="input-with-icon">
                <FaGlobe />
                <input
                  type="text"
                  placeholder="e.g. yourwebsite.com"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Pay Button (Available only after email is verified) */}
            {isEmailVerified && (
              <button
                className="pay-btn"
                onClick={payWithPaystack}
                disabled={loading}
              >
                {loading ? 'Processing Order...' : `Pay ₦${total.toLocaleString()} with Paystack`}
              </button>
            )}
          </FormPane>
        </CheckoutCard>
      </CheckoutWrapper>
    </PageContainer>
  );
};

export default SSLCheckoutPage;