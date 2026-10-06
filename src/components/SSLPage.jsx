
// // import React from 'react';
// // import styled from 'styled-components';
// // import heroBg from '../Images/sslimg2.jpg';
// // import sslVisual1 from '../Images/sslimg.jpg';
// // import sslVisual2 from '../Images/sslimg.jpg';

// // const Hero = styled.section`
// //   background-image: url(${heroBg});
// //   background-size: cover;
// //   background-position: center;
// //   position: relative;
// //   padding: 120px 20px;
// //   text-align: center;
// //   color: white;

// //   &::before {
// //     content: '';
// //     position: absolute;
// //     top: 0;
// //     left: 0;
// //     width: 100%;
// //     height: 100%;
// //     background: rgba(0, 0, 0, 0.6);
// //     z-index: 0;
// //   }

// //   > * {
// //     position: relative;
// //     z-index: 1;
// //   }

// //   h1 {
// //     font-size: 3rem;
// //     text-transform: uppercase;
// //     text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
// //   }

// //   p {
// //     max-width: 700px;
// //     margin: 20px auto 0;
// //     font-size: 1.2rem;
// //   }
// // `;

// // const Section = styled.section`
// //   padding: 60px 20px;
// //   text-align: center;
// //   background: ${props => (props.dark ? '#0f1115' : '#f8f9fa')};
// //   color: ${props => (props.dark ? 'white' : '#1f1f1f')};

// //   h2 {
// //     font-size: 2.5rem;
// //     margin-bottom: 20px;
// //     color: ${props => (props.dark ? '#4dabf7' : '#2B32B2')};
// //   }
// // `;

// // const InfoImage = styled.img`
// //   width: 100%;
// //   max-width: 900px;
// //   margin: 40px auto;
// //   border-radius: 12px;
// //   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
// // `;

// // const PlanGrid = styled.div`
// //   display: grid;
// //   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
// //   gap: 30px;
// //   margin-top: 40px;
// // `;

// // const PlanCard = styled.div`
// //   background: #1f1f1f;
// //   color: white;
// //   padding: 30px;
// //   border-radius: 12px;
// //   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
// //   text-align: center;

// //   h3 {
// //     font-size: 1.5rem;
// //     color: #4dabf7;
// //   }

// //   p {
// //     margin: 10px 0;
// //     font-size: 1rem;
// //   }

// //   .price {
// //     font-size: 1.6rem;
// //     font-weight: bold;
// //     color: #00c896;
// //     margin: 15px 0;
// //   }

// //   button {
// //     background: #4dabf7;
// //     color: white;
// //     border: none;
// //     padding: 10px 20px;
// //     border-radius: 6px;
// //     cursor: pointer;
// //     transition: 0.3s;

// //     &:hover {
// //       background: #339af0;
// //     }
// //   }
// // `;

// // const SSLPage = () => {
// //   return (
// //     <>
// //       <Hero>
// //         <h1>Protect Sensitive Data</h1>
// //         <p>If you’re serious about doing business online, you need SSL. It protects user data, defends against identity theft, and builds trust.</p>
// //       </Hero>

// //       <Section>
// //         <h2>Why SSL is Important</h2>
// //         <p>
// //           Information on the internet travels from computer to computer before reaching its destination. Without SSL, it's exposed to risks. 
// //           SSL encrypts data so only the intended recipient can read it.
// //         </p>
// //         <InfoImage src={sslVisual1} alt="SSL Encryption Visual" />
// //       </Section>

// //       <Section dark>
// //         <h2>Secure Your Website - Choose Your Plan</h2>
// //         <PlanGrid>
// //           <PlanCard>
// //             <h3>E-Classic SSL</h3>
// //             <p>This domain validated (DV) certificate offers industry standard encryption at an unbelievable price.</p>
// //             <p className="price">₦9,000 /year</p>
// //             <button>Order Now</button>
// //           </PlanCard>

// //           <PlanCard>
// //             <h3>E-Essential SSL</h3>
// //             <p>Quick and cost-effective. Great for light e-commerce websites.</p>
// //             <p className="price">₦15,500 /year</p>
// //             <button>Order Now</button>
// //           </PlanCard>

// //           <PlanCard>
// //             <h3>E-Trusted</h3>
// //             <p>Secures unlimited subdomains. Ideal for growing websites and applications.</p>
// //             <p className="price">₦95,000 /year</p>
// //             <button>Order Now</button>
// //           </PlanCard>
// //         </PlanGrid>

// //         <InfoImage src={sslVisual2} alt="Secure Website Illustration" />
// //       </Section>
// //     </>
// //   );
// // };

// // export default SSLPage;



