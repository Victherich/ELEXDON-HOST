
// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import { motion } from 'framer-motion';

// // --- Styled Components ---

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const slideInRight = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(-20px);
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
//   overflow-x: hidden;
//   background: linear-gradient(to bottom right, #f7f9fc, #eef3f8);
//   padding: 60px 20px;
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: flex-start; /* Align content to the top */

//   @media (max-width: 768px) {
//     padding: 30px 15px;
//     align-items: flex-start;
//   }
// `;

// const ContentWrapper = styled.div`
//   max-width: 700px;
//   width: 100%;
//   margin: 0 auto;
//   background-color: #ffffff;
//   border-radius: 18px;
//   box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
//   padding: 50px 60px;
//   animation: ${fadeIn} 1s ease-out; /* Fade in the whole wrapper */

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
//   font-size: 2rem;
//   color: #007bff;
//   text-align: center;
//   margin-bottom: 40px;
//   font-weight: 700;
//   letter-spacing: -0.5px;
//   border-bottom: 3px solid #007bff;
//   padding-bottom: 15px;
//   display: inline-block;
//   animation: ${fadeIn} 1.5s ease-out;

//   @media (max-width: 1024px) {
//     font-size: 2.5em;
//     margin-bottom: 30px;
//   }

//   @media (max-width: 768px) {
//     font-size: 2em;
//     margin-bottom: 25px;
//     padding-bottom: 12px;
//   }

//   @media (max-width: 480px) {
//     font-size: 1.6em;
//     margin-bottom: 20px;
//     padding-bottom: 10px;
//   }
// `;

// const ArticleList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const ArticleListItem = styled(motion.li)`
//   margin-bottom: 20px;
//   background-color: rgba(0,0,255,0.2); /* Very light blue for list items */
//   border-radius: 10px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
//     background-color: #e6f7ff; /* Lighter blue on hover */
//   }

//   a {
//     display: block;
//     padding: 20px 30px;
//     text-decoration: none;
//     color: #333;
//     font-size: 1.3em;
//     font-weight: 500;
//     position: relative;
//     overflow: hidden; /* For pseudo-element animation */

//     &:before {
//       content: '→'; /* Arrow icon */
//       position: absolute;
//       right: 20px;
//       top: 50%;
//       transform: translateY(-50%);
//       font-size: 1.5em;
//       color: #007bff;
//       opacity: 0;
//       transition: all 0.3s ease;
//     }

//     &:hover:before {
//       right: 15px;
//       opacity: 1;
//     }

//     @media (max-width: 768px) {
//       font-size: 1.1em;
//       padding: 15px 20px;
//       &:before {
//         right: 15px;
//         font-size: 1.2em;
//       }
//     }

//     @media (max-width: 480px) {
//       font-size: 1em;
//       padding: 12px 15px;
//       &:before {
//         right: 10px;
//         font-size: 1em;
//       }
//     }
//   }
// `;

// // Animation variants for framer-motion
// const listContainerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15, // Delay between each list item animation
//     },
//   },
// };

// const listItemVariants = {
//   hidden: { opacity: 0, x: -50 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring",
//       damping: 10,
//       stiffness: 100,
//     },
//   },
// };

// // --- React Component ---

// const KnowledgeBaseTitle = () => {
//   const articles = [
//     { title: 'Understanding cPanel', path: '/cpanelunderstanding' },
//     { title: 'Email Setup in cPanel Tutorial', path: '/emailsetuptutorial' },
//     { title: 'Configuring Nameservers', path: '/nameserverconfiguration' },
//     { title: 'Understanding Registry Codes', path: '/registrycodes' },
//   ];

//   return (
//     <PageContainer>
//       <ContentWrapper>
//         <MainHeading
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           Explore Articles
//         </MainHeading>

//         <ArticleList
//           as={motion.ul}
//           variants={listContainerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {articles.map((article, index) => (
//             <ArticleListItem key={index} variants={listItemVariants}>
//               <Link to={article.path}>
//                 {article.title}
//               </Link>
//             </ArticleListItem>
//           ))}
//         </ArticleList>
//       </ContentWrapper>
//     </PageContainer>
//   );
// };

// export default KnowledgeBaseTitle;




import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

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
  background: #f8fafc;
  padding: 10px;
  // min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(79, 70, 229, 0.08);
  border: 1px solid rgba(79, 70, 229, 0.1);
  padding: 10px;
  animation: ${fadeIn} 1s ease-out;
  box-sizing: border-box;
`;

const MainHeading = styled(motion.h1)`
  font-size: 1.8rem;
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

const ArticleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ArticleListItem = styled(motion.li)`
  margin: 0;
  background-color: #faf5ff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.04);
  border: 1px solid rgba(79, 70, 229, 0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(147, 51, 234, 0.15);
    background-color: #f3e8ff;
    border-color: rgba(147, 51, 234, 0.3);
  }

  a {
    display: block;
    padding: 10px;
    text-decoration: none;
    color: #1e293b;
    font-size: 1rem;
    font-weight: 600;
    position: relative;
    box-sizing: border-box;

    &:before {
      content: '→';
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.1rem;
      color: #9333ea;
      opacity: 0;
      transition: all 0.2s ease;
    }

    &:hover:before {
      right: 10px;
      opacity: 1;
    }
  }
`;

// Animation variants for framer-motion
const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 120,
    },
  },
};

// --- React Component ---

const KnowledgeBaseTitle = () => {
  const articles = [
    { title: 'Understanding cPanel', path: '/cpanelunderstanding' },
    { title: 'Email Setup in cPanel Tutorial', path: '/emailsetuptutorial' },
    { title: 'Configuring Nameservers', path: '/nameserverconfiguration' },
    { title: 'Understanding Registry Codes', path: '/registrycodes' },
  ];

  return (
    <PageContainer>
      <ContentWrapper>
        <MainHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Explore Articles
        </MainHeading>

        <ArticleList
          as={motion.ul}
          variants={listContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {articles.map((article, index) => (
            <ArticleListItem key={index} variants={listItemVariants}>
              <Link to={article.path}>
                {article.title}
              </Link>
            </ArticleListItem>
          ))}
        </ArticleList>
      </ContentWrapper>
    </PageContainer>
  );
};

export default KnowledgeBaseTitle;