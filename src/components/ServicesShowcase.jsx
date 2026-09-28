


// // components/ServicesShowcase.jsx
// import React from 'react';
// import styled from 'styled-components';
// import { FaServer, FaGlobe, FaLock } from 'react-icons/fa';
// import starsGif from '../Images/galaxy.gif'
// import { useNavigate } from 'react-router-dom';

// // 🔥 Replace with your own starry GIF URL
// // const starsGif = 'https://media.giphy.com/media/l0HlD5zqKFPvXkX1O/giphy.gif';

// const Section = styled.section`
//   position: relative;
//   // padding: 50px 20px;
//   text-align: center;
//   overflow: hidden;
// //   z-index: 1;
//   background: url(${starsGif}) center/cover no-repeat;
//   padding-top:0px;
//   padding-bottom:50px;
//   padding-left:20px;
//   padding-right:20px;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0; left: 0;
//     width: 100%; height: 100%;
    
//     opacity: 0.2;
//     z-index: -2;
//     animation: moveStars 60s linear infinite;
//   }

//   &::after {
//     content: "";
//     position: absolute;
//     top: 0; left: 0;
//     width: 100%; height: 100%;
//     background: linear-gradient(145deg, rgba(15,0,26,0.95), rgba(18,0,43,0.9));
//     z-index: -1;
//   }

//   @keyframes moveStars {
//     from {
//       background-position: 0 0;
//     }
//     to {
//       background-position: 1000px 1000px;
//     }
//   }
// `;

// const Heading = styled.h2`
//   font-size: 2.5rem;
//   background: linear-gradient(90deg, #c084fc, #facc15);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   margin-bottom: 10px;
// `;

// const SubHeading = styled.p`
//   font-size: 1.1rem;
//   max-width: 800px;
//   margin: 0 auto 60px auto;
//   color: #ccc;
// `;

// const CardsContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 30px;
//   justify-items: center;
// `;

// const GlowCard = styled.div`
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid rgba(255, 255, 255, 0.08);
//   border-radius: 20px;
//   padding: 40px 25px;
//   backdrop-filter: blur(10px);
//   box-shadow: 0 0 30px rgba(192, 132, 252, 0.2);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 0 60px rgba(250, 204, 21, 0.4);
//   }
// `;

// const IconWrapper = styled.div`
//   font-size: 40px;
//   margin-bottom: 20px;
//   color: #facc15;
// `;

// const Title = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 15px;
//   color: #e5e7eb;
// `;

// const Text = styled.p`
//   font-size: 0.95rem;
//   color: #bbb;
//   margin-bottom: 25px;
// `;

// const Button = styled.a`
//   background: linear-gradient(90deg, #facc15, #fcd34d);
//   color: #000;
//   padding: 12px 25px;
//   border-radius: 30px;
//   text-decoration: none;
//   font-weight: bold;
//   transition: 0.3s ease;
//   cursor:pointer;

//   &:hover {
//     background: linear-gradient(90deg, #fcd34d, #facc15);
//     transform: scale(1.05);
//   }
// `;

// const ServicesShowcase = () => {
//   const navigate = useNavigate();
//   return (
//     <Section>
//       <Heading>Check Our Awesome Services, And Order Now</Heading>
//       <SubHeading>
//         Whether you’re just starting out or need advanced performance, Elexdon Digitech has reliable services for you — Domain Name Registration, Web Hosting, SSL Certificates & Website Development!
//       </SubHeading>

//       <CardsContainer>
//         <GlowCard>
//           <IconWrapper><FaServer /></IconWrapper>
//           <Title>WEB HOSTING</Title>
//           <Text>Our web hosting is great for static websites, database-driven CMS, and custom apps.</Text>
//           <Button  onClick={()=>navigate('/sharedhosting')}>Find Out More</Button>
//         </GlowCard>

//         <GlowCard>
//           <IconWrapper><FaGlobe /></IconWrapper>
//           <Title>DOMAIN NAMES</Title>
//           <Text>Secure your online identity today. Even if you’re not ready to build a website.</Text>
//           <Button onClick={()=>navigate('/domainspage')}>Find Out More</Button>
//         </GlowCard>

//         <GlowCard>
//           <IconWrapper><FaLock /></IconWrapper>
//           <Title>SSL CERTIFICATES</Title>
//           <Text>Our SSL certificates ensure your website is encrypted & safe from threats.</Text>
//           <Button  onClick={()=>navigate('/sslpage')}>Find Out More</Button>
//         </GlowCard>

