
// import React from 'react';
// import styled from 'styled-components';
// import transferHero from '../Images/domaintransferimg.jpg'; // Replace with actual image path

// const Hero = styled.section`
//   background-image: url(${transferHero});
//   background-size: cover;
//   background-position: center;
//   color: white;
//   padding: 120px 20px;
//   text-align: center;
//   position: relative;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//     z-index: 0;
//   }

//   > * {
//     position: relative;
//     z-index: 1;
//   }
// `;

// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   margin-bottom: 20px;
//   text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
//     text-transform:uppercase;
// `;

// const Section = styled.section`
//   padding: 60px 20px;
//   max-width: 1100px;
//   margin: auto;
//   text-align: center;

//   h2{
//     color:#2B32B2;
//     font-size:2rem;
//   }
// `;

// const Input = styled.input`
//   padding: 12px;
//   margin: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   width: 250px;
// `;

// const Button = styled.button`
//   background-color: #007bff;
//   color: white;
//   padding: 12px 25px;
//   margin-top: 15px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1rem;
//   transition: background 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 30px;
//   margin-top: 40px;
// `;

// const FeatureCard = styled.div`
//   background: #f8f9fa;
//   padding: 25px;
//   border-radius: 10px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
//   text-align: left;

//   h3 {
//     font-size: 1.25rem;
//     color: #007bff;
//   }

//   p {
//     font-size: 0.95rem;
//     color: #333;
//     margin-top: 10px;
//   }
// `;

// const DomainTransferPage = () => {
//   return (
//     <>
//       <Hero>
//         <HeroTitle>Elexdon Host Domain Transfer</HeroTitle>
//         <p>Transfer now to extend your domain by 1 year!*</p>
//       </Hero>

//       <Section>
//         <h2>Single Domain Transfer</h2>
//         <Input placeholder="example.com" />
//         <Input placeholder="Epp Code / Auth Code" />
//         <br />
//         <Button>Add to Cart</Button>
//         <p style={{ fontSize: '0.85rem', marginTop: '10px' }}>* Excludes certain TLDs and recently renewed domains</p>
//       </Section>

//       <Section>
//         <h2>Network Features</h2>
//         <Grid>
//           <FeatureCard>
//             <h3>Network Infrastructure</h3>
//             <p>
//               Over 130GBPS of resilient diverse connectivity from premium providers.
//               100% Juniper core routing, HP switching, dual rack drops, real-time monitoring.
//             </p>
//           </FeatureCard>
//           <FeatureCard>
//             <h3>Network Resilience</h3>
//             <p>
//               Redundant fibre entry, multiple data centres, dual cabling—ensuring optimal uptime.
//             </p>
//           </FeatureCard>
//           <FeatureCard>
//             <h3>Connectivity Providers</h3>
//             <p>
//               Blend of NTT, TalkTalk, Level 3, LINX, Virgin Media, and more — only 50% network capacity used.
//             </p>
//           </FeatureCard>
//           <FeatureCard>
//             <h3>LINX Peering</h3>
//             <p>
//               Access to major networks including AT&T, BT, Google, BBC, Yahoo, through the LINX exchange.
//             </p>
//           </FeatureCard>
//         </Grid>
//       </Section>
//     </>
//   );
// };

// export default DomainTransferPage;




import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import transferHero from '../Images/domaintransferimg.jpg'; // Replace with actual image path
import useAnimateOnScroll from './useAnimateOnScroll';
import 'animate.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import DomainTransferInstructions from './DomainTransferInstructions';
import { Context } from './Context';

const Hero = styled.section`
  background-image: url(${transferHero});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 120px 20px;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
`;

const BodyWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, #e0eafc, #cfdef3);
  padding: 80px 20px;
  z-index: 0;
`;

const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.4;
  z-index: 0;
  filter: blur(100px);
  transform: rotate(${props => props.rotate || '0deg'});
  animation: float 10s ease-in-out infinite alternate;

  @keyframes float {
    from {
      transform: translateY(0) rotate(${props => props.rotate || '0deg'});
    }
    to {
      transform: translateY(-30px) rotate(${props => props.rotate || '0deg'});
    }
  }
`;

const Blob1 = styled(Blob)`
  top: -150px;
  left: -150px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle at center, #00d1ff, #007bff);
`;

const Blob2 = styled(Blob)`
  bottom: -120px;
  right: -120px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle at center, #ff6ec4, #7873f5);
`;

