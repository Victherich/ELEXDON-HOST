
// import React from 'react';
// import styled from 'styled-components';
// import CPanelShowcase from './CpanelShowCase';
// import SoftaculousShowcase from './SoftaculousShowcase';
// import Features from './Features';
// import Border from './Border';
// import rhimg from '../Images/rhimg.jpg'
// import 'animate.css';
// import useAnimateOnScroll from './useAnimateOnScroll';
// import Features2 from './Features2';

// const PageWrapper = styled.div`
//   position: relative;
//   background: linear-gradient(to right, #eef2f3, #dfe9f3);
//   overflow: hidden;
//   padding: 0;
// `;

// const Blob = styled.div`
//   position: absolute;
//   border-radius: 50%;
//   opacity: 0.3;
//   filter: blur(100px);
//   z-index: 0;
//   animation: float 8s ease-in-out infinite alternate;

//   @keyframes float {
//     from {
//       transform: translateY(0);
//     }
//     to {
//       transform: translateY(-30px);
//     }
//   }
// `;

// const BlobBlue = styled(Blob)`
//   top: -100px;
//   left: -100px;
//   width: 300px;
//   height: 300px;
//   background: radial-gradient(circle, #00c6ff, #0072ff);
// `;

// const BlobPink = styled(Blob)`
//   bottom: -120px;
//   right: -120px;
//   width: 400px;
//   height: 400px;
//   background: radial-gradient(circle, #fcb045, #fd1d1d, #833ab4);
// `;



// const Hero = styled.section`
//   text-align: center;
//   padding: 100px 20px 60px;
//   position: relative;
//   z-index: 1;
//   background-image: url(${rhimg});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   color: white;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.3); /* Semi-transparent black overlay */
//     z-index: 0;
//   }

//   > * {
//     position: relative;
//     z-index: 1;
//   }

//   h1 {
//     font-size: 3rem;
//     margin-bottom: 20px;
//     text-transform: uppercase;
//     text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
//   }

//   p {
//     font-size: 1.2rem;
//     max-width: 700px;
//     margin: auto;
//     color: #f1f1f1;
//     text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
//   }
// `;


// const PlansSection = styled.section`
//   padding: 60px 20px;
//   position: relative;
//   z-index: 1;
//   max-width: 1200px;
//   margin: auto;

//   h2 {
//     text-align: center;
//     font-size: 2.5rem;
//     margin-bottom: 50px;
//     color: #2B32B2;
//   }
// `;

// const PlansGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 30px;
// `;

// const PlanCard = styled.div`
//   background: white;
//   padding: 30px;
//   border-radius: 15px;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
//   transition: transform 0.3s;
//   text-align: left;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   h3 {
//     font-size: 1.5rem;
//     color: #007bff;
//     margin-bottom: 15px;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 0 0 20px;

//     li {
//       margin-bottom: 10px;
//       color: #333;
//       font-size: 0.95rem;
//     }
//   }

//   button {
//     background: #007bff;
//     color: white;
//     border: none;
//     padding: 12px 25px;
//     font-size: 1rem;
//     border-radius: 8px;
//     cursor: pointer;
//     transition: background 0.3s;

//     &:hover {
//       background: #0056b3;
//     }
//   }
// `;

// const ResellerHostingPage = () => {
//     const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
// const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const tldTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const pricingTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const pricingTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const pricingTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');



//   return (
//     <PageWrapper>
//       <BlobBlue />
//       <BlobPink />

//       <Hero>
//         <h1 ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Reseller Hosting</h1>
//         <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
//           More Growth. More Value. More Speed. <br />
//           We provide you with all of the tools and support needed to have your business up and running.
//         </p>
//       </Hero>

