
// // RefundPolicyPage.jsx

// import React from 'react';
// import styled from 'styled-components';
// import bgImage from '../Images/terms.jpg'; // Use your background image here

// const Wrapper = styled.div`
//   font-family: 'Segoe UI', sans-serif;
//   color: #333;
//   position: relative;
//   overflow: hidden;
// `;

// const DecorativeCircle = styled.div`
//   position: absolute;
//   width: ${(props) => props.size || '200px'};
//   height: ${(props) => props.size || '200px'};
//   background: ${(props) => props.gradient || 'radial-gradient(circle, #facc15, transparent)'};
//   border-radius: 50%;
//   top: ${(props) => props.top};
//   left: ${(props) => props.left};
//   filter: blur(50px);
//   opacity: 0.6;
//   z-index: 0;
// `;

// const Hero = styled.section`
//   background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage}) center/cover no-repeat;
//   color: white;
//   text-align: center;
//   padding: 100px 20px 60px;
//   position: relative;
//   z-index: 1;
// `;

// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// const HeroSubtitle = styled.p`
//   font-size: 1.2rem;
//   opacity: 0.9;
// `;

// const Container = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   padding: 60px 20px;
//   position: relative;
//   z-index: 2;
// `;

// const Section = styled.div`
//   margin-bottom: 40px;
// `;

// const SectionTitle = styled.h2`
//   font-size: 1.8rem;
//   margin-bottom: 15px;
//   color: #4f46e5;
// `;

// const SectionText = styled.p`
//   font-size: 1rem;
//   line-height: 1.7;
// `;

// const RefundPolicyPage = () => {
//   return (
//     <Wrapper>
//       {/* Decorative Circles */}
//       <DecorativeCircle top="5%" left="10%" size="300px" gradient="radial-gradient(circle, #6366f1, transparent)" />
//       <DecorativeCircle top="80%" left="60%" size="200px" gradient="radial-gradient(circle, #ec4899, transparent)" />
//       <DecorativeCircle top="20%" left="75%" size="150px" gradient="radial-gradient(circle, #22d3ee, transparent)" />
//       <DecorativeCircle top="70%" left="15%" size="250px" gradient="radial-gradient(circle, #a78bfa, transparent)" />
//       <DecorativeCircle top="40%" left="45%" size="500px" gradient="radial-gradient(circle, rgba(255,255,255,0.3), transparent)" />

//       {/* Hero Section */}
//       <Hero>
//         <HeroTitle>Refund Policy</HeroTitle>
//         <HeroSubtitle>Understand your rights with Elexdon Hosting</HeroSubtitle>
//       </Hero>

//       {/* Content */}
//       <Container>
//         <Section>
//           <SectionTitle>1. General Refund Terms</SectionTitle>
//           <SectionText>
//             At Elexdon Hosting, we aim to ensure customer satisfaction. If you are not satisfied with our services, you may request a refund in accordance with the terms outlined below.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>2. Eligibility for Refunds</SectionTitle>
//           <SectionText>
//             Refunds are available within the first 30 days of initial purchase for shared hosting, VPS hosting, and other eligible services. Domain registrations, SSL certificates, and add-ons are non-refundable.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>3. Non-Refundable Services</SectionTitle>
//           <SectionText>
//             The following services are not eligible for refunds:
//             <ul>
//               <li>Domain name registrations and renewals</li>
//               <li>Dedicated servers</li>
//               <li>Setup fees</li>
//               <li>Third-party services</li>
//               <li>Any usage-based or monthly services after 30 days</li>
//             </ul>
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>4. How to Request a Refund</SectionTitle>
//           <SectionText>
//             To request a refund, contact our support team at <strong>billing@elexdon.com</strong> within 30 days of your purchase. Include your account information and reason for the refund.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>5. Processing Time</SectionTitle>
//           <SectionText>
//             Approved refunds are processed within 7–10 business days to your original payment method. You will receive a confirmation email once the refund has been issued.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>6. Chargebacks</SectionTitle>
//           <SectionText>
//             Customers who initiate chargebacks without contacting Elexdon for a resolution will be banned from future services. Please reach out to us first — we are here to help.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>7. Policy Updates</SectionTitle>
//           <SectionText>
//             Elexdon Hosting reserves the right to update this Refund Policy at any time. Changes will be reflected on this page with an updated revision date.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>8. Contact Us</SectionTitle>
//           <SectionText>
//             For refund questions or requests, please contact us at: <br />
//             📧 support@elexdon.com <br />
//             📞 +234 818 560 9702
//           </SectionText>
//         </Section>
//       </Container>
//     </Wrapper>
//   );
// };

