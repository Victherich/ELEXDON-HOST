

// import React, { useState } from "react";
// import styled from "styled-components";
// import { Fade, Zoom } from "react-awesome-reveal";
// import PaystackPop from "@paystack/inline-js";
// import Swal from 'sweetalert2';
// import wmimg from '../Images/wmimg.jpg'


// // Background image asset
// import domainsearchimg from "../Images/emailhosting.jpg"; 

// // ==========================================
// // STYLED COMPONENTS (Simplified Hero & Max 10px Padding/Margin/Gaps)
// // ==========================================

// const PageWrapper = styled.div`
//   font-family: "Inter", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   color: #1a202c;
//   background-color: #f7fafc;
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// `;

// const HeroSection = styled.section`
//   width: 100%;
//   padding: 60px 10px;
//   background-image: linear-gradient(
//       135deg,
//       rgba(15, 23, 42, 0.82) 0%,
//       rgba(30, 27, 75, 0.88) 100%
//     ),
//     url(${domainsearchimg});
//   background-size: cover;
//   background-position: center;
//   position: relative;
//   overflow: hidden;
//   border-radius: 0 0 16px 16px;
//   box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
//   margin: 0 0 20px 0;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const HeroContainer = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 0 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 12px;
// `;

// const HeroTitle = styled.h1`
//   font-size: clamp(2.2rem, 4vw, 3rem);
//   font-weight: 900;
//   color: #ffffff;
//   line-height: 1.2;
//   margin: 0;

//   span {
//     background: linear-gradient(135deg, #818cf8, #c084fc);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
// `;

// const HeroDescription = styled.p`
//   font-size: 1.05rem;
//   color: #cbd5e1;
//   line-height: 1.6;
//   margin: 0;
//   max-width: 650px;
// `;

// // Standard Packages Section
// const PackagesSection = styled.section`
//   padding: 20px 10px;
//   background: #f7fafc;
// `;

// const SectionTitle = styled.h2`
//   text-align: center;
//   color: #0f172a;
//   font-size: 2rem;
//   margin: 0 0 15px 0;
// `;

// const PackagesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 15px;
//   max-width: 1000px;
//   margin: 0 auto;
//   padding: 0;
// `;

// const PackageCard = styled.div`
//   background: #ffffff;
//   border-radius: 12px;
//   padding: 15px;
//   box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
//   transition: transform 0.3s;
//   border-top: 4px solid #4f46e5;
//   margin: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   &:hover {
//     transform: translateY(-4px);
//   }
// `;

// const PackageTitle = styled.h3`
//   font-size: 1.3rem;
//   margin: 0;
//   color: #0f172a;
// `;

// const PackagePrice = styled.p`
//   font-size: 1.1rem;
//   font-weight: bold;
//   margin: 0;
//   background: linear-gradient(135deg, #4f46e5, #9333ea);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const FeatureList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// `;

// const FeatureItem = styled.li`
//   margin: 0;
//   color: #475569;
//   font-size: 0.95rem;
//   &::before {
//     content: "✔";
//     color: #9333ea;
//     margin-right: 8px;
//     font-weight: bold;
//   }
// `;

// const PlanButton = styled.a`
//   display: inline-block;
//   background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
//   color: #ffffff;
//   padding: 10px;
//   border-radius: 8px;
//   text-decoration: none;
//   font-weight: bold;
//   text-align: center;
//   margin: 5px 0 0 0;
//   transition: 0.3s;
//   &:hover {
//     opacity: 0.9;
//   }
// `;

// // Split Section for Form & Info
// const ContentSplitSection = styled.section`
//   max-width: 1000px;
//   margin: 20px auto;
//   padding: 10px;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 20px;

//   @media (max-width: 992px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const InfoColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   // justify-content: center;
//   margin: 0;
//   padding: 0;
//   gap: 10px;
// `;

// const FormColumn = styled.div`
//   background: #ffffff;
//   padding: 20px;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
//   border: 1px solid #eae2f8;
//   margin: 0;
// `;

// const FormTitle = styled.h3`
//   color: #0f172a;
//   font-size: 1.4rem;
//   margin: 0 0 12px 0;
//   border-bottom: 2px solid #f1f5f9;
//   padding-bottom: 8px;
// `;

// const FormGroup = styled.div`
//   margin: 0 0 10px 0;
// `;

// const Label = styled.label`
//   display: block;
//   margin: 0 0 6px 0;
//   font-weight: 600;
//   color: #1e293b;
//   font-size: 0.9rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #dcd6f7;
//   border-radius: 8px;
//   font-size: 0.95rem;
//   color: #1e293b;
//   box-sizing: border-box;
//   margin: 0;
//   transition: border-color 0.3s ease;