//       <PlansSection>
//         <h2>cPanel Reseller Hosting Plans</h2>
//         <PlansGrid>
//           <PlanCard>
//             <h3>Pentium Reseller</h3>
//             <ul>
//               <li>25 GB Storage Space</li>
//               <li>15000 GB Monthly Bandwidth</li>
//               <li>10 Resold Accounts</li>
//               <li>Weekly Backup</li>
//               <li>Free cPanel/WHM</li>
//               <li>SSL Certificate</li>
//               <li>24/7 Support</li>
//             </ul>
//             <button>Add to Cart</button>
//           </PlanCard>

//           <PlanCard>
//             <h3>Personal Reseller</h3>
//             <ul>
//               <li>100 GB Storage Space</li>
//               <li>Unlimited Monthly Bandwidth</li>
//               <li>50 Resold Accounts</li>
//               <li>Weekly Backup</li>
//               <li>Free cPanel/WHM/WHMCS</li>
//               <li>SSL Certificate</li>
//               <li>24/7 Support</li>
//             </ul>
//             <button>Add to Cart</button>
//           </PlanCard>

//           <PlanCard>
//             <h3>Unlimited Reseller</h3>
//             <ul>
//               <li>150 GB Storage Space</li>
//               <li>Unlimited Monthly Bandwidth</li>
//               <li>Unlimited Resold Accounts</li>
//               <li>Weekly Backup</li>
//               <li>Free cPanel/WHM/WHMCS</li>
//               <li>SSL Certificate</li>
//               <li>24/7 Support</li>
//             </ul>
//             <button>Add to Cart</button>
//           </PlanCard>
//         </PlansGrid>
//       </PlansSection>
//       <CPanelShowcase/>
//       <Border/>
//       <SoftaculousShowcase/>
//       <Features2/>
//     </PageWrapper>
//   );
// };

// export default ResellerHostingPage;




// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import CPanelShowcase from './CpanelShowCase';
// import SoftaculousShowcase from './SoftaculousShowcase';
// import Features2 from './Features2';
// import Border from './Border';
// import rhimg from '../Images/rhimg.jpg';
// import 'animate.css';
// import useAnimateOnScroll from './useAnimateOnScroll';
// import { useNavigate } from 'react-router-dom';

// const PageWrapper = styled.div`
//   position: relative;
//   background: linear-gradient(to right, #eef2f3, #dfe9f3);
//   overflow: hidden;
//   padding: 0;
// `;

// const Blob = styled.div`
//   position: absolute;
//   border-radius: 50%;
//   opacity: 0.3;
//   filter: blur(100px);
//   z-index: 0;
//   animation: float 8s ease-in-out infinite alternate;

//   @keyframes float {
//     from {
//       transform: translateY(0);
//     }
//     to {
//       transform: translateY(-30px);
//     }
//   }
// `;

// const BlobBlue = styled(Blob)`
//   top: -100px;
//   left: -100px;
//   width: 300px;
//   height: 300px;
//   background: radial-gradient(circle, #00c6ff, #0072ff);
// `;

// const BlobPink = styled(Blob)`
//   bottom: -120px;
//   right: -120px;
//   width: 400px;
//   height: 400px;
//   background: radial-gradient(circle, #fcb045, #fd1d1d, #833ab4);
// `;

// const Hero = styled.section`
//   text-align: center;
//   padding: 100px 20px 60px;
//   position: relative;
//   z-index: 1;
//   background-image: url(${rhimg});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   color: white;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.3);
//     z-index: 0;
//   }

//   > * {
//     position: relative;
//     z-index: 1;
//   }

//   h1 {
//     font-size: 3rem;
//     margin-bottom: 20px;
//     text-transform: uppercase;
//     text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
//   }

//   p {
//     font-size: 1.2rem;
//     max-width: 700px;
//     margin: auto;
//     color: #f1f1f1;
//     text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
//   }
// `;

// const PlansSection = styled.section`
//   padding: 60px 20px;
//   position: relative;
//   z-index: 1;
//   max-width: 1200px;
//   margin: auto;

//   h2 {
//     text-align: center;
//     font-size: 2.5rem;
//     margin-bottom: 50px;
//     color: #2B32B2;
//   }
// `;