//         <GlowCard>
//           <IconWrapper><FaLock /></IconWrapper>
//           <Title>DEDICATED HOSTING</Title>
//           <Text>Our SSL certificates ensure your website is encrypted & safe from threats.</Text>
//           <Button onClick={()=>navigate('/dedicatedhosting')}>Find Out More</Button>
//         </GlowCard>
//       </CardsContainer>
//     </Section>
//   );
// };

// export default ServicesShowcase;











// import React from 'react';
// import styled from 'styled-components';
// import {
//   FaServer,
//   FaGlobe,
//   FaLock,
//   FaDatabase,
//   FaArrowRight
// } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// // ==========================================
// // SECTION
// // ==========================================

// const Section = styled.section`
//   width: 100%;
//   max-width: 1200px;
//   margin: 10px auto;
//   padding: 10px;
//   box-sizing: border-box;
//   background: #ffffff;
// `;

// const Header = styled.div`
//   display: flex;
//   align-items: flex-end;
//   justify-content: space-between;
//   gap: 10px;
//   margin-bottom: 10px;

//   @media (max-width: 700px) {
//     display: block;
//   }
// `;

// // ==========================================
// // HEADER
// // ==========================================

// const HeaderLeft = styled.div`
//   max-width: 650px;
// `;

// const Eyebrow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 6px;

//   margin-bottom: 7px;

//   color: #1264c7;
//   font-size: 0.72rem;
//   font-weight: 800;
//   letter-spacing: 1.3px;
//   text-transform: uppercase;
// `;

// const EyebrowLine = styled.span`
//   width: 22px;
//   height: 1px;
//   background: #1264c7;
// `;

// const Heading = styled.h2`
//   margin: 0;

//   color: #102a43;
//   font-size: clamp(1.8rem, 4vw, 2.8rem);
//   line-height: 1.08;
//   letter-spacing: -1.2px;
//   font-weight: 800;
// `;

// const Blue = styled.span`
//   color: #1264c7;
// `;

// const SubHeading = styled.p`
//   max-width: 580px;
//   margin: 7px 0 0;

//   color: #65798d;
//   font-size: 0.9rem;
//   line-height: 1.55;
// `;

// const HeaderSide = styled.div`
//   color: #8a9aaa;
//   font-size: 0.72rem;
//   white-space: nowrap;

//   @media (max-width: 700px) {
//     margin-top: 7px;
//   }
// `;

// // ==========================================
// // SERVICES
// // ==========================================

// const Services = styled.div`
//   border-top: 1px solid #dce6ef;
// `;

// const Service = styled.div`
//   position: relative;

//   display: grid;
//   grid-template-columns: 55px 50px 1fr auto;
//   align-items: center;

//   min-height: 100px;

//   border-bottom: 1px solid #dce6ef;

//   transition: background 0.25s ease;

//   &:hover {
//     background: #f6faff;
//   }

//   &:hover .service-arrow {
//     transform: translateX(4px);
//     color: #1264c7;
//   }

//   @media (max-width: 650px) {
//     grid-template-columns: 38px 42px 1fr 30px;
//     min-height: 90px;
//   }
// `;

// const Number = styled.div`
//   color: #9aacbd;
//   font-size: 0.7rem;
//   font-weight: 700;
// `;

// const Icon = styled.div`
//   width: 34px;
//   height: 34px;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   color: #1264c7;
//   background: #edf5fd;

//   border-radius: 5px;

//   font-size: 0.9rem;
// `;

// const ServiceInfo = styled.div`
//   padding: 10px 10px 10px 0;
// `;

// const ServiceTitle = styled.h3`
//   margin: 0 0 4px;

//   color: #163957;
//   font-size: 0.95rem;
//   font-weight: 800;
//   letter-spacing: 0.2px;
// `;

// const ServiceText = styled.p`
//   max-width: 650px;

//   margin: 0;

//   color: #718397;
//   font-size: 0.78rem;
//   line-height: 1.45;
// `;

// const Action = styled.button`
//   display: flex;
//   align-items: center;
//   gap: 6px;

//   border: 0;
//   background: transparent;

//   color: #4f687f;

//   cursor: pointer;

