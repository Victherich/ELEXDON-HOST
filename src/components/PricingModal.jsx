
// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { useContext } from 'react';
// import { Context } from './Context';
// import ReactDOM from 'react-dom'; // ⬅️ import this
// import PaystackPop from "@paystack/inline-js";
// import Swal from 'sweetalert2';

// const Overlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
// `;


// const ModalContainer = styled.div`
//   background: #fff;
//   border-radius: 16px;
//   width: 100%;
//   max-width: 480px;
//   max-height: 90vh;
//   padding: 10px;
//   box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
//   overflow-y: auto;
//   z-index: 1100;
// `;


// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Title = styled.h2`
//   font-size: 1.25rem;
//   font-weight: 900;
//   color:#2b32b2;
// `;

// const CloseButton = styled.button`
//   background: transparent;
//   border: none;
//   font-size: 1.5rem;
//   line-height: 1;
//   cursor: pointer;
//   color: #888;
//   &:hover {
//     color: #e00;
//   }
// `;

// const Section = styled.div`
//   margin-top: 10px;
//   padding: 10px;
//   background: rgba(0,0,255,0.1);
//   border-radius: 12px;
// `;

// const Label = styled.h3`
//   font-weight: 900;
//   margin-bottom: 0.5rem;
//   color:#2b32b2;
// `;

// const Info = styled.p`
//   margin: 0.25rem 0;
// //   color: #111;
//   font-size: 0.9rem;
// `;

// const Total = styled.div`
//   margin-top: 2rem;
//   text-align: right;
//   font-size: 1.2rem;
//   font-weight: bold;
//   color:#2b32b2;
// `;


// const Button = styled.button`
//   width: 100%;
//   background: #2b32b2;
//   color: white;
//   padding: 1rem;
//   border: none;
//   border-radius: 12px;
//   font-size: 1rem;
//   font-weight: bold;
//   margin-top: 10px;
//   cursor: pointer;

//   &:hover {
//     background: #1e2a91;
//   }

 
// `;

// const PricingModal = ({ isOpen, onClose, product, tld, domainName, domainType, billingCycle, email, handleSubmit, checkoutType }) => {

//   const { domainPricings }=useContext(Context);
// const domain = domainPricings.find((e)=>e.domain===tld)



// console.log(product)


// const [domainPrice, setDomainPrice] = useState (0)

// useEffect(()=>{
//     const handleDomainPriceSetting =()=>{
//         if(domainType==='register'){
//             setDomainPrice(domain.register)
//         }else if(domainType==='owndomain'){
//             setDomainPrice(0)
//         }else if(domainType==='transfer'){
//             setDomainPrice(domain.transfer)
//         }
//     };

//     handleDomainPriceSetting();
// },[])




// const [hostingPrice, setHostingPrice] = useState(0);

// useEffect(()=>{
//     const handleHostingPriceSetting =()=>{
//         if(billingCycle==='monthly'){
//             setHostingPrice(product.pricing.NGN.monthly)
//         } else if(billingCycle==='annually'){
//             setHostingPrice(product.pricing.NGN.annually)
//         }
//     };
//     handleHostingPriceSetting()
// },[])

//   if (!isOpen) return null;

//   const total = (parseFloat(domainPrice) || 0) + (parseFloat(hostingPrice) || 0);



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
//     // if (!invoice || !user?.email || !user?.fullname) {
//     //   Swal.fire({ icon: "warning", text: "Missing invoice or user information.", showConfirmButton: true });
//     //   return;
//     // }
  
//     const paystack = new PaystackPop();
//     paystack.newTransaction({
//       // key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
//       key: "pk_live_3626fe7772aaca28a10724ebb1f9727dfcc5d6cb", // LIVE KEY
//       amount: total * 100 * 1.075, // in kobo
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


//  const handleVerify = async (reference) => {
//     // if (!reference.trim()) {
//     //   Swal.fire('Missing Reference', 'Please enter a transaction reference.', 'warning');
//     //   return;
//     // }

//     const loading = Swal.fire({
//       title: 'Verifying Payment...',
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading();
//       }
//     });

//     try {
//       const response = await fetch('https://www.elexdonhost.com/api_elexdonhost/verify_payment.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ reference })
//       });

//       const result = await response.json();

