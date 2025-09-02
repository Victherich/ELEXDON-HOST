


// // components/DomainSearch.jsx
// import React, { useState, useRef, useEffect } from 'react';
// import styled from 'styled-components';
// import 'animate.css';
// import domainsearchimg from '../Images/domainsearchimg.jpeg';



// const useAnimateOnScroll = (animationClass) => {
//   const ref = useRef(null);
//   const [isVisible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Optional: only trigger once, or allow retrigger
//         if (entry.isIntersecting) {
//           setVisible(true);
//         }
//       },
//       {
//         // Wait until at least 50% of the element is visible
//         threshold: 0.5,
//         // Pushes the "activation zone" up, so animation doesn't trigger too early at bottom of screen
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
//   padding:20px 0px;
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
//   font-size: 18px;
//   background: ${({ available }) =>
//     available ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)'};
//   color: ${({ available }) => (available ? '#22c55e' : '#ef4444')};
//   padding: 20px;
//   border-radius: 10px;
//   font-weight: bold;
//   border: 1px solid ${({ available }) => (available ? '#22c55e' : '#ef4444')};
// `;

// const DomainSearch = () => {
//   const [domain, setDomain] = useState('');
//   const [result, setResult] = useState(null);

//   const titleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const formAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const resultAnim = useAnimateOnScroll('animate__fadeIn animate__slower');

 

//  const checkDomainAvailability = async () => {
//     if (!form.domain) {
//       Swal.fire({ icon: "warning", text: "Please enter a domain." });
//       return;
//     }
//     if (!form.domaintype) {
//       Swal.fire({ icon: "warning", text: "Please select a domain type." });
//       return;
//     }

//        if (!form.tld) {
//       Swal.fire({ icon: "warning", text: "Please select a TLD." });
//       return;
//     }

   

//     setCheckingDomain(true);
//     setDomainStatus(null);

//     Swal.fire({
//       title: "Checking domain...",
//       text: "Please wait while we check availability.",
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading();
//       },
//     });

//     try {
//       const res = await fetch("https://www.elexdonhost.com/api_elexdonhost/check_domain.php", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ domain: fullDomain, type: form.domaintype }),
//       });

//       const data = await res.json();

//       if (form.domaintype === "register") {
//         if (data.available) {
//           setDomainStatus("available");
//           Swal.fire({
//             icon: "success",
//             title: "Domain Available",
//             text: "Great! The domain is available for registration.",
//           });
//         } else {
//           setDomainStatus("unavailable");
//           Swal.fire({
//             icon: "error",
//             title: "Domain Unavailable",
//             text: "Sorry, that domain is not available for registration.",
//           });
//         }
//       } else if (form.domaintype === "transfer" || form.domaintype === "owndomain") {
//         if (data.available) {
//           // If domain is available, it means NOT registered, so can't transfer/use own domain
//           setDomainStatus("unavailable");
//           Swal.fire({
//             icon: "error",
//             title: "Domain Not Registered",
//             text: "This domain is not registered and cannot be transferred or used as your own.",
//           });
//         } else {
//           setDomainStatus("available");
//           Swal.fire({
//             icon: "success",
//             title: "Domain Registered",
//             text: "The domain is registered and can be transferred or used.",
//           });
//         }
//       } else {
//         setDomainStatus("error");
//         Swal.fire({
//           icon: "error",
//           title: "Error",
//           text: "Invalid domain type selected.",
//         });
//       }
//     } catch (err) {
//       console.error("Domain check error:", err);
//       setDomainStatus("error");
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "There was an error checking the domain. Please try again.",
//       });
//     } finally {
//       setCheckingDomain(false);
//     }
//   };



//   return (
//     <DomainWrap>
//       <Container>
//         <Title ref={titleAnim.ref} className={titleAnim.className}>
//           Search for Your Dream Domain
//         </Title>
//         <Form
//           ref={formAnim.ref}
//           className={formAnim.className}
//           onSubmit=""
//         >
//           <Input
//             type="text"
//             placeholder="Enter domain (e.g. elexdon.com)"
//             value={domain}
//             onChange={(e) => setDomain(e.target.value)}
//           />
//           <Button type="submit">Search</Button>
//         </Form>

//         <Title style={{fontSize:"1rem"}}>
//           .com ₦27,500│.com.ng ₦9,000│.ng ₦17,500│.org ₦30,000│
//         </Title>
//         {result && (
//           <Result
//             ref={resultAnim.ref}
//             className={resultAnim.className}
//             available={result.available}
//           >
//             {result.available ? (
//               <>🎉 <strong>{result.name}</strong> is available!</>
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
import { Navigate, useNavigate } from 'react-router-dom';
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
        threshold: 0.5,
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
  padding: 20px 0px;
  background-image: url(${domainsearchimg});
  background-size: cover;
  background-position: bottom;
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
    background: rgba(255, 255, 255, 0.8);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #2B32B2, #3b82f6, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 12px 20px;
  border-radius: 30px;
  border: none;
  width: 600px;
  font-size: 16px;
  outline: #2B32B2;
  border: 4px solid rgba(0,0,255,0.4);
  background: #eee;
  color: #333;

  @media(max-width:768px){
    width:300px;
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #facc15, #fcd34d);
  color: #000;
  padding: 12px 25px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #facc15, #fde68a);
    transform: scale(1.05);
  }