const Blob3 = styled(Blob)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: radial-gradient(circle at center, #00ffb3, #0066ff);
  opacity: 0.2;
`;

const Section = styled.section`
  padding: 60px 20px;
  max-width: 1100px;
  margin: auto;
  text-align: center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  h2 {
    color: #2B32B2;
    font-size: 2rem;
  }
`;

const Input = styled.input`
  padding: 12px;
  margin: 0px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 25px;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const FeatureCard = styled.div`
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: left;

  h3 {
    font-size: 1.25rem;
    color: #007bff;
  }

  p {
    font-size: 0.95rem;
    color: #333;
    margin-top: 10px;
  }
`;


const Select = styled.select`
  padding: 5px;
  // width: 100%;
  // border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
`;

const Div = styled.div`
  p{
    transform:translate(0%, 80%);
    color:#007bff;
    font-weight:bold;
  }
`


const DomainTransferPage = () => {
  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const tldTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const pricingTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const pricingTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const pricingTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');


  const [domain, setDomain] = useState("");
  const [tld, setTld]=useState('');
  const [eppCode, setEppCode] = useState("");
  const navigate = useNavigate();
  const domaintype = 'register'

  const {domainPricings} = useContext(Context);

  const fullDomain = domain+tld

  // const type = 'register'


// const handleProceed = async () => {
//   if (!domain || !eppCode) {
//     Swal.fire({
//       icon: 'warning',
//       title: 'Missing input',
//       text: 'Please enter both domain and EPP code.',
//     });
//     return;
//   }

//   Swal.fire({
//     title: 'Checking domain...',
//     allowOutsideClick: false,
//     didOpen: () => Swal.showLoading(),
//   });

//   try {
//     const res = await fetch("https://www.elexdonhost.com/api_elexdonhost/check_domain.php", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ domain, type: "transfer" }),
//     });
//     const data = await res.json();

//     Swal.close();

//     if (data.available) {  // <-- check 'available' from backend
//       Swal.fire({
//         icon: 'success',
//         title: 'Domain verified',
//         text: 'You can proceed with the transfer.',
//         timer: 1500,
//         showConfirmButton: false,
//       }).then(() => {
//         navigate(`/domaintransfercheckout/${encodeURIComponent(domain)}/${encodeURIComponent(eppCode)}`);
//       });
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'Domain check failed',
//         text: data.error || 'Domain is not eligible for transfer.',
//       });
//     }
//   } catch (err) {
//     Swal.close();
//     Swal.fire({
//       icon: 'error',
//       title: 'Network error',
//       text: 'Failed to check domain. Please try again later.',
//     });
//     console.error(err);
//   }
// };


  const checkDomainAvailability = async () => {
    if (!domain) {
      Swal.fire({ icon: "warning", text: "Please enter a domain." });
      return;
    }


     if (!eppCode) {
      Swal.fire({ icon: "warning", text: "Please enter a epp code." });
      return;
    }


    Swal.fire({
      title: "Checking domain...",
      text: "Please wait while we check the domain.",
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
          // setDomainStatus("available");
          Swal.fire({
            // icon: "success",
            // title: "Domain Available",
            text: " The domain is not yet registered.",
          });
        } else {
          // setDomainStatus("unavailable");
          Swal.fire({
            // icon: "error",
            // title: "Domain Unavailable",
            text: "The domain is registered.",
            confirmButtonText:"Proceed to transfer",
            showCancelButton:true,
          }).then((result)=>{
            if(result.isConfirmed){
              navigate(`/domaintransfercheckout/${domain}${tld}/${eppCode}/${domain}/${tld}`)
            }
          })
          
          ;
        }
      } else if (domaintype === "transfer" || domaintype === "owndomain") {
        if (data.available) {
        
          Swal.fire({
            icon: "error",
            title: "Domain Not Registered",
            text: "This domain is not registered and cannot be transferred or used as your own.",
          });
        } else {
          // setDomainStatus("available");
          Swal.fire({
            icon: "success",
            title: "Domain Registered",
            text: "The domain is registered and can be transferred or used.",
          });
        }
      } else {
        // setDomainStatus("error");
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Invalid domain type selected.",
        });
      }
    } catch (err) {
      console.error("Domain check error:", err);
      // setDomainStatus("error");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "There was an error checking the domain. Please try again.",
      });
    } finally {
      // setCheckingDomain(false);
    }
  };




//   const checkDomainAvailability = async () => {
//   // Input validation on the frontend
//   if (!domain || typeof domain !== 'string' || domain.trim() === '') {
//     Swal.fire({
//       icon: "warning",
//       title: "Missing Domain",
//       text: "Please enter a valid domain name to check.",
//     });
//     return null; // Indicate failure
//   }

//   if (!['register', 'transfer', 'owndomain'].includes(type)) {
//     Swal.fire({
//       icon: "error",
//       title: "Invalid Request Type",
//       text: "The domain check type is invalid. Please select 'Register', 'Transfer', or 'Use My Own Domain'.",
//     });
//     return null; // Indicate failure
//   }

//   // Show loading indicator
//   Swal.fire({
//     title: "Checking Domain...",
//     html: `<span>Checking availability for <strong>${domain}</strong>...</span>`,
//     allowOutsideClick: false,
//     didOpen: () => {
//       Swal.showLoading();
//     },
//   });

