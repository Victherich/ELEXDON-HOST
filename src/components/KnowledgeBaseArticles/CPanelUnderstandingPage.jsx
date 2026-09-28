
// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { motion } from 'framer-motion';
// import { FaArrowCircleLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
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
//     transform: translateY(30px);
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
//   margin-bottom: 40px;
//   font-weight: 700;
//   letter-spacing: -0.5px;
//   border-bottom: 3px solid #007bff;
//   padding-bottom: 15px;
//   display: inline-block; /* To make border-bottom only cover text */
//   animation: ${fadeIn} 1.5s ease-out;

//   @media (max-width: 1024px) {
//     font-size: 2.8em;
//   }

//   @media (max-width: 768px) {
//     font-size: 2.2em;
//     margin-bottom: 30px;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.8em;
//     padding-bottom: 10px;
//   }
// `;

// const SectionParagraph = styled(motion.p)`
//   font-size: 1.1em;
//   margin-bottom: 25px;
//   color: #555;

//   @media (max-width: 768px) {
//     font-size: 1em;
//     margin-bottom: 20px;
//   }
// `;

// const SectionTitle = styled(motion.h2)`
//   font-size: 2em;
//   color: #333;
//   margin-top: 40px;
//   margin-bottom: 25px;
//   font-weight: 600;
//   position: relative;
//   padding-left: 20px;

//   &:before {
//     content: ' ';
//     position: absolute;
//     left: 0;
//     top: 50%;
//     transform: translateY(-50%);
//     width: 8px;
//     height: 8px;
//     background-color: #007bff;
//     border-radius: 50%;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.7em;
//     margin-top: 30px;
//     margin-bottom: 20px;
//     padding-left: 15px;
//     &:before {
//       width: 6px;
//       height: 6px;
//     }
//   }

//   @media (max-width: 480px) {
//     font-size: 1.4em;
//     padding-left: 12px;
//     &:before {
//       width: 5px;
//       height: 5px;
//     }
//   }
// `;

// const FeatureList = styled.ul`
//   list-style: none;
//   padding-left: 0;
//   margin-bottom: 40px;
// `;

// const FeatureListItem = styled(motion.li)`
//   font-size: 1.1em;
//   margin-bottom: 15px;
//   display: flex;
//   align-items: flex-start;
//   color: #444;

//   &:before {
//     content: '✓';
//     color: #28a745; /* Green checkmark */
//     font-size: 1.3em;
//     margin-right: 15px;
//     font-weight: bold;
//     line-height: 1.2;
//   }

//   strong {
//     color: #007bff;
//   }

//   @media (max-width: 768px) {
//     font-size: 1em;
//     margin-bottom: 12px;
//     &:before {
//       font-size: 1.2em;
//       margin-right: 10px;
//     }
//   }
// `;

// const TermList = styled.ul`
//   list-style: none;
//   padding-left: 0;
//   margin-bottom: 40px;
// `;

// const TermListItem = styled(motion.li)`
//   font-size: 1.1em;
//   margin-bottom: 15px;
//   color: #444;
//   position: relative;
//   padding-left: 25px;

//   &:before {
//     content: '•';
//     color: #ff5722; /* Orange bullet */
//     font-size: 1.5em;
//     position: absolute;
//     left: 0;
//     top: -2px;
//   }

//   strong {
//     color: #007bff;
//   }

//   @media (max-width: 768px) {
//     font-size: 1em;
//     margin-bottom: 12px;
//     padding-left: 20px;
//   }
// `;

// const ExampleList = styled.ul`
//   list-style: none;
//   padding-left: 0;
//   margin-bottom: 40px;
// `;

// const ExampleListItem = styled(motion.li)`
//   font-size: 1.1em;
//   margin-bottom: 15px;
//   color: #444;
//   position: relative;
//   padding-left: 25px;

//   &:before {
//     content: '›';
//     color: #6a1b9a; /* Purple arrow */
//     font-size: 1.5em;
//     position: absolute;
//     left: 0;
//     top: -2px;
//   }

//   strong {
//     color: #007bff;
//   }

//   @media (max-width: 768px) {
//     font-size: 1em;
//     margin-bottom: 12px;
//     padding-left: 20px;
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
// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const textRevealVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       staggerChildren: 0.05,
//       delayChildren: 0.2,
//     },
//   },
// };

// const charVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0 },
// };