`;

const Result = styled.div`
  margin-top: 30px;
  // font-size: 18px;
  background: ${({ available }) =>
    available ? 'rgba(34,197,94,0.5)' : 'rgba(239,68,68,0.5)'};
  color: ${({ available }) => (available ? 'white' : 'white')};
  padding: 20px;
  border-radius: 10px;
  font-weight: bold;
  border: 1px solid ${({ available }) => (available ? '#22c55e' : '#ef4444')};
  strong{
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
    font-size:1.2rem;
  }
`;

const DomainSearch = () => {
  const [domain, setDomain] = useState('');
  const [tld, setTld] = useState(null);
  const [domaintype, setDomaintype] = useState('register');
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const {domainPricings}=useContext(Context);

  const titleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const formAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const resultAnim = useAnimateOnScroll('animate__fadeIn animate__slower');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullDomain = `${domain}${tld}`;
    if (!domain) {
      Swal.fire({ icon: "warning", text: "Please enter a domain." });
      return;
    }

    if(!tld){
         Swal.fire({ icon: "warning", text: "Please select a tld" });
      return;
    }

    Swal.fire({
      title: "Checking domain...",
      text: "Please wait while we check availability.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await fetch("https://www.elexdonhost.com/api_elexdonhost/check_domain.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: fullDomain, type: domaintype }),
      });

      const data = await res.json();

      if (domaintype === "register") {
        if (data.available) {
          setResult({ available: true, name: fullDomain });
          Swal.fire({
            icon: "success",
            title: "Domain Available",
            text: "Great! The domain is available for registration.",
          });
        } else {
          setResult({ available: false, name: fullDomain });
          Swal.fire({
            icon: "error",
            title: "Domain Unavailable",
            text: "Sorry, that domain is not available.",
          });
        }
      } else {
        if (data.available) {
          setResult({ available: false, name: fullDomain });
          Swal.fire({
            icon: "error",
            title: "Domain Not Registered",
            text: "This domain cannot be used for transfer or own domain.",
          });
        } else {
          setResult({ available: true, name: fullDomain });
          Swal.fire({
            icon: "success",
            title: "Domain Registered",
            text: "The domain is registered and can be used.",
          });
        }
      }
    } catch (err) {
      console.error("Domain check error:", err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error checking the domain. Please try again.",
      });
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
            placeholder="Enter domain (without TLD) (e.g. elexdon)"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            required
          />

          <select
          required
            style={{
              padding: '12px 20px',
              borderRadius: '30px',
              border: '4px solid rgba(0,0,255,0.4)',
              background: '#eee',
              color: '#333',
              fontSize: '16px'
            }}
            value={tld}
            onChange={(e) => setTld(e.target.value)}
           
          >
           <option>-- Select TLD --</option>

           {domainPricings.map((d)=>(
            <option key={d.domain} value={d.domain}>{d.domain}</option>
           ))}
    {/* <option value=".com">.com</option>
    <option value=".net">.net</option>
    <option value=".org">.org</option>

    <option value=".info">.info</option>
    <option value=".biz">.biz</option>
      <option value=".com.ng">.com.ng</option>
    <option value=".us">.us</option>
      <option value=".ng">.ng</option>
        <option value=".edu.ng">.edu.ng</option>
    <option value=".eu">.eu</option>
    <option value=".sch.ng">.sch.ng</option>
<option value=".uk">.uk</option>
    <option value=".club">.club</option> */}
          </select>

          {/* <select
            style={{
              padding: '12px 20px',
              borderRadius: '30px',
              border: '4px solid rgba(0,0,255,0.4)',
              background: '#eee',
              color: '#333',
              fontSize: '16px'
            }}
            value={domaintype}
            onChange={(e) => setDomaintype(e.target.value)}
          >
            <option value="register">Register</option>
            <option value="transfer">Transfer</option>
            <option value="owndomain">Use Own Domain</option>
          </select> */}

          <Button type="submit">Search</Button>
        </Form>

        <Title style={{ fontSize: "1rem" }}>
          .com ₦27,500│.com.ng ₦9,000│.ng ₦17,500│.org ₦30,000│.net 40000│
        </Title>

        {result && (
          <Result
            ref={resultAnim.ref}
            className={resultAnim.className}
            available={result.available}
          >
            {result.available ? (
              <>🎉 <strong>{result.name}</strong> is available! <Button onClick={()=>navigate(`/domainregistercheckout/${result.name}/${domain}/${tld}`)}>Register</Button></>
            ) : (
              <>❌ <strong>{result.name}</strong> is already taken.</>
            )}
          </Result>
        )}
      </Container>
    </DomainWrap>
  );
};

export default DomainSearch;