// const PlansGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 30px;
// `;

// const PlanCard = styled.div`
//   background: white;
//   padding: 30px;
//   border-radius: 15px;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
//   transition: transform 0.3s;
//   text-align: left;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   h3 {
//     font-size: 1.5rem;
//     color: #007bff;
//     margin-bottom: 15px;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 0 0 20px;

//     li {
//       margin-bottom: 10px;
//       color: #333;
//       font-size: 0.95rem;
//     }
//   }

//   button {
//     background: #007bff;
//     color: white;
//     border: none;
//     padding: 12px 25px;
//     font-size: 1rem;
//     border-radius: 8px;
//     cursor: pointer;
//     transition: background 0.3s;

//     &:hover {
//       background: #0056b3;
//     }
//   }
// `;

// const ResellerHostingPage = () => {
//   const [plans, setPlans] = useState([]);
//   const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch('https://www.elexdonhost.com/api_elexdonhost/get_reseller_hosting_products.php')
//       .then(res => res.json())
//       .then(data => {
//         if (data && data.products) {
//           setPlans(data.products.product);
//           console.log(data.products.product)
//         }
//       })
//       .catch(error => {
//         console.error('Failed to fetch reseller plans:', error);
//       });
//   }, []);

//   return (
//     <PageWrapper>
//       <BlobBlue />
//       <BlobPink />

//       <Hero>
//         <h1 ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Reseller Hosting</h1>
//         <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
//           More Growth. More Value. More Speed. <br />
//           We provide you with all of the tools and support needed to have your business up and running.
//         </p>
//       </Hero>

//       <PlansSection>
//         <h2>cPanel Reseller Hosting Plans</h2>
   


// <PlansGrid>
//   {plans.length > 0 ? (
//     plans.map((plan) => {
//       const priceInfo = plan.pricing?.NGN || {};
//       const monthlyPrice = parseFloat(priceInfo.monthly) > 0 ? `₦${priceInfo.monthly}/mo` : null;
//       const annuallyPrice = parseFloat(priceInfo.annually) > 0 ? `₦${priceInfo.annually}/yr` : null;

//       return (
//         <PlanCard key={plan.pid}>
//           <h3>{plan.name}</h3>

          
//           {monthlyPrice && <p><strong>Monthly:</strong> {monthlyPrice}</p>}
//           {annuallyPrice && <p><strong>Annually:</strong> {annuallyPrice}</p>}

//           <ul>
//             {plan.description
//               .split(/\r\n|\n|\r/)
//               .filter((line) => line.trim() !== "")
//               .map((line, index) => (
//                 <li key={index}>{line}</li>
//               ))}
//           </ul>


//           <button
//      onClick={() => {
//     localStorage.setItem("selectedProduct", JSON.stringify(plan));
//     navigate(`/hostingcheckout`);
  
//   }}
//           >
//             Order Now
//           </button>
//         </PlanCard>
//       );
//     })
//   ) : (
//     <p style={{ textAlign: 'center', width: '100%' }}>Loading plans...</p>
//   )}
// </PlansGrid>



//       </PlansSection>

//       <CPanelShowcase />
//       <Border />
//       <SoftaculousShowcase />
//       <Features2 />
//     </PageWrapper>
//   );
// };

// export default ResellerHostingPage;







// import React, { useContext, useEffect, useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import CPanelShowcase from './HostFeaturesShowcase';
// import SoftaculousShowcase from './SoftaculousShowcase';
// import Features2 from './Features2';
// import Border from './Border';
// import rhimg from '../Images/rhimg.jpg';
// import 'animate.css';
// import useAnimateOnScroll from './useAnimateOnScroll';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import { Context } from './Context';

// // === Styled Components ===
// const PageWrapper = styled.div`
//   position: relative;
//   background: linear-gradient(to right, #eef2f3, #dfe9f3);
//   overflow: hidden;
//   padding: 0;
// `;