// import React from 'react';
// import styled from 'styled-components';
// import heroBg from '../Images/sslimg2.jpg';
// import sslVisual1 from '../Images/sslimg3.png';
// import sslVisual2 from '../Images/sslimg.jpg';
// import sslVisual4 from '../Images/sslimg4.jpg';
// import Border from './Border';
// // Hero section with background and overlay
// import useAnimateOnScroll from './useAnimateOnScroll';
// import 'animate.css'



// const Hero = styled.section`
//   background-image: url(${heroBg});
//   background-size: cover;
//   background-position: center;
//   position: relative;
//   padding: 120px 20px;
//   text-align: center;
//   color: white;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.4);
//     z-index: 0;
//   }

//   &::after {
//     content: '';
//     position: absolute;
//     width: 200%;
//     height: 200%;
//     background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05), transparent 70%),
//                 radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.03), transparent 70%);
//     z-index: 0;
//     top: -50%;
//     left: -50%;
//   }

//   > * {
//     position: relative;
//     z-index: 1;
//   }

//   h1 {
//     font-size: 3rem;
//     text-transform: uppercase;
//     text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
//   }

//   p {
//     max-width: 700px;
//     margin: 20px auto 0;
//     font-size: 1.2rem;
//   }
// `;

// const Section = styled.section`
//   padding: 60px 20px;
//   text-align: center;
//   color: ${props => (props.dark ? '#ffffff' : '#1f1f1f')};
//   position: relative;
//   overflow: hidden;

//   &::after {
//     content: '';
//     position: absolute;
//     width: 150%;
//     height: 150%;
//     background: radial-gradient(circle at 30% 30%, rgba(43, 50, 178, 0.05), transparent 70%),
//                 radial-gradient(circle at 70% 70%, rgba(0, 200, 150, 0.05), transparent 70%);
//     top: -25%;
//     left: -25%;
//     z-index: 0;
//   }

//   > * {
//     position: relative;
//     z-index: 1;
//   }

//   h2 {
//     font-size: 2.5rem;
//     margin-bottom: 20px;
//     color: ${props => (props.dark ? '#4dabf7' : '#2B32B2')};
//   }

//   p {
//     font-size: 1.1rem;
//     max-width: 800px;
//     margin: 0 auto;
//   }
// `;


// const Section2 = styled.section`
//   padding: 60px 20px;
//   text-align: center;
//   color: ${props => (props.dark ? '#ffffff' : '#1f1f1f')};
//   position: relative;
//   overflow: hidden;
//   background-image:url(${sslVisual4});

//   &::after {
//     content: '';
//     position: absolute;
//     width: 150%;
//     height: 150%;
//     background: radial-gradient(circle at 30% 30%, rgba(43, 50, 178, 0.05), transparent 70%),
//                 radial-gradient(circle at 70% 70%, rgba(0, 200, 150, 0.05), transparent 70%);
//     top: -25%;
//     left: -25%;
//     z-index: 0;
//   }

//   > * {
//     position: relative;
//     z-index: 1;
//   }

//   h2 {
//     font-size: 2.5rem;
//     margin-bottom: 20px;
//     // color: ${props => (props.dark ? '#4dabf7' : '#2B32B2')};
//       text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
//   }

//   p {
//     font-size: 1.1rem;
//     max-width: 800px;
//     margin: 0 auto;
//   }
// `;

// const InfoImage = styled.img`
//   width: 100%;
//   max-width: 300px;
//   margin: 40px auto;
//   border-radius: 16px;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
//   height:300px;
//   margin-left:20px;
// `;

// const PlanGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 30px;
//   margin-top: 40px;
// `;

// const PlanCard = styled.div`
//   background: #ffffff;
//   color: #1f1f1f;
//   padding: 30px;
//   border-radius: 16px;
//   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   transition: 0.3s;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
//   }

//   h3 {
//     font-size: 1.5rem;
//     color: #2b32b2;
//   }

//   p {
//     margin: 10px 0;
//     font-size: 1rem;
//   }

//   .price {
//     font-size: 1.6rem;
//     font-weight: bold;
//     // color: #00c896;
//     color: #2b32b2;
//     margin: 15px 0;
//   }

//   button {
//     background: #4dabf7;
//     color: white;
//     border: none;
//     padding: 10px 20px;
//     border-radius: 6px;
//     cursor: pointer;
//     transition: background 0.3s;

//     &:hover {
//       background: #2b32b2;
//     }
//   }
// `;

// const SSLPage = () => {

//  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
// const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const a = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const b = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const c = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const d = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const e = useAnimateOnScroll('animate__fadeInDown animate__slower');



//   return (
//     <>
//       <Hero>
//         <h1 ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Protect Sensitive Data</h1>
//         <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>If you’re serious about doing business online, you need SSL. It protects user data, defends against identity theft, and builds trust.</p>
//       </Hero>