//   font-size: 0.75rem;
//   font-weight: 700;

//   white-space: nowrap;

//   .service-arrow {
//     transition: 0.25s ease;
//   }

//   &:hover {
//     color: #1264c7;
//   }

//   @media (max-width: 650px) {
//     span {
//       display: none;
//     }
//   }
// `;

// // ==========================================
// // BOTTOM
// // ==========================================

// const Footer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   padding: 10px 0 0;

//   color: #7b8d9f;
//   font-size: 0.7rem;

//   @media (max-width: 600px) {
//     display: block;
//   }
// `;

// const FooterHighlight = styled.span`
//   color: #1264c7;
//   font-weight: 700;
// `;


// // ==========================================
// // COMPONENT
// // ==========================================

// const ServicesShowcase = () => {
//   const navigate = useNavigate();

//   const services = [
//     {
//       number: '01',
//       icon: <FaServer />,
//       title: 'WEB HOSTING',
//       text: 'Reliable hosting for business websites, CMS platforms, databases and custom web applications.',
//       route: '/sharedhosting'
//     },
//     {
//       number: '02',
//       icon: <FaGlobe />,
//       title: 'DOMAIN NAMES',
//       text: 'Register the perfect domain and establish a professional online identity for your business.',
//       route: '/domainspage'
//     },
//     {
//       number: '03',
//       icon: <FaLock />,
//       title: 'SSL CERTIFICATES',
//       text: 'Protect your website and customer information with secure encrypted connections.',
//       route: '/sslpage'
//     },
//     {
//       number: '04',
//       icon: <FaDatabase />,
//       title: 'DEDICATED HOSTING',
//       text: 'Power demanding websites and applications with dedicated server resources and performance.',
//       route: '/dedicatedhosting'
//     }
//   ];

//   return (
//     <Section>

//       <Header>

//         <HeaderLeft>

//           <Eyebrow>
//             <EyebrowLine />
//             Our Services
//           </Eyebrow>

//           <Heading>
//             Infrastructure for your
//             <Blue> digital presence.</Blue>
//           </Heading>

//           <SubHeading>
//             Everything you need to establish, protect and operate
//             your business online — from your domain to your server.
//           </SubHeading>

//         </HeaderLeft>

//         <HeaderSide>
//           ELEXDON DIGITECH / SERVICES
//         </HeaderSide>

//       </Header>

//       <Services>

//         {services.map((service) => (
//           <Service key={service.number}>

//             <Number>
//               {service.number}
//             </Number>

//             <Icon>
//               {service.icon}
//             </Icon>

//             <ServiceInfo>

//               <ServiceTitle>
//                 {service.title}
//               </ServiceTitle>

//               <ServiceText>
//                 {service.text}
//               </ServiceText>

//             </ServiceInfo>

//             <Action
//               onClick={() => navigate(service.route)}
//               aria-label={`Learn more about ${service.title}`}
//             >
//               <span>Explore</span>

//               <FaArrowRight className="service-arrow" />

//             </Action>

//           </Service>
//         ))}

//       </Services>

//       <Footer>

//         <div>
//           <FooterHighlight>04 services</FooterHighlight>
//           {' '}to build your online foundation.
//         </div>

//         <div>
//           Secure. Reliable. Professional.
//         </div>

//       </Footer>

//     </Section>
//   );
// };

// export default ServicesShowcase;







// // components/ServicesAndFeatures.jsx
// import React from 'react';
// import styled from 'styled-components';
// import {
//   FaServer,
//   FaGlobe,
//   FaLock,
//   FaMicrochip,
//   FaCloud,
//   FaArrowUp,
//   FaSyncAlt,
//   FaLifeRing,
//   FaRocket,
//   FaArrowRight,
//   FaCheck,
// } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// // ======================================================
// // MAIN SECTION
// // ======================================================

// const Section = styled.section`
//   width: 100%;
//   max-width: 1200px;
//   margin: 10px auto;
//   padding: 10px;
//   box-sizing: border-box;
//   background: #ffffff;
//   overflow: hidden;
// `;

// // ======================================================
// // TOP INTRO
// // ======================================================

// const Intro = styled.div`
//   display: grid;
//   grid-template-columns: 0.8fr 1.2fr;
//   gap: 10px;
//   align-items: end;
//   padding: 10px 0;
//   border-bottom: 1px solid #dfe8f1;

