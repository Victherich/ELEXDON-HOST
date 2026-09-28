
// import React from 'react';
// import styled from 'styled-components';
// import heroBg from '../Images/aff1.jpg'; // Replace with your actual image path
// import affiliateIcon from '../Images/aff2.jpg'; // Replace with your actual image path
// import commissionIcon from '../Images/aff3.jpg'; // Replace with your actual image path
// import dashboardIcon from '../Images/aff4.jpg'; // Replace with your actual image path
// import testimonialImg1 from '../Images/aff8.png'; // Replace with your actual image path
// import testimonialImg2 from '../Images/aff6.jpg'; // Replace with your actual image path
// import useAnimateOnScroll from './useAnimateOnScroll';
// import 'animate.css'
// import { Navigate, useNavigate } from 'react-router-dom';
// import AffiliatePageChildA from './AffiliatePageChildA';

// const PageContainer = styled.div`
//   font-family: 'Segoe UI', sans-serif;
//   color: #1e293b;
// `;

// const HeroSection = styled.section`
//   position: relative;
//   background: url(${heroBg}) no-repeat center center/cover;
//   height: 60vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   color: #fff;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(43, 50, 178, 0.6); /* Blue overlay */
//     z-index: 1;
//   }

//   > * {
//     position: relative;
//     z-index: 2;
//   }
// `;

// const HeroContent = styled.div`
//   max-width: 800px;
//   padding: 0 20px;
// `;

// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   margin-bottom: 1rem;
// `;

// const HeroSubtitle = styled.p`
//   font-size: 1.25rem;
// `;

// const Section = styled.section`
//   padding: 60px 20px;
//   background-color: ${({ bg }) => bg || 'rgba(0,0,0,0.1)'};
//   text-align: center;
// `;

// const SectionTitle = styled.h2`
//   font-size: 2rem;
//   color: #2B32B2;
//   margin-bottom: 1rem;
// `;

// const SectionSubtitle = styled.p`
//   font-size: 1rem;
//   color: #475569;
//   max-width: 600px;
//   margin: 0 auto 2rem;
// `;

// const FeaturesGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 2rem;
// `;

// const FeatureCard = styled.div`
//   background: #fff;
//   padding: 2rem;
//   border-radius: 16px;
//   box-shadow: 0 10px 30px rgba(0,0,0,0.5);
//   max-width: 300px;
//   text-align: center;
// `;

// const FeatureIcon = styled.img`
//   width: 100px;
//   margin-bottom: 1rem;
//   border-radius:20px;
// `;

// const FeatureTitle = styled.h3`
//   color: #2B32B2;
//   margin-bottom: 0.5rem;
// `;

// const FeatureDescription = styled.p`
//   font-size: 0.95rem;
//   color: #475569;
// `;

// const CTAButton = styled.a`
//   display: inline-block;
//   background: #2B32B2;
//   color: white;
//   padding: 1rem 2rem;
//   border-radius: 10px;
//   font-size: 1rem;
//   text-decoration: none;
//   margin-top: 2rem;
//   transition: background 0.3s;
//   cursor:pointer;

//   &:hover {
//     background: #1e2a91;
//   }
// `;

// const TestimonialsGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 2rem;
// `;

// const TestimonialCard = styled.div`
//   background: #fff;
//   padding: 2rem;
//   border-radius: 16px;
//   box-shadow: 0 10px 30px rgba(0,0,0,0.05);
//   max-width: 300px;
//   text-align: left;
// `;

// const TestimonialImage = styled.img`
//   width: 50px;
//   border-radius: 50%;
//   margin-bottom: 1rem;
// `;

// const TestimonialName = styled.h4`
//   color: #2B32B2;
//   margin-bottom: 0.5rem;
// `;

// const TestimonialText = styled.p`
//   font-size: 0.95rem;
//   color: #475569;
// `;

// const AffiliatePage = () => {
//   const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
// const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const a = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const b = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const c = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const d = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const e = useAnimateOnScroll('animate__fadeInDown animate__slower');

// const navigate = useNavigate();