// const AnimatedText = ({ text, variants }) => (
//     <motion.span
//         variants={variants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.6 }}
//         style={{ display: 'inline-block' }} // Needed for individual word animation
//     >
//         {text.split(" ").map((word, i) => (
//             <motion.span key={i} variants={charVariants} style={{ display: 'inline-block', marginRight: '0.25em' }}>
//                 {word}
//             </motion.span>
//         ))}
//     </motion.span>
// );


// // --- React Component ---

// const CPanelUnderstandingPage = () => {
//     const navigate = useNavigate();


//   return (
//     <PageContainer>
//         <Div onClick={()=>navigate('/knowledgebase')}>
// <FaArrowLeft/>
// <p>
// Back to<br/> Knowledgebase
// </p>
//         </Div>
        
//       <ContentWrapper>
//         <MainHeading
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           Understanding cPanel
//         </MainHeading>

//         <SectionParagraph
//           as={motion.p}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={itemVariants}
//         >
//           cPanel is a web-based control panel that provides a graphical interface and automation tools designed to
//           simplify the process of hosting a website. It allows users to manage various aspects of their website,
//           including files, emails, databases, and security settings.
//         </SectionParagraph>

//         <SectionTitle
//           as={motion.h2}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.6 }}
//           variants={itemVariants}
//         >
//           Key Features
//         </SectionTitle>
//         <FeatureList>
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInLeft}
//           >
//             <strong>File Management:</strong> Upload, edit, and manage files using the File Manager.
//           </FeatureListItem>
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInRight}
//           >
//             <strong>Email Management:</strong> Create and manage email accounts, forwarders, and autoresponders.
//           </FeatureListItem>
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInLeft}
//           >
//             <strong>Database Management:</strong> Create and manage databases, users, and privileges.
//           </FeatureListItem>
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInRight}
//           >
//             <strong>Security:</strong> Manage passwords, IP blocks, and SSL certificates.
//           </FeatureListItem>
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInLeft}
//           >
//             <strong>Domain Management:</strong> Manage domain settings, subdomains, and redirects.
//           </FeatureListItem>
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInRight}
//           >
//             <strong>Statistics:</strong> View website statistics, such as visitor logs and bandwidth usage.
//           </FeatureListItem>
//         </FeatureList>

//         <SectionTitle
//           as={motion.h2}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.6 }}
//           variants={itemVariants}
//         >
//           Common Terms
//         </SectionTitle>
//         <TermList>
//           <TermListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInUp}
//           >
//             <strong>Control Panel:</strong> A graphical interface for managing website settings.
//           </TermListItem>
//           <TermListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInUp}
//           >
//             <strong>Domain:</strong> A unique web address (e.g., example.com).
//           </TermListItem>
//           <TermListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInUp}
//           >
//             <strong>Subdomain:</strong> A subset of a domain (e.g., blog.example.com).
//           </TermListItem>
//           <TermListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInUp}
//           >
//             <strong>FTP:</strong> File Transfer Protocol for uploading and downloading files.
//           </TermListItem>
//           <TermListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInUp}
//           >
//             <strong>Database:</strong> A storage system for website data.
//           </TermListItem>
//           <TermListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInUp}
//           >
//             <strong>SSL Certificate:</strong> A security certificate for encrypting website data.
//           </TermListItem>
//         </TermList>

//         <SectionTitle
//           as={motion.h2}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.6 }}
//           variants={itemVariants}
//         >
//           cPanel Sections
//         </SectionTitle>
//         <FeatureList> {/* Reusing FeatureList styling for structure */}
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInLeft}
//           >
//             <strong>Dashboard:</strong> Overview of website statistics and alerts.
//           </FeatureListItem>
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInRight}
//           >
//             <strong>Files:</strong> File management tools.
//           </FeatureListItem>
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInLeft}
//           >
//             <strong>Emails:</strong> Email account management.
//           </FeatureListItem>
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInRight}
//           >
//             <strong>Databases:</strong> Database management.
//           </FeatureListItem>
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInLeft}
//           >
//             <strong>Security:</strong> Security settings and tools.
//           </FeatureListItem>
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInRight}
//           >
//             <strong>Domains:</strong> Domain management.
//           </FeatureListItem>
//         </FeatureList>