//   @media (max-width: 750px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const IntroTag = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   width: fit-content;

//   color: #1264c7;
//   font-size: 0.7rem;
//   font-weight: 800;
//   letter-spacing: 1.5px;
//   text-transform: uppercase;
// `;

// const TagDot = styled.span`
//   width: 7px;
//   height: 7px;
//   border-radius: 50%;
//   background: #1264c7;
// `;

// const Heading = styled.h2`
//   margin: 4px 0 0;
//   color: #102a43;
//   font-size: clamp(2rem, 4.5vw, 3.5rem);
//   line-height: 0.98;
//   letter-spacing: -2px;
//   font-weight: 850;
// `;

// const Blue = styled.span`
//   color: #1264c7;
// `;

// const IntroText = styled.p`
//   max-width: 650px;
//   margin: 0;
//   color: #65798d;
//   font-size: 0.9rem;
//   line-height: 1.6;
// `;

// // ======================================================
// // SERVICE NAVIGATION
// // ======================================================

// const ServiceNav = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 10px;
//   padding: 10px 0;

//   @media (max-width: 850px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Service = styled.button`
//   position: relative;

//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;

//   min-height: 125px;

//   padding: 10px;
//   border: 1px solid #dfe8f1;
//   background: #f8fbfe;

//   cursor: pointer;
//   text-align: left;

//   transition: all 0.25s ease;

//   &:hover {
//     background: #edf6ff;
//     border-color: #a9cbed;
//     transform: translateY(-2px);
//   }

//   &:hover .service-arrow {
//     transform: translateX(4px);
//     color: #1264c7;
//   }
// `;

// const ServiceTop = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 8px;
// `;

// const ServiceIcon = styled.div`
//   width: 32px;
//   height: 32px;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   background: #e5f1fc;
//   color: #1264c7;

//   border-radius: 50%;
//   font-size: 0.8rem;
// `;

// const ServiceNumber = styled.span`
//   color: #b2c0ce;
//   font-size: 0.65rem;
//   font-weight: 800;
// `;

// const ServiceTitle = styled.h3`
//   margin: 0 0 4px;
//   color: #173b5d;
//   font-size: 0.9rem;
//   font-weight: 800;
// `;

// const ServiceDescription = styled.p`
//   margin: 0;
//   color: #73869a;
//   font-size: 0.72rem;
//   line-height: 1.45;
// `;

// const ServiceArrow = styled(FaArrowRight)`
//   position: absolute;
//   right: 10px;
//   bottom: 10px;

//   color: #a3b3c2;
//   font-size: 0.7rem;

//   transition: 0.25s ease;
// `;

// // ======================================================
// // FEATURE AREA
// // ======================================================

// const FeatureSection = styled.div`
//   position: relative;

//   display: grid;
//   grid-template-columns: 0.75fr 1.25fr;

//   gap: 10px;

//   margin-top: 10px;
//   padding: 10px;

//   background: #f3f8fc;

//   border-top: 1px solid #dce7f1;
//   border-bottom: 1px solid #dce7f1;

//   @media (max-width: 800px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FeatureIntro = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   min-height: 250px;
// `;

// const FeatureLabel = styled.div`
//   color: #1264c7;
//   font-size: 0.68rem;
//   font-weight: 800;
//   letter-spacing: 1.4px;
//   text-transform: uppercase;
// `;

// const FeatureHeading = styled.h3`
//   max-width: 320px;

//   margin: 5px 0;

//   color: #102a43;

//   font-size: clamp(1.5rem, 3vw, 2.3rem);
//   line-height: 1.05;
//   letter-spacing: -1px;
// `;

// const FeatureIntroText = styled.p`
//   max-width: 350px;

//   margin: 0;

//   color: #6b7e91;

//   font-size: 0.78rem;
//   line-height: 1.55;
// `;

// const MiniBadge = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 6px;

//   width: fit-content;

//   padding: 6px 8px;

//   color: #1264c7;
//   background: #ffffff;

//   border: 1px solid #dce8f2;
//   border-radius: 20px;

//   font-size: 0.65rem;
//   font-weight: 700;
// `;

// const BadgeDot = styled.span`
//   width: 6px;
//   height: 6px;
//   border-radius: 50%;
//   background: #28a765;
// `;

// // ======================================================
// // FEATURES GRID
// // ======================================================

// const FeatureGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 1px;

