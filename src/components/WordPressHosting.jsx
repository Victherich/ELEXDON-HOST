




// import React, { useContext } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaCheckCircle, FaRocket, FaShieldAlt, FaServer, FaArrowRight, FaHeadset } from 'react-icons/fa';
// import hostingHeroImg from '../Images/wpbg.png';
// import { useNavigate } from 'react-router-dom';
// import { Context } from './Context';

// // === Styled Components ===
// const PageWrapper = styled.div`
//   font-family: "Inter", sans-serif;
//   background: #fcfbfe;
//   color: #0f172a;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   gap: 80px;
//   padding-bottom: 100px;
// `;

// const Hero = styled.section`
//   background-image: linear-gradient(
//       135deg,
//       rgba(0, 0, 0, 0.7) 0%,
//       rgba(0, 0, 0, 0.7) 100%
//     ),
//     url(${hostingHeroImg});
//   background-size: cover;
//   background-position: center;
//   color: white;
//   padding: 100px 20px;
//   text-align: center;
//   position: relative;
//   border-bottom: 1px solid #eae2f8;
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 2;
//   max-width: 800px;
//   margin: auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 16px;
// `;

// const BadgeHeader = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   padding: 6px 14px;
//   background: rgba(255, 255, 255, 0.15);
//   backdrop-filter: blur(10px);
//   border-left: 3px solid #c084fc;
//   background: linear-gradient(135deg, #c084fc, #e879f9);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-size: 12px;
//   font-weight: 800;
//   text-transform: uppercase;
//   letter-spacing: 1px;

//   svg {
//     -webkit-text-fill-color: initial;
//     color: #c084fc;
//   }
// `;

// const HeroTitle = styled.h1`
//   font-size: clamp(2.2rem, 4vw, 3.2rem);
//   margin: 0;
//   font-weight: 900;
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
//   color: #ffffff;
// `;

// const HeroSubtitle = styled.p`
//   font-size: 1rem;
//   line-height: 1.6;
//   margin: 0;
//   color: #cbd5e1;
//   max-width: 700px;
// `;

// const Section = styled.section`
//   max-width: 1200px;
//   margin: 0 auto;
//   width: 100%;
//   padding: 0 20px;
// `;

// const SectionTitle = styled.h2`
//   font-size: 2.2rem;
//   color: #102a43;
//   margin-bottom: 30px;
//   font-weight: 900;
//   text-align: center;

//   span {
//     background: linear-gradient(135deg, #4f46e5, #9333ea);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
// `;

// const FeaturesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 20px;
// `;

// const FeatureCard = styled.div`
//   background: rgba(255, 255, 255, 0.6);
//   backdrop-filter: blur(10px);
//   padding: 24px;
//   border-radius: 12px;
//   border-left: 4px solid #4f46e5;
//   border-top: 1px solid #eae2f8;
//   border-right: 1px solid #eae2f8;
//   border-bottom: 1px solid #eae2f8;
//   font-size: 1rem;
//   font-weight: 700;
//   color: #102a43;
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   box-shadow: 0 10px 25px rgba(79, 70, 229, 0.04);
//   text-align: left;

//   svg {
//     color: #4f46e5;
//     font-size: 1.2rem;
//     flex-shrink: 0;
//   }
// `;

// const DetailedFeatureCard = styled.div`
//   background: #ffffff;
//   padding: 24px;
//   border-radius: 14px;
//   border: 1px solid #eae2f8;
//   box-shadow: 0 6px 20px rgba(79, 70, 229, 0.03);
//   font-size: 0.8rem;
//   // font-weight: 600;
//   color: #61758a;
//   // line-height: 1.6;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;

//   .title-row {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     font-size: 1.05rem;
//     font-weight: 800;
//     color: #102a43;

//     svg {
//       color: #4f46e5;
//     }
//   }
// `;

// const PlansGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 24px;
//   margin-top: 20px;
// `;

// const PlanCard = styled.div`
//   background: #ffffff;
//   padding: 32px 24px;
//   border-radius: 16px;
//   border: 1px solid #eae2f8;
//   box-shadow: 0 10px 30px rgba(79, 70, 229, 0.06);
//   text-align: left;
//   transition: all 0.3s ease;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 15px 35px rgba(79, 70, 229, 0.12);
//     border-color: #4f46e5;
//   }

//   h3 {
//     font-size: 1.5rem;
//     margin-bottom: 10px;
//     color: #102a43;
//     font-weight: 800;
//   }
// `;

