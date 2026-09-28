
// import React from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';

// // --- Styled Components ---

// const TransferInstructionsContainer = styled(motion.div)`
//   background-color: #f8fcfd; /* Very light blue/grey background */
//   border: 1px solid #e0e7ee;
//   border-radius: 12px;
//   padding: 30px;
//   margin: 40px auto;
//   max-width: 700px;
//   box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
//   font-family: 'Arial', sans-serif;
//   color: #333;
//   line-height: 1.6;

//   @media (max-width: 768px) {
//     padding: 20px;
//     margin: 30px auto;
//   }

//   @media (max-width: 480px) {
//     padding: 15px;
//     margin: 20px auto;
//   }
// `;

// const Title = styled.h3`
//   font-size: 1.8em;
//   color: #007bff;
//   margin-bottom: 25px;
//   text-align: center;
//   font-weight: bold;

//   @media (max-width: 768px) {
//     font-size: 1.5em;
//     margin-bottom: 20px;
//   }
// `;

// const InstructionList = styled.ol`
//   list-style-type: none; /* Remove default numbering */
//   padding-left: 0;
//   margin: 0;
// `;

// const ListItem = styled.li`
//   margin-bottom: 20px;
//   padding-left: 35px; /* Space for custom number */
//   position: relative;
//   font-size: 1.1em;
//   line-height: 1.7;

//   strong {
//     color: #007bff;
//     font-weight: 700;
//   }

//   &:before {
//     content: "${props => props.number}.";
//     position: absolute;
//     left: 0;
//     top: 0;
//     font-weight: bold;
//     color: #28a745; /* Green for numbers */
//     font-size: 1.2em;
//     width: 25px;
//     text-align: right;
//     margin-right: 10px;
//   }

//   @media (max-width: 768px) {
//     font-size: 1em;
//     margin-bottom: 15px;
//     padding-left: 30px;
//     &:before {
//       font-size: 1.1em;
//       width: 20px;
//     }
//   }
// `;

// // Animation variants for framer-motion
// const containerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: "easeOut",
//       when: "beforeChildren", // Animate container before its children
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// /**
//  * React component to display instructions for domain transfer.
//  * @param {object} props
//  * @param {string} props.domainName - The domain name relevant to the instructions (e.g., "example.com").
//  */
// const DomainTransferInstructions = ({ domainName = '[yourdomain.com]' }) => {
//   return (
//     <TransferInstructionsContainer
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       <Title as={motion.h3} variants={itemVariants}>
//         Before proceeding with the transfer, please ensure the following:
//       </Title>
//       <InstructionList>
//         <ListItem as={motion.li} variants={itemVariants} number="1">
//           <strong>Unlock Your Domain:</strong> Log in to your current domain registrar's account (e.g., GoDaddy, Namecheap, etc.) and disable the 'Registrar Lock' or 'Transfer Lock' for '<strong>{domainName}</strong>'.
//         </ListItem>
//         <ListItem as={motion.li} variants={itemVariants} number="2">
//           <strong>Get Your EPP Code:</strong> Also from your current registrar's account, find and copy the 'Authorization Code' (also known as EPP Code, AuthInfo Code, or Transfer Secret) for '<strong>{domainName}</strong>'.
//         </ListItem>
//         <ListItem as={motion.li} variants={itemVariants} number="3">
//           <strong>Check 60-Day Rule:</strong> Your domain must have been registered or transferred at least 60 days ago.
//         </ListItem>
//         <ListItem as={motion.li} variants={itemVariants} number="4">
//           <strong>Disable Privacy (Temporarily):</strong> If you have WHOIS Privacy enabled, you might need to temporarily disable it during the transfer process at your current registrar.
//         </ListItem>
//         <ListItem as={motion.li} variants={itemVariants} number="5">
//           <strong>Ensure Correct Admin Contact:</strong> Make sure the administrative contact email in your WHOIS record is up-to-date and accessible, as transfer confirmation emails might be sent there.
//         </ListItem>
//       </InstructionList>
//     </TransferInstructionsContainer>
//   );
// };

// export default DomainTransferInstructions;




import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// --- Styled Components ---

const TransferInstructionsContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid #eae2f8;
  border-radius: 16px;
  padding: 40px;
  margin: 0 auto;
  max-width: 1000px;
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.04);
  font-family: 'Arial', sans-serif;
  color: #61758a;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const Title = styled.h3`
  font-size: 1.6rem;
  color: #102a43;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 900;

  span {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 20px;
  }
`;

const InstructionGrid = styled.ol`
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ListItem = styled.li`
  margin: 0;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #eae2f8;
  border-radius: 12px;
  position: relative;
  font-size: 0.95rem;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.02);

  strong {
    color: #102a43;
    font-weight: 800;
    font-size: 1.05rem;
  }

  /* Highlight inline domain emphasis */
  strong span, span.highlight {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .step-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(79, 70, 229, 0.08);
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    font-size: 1.1rem;
  }
`;

// Animation variants for framer-motion
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/**
 * React component to display instructions for domain transfer.
 * @param {object} props
 * @param {string} props.domainName - The domain name relevant to the instructions (e.g., "example.com").
 */
const DomainTransferInstructions = ({ domainName = '[yourdomain.com]' }) => {
  return (
    <TransferInstructionsContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Title as={motion.h3} variants={itemVariants}>
        Before proceeding with the <span>transfer</span>, please ensure the following:
      </Title>
      <InstructionGrid as={motion.ol} variants={itemVariants}>
        <ListItem as={motion.li} variants={itemVariants}>
          <span className="step-badge">01</span>
          <strong>Unlock Your Domain</strong>
          <span>Log in to your current registrar and disable the 'Registrar Lock' or 'Transfer Lock' for <strong>{domainName}</strong>.</span>
        </ListItem>
        
        <ListItem as={motion.li} variants={itemVariants}>
          <span className="step-badge">02</span>
          <strong>Get Your EPP Code</strong>
          <span>Retrieve the 'Authorization Code' (EPP Code or AuthInfo Code) from your current registrar dashboard.</span>
        </ListItem>

        <ListItem as={motion.li} variants={itemVariants}>
          <span className="step-badge">03</span>
          <strong>Check 60-Day Rule</strong>
          <span>Ensure your domain has been registered or previously transferred at least 60 days ago.</span>
        </ListItem>

        <ListItem as={motion.li} variants={itemVariants}>
          <span className="step-badge">04</span>
          <strong>Disable Privacy</strong>
          <span>Temporarily disable WHOIS Privacy protection at your current registrar to allow smooth verification.</span>
        </ListItem>

        <ListItem as={motion.li} variants={itemVariants} style={{ gridColumn: '1 / -1' }}>
          <span className="step-badge">05</span>
          <strong>Ensure Correct Admin Contact</strong>
          <span>Make sure the administrative contact email in your WHOIS record is fully up-to-date and accessible for approvals.</span>
        </ListItem>
      </InstructionGrid>
    </TransferInstructionsContainer>
  );
};

export default DomainTransferInstructions;