//   background: #d9e5ef;

//   @media (max-width: 520px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Feature = styled.div`
//   position: relative;

//   min-height: 120px;

//   padding: 10px;

//   background: #ffffff;

//   transition: background 0.25s ease;

//   &:hover {
//     background: #fafdff;
//   }

//   &:hover .feature-icon {
//     color: #1264c7;
//     transform: scale(1.08);
//   }
// `;

// const FeatureTop = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const FeatureIcon = styled.div`
//   color: #8aa1b7;
//   font-size: 1.1rem;

//   transition: 0.25s ease;
// `;

// const FeatureCheck = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   width: 18px;
//   height: 18px;

//   color: #1e9b59;
//   background: #eaf8f0;

//   border-radius: 50%;

//   font-size: 0.55rem;
// `;

// const FeatureTitle = styled.h4`
//   margin: 7px 0 3px;

//   color: #173b5d;
//   font-size: 0.82rem;
//   font-weight: 800;
// `;

// const FeatureText = styled.p`
//   max-width: 390px;

//   margin: 0;

//   color: #74879a;

//   font-size: 0.7rem;
//   line-height: 1.5;
// `;

// // ======================================================
// // BOTTOM STATEMENT
// // ======================================================

// const Bottom = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   gap: 10px;

//   padding-top: 10px;

//   color: #7a8c9d;
//   font-size: 0.68rem;

//   @media (max-width: 600px) {
//     display: block;
//   }
// `;

// const BottomItems = styled.div`
//   display: flex;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 10px;
// `;

// const BottomItem = styled.span`
//   display: flex;
//   align-items: center;
//   gap: 4px;

//   strong {
//     color: #1264c7;
//   }
// `;

// const BottomBrand = styled.span`
//   color: #1264c7;
//   font-weight: 800;
// `;

// // ======================================================
// // COMPONENT
// // ======================================================

// const ServicesShowcase = () => {
//   const navigate = useNavigate();

//   const services = [
//     {
//       number: '01',
//       icon: <FaServer />,
//       title: 'WEB HOSTING',
//       text: 'Fast and dependable hosting for websites, databases and applications.',
//       route: '/sharedhosting',
//     },
//     {
//       number: '02',
//       icon: <FaGlobe />,
//       title: 'DOMAIN NAMES',
//       text: 'Secure the right domain and establish your business identity online.',
//       route: '/domainspage',
//     },
//     {
//       number: '03',
//       icon: <FaLock />,
//       title: 'SSL CERTIFICATES',
//       text: 'Protect your website with encrypted and trusted connections.',
//       route: '/sslpage',
//     },
//     {
//       number: '04',
//       icon: <FaMicrochip />,
//       title: 'DEDICATED HOSTING',
//       text: 'Dedicated resources for demanding websites and high-traffic applications.',
//       route: '/dedicatedhosting',
//     },
//   ];

//   const features = [
//     {
//       icon: <FaSyncAlt />,
//       title: 'Free Website Migration',
//       text: 'Move your existing website to our hosting platform with migration assistance.',
//     },
//     {
//       icon: <FaCloud />,
//       title: 'Cloud Infrastructure',
//       text: 'Reliable infrastructure designed with performance, redundancy and stability in mind.',
//     },
//     {
//       icon: <FaArrowUp />,
//       title: 'Resource Scaling',
//       text: 'Increase available resources when your website experiences higher traffic.',
//     },
//     {
//       icon: <FaLock />,
//       title: 'Free SSL Certificates',
//       text: 'Secure your websites with SSL protection included with hosting services.',
//     },
//     {
//       icon: <FaRocket />,
//       title: '99.9% Uptime',
//       text: 'Reliable network infrastructure designed to keep your services available.',
//     },
//     {
//       icon: <FaLifeRing />,
//       title: '24/7 Expert Support',
//       text: 'Get assistance when you need it through professional technical support.',
//     },
//   ];

//   return (
//     <Section>

//       {/* ==============================================
//           INTRO
//       ============================================== */}

//       <Intro>

//         <div>
//           <IntroTag>
//             <TagDot />
//             Elexdon HOST
//           </IntroTag>

//           <Heading>
//             Everything your
//             <br />
//             <Blue>website needs.</Blue>
//           </Heading>
//         </div>