// const Price = styled.div`
//   margin: 12px 0 20px 0;
//   padding-bottom: 16px;
//   border-bottom: 1px solid #eae2f8;
//   display: flex;
//   flex-direction: column;
//   gap: 4px;

//   span.main-price {
//     font-size: 1.4rem;
//     color: #4f46e5;
//     font-weight: 900;
//   }

//   span.sub-price {
//     font-size: 0.95rem;
//     color: #61758a;
//     font-weight: 700;
//   }
// `;

// const FeaturesList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0 0 24px 0;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;

//   li {
//     font-size: 0.95rem;
//     color: #61758a;
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     font-weight: 500;

//     svg {
//       color: #4f46e5;
//       font-size: 1rem;
//       flex-shrink: 0;
//     }
//   }
// `;

// const CTAButton = styled.button`
//   background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
//   color: white;
//   border: none;
//   padding: 14px 20px;
//   border-radius: 10px;
//   cursor: pointer;
//   font-weight: 700;
//   font-size: 1rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;
//   box-shadow: 0 6px 20px rgba(79, 70, 229, 0.3);
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
//     background: linear-gradient(135deg, #4338ca 0%, #7e22ce 100%);
//   }
// `;

// // Skeleton Card for loading state
// const pulse = keyframes`
//   0% { background-color: #f4f2fc; }
//   50% { background-color: #e5e0f7; }
//   100% { background-color: #f4f2fc; }
// `;

// const SkeletonCard = styled.div`
//   background: #ffffff;
//   border-radius: 16px;
//   padding: 32px 24px;
//   border: 1px solid #eae2f8;
//   box-shadow: 0 10px 30px rgba(79, 70, 229, 0.04);
//   min-height: 350px;
//   animation: ${pulse} 1.5s infinite ease-in-out;
// `;

// const WordPressHosting = () => {
//   const { api_key, api_domain, 
//     // wordpressProducts, 
//     loading, error } = useContext(Context);
//   const navigate = useNavigate();


//      const wordpressProducts= [
//   {
//     pid: "1",
//     name: "Starter Cloud",
//     description: "10 GB NVMe SSD Storage\n1 Website Hosting\nUnmetered Bandwidth\nFree SSL Certificate\nDaily Backups",
//     pricing: {
//       NGN: {
//         prefix: "₦",
//         monthly: "1,500.00",
//         annually: "15,000.00"
//       }
//     }
//   },
//   {
//     pid: "2",
//     name: "Business Cloud",
//     description: "50 GB NVMe SSD Storage\n5 Websites Hosting\nUnmetered Bandwidth\nFree SSL Certificate\nFree Domain Included\nPriority Support",
//     pricing: {
//       NGN: {
//         prefix: "₦",
//         monthly: "3,500.00",
//         annually: "35,000.00"
//       }
//     }
//   },
//   {
//     pid: "3",
//     name: "Enterprise Cloud",
//     description: "150 GB NVMe SSD Storage\nUnlimited Websites\nUnmetered Bandwidth\nFree SSL Certificate\nDedicated IP Address\nAdvanced Security Suite",
//     pricing: {
//       NGN: {
//         prefix: "₦",
//         monthly: "7,500.00",
//         annually: "75,000.00"
//       }
//     }
//   }
// ];


//   return (
//     <PageWrapper>
//       <Hero>
//         <HeroContent>
//           <BadgeHeader>
//             <FaRocket /> Managed WordPress Engine
//           </BadgeHeader>
//           <HeroTitle>WordPress Hosting</HeroTitle>
//           <HeroSubtitle>
//             Managed WordPress Hosting focused on performance, rock-solid security, and 24/7 expert support.
//           </HeroSubtitle>
//         </HeroContent>
//       </Hero>

//       <Section>
//         <SectionTitle>Main <span>Features</span></SectionTitle>
//         <FeaturesGrid>
//           {['100% Scalable', 'Free Migration', 'Optimized Speed', 'Enhanced Security'].map((feature, index) => (
//             <FeatureCard key={index}>
//               <FaCheckCircle /> {feature}
//             </FeatureCard>
//           ))}
//         </FeaturesGrid>
//       </Section>

//       <Section>
//         <SectionTitle>Choose Your Perfect <span>Plan</span></SectionTitle>
//         <PlansGrid>
//           {loading && Array(3).fill().map((_, i) => <SkeletonCard key={i} />)}

