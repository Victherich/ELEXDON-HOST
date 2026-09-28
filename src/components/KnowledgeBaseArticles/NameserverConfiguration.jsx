
// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';

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

// const NameserverBlock = styled(motion.div)`
//   background-color: #e6f7ff; /* Lighter blue for nameserver block */
//   border: 1px solid #99d9ff;
//   border-radius: 10px;
//   padding: 25px 30px;
//   margin-bottom: 40px;
//   text-align: center;
//   box-shadow: 0 5px 20px rgba(0, 123, 255, 0.1);

//   @media (max-width: 768px) {
//     padding: 20px 25px;
//     margin-bottom: 30px;
//   }
// `;

// const NameserverText = styled.p`
//   font-size: 1.2em;
//   font-weight: bold;
//   color: #007bff;
//   margin-bottom: 15px;

//   &:last-child {
//     margin-bottom: 0;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.1em;
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

// const InfoSection = styled(motion.section)`
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

// const InfoTitle = styled(motion.h3)`
//   font-size: 1.6em;
//   color: #28a745; /* Green for info */
//   text-align: center;
//   margin-bottom: 25px;
//   font-weight: 600;

//   @media (max-width: 768px) {
//     font-size: 1.4em;
//     margin-bottom: 20px;
//   }
// `;

// const InfoParagraph = styled(motion.p)`
//   font-size: 1.1em;
//   color: #444;
//   margin-bottom: 15px;

//   strong {
//     color: #28a745; /* Green bold for info */
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

// const NameserverConfigurationPage = () => {
//     const navigate = useNavigate();
//   return (
//     <PageContainer>

//          <Div onClick={()=>navigate('/knowledgebase')}>
//                 <FaArrowLeft/>
//                 <p>
//                 Back to<br/> Knowledgebase
//                 </p>
//                         </Div>
//       <ContentWrapper>
//         <MainHeading
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           Configuring Nameservers
//         </MainHeading>
//         <Subtitle
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           Here’s a step-by-step guide on how to configure your domain’s name servers to point to
//         </Subtitle>

//         <NameserverBlock
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
//         >
//             <NameserverText>ns1.elexdonhost.com</NameserverText>
//             <NameserverText>ns2.elexdonhost.com</NameserverText>
//         </NameserverBlock>

//         <StepContainer
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <StepTitle as={motion.h2} variants={itemVariants}>Step 1: Log in to Your Domain Registrar</StepTitle>
//           <StepList>
//             <StepListItem as={motion.li} variants={listItemVariants} number="1">
//               Log in to your account using your credentials.
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="2">
//               Navigate to the <strong>Domain Management</strong> or <strong>My Domains</strong> section.
//             </StepListItem>
//           </StepList>
//         </StepContainer>

//         <StepContainer
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <StepTitle as={motion.h2} variants={itemVariants}>Step 2: Locate Your Domain</StepTitle>
//           <StepList>
//             <StepListItem as={motion.li} variants={listItemVariants} number="1">
//               Find the domain you want to update in the list of domains.
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="2">
//               Click on the domain name to access its settings.
//             </StepListItem>
//           </StepList>
//         </StepContainer>

//         <StepContainer
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <StepTitle as={motion.h2} variants={itemVariants}>Step 3: Access Name Server Settings</StepTitle>
//           <StepList>
//             <StepListItem as={motion.li} variants={listItemVariants} number="1">
//               Look for an option labeled <strong>Name Servers</strong>, <strong>DNS Settings</strong>, or <strong>Domain Name Servers</strong>.
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="2">
//               Click on the option to edit or manage the name servers.
//             </StepListItem>
//           </StepList>
//         </StepContainer>

//         <StepContainer
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <StepTitle as={motion.h2} variants={itemVariants}>Step 4: Update the Name Servers</StepTitle>
//           <StepList>
//             <StepListItem as={motion.li} variants={listItemVariants} number="1">
//               Select the option to <strong>Use Custom Name Servers</strong> or <strong>Edit Name Servers</strong>.
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="2">
//               Enter the following name servers provided by Elexdon Hosting:
//               <SubStepList>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   <strong>Name Server 1:</strong> <strong>ns1.elexdonhost.com</strong>
//                 </SubStepListItem>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   <strong>Name Server 2:</strong> <strong>ns2.elexdonhost.com</strong>
//                 </SubStepListItem>
//               </SubStepList>
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="3">
//               If there are additional fields for more name servers, you can leave them blank or remove any existing entries.
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="4">
//               Save the changes.
//             </StepListItem>
//           </StepList>
//         </StepContainer>