//   &:focus {
//     outline: none;
//     border-color: #4f46e5;
//   }
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #dcd6f7;
//   border-radius: 8px;
//   font-size: 0.95rem;
//   color: #1e293b;
//   box-sizing: border-box;
//   resize: vertical;
//   min-height: 60px;
//   margin: 0;
//   transition: border-color 0.3s ease;

//   &:focus {
//     outline: none;
//     border-color: #4f46e5;
//   }
// `;

// const RadioGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   margin: 8px 0 0 0;
// `;

// const RadioLabel = styled.label`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   padding: 10px;
//   border: 1px solid ${props => props.checked ? '#4f46e5' : '#dcd6f7'};
//   background-color: ${props => props.checked ? '#f7f5ff' : '#ffffff'};
//   border-radius: 8px;
//   cursor: pointer;
//   font-weight: 500;
//   margin: 0;
//   transition: all 0.3s ease;

//   &:hover {
//     border-color: #4f46e5;
//   }
// `;

// const RadioInput = styled.input`
//   accent-color: #4f46e5;
//   margin: 0;
//   transform: scale(1.1);
// `;

// const PriceTag = styled.span`
//   margin-left: auto;
//   font-weight: 700;
//   background: linear-gradient(135deg, #4f46e5, #9333ea);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const NoticeText = styled.p`
//   font-size: 0.85rem;
//   color: #64748b;
//   margin: 10px 0;
//   line-height: 1.4;

//   a {
//     color: #4f46e5;
//     text-decoration: none;
//     &:hover { text-decoration: underline; }
//   }
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
//   color: #ffffff;
//   border: none;
//   padding: 12px;
//   font-size: 1rem;
//   font-weight: 600;
//   border-radius: 8px;
//   cursor: pointer;
//   margin: 0;
//   transition: opacity 0.3s ease;

//   &:hover {
//     opacity: 0.9;
//   }
// `;

// const ActivationBlock = styled.div`
//   background-color: #f7f5ff;
//   border-left: 4px solid #4f46e5;
//   padding: 12px;
//   border-radius: 0 8px 8px 0;
//   margin: 15px 0 0 0;
// `;

// const ActivationTitle = styled.h4`
//   color: #0f172a;
//   margin: 0 0 6px 0;
//   font-size: 1rem;
// `;

// const ActivationPhone = styled.span`
//   font-weight: bold;
//   background: linear-gradient(135deg, #4f46e5, #9333ea);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-size: 1.05rem;
// `;

// const WhatsAppButtonContainer = styled.div`
//   margin: 10px 0 0 0;
//   display: flex;
//   justify-content: center;
//   padding: 0;
// `;

// const WhatsAppAnchor = styled.a`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   background-color: #25D366;
//   color: #ffffff;
//   text-decoration: none;
//   font-weight: 600;
//   font-size: 0.95rem;
//   padding: 10px;
//   border-radius: 8px;
//   box-shadow: 0 4px 10px rgba(37, 211, 102, 0.2);
//   transition: all 0.3s ease;
//   width: 100%;
//   box-sizing: border-box;
//   margin: 0;

//   &:hover {
//     background-color: #20ba5a;
//     transform: translateY(-2px);
//     box-shadow: 0 6px 14px rgba(37, 211, 102, 0.3);
//     color: #ffffff;
//   }

//   &:active {
//     transform: translateY(0);
//   }
// `;

// // ==========================================
// // MAIN COMBINED COMPONENT EXPORT
// // ==========================================



// const packages = [
//   {id:1,
//     title: "Email Plus Core",
//     price: "NGN 20,000 / user / month",
//     features: [
//       "10 GB Mailbox per user",
//       "Webmail & Mobile Access",
//       "Advanced Spam Protection",
//       "Custom Domain Emails",
//       "99.9% Uptime Guarantee"
//     ],
//     buttonText: "Get Started",
//     buttonHref: "#order-form"
//   },
//   {id:2,
//     title: "Email Plus Workspace",
//     price: "NGN 25,000 / user / month",
//     features: [
//       "30 GB Mailbox per user",
//       "Collaboration Tools & Calendars",
//       "File Storage & Sharing",
//       "Video Conferencing Support",
//       "Priority Customer Support"
//     ],
//     buttonText: "Get Started",
//     buttonHref: "#order-form"
//   }
// ];





// export default function EmailHostingPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     email: '',
//     phone: '',
//     domain: '',
//     extension: 'dot_com',
//     customExtension: ''
//   });

//   const handleChange = (e) => {
//     let { name, value } = e.target;

//     // Sanitize domain field inputs
//     if (name === 'domain') {
//       value = value
//         .toLowerCase()
//         .replace(/\s+/g, '')
//         .replace(/\.(com|ng|org|net|biz|gov|edu|ltd|co)(\..*)?$/g, '')
//         .replace(/[^a-zA-Z0-9-]/g, '');
//     }

