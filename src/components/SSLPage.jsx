
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




import React from 'react';
import styled from 'styled-components';
import heroBg from '../Images/sslimg2.jpg';
import sslVisual1 from '../Images/sslimg3.png';
import sslVisual2 from '../Images/sslimg.jpg';
import sslVisual4 from '../Images/sslimg4.jpg';
import Border from './Border';

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
      rgba(15, 23, 42, 0.85) 0%,
      rgba(30, 27, 75, 0.9) 100%
    ),
    url(${heroBg});
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 50px 10px;
  text-align: left;
  color: white;
  border-bottom: 2px solid #4f46e5;
  margin-bottom: 10px;

  .hero-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 10px;
  }

  h1 {
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    font-weight: 900;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    margin: 0 0 8px 0;
  }

  p {
    max-width: 650px;
    margin: 0;
    font-size: 1rem;
    color: #cbd5e1;
    line-height: 1.5;
  }
`;

const MainGrid = styled.div`
  max-width: 1000px;
  margin: 0 auto 10px auto;
  padding: 0 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
`;

const SectionCard = styled.div`
  padding: 10px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
  border: 1px solid #eae2f8;
  box-sizing: border-box;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font-size: 1.3rem;
    margin: 0;
    color: #0f172a;
  }

  p {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.5;
    color: #475569;
  }
`;

const PlansListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  margin: 0;
`;

const PlanRow = styled.div`
  background: #f8fafc;
  padding: 8px 10px;
  border-radius: 8px;
  border-left: 3px solid #4f46e5;
  font-size: 0.9rem;
  color: #1e293b;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin: 0;
  border-top: 1px solid #e2e8f0;
  border-right: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .plan-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .plan-name {
    font-weight: 700;
    color: #0f172a;
  }

  .plan-desc {
    font-size: 0.82rem;
    color: #475569;
  }

  .plan-action {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .price {
    font-weight: 700;
    color: #4f46e5;
    font-size: 0.88rem;
  }

  button {
    background: #4f46e5;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.82rem;
    font-weight: 600;
    transition: background 0.2s;

    &:hover {
      background: #4338ca;
    }
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.08);
  border: 1px solid #e2e8f0;
  display: block;
  margin: 0;
`;

const SSLPage = () => {
  return (
    <PageContainer>
      <Hero>
        <div className="hero-content" style={{display:"flex", flexDirection:"column",alignItems:"center" }}>
          <h1>🚀 Protect Sensitive Data</h1>
          <p>If you’re serious about doing business online, you need SSL. It protects user data, defends against identity theft, and builds trust.</p>
        </div>
      </Hero>

      <MainGrid>
        {/* Column 1 */}
        <Column>
          <SectionCard>
            <h2>🔒 Why SSL is Important</h2>
            <p>
              If you’re serious about doing business online, you need SSL. It’s the best way to protect user data and defend against identity theft. Many customers will refuse to do business with a website that doesn’t have an SSL certificate. This can lead to lost revenue, unhappy customers, and a tarnished reputation.
            </p>
            <StyledImage src={sslVisual1} alt="SSL Encryption Visual" />
          </SectionCard>

          <SectionCard>
            <h2>🌐 Data Integrity</h2>
            <p>
              The information you send on the Internet is passed from computer to computer to get to the destination server. We can help you protect your site and ensure it stays protected, giving you more time to focus on your business.
            </p>
            <StyledImage src={sslVisual2} alt="Secure Website Illustration" />
          </SectionCard>
        </Column>

        {/* Column 2 */}
        <Column>
          <SectionCard>
            <h2>🛡️ Choose Your Plan</h2>
            <PlansListContainer>
              <PlanRow>
                <div className="plan-info">
                  <span className="plan-name">E-Classic SSL</span>
                  <span className="plan-desc">Standard validation (DV) encryption.</span>
                </div>
                <div className="plan-action">
                  <span className="price">₦16,000 /yr</span>
                  <button>Order</button>
                </div>
              </PlanRow>

              <PlanRow>
                <div className="plan-info">
                  <span className="plan-name">E-Essential SSL</span>
                  <span className="plan-desc">Fast issuance for light ecommerce.</span>
                </div>
                <div className="plan-action">
                  <span className="price">₦31,500 /yr</span>
                  <button>Order</button>
                </div>
              </PlanRow>

              <PlanRow>
                <div className="plan-info">
                  <span className="plan-name">E-Classic Wildcard (OV)</span>
                  <span className="plan-desc">Primary domain & all subdomains.</span>
                </div>
                <div className="plan-action">
                  <span className="price">₦105,000 /yr</span>
                  <button>Order</button>
                </div>
              </PlanRow>

              <PlanRow>
                <div className="plan-info">
                  <span className="plan-name">E-Trusted</span>
                  <span className="plan-desc">Unlimited subdomains with site seal.</span>
                </div>
                <div className="plan-action">
                  <span className="price">₦181,500 /yr</span>
                  <button>Order</button>
                </div>
              </PlanRow>
            </PlansListContainer>
          </SectionCard>
        </Column>
      </MainGrid>

      {/* <Border /> */}
    </PageContainer>
  );
};

export default SSLPage;