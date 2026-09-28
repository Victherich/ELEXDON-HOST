


// import React, { useState, useRef, useEffect, useContext } from 'react';
// import styled from 'styled-components';
// import 'animate.css';
// import Swal from 'sweetalert2';
// import domainsearchimg from '../Images/domainsearchimg.jpeg';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { Context } from './Context';

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
//         }
//       },
//       {
//         threshold: 0.5,
//         rootMargin: '0px 0px -50px 0px',
//       }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return {
//     ref,
//     className: isVisible ? `animate__animated ${animationClass}` : '',
//   };
// };

// const DomainWrap = styled.div`
//   width: 100%;
//   padding: 20px 0px;
//   background-image: url(${domainsearchimg});
//   background-size: cover;
//   background-position: bottom;
//   position: relative;
//   z-index: 1;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(255, 255, 255, 0.8);
//     z-index: 0;
//   }

//   > * {
//     position: relative;
//     z-index: 1;
//   }
// `;

// const Container = styled.div`
//   max-width: 800px;
//   margin: 0px auto;
//   padding: 40px;
//   border-radius: 20px;
//   box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
//   text-align: center;
//   color: #fff;
// `;

// const Title = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 20px;
//   background: linear-gradient(90deg, #2B32B2, #3b82f6, #9333ea);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// `;

// const Form = styled.form`
//   display: flex;
//   gap: 10px;
//   justify-content: center;
//   flex-wrap: wrap;
// `;

// const Input = styled.input`
//   padding: 12px 20px;
//   border-radius: 30px;
//   border: none;
//   width: 600px;
//   font-size: 16px;
//   outline: #2B32B2;
//   border: 4px solid rgba(0,0,255,0.4);
//   background: #eee;
//   color: #333;

//   @media(max-width:768px){
//     width:300px;
//   }
// `;

// const Button = styled.button`
//   background: linear-gradient(90deg, #facc15, #fcd34d);
//   color: #000;
//   padding: 12px 25px;
//   font-size: 16px;
//   border: none;
//   border-radius: 30px;
//   cursor: pointer;
//   font-weight: bold;
//   transition: 0.3s ease;

//   &:hover {
//     background: linear-gradient(90deg, #facc15, #fde68a);
//     transform: scale(1.05);
//   }
// `;

// const Result = styled.div`
//   margin-top: 30px;
//   // font-size: 18px;
//   background: ${({ available }) =>
//     available ? 'rgba(34,197,94,0.5)' : 'rgba(239,68,68,0.5)'};
//   color: ${({ available }) => (available ? 'white' : 'white')};
//   padding: 20px;
//   border-radius: 10px;
//   font-weight: bold;
//   border: 1px solid ${({ available }) => (available ? '#22c55e' : '#ef4444')};
//   strong{
//     text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
//     font-size:1.2rem;
//   }
// `;

// const DomainSearch = () => {
//   const [domain, setDomain] = useState('');
//   const [tld, setTld] = useState(null);
//   const [domaintype, setDomaintype] = useState('register');
//   const [result, setResult] = useState(null);
//   const navigate = useNavigate();

//   const {domainPricings, api_key}=useContext(Context);

//   const titleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const formAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const resultAnim = useAnimateOnScroll('animate__fadeIn animate__slower');


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const fullDomain = `${domain}${tld}`;
//   if (!domain || !tld) {
//     Swal.fire({ icon: "warning", text: "Please enter a domain and select a TLD." });
//     return;
//   }

//   Swal.fire({
//     title: "Checking domain...",
//     text: "Please wait while we check availability.",
//     allowOutsideClick: false,
//     didOpen: () => Swal.showLoading(),
//   });

//   try {
//     const res = await fetch(`https://www.elexdonhost.com/api_elexdonhost/check_domain.php?key=${api_key}`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ domain: fullDomain, type: "register" }),
//     });

//     const data = await res.json();
//     console.log(data)