//   try {
//     const response = await fetch("https://www.elexdonhost.com/api_elexdonhost/check_domain.php", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ domain: domain.trim(), type: type }),
//     });

//     // Check for HTTP errors (e.g., 404, 500)
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
// console.log(data)
//     // Handle potential errors from the PHP script
//     if (data.error) {
//       Swal.fire({
//         icon: "error",
//         title: "API Error",
//         text: `An error occurred: ${data.error}. Please try again.`,
//       });
//       return null;
//     }

//     // Process the 'available' status based on the check type
//     let isSuitable = false;
//     let title = '';
//     let text = '';
//     let icon = '';

//     if (type === "register") {
//       isSuitable = data.available;
//       if (isSuitable) {
//         // icon = "success";
//         // title = "Domain Available!";
//         text = `The domain '${domain}' is not yet registered.`;
//       } else {
//         // icon = "error";
//         // title = "Domain Unavailable";
//         text = ` ${domain}' is already registered.`;
//       }
//     }
    
//     // else if (type === "transfer" || type === "owndomain") {
//     //   // For transfer/own domain, 'available' should be false (meaning it's registered)
//     //   isSuitable = !data.available;
//     //   if (isSuitable) {
//     //     icon = "success";
//     //     title = "Domain Registered!";
//     //     text = `Good! The domain '${domain}' is registered and can be ${type === 'transfer' ? 'transferred' : 'used'}.`;
//     //   } else {
//     //     icon = "error";
//     //     title = "Domain Not Registered";
//     //     text = `The domain '${domain}' is not registered and cannot be ${type === 'transfer' ? 'transferred' : 'used as your own'}.`;
//     //   }
//     // }

//     Swal.fire({
//       icon: icon,
//       title: title,
//       text: text,
//     });

//     return isSuitable;

//   } catch (error) {
//     console.error("Frontend domain check error:", error); // Log the error for debugging
//     Swal.fire({
//       icon: "error",
//       title: "Network Error",
//       text: "Could not connect to the domain check service. Please check your internet connection or try again later.",
//     });
//     return null; // Indicate failure
//   }
// };




  return (
    <>
      <Hero>
        <HeroTitle ref={heroTitleAnim.ref} className={heroTitleAnim.className}>
          Elexdon Host Domain Transfer
        </HeroTitle>
        <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
          Transfer now to extend your domain by 1 year!*
        </p>
      </Hero>

      <BodyWrapper>
        <Blob1 />
        <Blob2 />
        <Blob3 />


<DomainTransferInstructions/>

        <Section>
          <h2 ref={tldTitleAnim.ref} className={tldTitleAnim.className}>Single Domain Transfer</h2>
<Div>


          <p>Enter domain without tld</p>
         <Input placeholder="eg: elexdonhost" value={domain} onChange={(e) => setDomain(e.target.value)} />
  </Div>        

<Div>
          <p>Select tld</p>
          <Select
                name="tld"
                required
                onChange={(e)=>setTld(e.target.value)}
                value={tld}

              >
                <option >-- Select tld --</option>
                {domainPricings.map((d)=>(
                  <option key={d.domain} value={d.domain}>{d.domain}</option>
                ))}
              </Select>
</Div>

<Div>
              <p>Enter Epp code / Auth code</p>
      <Input placeholder="EPP Code / Auth Code" value={eppCode} onChange={(e) => setEppCode(e.target.value)} />
 </Div>    
          <br />
          <Button onClick={checkDomainAvailability}>Check</Button>
          <p style={{ fontSize: '0.85rem', marginTop: '10px' }}>
            * Excludes certain TLDs and recently renewed domains
          </p>
        </Section>

        <Section>
          <h2>Network Features</h2>
          <Grid>
            <FeatureCard ref={pricingTitle1.ref} className={pricingTitle1.className}>
              <h3>Network Infrastructure</h3>
              <p>
                Over 130GBPS of resilient diverse connectivity from premium providers.
                100% Juniper core routing, HP switching, dual rack drops, real-time monitoring.
              </p>
            </FeatureCard>
            <FeatureCard ref={pricingTitle2.ref} className={pricingTitle2.className}>
              <h3>Network Resilience</h3>
              <p>
                Redundant fibre entry, multiple data centres, dual cabling—ensuring optimal uptime.
              </p>
            </FeatureCard>
            <FeatureCard ref={pricingTitle3.ref} className={pricingTitle3.className}>
              <h3>Connectivity Providers</h3>
              <p>
                Blend of NTT, TalkTalk, Level 3, LINX, Virgin Media, and more — only 50% network capacity used.
              </p>
            </FeatureCard>
            <FeatureCard>
              <h3>LINX Peering</h3>
              <p>
                Access to major networks including AT&T, BT, Google, BBC, Yahoo, through the LINX exchange.
              </p>
            </FeatureCard>
          </Grid>
        </Section>
      </BodyWrapper>
    </>
  );
};

export default DomainTransferPage;
