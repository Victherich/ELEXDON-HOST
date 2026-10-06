


// import React, { useEffect, useRef, useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import 'animate.css';

// import herobg1 from '../Images/herobg1.jpg';
// import herobg2 from '../Images/herobg2.jpg';
// import herobg3 from '../Images/herobg3.jpg';
// import herobg4 from '../Images/herobg4.jpg';
// import { useNavigate } from 'react-router-dom';

// // Background scroll stars effect
// const scrollStars = keyframes`
//   0% { background-position: 0 0; }
//   100% { background-position: -2000px 0; }
// `;

// const pulseGlow = keyframes`
//   0%, 100% { box-shadow: 0 0 20px rgba(100, 200, 255, 0.3); }
//   50% { box-shadow: 0 0 40px rgba(100, 200, 255, 0.7); }
// `;

// // Styled components
// const HeroSection = styled.section`
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   overflow: hidden;
//   border-radius: 500px 0px 500px 0px;

//   @media(max-width:884px){
//     border-radius: 300px 0px 300px 0px;
//   }
// `;

// const Background = styled.div`
//   position: absolute;
//   inset: 0;
//   background-image: url(${props => props.img});
//   background-size: cover;
//   background-position: center;
//   opacity: ${props => (props.active ? 1 : 0)};
//   transition: opacity 1.5s ease-in-out;
//   z-index: 0;
// `;

// const StarOverlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 200%;
//   height: 200%;
//   background: url('/stars.gif') repeat;
//   opacity: 0.08;
//   animation: ${scrollStars} 60s linear infinite;
//   z-index: 1;
// `;

// const Content = styled.div`
//   position: relative;
//   z-index: 2;
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 0 20px;
//   text-align: center;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #fff;
// `;

// const Title = styled.h1`
//   font-size: 3.5rem;
//   font-weight: bold;
//   color: #ffffff;
//   text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
// `;

// const Subtitle = styled.p`
//   margin-top: 20px;
//   font-size: 1.4rem;
//   line-height: 1.6;
//   color: #E0F7FA;
//   text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
// `;

// const ButtonGroup = styled.div`
//   margin-top: 40px;
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 20px;
// `;

// const CTAButton = styled.a`
//   padding: 14px 28px;
//   font-size: 1rem;
//   border-radius: 30px;
//   background: #00C9FF;
//   color: white;
//   font-weight: bold;
//   text-decoration: none;
//   transition: all 0.3s ease;
//   animation: ${pulseGlow} 10s ease-in-out infinite;
//   cursor:pointer;

//   &:hover {
//     background: #b983ff;
//   }
// `;

// // Scroll hook
// const useAnimateOnScroll = (animationClass) => {
//   const ref = useRef(null);
//   const [isVisible, setVisible] = useState(false);
 

 

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//         } else {
//           setVisible(false); // allow re-trigger on scroll in again
//         }
//       },
//       { threshold: 0.2 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return {
//     ref,
//     className: isVisible ? `animate__animated ${animationClass}` : 'opacity-0',
//   };
// };

// // Main Hero component
// const Hero = () => {
//   const backgrounds = [herobg1, herobg2, herobg3, herobg4];
//   const [bgIndex, setBgIndex] = useState(0);
//    const navigate = useNavigate();

//   const titleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const subtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const buttonAnim = useAnimateOnScroll('animate__zoomIn animate__slower');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBgIndex((prev) => (prev + 1) % backgrounds.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <HeroSection>
//       {backgrounds.map((img, i) => (
//         <Background key={i} img={img} active={i === bgIndex} />
//       ))}

//       <StarOverlay />

//       <Content>
//         <Title ref={titleAnim.ref} className={titleAnim.className}>
//           ELEXDON HOST 🚀
//         </Title>
//         <Subtitle ref={subtitleAnim.ref} className={subtitleAnim.className}>
//           Hosting that glows. Power that moves. Infrastructure that dares to dream. ✨🌐
//         </Subtitle>
//         <ButtonGroup ref={buttonAnim.ref} className={buttonAnim.className}>
//           <CTAButton onClick={()=>navigate('/domainspage')}>🚀 Get Started</CTAButton>
//           <CTAButton onClick={()=>navigate('/aboutus')}>📘 Learn More</CTAButton>
//         </ButtonGroup>
//       </Content>
//     </HeroSection>
//   );
// };

// export default Hero;





// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { FaServer, FaShieldAlt, FaRocket, FaArrowRight } from 'react-icons/fa';

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(15px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const HeroSection = styled.section`
//   position: relative;
//   width: 100%;
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-image: linear-gradient(
//       135deg,
//       rgba(7, 13, 26, 0.92) 0%,
//       rgba(10, 25, 47, 0.85) 100%
//     ),
//     url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80');
//   background-size: cover;
//   background-position: center;
//   padding: 120px 20px 80px 20px;
//   overflow: hidden;
//   border-bottom: 1px solid rgba(0, 180, 216, 0.2);
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   width: 100%;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   z-index: 2;
//   animation: ${fadeIn} 0.8s ease-out forwards;
// `;

// const Badge = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   padding: 6px 12px;
//   background: rgba(0, 180, 216, 0.1);
//   border: 1px solid rgba(0, 180, 216, 0.3);
//   border-radius: 30px;
//   color: #00b4d8;
//   font-size: 12px;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   margin-bottom: 20px;

//   svg {
//     font-size: 12px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 3.2rem;
//   font-weight: 800;
//   color: #ffffff;
//   line-height: 1.2;
//   margin-bottom: 15px;
//   letter-spacing: -0.5px;

//   span {
//     background: linear-gradient(90deg, #00b4d8, #0077b6);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }

//   @media (max-width: 768px) {
//     font-size: 2.2rem;
//   }
// `;

// const Subtitle = styled.p`
//   font-size: 1.15rem;
//   line-height: 1.6;
//   color: #94a3b8;
//   max-width: 700px;
//   margin-bottom: 30px;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin-bottom: 50px;
// `;

// const PrimaryButton = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   padding: 10px 22px;
//   background: linear-gradient(135deg, #00b4d8 0%, #0077b6 100%);
//   color: white;
//   font-size: 14px;
//   font-weight: 600;
//   border-radius: 6px;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   box-shadow: 0 4px 15px rgba(0, 180, 216, 0.3);

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 20px rgba(0, 180, 216, 0.5);
//   }
// `;

// const SecondaryButton = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   padding: 10px 22px;
//   background: rgba(255, 255, 255, 0.05);
//   color: #e2e8f0;
//   font-size: 14px;
//   font-weight: 600;
//   border-radius: 6px;
//   border: 1px solid rgba(255, 255, 255, 0.15);
//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.1);
//     color: #ffffff;
//     border-color: rgba(0, 180, 216, 0.4);
//     transform: translateY(-2px);
//   }
// `;

// const FeaturesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 15px;
//   width: 100%;
//   max-width: 900px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FeatureCard = styled.div`
//   background: rgba(15, 23, 42, 0.7);
//   backdrop-filter: blur(10px);
//   border: 1px solid rgba(0, 180, 216, 0.15);
//   border-radius: 8px;
//   padding: 15px;
//   text-align: left;
//   display: flex;
//   align-items: flex-start;
//   gap: 10px;

//   svg {
//     color: #00b4d8;
//     font-size: 20px;
//     margin-top: 2px;
//   }

//   div {
//     h4 {
//       color: #ffffff;
//       font-size: 14px;
//       font-weight: 600;
//       margin-bottom: 4px;
//     }
//     p {
//       color: #64748b;
//       font-size: 12px;
//       line-height: 1.4;
//       margin: 0;
//     }
//   }
// `;

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <HeroSection>
//       <Container>
//         <Badge>
//           <FaRocket /> Enterprise Cloud Infrastructure
//         </Badge>
        
//         <Title>
//           Next-Gen Web Hosting <br />
//           <span>Built for Maximum Performance</span>
//         </Title>
        
//         <Subtitle>
//           Experience lightning-fast speeds, rock-solid security, and 99.9% guaranteed uptime. Power your websites and applications with professional-grade infrastructure.
//         </Subtitle>
        
//         <ButtonGroup>
//           <PrimaryButton onClick={() => navigate('/domainspage')}>
//             Get Started Now <FaArrowRight />
//           </PrimaryButton>
//           <SecondaryButton onClick={() => navigate('/sharedhosting')}>
//             Explore Hosting Plans
//           </SecondaryButton>
//         </ButtonGroup>

//         <FeaturesGrid>
//           <FeatureCard>
//             <FaServer />
//             <div>
//               <h4>99.9% Uptime SLA</h4>
//               <div>Enterprise servers optimized for speed and reliability.</div>
//             </div>
//           </FeatureCard>

//           <FeatureCard>
//             <FaShieldAlt />
//             <div>
//               <h4>Advanced Security</h4>
//               <div>Free SSL certificates and automated daily malware protection.</div>
//             </div>
//           </FeatureCard>

//           <FeatureCard>
//             <FaRocket />
//             <div>
//               <h4>NVMe SSD Storage</h4>
//               <div>Blazing-fast read/write speeds for optimal user experiences.</div>
//             </div>
//           </FeatureCard>
//         </FeaturesGrid>
//       </Container>
//     </HeroSection>
//   );
// };

// export default Hero;



// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import { useNavigate } from 'react-router-dom';
// import { FaServer, FaShieldAlt, FaRocket, FaArrowRight } from 'react-icons/fa';
// import hero5 from '../Images/hero5.jpg'
// // import herobg1 from '../Images/herobg1.png'
// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(15px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const HeroSection = styled.section`
//   position: relative;
//   width: 100%;
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   /* Dark semi-transparent overlay blended with your bluish theme over the background image */
//   background-image: linear-gradient(
//       135deg,
//       rgba(0, 0, 0, 0.5) 0%,
//       rgba(0, 0, 0, 0.5) 100%
//     ),
//     url(${hero5});
//   background-size: cover;
//   background-position: center;
//   padding: 120px 20px 80px 20px;
//   overflow: hidden;
//   border-bottom: 1px solid rgba(0, 180, 216, 0.25);
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   width: 100%;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   z-index: 2;
//   animation: ${fadeIn} 0.8s ease-out forwards;
// `;

// const Badge = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   padding: 6px 12px;
//   background: rgba(0, 180, 216, 0.15);
//   border: 1px solid rgba(0, 180, 216, 0.4);
//   border-radius: 30px;
//   color: #38bdf8;
//   font-size: 12px;
//   font-weight: 600;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   margin-bottom: 20px;
//   backdrop-filter: blur(8px);

//   svg {
//     font-size: 12px;
//   }
// `;

// const Title = styled.h1`
//   font-size: 3.2rem;
//   font-weight: 800;
//   color: #ffffff;
//   line-height: 1.2;
//   margin-bottom: 15px;
//   letter-spacing: -0.5px;
//   text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

//   span {
//     background: linear-gradient(90deg, #38bdf8, #00b4d8);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }

//   @media (max-width: 768px) {
//     font-size: 2.2rem;
//   }
// `;

// const Subtitle = styled.p`
//   font-size: 1.15rem;
//   line-height: 1.6;
//   color: #cbd5e1;
//   max-width: 700px;
//   margin-bottom: 30px;
//   text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin-bottom: 50px;
// `;

// const PrimaryButton = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   padding: 10px 22px;
//   background: linear-gradient(135deg, #0284c7 0%, #004aad 100%);
//   color: white;
//   font-size: 14px;
//   font-weight: 600;
//   border-radius: 6px;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   box-shadow: 0 4px 15px rgba(0, 180, 216, 0.3);

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 20px rgba(0, 180, 216, 0.5);
//   }
// `;

// const SecondaryButton = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   padding: 10px 22px;
//   background: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(10px);
//   color: #f1f5f9;
//   font-size: 14px;
//   font-weight: 600;
//   border-radius: 6px;
//   border: 1px solid rgba(255, 255, 255, 0.25);
//   cursor: pointer;
//   transition: all 0.2s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.2);
//     color: #ffffff;
//     border-color: rgba(56, 189, 248, 0.6);
//     transform: translateY(-2px);
//   }
// `;

// const FeaturesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 15px;
//   width: 100%;
//   max-width: 900px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FeatureCard = styled.div`
//   background: rgba(10, 22, 44, 0.75);
//   backdrop-filter: blur(12px);
//   border: 1px solid rgba(0, 180, 216, 0.25);
//   border-radius: 8px;
//   padding: 15px;
//   text-align: left;
//   display: flex;
//   align-items: flex-start;
//   gap: 10px;
//   box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);

//   svg {
//     color: #38bdf8;
//     font-size: 20px;
//     margin-top: 2px;
//   }

//   div {
//     h4 {
//       color: #ffffff;
//       font-size: 14px;
//       font-weight: 600;
//       margin-bottom: 4px;
//     }
//     div, p {
//       color: #94a3b8;
//       font-size: 12px;
//       line-height: 1.4;
//       margin: 0;
//     }
//   }
// `;

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <HeroSection>
//       <Container>
//         <Badge>
//           <FaRocket /> Enterprise Cloud Infrastructure
//         </Badge>
        
//         <Title>
//           ELEXDON HOST <br />
//           {/* <span>Built for Maximum Performance</span> */}
//         </Title>
        
//         <Subtitle>
//           Experience lightning-fast speeds, rock-solid security, and 99.9% guaranteed uptime. Power your websites and applications with professional-grade infrastructure.
//         </Subtitle>
        
//         <ButtonGroup>
//           <PrimaryButton onClick={() => navigate('/domainspage')}>
//             Get Started Now <FaArrowRight />
//           </PrimaryButton>
//           <SecondaryButton onClick={() => navigate('/sharedhosting')}>
//             Explore Hosting Plans
//           </SecondaryButton>
//         </ButtonGroup>

//         <FeaturesGrid>
//           <FeatureCard>
//             <FaServer />
//             <div>
//               <h4>99.9% Uptime SLA</h4>
//               <div>Enterprise servers optimized for speed and reliability.</div>
//             </div>
//           </FeatureCard>

//           <FeatureCard>
//             <FaShieldAlt />
//             <div>
//               <h4>Advanced Security</h4>
//               <div>Free SSL certificates and automated daily malware protection.</div>
//             </div>
//           </FeatureCard>

//           <FeatureCard>
//             <FaRocket />
//             <div>
//               <h4>NVMe SSD Storage</h4>
//               <div>Blazing-fast read/write speeds for optimal user experiences.</div>
//             </div>
//           </FeatureCard>
//         </FeaturesGrid>
//       </Container>
//     </HeroSection>
//   );
// };

// export default Hero;


import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaServer, FaShieldAlt, FaRocket, FaArrowRight } from 'react-icons/fa';
// import hero5 from '../Images/hero5.jpg';
// import hero5 from '../Images/hero5d.png';
// import hero5 from '../Images/hero5c.png';
import hero5 from '../Images/hero5g.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Dark semi-transparent overlay blended with the new purple-blue theme */
  background-image: linear-gradient(
    360deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${hero5});
  background-size: cover;
  background-position: center;
  padding: 140px 20px 80px 20px;
  overflow: hidden;
  border-bottom: 1px solid rgba(147, 51, 234, 0.2);
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: rgba(147, 51, 234, 0.15);
  border: 1px solid rgba(147, 51, 234, 0.4);
  border-radius: 30px;
  color: #c084fc;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
  backdrop-filter: blur(8px);

  svg {
    font-size: 12px;
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 15px;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  span {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  font-weight:bold;
  line-height: 1.6;
  color: white;
  max-width: 700px;
  margin-bottom: 30px;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 50px;
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  color: white;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  /* Multi-layered shadow for a glowing, realistic depth */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5), 
              0 10px 20px -3px rgba(147, 51, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    /* Deeper, more vibrant spread on hover */
    box-shadow: 0 6px 8px -1px rgba(79, 70, 229, 0.25), 
                0 14px 28px -4px rgba(147, 51, 234, 0.55);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(79, 70, 229, 0.3);
  }
`;

const SecondaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  color: #f1f5f9;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
  /* Subtle ambient shadow + inner highlight for glass effect */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 
              inset 0 1px 0 rgba(255, 255, 255, 0.15);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #ffffff;
    border-color: rgba(147, 51, 234, 0.6);
    transform: translateY(-2px);
    /* Enhanced shadow with a faint purple ambient glow matching your theme */
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15), 
                0 0 20px rgba(147, 51, 234, 0.25), 
                inset 0 1px 0 rgba(255, 255, 255, 0.25);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 950px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(147, 51, 234, 0.25);
  border-radius: 12px;
  padding: 18px;
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(147, 51, 234, 0.5);
    transform: translateY(-3px);
  }

  svg {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color:fill;
    font-size: 22px;
    margin-top: 2px;
    flex-shrink: 0;
  }

  div {
    h4 {
      color: #ffffff;
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 4px;
    }
    div, p {
      color: #94a3b8;
      font-size: 12px;
      line-height: 1.4;
      margin: 0;
    }
  }
`;

const Hero = () => {
  const navigate = useNavigate();

  return (
    <HeroSection>
      <Container>
        {/* <Badge>
          <FaRocket /> Enterprise Cloud Infrastructure
        </Badge> */}
        
        <Title>
          ELEXDON HOST <br />
          {/* <span>Built for Maximum Performance</span> */}
        </Title>
        
        <Subtitle>
          Experience lightning-fast speeds, rock-solid security, and 99.9% guaranteed uptime. Power your websites and applications with professional-grade infrastructure.
        </Subtitle>
        
        <ButtonGroup>
          <PrimaryButton onClick={() => navigate('/domainspage')}>
            Get Started Now <FaArrowRight />
          </PrimaryButton>
          <SecondaryButton onClick={() => navigate('/sharedhosting')}>
            Explore Hosting Plans
          </SecondaryButton>
        </ButtonGroup>

        <FeaturesGrid>
          <FeatureCard>
            <FaServer />
            <div>
              <h4>99.9% Uptime SLA</h4>
              <div>Enterprise servers optimized for speed and reliability.</div>
            </div>
          </FeatureCard>

          <FeatureCard>
            <FaShieldAlt />
            <div>
              <h4>Advanced Security</h4>
              <div>Free SSL certificates and automated daily malware protection.</div>
            </div>
          </FeatureCard>

          <FeatureCard>
            <FaRocket />
            <div>
              <h4>NVMe SSD Storage</h4>
              <div>Blazing-fast read/write speeds for optimal user experiences.</div>
            </div>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </HeroSection>
  );
};

export default Hero;