//     if (data.available) {
//       setResult({ available: true, name: fullDomain });
//       Swal.fire({ icon: "success", title: "Domain Available", text: "Great! The domain is available for registration." });
//     } else {
//       setResult({ available: false, name: fullDomain });
//       Swal.fire({ icon: "error", title: "Domain Unavailable", text: "Sorry, that domain is not available." });
//     }
//   } catch (err) {
//     console.error("Domain check error:", err);
//     Swal.fire({ icon: "error", title: "Error", text: "There was an error checking the domain. Please try again." });
//   }
// };


//   return (
//     <DomainWrap id="domainsearch">
//       <Container>
//         <Title ref={titleAnim.ref} className={titleAnim.className}>
//           Search for Your Dream Domain
//         </Title>

//         <Form ref={formAnim.ref} className={formAnim.className} onSubmit={handleSubmit}>
//           <Input
//             type="text"
//             placeholder="Enter domain (without TLD) (e.g. elexdon)"
//             value={domain}
//             onChange={(e) => setDomain(e.target.value)}
//             required
//           />

//           <select
//           required
//             style={{
//               padding: '12px 20px',
//               borderRadius: '30px',
//               border: '4px solid rgba(0,0,255,0.4)',
//               background: '#eee',
//               color: '#333',
//               fontSize: '16px'
//             }}
//             value={tld}
//             onChange={(e) => setTld(e.target.value)}
           
//           >
//            <option>-- Select TLD --</option>

//            {domainPricings.map((d)=>(
//             <option key={d.domain} value={d.domain}>{d.domain}</option>
//            ))}
   
//           </select>

   
//           <Button type="submit">Search</Button>
//         </Form>

//         <Title style={{ fontSize: "1rem" }}>
//           .com ₦28,500│.com.ng ₦13,500│.ng ₦17,500│.org ₦30,000│.net ₦40,000│ .tech ₦120,000 |
//         </Title>

//         {result && (
//           <Result
//             ref={resultAnim.ref}
//             className={resultAnim.className}
//             available={result.available}
//           >
//             {result.available ? (
//               <>🎉 <strong>{result.name}</strong> is available! <Button onClick={()=>navigate(`/domainregistercheckout/${result.name}/${domain}/${tld}`)}>Register</Button></>
//             ) : (
//               <>❌ <strong>{result.name}</strong> is already taken.</>
//             )}
//           </Result>
//         )}
//       </Container>
//     </DomainWrap>
//   );
// };

// export default DomainSearch;






// import React, { useState, useRef, useEffect, useContext } from 'react';
// import styled from 'styled-components';
// import 'animate.css';
// import Swal from 'sweetalert2';
// import domainsearchimg from '../Images/domainsearchimg.jpeg';
// import { useNavigate } from 'react-router-dom';
// import { Context } from './Context';
// import { FaSearch, FaCheck, FaTimes, FaArrowRight, FaShieldAlt, FaRocket, FaGlobeAfrica } from 'react-icons/fa';

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
//         }
//       },
//       {
//         threshold: 0.2,
//         rootMargin: '0px 0px -50px 0px',
//       }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return {
//     ref,
//     className: isVisible ? `animate__animated ${animationClass}` : '',
//   };
// };

// const SectionWrapper = styled.section`
//   width: 100%;
//   padding: 10px;
//   background-image: linear-gradient(
//       135deg,
//       rgba(245, 247, 250, 0.9) 0%,
//       rgba(230, 240, 255, 0.7) 100%
//     ),
//     url(${domainsearchimg});
//   background-size: cover;
//   background-position: center;
//   position: relative;
//   overflow: hidden;
//   // border-bottom: 2px solid #004aad;
// `;

// const DualGridContainer = styled.div`
//   max-width: 900px;
//   margin: 10px auto;
//   padding: 10px;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   align-items: center;
//   gap: 10px;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const LeftContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   text-align: left;
//   gap: 10px;
//   margin: 10px 0;
//   padding: 0 10px;

//   @media (max-width: 768px) {
//     align-items: center;
//     text-align: center;
//   }
// `;

