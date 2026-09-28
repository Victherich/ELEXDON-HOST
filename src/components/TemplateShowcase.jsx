// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import templateImg from '../Images/laptops.png';
// import useAnimateOnScroll from './useAnimateOnScroll';
// import 'animate.css'

// const float = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-50px); }
//   100% { transform: translateY(0px) }
// `;

// const Section = styled.section`
//   position: relative;
//   padding: 70px 20px;
//   background: linear-gradient(135deg, #f0f4ff, #ffffff);
//   overflow: hidden;
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   gap: 50px;

//   @media (max-width: 768px) {
//     flex-direction: column-reverse;
//     text-align: center;
//   }
// `;

// const TextContent = styled.div`
//   flex: 1;
// `;

// const Heading = styled.h2`
//   font-size: 2.5rem;
//   background: linear-gradient(to right, #4f46e5, #06b6d4);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   margin-bottom: 20px;
// `;

// const SubText = styled.p`
//   font-size: 1.1rem;
//   color: #333;
//   max-width: 600px;
//   line-height: 1.6;
// `;

// const CTA = styled.a`
//   display: inline-block;
//   margin-top: 30px;
//   padding: 14px 28px;
//   background: linear-gradient(90deg, #4f46e5, #06b6d4);
//   color: white;
//   border-radius: 50px;
//   font-weight: 600;
//   text-decoration: none;
//   box-shadow: 0 6px 20px rgba(0,0,0,0.08);
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-2px);
//     background: linear-gradient(90deg, #06b6d4, #4f46e5);
//   }
// `;

// const ImageWrapper = styled.div`
//   flex: 1;
//   position: relative;

//   img {
//     width: 100%;
//     border-radius: 20px;
//     box-shadow: 0 12px 30px rgba(0,0,0,0.1);
//   }
// `;

// // Floating Shape
// const FloatingShape = styled.div`
//   position: absolute;
//   width: ${props => props.size};
//   height: ${props => props.size};
//   top: ${props => props.top};
//   left: ${props => props.left};
//   background: ${props => props.gradient};
//   opacity: 0.25;
//   border-radius: 50%;
//   animation: ${float} ${props => props.duration} ease-in-out infinite;
//   z-index: 0;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const TemplateShowcase = () => {
//   const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const tldTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const pricingTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const pricingTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const pricingTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  
//   return (
//     <Section>
//       {/* Background Shapes with Stronger Colors and Wider Spread */}
//       {[
//         { top: '5%', left: '-10%', size: '120px', gradient: 'radial-gradient(circle, #9333ea, #7e22ce)', duration: '7s' },
//         { top: '10%', left: '85%', size: '130px', gradient: 'radial-gradient(circle, #f59e0b, #ef4444)', duration: '6s' },
//         { top: '60%', left: '-5%', size: '150px', gradient: 'radial-gradient(circle, #10b981, #06b6d4)', duration: '8s' },
//         { top: '20%', left: '70%', size: '100px', gradient: 'radial-gradient(circle, #e11d48, #f43f5e)', duration: '5s' },
//         { top: '85%', left: '90%', size: '110px', gradient: 'radial-gradient(circle, #2563eb, #1d4ed8)', duration: '6.5s' },
//         { top: '40%', left: '50%', size: '140px', gradient: 'radial-gradient(circle, #14b8a6, #3b82f6)', duration: '9s' },
//         { top: '90%', left: '10%', size: '100px', gradient: 'radial-gradient(circle, #facc15, #eab308)', duration: '7.2s' },
//         { top: '-8%', left: '60%', size: '160px', gradient: 'radial-gradient(circle, #6366f1, #4f46e5)', duration: '10s' },
//         { top: '75%', left: '75%', size: '90px', gradient: 'radial-gradient(circle, #f97316, #fb923c)', duration: '6s' },
//         { top: '25%', left: '5%', size: '100px', gradient: 'radial-gradient(circle, #ec4899, #d946ef)', duration: '5.5s' },
//         { top: '55%', left: '90%', size: '120px', gradient: 'radial-gradient(circle, #06b6d4, #3b82f6)', duration: '7s' },
//       ].map((shape, index) => (
//         <FloatingShape key={index} {...shape} />
//       ))}