//         <SectionTitle
//           as={motion.h2}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.6 }}
//           variants={itemVariants}
//         >
//           Examples
//         </SectionTitle>
//         <ExampleList>
//           <ExampleListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInUp}
//           >
//             <strong>Creating an email account:</strong> Go to Emails <FaArrowRight/> Email Accounts <FaArrowRight/> Create a new email account.
//           </ExampleListItem>
//           <ExampleListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInUp}
//           >
//             <strong>Uploading files:</strong> Go to Files <FaArrowRight/> File Manager <FaArrowRight/> Upload files.
//           </ExampleListItem>
//           <ExampleListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInUp}
//           >
//             <strong>Creating a database:</strong> Go to Databases <FaArrowRight/> MySQL Databases <FaArrowRight/> Create a new database.
//           </ExampleListItem>
//         </ExampleList>

//         <SectionTitle
//           as={motion.h2}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.6 }}
//           variants={itemVariants}
//         >
//           Benefits
//         </SectionTitle>
//         <FeatureList> {/* Reusing FeatureList styling for structure */}
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInLeft}
//           >
//             <strong>User-friendly interface:</strong> Easy to navigate and manage website settings.
//           </FeatureListItem>
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInRight}
//           >
//             <strong>Automation tools:</strong> Streamlines tasks, such as backups and updates.
//           </FeatureListItem>
//           <FeatureListItem
//             as={motion.li}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             variants={slideInLeft}
//           >
//             <strong>Security features:</strong> Protects website from malware and unauthorized access.
//           </FeatureListItem>
//         </FeatureList>

//         <SectionParagraph
//           as={motion.p}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={itemVariants}
//           style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1.2em', color: '#007bff', marginTop: '50px' }}
//         >
//           By understanding cPanel, you'll be better equipped to manage your website's settings, security, and performance.
//         </SectionParagraph>
//       </ContentWrapper>
//     </PageContainer>
//   );
// };

// export default CPanelUnderstandingPage;

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

const SectionParagraph = styled(motion.p)`
  font-size: 0.95rem;
  margin: 0 0 10px 0;
  color: #334155;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 1.3rem;
  color: #4f46e5;
  margin: 10px 0 5px 0;
  font-weight: 600;
  position: relative;
  padding-left: 10px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    border-radius: 50%;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0 0 10px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FeatureListItem = styled(motion.li)`
  font-size: 0.9rem;
  margin: 0;
  display: flex;
  align-items: flex-start;
  color: #475569;
  background: #faf5ff;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid rgba(79, 70, 229, 0.08);
  box-sizing: border-box;

  &:before {
    content: '✓';
    color: #9333ea;
    font-size: 1rem;
    margin-right: 8px;
    font-weight: bold;
    line-height: 1;
  }

  strong {
    color: #4f46e5;
  }
