


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




import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import 'animate.css';
import Swal from 'sweetalert2';
import domainsearchimg from '../Images/domainsearchimg.jpeg';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';

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

const DomainWrap = styled.div`
  width: 100%;
  padding: 60px 20px;
  background-image: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(147, 51, 234, 0.1)), url(${domainsearchimg});
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    // backdrop-filter: blur(8px);
    // -webkit-backdrop-filter: blur(8px);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 850px;
  margin: 0px auto;
  padding: 50px 40px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(147, 51, 234, 0.15);
  box-shadow: 0 20px 40px rgba(79, 70, 229, 0.08), 0 0 20px rgba(0, 0, 0, 0.04);
  text-align: center;
  color: #1e293b;

  @media(max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 25px;
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;

  @media(max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Form = styled.form`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;

const Input = styled.input`
  padding: 16px 24px;
  border-radius: 50px;
  border: 2px solid #9ea2a7;
  width: 420px;
  font-size: 16px;
  background: #f8fafc;
  color: #0f172a;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #9333ea;
    background: #ffffff;
    box-shadow: 0 0 15px rgba(147, 51, 234, 0.15);
  }

  @media(max-width: 768px) {
    width: 100%;
  }
`;

const StyledSelect = styled.select`
  padding: 16px 24px;
  border-radius: 50px;
  border: 2px solid #9ea2a7;
  background: #f8fafc;
  color: #0f172a;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);

  &:focus {
    border-color: #9333ea;
    background: #ffffff;
    box-shadow: 0 0 15px rgba(147, 51, 234, 0.15);
  }

option {
    background: #ffffff;
    color: #0f172a;
    padding: 12px 16px;
    font-size: 15px;
    font-weight: 500;
  }

  option:hover, option:focus {
    background: #f3e8ff;
    color: #7e22ce;
  }

  @media(max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  color: #ffffff;
  padding: 16px 32px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #4338ca 0%, #7e22ce 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(147, 51, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media(max-width: 768px) {
    width: 100%;
  }
`;

const PricingBadge = styled.div`
  font-size: 0.95rem;
  color: #475569;
  background: #f1f5f9;
  padding: 10px 20px;
  border-radius: 30px;
  display: inline-block;
  border: 1px solid #e2e8f0;
  margin-top: 5px;
  line-height: 1.6;
  word-spacing: 2px;
  font-weight: 500;

  @media(max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Result = styled.div`
  margin-top: 30px;
  background: ${({ available }) =>
    available ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)'};
  color: #1e293b;
  padding: 22px 25px;
  border-radius: 16px;
  font-weight: 500;
  border: 1px solid ${({ available }) => (available ? '#10b981' : '#ef4444')};
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);

  strong {
    font-size: 1.25rem;
    color: ${({ available }) => (available ? '#059669' : '#dc2626')};
  }

  button {
    margin-left: auto;
    padding: 10px 24px;
    font-size: 14px;
    background: ${({ available }) => (available ? '#10b981' : '#ef4444')};
    box-shadow: 0 4px 12px ${({ available }) => (available ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.25)')};
    
    &:hover {
      background: ${({ available }) => (available ? '#047857' : '#b91c1c')};
    }
  }

  @media(max-width: 768px) {
    justify-content: center;
    text-align: center;
    button {
      margin-left: 0;
      width: 100%;
    }
  }
`;

const DomainSearch = () => {
  const [domain, setDomain] = useState('');
  const [tld, setTld] = useState('');
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const { domainPricings = [], api_key } = useContext(Context);

  const titleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const formAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const resultAnim = useAnimateOnScroll('animate__fadeIn animate__slower');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!domain || !tld || tld === '-- Select TLD --') {
      Swal.fire({ icon: "warning", text: "Please enter a domain and select a valid TLD." });
      return;
    }

    const fullDomain = `${domain.trim()}${tld}`;

    Swal.fire({
      title: "Checking domain...",
      text: "Please wait while we check availability.",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const res = await fetch(`https://www.elexdonhost.com/api_elexdonhost/check_domain.php?key=${api_key}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: fullDomain, type: "register" }),
      });

      const data = await res.json();
      console.log(data);

      if (data.available) {
        setResult({ available: true, name: fullDomain });
        Swal.fire({ icon: "success", title: "Domain Available", text: "Great! The domain is available for registration." });
      } else {
        setResult({ available: false, name: fullDomain });
        Swal.fire({ icon: "error", title: "Domain Unavailable", text: "Sorry, that domain is not available." });
      }
    } catch (err) {
      console.error("Domain check error:", err);
      Swal.fire({ icon: "error", title: "Error", text: "There was an error checking the domain. Please try again." });
    }
  };

  return (
    <DomainWrap id="domainsearch">
      <Container>
        <Title ref={titleAnim.ref} className={titleAnim.className}>
          Search for Your Dream Domain
        </Title>

        <Form ref={formAnim.ref} className={formAnim.className} onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Enter domain (e.g. elexdon)"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            required
          />

          <StyledSelect
            required
            value={tld}
            onChange={(e) => setTld(e.target.value)}
          >
            <option value="">-- Select TLD --</option>
            {domainPricings.map((d) => (
              <option key={d.domain} value={d.domain}>{d.domain}</option>
            ))}
          </StyledSelect>

          <Button type="submit">Search</Button>
        </Form>

        <PricingBadge>
          .com ₦11,500 │ .com.ng ₦4,500 │ .ng ₦11,500 │ .org ₦28,000 │ .net ₦30,000 │ .tech ₦11,800
        </PricingBadge>

        {result && (
          <Result
            ref={resultAnim.ref}
            className={resultAnim.className}
            available={result.available}
          >
            {result.available ? (
              <>
                <span>🎉 <strong>{result.name}</strong> is available!</span>
                <Button onClick={() => navigate(`/domainregistercheckout/${result.name}/${domain}/${tld}`)}>
                  Register Now
                </Button>
              </>
            ) : (
              <span>❌ <strong>{result.name}</strong> is already taken. Try another name!</span>
            )}
          </Result>
        )}
      </Container>
    </DomainWrap>
  );
};

export default DomainSearch;