//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Compute Dynamic Pricing Structures
//   const getPrice = () => {
//     switch (formData.extension) {
//       case 'dot_com':
//         return 35000;
//       case 'dot_com_ng':
//         return 25000;
//       case 'dot_ng':
//         return 30000;
//       case 'other':
//       default:
//         return 0;
//     }
//   };

//   const total = getPrice();

//   const handleBackendSubmit = async (paymentReference = null) => {
//     const isOther = formData.extension === 'other';
    
//     let extensionName = '';
//     if (formData.extension === 'dot_com') extensionName = '.com';
//     else if (formData.extension === 'dot_com_ng') extensionName = '.com.ng';
//     else if (formData.extension === 'dot_ng') extensionName = '.ng';
//     else extensionName = formData.customExtension;

//     const payload = {
//       name: formData.name,
//       address: formData.address,
//       email: formData.email,
//       phone: formData.phone,
//       domain: formData.domain,
//       extension: extensionName, 
//       price: total,
//       paymentReference: paymentReference || 'N/A',
//     };

//     if (isOther) {
//       payload.customExtension = formData.customExtension;
//     }

//     Swal.fire({
//       title: 'Processing Order...',
//       text: 'Please wait while we log your webmail setup request.',
//       allowOutsideClick: false,
//       allowEscapeKey: false,
//       didOpen: () => {
//         Swal.showLoading();
//       }
//     });