//         <IntroText>
//           From registering your domain to powering high-traffic
//           applications, we provide the infrastructure and services
//           required to establish, protect and grow your digital presence.
//         </IntroText>

//       </Intro>


//       {/* ==============================================
//           SERVICES
//       ============================================== */}

//       <ServiceNav>

//         {services.map((service) => (
//           <Service
//             key={service.number}
//             onClick={() => navigate(service.route)}
//           >

//             <ServiceTop>

//               <ServiceIcon>
//                 {service.icon}
//               </ServiceIcon>

//               <ServiceNumber>
//                 {service.number}
//               </ServiceNumber>

//             </ServiceTop>

//             <ServiceTitle>
//               {service.title}
//             </ServiceTitle>

//             <ServiceDescription>
//               {service.text}
//             </ServiceDescription>

//             <ServiceArrow className="service-arrow" />

//           </Service>
//         ))}

//       </ServiceNav>


//       {/* ==============================================
//           FEATURES
//       ============================================== */}

//       <FeatureSection>

//         <FeatureIntro>

//           <div>

//             <FeatureLabel>
//               Included advantages
//             </FeatureLabel>

//             <FeatureHeading>
//               More than hosting.
//               <br />
//               A better foundation.
//             </FeatureHeading>

//             <FeatureIntroText>
//               Every service is backed by practical features designed
//               to make your website easier to launch, protect and manage.
//             </FeatureIntroText>

//           </div>

//           <MiniBadge>
//             <BadgeDot />
//             Infrastructure ready
//           </MiniBadge>

//         </FeatureIntro>


//         <FeatureGrid>

//           {features.map((feature, index) => (
//             <Feature key={index}>

//               <FeatureTop>

//                 <FeatureIcon className="feature-icon">
//                   {feature.icon}
//                 </FeatureIcon>

//                 <FeatureCheck>
//                   <FaCheck />
//                 </FeatureCheck>

//               </FeatureTop>

//               <FeatureTitle>
//                 {feature.title}
//               </FeatureTitle>

//               <FeatureText>
//                 {feature.text}
//               </FeatureText>

//             </Feature>
//           ))}

//         </FeatureGrid>

//       </FeatureSection>


//       {/* ==============================================
//           BOTTOM
//       ============================================== */}

//       <Bottom>

//         <BottomItems>

//           <BottomItem>
//             <strong>✓</strong>
//             Reliable infrastructure
//           </BottomItem>

//           <BottomItem>
//             <strong>✓</strong>
//             Business-ready services
//           </BottomItem>

//           <BottomItem>
//             <strong>✓</strong>
//             Technical support
//           </BottomItem>

//         </BottomItems>

//         <BottomBrand>
//           ELEXDON HOST
//         </BottomBrand>

//       </Bottom>

//     </Section>
//   );
// };

// export default ServicesShowcase;





