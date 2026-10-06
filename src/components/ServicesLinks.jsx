
// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';

// // Import icons from react-icons (Font Awesome set used here)
// import {
//   FaGlobe, FaExchangeAlt, FaServer, FaStore, FaHdd, FaCloud,
//   FaWordpress, FaLock, FaCogs, FaKey
// } from 'react-icons/fa';
// import DomainModal from './DomainModal';

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
// //   width:100%;

//   @media (max-width: 768px) {
//     padding: 30px 15px;
//     align-items: flex-start;
//   }
// `;

// const ContentWrapper = styled.div`
// //   max-width: 600px;
//   width: 100%;
// //   margin: 0 auto;
//   background-color: #ffffff;
//   border-radius: 10px;
// //   box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
//   padding: 10px 10px;
//   animation: ${fadeIn} 1s ease-out;


// `;

// const SectionHeading = styled(motion.h2)`
//   font-size: 1rem;
//   color: #2B32B2;
//   text-align: center;
// //   margin-bottom: 30px;
//   font-weight: 900;
//   border-bottom: 2px solid #e0e7ee;
// //   padding-bottom: 15px;
//   display: inline-block; /* To make border-bottom only cover text */
//   width: 100%; /* Ensure it spans full width */
//   box-sizing: border-box; /* Include padding in width */


// `;

// const LinkList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display:flex;
//   flex-wrap:wrap;

// `;

// const LinkListItem = styled(motion.li)`
// //   margin-bottom: 15px;
//   background-color: #f8fcfd; /* Very light blue for list items */
//   border-radius: 10px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
//   transition: all 0.3s ease;
//   width:50%;

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
//     background-color: #e6f7ff; /* Lighter blue on hover */
//   }

//   a {
//     display: flex;
//     align-items: center;
//     padding: 18px 25px;
//     text-decoration: none;
//     color: #333;
//     font-size: 1.2em;
//     font-weight: 500;
//     position: relative;
//     overflow: hidden;

//     svg {
//       margin-right: 15px;
//     //   color: #007bff; /* Icon color */
//     color:#2B32B2;
//       font-size: 1.5em;
//       transition: transform 0.3s ease;

//       @media (max-width: 768px) {
//         font-size: 1.3em;
//         margin-right: 12px;
//       }
//     }

//     &:hover svg {
//       transform: scale(1.1); /* Slightly enlarge icon on hover */
//     }

//     @media (max-width: 768px) {
//       font-size: 1.1em;
//       padding: 15px 20px;
//     }

//     @media (max-width: 480px) {
//       font-size: 1em;
//       padding: 12px 15px;
//     }
//   }
// `;

// const Separator = styled(motion.hr)`
//   border: none;
//   border-top: 1px dashed #e0e7ee;
//   margin: 40px auto;
//   width: 50%;
//   animation: ${fadeIn} 1s ease-out;

//   @media (max-width: 768px) {
//     margin: 30px auto;
//   }
// `;

// const Select = styled.select`

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

// // --- React Component ---

// const ServicesLinks = () => {


//  const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
// const [modalOpen, setModalOpen] = useState(false);


//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (!user?.id) {
//       setError('User not found. Please log in again.');
//       setLoading(false);
//       return;
//     }

//     const fetchServices = async () => {
//       try {
//         const res = await fetch(
//           `https://www.elexdonhost.com/api_elexdonhost/get_active_services_by_user.php?id=${user.id}`
//         );
//         const data = await res.json();

//         if (data.success) {
//           setServices(data.services);
//           console.log(data)
//         } else {
//           setError(data.message);
//         }
//       } catch (err) {
//         setError('Failed to fetch services.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);



//   return (
//     // <PageContainer>
//       <ContentWrapper
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//       >
//         <SectionHeading variants={itemVariants}>Order New Product / Service</SectionHeading>
//         <LinkList>
//           <LinkListItem variants={itemVariants}>
//             <Link to="/domainspage">
//               <FaGlobe /> Purchase Domain
//             </Link>
//           </LinkListItem>
//           <LinkListItem variants={itemVariants}>
//             <Link to="/domaintransfer">
//               <FaExchangeAlt /> Transfer Domain
//             </Link>
//           </LinkListItem>
//           <LinkListItem variants={itemVariants}>
//             <Link to="/sharedhosting">
//               <FaServer /> Shared Hosting
//             </Link>
//           </LinkListItem>
//           {/* <LinkListItem variants={itemVariants}>
//             <Link to="/resellerhosting">
//               <FaStore /> Reseller Hosting
//             </Link>
//           </LinkListItem> */}
//           {/* <LinkListItem variants={itemVariants}>
//             <Link to="/dedicatedhosting">
//               <FaHdd /> Dedicated Hosting
//             </Link>
//           </LinkListItem> */}
//           {/* <LinkListItem variants={itemVariants}>
//             <Link to="/vps">
//               <FaCloud /> VPS Hosting
//             </Link>
//           </LinkListItem> */}
//           <LinkListItem variants={itemVariants}>
//             <Link to="/wordpresshosting">
//               <FaWordpress /> Wordpress Hosting
//             </Link>
//           </LinkListItem>
//           <LinkListItem variants={itemVariants}>
//             <Link to="/sslpage">
//               <FaLock /> SSL
//             </Link>
//           </LinkListItem>
//         </LinkList>

//         <Separator variants={itemVariants} />

//         <LinkList>
//           {/* <LinkListItem variants={itemVariants} onClick={()=>setModalOpen(true)}>
//             <Link>
//               <FaCogs /> Login to cPanel
//             </Link>
//           </LinkListItem> */}
          
