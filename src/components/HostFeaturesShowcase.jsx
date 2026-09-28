
// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import panelImg from '../Images/cpanelimg.png'; // replace with your actual image path
// import useAnimateOnScroll from './useAnimateOnScroll';
// import 'animate.css'

// const float = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-50px); }
//   100% { transform: translateY(0px) }
// `;

// const Section = styled.section`
//   position: relative;
//   padding: 100px 20px;
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
//     // text-align: center;
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

// const SubText = styled.ul`
//   font-size: 1.1rem;
//   color: #333;
//   max-width: 600px;
//   line-height: 1.8;
//   list-style-type: disc;
//   padding-left: 20px;
//   text-align: left;

//   @media (max-width: 768px) {
//     // text-align: center;
//     padding-left: 0;
//     list-style-type: none;
//   }

//   li {
//     margin-bottom: 10px;
//   }
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

// // Floating Shapes with nice animations and color gradients
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

// const CPanelShowcase = () => {
//   const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const tldTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const pricingTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const pricingTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const pricingTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');

//   return (
//     <Section>
//       {[ // floating shapes
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
//       ].map((shape, idx) => (
//         <FloatingShape key={idx} {...shape} />
//       ))}

//       <ContentWrapper>
//         <TextContent>
//           <Heading ref={heroTitleAnim.ref} className={heroTitleAnim.className}>cPanel Control Panel</Heading>
//           <SubText >
//             <li ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>cPanel is a convenient management platform with essential website creation and file editing tools.</li>
//             <li ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Easy to use file manager</li>
//             <li ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>File backup & restore</li>
//             <li ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Webmail and POP3/IMAP</li>
//             <li ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Web stats & logs</li>
//             <li ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Scheduled tasks</li>
//             <li ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Full Ecommerce software</li>
//             <li ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>One click install scripts including WordPress</li>
//             <li ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Download log files</li>
//           </SubText>
//           {/* <CTA href="#">Explore cPanel Features</CTA> */}
//         </TextContent>

//         <ImageWrapper>
//           <img src={panelImg} alt="cPanel Control Panel Preview" />
//         </ImageWrapper>
//       </ContentWrapper>
//     </Section>
//   );
// };

// export default CPanelShowcase;




import React from 'react';
import styled from 'styled-components';
import panelImg from '../Images/cpanelimg.png';
import wpLogo from '../Images/sft1.png';
import magentoLogo from '../Images/sft2.png';
import joomlaLogo from '../Images/sft3.png';
import drupalLogo from '../Images/sft4.png';
import opencartLogo from '../Images/sft5.png';
import bootstrapLogo from '../Images/sft6.png';
import { FaCheckCircle, FaRocket } from 'react-icons/fa';

// ---------- Styled Components ----------
const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  gap: 120px;
  background: #fcfbfe;
  color: #0f172a;
  font-family: "Inter", sans-serif;
`;

const SplitRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;

  &:nth-child(even) {
    direction: rtl;
    
    > * {
      direction: ltr;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
    direction: ltr !important;
  }
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Tagline = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #4f46e5;
  background: rgba(79, 70, 229, 0.08);
  padding: 6px 14px;
  border-radius: 30px;
  width: fit-content;

  svg {
    font-size: 0.9rem;
  }
`;

const Heading = styled.h2`
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 900;
  line-height: 1.15;
  color: #0f172a;
  margin: 0;

  span {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #61758a;
  margin: 0;
  font-weight: 500;
`;

const FeatureCheckList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  li {
    font-size: 0.95rem;
    color: #334155;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      color: #10b981;
      font-size: 1rem;
      flex-shrink: 0;
    }
  }
`;

const MediaBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img.preview-img {
    width: 100%;
    max-width: 520px;
    height: auto;
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
  }
`;

const AppsShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 20px;
  justify-content: center;

  @media (max-width: 500px) {
    grid-template-columns: repeat(3, 80px);
    gap: 12px;
  }

  .app-badge {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 18px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    box-shadow: 0 10px 25px rgba(79, 70, 229, 0.04);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const HostingFeaturesShowcase = () => {
  return (
    <Container>
      {/* Row 1: cPanel Control Panel */}
      <SplitRow>
        <ContentBlock>
          <Tagline>
            <FaRocket /> Streamlined Control
          </Tagline>
          <Heading>
            Enterprise Power with <span>cPanel</span>
          </Heading>
          <Description>
            Manage your websites, domains, databases, and professional email accounts effortlessly using industry-standard tools designed for performance and ease.
          </Description>
          <FeatureCheckList>
            <li><FaCheckCircle /> Easy File Manager</li>
            <li><FaCheckCircle /> Automated Backups</li>
            <li><FaCheckCircle /> Webmail & POP3/IMAP</li>
            <li><FaCheckCircle /> Detailed Traffic Logs</li>
            <li><FaCheckCircle /> Scheduled Cron Jobs</li>
            <li><FaCheckCircle /> Softaculous Integration</li>
          </FeatureCheckList>
        </ContentBlock>

        <MediaBlock>
          <img src={panelImg} alt="cPanel Dashboard Preview" className="preview-img" />
        </MediaBlock>
      </SplitRow>

      {/* Row 2: Softaculous 1-Click Apps */}
      <SplitRow>
        <MediaBlock>
          <AppsShowcaseGrid>
            <div className="app-badge"><img src={wpLogo} alt="WordPress" /></div>
            <div className="app-badge"><img src={magentoLogo} alt="Magento" /></div>
            <div className="app-badge"><img src={joomlaLogo} alt="Joomla" /></div>
            <div className="app-badge"><img src={bootstrapLogo} alt="Bootstrap" /></div>
            <div className="app-badge"><img src={drupalLogo} alt="Drupal" /></div>
            <div className="app-badge"><img src={opencartLogo} alt="OpenCart" /></div>
          </AppsShowcaseGrid>
        </MediaBlock>

        <ContentBlock>
          <Tagline>
            <FaRocket /> Instant Deployment
          </Tagline>
          <Heading>
            1-Click App Install with <span>Softaculous</span>
          </Heading>
          <Description>
            Skip manual installations. Softaculous lets you instantly install, backup, and auto-update over 100 industry-leading scripts including WordPress, Magento, Joomla, and OpenCart with a single click.
          </Description>
          <FeatureCheckList>
            <li><FaCheckCircle /> 100+ Free Scripts</li>
            <li><FaCheckCircle /> Automatic Updates</li>
            <li><FaCheckCircle /> Direct App Cloning</li>
            <li><FaCheckCircle /> Enhanced Security</li>
          </FeatureCheckList>
        </ContentBlock>
      </SplitRow>
    </Container>
  );
};

export default HostingFeaturesShowcase;