
// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { motion } from 'framer-motion';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// // --- Styled Components ---

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const slideInUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const slideInLeft = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(-30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// const slideInRight = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// const PageContainer = styled.div`
//   font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
//   color: #333;
//   line-height: 1.7;
//   overflow-x: hidden; /* Prevent horizontal scroll due to animations */
//   background: linear-gradient(to bottom right, #f7f9fc, #eef3f8);
//   padding: 60px 20px;

//   @media (max-width: 768px) {
//     padding: 30px 15px;
//   }
// `;

// const ContentWrapper = styled.div`
//   max-width: 900px;
//   margin: 0 auto;
//   background-color: #ffffff;
//   border-radius: 18px;
//   box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
//   padding: 50px 60px;

//   @media (max-width: 1024px) {
//     padding: 40px 50px;
//   }

//   @media (max-width: 768px) {
//     padding: 30px 30px;
//   }

//   @media (max-width: 480px) {
//     padding: 20px 20px;
//     border-radius: 12px;
//   }
// `;

// const MainHeading = styled(motion.h1)`
//   font-size: 3.2em;
//   color: #007bff;
//   text-align: center;
//   margin-bottom: 20px;
//   font-weight: 700;
//   letter-spacing: -0.5px;
//   animation: ${fadeIn} 1.5s ease-out;

//   @media (max-width: 1024px) {
//     font-size: 2.8em;
//   }

//   @media (max-width: 768px) {
//     font-size: 2.2em;
//     margin-bottom: 15px;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.8em;
//   }
// `;

// const Subtitle = styled(motion.p)`
//   font-size: 1.3em;
//   color: #555;
//   text-align: center;
//   margin-bottom: 40px;
//   line-height: 1.5;

//   @media (max-width: 768px) {
//     font-size: 1.1em;
//     margin-bottom: 30px;
//   }

//   @media (max-width: 480px) {
//     font-size: 1em;
//     margin-bottom: 25px;
//   }
// `;

// const StepContainer = styled(motion.section)`
//   background-color: #f0f8ff; /* Light blue background for steps */
//   border-left: 5px solid #007bff;
//   border-radius: 8px;
//   padding: 25px 30px;
//   margin-bottom: 35px;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

//   @media (max-width: 768px) {
//     padding: 20px 25px;
//     margin-bottom: 25px;
//     border-left-width: 4px;
//   }

//   @media (max-width: 480px) {
//     padding: 15px 20px;
//     margin-bottom: 20px;
//     border-left-width: 3px;
//   }
// `;

// const StepTitle = styled(motion.h2)`
//   font-size: 1.8em;
//   color: #007bff;
//   margin-top: 0;
//   margin-bottom: 20px;
//   font-weight: 600;

//   @media (max-width: 768px) {
//     font-size: 1.6em;
//     margin-bottom: 15px;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.4em;
//   }
// `;

// const StepList = styled.ol`
//   list-style-type: none;
//   padding-left: 0;
//   margin: 0;
// `;

// const StepListItem = styled(motion.li)`
//   font-size: 1.1em;
//   margin-bottom: 15px;
//   display: flex;
//   align-items: flex-start;
//   color: #444;

//   &:before {
//     content: '${props => props.number}';
//     font-weight: bold;
//     color: #28a745; /* Green number */
//     font-size: 1.2em;
//     margin-right: 15px;
//     min-width: 25px; /* Ensure numbers align */
//     text-align: right;
//   }

//   strong {
//     color: #007bff;
//   }

//   a {
//     color: #007bff;
//     text-decoration: none;
//     font-weight: bold;

//     &:hover {
//       text-decoration: underline;
//     }
//   }

//   @media (max-width: 768px) {
//     font-size: 1em;
//     margin-bottom: 12px;
//     &:before {
//       font-size: 1.1em;
//       margin-right: 10px;
//       min-width: 20px;
//     }
//   }
// `;

// const SubStepList = styled.ul`
//   list-style: none;
//   padding-left: 20px; /* Indent sub-list */
//   margin-top: 10px;
// `;

// const SubStepListItem = styled(motion.li)`
//   font-size: 1em;
//   margin-bottom: 8px;
//   color: #555;
//   position: relative;
//   padding-left: 20px;

//   &:before {
//     content: '•';
//     color: #ff5722; /* Orange bullet */
//     font-size: 1.2em;
//     position: absolute;
//     left: 0;
//     top: -2px;
//   }

//   strong {
//     color: #333;
//   }

//   @media (max-width: 768px) {
//     font-size: 0.95em;
//     margin-bottom: 7px;
//     padding-left: 18px;
//   }
// `;

// const TipSection = styled(motion.section)`
//   background-color: #f8fcfd;
//   border: 1px dashed #a0d9b4; /* Green dashed border */
//   border-radius: 12px;
//   padding: 30px;
//   margin-top: 40px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

//   @media (max-width: 768px) {
//     padding: 20px;
//     margin-top: 30px;
//   }
// `;

// const TipTitle = styled(motion.h3)`
//   font-size: 1.6em;
//   color: #28a745; /* Green for tips */
//   text-align: center;
//   margin-bottom: 25px;
//   font-weight: 600;

//   @media (max-width: 768px) {
//     font-size: 1.4em;
//     margin-bottom: 20px;
//   }
// `;

// const TipList = styled.ul`
//   list-style: none;
//   padding-left: 0;
//   margin: 0;
// `;

// const TipListItem = styled(motion.li)`
//   font-size: 1.1em;
//   margin-bottom: 15px;
//   display: flex;
//   align-items: flex-start;
//   color: #444;

//   &:before {
//     content: '💡'; /* Lightbulb emoji for tips */
//     margin-right: 15px;
//     font-size: 1.2em;
//   }

//   strong {
//     color: #28a745; /* Green bold for tips */
//   }

//   @media (max-width: 768px) {
//     font-size: 1em;
//     margin-bottom: 12px;
//   }
// `;

// const TroubleshootingSection = styled(motion.section)`
//   background-color: #fff6e6; /* Light orange/yellow for troubleshooting */
//   border: 1px dashed #ffb366; /* Orange dashed border */
//   border-radius: 12px;
//   padding: 30px;
//   margin-top: 40px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

//   @media (max-width: 768px) {
//     padding: 20px;
//     margin-top: 30px;
//   }
// `;

// const TroubleshootingTitle = styled(motion.h3)`
//   font-size: 1.6em;
//   color: #ff5722; /* Orange for troubleshooting */
//   text-align: center;
//   margin-bottom: 25px;
//   font-weight: 600;

//   @media (max-width: 768px) {
//     font-size: 1.4em;
//     margin-bottom: 20px;
//   }
// `;

// const TroubleshootingList = styled.ul`
//   list-style: none;
//   padding-left: 0;
//   margin: 0;
// `;

// const TroubleshootingListItem = styled(motion.li)`
//   font-size: 1.1em;
//   margin-bottom: 15px;
//   display: flex;
//   align-items: flex-start;
//   color: #444;

//   &:before {
//     content: '❓'; /* Question mark emoji */
//     margin-right: 15px;
//     font-size: 1.2em;
//   }

//   strong {
//     color: #ff5722; /* Orange bold for troubleshooting */
//   }

//   @media (max-width: 768px) {
//     font-size: 1em;
//     margin-bottom: 12px;
//   }
// `;

// const HelpSection = styled(motion.section)`
//   text-align: center;
//   margin-top: 50px;
//   padding-top: 30px;
//   border-top: 1px solid #eee;

//   @media (max-width: 768px) {
//     margin-top: 40px;
//     padding-top: 20px;
//   }
// `;

// const HelpText = styled(motion.p)`
//   font-size: 1.2em;
//   color: #555;
//   margin-bottom: 15px;

//   a {
//     color: #007bff;
//     text-decoration: none;
//     font-weight: bold;

//     &:hover {
//       text-decoration: underline;
//     }
//   }

//   @media (max-width: 768px) {
//     font-size: 1.1em;
//   }
// `;

// const Div = styled.div`
//  display:flex;
//  justify-content:center;
//  align-items:center;
//  gap:5px;
//  font-weight:bold;
//  background:#2B32B2;
//  color:white;
//  width:150px;
//  border-radius:5px;
//  cursor:pointer;

// text-align:center;
//  box-sizing:border-box;
// height:60px;
// position:fixed;
// top:90%;
// left:10px;
// z-index:9999999;

// &:hover{
//     background-color:purple;
// }
// `


// // Animation variants for framer-motion
// const containerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: "easeOut",
//       when: "beforeChildren",
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const listItemVariants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// const subListItemVariants = {
//   hidden: { opacity: 0, x: -10 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
// };

// // --- React Component ---

// const EmailSetupTutorial = () => {
// const navigate = useNavigate();

//   return (
//     <PageContainer>
//          <Div onClick={()=>navigate('/knowledgebase')}>
//         <FaArrowLeft/>
//         <p>
//         Back to<br/> Knowledgebase
//         </p>
//                 </Div>
//       <ContentWrapper>
//         <MainHeading
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           Email Setup in cPanel Tutorial
//         </MainHeading>
//         <Subtitle
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           Learn how to set up and manage email accounts in cPanel for your Elexdon Hosting account.
//         </Subtitle>

//         <StepContainer
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <StepTitle as={motion.h2} variants={itemVariants}>Step 1: Log In to cPanel</StepTitle>
//           <StepList>
//             <StepListItem as={motion.li} variants={listItemVariants} number="1">
//               Go to the Elexdon Hosting Customer Portal: <a href="https://elexdonhost.com/login" target="_blank" rel="noopener noreferrer">https://elexdonhost.com/login</a>
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="2">
//               Log in with your email and password.
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="3">
//               Navigate to <strong>Services <FaArrowRight/> My Services</strong>.
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="4">
//               Click on your hosting plan (e.g., <strong>Starter package</strong>).
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="5">
//               Under <strong>Quick Actions</strong>, click <strong>Login to cPanel</strong>.
//             </StepListItem>
//           </StepList>
//         </StepContainer>

//         <StepContainer
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <StepTitle as={motion.h2} variants={itemVariants}>Step 2: Create an Email Account</StepTitle>
//           <StepList>
//             <StepListItem as={motion.li} variants={listItemVariants} number="1">
//               In cPanel, scroll down to the <strong>Email</strong> section.
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="2">
//               Click on <strong>Email Accounts</strong>.
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="3">
//               Under <strong>Create an Email Account</strong>, enter the following details:
//               <SubStepList>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   <strong>Email:</strong> Enter the desired email address (e.g., <strong>info@yourdomain.com</strong>).
//                 </SubStepListItem>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   <strong>Password:</strong> Create a strong password and confirm it.
//                 </SubStepListItem>
//               </SubStepList>
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="4">
//               Click <strong>Create Account</strong>.
//             </StepListItem>
//           </StepList>
//         </StepContainer>

//         <StepContainer
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <StepTitle as={motion.h2} variants={itemVariants}>Step 3: Access Your Email</StepTitle>
//           <motion.p variants={itemVariants} style={{ fontSize: '1.1em', marginBottom: '20px', color: '#555' }}>
//             You can access your email using one of the following methods:
//           </motion.p>
//           <StepList>
//             <StepListItem as={motion.li} variants={listItemVariants} number="Option 1">
//               <strong>Webmail</strong>
//               <SubStepList>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   In cPanel, scroll down to the <strong>Email</strong> section.
//                 </SubStepListItem>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   Click on <strong>Email Accounts</strong>.
//                 </SubStepListItem>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   Find your email account and click <strong>Check Email</strong>.
//                 </SubStepListItem>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   Log in with your email address and password.
//                 </SubStepListItem>
//               </SubStepList>
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="Option 2">
//               <strong>Email Client (e.g., Outlook, Thunderbird)</strong>
//               <SubStepList>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   Open your email client.
//                 </SubStepListItem>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   Add a new account and enter the following details:
//                   <SubStepList>
//                     <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                       <strong>Email Address:</strong> Your full email address (e.g., <strong>info@yourdomain.com</strong>).
//                     </SubStepListItem>
//                     <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                       <strong>Username:</strong> Your full email address.
//                     </SubStepListItem>
//                     <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                       <strong>Password:</strong> Your email account password.
//                     </SubStepListItem>
//                     <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                       <strong>Incoming Server:</strong> <strong>mail.yourdomain.com</strong> (use IMAP or POP3).
//                     </SubStepListItem>
//                     <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                       <strong>Outgoing Server:</strong> <strong>mail.yourdomain.com</strong> (use SMTP).
//                     </SubStepListItem>
//                   </SubStepList>
//                 </SubStepListItem>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   Save the settings and test the connection.
//                 </SubStepListItem>
//               </SubStepList>
//             </StepListItem>
//           </StepList>
//         </StepContainer>

//         <StepContainer
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <StepTitle as={motion.h2} variants={itemVariants}>Step 4: Configure Email Forwarders (Optional)</StepTitle>
//           <StepList>
//             <StepListItem as={motion.li} variants={listItemVariants} number="1">
//               In cPanel, scroll down to the <strong>Email</strong> section.
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="2">
//               Click on <strong>Forwarders</strong>.
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="3">
//               Click <strong>Add Forwarder</strong>.
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="4">
//               Enter the following details:
//               <SubStepList>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   <strong>Address to Forward:</strong> The email address you want to forward from.
//                 </SubStepListItem>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   <strong>Destination:</strong> The email address you want to forward to.
//                 </SubStepListItem>
//               </SubStepList>
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="5">
//               Click <strong>Add Forwarder</strong>.
//             </StepListItem>
//           </StepList>
//         </StepContainer>

//         <TipSection
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <TipTitle as={motion.h3} variants={itemVariants}>Tips for Email Management</TipTitle>
//           <TipList>
//             <TipListItem as={motion.li} variants={listItemVariants}>
//               <strong>Use Strong Passwords:</strong> Protect your email account with a strong, unique password.
//             </TipListItem>
//             <TipListItem as={motion.li} variants={listItemVariants}>
//               <strong>Enable Spam Filters:</strong> Use cPanel’s <strong>Spam Filters</strong> to reduce spam.
//             </TipListItem>
//             <TipListItem as={motion.li} variants={listItemVariants}>
//               <strong>Set Up Autoresponders:</strong> Use <strong>Autoresponders</strong> in cPanel to send automatic replies.
//             </TipListItem>
//           </TipList>
//         </TipSection>

//         <TroubleshootingSection
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <TroubleshootingTitle as={motion.h3} variants={itemVariants}>Troubleshooting</TroubleshootingTitle>
//           <TroubleshootingList>
//             <TroubleshootingListItem as={motion.li} variants={listItemVariants}>
//               <strong>Can’t Log In?</strong> Double-check your email address and password. Reset your password if needed.
//             </TroubleshootingListItem>
//             <TroubleshootingListItem as={motion.li} variants={listItemVariants}>
//               <strong>Emails Not Sending?</strong> Verify your SMTP settings and ensure your outgoing server is configured correctly.
//             </TroubleshootingListItem>
//             <TroubleshootingListItem as={motion.li} variants={listItemVariants}>
//               <strong>Emails Not Receiving?</strong> Check your spam/junk folder and ensure your DNS settings are correct.
//             </TroubleshootingListItem>
//           </TroubleshootingList>
//         </TroubleshootingSection>

//         <HelpSection
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={itemVariants}
//         >
//           <HelpText>
//             Need Help? Visit <a href="https://elexdonhost.com/support" target="_blank" rel="noopener noreferrer">Elexdon Hosting Support</a> or
//             email <a href="mailto:support@elexdonhost.com">support@elexdonhost.com</a> for assistance.
//           </HelpText>
//         </HelpSection>
//       </ContentWrapper>
//     </PageContainer>
//   );
// };

// export default EmailSetupTutorial;



import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// --- Styled Components ---

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PageContainer = styled.div`
  font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  color: #1e293b;
  line-height: 1.5;
  overflow-x: hidden;
  // background: #f8fafc;
    background: linear-gradient(360deg, rgba(255,255,255,1), rgba(0,0,0,0.2));
  padding: 70px 10px;
  box-sizing: border-box;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.08);
  border: 1px solid rgba(79, 70, 229, 0.1);
  padding: 10px;
  box-sizing: border-box;
  animation: ${fadeIn} 1s ease-out;
`;

const MainHeading = styled(motion.h1)`
  font-size: 2rem;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin: 0 0 10px 0;
  font-weight: 700;
  letter-spacing: -0.5px;
  padding-bottom: 5px;
  display: block;
`;

const Subtitle = styled(motion.p)`
  font-size: 0.95rem;
  margin: 0 0 10px 0;
  color: #334155;
  text-align: center;
`;

const StepContainer = styled(motion.section)`
  background: #faf5ff;
  border-left: 5px solid #4f46e5;
  border-radius: 8px;
  padding: 12px 15px;
  margin-bottom: 10px;
  border: 1px solid rgba(79, 70, 229, 0.08);
  box-sizing: border-box;
`;

const StepTitle = styled(motion.h2)`
  font-size: 1.3rem;
  color: #4f46e5;
  margin: 0 0 8px 0;
  font-weight: 600;
`;

const StepList = styled.ol`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StepListItem = styled(motion.li)`
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: flex-start;
  color: #475569;
  background: #ffffff;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid rgba(79, 70, 229, 0.08);
  box-sizing: border-box;

  &:before {
    content: '${props => props.number}';
    color: #9333ea;
    font-size: 0.9rem;
    margin-right: 8px;
    font-weight: bold;
    min-width: 20px;
    text-align: right;
  }

  strong {
    color: #4f46e5;
  }

  a {
    color: #4f46e5;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SubStepList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SubStepListItem = styled(motion.li)`
  font-size: 0.85rem;
  margin: 0;
  color: #475569;
  position: relative;
  padding: 6px 10px 6px 20px;
  background: #faf5ff;
  border-radius: 6px;
  border: 1px solid rgba(79, 70, 229, 0.05);
  box-sizing: border-box;

  &:before {
    content: '•';
    color: #9333ea;
    font-size: 1.1rem;
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
  }

  strong {
    color: #4f46e5;
  }
`;

const TipSection = styled(motion.section)`
  background: #faf5ff;
  border: 1px dashed rgba(79, 70, 229, 0.3);
  border-radius: 8px;
  padding: 12px 15px;
  margin-top: 10px;
  box-sizing: border-box;
`;

const TipTitle = styled(motion.h3)`
  font-size: 1.3rem;
  color: #4f46e5;
  text-align: center;
  margin: 0 0 8px 0;
  font-weight: 600;
`;

const TipList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TipListItem = styled(motion.li)`
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: flex-start;
  color: #475569;
  background: #ffffff;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid rgba(79, 70, 229, 0.08);
  box-sizing: border-box;

  &:before {
    content: '💡';
    margin-right: 8px;
    font-size: 0.9rem;
  }

  strong {
    color: #4f46e5;
  }
`;

const TroubleshootingSection = styled(motion.section)`
  background: #fffbeb;
  border: 1px dashed rgba(217, 119, 6, 0.3);
  border-radius: 8px;
  padding: 12px 15px;
  margin-top: 10px;
  box-sizing: border-box;
`;

const TroubleshootingTitle = styled(motion.h3)`
  font-size: 1.3rem;
  color: #d97706;
  text-align: center;
  margin: 0 0 8px 0;
  font-weight: 600;
`;

const TroubleshootingList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TroubleshootingListItem = styled(motion.li)`
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: flex-start;
  color: #475569;
  background: #ffffff;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid rgba(217, 119, 6, 0.1);
  box-sizing: border-box;

  &:before {
    content: '❓';
    margin-right: 8px;
    font-size: 0.9rem;
  }

  strong {
    color: #d97706;
  }
`;

const HelpSection = styled(motion.section)`
  text-align: center;
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid rgba(79, 70, 229, 0.1);
`;

const HelpText = styled(motion.p)`
  font-size: 0.95rem;
  color: #334155;
  margin: 0;

  a {
    color: #4f46e5;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  color: white;
  width: 130px;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  padding: 5px;
  height: 40px;
  position: fixed;
  top: 70px;
  left: 10px;
  z-index: 99999;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  p {
    font-size: 0.75rem;
    margin: 0;
    line-height: 1.1;
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const subListItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

// --- React Component ---

const EmailSetupTutorial = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Div onClick={() => navigate('/knowledgebase')}>
        <FaArrowLeft />
        <p>
          Back to<br /> Knowledgebase
        </p>
      </Div>

      <ContentWrapper>
        <MainHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Email Setup in cPanel Tutorial
        </MainHeading>
        
        <Subtitle
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Learn how to set up and manage email accounts in cPanel for your Elexdon Hosting account.
        </Subtitle>

        <StepContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <StepTitle as={motion.h2} variants={itemVariants}>Step 1: Log In to cPanel</StepTitle>
          <StepList>
            <StepListItem as={motion.li} variants={listItemVariants} number="1">
              Go to the Elexdon Hosting Customer Portal: <a href="https://elexdonhost.com/login" target="_blank" rel="noopener noreferrer">https://elexdonhost.com/login</a>
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="2">
              Log in with your email and password.
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="3">
              Navigate to <strong>Services <FaArrowRight style={{ fontSize: '0.7rem', verticalAlign: 'middle' }} /> My Services</strong>.
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="4">
              Click on your hosting plan (e.g., <strong>Starter package</strong>).
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="5">
              Under <strong>Quick Actions</strong>, click <strong>Login to cPanel</strong>.
            </StepListItem>
          </StepList>
        </StepContainer>

        <StepContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <StepTitle as={motion.h2} variants={itemVariants}>Step 2: Create an Email Account</StepTitle>
          <StepList>
            <StepListItem as={motion.li} variants={listItemVariants} number="1">
              In cPanel, scroll down to the <strong>Email</strong> section.
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="2">
              Click on <strong>Email Accounts</strong>.
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="3" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
              <span>Under <strong>Create an Email Account</strong>, enter the following details:</span>
              <SubStepList>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  <strong>Email:</strong> Enter the desired email address (e.g., <strong>info@yourdomain.com</strong>).
                </SubStepListItem>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  <strong>Password:</strong> Create a strong password and confirm it.
                </SubStepListItem>
              </SubStepList>
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="4">
              Click <strong>Create Account</strong>.
            </StepListItem>
          </StepList>
        </StepContainer>

        <StepContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <StepTitle as={motion.h2} variants={itemVariants}>Step 3: Access Your Email</StepTitle>
          <motion.p variants={itemVariants} style={{ fontSize: '0.9rem', marginBottom: '8px', color: '#475569' }}>
            You can access your email using one of the following methods:
          </motion.p>
          <StepList>
            <StepListItem as={motion.li} variants={listItemVariants} number="Option 1" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
              <strong>Webmail</strong>
              <SubStepList>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  In cPanel, scroll down to the <strong>Email</strong> section.
                </SubStepListItem>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  Click on <strong>Email Accounts</strong>.
                </SubStepListItem>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  Find your email account and click <strong>Check Email</strong>.
                </SubStepListItem>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  Log in with your email address and password.
                </SubStepListItem>
              </SubStepList>
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="Option 2" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
              <strong>Email Client (e.g., Outlook, Thunderbird)</strong>
              <SubStepList>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  Open your email client.
                </SubStepListItem>
                <SubStepListItem as={motion.li} variants={subListItemVariants} style={{ flexDirection: 'column', alignItems: 'stretch', paddingLeft: '10px' }}>
                  <span>Add a new account and enter the following details:</span>
                  <SubStepList style={{ marginTop: '5px' }}>
                    <SubStepListItem as={motion.li} variants={subListItemVariants}>
                      <strong>Email Address:</strong> Your full email address (e.g., <strong>info@yourdomain.com</strong>).
                    </SubStepListItem>
                    <SubStepListItem as={motion.li} variants={subListItemVariants}>
                      <strong>Username:</strong> Your full email address.
                    </SubStepListItem>
                    <SubStepListItem as={motion.li} variants={subListItemVariants}>
                      <strong>Password:</strong> Your email account password.
                    </SubStepListItem>
                    <SubStepListItem as={motion.li} variants={subListItemVariants}>
                      <strong>Incoming Server:</strong> <strong>mail.yourdomain.com</strong> (use IMAP or POP3).
                    </SubStepListItem>
                    <SubStepListItem as={motion.li} variants={subListItemVariants}>
                      <strong>Outgoing Server:</strong> <strong>mail.yourdomain.com</strong> (use SMTP).
                    </SubStepListItem>
                  </SubStepList>
                </SubStepListItem>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  Save the settings and test the connection.
                </SubStepListItem>
              </SubStepList>
            </StepListItem>
          </StepList>
        </StepContainer>

        <StepContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <StepTitle as={motion.h2} variants={itemVariants}>Step 4: Configure Email Forwarders (Optional)</StepTitle>
          <StepList>
            <StepListItem as={motion.li} variants={listItemVariants} number="1">
              In cPanel, scroll down to the <strong>Email</strong> section.
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="2">
              Click on <strong>Forwarders</strong>.
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="3">
              Click <strong>Add Forwarder</strong>.
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="4" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
              <span>Enter the following details:</span>
              <SubStepList>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  <strong>Address to Forward:</strong> The email address you want to forward from.
                </SubStepListItem>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  <strong>Destination:</strong> The email address you want to forward to.
                </SubStepListItem>
              </SubStepList>
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="5">
              Click <strong>Add Forwarder</strong>.
            </StepListItem>
          </StepList>
        </StepContainer>

        <TipSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <TipTitle as={motion.h3} variants={itemVariants}>Tips for Email Management</TipTitle>
          <TipList>
            <TipListItem as={motion.li} variants={listItemVariants}>
              <strong>Use Strong Passwords:</strong> Protect your email account with a strong, unique password.
            </TipListItem>
            <TipListItem as={motion.li} variants={listItemVariants}>
              <strong>Enable Spam Filters:</strong> Use cPanel’s <strong>Spam Filters</strong> to reduce spam.
            </TipListItem>
            <TipListItem as={motion.li} variants={listItemVariants}>
              <strong>Set Up Autoresponders:</strong> Use <strong>Autoresponders</strong> in cPanel to send automatic replies.
            </TipListItem>
          </TipList>
        </TipSection>

        <TroubleshootingSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <TroubleshootingTitle as={motion.h3} variants={itemVariants}>Troubleshooting</TroubleshootingTitle>
          <TroubleshootingList>
            <TroubleshootingListItem as={motion.li} variants={listItemVariants}>
              <strong>Can’t Log In?</strong> Double-check your email address and password. Reset your password if needed.
            </TroubleshootingListItem>
            <TroubleshootingListItem as={motion.li} variants={listItemVariants}>
              <strong>Emails Not Sending?</strong> Verify your SMTP settings and ensure your outgoing server is configured correctly.
            </TroubleshootingListItem>
            <TroubleshootingListItem as={motion.li} variants={listItemVariants}>
              <strong>Emails Not Receiving?</strong> Check your spam/junk folder and ensure your DNS settings are correct.
            </TroubleshootingListItem>
          </TroubleshootingList>
        </TroubleshootingSection>

        <HelpSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <HelpText>
            Need Help? Visit <a href="https://elexdonhost.com/support" target="_blank" rel="noopener noreferrer">Elexdon Hosting Support</a> or
            email <a href="mailto:support@elexdonhost.com">support@elexdonhost.com</a> for assistance.
          </HelpText>
        </HelpSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default EmailSetupTutorial;