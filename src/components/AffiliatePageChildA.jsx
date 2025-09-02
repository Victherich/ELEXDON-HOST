
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// --- Styled Components ---

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden; /* Prevent horizontal scroll due to animations */
  background: linear-gradient(to bottom right, #f0f4f8, #e0e7ee);
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const HeaderSection = styled.section`
  text-align: center;
  margin-bottom: 60px;
  padding: 50px 0;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 30px 0;
    margin-bottom: 40px;
  }
`;

const MainHeading = styled(motion.h1)`
  font-size: 3.5em;
  color: #007bff;
  margin-bottom: 10px;
  font-weight: bold;
  letter-spacing: -1px;

  @media (max-width: 1024px) {
    font-size: 2.8em;
  }

  @media (max-width: 768px) {
    font-size: 2.2em;
  }

  @media (max-width: 480px) {
    font-size: 1.8em;
  }
`;

const SubHeading = styled(motion.h2)`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 2em;
  }

  @media (max-width: 768px) {
    font-size: 1.8em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Tagline = styled(motion.p)`
  font-size: 1.5em;
  color: #555;
  font-style: italic;

  @media (max-width: 1024px) {
    font-size: 1.2em;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const ContentSection = styled.section`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 50px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    padding: 30px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const SectionTitle = styled(motion.h3)`
  font-size: 2.2em;
  color: #007bff;
  margin-bottom: 30px;
  text-align: center;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.8em;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1em;
  margin-bottom: 25px;
  line-height: 1.8;
  color: #444;

  strong {
    color: #007bff;
    font-weight: bold;
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 20px;
  }
`;

const HighlightText = styled.span`
  color: #ff5722; /* A vibrant orange for highlights */
  font-weight: bold;
`;

const CommissionSection = styled.section`
  background-color: #e6f2ff; /* Light blue background */
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 50px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const CommissionValue = styled(motion.p)`
  font-size: 3em;
  color: #28a745; /* Green for earnings */
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }

  @media (max-width: 480px) {
    font-size: 2em;
  }
`;

const SmallText = styled(motion.p)`
  font-size: 1.2em;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

// --- React Component ---

const AffiliatePageChildA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const slideLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <PageContainer>
      {/* <HeaderSection>
        <MainHeading
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span variants={itemVariants}>Earn Money With</motion.span>
        </MainHeading>
        <SubHeading
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span variants={itemVariants}>Elexdon Host Affiliate</motion.span>
          <br />
          <motion.span variants={itemVariants}>Affiliate Program</motion.span>
        </SubHeading>
        <Tagline
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span variants={itemVariants}>Generate Revenue from the Traffic to your Site!</motion.span>
        </Tagline>
      </HeaderSection> */}

      <ContentSection>
        <SectionTitle
          as={motion.h3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          Why Join Elexdon Host Affiliate Program?
        </SectionTitle>
        <Paragraph
          as={motion.p}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideLeftVariants}
        >
          Our affiliate program is <strong>FREE</strong> to join, it’s easy to sign-up and requires no technical knowledge.
          Monetize the traffic to your site and get paid <HighlightText>CASH</HighlightText> just for recommending.
          There is no better time to start promoting <strong>ELEXDON</strong> services from your site than now!
        </Paragraph>
        <Paragraph
          as={motion.p}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideRightVariants}
        >
          There are many people out there who are making millions of Naira from <strong>commissions</strong> by selling and promoting Elexdon hosting
          services It's easy to sell our high-speed hosting to your audience! You earn up to <strong>₦100,000</strong> for every new customer you send our way through your affiliate
          link <a href="https://elexdonhost.com/affiliate" target="_blank" rel="noopener noreferrer">https://elexdonhost.com/affiliate</a>.
          Just tell your friends, family, website visitors and social media followers about Elexdon Hosting. Your
          earnings can pile up fast. We paid over <strong>₦2,500,000</strong> to our top affiliate last year. Yes, you heard me right, over Two Million five hundred thousand Naira.
        </Paragraph>
        <Paragraph
          as={motion.p}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          Sell more. Earn more. <strong>You earn more for every sale</strong> based on the number of sales you <strong>deliver each month</strong>.
          We provide all of the tools necessary for you to convert your existing traffic into sales.
        </Paragraph>
        <Paragraph
          as={motion.p}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideLeftVariants}
        >
          All you have to do is <strong>SIGN UP for an affiliate account</strong>, place a link or banner to us from your site, and for every sign up we receive, you earn money.
          It’s that simple.
        </Paragraph>
      </ContentSection>

      <CommissionSection>
        <SectionTitle
          as={motion.h3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          Your Earning Potential
        </SectionTitle>
        <CommissionValue
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          Earn up to <HighlightText>10%</HighlightText> one-time commission per referral!
        </CommissionValue>
        <SmallText
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          You can withdraw your accumulated funds once you have a minimum balance of N2,000.00.
        </SmallText>
      </CommissionSection>
    </PageContainer>
  );
};

export default AffiliatePageChildA;