//       {/* Main Content */}
//       <ContentWrapper>
//         <TextContent>
//           <Heading ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Find the Template that Fits your Business</Heading>
//           <SubText ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
//             Elexdon's easy-to-use website builder helps even the most novice users create stunning,
//             high-quality websites. Choose from hundreds of professionally designed templates, use the
//             simple drag-and-drop builder to customize, and get your new website online today!
//           </SubText>
//           {/* <CTA href="#">Browse Templates</CTA> */}
//         </TextContent>

//         <ImageWrapper>
//           <img src={templateImg} alt="Website Template Preview" />
//         </ImageWrapper>
//       </ContentWrapper>
//     </Section>
//   );
// };

// export default TemplateShowcase;






// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import templateImg from '../Images/laptops.png';
// import useAnimateOnScroll from './useAnimateOnScroll';
// import 'animate.css';

// const float = keyframes`
//   0% { transform: translateY(0px) rotate(0deg); }
//   50% { transform: translateY(-15px) rotate(1deg); }
//   100% { transform: translateY(0px) rotate(0deg); }
// `;

// const pulseGlow = keyframes`
//   0%, 100% { opacity: 0.4; transform: scale(1); }
//   50% { opacity: 0.8; transform: scale(1.05); }
// `;

// const Section = styled.section`
//   position: relative;
//   padding: 100px 20px;
//   background: radial-gradient(circle at 10% 20%, rgba(79, 70, 229, 0.05) 0%, transparent 40%),
//               radial-gradient(circle at 90% 80%, rgba(6, 182, 212, 0.05) 0%, transparent 40%),
//               linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background-image: radial-gradient(rgba(79, 70, 229, 0.08) 1px, transparent 1px);
//     background-size: 32px 32px;
//     z-index: 0;
//     pointer-events: none;
//   }
// `;

// const ContentWrapper = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   gap: 60px;
//   z-index: 1;

//   @media (max-width: 968px) {
//     flex-direction: column-reverse;
//     text-align: center;
//     gap: 40px;
//   }
// `;

// const TextContent = styled.div`
//   flex: 1;
// `;

// const Heading = styled.h2`
//   font-size: 3rem;
//   font-weight: 800;
//   letter-spacing: -0.02em;
//   line-height: 1.2;
//   background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   margin-bottom: 24px;

//   @media (max-width: 768px) {
//     font-size: 2.2rem;
//   }
// `;

// const SubText = styled.p`
//   font-size: 1.15rem;
//   color: #475569;
//   max-width: 560px;
//   line-height: 1.7;

//   @media (max-width: 968px) {
//     margin: 0 auto;
//   }
// `;

// const CTA = styled.a`
//   display: inline-flex;
//   align-items: center;
//   gap: 10px;
//   margin-top: 36px;
//   padding: 16px 32px;
//   background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%);
//   color: white;
//   border-radius: 50px;
//   font-weight: 600;
//   font-size: 1.05rem;
//   text-decoration: none;
//   box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.4);
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

//   &:hover {
//     transform: translateY(-3px) scale(1.02);
//     box-shadow: 0 15px 30px -5px rgba(6, 182, 212, 0.5);
//     background: linear-gradient(135deg, #06b6d4 0%, #4f46e5 100%);
//   }

//   svg {
//     transition: transform 0.3s ease;
//   }
//   &:hover svg {
//     transform: translateX(4px);
//   }
// `;

// const ImageWrapper = styled.div`
//   flex: 1;
//   position: relative;
//   animation: ${float} 6s ease-in-out infinite;

//   &::before {
//     content: '';
//     position: absolute;
//     inset: -15px;
//     background: linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(6, 182, 212, 0.2));
//     border-radius: 30px;
//     filter: blur(20px);
//     z-index: -1;
//     animation: ${pulseGlow} 4s ease-in-out infinite;
//   }