//   return (
//     <PageContainer>
//       <HeroSection>
//         <HeroContent>
//           <HeroTitle ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Earn with Elexdon Host</HeroTitle>
//           <HeroSubtitle ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Join our Affiliate Program and start earning commissions by referring others to our hosting services.</HeroSubtitle>
//         </HeroContent>
//       </HeroSection>
// <AffiliatePageChildA/>
//       <Section>
//         <SectionTitle>How It Works</SectionTitle>
//         <SectionSubtitle>It's simple to start earning with our affiliate program. Here's how:</SectionSubtitle>
//         <FeaturesGrid>
//           <FeatureCard>
//             <FeatureIcon src={affiliateIcon} alt="Affiliate Icon" />
//             <FeatureTitle>Sign Up</FeatureTitle>
//             <FeatureDescription>Create your Elexdon Host account and get your unique affiliate link.</FeatureDescription>
//           </FeatureCard>
//           <FeatureCard>
//             <FeatureIcon src={commissionIcon} alt="Commission Icon" />
//             <FeatureTitle>Share</FeatureTitle>
//             <FeatureDescription>Promote your affiliate link through your website, blog, or social media.</FeatureDescription>
//           </FeatureCard>
//           <FeatureCard>
//             <FeatureIcon src={dashboardIcon} alt="Dashboard Icon" />
//             <FeatureTitle>Earn</FeatureTitle>
//             <FeatureDescription>Receive commissions for every successful referral that signs up through your link.</FeatureDescription>
//           </FeatureCard>
//         </FeaturesGrid>
//         <CTAButton onClick={()=>navigate('/signup')}>Join Now</CTAButton>
//       </Section>

//       <Section bg="#ffffff">
//         <SectionTitle>Why Partner with Elexdon Host?</SectionTitle>
//         <SectionSubtitle>Our affiliate program offers competitive commissions, real-time tracking, and dedicated support to help you succeed.</SectionSubtitle>
//         <FeaturesGrid>
//           <FeatureCard>
//             <FeatureTitle>High Commissions</FeatureTitle>
//             <FeatureDescription>Earn up to 30% commission on each sale made through your affiliate link.</FeatureDescription>
//           </FeatureCard>
//           <FeatureCard>
//             <FeatureTitle>Real-Time Tracking</FeatureTitle>
//             <FeatureDescription>Monitor your clicks, conversions, and earnings with our intuitive dashboard.</FeatureDescription>
//           </FeatureCard>
//           <FeatureCard>
//             <FeatureTitle>Dedicated Support</FeatureTitle>
//             <FeatureDescription>Our affiliate support team is here to assist you every step of the way.</FeatureDescription>
//           </FeatureCard>
//         </FeaturesGrid>
//       </Section>

//       <Section>
//         <SectionTitle>What Our Affiliates Say</SectionTitle>
//         <TestimonialsGrid>
//           <TestimonialCard>
//             <TestimonialImage src={testimonialImg1} alt="Affiliate 1" />
//             <TestimonialName>Mary Doe</TestimonialName>
//             <TestimonialText>"Elexdon Host's affiliate program has been a game-changer for my blog. The commissions are great, and the support is top-notch."</TestimonialText>
//           </TestimonialCard>
//           <TestimonialCard>
//             <TestimonialImage src={testimonialImg2} alt="Affiliate 2" />
//             <TestimonialName>Nancy Smith</TestimonialName>
//             <TestimonialText>"I've tried several affiliate programs, but Elexdon Host stands out with its reliability and generous payouts."</TestimonialText>
//           </TestimonialCard>
//         </TestimonialsGrid>
//       </Section>
//     </PageContainer>
//   );
// };

// export default AffiliatePage;





import React from 'react';
import styled from 'styled-components';
import heroBg from '../Images/aff1.jpg'; // Replace with your actual image path
import affiliateIcon from '../Images/aff2.jpg'; // Replace with your actual image path
import commissionIcon from '../Images/aff3.jpg'; // Replace with your actual image path
import dashboardIcon from '../Images/aff4.jpg'; // Replace with your actual image path
import testimonialImg1 from '../Images/aff8.png'; // Replace with your actual image path
import testimonialImg2 from '../Images/aff6.jpg'; // Replace with your actual image path
import useAnimateOnScroll from './useAnimateOnScroll';
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import AffiliatePageChildA from './AffiliatePageChildA';

const PageContainer = styled.div`
  font-family: 'Segoe UI', sans-serif;
  color: #102a43;
  background-color: #f0f4f8;
`;

const HeroSection = styled.section`
  position: relative;
  background: url(${heroBg}) no-repeat center center/cover;
  padding: 70px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(16, 42, 67, 0.85); /* Dark slate overlay using #102a43 */
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 6px;
  color:white;
  // background: linear-gradient(135deg, #4f46e5, #9333ea);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  font-weight: 800;
`;

const HeroSubtitle = styled.p`
  font-size: 0.95rem;
  color: #bcccdc;
  margin: 0;
  line-height: 1.4;
`;