//  <DomainModal
//         open={modalOpen}
//         onClose={() => setModalOpen(false)}
//         services={services}
//       />

        
//           <LinkListItem variants={itemVariants}>
//             <Link to="/forgot-password">
//               <FaKey /> Change Account Password
//             </Link>
//           </LinkListItem>
//         </LinkList>
//       </ContentWrapper>
//     // </PageContainer>
//   );
// };

// export default ServicesLinks;






import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Import icons from react-icons
import {
  FaGlobe, FaExchangeAlt, FaServer, FaWordpress, FaLock, FaKey,
  FaShieldAlt
} from 'react-icons/fa';
import DomainModal from './DomainModal';
import { Context } from './Context';

// --- Styled Components ---

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ContentWrapper = styled(motion.div)`
  width: 100%;
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
  padding: 24px;
  animation: ${fadeIn} 0.4s ease-out;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const SectionHeading = styled(motion.h2)`
  font-size: 0.95rem;
  color: #0F172A;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 16px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid #F1F5F9;
  width: 100%;
  box-sizing: border-box;
`;



const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  button {
    width: 100%;
    /* Visual Styling */
    background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
    color: #ffffff;
    border: none;
    border-radius: 8px;
    
    /* Typography & Spacing */
    font-size: 1rem;
    font-weight: 600;
    padding: 12px 20px;
    letter-spacing: 0.3px;
    
    /* Layout & Interaction */
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    /* Transitions & Shadows */
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
    transition: all 0.25s ease-in-out;

    /* Hover & Active States */
    &:hover {
      background: linear-gradient(135deg, #4338ca 0%, #7e22ce 100%);
      box-shadow: 0 6px 16px rgba(147, 51, 234, 0.35);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(79, 70, 229, 0.2);
    }

    &:focus-visible {
      outline: 2px solid #ffffff;
      outline-offset: 2px;
    }
  }
`;

const LinkListItem = styled(motion.li)`
  background-color: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: calc(50% - 6px);
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    transform: translateY(-2px);
    border-color: #4f46e5;
    box-shadow: 0 10px 20px -5px rgba(79, 70, 229, 0.1);
    background-color: #FAFAFF;

    svg {
      transform: scale(1.1);
      color: #4f46e5;
    }
  }

  a {
    display: flex;
    align-items: center;
    padding: 16px 20px;
    text-decoration: none;
    color: #0F172A;
    font-size: 0.95rem;
    font-weight: 600;
    position: relative;
    overflow: hidden;

    svg {
      margin-right: 14px;
      color: #64748B;
      font-size: 1.25rem;
      transition: all 0.2s ease;

      @media (max-width: 768px) {
        font-size: 1.15rem;
        margin-right: 12px;
      }
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding: 14px 16px;
    }
  }
`;



const Separator = styled(motion.hr)`
  border: none;
  border-top: 1px solid #F1F5F9;
  margin: 24px 0;
  width: 100%;
`;

// Animation variants for framer-motion
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// --- React Component ---

const ServicesLinks = ({setIsModalOpen}) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { api_domain, api_key } = useContext(Context);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      setError('User not found. Please log in again.');
      setLoading(false);
      return;
    }

    let user;
    try {
      user = JSON.parse(storedUser);
    } catch (e) {
      setError('Invalid session data.');
      setLoading(false);
      return;
    }

    if (!user?.id) {
      setError('User not found. Please log in again.');
      setLoading(false);
      return;
    }

    const fetchServices = async () => {
      try {
        const endpoint = api_domain && api_key 
          ? `${api_domain}/get_active_services_by_user.php?id=${user.id}&key=${api_key}`
          : `https://www.elexdonhost.com/api_elexdonhost/get_active_services_by_user.php?id=${user.id}`;
          
        const res = await fetch(endpoint);
        const data = await res.json();

        if (data.success) {
          setServices(data.services);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('Failed to fetch services.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [api_domain, api_key]);

  return (
    <>
      <ContentWrapper
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SectionHeading variants={itemVariants}>SSL & Email Hosting</SectionHeading>
      <LinkList>
        <button onClick={() => setIsModalOpen(true)}>Manage Your SSL & Email Hosting</button>
          </LinkList>
       

      <DomainModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        services={services}
      />
    </ContentWrapper>
    <ContentWrapper
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SectionHeading variants={itemVariants}>Order New Product / Service</SectionHeading>
      <LinkList>
        <LinkListItem variants={itemVariants}>
          <Link to="/domainspage">
            <FaGlobe /> Purchase Domain
          </Link>
        </LinkListItem>
        <LinkListItem variants={itemVariants}>
          <Link to="/domaintransfer">
            <FaExchangeAlt /> Transfer Domain
          </Link>
        </LinkListItem>
        <LinkListItem variants={itemVariants}>
          <Link to="/sharedhosting">
            <FaServer /> Shared Hosting
          </Link>
        </LinkListItem>
        <LinkListItem variants={itemVariants}>
          <Link to="/wordpresshosting">
            <FaWordpress /> WordPress Hosting
          </Link>
        </LinkListItem>
        <LinkListItem variants={itemVariants} style={{ width: '100%' }}>
          <Link to="/sslpage">
            <FaLock /> SSL Certificates
          </Link>
        </LinkListItem>
      </LinkList>

      <Separator variants={itemVariants} />

      <LinkList>
        <LinkListItem variants={itemVariants} style={{ width: '100%' }}>
          <Link to="/forgot-password">
            <FaKey /> Change Account Password
          </Link>
        </LinkListItem>
      </LinkList>

      <DomainModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        services={services}
      />
    </ContentWrapper>
    </>
    
  );
};

export default ServicesLinks;