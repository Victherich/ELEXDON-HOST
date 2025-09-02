
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Import icons from react-icons (Font Awesome set used here)
import {
  FaGlobe, FaExchangeAlt, FaServer, FaStore, FaHdd, FaCloud,
  FaWordpress, FaLock, FaCogs, FaKey
} from 'react-icons/fa';
import DomainModal from './DomainModal';

// --- Styled Components ---

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.7;
  overflow-x: hidden;
  background: linear-gradient(to bottom right, #f7f9fc, #eef3f8);
  padding: 60px 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align content to the top */
//   width:100%;

  @media (max-width: 768px) {
    padding: 30px 15px;
    align-items: flex-start;
  }
`;

const ContentWrapper = styled.div`
//   max-width: 600px;
  width: 100%;
//   margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
//   box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  padding: 10px 10px;
  animation: ${fadeIn} 1s ease-out;


`;

const SectionHeading = styled(motion.h2)`
  font-size: 1rem;
  color: #2B32B2;
  text-align: center;
//   margin-bottom: 30px;
  font-weight: 900;
  border-bottom: 2px solid #e0e7ee;
//   padding-bottom: 15px;
  display: inline-block; /* To make border-bottom only cover text */
  width: 100%; /* Ensure it spans full width */
  box-sizing: border-box; /* Include padding in width */


`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display:flex;
  flex-wrap:wrap;

`;

const LinkListItem = styled(motion.li)`
//   margin-bottom: 15px;
  background-color: #f8fcfd; /* Very light blue for list items */
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  width:50%;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    background-color: #e6f7ff; /* Lighter blue on hover */
  }

  a {
    display: flex;
    align-items: center;
    padding: 18px 25px;
    text-decoration: none;
    color: #333;
    font-size: 1.2em;
    font-weight: 500;
    position: relative;
    overflow: hidden;

    svg {
      margin-right: 15px;
    //   color: #007bff; /* Icon color */
    color:#2B32B2;
      font-size: 1.5em;
      transition: transform 0.3s ease;

      @media (max-width: 768px) {
        font-size: 1.3em;
        margin-right: 12px;
      }
    }

    &:hover svg {
      transform: scale(1.1); /* Slightly enlarge icon on hover */
    }

    @media (max-width: 768px) {
      font-size: 1.1em;
      padding: 15px 20px;
    }

    @media (max-width: 480px) {
      font-size: 1em;
      padding: 12px 15px;
    }
  }
`;

const Separator = styled(motion.hr)`
  border: none;
  border-top: 1px dashed #e0e7ee;
  margin: 40px auto;
  width: 50%;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    margin: 30px auto;
  }
`;

const Select = styled.select`

`

// Animation variants for framer-motion
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- React Component ---

const ServicesLinks = () => {


 const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user?.id) {
      setError('User not found. Please log in again.');
      setLoading(false);
      return;
    }

    const fetchServices = async () => {
      try {
        const res = await fetch(
          `https://www.elexdonhost.com/api_elexdonhost/get_active_services_by_user.php?id=${user.id}`
        );
        const data = await res.json();

        if (data.success) {
          setServices(data.services);
          console.log(data)
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
  }, []);



  return (
    // <PageContainer>
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
            <Link to="/resellerhosting">
              <FaStore /> Reseller Hosting
            </Link>
          </LinkListItem>
          <LinkListItem variants={itemVariants}>
            <Link to="/dedicatedhosting">
              <FaHdd /> Dedicated Hosting
            </Link>
          </LinkListItem>
          <LinkListItem variants={itemVariants}>
            <Link to="/vps">
              <FaCloud /> VPS Hosting
            </Link>
          </LinkListItem>
          <LinkListItem variants={itemVariants}>
            <Link to="/wordpresshosting">
              <FaWordpress /> Wordpress Hosting
            </Link>
          </LinkListItem>
          <LinkListItem variants={itemVariants}>
            <Link to="/sslpage">
              <FaLock /> SSL
            </Link>
          </LinkListItem>
        </LinkList>

        <Separator variants={itemVariants} />

        <LinkList>
          <LinkListItem variants={itemVariants} onClick={()=>setModalOpen(true)}>
            <Link>
              <FaCogs /> Login to cPanel
            </Link>
          </LinkListItem>
          
 <DomainModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        services={services}
      />

        
          <LinkListItem variants={itemVariants}>
            <Link to="/forgot-password">
              <FaKey /> Change Account Password
            </Link>
          </LinkListItem>
        </LinkList>
      </ContentWrapper>
    // </PageContainer>
  );
};

export default ServicesLinks;