// const BadgeHeader = styled.div`
//   display: inline-flex;
//   align-items: center;
//   gap: 6px;
//   padding: 4px 10px;
//   background: rgba(0, 74, 173, 0.1);
//   border-left: 3px solid #004aad;
//   color: #004aad;
//   font-size: 11px;
//   font-weight: 700;
//   text-transform: uppercase;
//   margin: 10px 0;
// `;

// const MainHeading = styled.h2`
//   font-size: 1.8rem;
//   font-weight: 900;
//   color: #0f172a;
//   line-height: 1.2;
//   margin: 10px 0;

//   span {
//     color: #004aad;
//   }
// `;

// const DescriptionText = styled.p`
//   font-size: 0.85rem;
//   color: #475569;
//   line-height: 1.4;
//   margin: 10px 0;
// `;

// const FeaturesMiniList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   width: 100%;
//   margin: 10px 0;
// `;

// const FeatureRow = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   font-size: 12px;
//   color: #334155;
//   font-weight: 600;
//   margin: 10px 0;

//   svg {
//     color: #004aad;
//     font-size: 12px;
//   }
// `;

// /* Ultra-compact search card strictly bounded to max 10px */
// const RightSearchCard = styled.div`
//   // background: #ffffff;
//   padding: 10px;
//   border-radius: 10px;
//   border: 1px solid #cbd5e1;
//   box-shadow: 0 4px 15px rgba(0, 74, 173, 0.08);
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   width: 100%;
//   margin: 10px 0;
// `;

// const CompactForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   width: 100%;
//   margin: 10px 0;
// `;

// const InputGroupCompact = styled.div`
//   display: flex;
//   align-items: center;
//   background: #f8fafc;
//   border: 1px solid #cbd5e1;
//   border-radius: 8px;
//   padding: 4px 10px;
//   gap: 8px;
//   margin: 10px 0;

//   svg {
//     color: #004aad;
//     font-size: 13px;
//   }
// `;

// const InputField = styled.input`
//   width: 100%;
//   border: none;
//   outline: none;
//   font-size: 13px;
//   color: #0f172a;
//   background: transparent;
//   padding: 4px 0;
//   margin: 10px 0;

//   &::placeholder {
//     color: #94a3b8;
//   }
// `;

// const SelectField = styled.select`
//   width: 100%;
//   border: 1px solid #cbd5e1;
//   outline: none;
//   background: #f8fafc;
//   color: #004aad;
//   font-size: 12px;
//   font-weight: 700;
//   padding: 6px 10px;
//   border-radius: 8px;
//   cursor: pointer;
//   margin: 10px 0;
// `;

// const CompactSubmitButton = styled.button`
//   background: #004aad;
//   color: #ffffff;
//   border: none;
//   padding: 8px 10px;
//   border-radius: 8px;
//   font-size: 12px;
//   font-weight: 700;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 6px;
//   margin: 10px 0;
//   transition: opacity 0.2s;

//   &:hover {
//     opacity: 0.9;
//   }
// `;

// const PricingWrap = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 6px;
//   margin: 10px 0;
// `;

// const PriceBadge = styled.span`
//   background: rgba(0, 74, 173, 0.05);
//   border: 1px solid rgba(0, 74, 173, 0.15);
//   padding: 4px 6px;
//   border-radius: 6px;
//   font-size: 0.9rem;
//   color: #334155;
//   margin: 10px 0;

//   strong {
//     color: #004aad;
//   }
// `;

// const ResultCard = styled.div`
//   margin: 10px 0;
//   background: ${({ available }) => (available ? '#f0fdf4' : '#fef2f2')};
//   border: 1px solid ${({ available }) => (available ? '#22c55e' : '#ef4444')};
//   padding: 8px;
//   border-radius: 8px;
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   text-align: center;

//   .res-text {
//     font-size: 12px;
//     font-weight: 600;
//     color: ${({ available }) => (available ? '#166534' : '#991b1b')};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 6px;
//     margin: 10px 0;
//   }

//   .checkout-btn {
//     background: #004aad;
//     color: #fff;
//     border: none;
//     padding: 6px 8px;
//     border-radius: 6px;
//     font-size: 11px;
//     font-weight: 700;
//     cursor: pointer;
//     margin: 10px 0;
//   }
// `;