// const Blob = styled.div`
//   position: absolute;
//   border-radius: 50%;
//   opacity: 0.3;
//   filter: blur(100px);
//   z-index: 0;
//   animation: float 8s ease-in-out infinite alternate;

//   @keyframes float {
//     from {
//       transform: translateY(0);
//     }
//     to {
//       transform: translateY(-30px);
//     }
//   }
// `;

// const BlobBlue = styled(Blob)`
//   top: -100px;
//   left: -100px;
//   width: 300px;
//   height: 300px;
//   background: radial-gradient(circle, #00c6ff, #0072ff);
// `;

// const BlobPink = styled(Blob)`
//   bottom: -120px;
//   right: -120px;
//   width: 400px;
//   height: 400px;
//   background: radial-gradient(circle, #fcb045, #fd1d1d, #833ab4);
// `;

// const Hero = styled.section`
//   text-align: center;
//   padding: 100px 20px 60px;
//   position: relative;
//   z-index: 1;
//   background-image: url(${rhimg});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   color: white;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.3);
//     z-index: 0;
//   }

//   > * {
//     position: relative;
//     z-index: 1;
//   }

//   h1 {
//     font-size: 3rem;
//     margin-bottom: 20px;
//     text-transform: uppercase;
//     text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
//   }

//   p {
//     font-size: 1.2rem;
//     max-width: 700px;
//     margin: auto;
//     color: #f1f1f1;
//     text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
//   }
// `;

// const PlansSection = styled.section`
//   padding: 60px 20px;
//   position: relative;
//   z-index: 1;
//   max-width: 1200px;
//   margin: auto;

//   h2 {
//     text-align: center;
//     font-size: 2.5rem;
//     margin-bottom: 50px;
//     color: #2B32B2;
//   }
// `;

// const PlansGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 30px;
// `;

// const PlanCard = styled.div`
//   background: white;
//   padding: 30px;
//   border-radius: 15px;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
//   transition: transform 0.3s;
//   text-align: left;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   h3 {
//     font-size: 1.5rem;
//     color: #007bff;
//     margin-bottom: 15px;
//   }

//   p {
//     font-weight: bold;
//     margin: 5px 0 15px;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 0 0 20px;

//     li {
//       margin-bottom: 10px;
//       color: #333;
//       font-size: 0.95rem;
//     }
//   }

//   button {
//     background: #007bff;
//     color: white;
//     border: none;
//     padding: 12px 25px;
//     font-size: 1rem;
//     border-radius: 8px;
//     cursor: pointer;
//     transition: background 0.3s;

//     &:hover {
//       background: #0056b3;
//     }
//   }
// `;

// const pulse = keyframes`
//   0% {
//     background-color: #f0f0f0;
//   }
//   50% {
//     background-color: #e0e0e0;
//   }
//   100% {
//     background-color: #f0f0f0;
//   }
// `;

// const SkeletonCard = styled.div`
//   background: #fff;
//   border-radius: 15px;
//   padding: 30px 20px;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
//   min-height: 250px;
//   animation: ${pulse} 1.5s infinite ease-in-out;
// `;

// const ResellerHostingPage = () => {

//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState('');
//   const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const navigate = useNavigate();
//   const {api_key,api_domain,plans,loading, error}=useContext(Context);


//   return (
//     <PageWrapper>
//       <BlobBlue />
//       <BlobPink />

//       <Hero>
//         <h1 ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Reseller Hosting</h1>
//         <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
//           More Growth. More Value. More Speed. <br />
//           We provide you with all of the tools and support needed to have your business up and running.
//         </p>
//       </Hero>

//       <PlansSection>
//         <h2>cPanel Reseller Hosting Plans</h2>

//         <PlansGrid>
//           {loading && Array(3).fill().map((_, i) => <SkeletonCard key={i} />)}

