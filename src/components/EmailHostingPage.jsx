import React from "react";
import styled from "styled-components";
import { Fade, Zoom } from "react-awesome-reveal";

// Background image (replace with your hosting bg)
import bgImage from "../Images/emailhosting.jpg"; 

// ---------- Styled Components ----------
const PageWrapper = styled.div`
  font-family: "Inter", sans-serif;
  color: #222;
`;

const HeroSection = styled.section`
  background: url(${bgImage}) center/cover no-repeat;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  padding-top:50px;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media(max-width:320px){
  font-size:2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled.a`
  background: #ff6b00;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  &:hover {
    background: #e65a00;
  }
`;

// Packages Section
const PackagesSection = styled.section`
  padding: 5rem 2rem;
  background: #f9f9f9;
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const PackageCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 6px 16px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const PackageTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #0d47a1;
`;

const PackagePrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ff6b00;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.5rem;
  &::before {
    content: "✔";
    color: green;
    margin-right: 0.5rem;
  }
`;

const BuyButton = styled.a`
  display: inline-block;
  background: #0d47a1;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
  &:hover {
    background: #09357a;
  }
`;

// ---------- Page Component ----------
export default function EmailHostingPage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <Zoom triggerOnce={false}>
            <HeroTitle>Email Hosting That Powers Your Business</HeroTitle>
            <HeroSubtitle>
              Reliable, secure, and professional email solutions tailored for growing businesses.  
              Choose the perfect plan for your team today.
            </HeroSubtitle>
            <HeroButton href="#packages">View Plans</HeroButton>
          </Zoom>
        </HeroContent>
      </HeroSection>

      {/* Packages Section */}
      <PackagesSection id="packages">
        <Fade cascade damping={0.2} triggerOnce={false}>
          <PackagesGrid>
            {/* Email Plus Core */}
            <PackageCard>
              <PackageTitle>Email Plus Core</PackageTitle>
              <PackagePrice>NGN 20000 / user / month</PackagePrice>
              <FeatureList>
                <FeatureItem>10 GB Mailbox per user</FeatureItem>
                <FeatureItem>Webmail & Mobile Access</FeatureItem>
                <FeatureItem>Advanced Spam Protection</FeatureItem>
                <FeatureItem>Custom Domain Emails</FeatureItem>
                <FeatureItem>99.9% Uptime Guarantee</FeatureItem>
              </FeatureList>
              <BuyButton href="">Get Started</BuyButton>
            </PackageCard>

            {/* Email Plus Workspace */}
            <PackageCard>
              <PackageTitle>Email Plus Workspace</PackageTitle>
              <PackagePrice>NGN 25000 / user / month</PackagePrice>
              <FeatureList>
                <FeatureItem>30 GB Mailbox per user</FeatureItem>
                <FeatureItem>Collaboration Tools & Calendars</FeatureItem>
                <FeatureItem>File Storage & Sharing</FeatureItem>
                <FeatureItem>Video Conferencing Support</FeatureItem>
                <FeatureItem>Priority Customer Support</FeatureItem>
              </FeatureList>
              <BuyButton href="">Get Started</BuyButton>
            </PackageCard>
          </PackagesGrid>
        </Fade>
      </PackagesSection>
    </PageWrapper>
  );
}