//         <StepContainer
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <StepTitle as={motion.h2} variants={itemVariants}>Step 5: Verify the Changes</StepTitle>
//           <StepList>
//             <StepListItem as={motion.li} variants={listItemVariants} number="1">
//               After saving the changes, it may take up to <strong>24-48 hours</strong> for the updates to propagate globally (Domain Naming System propagation).
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="2">
//               To verify the changes, you can use a DNS lookup tool (e.g., <a href="https://dnschecker.org" target="_blank" rel="noopener noreferrer">https://dnschecker.org</a>):
//               <SubStepList>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   Enter your domain name.
//                 </SubStepListItem>
//                 <SubStepListItem as={motion.li} variants={subListItemVariants}>
//                   Check if the name servers are updated to <strong>ns1.supercp.com</strong> and <strong>ns2.supercp.com</strong>.
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
//           <StepTitle as={motion.h2} variants={itemVariants}>Step 6: Update DNS Records (If Required)</StepTitle>
//           <motion.p variants={itemVariants} style={{ fontSize: '1.1em', marginBottom: '20px', color: '#555' }}>
//             If your hosting provider requires specific DNS records (e.g., A records, MX records, CNAME), you may need to configure them in your hosting control panel or DNS management tool. Here’s how:
//           </motion.p>
//           <StepList>
//             <StepListItem as={motion.li} variants={listItemVariants} number="1">
//               Log in to your hosting control panel (e.g., cPanel, Plesk, or Elexdon Hosting’s custom panel).
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="2">
//               Navigate to the <strong>DNS Management</strong> or <strong>Zone Editor</strong> section.
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="3">
//               Add or update the necessary DNS records as instructed by your hosting provider.
//             </StepListItem>
//           </StepList>
//         </StepContainer>

//         <StepContainer
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <StepTitle as={motion.h2} variants={itemVariants}>Step 7: Test Your Website</StepTitle>
//           <StepList>
//             <StepListItem as={motion.li} variants={listItemVariants} number="1">
//               Once DNS propagation is complete, open your browser and visit your domain (e.g., <a href="http://mydomain.com" target="_blank" rel="noopener noreferrer">http://mydomain.com</a>).
//             </StepListItem>
//             <StepListItem as={motion.li} variants={listItemVariants} number="2">
//               Ensure your website loads correctly and all services (e.g., email, FTP) are functioning as expected.
//             </StepListItem>
//           </StepList>
//         </StepContainer>

//         <TroubleshootingSection
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={containerVariants}
//         >
//           <TroubleshootingTitle as={motion.h3} variants={itemVariants}>Troubleshooting</TroubleshootingTitle>
//           <TroubleshootingList>
//             <TroubleshootingListItem as={motion.li} variants={listItemVariants}>
//               <strong>DNS Propagation Delays:</strong> If your website or email is not working immediately, wait up to 48 hours for DNS changes to propagate fully.
//             </TroubleshootingListItem>
//             <TroubleshootingListItem as={motion.li} variants={listItemVariants}>
//               <strong>Incorrect Name Servers:</strong> Double-check the name server entries for typos or errors.
//             </TroubleshootingListItem>
//             <TroubleshootingListItem as={motion.li} variants={listItemVariants}>
//               <strong>Contact Support:</strong> If you encounter issues, contact your domain registrar or hosting provider for assistance.
//             </TroubleshootingListItem>
//           </TroubleshootingList>
//         </TroubleshootingSection>

//       </ContentWrapper>
//     </PageContainer>
//   );
// };

// export default NameserverConfigurationPage;





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

const NameserverBlock = styled(motion.div)`
  background: #faf5ff;
  border: 1px solid rgba(79, 70, 229, 0.2);
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 10px;
  text-align: center;
  box-sizing: border-box;
`;

const NameserverText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #4f46e5;
  margin: 4px 0;

  &:last-child {
    margin-bottom: 0;
  }
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