//           {!loading && error && (
//             <p style={{ textAlign: 'center', width: '100%', gridColumn: "1 / -1", color: "#888" }}>
//               🚧 {error}
//             </p>
//           )}

//           {!loading && !error && plans.map((plan) => {
//             const priceInfo = plan.pricing?.NGN || {};
//             const monthlyPrice = parseFloat(priceInfo.monthly) > 0 ? `₦${parseInt(priceInfo.monthly).toLocaleString()}/mo` : null;
//             const annuallyPrice = parseFloat(priceInfo.annually) > 0 ? `₦${parseInt(priceInfo.annually).toLocaleString()}/yr` : null;

//             return (
//               <PlanCard key={plan.pid}>
//                 <h3>{plan.name}</h3>
                
//                 {monthlyPrice && <p><strong>Monthly:</strong> {monthlyPrice}</p>}
//                 {annuallyPrice && <p><strong>Annually:</strong> {annuallyPrice}</p>}

//                 <ul>
//                   {plan.description
//                     .split(/\r\n|\n|\r/)
//                     .filter((line) => line.trim() !== "")
//                     .map((line, index) => (
//                       <li key={index}>{line}</li>
//                     ))}
//                 </ul>

//                 <button
//                   onClick={() => {
//                     localStorage.setItem("selectedProduct", JSON.stringify(plan));
//                     navigate(`/hostingcheckout`);
//                   }}
//                 >
//                   Order Now
//                 </button>
//               </PlanCard>
//             );
//           })}
//         </PlansGrid>
//       </PlansSection>

//       <CPanelShowcase />

//     </PageWrapper>
//   );
// };

// export default ResellerHostingPage;







import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import CPanelShowcase from './HostFeaturesShowcase';
import SoftaculousShowcase from './SoftaculousShowcase';
import Features2 from './Features2';
import Border from './Border';
import rhimg from '../Images/rhimg.jpg';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';
import { FaServer, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

// === Styled Components ===
const PageWrapper = styled.div`
  font-family: "Inter", sans-serif;
  background: #fcfbfe;
  color: #0f172a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-bottom: 100px;
  overflow-x: hidden;
`;

const Hero = styled.section`
  background-image: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.85) 0%,
      rgba(30, 27, 75, 0.8) 100%
    ),
    url(${rhimg});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #eae2f8;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const BadgeHeader = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-left: 3px solid #c084fc;
  background: linear-gradient(135deg, #c084fc, #e879f9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;

  svg {
    -webkit-text-fill-color: initial;
    color: #c084fc;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  margin: 0;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #ffffff;
`;

const HeroSubtitle = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: #cbd5e1;
  max-width: 700px;
  font-weight: 500;
`;

const PlansSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  text-align: center;

  h2 {
    font-size: 2.2rem;
    margin-bottom: 40px;
    color: #102a43;
    font-weight: 900;

    span {
      background: linear-gradient(135deg, #4f46e5, #9333ea);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

const PlanCard = styled.div`
  background: #ffffff;
  padding: 32px 24px;
  border-radius: 16px;
  border: 1px solid #eae2f8;
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.06);
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(79, 70, 229, 0.12);
    border-color: #4f46e5;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #102a43;
    font-weight: 800;
  }

  .price-box {
    margin: 12px 0 20px 0;
    padding-bottom: 16px;
    border-bottom: 1px solid #eae2f8;
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
      font-size: 1.1rem;
      color: #4f46e5;
      font-weight: 800;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      font-size: 0.95rem;
      color: #61758a;
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;

      svg {
        color: #4f46e5;
        font-size: 1rem;
        flex-shrink: 0;
      }
    }
  }

  button {
    background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
    color: white;
    border: none;
    padding: 14px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-shadow: 0 6px 20px rgba(79, 70, 229, 0.3);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
      background: linear-gradient(135deg, #4338ca 0%, #7e22ce 100%);
    }
  }