//       <Section>
//         <h2 ref={e.ref} className={e.className}>Why SSL is Important</h2>
//         <p>
//         If you’re serious about doing business online, you need SSL. It’s the best way to protect user data and defend against identity theft. Many customers will refuse to do business with a website that doesn’t have an SSL certificate. This can lead to lost revenue, unhappy customers, and a tarnished reputation.
// This is important because the information you send on the Internet is passed from computer to computer to get to the destination server. We can help you protect your site and ensure it stays protected, giving you more time to focus on your business.
// The primary reason why SSL is used is to keep sensitive information sent across the Internet encrypted so that only the intended recipient can understand it.</p>
//         <InfoImage src={sslVisual1} alt="SSL Encryption Visual" />
//         <InfoImage src={sslVisual2} alt="Secure Website Illustration" />
//       </Section>

//       <Section2 dark>
//         <h2>Secure Your Website - Choose Your Plan</h2>
//         <PlanGrid>
//           <PlanCard>
//             <h3>E-Classic SSL</h3>
//             <p> is a fast website security solution, this is the answer for you. This domain validated (DV) certificate offers industry standard encryption at an unbelievable price.</p>
//             <p className="price">₦16,000 /year</p>
//             <button>Order Now</button>
//           </PlanCard>

//           <PlanCard>
//             <h3>E-Essential SSL</h3>
//             <p> is a quick and cost-effective & will secure your customer transactions. The main feature of the certificate is the speed of issuance, it is ideal for very light ecommerce websites.</p>
//             <p className="price">₦31,500 /year</p>
//             <button>Order Now</button>
//           </PlanCard>

//            <PlanCard>
//   <h3>E-Classic Trusted SSL Wildcard (OV)</h3>
//   <p>
//     Secure your primary domain and all its subdomains with one certificate. 
//   </p>
//   <p className="price">₦105,000 /year</p>
//   <button>Order Now</button>
// </PlanCard>


//           <PlanCard>
//             <h3>E-Trusted</h3>
//             <p> secures unlimited number of subdomains which makes management & provisioning easy. It comes with unlimited server licensing with a static site seal</p>
//             <p className="price">₦181,500 /year</p>
//             <button>Order Now</button>
//           </PlanCard>

        


//         </PlanGrid>
//         {/* <InfoImage src={sslVisual2} alt="Secure Website Illustration" /> */}
     
//       </Section2>
//       <Border/>
//     </>
//   );
// };

// export default SSLPage;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React from 'react';
// import styled from 'styled-components';
// import heroBg from '../Images/sslimg2.jpg';
// import sslVisual1 from '../Images/sslimg3.png';
// import sslVisual2 from '../Images/sslimg.jpg';
// import sslVisual4 from '../Images/sslimg4.jpg';
// import Border from './Border';

// const PageContainer = styled.div`
//   font-family: "Inter", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   color: #1a202c;
//   background-color: #f8fafc;
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// `;

// const Hero = styled.section`
//   background-image: linear-gradient(
//       135deg,
//       rgba(15, 23, 42, 0.85) 0%,
//       rgba(30, 27, 75, 0.9) 100%
//     ),
//     url(${heroBg});
//   background-size: cover;
//   background-position: center;
//   position: relative;
//   padding: 50px 10px;
//   text-align: left;
//   color: white;
//   border-bottom: 2px solid #4f46e5;
//   margin-bottom: 10px;

//   .hero-content {
//     max-width: 1000px;
//     margin: 0 auto;
//     padding: 0 10px;
//   }

//   h1 {
//     font-size: clamp(2rem, 3.5vw, 2.8rem);
//     font-weight: 900;
//     text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
//     margin: 0 0 8px 0;
//   }

//   p {
//     max-width: 650px;
//     margin: 0;
//     font-size: 1rem;
//     color: #cbd5e1;
//     line-height: 1.5;
//   }
// `;

// const MainGrid = styled.div`
//   max-width: 1000px;
//   margin: 0 auto 10px auto;
//   padding: 0 10px;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 10px;
//   box-sizing: border-box;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Column = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   box-sizing: border-box;
// `;

// const SectionCard = styled.div`
//   padding: 10px;
//   background: #ffffff;
//   border-radius: 10px;
//   box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
//   border: 1px solid #eae2f8;
//   box-sizing: border-box;
//   text-align: left;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;

//   h2 {
//     font-size: 1.3rem;
//     margin: 0;
//     color: #0f172a;
//   }

//   p {
//     margin: 0;
//     font-size: 0.92rem;
//     line-height: 1.5;
//     color: #475569;
//   }
// `;

// const PlansListContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 8px;
//   margin: 0;
// `;

// const PlanRow = styled.div`
//   background: #f8fafc;
//   padding: 8px 10px;
//   border-radius: 8px;
//   border-left: 3px solid #4f46e5;
//   font-size: 0.9rem;
//   color: #1e293b;
//   font-weight: 500;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 8px;
//   margin: 0;
//   border-top: 1px solid #e2e8f0;
//   border-right: 1px solid #e2e8f0;
//   border-bottom: 1px solid #e2e8f0;