// components/ServicesAndFeatures.jsx
import React from 'react';
import styled from 'styled-components';
import {
  FaServer,
  FaGlobe,
  FaLock,
  FaMicrochip,
  FaCloud,
  FaArrowUp,
  FaSyncAlt,
  FaLifeRing,
  FaRocket,
  FaArrowRight,
  FaCheck,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// ======================================================
// MAIN SECTION
// ======================================================

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(135deg, #f7f5ff 0%, #ffffff 100%);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(147, 51, 234, 0.03);
`;

// ======================================================
// TOP INTRO
// ======================================================

const Intro = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 20px;
  align-items: end;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee2f6;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

const IntroTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;

  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const TagDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
`;

const Heading = styled.h2`
  margin: 8px 0 0;
  color: #102a43;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  line-height: 1.05;
  letter-spacing: -2px;
  font-weight: 850;
`;

const Blue = styled.span`
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const IntroText = styled.p`
  max-width: 650px;
  margin: 0;
  color: #61758a;
  font-size: 0.95rem;
  line-height: 1.6;
`;

// ======================================================
// SERVICE NAVIGATION
// ======================================================

const ServiceNav = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 20px 0;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Service = styled.button`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-height: 135px;

  padding: 16px;
  border: 1px solid #eae2f8;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.5);

  cursor: pointer;
  text-align: left;

  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #faf8ff 0%, #ffffff 100%);
    border-color: #c4b5fd;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(147, 51, 234, 0.08);
  }

  &:hover .service-arrow {
    transform: translateX(4px);
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const ServiceTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const ServiceIcon = styled.div`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(147, 51, 234, 0.1));
  color: #4f46e5;

  border-radius: 10px;
  font-size: 0.85rem;
`;

const ServiceNumber = styled.span`
  color: #cbd5e1;
  font-size: 0.7rem;
  font-weight: 800;
`;

const ServiceTitle = styled.h3`
  margin: 0 0 6px;
  color: #173b5d;
  font-size: 0.9rem;
  font-weight: 800;
`;

const ServiceDescription = styled.p`
  margin: 0;
  color: #73869a;
  font-size: 0.75rem;
  line-height: 1.45;
`;

const ServiceArrow = styled(FaArrowRight)`
  position: absolute;
  right: 16px;
  bottom: 16px;

  color: #cbd5e1;
  font-size: 0.75rem;

  transition: 0.25s ease;
`;

// ======================================================
// FEATURE AREA
// ======================================================

const FeatureSection = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 0.75fr 1.25fr;

  gap: 20px;

  margin-top: 10px;
  padding: 20px;

  background: linear-gradient(135deg, #f3eeff 0%, #fcfaff 100%);

  border-top: 1px solid #eae2f8;
  border-bottom: 1px solid #eae2f8;
  border-radius: 12px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 250px;
`;

const FeatureLabel = styled.div`
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

const FeatureHeading = styled.h3`
  max-width: 320px;

  margin: 8px 0;

  color: #102a43;

  font-size: clamp(1.5rem, 3vw, 2.3rem);
  line-height: 1.1;
  letter-spacing: -1px;
`;

const FeatureIntroText = styled.p`
  max-width: 350px;

  margin: 0;

  color: #6b7e91;

  font-size: 0.82rem;
  line-height: 1.55;
`;

const MiniBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  width: fit-content;

  padding: 8px 12px;

  background: #ffffff;
  color: #4f46e5;

  border: 1px solid #eae2f8;
  border-radius: 20px;

  font-size: 0.7rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.05);
`;

const BadgeDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #10b981;
`;

// ======================================================
// FEATURES GRID
// ======================================================

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;

  background: #e5daf5;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  position: relative;

  min-height: 130px;

  padding: 16px;

  background: #ffffff;

  transition: all 0.25s ease;

  &:hover {
    background: #faf7ff;
  }

  &:hover .feature-icon {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: scale(1.1);
  }
`;

const FeatureTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FeatureIcon = styled.div`
  color: #94a3b8;
  font-size: 1.1rem;

  transition: 0.25s ease;
`;

const FeatureCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  color: #10b981;
  background: rgba(16, 185, 129, 0.1);

  border-radius: 50%;

  font-size: 0.6rem;
`;

const FeatureTitle = styled.h4`
  margin: 10px 0 4px;

  color: #173b5d;
  font-size: 0.85rem;
  font-weight: 800;
`;

const FeatureText = styled.p`
  max-width: 390px;

  margin: 0;

  color: #74879a;

  font-size: 0.72rem;
  line-height: 1.5;
`;

// ======================================================
// BOTTOM STATEMENT
// ======================================================

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 10px;

  padding-top: 15px;

  color: #7a8c9d;
  font-size: 0.72rem;

  @media (max-width: 600px) {
    display: block;
  }
`;

const BottomItems = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const BottomItem = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;

  strong {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
  }
`;

const BottomBrand = styled.span`
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`;

// ======================================================
// COMPONENT
// ======================================================

const ServicesShowcase = () => {
  const navigate = useNavigate();

  const services = [
    {
      number: '01',
      icon: <FaServer />,
      title: 'WEB HOSTING',
      text: 'Fast and dependable hosting for websites, databases and applications.',
      route: '/sharedhosting',
    },
    {
      number: '02',
      icon: <FaGlobe />,
      title: 'DOMAIN NAMES',
      text: 'Secure the right domain and establish your business identity online.',
      route: '/domainspage',
    },
    {
      number: '03',
      icon: <FaLock />,
      title: 'SSL CERTIFICATES',
      text: 'Protect your website with encrypted and trusted connections.',
      route: '/sslpage',
    },
    // {
    //   number: '04',
    //   icon: <FaMicrochip />,
    //   title: 'DEDICATED HOSTING',
    //   text: 'Dedicated resources for demanding websites and high-traffic applications.',
    //   route: '/dedicatedhosting',
    // },
  ];

  const features = [
    {
      icon: <FaSyncAlt />,
      title: 'Free Website Migration',
      text: 'Move your existing website to our hosting platform with migration assistance.',
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Infrastructure',
      text: 'Reliable infrastructure designed with performance, redundancy and stability in mind.',
    },
    {
      icon: <FaArrowUp />,
      title: 'Resource Scaling',
      text: 'Increase available resources when your website experiences higher traffic.',
    },
    {
      icon: <FaLock />,
      title: 'Free SSL Certificates',
      text: 'Secure your websites with SSL protection included with hosting services.',
    },
    {
      icon: <FaRocket />,
      title: '99.9% Uptime',
      text: 'Reliable network infrastructure designed to keep your services available.',
    },
    {
      icon: <FaLifeRing />,
      title: '24/7 Expert Support',
      text: 'Get assistance when you need it through professional technical support.',
    },
  ];

  return (
    <Section>
      {/* ==============================================
          INTRO
      ============================================== */}
      <Intro>
        <div>
          <IntroTag>
            <TagDot />
            Elexdon HOST
          </IntroTag>

          <Heading>
            Everything your
            <br />
            <Blue>website needs.</Blue>
          </Heading>
        </div>

        <IntroText>
          From registering your domain to powering high-traffic
          applications, we provide the infrastructure and services
          required to establish, protect and grow your digital presence.
        </IntroText>
      </Intro>

      {/* ==============================================
          SERVICES
      ============================================== */}
      <ServiceNav>
        {services.map((service) => (
          <Service
            key={service.number}
            onClick={() => navigate(service.route)}
          >
            <ServiceTop>
              <ServiceIcon>
                {service.icon}
              </ServiceIcon>
              <ServiceNumber>
                {service.number}
              </ServiceNumber>
            </ServiceTop>

            <ServiceTitle>
              {service.title}
            </ServiceTitle>

            <ServiceDescription>
              {service.text}
            </ServiceDescription>
<br/>
            <div style={{
  display: "flex", 
  alignItems: "center", 
  gap: "8px", 
  fontWeight: "700", 
  fontSize: "13px", 
  letterSpacing: "0.5px", 
  textTransform: "uppercase",
  background: "linear-gradient(135deg, #4f46e5, #9333ea)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  cursor: "pointer"
}}>
  Explore 
  <FaArrowRight style={{ 
    fontSize: "12px", 
    color: "#9333ea", 
    WebkitTextFillColor: "initial" // ensures the icon keeps its gradient/color if needed
  }} />
  <ServiceArrow className="service-arrow" />
</div></Service>
        ))}
      </ServiceNav>

      {/* ==============================================
          FEATURES
      ============================================== */}
      <FeatureSection>
        <FeatureIntro>
          <div>
            <FeatureLabel>
              Included advantages
            </FeatureLabel>

            <FeatureHeading>
              More than hosting.
              <br />
              A better foundation.
            </FeatureHeading>

            <FeatureIntroText>
              Every service is backed by practical features designed
              to make your website easier to launch, protect and manage.
            </FeatureIntroText>
          </div>

          <MiniBadge>
            <BadgeDot />
            Infrastructure ready
          </MiniBadge>
        </FeatureIntro>

        <FeatureGrid>
          {features.map((feature, index) => (
            <Feature key={index}>
              <FeatureTop>
                <FeatureIcon className="feature-icon">
                  {feature.icon}
                </FeatureIcon>
                <FeatureCheck>
                  <FaCheck />
                </FeatureCheck>
              </FeatureTop>

              <FeatureTitle>
                {feature.title}
              </FeatureTitle>

              <FeatureText>
                {feature.text}
              </FeatureText>
            </Feature>
          ))}
        </FeatureGrid>
      </FeatureSection>

      {/* ==============================================
          BOTTOM
      ============================================== */}
      <Bottom>
        <BottomItems>
          <BottomItem>
            <strong>✓</strong>
            Reliable infrastructure
          </BottomItem>

          <BottomItem>
            <strong>✓</strong>
            Business-ready services
          </BottomItem>

          <BottomItem>
            <strong>✓</strong>
            Technical support
          </BottomItem>
        </BottomItems>

        <BottomBrand>
          ELEXDON HOST
        </BottomBrand>
      </Bottom>
    </Section>
  );
};

export default ServicesShowcase;