//   img {
//     width: 100%;
//     height: auto;
//     border-radius: 24px;
//     border: 2px solid rgba(255, 255, 255, 0.8);
//     box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.2);
//     display: block;
//   }
// `;

// const FloatingBadge = styled.div`
//   position: absolute;
//   bottom: -20px;
//   left: -20px;
//   background: rgba(255, 255, 255, 0.85);
//   backdrop-filter: blur(12px);
//   border: 1px solid rgba(255, 255, 255, 0.4);
//   padding: 16px 22px;
//   border-radius: 16px;
//   box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
//   display: flex;
//   align-items: center;
//   gap: 14px;
//   z-index: 2;

//   .icon {
//     width: 40px;
//     height: 40px;
//     border-radius: 12px;
//     background: linear-gradient(135deg, #10b981, #06b6d4);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: white;
//     font-weight: bold;
//     font-size: 1.2rem;
//   }

//   .text {
//     display: flex;
//     flex-direction: column;
    
//     strong {
//       font-size: 0.95rem;
//       color: #0f172a;
//     }
//     span {
//       font-size: 0.8rem;
//       color: #64748b;
//     }
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// // Floating Background Shapes
// const FloatingShape = styled.div`
//   position: absolute;
//   width: ${props => props.size};
//   height: ${props => props.size};
//   top: ${props => props.top};
//   left: ${props => props.left};
//   background: ${props => props.gradient};
//   opacity: 0.2;
//   filter: blur(40px);
//   border-radius: 50%;
//   animation: ${float} ${props => props.duration} ease-in-out infinite;
//   z-index: 0;
//   pointer-events: none;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const TemplateShowcase = () => {
//   const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  
//   return (
//     <Section>
//       {/* Ambient Blurred Background Orbs */}
//       {[
//         { top: '5%', left: '-5%', size: '250px', gradient: 'radial-gradient(circle, #9333ea, #7e22ce)', duration: '7s' },
//         { top: '10%', left: '80%', size: '280px', gradient: 'radial-gradient(circle, #f59e0b, #ef4444)', duration: '6s' },
//         { top: '60%', left: '-2%', size: '300px', gradient: 'radial-gradient(circle, #10b981, #06b6d4)', duration: '8s' },
//         { top: '75%', left: '85%', size: '260px', gradient: 'radial-gradient(circle, #2563eb, #1d4ed8)', duration: '6.5s' },
//       ].map((shape, index) => (
//         <FloatingShape key={index} {...shape} />
//       ))}

//       {/* Main Content */}
//       <ContentWrapper>
//         <TextContent>
//           <Heading ref={heroTitleAnim.ref} className={heroTitleAnim.className}>
//             Find the Template that Fits your Business
//           </Heading>
//           <SubText ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
//             Elexdon's easy-to-use website builder helps even the most novice users create stunning,
//             high-quality websites. Choose from hundreds of professionally designed templates, use the
//             simple drag-and-drop builder to customize, and get your new website online today!
//           </SubText>
          
//           <CTA href="#">
//             Browse Templates
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="5" y1="12" x2="19" y2="12"></line>
//               <polyline points="12 5 19 12 12 19"></polyline>
//             </svg>
//           </CTA>
//         </TextContent>

//         <ImageWrapper>
//           <img src={templateImg} alt="Website Template Preview" />
//           <FloatingBadge>
//             <div className="icon">✓</div>
//             <div className="text">
//               <strong>100+ Templates</strong>
//               <span>Ready to launch</span>
//             </div>
//           </FloatingBadge>
//         </ImageWrapper>
//       </ContentWrapper>
//     </Section>
//   );
// };

// export default TemplateShowcase;