`;

const TermList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0 0 10px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const TermListItem = styled(motion.li)`
  font-size: 0.9rem;
  margin: 0;
  color: #475569;
  position: relative;
  padding: 8px 10px 8px 25px;
  background: #faf5ff;
  border-radius: 8px;
  border: 1px solid rgba(79, 70, 229, 0.08);
  box-sizing: border-box;

  &:before {
    content: '•';
    color: #4f46e5;
    font-size: 1.2rem;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  strong {
    color: #4f46e5;
  }
`;

const ExampleList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0 0 10px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ExampleListItem = styled(motion.li)`
  font-size: 0.9rem;
  margin: 0;
  color: #475569;
  position: relative;
  padding: 8px 10px 8px 25px;
  background: #faf5ff;
  border-radius: 8px;
  border: 1px solid rgba(79, 70, 229, 0.08);
  box-sizing: border-box;

  &:before {
    content: '›';
    color: #9333ea;
    font-size: 1.2rem;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  strong {
    color: #4f46e5;
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
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const slideInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// --- React Component ---

const CPanelUnderstandingPage = () => {
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
          Understanding cPanel
        </MainHeading>

        <SectionParagraph
          as={motion.p}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          cPanel is a web-based control panel that provides a graphical interface and automation tools designed to
          simplify the process of hosting a website. It allows users to manage various aspects of their website,
          including files, emails, databases, and security settings.
        </SectionParagraph>

        <SectionTitle
          as={motion.h2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={itemVariants}
        >
          Key Features
        </SectionTitle>
        <FeatureList>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInLeft}
          >
            <strong>File Management:</strong> Upload, edit, and manage files using the File Manager.
          </FeatureListItem>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInRight}
          >
            <strong>Email Management:</strong> Create and manage email accounts, forwarders, and autoresponders.
          </FeatureListItem>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInLeft}
          >
            <strong>Database Management:</strong> Create and manage databases, users, and privileges.
          </FeatureListItem>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInRight}
          >
            <strong>Security:</strong> Manage passwords, IP blocks, and SSL certificates.
          </FeatureListItem>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInLeft}
          >
            <strong>Domain Management:</strong> Manage domain settings, subdomains, and redirects.
          </FeatureListItem>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInRight}
          >
            <strong>Statistics:</strong> View website statistics, such as visitor logs and bandwidth usage.
          </FeatureListItem>
        </FeatureList>

        <SectionTitle
          as={motion.h2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={itemVariants}
        >
          Common Terms
        </SectionTitle>
        <TermList>
          <TermListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInUp}
          >
            <strong>Control Panel:</strong> A graphical interface for managing website settings.
          </TermListItem>
          <TermListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInUp}
          >
            <strong>Domain:</strong> A unique web address (e.g., example.com).
          </TermListItem>
          <TermListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInUp}
          >
            <strong>Subdomain:</strong> A subset of a domain (e.g., blog.example.com).
          </TermListItem>
          <TermListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInUp}
          >
            <strong>FTP:</strong> File Transfer Protocol for uploading and downloading files.
          </TermListItem>
          <TermListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInUp}
          >
            <strong>Database:</strong> A storage system for website data.
          </TermListItem>
          <TermListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInUp}
          >
            <strong>SSL Certificate:</strong> A security certificate for encrypting website data.
          </TermListItem>
        </TermList>

        <SectionTitle
          as={motion.h2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={itemVariants}
        >
          cPanel Sections
        </SectionTitle>
        <FeatureList>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInLeft}
          >
            <strong>Dashboard:</strong> Overview of website statistics and alerts.
          </FeatureListItem>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInRight}
          >
            <strong>Files:</strong> File management tools.
          </FeatureListItem>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInLeft}
          >
            <strong>Emails:</strong> Email account management.
          </FeatureListItem>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInRight}
          >
            <strong>Databases:</strong> Database management.
          </FeatureListItem>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInLeft}
          >
            <strong>Security:</strong> Security settings and tools.
          </FeatureListItem>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInRight}
          >
            <strong>Domains:</strong> Domain management.
          </FeatureListItem>
        </FeatureList>

        <SectionTitle
          as={motion.h2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={itemVariants}
        >
          Examples
        </SectionTitle>
        <ExampleList>
          <ExampleListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInUp}
          >
            <strong>Creating an email account:</strong> Go to Emails <FaArrowRight style={{ fontSize: '0.8rem', verticalAlign: 'middle' }} /> Email Accounts <FaArrowRight style={{ fontSize: '0.8rem', verticalAlign: 'middle' }} /> Create a new email account.
          </ExampleListItem>
          <ExampleListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInUp}
          >
            <strong>Uploading files:</strong> Go to Files <FaArrowRight style={{ fontSize: '0.8rem', verticalAlign: 'middle' }} /> File Manager <FaArrowRight style={{ fontSize: '0.8rem', verticalAlign: 'middle' }} /> Upload files.
          </ExampleListItem>
          <ExampleListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInUp}
          >
            <strong>Creating a database:</strong> Go to Databases <FaArrowRight style={{ fontSize: '0.8rem', verticalAlign: 'middle' }} /> MySQL Databases <FaArrowRight style={{ fontSize: '0.8rem', verticalAlign: 'middle' }} /> Create a new database.
          </ExampleListItem>
        </ExampleList>

        <SectionTitle
          as={motion.h2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={itemVariants}
        >
          Benefits
        </SectionTitle>
        <FeatureList>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInLeft}
          >
            <strong>User-friendly interface:</strong> Easy to navigate and manage website settings.
          </FeatureListItem>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInRight}
          >
            <strong>Automation tools:</strong> Streamlines tasks, such as backups and updates.
          </FeatureListItem>
          <FeatureListItem
            as={motion.li}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideInLeft}
          >
            <strong>Security features:</strong> Protects website from malware and unauthorized access.
          </FeatureListItem>
        </FeatureList>

        <SectionParagraph
          as={motion.p}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '1rem', background: 'linear-gradient(135deg, #4f46e5, #9333ea)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginTop: '10px' }}
        >
          By understanding cPanel, you'll be better equipped to manage your website's settings, security, and performance.
        </SectionParagraph>
      </ContentWrapper>
    </PageContainer>
  );
};

export default CPanelUnderstandingPage;