//           {/* {!loading && error && (
//             <p style={{ color: "#ef4444", gridColumn: "1 / -1", fontWeight: 600 }}>🚧 {error}</p>
//           )} */}

//           {wordpressProducts.map((product, i) => {
//             const pricing = product.pricing?.NGN || {};
//             const yearly = pricing.annually !== "-1.00" ? `${pricing.prefix}${parseInt(pricing.annually).toLocaleString()} / year` : null;
//             const monthly = pricing.monthly !== "-1.00" ? `${pricing.prefix}${parseInt(pricing.monthly).toLocaleString()} / month` : null;
//             const features = product.description?.split(/\r\n|\n|\r/).filter(Boolean) || [];

//             return (
//               <PlanCard key={i}>
//                 <div>
//                   <h3>{product.name}</h3>
//                   <Price>
//                     {monthly && <span className="main-price">{monthly}</span>}
//                     {yearly && <span className="sub-price">{yearly}</span>}
//                   </Price>
//                   <FeaturesList>
//                     {features.map((feat, idx) => (
//                       <li key={idx}><FaCheckCircle /> {feat}</li>
//                     ))}
//                   </FeaturesList>
//                 </div>
//                 <CTAButton
//                   // onClick={() => {
//                   //   localStorage.setItem("selectedProduct", JSON.stringify(product));
//                   //   navigate(`/hostingcheckout`);
//                   // }}
//                 >
//                   ORDER NOW <FaArrowRight />
//                 </CTAButton>
//               </PlanCard>
//             );
//           })}
//         </PlansGrid>
//       </Section>

//       <Section>
//         <SectionTitle>Included with All Annual <span>Packages</span></SectionTitle>
//         <FeaturesGrid>
//           {[
//             { title: 'Free SSL & Domain', desc: 'Includes Free SSL Certificate & .com.ng Domain name.' },
//             { title: 'Reliable Backups', desc: 'Automated Daily and Weekly Website Backups.' },
//             { title: 'Advanced Firewall', desc: 'Robust web application firewall tools included.' },
//             { title: 'cPanel Management', desc: 'Full industry-standard cPanel control panel access.' }
//           ].map((item, index) => (
//             <FeatureCard key={index}>
//               <FaShieldAlt /> {item.title}
//             </FeatureCard>
//           ))}
//         </FeaturesGrid>
//       </Section>

//       <Section>
//         <SectionTitle>Why Choose <span>Elexdon Host?</span></SectionTitle>
//         <FeaturesGrid>
//           {[
//             { title: '100% Scalable', desc: 'Service can be scaled up instantly to handle traffic spikes without worries.' },
//             { title: 'Extreme Support', desc: 'If you ever need help, we’re here 24/7 to deliver fast, friendly support.' },
//             { title: 'Optimized Speed', desc: 'Get faster load times & improved SEO with our global, cloud-based network.' },
//             { title: 'Free Migration', desc: 'Moving over from your old host? Our experts take care of everything.' },
//             { title: 'WordPress Experts', desc: 'Intensively-trained team consisting of WordPress core contributors.' },
//             { title: '100% In-House', desc: 'We never outsource support. Dedicated experts handle your concerns.' },
//             { title: '24/7 Availability', desc: 'Whether store or blog, get help day or night whenever you need it.' },
//             { title: 'Email or Chat', desc: 'Reach our award-winning support team quickly via tickets or live chat.' }
//           ].map((item, i) => (
//             <DetailedFeatureCard key={i}>
//               <div className="title-row">
//                 <FaHeadset /> {item.title}
//               </div>
//               <div>{item.desc}</div>
//             </DetailedFeatureCard>
//           ))}
//         </FeaturesGrid>
//       </Section>
//     </PageWrapper>
//   );
// };

// export default WordPressHosting;






