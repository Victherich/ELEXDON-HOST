import React from 'react';
import styled from 'styled-components';
import webmail from '../Images/webmail.jpeg'
import { useNavigate } from 'react-router-dom';

// ==========================================
// STYLED COMPONENTS (Matching Core Theme)
// ==========================================

const CtaContainer = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 50, 150, 0.08);
  border: 1px solid #e1e8ed;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContentColumn = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 576px) {
    padding: 30px 20px;
  }
`;

const ImageColumn = styled.div`
background: url(${webmail}) no-repeat center center;  background-size: cover;
  min-height: 350px;
  
  @media (max-width: 992px) {
    height: 250px;
    min-height: unset;
    grid-row: 1; /* Puts image on top on mobile screens */
  }
`;

const Tag = styled.span`
  background-color: #e6f0ff;
  color: #0052cc;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 20px;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #002e7a;
  font-size: 2.2rem;
  line-height: 1.3;
  margin: 0 0 15px 0;
  font-weight: 700;
  
  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

const Description = styled.p`
  color: #555555;
  font-size: 1.05rem;
  line-height: 1.6;
  margin: 0 0 30px 0;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #0052cc;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 8px;
  width: fit-content;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 82, 204, 0.2);

  &:hover {
    background-color: #003d99;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 82, 204, 0.3);
    color: #ffffff;
  }

  &:active {
    transform: translateY(0);
  }
`;

// ==========================================
// RENDER MODULE
// ==========================================

export default function WebmailCtaBanner() {
    const navigate = useNavigate();
  return (
    <CtaContainer>
      <CardWrapper>
        
        {/* Left Side: Information Hook */}
        <ContentColumn>
          <Tag>Identity Upgrade</Tag>
          <Title>Looking for a Professional Corporate Email?</Title>
          <Description>
            Stop using public domains like generic @gmail.com accounts for business deals. Win big-budget clients, secure corporate communication channels, and build lasting trust using your custom branded brand name address.
          </Description>
          
          {/* Update the href string path to link exactly to where your form page file lives */}
          <ActionButton onClick={()=>navigate('/webmail')}>
            Configure Your Webmail Now
          </ActionButton>
        </ContentColumn>

        {/* Right Side: Unsplash High Resolution Corporate Context Graphic */}
        <ImageColumn />

      </CardWrapper>
    </CtaContainer>
  );
}