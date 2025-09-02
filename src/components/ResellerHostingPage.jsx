
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







import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import CPanelShowcase from './CpanelShowCase';
import SoftaculousShowcase from './SoftaculousShowcase';
import Features2 from './Features2';
import Border from './Border';
import rhimg from '../Images/rhimg.jpg';
import 'animate.css';
import useAnimateOnScroll from './useAnimateOnScroll';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// === Styled Components ===
const PageWrapper = styled.div`
  position: relative;
  background: linear-gradient(to right, #eef2f3, #dfe9f3);
  overflow: hidden;
  padding: 0;
`;

const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  filter: blur(100px);
  z-index: 0;
  animation: float 8s ease-in-out infinite alternate;

  @keyframes float {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-30px);
    }
  }
`;

const BlobBlue = styled(Blob)`
  top: -100px;
  left: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #00c6ff, #0072ff);
`;

const BlobPink = styled(Blob)`
  bottom: -120px;
  right: -120px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #fcb045, #fd1d1d, #833ab4);
`;

const Hero = styled.section`
  text-align: center;
  padding: 100px 20px 60px;
  position: relative;
  z-index: 1;
  background-image: url(${rhimg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    text-transform: uppercase;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: auto;
    color: #f1f1f1;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
  }
`;

const PlansSection = styled.section`
  padding: 60px 20px;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: auto;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 50px;
    color: #2B32B2;
  }
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const PlanCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  text-align: left;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    color: #007bff;
    margin-bottom: 15px;
  }

  p {
    font-weight: bold;
    margin: 5px 0 15px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;

    li {
      margin-bottom: 10px;
      color: #333;
      font-size: 0.95rem;
    }
  }

  button {
    background: #007bff;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background: #0056b3;
    }
  }
`;

const pulse = keyframes`
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
`;

const SkeletonCard = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 30px 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  min-height: 250px;
  animation: ${pulse} 1.5s infinite ease-in-out;
`;

const ResellerHostingPage = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError('');

    fetch('https://www.elexdonhost.com/api_elexdonhost/get_reseller_hosting_products.php')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (data && data.products && data.products.product && data.products.product.length > 0) {
          setPlans(data.products.product);
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Plans loaded!',
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          setError('No reseller hosting products were found.');
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'warning',
            title: 'No plans available',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch(error => {
        console.error('Failed to fetch reseller plans:', error);
        setError('Failed to fetch reseller hosting plans. Please try again later.');
        Swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'error',
          title: 'Error loading plans',
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageWrapper>
      <BlobBlue />
      <BlobPink />

      <Hero>
        <h1 ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Reseller Hosting</h1>
        <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
          More Growth. More Value. More Speed. <br />
          We provide you with all of the tools and support needed to have your business up and running.
        </p>
      </Hero>

      <PlansSection>
        <h2>cPanel Reseller Hosting Plans</h2>

        <PlansGrid>
          {loading && Array(3).fill().map((_, i) => <SkeletonCard key={i} />)}

          {!loading && error && (
            <p style={{ textAlign: 'center', width: '100%', gridColumn: "1 / -1", color: "#888" }}>
              🚧 {error}
            </p>
          )}

          {!loading && !error && plans.map((plan) => {
            const priceInfo = plan.pricing?.NGN || {};
            const monthlyPrice = parseFloat(priceInfo.monthly) > 0 ? `₦${parseInt(priceInfo.monthly).toLocaleString()}/mo` : null;
            const annuallyPrice = parseFloat(priceInfo.annually) > 0 ? `₦${parseInt(priceInfo.annually).toLocaleString()}/yr` : null;

            return (
              <PlanCard key={plan.pid}>
                <h3>{plan.name}</h3>
                
                {monthlyPrice && <p><strong>Monthly:</strong> {monthlyPrice}</p>}
                {annuallyPrice && <p><strong>Annually:</strong> {annuallyPrice}</p>}

                <ul>
                  {plan.description
                    .split(/\r\n|\n|\r/)
                    .filter((line) => line.trim() !== "")
                    .map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                </ul>

                <button
                  onClick={() => {
                    localStorage.setItem("selectedProduct", JSON.stringify(plan));
                    navigate(`/hostingcheckout`);
                  }}
                >
                  Order Now
                </button>
              </PlanCard>
            );
          })}
        </PlansGrid>
      </PlansSection>

      <CPanelShowcase />
      <Border />
      <SoftaculousShowcase />
      <Features2 />
    </PageWrapper>
  );
};

export default ResellerHostingPage;