const Section = styled.section`
  padding: 10px;
  background-color: ${({ bg }) => bg || '#f0f4f8'};
  text-align: center;
  border-bottom: 1px solid #d9e2ec;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 6px;
  text-transform: uppercase;
  font-weight: 700;
`;

const SectionSubtitle = styled.p`
  font-size: 0.85rem;
  color: #486581;
  max-width: 600px;
  margin: 0 auto 10px;
  line-height: 1.4;
`;

const FeaturesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const FeatureCard = styled.div`
  background: #ffffff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(16, 42, 67, 0.06);
  border: 1px solid #d9e2ec;
  max-width: 280px;
  flex: 1 1 220px;
  text-align: center;
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-3px);
    border-color: #4f46e5;
  }
`;

const FeatureIcon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-bottom: 6px;
  border-radius: 12px;
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  color: #102a43;
  margin-bottom: 4px;
  font-weight: 700;
`;

const FeatureDescription = styled.p`
  font-size: 0.85rem;
  color: #486581;
  margin: 0;
  line-height: 1.4;
`;

const CTAButton = styled.button`
  display: inline-block;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 10px;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const TestimonialsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const TestimonialCard = styled.div`
  background: #ffffff;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(16, 42, 67, 0.06);
  border: 1px solid #d9e2ec;
  max-width: 280px;
  flex: 1 1 220px;
  text-align: left;
`;

const TestimonialImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 6px;
`;

const TestimonialName = styled.h4`
  font-size: 0.95rem;
  color: #102a43;
  margin-bottom: 4px;
  font-weight: 700;
`;

const TestimonialText = styled.p`
  font-size: 0.85rem;
  color: #486581;
  margin: 0;
  line-height: 1.4;
`;

const AffiliatePage = () => {
  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');

  const navigate = useNavigate();

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle ref={heroTitleAnim.ref} className={heroTitleAnim.className}>
            Earn with Elexdon Host
          </HeroTitle>
          <HeroSubtitle ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
            Join our Affiliate Program and start earning commissions by referring others to our hosting services.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <AffiliatePageChildA />

      <Section>
        <SectionTitle>How It Works</SectionTitle>
        <SectionSubtitle>It's simple to start earning with our affiliate program. Here's how:</SectionSubtitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon src={affiliateIcon} alt="Affiliate Icon" />
            <FeatureTitle>Sign Up</FeatureTitle>
            <FeatureDescription>Create your Elexdon Host account and get your unique affiliate link.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon src={commissionIcon} alt="Commission Icon" />
            <FeatureTitle>Share</FeatureTitle>
            <FeatureDescription>Promote your affiliate link through your website, blog, or social media.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon src={dashboardIcon} alt="Dashboard Icon" />
            <FeatureTitle>Earn</FeatureTitle>
            <FeatureDescription>Receive commissions for every successful referral that signs up through your link.</FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
        <CTAButton onClick={() => navigate('/signup')}>Join Now</CTAButton>
      </Section>

      <Section bg="#ffffff">
        <SectionTitle>Why Partner with Elexdon Host?</SectionTitle>
        <SectionSubtitle>Our affiliate program offers competitive commissions, real-time tracking, and dedicated support to help you succeed.</SectionSubtitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureTitle>High Commissions</FeatureTitle>
            <FeatureDescription>Earn up to 30% commission on each sale made through your affiliate link.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Real-Time Tracking</FeatureTitle>
            <FeatureDescription>Monitor your clicks, conversions, and earnings with our intuitive dashboard.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureTitle>Dedicated Support</FeatureTitle>
            <FeatureDescription>Our affiliate support team is here to assist you every step of the way.</FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </Section>

      <Section>
        <SectionTitle>What Our Affiliates Say</SectionTitle>
        <TestimonialsGrid>
          <TestimonialCard>
            <TestimonialImage src={testimonialImg1} alt="Affiliate 1" />
            <TestimonialName>Mary Doe</TestimonialName>
            <TestimonialText>"Elexdon Host's affiliate program has been a game-changer for my blog. The commissions are great, and the support is top-notch."</TestimonialText>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialImage src={testimonialImg2} alt="Affiliate 2" />
            <TestimonialName>Nancy Smith</TestimonialName>
            <TestimonialText>"I've tried several affiliate programs, but Elexdon Host stands out with its reliability and generous payouts."</TestimonialText>
          </TestimonialCard>
        </TestimonialsGrid>
      </Section>
    </PageContainer>
  );
};

export default AffiliatePage;