//   @media (max-width: 480px) {
//     flex-direction: column;
//     align-items: flex-start;
//   }

//   .plan-info {
//     display: flex;
//     flex-direction: column;
//     gap: 2px;
//   }

//   .plan-name {
//     font-weight: 700;
//     color: #0f172a;
//   }

//   .plan-desc {
//     font-size: 0.82rem;
//     color: #475569;
//   }

//   .plan-action {
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     flex-shrink: 0;
//   }

//   .price {
//     font-weight: 700;
//     color: #4f46e5;
//     font-size: 0.88rem;
//   }

//   button {
//     background: #4f46e5;
//     color: white;
//     border: none;
//     padding: 5px 10px;
//     border-radius: 6px;
//     cursor: pointer;
//     font-size: 0.82rem;
//     font-weight: 600;
//     transition: background 0.2s;

//     &:hover {
//       background: #4338ca;
//     }
//   }
// `;

// const StyledImage = styled.img`
//   width: 100%;
//   max-height: 180px;
//   object-fit: cover;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
//   border: 1px solid #e2e8f0;
//   display: block;
//   margin: 0;
// `;

// const SSLPage = () => {
//   return (
//     <PageContainer>
//       <Hero>
//         <div className="hero-content" style={{display:"flex", flexDirection:"column",alignItems:"center" }}>
//           <h1>🚀 Protect Sensitive Data</h1>
//           <p>If you’re serious about doing business online, you need SSL. It protects user data, defends against identity theft, and builds trust.</p>
//         </div>
//       </Hero>

//       <MainGrid>
//         {/* Column 1 */}
//         <Column>
//           <SectionCard>
//             <h2>🔒 Why SSL is Important</h2>
//             <p>
//               If you’re serious about doing business online, you need SSL. It’s the best way to protect user data and defend against identity theft. Many customers will refuse to do business with a website that doesn’t have an SSL certificate. This can lead to lost revenue, unhappy customers, and a tarnished reputation.
//             </p>
//             <StyledImage src={sslVisual1} alt="SSL Encryption Visual" />
//           </SectionCard>

//           <SectionCard>
//             <h2>🌐 Data Integrity</h2>
//             <p>
//               The information you send on the Internet is passed from computer to computer to get to the destination server. We can help you protect your site and ensure it stays protected, giving you more time to focus on your business.
//             </p>
//             <StyledImage src={sslVisual2} alt="Secure Website Illustration" />
//           </SectionCard>
//         </Column>

//         {/* Column 2 */}
//         <Column>
//           <SectionCard>
//             <h2>🛡️ Choose Your Plan</h2>
//             <PlansListContainer>
//               <PlanRow>
//                 <div className="plan-info">
//                   <span className="plan-name">E-Classic SSL</span>
//                   <span className="plan-desc">Standard validation (DV) encryption.</span>
//                 </div>
//                 <div className="plan-action">
//                   <span className="price">₦16,000 /yr</span>
//                   <button>Order</button>
//                 </div>
//               </PlanRow>

//               <PlanRow>
//                 <div className="plan-info">
//                   <span className="plan-name">E-Essential SSL</span>
//                   <span className="plan-desc">Fast issuance for light ecommerce.</span>
//                 </div>
//                 <div className="plan-action">
//                   <span className="price">₦31,500 /yr</span>
//                   <button>Order</button>
//                 </div>
//               </PlanRow>

//               <PlanRow>
//                 <div className="plan-info">
//                   <span className="plan-name">E-Classic Wildcard (OV)</span>
//                   <span className="plan-desc">Primary domain & all subdomains.</span>
//                 </div>
//                 <div className="plan-action">
//                   <span className="price">₦105,000 /yr</span>
//                   <button>Order</button>
//                 </div>
//               </PlanRow>

//               <PlanRow>
//                 <div className="plan-info">
//                   <span className="plan-name">E-Trusted</span>
//                   <span className="plan-desc">Unlimited subdomains with site seal.</span>
//                 </div>
//                 <div className="plan-action">
//                   <span className="price">₦181,500 /yr</span>
//                   <button>Order</button>
//                 </div>
//               </PlanRow>
//             </PlansListContainer>
//           </SectionCard>
//         </Column>
//       </MainGrid>

//       {/* <Border /> */}
//     </PageContainer>
//   );
// };

// export default SSLPage;