import React from 'react';
import styled, { keyframes } from 'styled-components';
import templateImg from '../Images/laptops.png';
import useAnimateOnScroll from './useAnimateOnScroll';
import 'animate.css';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`;

const Section = styled.section`
  position: relative;
  padding: 100px 20px;
  background: radial-gradient(circle at 10% 20%, rgba(79, 70, 229, 0.06) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(147, 51, 234, 0.06) 0%, transparent 40%),
              linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(79, 70, 229, 0.08) 1px, transparent 1px);
    background-size: 32px 32px;
    z-index: 0;
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 60px;
  z-index: 1;

  @media (max-width: 968px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.2;
color: #102a43;
  margin-bottom: 24px;

  span{
    background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const SubText = styled.p`
  font-size: 0.9rem;
  color: #475569;
  max-width: 560px;
  line-height: 1.7;

  @media (max-width: 968px) {
    margin: 0 auto;
  }
`;

const CTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 36px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  color: white;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.35);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 15px 30px -5px rgba(147, 51, 234, 0.45);
    background: linear-gradient(135deg, #9333ea 0%, #4f46e5 100%);
  }

  svg {
    transition: transform 0.3s ease;
  }
  &:hover svg {
    transform: translateX(4px);
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  animation: ${float} 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -15px;
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(147, 51, 234, 0.2));
    border-radius: 30px;
    filter: blur(20px);
    z-index: -1;
    animation: ${pulseGlow} 4s ease-in-out infinite;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    border: 2px solid rgba(255, 255, 255, 0.9);
    box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15);
    display: block;
  }
`;

const FloatingBadge = styled.div`
  position: absolute;
  bottom: -20px;
  left: -20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(234, 226, 248, 0.8);
  padding: 16px 22px;
  border-radius: 14px;
  box-shadow: 0 15px 35px rgba(79, 70, 229, 0.08);
  display: flex;
  align-items: center;
  gap: 14px;
  z-index: 2;

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  }

  .text {
    display: flex;
    flex-direction: column;
    
    strong {
      font-size: 0.95rem;
      color: #0f172a;
    }
    span {
      font-size: 0.8rem;
      color: #64748b;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Floating Background Shapes
const FloatingShape = styled.div`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  top: ${props => props.top};
  left: ${props => props.left};
  background: ${props => props.gradient};
  opacity: 0.15;
  filter: blur(45px);
  border-radius: 50%;
  animation: ${float} ${props => props.duration} ease-in-out infinite;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TemplateShowcase = () => {
  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  
  return (
    <Section>
      {/* Ambient Blurred Background Orbs updated to purple/blue tones */}
      {[
        { top: '5%', left: '-5%', size: '250px', gradient: 'radial-gradient(circle, #4f46e5, #6366f1)', duration: '7s' },
        { top: '10%', left: '80%', size: '280px', gradient: 'radial-gradient(circle, #9333ea, #a855f7)', duration: '6s' },
        { top: '60%', left: '-2%', size: '300px', gradient: 'radial-gradient(circle, #4f46e5, #9333ea)', duration: '8s' },
        { top: '75%', left: '85%', size: '260px', gradient: 'radial-gradient(circle, #6366f1, #4f46e5)', duration: '6.5s' },
      ].map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}

      {/* Main Content */}
      <ContentWrapper>
        <TextContent>
          <Heading ref={heroTitleAnim.ref} >
            Find the Template that<span> Fits your Business</span>
          </Heading>
          <SubText ref={heroSubtitleAnim.ref}>
            Elexdon's easy-to-use website builder helps even the most novice users create stunning,
            high-quality websites. Choose from hundreds of professionally designed templates, use the
            simple drag-and-drop builder to customize, and get your new website online today!
          </SubText>
          
          {/* <CTA href="#">
            Browse Templates
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </CTA> */}
        </TextContent>

        <ImageWrapper>
          <img src={templateImg} alt="Website Template Preview" />
          <FloatingBadge>
            <div className="icon">✓</div>
            <div className="text">
              <strong>100+ Templates</strong>
              <span>Ready to launch</span>
            </div>
          </FloatingBadge>
        </ImageWrapper>
      </ContentWrapper>
    </Section>
  );
};

export default TemplateShowcase;