//       if (result.success) {
//         handleSubmit(reference);
//         Swal.fire({
//           title: 'Success verified, Please wait...!',
//           text: result.message,
//           icon: 'success',
//           confirmButtonText: 'OK'
//         });
//       } else {
//         Swal.fire({
//           title: 'Verification Failed',
//           text: result.message,
//           icon: 'error',
//           confirmButtonText: 'Try Again'
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         title: 'Error',
//         text: 'An error occurred while verifying the payment.',
//         icon: 'error',
//         confirmButtonText: 'Close'
//       });
//     }
//   };




// return isOpen
//   ? ReactDOM.createPortal(
//       (
//         <Overlay>
//           <ModalContainer>
//             <Header>
//               <Title>Order Summary</Title>
//               <CloseButton onClick={onClose}>&times;</CloseButton>
//             </Header>

//             {domain && (
//               <Section>
//                 <Label>Domain</Label>
//                 <Info>Name: {domainName}{domain.domain}</Info>
//                 <Info>Type: {domainType}</Info>
//                 <Info style={{ fontWeight: "bold", color: "#333" }}>
//                   Price: ₦{domainPrice.toLocaleString()}
//                 </Info>
//               </Section>
//             )}

//             {product && (
//               <Section>
//                 <Label>Hosting</Label>
//                 <Info>Plan: {product.name} </Info>
//                 <Info>Description: {product.description}</Info>
//                 <Info>Billing Cycle: {billingCycle}</Info>
//                 <Info style={{ fontWeight: "bold", color: "#333" }}>
//                   Price: ₦{hostingPrice.toLocaleString()}
//                 </Info>
//               </Section>
//             )}

//             <Total>Total: ₦{total.toLocaleString()}</Total>
//             <Button onClick={checkUserRegistration}>Pay Now</Button>
//             <Button style={{background:"gray"}} onClick={onClose}>Cancel</Button>
//           </ModalContainer>
//         </Overlay>
//       ),
//       document.body // ✅ attach modal directly to the <body>
//     )
//   : null;

// };

// export default PricingModal;











import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { Context } from './Context';
import ReactDOM from 'react-dom';
import PaystackPop from "@paystack/inline-js";
import Swal from 'sweetalert2';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  padding: 10px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  z-index: 1100;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 900;
  color:#2b32b2;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  color: #888;
  &:hover {
    color: #e00;
  }
`;

const Section = styled.div`
  margin-top: 10px;
  padding: 10px;
  background: rgba(0,0,255,0.1);
  border-radius: 12px;
`;

const Label = styled.h3`
  font-weight: 900;
  margin-bottom: 0.5rem;
  color:#2b32b2;
`;

const Info = styled.p`
  margin: 0.25rem 0;
  font-size: 0.9rem;
`;

const Total = styled.div`
  margin-top: 2rem;
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
  color:#2b32b2;
`;

const Button = styled.button`
  width: 100%;
  background: #2b32b2;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background: #1e2a91;
  }