// const DomainSearch = () => {
//   const [domain, setDomain] = useState('');
//   const [tld, setTld] = useState('');
//   const [result, setResult] = useState(null);
//   const navigate = useNavigate();

//   const { domainPricings, api_key } = useContext(Context);

//   const leftAnim = useAnimateOnScroll('animate__fadeInLeft animate__slower');
//   const rightAnim = useAnimateOnScroll('animate__fadeInRight animate__slower');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const fullDomain = `${domain}${tld}`;
//     if (!domain || !tld || tld === '-- Select TLD --') {
//       Swal.fire({ icon: "warning", text: "Please enter a domain name and select a valid TLD." });
//       return;
//     }

//     Swal.fire({
//       title: "Checking domain...",
//       text: "Please wait while we check availability.",
//       allowOutsideClick: false,
//       didOpen: () => Swal.showLoading(),
//     });

//     try {
//       const res = await fetch(`https://www.elexdonhost.com/api_elexdonhost/check_domain.php?key=${api_key}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ domain: fullDomain, type: "register" }),
//       });

//       const data = await res.json();
//       console.log(data);

//       if (data.available) {
//         setResult({ available: true, name: fullDomain });
//         Swal.close();
//       } else {
//         setResult({ available: false, name: fullDomain });
//         Swal.close();
//       }
//     } catch (err) {
//       console.error("Domain check error:", err);
//       Swal.fire({ icon: "error", title: "Error", text: "There was an error checking the domain. Please try again." });
//     }
//   };

//   return (
//     <SectionWrapper id="domainsearch">
//       <DualGridContainer>
//         <LeftContent ref={leftAnim.ref} className={leftAnim.className}>
//           <BadgeHeader>
//             <FaGlobeAfrica /> Instant Registry
//           </BadgeHeader>
//           <MainHeading>
//             Claim Your Brand With a <span>Perfect Domain</span>
//           </MainHeading>
//           <DescriptionText>
//             Establish instant credibility online with lightning-fast DNS routing, full domain control, and top-tier security extensions.
//           </DescriptionText>
          
//           <FeaturesMiniList>
//             <FeatureRow>
//               <FaShieldAlt /> Free DNS Management & Privacy Protection
//             </FeatureRow>
//             <FeatureRow>
//               <FaRocket /> Automated Instant Activation
//             </FeatureRow>
//           </FeaturesMiniList>

//           <PricingWrap>
//             <PriceBadge>.com <strong>₦28,500</strong></PriceBadge>
//             <PriceBadge>.com.ng <strong>₦13,500</strong></PriceBadge>
//             <PriceBadge>.ng <strong>₦17,500</strong></PriceBadge>
//             <PriceBadge>.org <strong>₦30,000</strong></PriceBadge>
//             <PriceBadge>.net <strong>₦40,000</strong></PriceBadge>
//             <PriceBadge>.tech <strong>₦120,000</strong></PriceBadge>
//           </PricingWrap>
//         </LeftContent>

//         <RightSearchCard ref={rightAnim.ref} className={rightAnim.className}>
//           <CompactForm onSubmit={handleSubmit}>
//             <InputGroupCompact>
//               <FaSearch />
//               <InputField
//                 type="text"
//                 placeholder="Enter desired domain name..."
//                 value={domain}
//                 onChange={(e) => setDomain(e.target.value)}
//                 required
//               />
//             </InputGroupCompact>

//             <SelectField
//               required
//               value={tld}
//               onChange={(e) => setTld(e.target.value)}
//             >
//               <option value="">Select Extension</option>
//               {domainPricings && domainPricings.map((d) => (
//                 <option key={d.domain} value={d.domain}>{d.domain}</option>
//               ))}
//             </SelectField>

//             <CompactSubmitButton type="submit">
//               Check Availability <FaArrowRight />
//             </CompactSubmitButton>
//           </CompactForm>