import React, { useContext } from 'react';
import styled from 'styled-components';
import heroBg from '../Images/sslimg2.jpg';
import sslVisual1 from '../Images/sslimg3.png';
import sslVisual2 from '../Images/sslimg.jpg';
import { FaShieldAlt, FaCheckCircle, FaLock, FaGlobe, FaFileAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {Context} from './Context';

const PageContainer = styled.div`
  font-family: "Inter", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1a202c;
  background-color: #f8fafc;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Hero = styled.section`
  background-image: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.88) 0%,
      rgba(30, 27, 75, 0.92) 100%
    ),
    url(${heroBg});
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 60px 20px;
  text-align: center;
  color: white;
  border-bottom: 2px solid #4f46e5;
  margin-bottom: 40px;

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .badge {
    background: rgba(79, 70, 229, 0.2);
    border: 1px solid #818cf8;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #c7d2fe;
  }

  h1 {
    font-size: clamp(2.2rem, 3.5vw, 3rem);
    font-weight: 900;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    margin: 0;

    span {
      background: linear-gradient(135deg, #818cf8, #c084fc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    max-width: 650px;
    margin: 0;
    font-size: 1.05rem;
    color: #cbd5e1;
    line-height: 1.6;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h2 {
    font-size: clamp(1.8rem, 3vw, 2.4rem);
    font-weight: 900;
    color: #0f172a;
    margin-bottom: 10px;

    span {
      background: linear-gradient(135deg, #4f46e5, #9333ea);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    color: #64748b;
    font-size: 1.05rem;
  }
`;

/* Hosting-style Pricing Cards Grid */
const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
  width: 100%;
`;

const PlanCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #eae2f8;
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.06);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(79, 70, 229, 0.12);
    border-color: #c7d2fe;
  }

  .plan-header {
    margin-bottom: 20px;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 20px;
  }

  .plan-title {
    font-size: 1.25rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      color: #4f46e5;
    }
  }

  .plan-price {
    font-size: 1.8rem;
    font-weight: 900;
    color: #4f46e5;
    margin-top: 10px;

    span {
      font-size: 0.85rem;
      font-weight: 600;
      color: #64748b;
    }
  }

  .features-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 25px;
    font-size: 0.9rem;
    color: #334155;

    .feature-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px dashed #f1f5f9;
      padding-bottom: 8px;

      span:first-child {
        color: #64748b;
        font-weight: 500;
      }

      span:last-child {
        color: #0f172a;
        font-weight: 700;
        text-align: right;
      }
    }
  }

  .order-btn {
    background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
    color: white;
    border: none;
    padding: 12px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 0.95rem;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
    transition: all 0.3s ease;
    width: 100%;

    &:hover {
      background: linear-gradient(135deg, #4338ca 0%, #7e22ce 100%);
      box-shadow: 0 6px 20px rgba(147, 51, 234, 0.4);
    }
  }
`;

/* Informational Content Grid */
const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 30px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: #ffffff;
  padding: 35px;
  border-radius: 20px;
  border: 1px solid #eae2f8;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 1.4rem;
    font-weight: 800;
    color: #0f172a;
    margin: 0;
  }

  p, li {
    font-size: 0.98rem;
    line-height: 1.7;
    color: #475569;
    margin: 0;
  }

  ul {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-height: 320px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
  border: 1px solid #e2e8f0;
`;

const FAQSection = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid #eae2f8;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);

  h2 {
    font-size: 1.8rem;
    font-weight: 900;
    color: #0f172a;
    margin-bottom: 25px;
    text-align: center;
  }

  .faq-item {
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid #f1f5f9;

    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    h4 {
      font-size: 1.15rem;
      font-weight: 800;
      color: #1e293b;
      margin-bottom: 10px;
    }

    p {
      font-size: 0.96rem;
      color: #475569;
      line-height: 1.6;
      margin: 0;
    }
  }
`;

// const SSLPage = () => {
//   return (
//     <PageContainer>
//       <Hero>
//         <div className="hero-content">
//           <div className="badge">Security & Trust</div>
//           <h1>Select Your <span>Perfect Plan!</span></h1>
//           <p>Ideal for blogs, personal sites & small businesses. Protect user data, defend against identity theft, and build instant visitor trust.</p>
//         </div>
//       </Hero>

//       <ContentWrapper>
//         {/* Hosting Plans Section */}
//         <div>
//           <SectionHeader>
//             <h2>Available <span>SSL Certificates</span></h2>
//             <p>Choose the right security tier tailored for your personal brand or growing enterprise.</p>
//           </SectionHeader>

//           <PlansGrid>
//             {/* Plan 1 */}
//             <PlanCard>
//               <div className="plan-header">
//                 <div className="plan-title"><FaShieldAlt /> E-Commercial SSL</div>
//                 <div className="plan-price">₦13,500<span>.00/year</span></div>
//               </div>
//               <div className="features-list">
//                 <div className="feature-item"><span>Brand (CA)</span><span>Certum</span></div>
//                 <div className="feature-item"><span>Validation Level</span><span>Domain Validation</span></div>
//                 <div className="feature-item"><span>Paperwork Required</span><span>No</span></div>
//                 <div className="feature-item"><span>Domains Secured</span><span>Single Domain</span></div>
//                 <div className="feature-item"><span>Delivery</span><span>Within 1 Day</span></div>
//               </div>
//               <button className="order-btn">Order Now</button>
//             </PlanCard>

//             {/* Plan 2 */}
//             <PlanCard>
//               <div className="plan-header">
//                 <div className="plan-title"><FaShieldAlt /> E-Trusted SSL (OV)</div>
//                 <div className="plan-price">₦170,000<span>.00/Year</span></div>
//               </div>
//               <div className="features-list">
//                 <div className="feature-item"><span>Brand (CA)</span><span>Certum</span></div>
//                 <div className="feature-item"><span>Validation Level</span><span>Organizational Validation</span></div>
//                 <div className="feature-item"><span>Paperwork Required</span><span>Yes</span></div>
//                 <div className="feature-item"><span>Domains Secured</span><span>Single Domain</span></div>
//                 <div className="feature-item"><span>Delivery</span><span>7 Days</span></div>
//               </div>
//               <button className="order-btn">Order Now</button>
//             </PlanCard>

//             {/* Plan 3 */}
//             <PlanCard>
//               <div className="plan-header">
//                 <div className="plan-title"><FaShieldAlt /> E-Commercial Wildcard (DV)</div>
//                 <div className="plan-price">₦105,000<span>/Annually</span></div>
//               </div>
//               <div className="features-list">
//                 <div className="feature-item"><span>Brand (CA)</span><span>Certum</span></div>
//                 <div className="feature-item"><span>Validation Level</span><span>Domain Validation</span></div>
//                 <div className="feature-item"><span>Paperwork Required</span><span>No</span></div>
//                 <div className="feature-item"><span>Domains Secured</span><span>Wildcard (1 + sub-domains)</span></div>
//                 <div className="feature-item"><span>Delivery</span><span>24 hours</span></div>
//               </div>
//               <button className="order-btn">Order Now</button>
//             </PlanCard>

//             {/* Plan 4 */}
//             <PlanCard>
//               <div className="plan-header">
//                 <div className="plan-title"><FaShieldAlt /> E-Trusted Wildcard SSL (OV)</div>
//                 <div className="plan-price">₦180,000<span>.00/Year</span></div>
//               </div>
//               <div className="features-list">
//                 <div className="feature-item"><span>Brand (CA)</span><span>Certum</span></div>
//                 <div className="feature-item"><span>Validation Level</span><span>Organizational Validation</span></div>
//                 <div className="feature-item"><span>Paperwork Required</span><span>Yes</span></div>
//                 <div className="feature-item"><span>Domains Secured</span><span>Wildcard (1 + sub-domains)</span></div>
//                 <div className="feature-item"><span>Delivery</span><span>7 Days</span></div>
//               </div>
//               <button className="order-btn">Order Now</button>
//             </PlanCard>

//             {/* Plan 5 */}
//             <PlanCard>
//               <div className="plan-header">
//                 <div className="plan-title"><FaShieldAlt /> E-Comodo Positive DV SSL</div>
//                 <div className="plan-price">₦20,000<span>.00/Year</span></div>
//               </div>
//               <div className="features-list">
//                 <div className="feature-item"><span>Description</span><span>Suitable for personal / social media</span></div>
//                 <div className="feature-item"><span>Brand (CA)</span><span>Comodo</span></div>
//                 <div className="feature-item"><span>Validation Level</span><span>Domain Validation</span></div>
//                 <div className="feature-item"><span>Paperwork Required</span><span>No</span></div>
//                 <div className="feature-item"><span>Domains Secured</span><span>Single Domain</span></div>
//                 <div className="feature-item"><span>Delivery</span><span>Within 1 Day</span></div>
//               </div>
//               <button className="order-btn">Order Now</button>
//             </PlanCard>

//             {/* Plan 6 */}
//             <PlanCard>
//               <div className="plan-header">
//                 <div className="plan-title"><FaShieldAlt /> E-Comodo Positive Wildcard DV</div>
//                 <div className="plan-price">₦130,000<span>.00/Year</span></div>
//               </div>
//               <div className="features-list">
//                 <div className="feature-item"><span>Description</span><span>Suitable for personal / social media</span></div>
//                 <div className="feature-item"><span>Brand (CA)</span><span>Comodo</span></div>
//                 <div className="feature-item"><span>Validation Level</span><span>Domain Validation</span></div>
//                 <div className="feature-item"><span>Paperwork Required</span><span>No</span></div>
//                 <div className="feature-item"><span>Domains Secured</span><span>1 plus first-level subdomains</span></div>
//                 <div className="feature-item"><span>Delivery</span><span>Within 1 Day</span></div>
//               </div>
//               <button className="order-btn">Order Now</button>
//             </PlanCard>
//           </PlansGrid>
//         </div>

//         {/* Visual Content Info Grid */}
//         <InfoGrid>
//           <InfoCard>
//             <h3>🔒 Why SSL is Important</h3>
//             <p>
//               If you’re serious about doing business online, you need SSL. It protects user data, defends against identity theft, and builds trust. The information you send on the Internet is passed from computer to computer to get to the destination server. We can help you protect your site and ensure it stays protected, giving you more time to focus on your business.
//             </p>
//           </InfoCard>
//           <StyledImage src={sslVisual1} alt="SSL Encryption Visual" />
//         </InfoGrid>

//         <InfoGrid>
//           <StyledImage src={sslVisual2} alt="Secure Website Illustration" />
//           <InfoCard>
//             <h3>🌐 Data Integrity & Protection</h3>
//             <p>
//               Many customers will refuse to do business with a website that doesn’t have an SSL certificate. This can lead to lost revenue, unhappy customers, and a tarnished reputation. Secure your website today and guarantee peace of mind for your visitors.
//             </p>
//           </InfoCard>
//         </InfoGrid>

//         {/* FAQ Section */}
//         <FAQSection>
//           <h2>Frequently Asked Questions</h2>

//           <div className="faq-item">
//             <h4>What is an SSL certificate and why you need one?</h4>
//             <p>
//               An SSL certificate secures your website by encrypting data exchanged between your site and its visitors, helping protect sensitive information such as login details and payment data. It’s essential for building trust, improving SEO, and protecting customer data.
//             </p>
//           </div>

//           <div className="faq-item">
//             <h4>Free SSL vs Paid SSL: What's the Difference and Which Should You Choose?</h4>
//             <p>
//               Both Free and Paid SSL certificates encrypt data and enable HTTPS on your website, but they are not the same. The difference is in trust, warranty, and validation.
//             </p>
//             <ul>
//               <li>
//                 <strong>Free SSL</strong> like Let's Encrypt which we provide free on all elexdonhost.com plans - gives you basic Domain Validation [DV]. It encrypts the connection between your website and your visitors. It's perfect for getting the padlock quickly, but it comes with no warranty and limited support, and it must be renewed every 90 days [we auto-renew it for you].
//               </li>
//               <li>
//                 <strong>Paid SSL</strong> goes further. It offers stronger trust indicators, a warranty up to $1.75M if something fails, dedicated support, and higher levels of business verification like Organization Validation [OV] and Extended Validation [EV] that shows your company name. It also lasts 1 year and includes a site seal that builds customer confidence.
//               </li>
//             </ul>
//           </div>

//           <div className="faq-item">
//             <h4>Which Should You Choose?</h4>
//             <p>
//               Choose to Secure your Website with Paid SSL If: You run a blog, portfolio, news site, or are just starting your WordPress website. It's secure, Google-approved, and enough for basic sites.
//             </p>
//             <p style={{ marginTop: '10px' }}>
//               Even if you run a business website, online store on elexdonhost.com, accept payments with Paystack/Flutterwave, collect customer data, or want to build maximum trust. For any e-commerce site, Paid SSL is highly recommended.
//             </p>
//             <p style={{ marginTop: '10px', fontWeight: '600', color: '#4f46e5' }}>
//               At elexdonhost.com, every website needs to be secured. So, choose a Premium Paid SSL to secure your website anytime from your cPanel - SSL/TLS Status for just ₦13,500/year.
//             </p>
//           </div>

//           <div className="faq-item">
//             <h4>What are the types of SSL certificates and which one should I choose?</h4>
//             <p>
//               SSL certificates come in different types based on validation and coverage. Domain Validation (DV) SSL is ideal for personal websites and blogs, Organization Validation (OV) suits business websites that need added credibility, and Extended Validation (EV) is best for eCommerce and high-trust platforms.
//             </p>
//           </div>
//         </FAQSection>
//       </ContentWrapper>
//     </PageContainer>
//   );
// };

// import React from 'react';

// import { FaShieldAlt } from 'react-icons/fa';

const SSLPage = () => {
  const navigate = useNavigate();
  const { sslPackages } = useContext(Context);

  // Array of SSL plan objects containing ID, pricing, and dynamic features


  const handleOrderClick = (plan) => {
    // Save selected plan details into localStorage
    localStorage.setItem('checkout_ssl_plan', JSON.stringify({
      productId: plan.id,
      name: plan.title,
      numericPrice: plan.numericPrice,
      duration: plan.duration
    }));

    // Navigate without state
    navigate(`/sslcheckout`);
  };

  return (
    <PageContainer>
      <Hero>
        <div className="hero-content">
          <div className="badge">Security & Trust</div>
          <h1>Select Your <span>Perfect Plan!</span></h1>
          <p>Ideal for blogs, personal sites & small businesses. Protect user data, defend against identity theft, and build instant visitor trust.</p>
        </div>
      </Hero>

      <ContentWrapper>
        {/* Hosting Plans Section */}
        <div>
          <SectionHeader>
            <h2>Available <span>SSL Certificates</span></h2>
            <p>Choose the right security tier tailored for your personal brand or growing enterprise.</p>
          </SectionHeader>

          <PlansGrid>
            {sslPackages.map((plan) => (
              <PlanCard key={plan.id}>
                <div className="plan-header">
                  <div className="plan-title"><FaShieldAlt /> {plan.title}</div>
                  <div className="plan-price">{plan.priceDisplay}<span>{plan.duration}</span></div>
                </div>
                <div className="features-list">
                  {plan.features.map((feature, index) => (
                    <div className="feature-item" key={index}>
                      <span>{feature.label}</span>
                      <span>{feature.value}</span>
                    </div>
                  ))}
                </div>
                <button 
                  className="order-btn" 
                  onClick={() => handleOrderClick(plan)}
                >
                  Order Now
                </button>
              </PlanCard>
            ))}
          </PlansGrid>
        </div>

        {/* Visual Content Info Grid */}
        <InfoGrid>
          <InfoCard>
            <h3>🔒 Why SSL is Important</h3>
            <p>
              If you’re serious about doing business online, you need SSL. It protects user data, defends against identity theft, and builds trust. The information you send on the Internet is passed from computer to computer to get to the destination server. We can help you protect your site and ensure it stays protected, giving you more time to focus on your business.
            </p>
          </InfoCard>
          <StyledImage src={sslVisual1} alt="SSL Encryption Visual" />
        </InfoGrid>

        <InfoGrid>
          <StyledImage src={sslVisual2} alt="Secure Website Illustration" />
          <InfoCard>
            <h3>🌐 Data Integrity & Protection</h3>
            <p>
              Many customers will refuse to do business with a website that doesn’t have an SSL certificate. This can lead to lost revenue, unhappy customers, and a tarnished reputation. Secure your website today and guarantee peace of mind for your visitors.
            </p>
          </InfoCard>
        </InfoGrid>

        {/* FAQ Section */}
        <FAQSection>
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h4>What is an SSL certificate and why you need one?</h4>
            <p>
              An SSL certificate secures your website by encrypting data exchanged between your site and its visitors, helping protect sensitive information such as login details and payment data. It’s essential for building trust, improving SEO, and protecting customer data.
            </p>
          </div>

          <div className="faq-item">
            <h4>Free SSL vs Paid SSL: What's the Difference and Which Should You Choose?</h4>
            <p>
              Both Free and Paid SSL certificates encrypt data and enable HTTPS on your website, but they are not the same. The difference is in trust, warranty, and validation.
            </p>
            <ul>
              <li>
                <strong>Free SSL</strong> like Let's Encrypt which we provide free on all elexdonhost.com plans - gives you basic Domain Validation [DV]. It encrypts the connection between your website and your visitors. It's perfect for getting the padlock quickly, but it comes with no warranty and limited support, and it must be renewed every 90 days [we auto-renew it for you].
              </li>
              <li>
                <strong>Paid SSL</strong> goes further. It offers stronger trust indicators, a warranty up to $1.75M if something fails, dedicated support, and higher levels of business verification like Organization Validation [OV] and Extended Validation [EV] that shows your company name. It also lasts 1 year and includes a site seal that builds customer confidence.
              </li>
            </ul>
          </div>

          <div className="faq-item">
            <h4>Which Should You Choose?</h4>
            <p>
              Choose to Secure your Website with Paid SSL If: You run a blog, portfolio, news site, or are just starting your WordPress website. It's secure, Google-approved, and enough for basic sites.
            </p>
            <p style={{ marginTop: '10px' }}>
              Even if you run a business website, online store on elexdonhost.com, accept payments with Paystack/Flutterwave, collect customer data, or want to build maximum trust. For any e-commerce site, Paid SSL is highly recommended.
            </p>
            <p style={{ marginTop: '10px', fontWeight: '600', color: '#4f46e5' }}>
              At elexdonhost.com, every website needs to be secured. So, choose a Premium Paid SSL to secure your website anytime from your cPanel - SSL/TLS Status for just ₦13,500/year.
            </p>
          </div>

          <div className="faq-item">
            <h4>What are the types of SSL certificates and which one should I choose?</h4>
            <p>
              SSL certificates come in different types based on validation and coverage. Domain Validation (DV) SSL is ideal for personal websites and blogs, Organization Validation (OV) suits business websites that need added credibility, and Extended Validation (EV) is best for eCommerce and high-trust platforms.
            </p>
          </div>
        </FAQSection>
      </ContentWrapper>
    </PageContainer>
  );
};

export default SSLPage;