import React, { useState, useEffect, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaCheckCircle, FaRocket, FaShieldAlt, FaServer, 
  FaArrowRight, FaHeadset, FaSpinner, FaExclamationTriangle, FaWifi 
} from 'react-icons/fa';
import hostingHeroImg from '../Images/wpbg.png';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';

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
`;

const Hero = styled.section`
  background-image: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(${hostingHeroImg});
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
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #102a43;
  margin-bottom: 30px;
  font-weight: 900;
  text-align: center;

  span {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  padding: 24px;
  border-radius: 12px;
  border-left: 4px solid #4f46e5;
  border-top: 1px solid #eae2f8;
  border-right: 1px solid #eae2f8;
  border-bottom: 1px solid #eae2f8;
  font-size: 1rem;
  font-weight: 700;
  color: #102a43;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.04);
  text-align: left;

  svg {
    color: #4f46e5;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
`;

const DetailedFeatureCard = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 14px;
  border: 1px solid #eae2f8;
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.03);
  font-size: 0.8rem;
  color: #61758a;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.05rem;
    font-weight: 800;
    color: #102a43;

    svg {
      color: #4f46e5;
    }
  }
`;

const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 20px;
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
`;

const Price = styled.div`
  margin: 12px 0 20px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid #eae2f8;
  display: flex;
  flex-direction: column;
  gap: 4px;

  span.main-price {
    font-size: 1.4rem;
    color: #4f46e5;
    font-weight: 900;
  }

  span.sub-price {
    font-size: 0.95rem;
    color: #61758a;
    font-weight: 700;
  }
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height:15px;

  li {
    font-size: 0.95rem;
    color:#1a202c;
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
`;

const CTAButton = styled.button`
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
`;

const FullPageLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #fcfbfe;
  color: #4f46e5;
  font-size: 1.1rem;
  font-weight: 600;
  gap: 1rem;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem;
  max-width: 600px;
  margin: 4rem auto;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #1a202c;
  }

  p {
    color: #61758a;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  button {
    background-color: #4f46e5;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: background 0.2s ease;

    &:hover {
      background-color: #4338ca;
    }
  }
`;

const WordPressHosting = () => {
  const { api_key, api_domain } = useContext(Context);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  // Monitor real-time online/offline network status
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const fetchProducts = () => {
    if (!navigator.onLine) {
      setIsOffline(true);
      setLoading(false);
      setError("You appear to be offline. Please check your internet connection.");
      return;
    }

    setLoading(true);
    setError(null);

    let isMounted = true;
    let retryTimer = null;
    let maxRetries = 3;

    const attemptFetch = (currentAttempt) => {
      // NOTE: Ensure your endpoint script file name matches your backend (e.g., get_wordpress_hosting_products.php)
      fetch(`${api_domain}/get_wordpress_hosting_products.php?key=${api_key}`)
        .then(res => {
          if (!res.ok) throw new Error(`Server returned status ${res.status}`);
          return res.json();
        })
        .then(data => {
          if (!isMounted) return;

          if (data.success && Array.isArray(data.products) && data.products.length > 0) {
            setProducts(data.products);
            setError(null);
            setLoading(false);
            setRetryCount(0);
          } else {
            throw new Error(data.error || "No WordPress hosting products found at the moment.");
          }
        })
        .catch(err => {
          if (!isMounted) return;

          if (currentAttempt < maxRetries) {
            setRetryCount(currentAttempt);
            setError(`Connection unstable. Retrying (${currentAttempt}/${maxRetries})...`);
            retryTimer = setTimeout(() => attemptFetch(currentAttempt + 1), 4000);
          } else {
            setLoading(false);
            setRetryCount(0);
            if (!navigator.onLine) {
              setIsOffline(true);
              setError("Network connection lost. Please check your router or mobile data.");
            } else {
              setError(err.message || "Unable to load WordPress hosting plans right now. Please try again later.");
            }
          }
        });
    };

    attemptFetch(1);

    return () => {
      isMounted = false;
      if (retryTimer) clearTimeout(retryTimer);
    };
  };

  useEffect(() => {
    fetchProducts();
    const interval = setInterval(fetchProducts, 300000); // Poll every 5 mins
    return () => clearInterval(interval);
  }, [api_domain, api_key]);

  // 1. Full Page Loader State
  if (loading && products.length === 0) {
    return (
      <FullPageLoader>
        <FaSpinner className="fa-spin" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }} />
        <span>Loading WordPress Hosting Plans...</span>
        {retryCount > 0 && <small style={{ opacity: 0.7 }}>Retrying connection ({retryCount}/3)...</small>}
      </FullPageLoader>
    );
  }

  // 2. Error / Offline State View
  if (error && products.length === 0) {
    return (
      <PageWrapper>
        <ErrorContainer>
          {isOffline ? <FaWifi style={{ fontSize: '3rem', color: '#ff6b6b', marginBottom: '1rem' }} /> : <FaExclamationTriangle style={{ fontSize: '3rem', color: '#f59e0b', marginBottom: '1rem' }} />}
          <h2>{isOffline ? "No Internet Connection" : "Something Went Wrong"}</h2>
          <p>{error}</p>
          <button onClick={fetchProducts}>
            Try Again
          </button>
        </ErrorContainer>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {/* Background poll error banner */}
      {error && products.length > 0 && (
        <div style={{ backgroundColor: '#fff3cd', color: '#856404', padding: '0.75rem', textAlign: 'center', fontSize: '0.9rem' }}>
          ⚠️ {error}
        </div>
      )}

      <Hero>
        <HeroContent>
          <BadgeHeader>
            <FaRocket /> Managed WordPress Engine
          </BadgeHeader>
          <HeroTitle>WordPress Hosting</HeroTitle>
          <HeroSubtitle>
            Managed WordPress Hosting focused on performance, rock-solid security, and 24/7 expert support.
          </HeroSubtitle>
        </HeroContent>
      </Hero>

      <Section>
        <SectionTitle>Main <span>Features</span></SectionTitle>
        <FeaturesGrid>
          {['100% Scalable', 'Free Migration', 'Optimized Speed', 'Enhanced Security'].map((feature, index) => (
            <FeatureCard key={index}>
              <FaCheckCircle /> {feature}
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Section>

      <Section>
        <SectionTitle>Choose Your Perfect <span>Plan</span></SectionTitle>
        <PlansGrid>
          {products.map((product, i) => {
            const pricing = product.pricing?.NGN || {};
            const yearly = pricing.annually !== "-1.00" ? `${pricing.prefix}${parseInt(pricing.annually).toLocaleString()} / year` : null;
            const monthly = pricing.monthly !== "-1.00" ? `${pricing.prefix}${parseInt(pricing.monthly).toLocaleString()} / month` : null;
            const features = product.description?.split(/\r\n|\n|\r/).filter(Boolean) || [];

            return (
              <PlanCard key={product.pid || i}>
                <div>
                  <h3>{product.name}</h3>
                  <Price>
                    {monthly && <span className="main-price">{monthly}</span>}
                    {yearly && <span className="sub-price">{yearly}</span>}
                  </Price>
                  <FeaturesList>
                    {features.map((feat, idx) => (
                      <li key={idx}><FaCheckCircle /> {feat}</li>
                    ))}
                  </FeaturesList>
                </div>
                <CTAButton
                  onClick={() => {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    navigate(`/hostingcheckout`);
                  }}
                >
                  ORDER NOW <FaArrowRight />
                </CTAButton>
              </PlanCard>
            );
          })}
        </PlansGrid>
      </Section>

      <Section>
        <SectionTitle>Included with All Annual <span>Packages</span></SectionTitle>
        <FeaturesGrid>
          {[
            { title: 'Free SSL & Domain', desc: 'Includes Free SSL Certificate & .com.ng Domain name.' },
            { title: 'Reliable Backups', desc: 'Automated Daily and Weekly Website Backups.' },
            { title: 'Advanced Firewall', desc: 'Robust web application firewall tools included.' },
            { title: 'cPanel Management', desc: 'Full industry-standard cPanel control panel access.' }
          ].map((item, index) => (
            <FeatureCard key={index}>
              <FaShieldAlt /> {item.title}
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Section>

      <Section>
        <SectionTitle>Why Choose <span>Elexdon Host?</span></SectionTitle>
        <FeaturesGrid>
          {[
            { title: '100% Scalable', desc: 'Service can be scaled up instantly to handle traffic spikes without worries.' },
            { title: 'Extreme Support', desc: 'If you ever need help, we’re here 24/7 to deliver fast, friendly support.' },
            { title: 'Optimized Speed', desc: 'Get faster load times & improved SEO with our global, cloud-based network.' },
            { title: 'Free Migration', desc: 'Moving over from your old host? Our experts take care of everything.' },
            { title: 'WordPress Experts', desc: 'Intensively-trained team consisting of WordPress core contributors.' },
            { title: '100% In-House', desc: 'We never outsource support. Dedicated experts handle your concerns.' },
            { title: '24/7 Availability', desc: 'Whether store or blog, get help day or night whenever you need it.' },
            { title: 'Email or Chat', desc: 'Reach our award-winning support team quickly via tickets or live chat.' }
          ].map((item, i) => (
            <DetailedFeatureCard key={i}>
              <div className="title-row">
                <FaHeadset /> {item.title}
              </div>
              <div>{item.desc}</div>
            </DetailedFeatureCard>
          ))}
        </FeaturesGrid>
      </Section>
    </PageWrapper>
  );
};

export default WordPressHosting;