//           {result && (
//             <ResultCard available={result.available}>
//               {result.available ? (
//                 <>
//                   <div className="res-text">
//                     <FaCheck /> <strong>{result.name}</strong> is available!
//                   </div>
//                   <button 
//                     className="checkout-btn" 
//                     onClick={() => navigate(`/domainregistercheckout/${result.name}/${domain}/${tld}`)}
//                   >
//                     Proceed to Register
//                   </button>
//                 </>
//               ) : (
//                 <div className="res-text">
//                   <FaTimes /> <strong>{result.name}</strong> is taken.
//                 </div>
//               )}
//             </ResultCard>
//           )}
//         </RightSearchCard>
//       </DualGridContainer>
//     </SectionWrapper>
//   );
// };

// export default DomainSearch;




import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import 'animate.css';
import Swal from 'sweetalert2';
import domainsearchimg from '../Images/domainsearchimg.jpeg';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';
import { FaSearch, FaCheck, FaTimes, FaArrowRight, FaShieldAlt, FaRocket, FaGlobeAfrica } from 'react-icons/fa';

const useAnimateOnScroll = (animationClass) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: isVisible ? `animate__animated ${animationClass}` : '',
  };
};

const SectionWrapper = styled.section`
  width: 100%;
  padding: 30px 10px;
  background-image: linear-gradient(
      135deg,
      rgba(247, 245, 255, 0.92) 0%,
      rgba(238, 226, 248, 0.85) 100%
    ),
    url(${domainsearchimg});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(147, 51, 234, 0.05);
`;

const DualGridContainer = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 10px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 12px;
  margin: 10px 0;
  padding: 0 10px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const BadgeHeader = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(79, 70, 229, 0.08);
  border-left: 3px solid #4f46e5;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 5px 0;

  svg {
    -webkit-text-fill-color: initial;
    color: #4f46e5;
  }
`;

const MainHeading = styled.h2`
  font-size: clamp(2rem, 3.5vw, 2.6rem);
  font-weight: 900;
  color: #102a43;
  line-height: 1.2;
  margin: 10px 0;

  span {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const DescriptionText = styled.p`
  font-size: 0.95rem;
  color: #61758a;
  line-height: 1.6;
  margin: 5px 0;
`;

const FeaturesMiniList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin: 10px 0;
`;

const FeatureRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #334155;
  font-weight: 600;
  margin: 4px 0;

  svg {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 14px;
  }
`;

/* Ultra-compact search card strictly bounded */
const RightSearchCard = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(12px);
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #eae2f8;
  box-shadow: 0 15px 35px rgba(79, 70, 229, 0.08);
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin: 10px 0;
`;

const CompactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin: 0;
`;

const InputGroupCompact = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #dcd6f7;
  border-radius: 10px;
  padding: 8px 14px;
  gap: 10px;
  margin: 0;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);

  svg {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 14px;
  }
`;

const InputField = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 14px;
  color: #0f172a;
  background: transparent;
  padding: 4px 0;
  margin: 0;

  &::placeholder {
    color: #94a3b8;
  }
`;

const SelectField = styled.select`
  width: 100%;
  border: 1px solid #dcd6f7;
  outline: none;
  background: #ffffff;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #4f46e5;
  font-size: 13px;
  font-weight: 700;
  padding: 10px 14px;
  border-radius: 10px;
  cursor: pointer;
  margin: 0;
  box-shadow: 0 2px 6px rgba(79, 70, 229, 0.03);

  option {
    -webkit-text-fill-color: #0f172a;
    color: #0f172a;
    background: #ffffff;
  }
`;

const CompactSubmitButton = styled.button`
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  color: #ffffff;
  border: none;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0;
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
    background: linear-gradient(135deg, #4338ca 0%, #7e22ce 100%);
  }
`;

const PricingWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
`;

const PriceBadge = styled.span`
  background: #ffffff;
  border: 1px solid #eae2f8;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #475569;
  box-shadow: 0 2px 6px rgba(147, 51, 234, 0.03);
  margin: 0;

  strong {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  }