//     try {
//       const response = await fetch('https://elexdonhost.com/api_elexdonhost/submit_webmail_request.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify(payload)
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP network fault error! Status: ${response.status}`);
//       }

//       const result = await response.json();

//       if (result.success) {
//         Swal.fire({
//           icon: 'success',
//           title: 'Order Completed!',
//           text: result.message,
//           confirmButtonColor: '#4f46e5'
//         });
        
//         setFormData({
//           name: '',
//           address: '',
//           email: '',
//           phone: '',
//           domain: '',
//           extension: 'dot_com',
//           customExtension: ''
//         });
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'Setup Failed',
//           text: result.error,
//           confirmButtonColor: '#4f46e5'
//         });
//       }

//     } catch (error) {
//       console.error("Transmission error occurred: ", error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Connection Error',
//         text: 'Could not connect to the deployment server. Please verify your network and try again.',
//         confirmButtonColor: '#4f46e5'
//       });
//     }
//   };

//   const payWithPaystack = () => {
//     const preventRefresh = (e) => {
//       e.preventDefault();
//       e.returnValue = "Payment processing. Please do not close or refresh this page.";
//       return e.returnValue;
//     };

//     window.addEventListener('beforeunload', preventRefresh);

//     Swal.fire({
//       icon: 'info',
//       title: 'Initializing...',
//       text: 'Do not refresh or close this page while making this payment',
//       showConfirmButton: false,
//       timer: 3500,
//       timerProgressBar: true,
//       allowOutsideClick: false,
//       didClose: () => {
//         const paystack = new PaystackPop();
//         paystack.newTransaction({
//           key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
//           amount: Math.ceil(total * 100),
//           email: formData.email,
//           onSuccess: (transaction) => {
//             window.removeEventListener('beforeunload', preventRefresh);
//             handleBackendSubmit(transaction.reference);
//           },
//           onCancel: () => {
//             window.removeEventListener('beforeunload', preventRefresh);
//             Swal.fire({ 
//               icon: "warning", 
//               text: "Payment cancelled by user.", 
//               showConfirmButton: true,
//               confirmButtonColor: '#4f46e5'
//             });
//           },
//           onError: (error) => {
//             window.removeEventListener('beforeunload', preventRefresh);
//             Swal.fire({
//               icon: "error",
//               title: "Payment Failed",
//               text: error.message || "An unknown error occurred.",
//               showConfirmButton: true,
//               confirmButtonColor: '#4f46e5'
//             });
//           }
//         });
//       }
//     });
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formData.extension === 'other') {
//       handleBackendSubmit();
//     } else {
//       payWithPaystack();
//     }
//   };

//   const phoneNumber = "2347066911338"; 
//   const defaultMessage = encodeURIComponent("Hello, I just completed the Webmail Setup form and would like to activate my order.");
//   const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

//   return (
//     <PageWrapper>
//       {/* 1. Simplified Hero Section with Background Image and Dark Overlay */}
//       <HeroSection>
//         <HeroContainer>
//           <Zoom triggerOnce={false}>
//             <HeroTitle>
//               Professional <span>Corporate Webmail</span> Hosting
//             </HeroTitle>
//             <HeroDescription>
//               Build instant trust with clients using your own custom domain name. Fast, secure, and fully synced across all devices.
//             </HeroDescription>
//           </Zoom>
//         </HeroContainer>
//       </HeroSection>

//       {/* 2. Packages Grid Section */}
//       <PackagesSection id="packages">
//         <SectionTitle>Email Hosting Packages</SectionTitle>
//         <Fade cascade damping={0.2} triggerOnce={false}>
// <PackagesGrid>
//   {packages.map((pkg, index) => (
//     <PackageCard key={index}>
//       <PackageTitle>{pkg.title}</PackageTitle>
//       <PackagePrice>{pkg.price}</PackagePrice>
//       <FeatureList>
//         {pkg.features.map((feature, i) => (
//           <FeatureItem key={i}>{feature}</FeatureItem>
//         ))}
//       </FeatureList>
//       <PlanButton href={pkg.buttonHref}>{pkg.buttonText}</PlanButton>
//     </PackageCard>
//   ))}
// </PackagesGrid>
//         </Fade>
//       </PackagesSection>

//       {/* 3. Form and Dynamic Checkout Area */}
//       <ContentSplitSection id="order-form">
//         <InfoColumn>
//           <h2 style={{ color: '#0f172a', fontSize: '1.8rem', margin: '0 0 10px 0' }}>Setup Your Account Easily</h2>
//           <p style={{ color: '#475569', lineHeight: '1.5', fontSize: '1rem', margin: '0 0 10px 0' }}>
//             Fill out the request architecture form accurately. Our server operators set up your infrastructure immediately following payment confirmation logs.
//           </p>
//           <p style={{ color: '#475569', lineHeight: '1.5', fontSize: '1rem', margin: '0 0 10px 0' }}>
//             Ensure you spell your desired target domain name perfectly. Double-check all spellings before proceeding to prevent setup alignment adjustments.
//           </p>
          
//           <img 
//             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
//             alt="Business Workflow Analytics" 
//             style={{ width: '100%', borderRadius: '12px', margin: '10px 0 0 0', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)' }}
//           />
//            <img 
//             src={wmimg} 
//             alt="Business Workflow Analytics" 
//             style={{ width: '100%', borderRadius: '12px', margin: '10px 0 0 0', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)' }}
//           />
//         </InfoColumn>

//         <FormColumn>
//           <FormTitle>Webmail Setup Form</FormTitle>
//           <form onSubmit={handleSubmit}>
            
//             <FormGroup>
//               <Label htmlFor="name">Full Name / Business Title</Label>
//               <Input 
//                 type="text" 
//                 id="name" 
//                 name="name" 
//                 value={formData.name} 
//                 onChange={handleChange} 
//                 placeholder="e.g., John Doe Enterprises" 
//                 required 
//               />
//             </FormGroup>

//             <FormGroup>
//               <Label htmlFor="address">Contact Address</Label>
//               <TextArea 
//                 id="address" 
//                 name="address" 
//                 value={formData.address} 
//                 onChange={handleChange} 
//                 placeholder="Enter structural business location or street details" 
//                 required 
//               />
//             </FormGroup>

//             <FormGroup>
//               <Label htmlFor="email">Current Active Email Address</Label>
//               <Input 
//                 type="email" 
//                 id="email" 
//                 name="email" 
//                 value={formData.email} 
//                 onChange={handleChange} 
//                 placeholder="For status logs updates (e.g. name@gmail.com)" 
//                 required 
//               />
//             </FormGroup>

//             <FormGroup>
//               <Label htmlFor="phone">Phone Number</Label>
//               <Input 
//                 type="tel" 
//                 id="phone" 
//                 name="phone" 
//                 value={formData.phone} 
//                 onChange={handleChange} 
//                 placeholder="e.g., 08012345678" 
//                 required 
//               />
//             </FormGroup>

//             <FormGroup>
//               <Label htmlFor="domain">Desired Custom Domain Name</Label>
//               <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', margin: '0 0 6px 0', fontWeight:"bold" }}>
//                 Enter your brand name only (do not add .com or .ng)
//               </span>
//               <Input 
//                 type="text" 
//                 id="domain" 
//                 name="domain" 
//                 value={formData.domain} 
//                 onChange={handleChange} 
//                 placeholder="e.g., echobyteconcept" 
//                 required 
//               />
//             </FormGroup>

//             <FormGroup>
//               <Label>Select Extension</Label>
//               <RadioGroup>
//                 <RadioLabel checked={formData.extension === 'dot_com'}>
//                   <RadioInput 
//                     type="radio" 
//                     name="extension" 
//                     value="dot_com" 
//                     checked={formData.extension === 'dot_com'} 
//                     onChange={handleChange} 
//                   />
//                   Serve Webmail with .com
//                   <PriceTag>₦35,000</PriceTag>
//                 </RadioLabel>

//                 <RadioLabel checked={formData.extension === 'dot_com_ng'}>
//                   <RadioInput 
//                     type="radio" 
//                     name="extension" 
//                     value="dot_com_ng" 
//                     checked={formData.extension === 'dot_com_ng'} 
//                     onChange={handleChange} 
//                   />
//                   Serve Webmail with .com.ng
//                   <PriceTag>₦25,000</PriceTag>
//                 </RadioLabel>

//                 <RadioLabel checked={formData.extension === 'dot_ng'}>
//                   <RadioInput 
//                     type="radio" 
//                     name="extension" 
//                     value="dot_ng" 
//                     checked={formData.extension === 'dot_ng'} 
//                     onChange={handleChange} 
//                   />
//                   Serve Webmail with .ng
//                   <PriceTag>₦30,000</PriceTag>
//                 </RadioLabel>

//                 <RadioLabel checked={formData.extension === 'other'}>
//                   <RadioInput 
//                     type="radio" 
//                     name="extension" 
//                     value="other" 
//                     checked={formData.extension === 'other'} 
//                     onChange={handleChange} 
//                   />
//                   Other TLD Extensions
//                   <PriceTag>Contact Us</PriceTag>
//                 </RadioLabel>
//               </RadioGroup>
//             </FormGroup>

//             {/* Conditional Input for Custom Extension */}
//             {formData.extension === 'other' && (
//               <FormGroup>
//                 <Label htmlFor="customExtension">Specify Your Domain Extension</Label>
//                 <Input 
//                   type="text" 
//                   id="customExtension" 
//                   name="customExtension" 
//                   value={formData.customExtension} 
//                   onChange={handleChange} 
//                   placeholder="e.g., .org, .net, .biz" 
//                   required 
//                 />
//               </FormGroup>
//             )}

//             <NoticeText>
//               * Please note that terms &amp; conditions apply to all ongoing provisioning agreements.
//             </NoticeText>

//             <SubmitButton type="submit">
//               {formData.extension === 'other' ? 'Submit Order Form' : `Proceed to Pay ₦${total.toLocaleString()}`}
//             </SubmitButton>

//           </form>

//           <ActivationBlock>
//             <ActivationTitle>After Payment &amp; Transfer Activation Notice</ActivationTitle>
//             <p style={{ margin: '0 0 8px 0', fontSize: '0.85rem', color: '#475569', lineHeight: '1.4' }}>
//               Send your <b>Proof of Payment</b> and <b>"ACTIVATE"</b> to: <ActivationPhone>07066911338</ActivationPhone>
//             </p>
//             <WhatsAppButtonContainer>
//               <WhatsAppAnchor href={whatsappUrl} target="_blank" rel="noopener noreferrer">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 4.933 1.504 5.485 0 9.949-4.464 9.952-9.949.001-2.656-1.026-5.153-2.892-7.019C16.774 1.824 14.283.796 11.625.796c-5.49 0-9.957 4.463-9.96 9.948-.001 1.905.513 3.766 1.492 5.395l-1.017 3.714 3.821-.1.086-.046zM17.51 14.86c-.28-.14-1.65-.814-1.906-.907-.255-.094-.44-.14-.625.14-.185.281-.716.907-.878 1.093-.162.186-.324.208-.605.068-.28-.14-1.18-.435-2.249-1.39-0.832-.742-1.393-1.658-1.557-1.939-.163-.28-.017-.431.122-.571.126-.126.28-.328.42-.492.14-.164.185-.281.28-.469.095-.188.047-.352-.023-.492-.07-.14-.625-1.507-.856-2.064-.225-.542-.453-.468-.625-.477-.16-.008-.344-.01-.528-.01-.185 0-.485.07-.74.352-.254.28-.97.949-.97 2.316 0 1.367.994 2.688 1.134 2.875.14.188 1.956 2.988 4.739 4.194.662.287 1.179.459 1.583.587.665.211 1.271.181 1.75.11.533-.079 1.65-.675 1.882-1.326.233-.652.233-1.21.163-1.325-.07-.11-.255-.18-.535-.32z"/>
//                 </svg>
//                 Click here to WhatsApp (07066911338)
//               </WhatsAppAnchor>
//             </WhatsAppButtonContainer>
//           </ActivationBlock>

//         </FormColumn>
//       </ContentSplitSection>
//     </PageWrapper>
//   );
// }




import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Zoom } from "react-awesome-reveal";
import PaystackPop from "@paystack/inline-js";
import Swal from 'sweetalert2';
import wmimg from '../Images/wmimg.jpg';

// Import the separated packages component
import EmailPackages from "./EmailPackages";

// Background image asset
import domainsearchimg from "../Images/emailhosting.jpg"; 
import { Context } from "./Context";

// ==========================================
// STYLED COMPONENTS (Hero, Form & Layout)
// ==========================================

const PageWrapper = styled.div`
  font-family: "Inter", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1a202c;
  background-color: #f7fafc;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const HeroSection = styled.section`
  width: 100%;
  padding: 60px 10px;
  background-image: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.82) 0%,
      rgba(30, 27, 75, 0.88) 100%
    ),
    url(${domainsearchimg});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.15);
  margin: 0 0 20px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 4vw, 3rem);
  font-weight: 900;
  color: #ffffff;
  line-height: 1.2;
  margin: 0;

  span {
    background: linear-gradient(135deg, #818cf8, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.05rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin: 0;
  max-width: 650px;
`;

// Split Section for Form & Info
const ContentSplitSection = styled.section`
  max-width: 1000px;
  margin: 20px auto;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 10px;
`;

const FormColumn = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
  border: 1px solid #eae2f8;
  margin: 0;
`;

const FormTitle = styled.h3`
  color: #0f172a;
  font-size: 1.4rem;
  margin: 0 0 12px 0;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 8px;
`;

const FormGroup = styled.div`
  margin: 0 0 10px 0;
`;

const Label = styled.label`
  display: block;
  margin: 0 0 6px 0;
  font-weight: 600;
  color: #1e293b;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #dcd6f7;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #1e293b;
  box-sizing: border-box;
  margin: 0;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #dcd6f7;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #1e293b;
  box-sizing: border-box;
  resize: vertical;
  min-height: 60px;
  margin: 0;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0 0 0;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  border: 1px solid ${props => props.checked ? '#4f46e5' : '#dcd6f7'};
  background-color: ${props => props.checked ? '#f7f5ff' : '#ffffff'};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  margin: 0;
  transition: all 0.3s ease;

  &:hover {
    border-color: #4f46e5;
  }
`;

const RadioInput = styled.input`
  accent-color: #4f46e5;
  margin: 0;
  transform: scale(1.1);
`;

const PriceTag = styled.span`
  margin-left: auto;
  font-weight: 700;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NoticeText = styled.p`
  font-size: 0.85rem;
  color: #64748b;
  margin: 10px 0;
  line-height: 1.4;

  a {
    color: #4f46e5;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  color: #ffffff;
  border: none;
  padding: 12px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  margin: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const ActivationBlock = styled.div`
  background-color: #f7f5ff;
  border-left: 4px solid #4f46e5;
  padding: 12px;
  border-radius: 0 8px 8px 0;
  margin: 15px 0 0 0;
`;

const ActivationTitle = styled.h4`
  color: #0f172a;
  margin: 0 0 6px 0;
  font-size: 1rem;
`;

const ActivationPhone = styled.span`
  font-weight: bold;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.05rem;
`;

const WhatsAppButtonContainer = styled.div`
  margin: 10px 0 0 0;
  display: flex;
  justify-content: center;
  padding: 0;
`;

const WhatsAppAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #25D366;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(37, 211, 102, 0.2);
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;
  margin: 0;

  &:hover {
    background-color: #20ba5a;
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(37, 211, 102, 0.3);
    color: #ffffff;
  }

  &:active {
    transform: translateY(0);
  }
`;

// ==========================================
// MAIN COMBINED COMPONENT EXPORT
// ==========================================

export default function EmailHostingPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    domain: '',
    extension: 'dot_com',
    customExtension: ''
  });
  const {paystack_key} = useContext(Context);

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Sanitize domain field inputs
    if (name === 'domain') {
      value = value
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/\.(com|ng|org|net|biz|gov|edu|ltd|co)(\..*)?$/g, '')
        .replace(/[^a-zA-z0-9-]/g, '');
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Compute Dynamic Pricing Structures
  const getPrice = () => {
    switch (formData.extension) {
      case 'dot_com':
        return 35000;
      case 'dot_com_ng':
        return 25000;
      case 'dot_ng':
        return 30000;
      case 'other':
      default:
        return 0;
    }
  };

  const total = getPrice();

  const handleBackendSubmit = async (paymentReference = null) => {
    const isOther = formData.extension === 'other';
    
    let extensionName = '';
    if (formData.extension === 'dot_com') extensionName = '.com';
    else if (formData.extension === 'dot_com_ng') extensionName = '.com.ng';
    else if (formData.extension === 'dot_ng') extensionName = '.ng';
    else extensionName = formData.customExtension;

    const payload = {
      name: formData.name,
      address: formData.address,
      email: formData.email,
      phone: formData.phone,
      domain: formData.domain,
      extension: extensionName, 
      price: total,
      paymentReference: paymentReference || 'N/A',
    };

    if (isOther) {
      payload.customExtension = formData.customExtension;
    }

    Swal.fire({
      title: 'Processing Order...',
      text: 'Please wait while we log your webmail setup request.',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const response = await fetch('https://elexdonhost.com/api_elexdonhost/submit_webmail_request.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP network fault error! Status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: 'Order Completed!',
          text: result.message,
          confirmButtonColor: '#4f46e5'
        });
        
        setFormData({
          name: '',
          address: '',
          email: '',
          phone: '',
          domain: '',
          extension: 'dot_com',
          customExtension: ''
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Setup Failed',
          text: result.error,
          confirmButtonColor: '#4f46e5'
        });
      }

    } catch (error) {
      console.error("Transmission error occurred: ", error);
      Swal.fire({
        icon: 'error',
        title: 'Connection Error',
        text: 'Could not connect to the deployment server. Please verify your network and try again.',
        confirmButtonColor: '#4f46e5'
      });
    }
  };

  const payWithPaystack = () => {
    const preventRefresh = (e) => {
      e.preventDefault();
      e.returnValue = "Payment processing. Please do not close or refresh this page.";
      return e.returnValue;
    };

    window.addEventListener('beforeunload', preventRefresh);

    Swal.fire({
      icon: 'info',
      title: 'Initializing...',
      text: 'Do not refresh or close this page while making this payment',
      showConfirmButton: false,
      timer: 3500,
      timerProgressBar: true,
      allowOutsideClick: false,
      didClose: () => {
        const paystack = new PaystackPop();
        paystack.newTransaction({
          key: paystack_key,
          amount: Math.ceil(total * 100),
          email: formData.email,
          onSuccess: (transaction) => {
            window.removeEventListener('beforeunload', preventRefresh);
            handleBackendSubmit(transaction.reference);
          },
          onCancel: () => {
            window.removeEventListener('beforeunload', preventRefresh);
            Swal.fire({ 
              icon: "warning", 
              text: "Payment cancelled by user.", 
              showConfirmButton: true,
              confirmButtonColor: '#4f46e5'
            });
          },
          onError: (error) => {
            window.removeEventListener('beforeunload', preventRefresh);
            Swal.fire({
              icon: "error",
              title: "Payment Failed",
              text: error.message || "An unknown error occurred.",
              showConfirmButton: true,
              confirmButtonColor: '#4f46e5'
            });
          }
        });
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.extension === 'other') {
      handleBackendSubmit();
    } else {
      payWithPaystack();
    }
  };

  const phoneNumber = "2347066911338"; 
  const defaultMessage = encodeURIComponent("Hello, I just completed the Webmail Setup form and would like to activate my order.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <PageWrapper>
      {/* 1. Simplified Hero Section with Background Image and Dark Overlay */}
      <HeroSection>
        <HeroContainer>
          <Zoom triggerOnce={false}>
            <HeroTitle>
              Professional <span>Corporate Webmail</span> Hosting
            </HeroTitle>
            <HeroDescription>
              Build instant trust with clients using your own custom domain name. Fast, secure, and fully synced across all devices.
            </HeroDescription>
          </Zoom>
        </HeroContainer>
      </HeroSection>

      {/* 2. Packages Grid Section (Now separated into its own component) */}
      <EmailPackages />

      {/* 3. Form and Dynamic Checkout Area */}
      <ContentSplitSection id="order-form">
        <InfoColumn>
          <h2 style={{ color: '#0f172a', fontSize: '1.8rem', margin: '0 0 10px 0' }}>Setup Your Account Easily</h2>
          <p style={{ color: '#475569', lineHeight: '1.5', fontSize: '1rem', margin: '0 0 10px 0' }}>
            Fill out the request architecture form accurately. Our server operators set up your infrastructure immediately following payment confirmation logs.
          </p>
          <p style={{ color: '#475569', lineHeight: '1.5', fontSize: '1rem', margin: '0 0 10px 0' }}>
            Ensure you spell your desired target domain name perfectly. Double-check all spellings before proceeding to prevent setup alignment adjustments.
          </p>
          
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
            alt="Business Workflow Analytics" 
            style={{ width: '100%', borderRadius: '12px', margin: '10px 0 0 0', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)' }}
          />
           <img 
            src={wmimg} 
            alt="Business Workflow Analytics" 
            style={{ width: '100%', borderRadius: '12px', margin: '10px 0 0 0', boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)' }}
          />
        </InfoColumn>

        <FormColumn>
          <FormTitle>Webmail Setup Form</FormTitle>
          <form onSubmit={handleSubmit}>
            
            <FormGroup>
              <Label htmlFor="name">Full Name / Business Title</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="e.g., John Doe Enterprises" 
                required 
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="address">Contact Address</Label>
              <TextArea 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                placeholder="Enter structural business location or street details" 
                required 
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Current Active Email Address</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="For status logs updates (e.g. name@gmail.com)" 
                required 
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="e.g., 08012345678" 
                required 
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="domain">Desired Custom Domain Name</Label>
              <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'block', margin: '0 0 6px 0', fontWeight:"bold" }}>
                Enter your brand name only (do not add .com or .ng)
              </span>
              <Input 
                type="text" 
                id="domain" 
                name="domain" 
                value={formData.domain} 
                onChange={handleChange} 
                placeholder="e.g., echobyteconcept" 
                required 
              />
            </FormGroup>

            <FormGroup>
              <Label>Select Extension</Label>
              <RadioGroup>
                <RadioLabel checked={formData.extension === 'dot_com'}>
                  <RadioInput 
                    type="radio" 
                    name="extension" 
                    value="dot_com" 
                    checked={formData.extension === 'dot_com'} 
                    onChange={handleChange} 
                  />
                  Serve Webmail with .com
                  <PriceTag>₦35,000</PriceTag>
                </RadioLabel>

                <RadioLabel checked={formData.extension === 'dot_com_ng'}>
                  <RadioInput 
                    type="radio" 
                    name="extension" 
                    value="dot_com_ng" 
                    checked={formData.extension === 'dot_com_ng'} 
                    onChange={handleChange} 
                  />
                  Serve Webmail with .com.ng
                  <PriceTag>₦25,000</PriceTag>
                </RadioLabel>

                <RadioLabel checked={formData.extension === 'dot_ng'}>
                  <RadioInput 
                    type="radio" 
                    name="extension" 
                    value="dot_ng" 
                    checked={formData.extension === 'dot_ng'} 
                    onChange={handleChange} 
                  />
                  Serve Webmail with .ng
                  <PriceTag>₦30,000</PriceTag>
                </RadioLabel>

                <RadioLabel checked={formData.extension === 'other'}>
                  <RadioInput 
                    type="radio" 
                    name="extension" 
                    value="other" 
                    checked={formData.extension === 'other'} 
                    onChange={handleChange} 
                  />
                  Other TLD Extensions
                  <PriceTag>Contact Us</PriceTag>
                </RadioLabel>
              </RadioGroup>
            </FormGroup>

            {/* Conditional Input for Custom Extension */}
            {formData.extension === 'other' && (
              <FormGroup>
                <Label htmlFor="customExtension">Specify Your Domain Extension</Label>
                <Input 
                  type="text" 
                  id="customExtension" 
                  name="customExtension" 
                  value={formData.customExtension} 
                  onChange={handleChange} 
                  placeholder="e.g., .org, .net, .biz" 
                  required 
                />
              </FormGroup>
            )}

            <NoticeText>
              * Please note that terms &amp; conditions apply to all ongoing provisioning agreements.
            </NoticeText>

            <SubmitButton type="submit">
              {formData.extension === 'other' ? 'Submit Order Form' : `Proceed to Pay ₦${total.toLocaleString()}`}
            </SubmitButton>

          </form>

          <ActivationBlock>
            <ActivationTitle>After Payment &amp; Transfer Activation Notice</ActivationTitle>
            <p style={{ margin: '0 0 8px 0', fontSize: '0.85rem', color: '#475569', lineHeight: '1.4' }}>
              Send your <b>Proof of Payment</b> and <b>"ACTIVATE"</b> to: <ActivationPhone>07066911338</ActivationPhone>
            </p>
            <WhatsAppButtonContainer>
              <WhatsAppAnchor href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 4.933 1.504 5.485 0 9.949-4.464 9.952-9.949.001-2.656-1.026-5.153-2.892-7.019C16.774 1.824 14.283.796 11.625.796c-5.49 0-9.957 4.463-9.96 9.948-.001 1.905.513 3.766 1.492 5.395l-1.017 3.714 3.821-.1.086-.046zM17.51 14.86c-.28-.14-1.65-.814-1.906-.907-.255-.094-.44-.14-.625.14-.185.281-.716.907-.878 1.093-.162.186-.324.208-.605.068-.28-.14-1.18-.435-2.249-1.39-0.832-.742-1.393-1.658-1.557-1.939-.163-.28-.017-.431.122-.571.126-.126.28-.328.42-.492.14-.164.185-.281.28-.469.095-.188.047-.352-.023-.492-.07-.14-.625-1.507-.856-2.064-.225-.542-.453-.468-.625-.477-.16-.008-.344-.01-.528-.01-.185 0-.485.07-.74.352-.254.28-.97.949-.97 2.316 0 1.367.994 2.688 1.134 2.875.14.188 1.956 2.988 4.739 4.194.662.287 1.179.459 1.583.587.665.211 1.271.181 1.75.11.533-.079 1.65-.675 1.882-1.326.233-.652.233-1.21.163-1.325-.07-.11-.255-.18-.535-.32z"/>
                </svg>
                Click here to WhatsApp (07066911338)
              </WhatsAppAnchor>
            </WhatsAppButtonContainer>
          </ActivationBlock>

        </FormColumn>
      </ContentSplitSection>
    </PageWrapper>
  );
}