`;

// IMPORTANT: PayPal Client ID. Use your live PayPal Client ID.
const PAYPAL_CLIENT_ID = 'AY3JP-UI68WChZpC_0f7oTadUrItrOcSwqL2E4GVFJHfo-4QPabv308FQRUTfmDS4jfNFYi9AbLZh9iV';

const PricingModal = ({ isOpen, onClose, product, tld, domainName, domainType, billingCycle, email, handleSubmit, checkoutType, currency }) => {
  const { domainPricings } = useContext(Context);
  const domain = domainPricings.find((e) => e.domain === tld);

  const [domainPrice, setDomainPrice] = useState(0);
  const [hostingPrice, setHostingPrice] = useState(0);

  useEffect(() => {
    const handleDomainPriceSetting = () => {
      if (domainType === 'register') {
        setDomainPrice(domain.register);
      } else if (domainType === 'owndomain') {
        setDomainPrice(0);
      } else if (domainType === 'transfer') {
        setDomainPrice(domain.transfer);
      }
    };
    handleDomainPriceSetting();
  }, [domainType, domain]);

  useEffect(() => {
    const handleHostingPriceSetting = () => {
      if (billingCycle === 'monthly') {
        setHostingPrice(product.pricing.NGN.monthly);
      } else if (billingCycle === 'annually') {
        setHostingPrice(product.pricing.NGN.annually);
      }
    };
    handleHostingPriceSetting();
  }, [billingCycle, product]);

  if (!isOpen) return null;

  const total = (parseFloat(domainPrice) || 0) + (parseFloat(hostingPrice) || 0);

  // Paystack logic
  const checkUserRegistration = () => {
    Swal.fire({
      title: 'Checking user...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    fetch('https://www.elexdonhost.com/api_elexdonhost/check_user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        if (checkoutType === false) {
          Swal.fire({
            icon: 'warning',
            title: 'User Found',
            text: 'You already have an account. Kindly go back and check the "i have an account box" and then proceed',
          });
        } else {
          payWithPaystack();
        }
      } else {
        if (checkoutType === false) {
          payWithPaystack();
        } else {
          Swal.fire({
            icon: 'warning',
            title: 'You do not have an account. Kindly go back and uncheck the "i have an account box" and then proceed.',
            text: data.message,
          });
        }
      }
    })
    .catch(error => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while checking the user.',
      });
    });
  };

  const payWithPaystack = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_live_3626fe7772aaca28a10724ebb1f9727dfcc5d6cb",
      amount: Math.ceil(total * 1.075 * 100),
      email: email,
      onSuccess: (transaction) => {
        handleVerify(transaction.reference);
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

  const handleVerify = async (reference) => {
    Swal.fire({
      title: 'Verifying Payment...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    try {
      const response = await fetch('https://www.elexdonhost.com/api_elexdonhost/verify_payment.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ reference })
      });
      const result = await response.json();
      if (result.success) {
        handleSubmit(reference);
        Swal.fire({
          title: 'Success verified, Please wait...!',
          text: result.message,
          icon: 'success',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Verification Failed',
          text: result.message,
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'An error occurred while verifying the payment.',
        icon: 'error',
        confirmButtonText: 'Close'
      });
    }
  };

  // PayPal Logic
  const createPayPalOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: product.name,
          amount: {
            currency_code: currency,
            value: total,
          },
        },
      ],
    });
  };

  const onApprovePayPal = async (data, actions) => {
    Swal.fire({ text: 'Processing payment...', allowOutsideClick: false });
    Swal.showLoading();
    try {
      const order = await actions.order.capture();
      console.log('PayPal Order:', order);
      handleSubmit(order.id);
      Swal.fire({
        icon: 'success',
        text: 'PayPal payment successful!',
        confirmButtonText: 'OK'
      });
      onClose();
    } catch (error) {
      console.error('Error capturing PayPal payment:', error);
      Swal.fire({ icon: 'error', text: `PayPal payment failed: ${error.message}` });
    }
  };

  const onErrorPayPal = (err) => {
    console.error('PayPal error:', err);
    Swal.fire({ icon: 'error', text: `PayPal error: ${err.message || 'An unknown error occurred.'}` });
  };

  const onCancelPayPal = (data) => {
    console.log('PayPal payment cancelled:', data);
    Swal.fire({ icon: 'info', text: 'PayPal payment cancelled.' });
  };

  return isOpen
    ? ReactDOM.createPortal(
      (
        <Overlay>
          <ModalContainer>
            <Header>
              <Title>Order Summary</Title>
              <CloseButton onClick={onClose}>&times;</CloseButton>
            </Header>

            {domain && (
              <Section>
                <Label>Domain</Label>
                <Info>Name: {domainName}{domain.domain}</Info>
                <Info>Type: {domainType}</Info>
                <Info style={{ fontWeight: "bold", color: "#333" }}>
                  Price: ₦{domainPrice.toLocaleString()}
                </Info>
              </Section>
            )}

            {product && (
              <Section>
                <Label>Hosting</Label>
                <Info>Plan: {product.name} </Info>
                <Info>Description: {product.description}</Info>
                <Info>Billing Cycle: {billingCycle}</Info>
                <Info style={{ fontWeight: "bold", color: "#333" }}>
                  Price: ₦{hostingPrice.toLocaleString()}
                </Info>
              </Section>
            )}

            <Total>Total: ₦{total.toLocaleString()}</Total>
            
            <Button onClick={checkUserRegistration}>Pay with Paystack</Button>

            {/* PayPal buttons will only render if the currency is 'USD' */}
            
              <div style={{ marginTop: '10px' }}>
                <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: 'USD' }}>
                  <PayPalButtons
                    style={{ layout: 'vertical', color: 'gold', shape: 'rect', label: 'paypal' }}
                    createOrder={createPayPalOrder}
                    onApprove={onApprovePayPal}
                    onError={onErrorPayPal}
                    onCancel={onCancelPayPal}
                  />
                </PayPalScriptProvider>
              </div>
            
            
            <Button style={{ background: "gray" }} onClick={onClose}>Cancel</Button>
          </ModalContainer>
        </Overlay>
      ),
      document.body
    )
    : null;
};

export default PricingModal;