`;

const ResultCard = styled.div`
  margin: 5px 0 0;
  background: ${({ available }) => (available ? '#f0fdf4' : '#fef2f2')};
  border: 1px solid ${({ available }) => (available ? '#22c55e' : '#ef4444')};
  padding: 12px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;

  .res-text {
    font-size: 13px;
    font-weight: 600;
    color: ${({ available }) => (available ? '#166534' : '#991b1b')};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin: 0;
  }

  .checkout-btn {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    margin: 0;
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }
`;

// const DomainSearch = () => {
//   const [domain, setDomain] = useState('');
//   const [tld, setTld] = useState('');
//   const [result, setResult] = useState(null);
//   const navigate = useNavigate();

//   const { domainPricings, api_key } = useContext(Context);

//   const leftAnim = useAnimateOnScroll('animate__fadeInLeft animate__slower');
//   const rightAnim = useAnimateOnScroll('animate__fadeInRight animate__slower');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const fullDomain = `${domain}${tld}`;
//     if (!domain || !tld || tld === '-- Select TLD --') {
//       Swal.fire({ icon: "warning", text: "Please enter a domain name and select a valid TLD." });
//       return;
//     }

//     Swal.fire({
//       title: "Checking domain...",
//       text: "Please wait while we check availability.",
//       allowOutsideClick: false,
//       didOpen: () => Swal.showLoading(),
//     });

//     try {
//       const res = await fetch(`https://www.elexdonhost.com/api_elexdonhost/check_domain.php?key=${api_key}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ domain: fullDomain, type: "register" }),
//       });

//       const data = await res.json();
//       console.log(data);

//       if (data.available) {
//         setResult({ available: true, name: fullDomain });
//         Swal.close();
//       } else {
//         setResult({ available: false, name: fullDomain });
//         Swal.close();
//       }
//     } catch (err) {
//       console.error("Domain check error:", err);
//       Swal.fire({ icon: "error", title: "Error", text: "There was an error checking the domain. Please try again." });
//     }
//   };

//   return (
//     <SectionWrapper id="domainsearch">
//       <DualGridContainer>
//         <LeftContent ref={leftAnim.ref}>
//           <BadgeHeader>
//             <FaGlobeAfrica /> Instant Registry
//           </BadgeHeader>
//           <MainHeading>
//             Claim Your Brand With a <span>Perfect Domain</span>
//           </MainHeading>
//           <DescriptionText>
//             Establish instant credibility online with lightning-fast DNS routing, full domain control, and top-tier security extensions.
//           </DescriptionText>
          
//           <FeaturesMiniList>
//             <FeatureRow>
//               <FaShieldAlt /> Free DNS Management & Privacy Protection
//             </FeatureRow>
//             <FeatureRow>
//               <FaRocket /> Automated Instant Activation
//             </FeatureRow>
//           </FeaturesMiniList>

//           <PricingWrap>
//             <PriceBadge>.com <strong>₦28,500</strong></PriceBadge>
//             <PriceBadge>.com.ng <strong>₦13,500</strong></PriceBadge>
//             <PriceBadge>.ng <strong>₦17,500</strong></PriceBadge>
//             <PriceBadge>.org <strong>₦30,000</strong></PriceBadge>
//             <PriceBadge>.net <strong>₦40,000</strong></PriceBadge>
//             <PriceBadge>.tech <strong>₦120,000</strong></PriceBadge>
//           </PricingWrap>
//         </LeftContent>

//         <RightSearchCard ref={rightAnim.ref} >
//           <CompactForm onSubmit={handleSubmit}>
//             <InputGroupCompact>
//               <FaSearch />
//               <InputField
//                 type="text"
//                 placeholder="Enter desired domain name..."
//                 value={domain}
//                 onChange={(e) => setDomain(e.target.value)}
//                 required
//               />
//             </InputGroupCompact>

//             <SelectField
//               required
//               value={tld}
//               onChange={(e) => setTld(e.target.value)}
//             >
//               <option value="">Select Extension</option>
//               {domainPricings && domainPricings.map((d) => (
//                 <option key={d.domain} value={d.domain}>{d.domain}</option>
//               ))}
//             </SelectField>

//             <CompactSubmitButton type="submit">
//               Check Availability <FaArrowRight />
//             </CompactSubmitButton>
//           </CompactForm>