`;

const pulse = keyframes`
  0% { background-color: #f4f2fc; }
  50% { background-color: #e5e0f7; }
  100% { background-color: #f4f2fc; }
`;

const SkeletonCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 32px 24px;
  border: 1px solid #eae2f8;
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.04);
  min-height: 350px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const ResellerHostingPage = () => {
  const navigate = useNavigate();
  const { api_key, api_domain,
    //  plans, 
     loading, error } = useContext(Context);


   const plans = [
  {
    pid: "1",
    name: "Starter Cloud",
    description: "10 GB NVMe SSD Storage\n1 Website Hosting\nUnmetered Bandwidth\nFree SSL Certificate\nDaily Backups",
    pricing: {
      NGN: {
        prefix: "₦",
        monthly: "1,500.00",
        annually: "15,000.00"
      }
    }
  },
  {
    pid: "2",
    name: "Business Cloud",
    description: "50 GB NVMe SSD Storage\n5 Websites Hosting\nUnmetered Bandwidth\nFree SSL Certificate\nFree Domain Included\nPriority Support",
    pricing: {
      NGN: {
        prefix: "₦",
        monthly: "3,500.00",
        annually: "35,000.00"
      }
    }
  },
  {
    pid: "3",
    name: "Enterprise Cloud",
    description: "150 GB NVMe SSD Storage\nUnlimited Websites\nUnmetered Bandwidth\nFree SSL Certificate\nDedicated IP Address\nAdvanced Security Suite",
    pricing: {
      NGN: {
        prefix: "₦",
        monthly: "7,500.00",
        annually: "75,000.00"
      }
    }
  }
];


  return (
    <PageWrapper>
      <Hero>
        <HeroContent>
          <BadgeHeader>
            <FaServer /> Business Growth Suite
          </BadgeHeader>
          <HeroTitle>Reseller Hosting</HeroTitle>
          <HeroSubtitle>
            More Growth. More Value. More Speed. <br />
            We provide you with all of the tools and support needed to have your hosting business up and running seamlessly.
          </HeroSubtitle>
        </HeroContent>
      </Hero>

      <PlansSection>
        <h2>cPanel Reseller <span>Hosting Plans</span></h2>

        <PlansGrid>
          {loading && Array(3).fill().map((_, i) => <SkeletonCard key={i} />)}

          {/* {!loading && error && (
            <p style={{ textAlign: 'center', width: '100%', gridColumn: "1 / -1", color: "#ef4444", fontWeight: 600 }}>
              🚧 {error}
            </p>
          )} */}

          {plans.map((plan) => {
            const priceInfo = plan.pricing?.NGN || {};
            const monthlyPrice = parseFloat(priceInfo.monthly) > 0 ? `₦${parseInt(priceInfo.monthly).toLocaleString()} / month` : null;
            const annuallyPrice = parseFloat(priceInfo.annually) > 0 ? `₦${parseInt(priceInfo.annually).toLocaleString()} / year` : null;

            return (
              <PlanCard key={plan.pid}>
                <div>
                  <h3>{plan.name}</h3>
                  <div className="price-box">
                    {monthlyPrice && <span>{monthlyPrice}</span>}
                    {annuallyPrice && <span style={{ fontSize: '0.95rem', color: '#61758a' }}>{annuallyPrice}</span>}
                  </div>

                  <ul>
                    {plan.description
                      .split(/\r\n|\n|\r/)
                      .filter((line) => line.trim() !== "")
                      .map((line, index) => (
                        <li key={index}><FaCheckCircle /> {line}</li>
                      ))}
                  </ul>
                </div>

                <button
                  // onClick={() => {
                  //   localStorage.setItem("selectedProduct", JSON.stringify(plan));
                  //   navigate(`/hostingcheckout`);
                  // }}
                >
                  Order Now <FaArrowRight />
                </button>
              </PlanCard>
            );
          })}
        </PlansGrid>
      </PlansSection>

      <CPanelShowcase />
    </PageWrapper>
  );
};

export default ResellerHostingPage;