// export default RefundPolicyPage;






// RefundPolicyPage.jsx

import React from 'react';
import styled from 'styled-components';
import bgImage from '../Images/terms.jpg'; // Use your background image here
import 'animate.css';
import useAnimateOnScroll from './useAnimateOnScroll';

const Wrapper = styled.div`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1f2937;
  position: relative;
  overflow: hidden;
  background-color: #f8fafc;
`;

const DecorativeCircle = styled.div`
  position: absolute;
  width: ${(props) => props.size || '200px'};
  height: ${(props) => props.size || '200px'};
  background: ${(props) => props.gradient || 'radial-gradient(circle, #4f46e5, transparent)'};
  border-radius: 50%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  filter: blur(60px);
  opacity: 0.35;
  z-index: 0;
  pointer-events: none;
`;

const Hero = styled.section`
  background: linear-gradient(135deg, rgba(79, 70, 229, 0.85), rgba(147, 51, 234, 0.85)), url(${bgImage}) center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 70px 10px;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.3);
`;

const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: -0.025em;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1rem;
  opacity: 0.95;
  font-weight: 400;
  max-width: 600px;
  margin: 0 auto;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: -10px auto 10px;
  padding: 10px;
  position: relative;
  z-index: 2;
  background: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 10px;
    margin: -10px 10px 10px;
  }
`;

const Section = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: #4f46e5;
  text-transform: uppercase;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SectionText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 10px;

  ul {
    margin: 6px 0 0 20px;
    padding: 0;
    
    li {
      margin-bottom: 4px;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const RefundPolicyPage = () => {
  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');

  return (
    <Wrapper>
      {/* Decorative Circles */}
      <DecorativeCircle top="5%" left="10%" size="300px" gradient="radial-gradient(circle, #4f46e5, transparent)" />
      <DecorativeCircle top="80%" left="60%" size="250px" gradient="radial-gradient(circle, #9333ea, transparent)" />
      <DecorativeCircle top="20%" left="75%" size="200px" gradient="radial-gradient(circle, #4f46e5, transparent)" />
      <DecorativeCircle top="70%" left="15%" size="300px" gradient="radial-gradient(circle, #9333ea, transparent)" />
      <DecorativeCircle top="40%" left="45%" size="500px" gradient="radial-gradient(circle, rgba(79, 70, 229, 0.15), transparent)" />

      {/* Hero Section */}
      <Hero>
        <HeroTitle ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Refund Policy</HeroTitle>
        <HeroSubtitle ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Understand your rights with Elexdon Hosting</HeroSubtitle>
      </Hero>

      {/* Content */}
      <Container>
        <Section>
          <SectionTitle>1. General Refund Terms</SectionTitle>
          <SectionText>
            At Elexdon Hosting, we aim to ensure customer satisfaction. If you are not satisfied with our services, you may request a refund in accordance with the terms outlined below.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>2. Eligibility for Refunds</SectionTitle>
          <SectionText>
            Refunds are available within the first 30 days of initial purchase for shared hosting, VPS hosting, and other eligible services. Domain registrations, SSL certificates, and add-ons are non-refundable.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>3. Non-Refundable Services</SectionTitle>
          <SectionText>
            The following services are not eligible for refunds:
            <ul>
              <li>Domain name registrations and renewals</li>
              <li>Dedicated servers</li>
              <li>Setup fees</li>
              <li>Third-party services</li>
              <li>Any usage-based or monthly services after 30 days</li>
            </ul>
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>4. How to Request a Refund</SectionTitle>
          <SectionText>
            To request a refund, contact our support team at <strong>billing@elexdon.com</strong> within 30 days of your purchase. Include your account information and reason for the refund.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>5. Processing Time</SectionTitle>
          <SectionText>
            Approved refunds are processed within 7–10 business days to your original payment method. You will receive a confirmation email once the refund has been issued.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>6. Chargebacks</SectionTitle>
          <SectionText>
            Customers who initiate chargebacks without contacting Elexdon for a resolution will be banned from future services. Please reach out to us first — we are here to help.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>7. Policy Updates</SectionTitle>
          <SectionText>
            Elexdon Hosting reserves the right to update this Refund Policy at any time. Changes will be reflected on this page with an updated revision date.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>8. Contact Us</SectionTitle>
          <SectionText>
            For refund questions or requests, please contact us at: <br />
            📧 support@elexdon.com <br />
            📞 +234 818 560 9702
          </SectionText>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default RefundPolicyPage;