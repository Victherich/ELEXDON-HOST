import React, {useContext} from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import { Context } from "./Context";


// ==========================================
// PACKAGES STYLED COMPONENTS
// ==========================================

const PackagesSection = styled.section`
  padding: 20px 10px;
  background: #f7fafc;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #0f172a;
  font-size: 2rem;
  margin: 0 0 15px 0;
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
`;

const PackageCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05);
  transition: transform 0.3s;
  border-top: 4px solid #4f46e5;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  &:hover {
    transform: translateY(-4px);
  }
`;

const PackageTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0;
  color: #0f172a;
`;

const PackagePrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FeatureItem = styled.li`
  margin: 0;
  color: #475569;
  font-size: 0.95rem;
  &::before {
    content: "✔";
    color: #9333ea;
    margin-right: 8px;
    font-weight: bold;
  }
`;

const PlanButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  margin: 5px 0 0 0;
  transition: 0.3s;
  &:hover {
    opacity: 0.9;
  }
`;

// ==========================================
// PACKAGES ARRAY DATA
// ==========================================

// const packages = [
//   {
//     id: "1",
//     title: "Email Plus Core",
//     price: "NGN 20,000 / user / month",
//     numericPrice: 20000,
//     duration: "1 month",
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
//   {
//     id: "2",
//     title: "Email Plus Workspace",
//     price: "NGN 25,000 / user / month",
//     numericPrice: 25000,
//     duration: "1 month",
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

// ==========================================
// COMPONENT EXPORT
// ==========================================




export default function EmailPackages() {
const navigate = useNavigate();
const {emailPackages} = useContext(Context);

      const handleOrderClick = (plan) => {
    // Save selected plan details into localStorage
    localStorage.setItem('checkout_email_plan', JSON.stringify({
      productId: plan.id,
      name: plan.title,
      numericPrice: plan.numericPrice,
      duration: plan.duration
    }));

    // Navigate without state
    navigate(`/emailcheckout`);
  };


  return (
    <PackagesSection id="packages">
      <SectionTitle>Email Hosting Packages</SectionTitle>
      <Fade cascade damping={0.2} triggerOnce={false}>
        <PackagesGrid>
          {emailPackages.map((pkg, index) => (
            <PackageCard key={pkg.id || index}>
              <PackageTitle>{pkg.title}</PackageTitle>
              <PackagePrice>{pkg.price}</PackagePrice>
              <FeatureList>
                {pkg.features.map((feature, i) => (
                  <FeatureItem key={i}>{feature}</FeatureItem>
                ))}
              </FeatureList>
              <PlanButton href={pkg.buttonHref} onClick={() => handleOrderClick(pkg)}>
                {pkg.buttonText}
              </PlanButton>
            </PackageCard>
          ))}
        </PackagesGrid>
      </Fade>
    </PackagesSection>
  );
}