const NameserverConfigurationPage = () => {
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
          Configuring Nameservers
        </MainHeading>
        
        <Subtitle
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Here is a step-by-step guide on how to configure your domain’s name servers to point to:
        </Subtitle>

        <NameserverBlock
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <NameserverText>ns1.elexdonhost.com</NameserverText>
          <NameserverText>ns2.elexdonhost.com</NameserverText>
        </NameserverBlock>

        <StepContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <StepTitle as={motion.h2} variants={itemVariants}>Step 1: Log in to Your Domain Registrar</StepTitle>
          <StepList>
            <StepListItem as={motion.li} variants={listItemVariants} number="1">
              Log in to your account using your credentials.
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="2">
              Navigate to the <strong>Domain Management</strong> or <strong>My Domains</strong> section.
            </StepListItem>
          </StepList>
        </StepContainer>

        <StepContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <StepTitle as={motion.h2} variants={itemVariants}>Step 2: Locate Your Domain</StepTitle>
          <StepList>
            <StepListItem as={motion.li} variants={listItemVariants} number="1">
              Find the domain you want to update in the list of domains.
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="2">
              Click on the domain name to access its settings.
            </StepListItem>
          </StepList>
        </StepContainer>

        <StepContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <StepTitle as={motion.h2} variants={itemVariants}>Step 3: Access Name Server Settings</StepTitle>
          <StepList>
            <StepListItem as={motion.li} variants={listItemVariants} number="1">
              Look for an option labeled <strong>Name Servers</strong>, <strong>DNS Settings</strong>, or <strong>Domain Name Servers</strong>.
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="2">
              Click on the option to edit or manage the name servers.
            </StepListItem>
          </StepList>
        </StepContainer>

        <StepContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <StepTitle as={motion.h2} variants={itemVariants}>Step 4: Update the Name Servers</StepTitle>
          <StepList>
            <StepListItem as={motion.li} variants={listItemVariants} number="1">
              Select the option to <strong>Use Custom Name Servers</strong> or <strong>Edit Name Servers</strong>.
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="2" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
              <span>Enter the following name servers provided by Elexdon Hosting:</span>
              <SubStepList>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  <strong>Name Server 1:</strong> <strong>ns1.elexdonhost.com</strong>
                </SubStepListItem>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  <strong>Name Server 2:</strong> <strong>ns2.elexdonhost.com</strong>
                </SubStepListItem>
              </SubStepList>
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="3">
              If there are additional fields for more name servers, you can leave them blank or remove any existing entries.
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="4">
              Save the changes.
            </StepListItem>
          </StepList>
        </StepContainer>

        <StepContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <StepTitle as={motion.h2} variants={itemVariants}>Step 5: Verify the Changes</StepTitle>
          <StepList>
            <StepListItem as={motion.li} variants={listItemVariants} number="1">
              After saving the changes, it may take up to <strong>24-48 hours</strong> for the updates to propagate globally (DNS propagation).
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="2" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
              <span>To verify the changes, you can use a DNS lookup tool (e.g., <a href="https://dnschecker.org" target="_blank" rel="noopener noreferrer">https://dnschecker.org</a>):</span>
              <SubStepList>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  Enter your domain name.
                </SubStepListItem>
                <SubStepListItem as={motion.li} variants={subListItemVariants}>
                  Check if the name servers are updated to <strong>ns1.elexdonhost.com</strong> and <strong>ns2.elexdonhost.com</strong>.
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
          <StepTitle as={motion.h2} variants={itemVariants}>Step 6: Update DNS Records (If Required)</StepTitle>
          <motion.p variants={itemVariants} style={{ fontSize: '0.9rem', marginBottom: '8px', color: '#475569' }}>
            If your hosting provider requires specific DNS records (e.g., A records, MX records, CNAME), you may need to configure them in your hosting control panel or DNS management tool. Here is how:
          </motion.p>
          <StepList>
            <StepListItem as={motion.li} variants={listItemVariants} number="1">
              Log in to your hosting control panel (e.g., cPanel or Elexdon Hosting panel).
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="2">
              Navigate to the <strong>DNS Management</strong> or <strong>Zone Editor</strong> section.
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="3">
              Add or update the necessary DNS records as instructed by your hosting provider.
            </StepListItem>
          </StepList>
        </StepContainer>

        <StepContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <StepTitle as={motion.h2} variants={itemVariants}>Step 7: Test Your Website</StepTitle>
          <StepList>
            <StepListItem as={motion.li} variants={listItemVariants} number="1">
              Once DNS propagation is complete, open your browser and visit your domain (e.g., <a href="http://mydomain.com" target="_blank" rel="noopener noreferrer">http://mydomain.com</a>).
            </StepListItem>
            <StepListItem as={motion.li} variants={listItemVariants} number="2">
              Ensure your website loads correctly and all services (e.g., email, FTP) are functioning as expected.
            </StepListItem>
          </StepList>
        </StepContainer>

        <TroubleshootingSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <TroubleshootingTitle as={motion.h3} variants={itemVariants}>Troubleshooting</TroubleshootingTitle>
          <TroubleshootingList>
            <TroubleshootingListItem as={motion.li} variants={listItemVariants}>
              <strong>DNS Propagation Delays:</strong> If your website or email is not working immediately, wait up to 48 hours for DNS changes to propagate fully.
            </TroubleshootingListItem>
            <TroubleshootingListItem as={motion.li} variants={listItemVariants}>
              <strong>Incorrect Name Servers:</strong> Double-check the name server entries for typos or errors.
            </TroubleshootingListItem>
            <TroubleshootingListItem as={motion.li} variants={listItemVariants}>
              <strong>Contact Support:</strong> If you encounter issues, contact your domain registrar or hosting provider for assistance.
            </TroubleshootingListItem>
          </TroubleshootingList>
        </TroubleshootingSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default NameserverConfigurationPage;