//           {result && (
//             <ResultCard available={result.available}>
//               {result.available ? (
//                 <>
//                   <div className="res-text">
//                     <FaCheck /> <strong>{result.name}</strong> is available!
//                   </div>
//                   <button 
//                     className="checkout-btn" 
//                     onClick={() => navigate(`/domainregistercheckout/${result.name}/${domain}/${tld}`)}
//                   >
//                     Proceed to Register
//                   </button>
//                 </>
//               ) : (
//                 <div className="res-text">
//                   <FaTimes /> <strong>{result.name}</strong> is taken.
//                 </div>
//               )}
//             </ResultCard>
//           )}
//         </RightSearchCard>
//       </DualGridContainer>
//     </SectionWrapper>
//   );
// };


const DomainSearch = () => {
  const [domain, setDomain] = useState('');
  const [tld, setTld] = useState('');
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const { domainPricings } = useContext(Context);

  const leftAnim = useAnimateOnScroll('animate__fadeInLeft animate__slower');
  const rightAnim = useAnimateOnScroll('animate__fadeInRight animate__slower');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const fullDomain = `${domain}${tld}`;
  //   if (!domain || !tld || tld === '-- Select TLD --') {
  //     Swal.fire({ icon: "warning", text: "Please enter a domain name and select a valid TLD." });
  //     return;
  //   }

  //   Swal.fire({
  //     title: "Checking domain...",
  //     text: "Please wait while we check availability.",
  //     allowOutsideClick: false,
  //     didOpen: () => Swal.showLoading(),
  //   });

  //   try {
  //     // Swapped to the free DigMyName API (requires zero API keys)
  //     const res = await fetch(`https://api.digmyname.com/functions/v1/public-api/check?domain=${fullDomain}`);
      
  //     if (!res.ok) {
  //       throw new Error('Failed to check domain registry');
  //     }

  //     const data = await res.json();
  //     console.log(data);

  //     // DigMyName returns format: { domain: "...", available: true/false, price_usd: ... }
  //     if (data.available) {
  //       setResult({ available: true, name: fullDomain });
  //       Swal.close();
  //     } else {
  //       setResult({ available: false, name: fullDomain });
  //       Swal.close();
  //     }
  //   } catch (err) {
  //     console.error("Domain check error:", err);
  //     Swal.fire({ icon: "error", title: "Error", text: "There was an error checking the domain. Please try again." });
  //   }
  // };


// const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Clean up domain input to prevent accidental spaces or extra dots
//     const cleanDomain = domain.trim().toLowerCase().replace(/^\/+|\/+$/g, '');
//     const cleanTld = tld.startsWith('.') ? tld : `.${tld}`;
//     const fullDomain = `${cleanDomain}${cleanTld}`;

//     if (!cleanDomain || !tld || tld === '-- Select TLD --') {
//       Swal.fire({ icon: "warning", text: "Please enter a domain name and select a valid TLD." });
//       return;
//     }

//     Swal.fire({
//       title: "Checking domain...",
//       text: "Please wait while we check availability.",
//       allowOutsideClick: false,
//       didOpen: () => Swal.showLoading(),
//     });

//     try {
//       const endpoint = `https://api.digmyname.com/functions/v1/public-api/check?domain=${fullDomain}`;
//       console.log("Fetching from:", endpoint); // Check your browser console to verify the URL

//       const res = await fetch(endpoint);
      
//       if (!res.ok) {
//         throw new Error('Failed to check domain registry');
//       }

//       const data = await res.json();
//       console.log("API Response:", data); // Inspect the exact JSON structure

//       // DigMyName returns fields like: { domain: "...", available: true/false }
//       // Some response wrappers might nest it under a 'result' object depending on the endpoint version
//       const isAvailable = data.available ?? data.result?.available;

//       if (isAvailable) {
//         setResult({ available: true, name: fullDomain });
//       } else {
//         setResult({ available: false, name: fullDomain });
//       }
//       Swal.close();

//     } catch (err) {
//       console.error("Domain check error:", err);
//       Swal.fire({ icon: "error", title: "Error", text: "There was an error checking the domain. Please try again." });
//     }
//   };



const handleSubmit = async (e) => {
    e.preventDefault();
    const fullDomain = `${domain}${tld}`;
    if (!domain || !tld || tld === '-- Select TLD --') {
      Swal.fire({ icon: "warning", text: "Please enter a domain name and select a valid TLD." });
      return;
    }

    Swal.fire({
      title: "Checking domain...",
      text: "Please wait while we check availability.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const res = await fetch(`https://api.digmyname.com/functions/v1/public-api/check?domain=${fullDomain}`);
      
      if (!res.ok) {
        throw new Error('Failed to check domain registry');
      }

      const data = await res.json();
      console.log("DigMyName Response:", data);

      // DigMyName returns { available: true/false, price_usd: ..., cheapest_registrar: ... } directly at the root
      if (data.available === true) {
        setResult({ 
          available: true, 
          name: fullDomain, 
          price: data.price_usd,
          registrar: data.cheapest_registrar?.name 
        });
      } else {
        setResult({ available: false, name: fullDomain });
      }
      Swal.close();

    } catch (err) {
      console.error("Domain check error:", err);
      Swal.fire({ icon: "error", title: "Error", text: "There was an error checking the domain. Please try again." });
    }
  };



  return (
    <SectionWrapper id="domainsearch">
      <DualGridContainer>
        <LeftContent ref={leftAnim.ref}>
          <BadgeHeader>
            <FaGlobeAfrica /> Instant Registry
          </BadgeHeader>
          <MainHeading>
            Claim Your Brand With a <span>Perfect Domain</span>
          </MainHeading>
          <DescriptionText>
            Establish instant credibility online with lightning-fast DNS routing, full domain control, and top-tier security extensions.
          </DescriptionText>
          
          <FeaturesMiniList>
            <FeatureRow>
              <FaShieldAlt /> Free DNS Management & Privacy Protection
            </FeatureRow>
            <FeatureRow>
              <FaRocket /> Automated Instant Activation
            </FeatureRow>
          </FeaturesMiniList>

          <PricingWrap>
            <PriceBadge>.com <strong>₦28,500</strong></PriceBadge>
            <PriceBadge>.com.ng <strong>₦13,500</strong></PriceBadge>
            <PriceBadge>.ng <strong>₦17,500</strong></PriceBadge>
            <PriceBadge>.org <strong>₦30,000</strong></PriceBadge>
            <PriceBadge>.net <strong>₦40,000</strong></PriceBadge>
            <PriceBadge>.tech <strong>₦120,000</strong></PriceBadge>
          </PricingWrap>
        </LeftContent>

        <RightSearchCard ref={rightAnim.ref} >
          <CompactForm onSubmit={handleSubmit}>
            <InputGroupCompact>
              <FaSearch />
              <InputField
                type="text"
                placeholder="Enter desired domain name..."
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                required
              />
            </InputGroupCompact>

            <SelectField
              required
              value={tld}
              onChange={(e) => setTld(e.target.value)}
            >
              <option value="">Select Extension</option>
              {domainPricings && domainPricings.map((d) => (
                <option key={d.domain} value={d.domain}>{d.domain}</option>
              ))}
            </SelectField>

            <CompactSubmitButton type="submit">
              Check Availability <FaArrowRight />
            </CompactSubmitButton>
          </CompactForm>

          {result && (
            <ResultCard available={result.available}>
              {result.available ? (
                <>
                  <div className="res-text">
                    <FaCheck /> <strong>{result.name}</strong> is available!
                  </div>
                  <button 
                    className="checkout-btn" 
                    onClick={() => navigate(`/domainregistercheckout/${result.name}/${domain}/${tld}`)}
                  >
                    Proceed to Register
                  </button>
                </>
              ) : (
                <div className="res-text">
                  <FaTimes /> <strong>{result.name}</strong> is taken.
                </div>
              )}
            </ResultCard>
          )}
        </RightSearchCard>
      </DualGridContainer>
    </SectionWrapper>
  );
};

export default DomainSearch;