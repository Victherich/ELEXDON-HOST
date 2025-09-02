// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import heroBg from '../Images/vpsimg.jpg'; // Replace with your actual background image path
// import Partners from './Partners';
// import psbg6 from '../Images/psbg6.jpg';
// import Border from './Border';
// import 'animate.css'
// import useAnimateOnScroll from './useAnimateOnScroll';
// import { useNavigate } from 'react-router-dom';

// const Hero = styled.section`
//   background-image: url(${heroBg});
//   background-size: cover;
//   background-position: center;
//   position: relative;
//   padding: 120px 20px;
//   text-align: center;
//   color: white;

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

//  h1 {
//   font-size: 3rem;
//   text-transform: uppercase;
//   text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
// }


//   p {
//     max-width: 700px;
//     margin: 20px auto 0;
//     font-size: 1.2rem;
//   }
// `;

// const Section = styled.section`
//   padding: 60px 20px;
//   text-align: center;
//   background: ${props => (props.dark ? '#0f1115' : '#f8f9fa')};
//   color: ${props => (props.dark ? 'white' : '#1f1f1f')};

//   h2 {
//     font-size: 2.5rem;
//     margin-bottom: 20px;
//     color: ${props => (props.dark ? '#4dabf7' : '#2B32B2')};
//   }
// `;

// const PlanGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 30px;
//   margin-top: 40px;
 
// `;

// const PlanCard = styled.div`
// //   background: #1f1f1f;
//     background: #0f0f1b;
// // background:lightgray;
//   color: white;
//   padding: 30px;
//   border-radius: 12px;
//   box-shadow: 0 4px 16px rgba(0,0,0,0.5);

//   h3 {
//     font-size: 1.5rem;
//     // color: #4dabf7;

//   }

//   p {
//     margin: 10px 0;
//   }

//   .price {
//     font-size: 1.8rem;
//     font-weight: bold;
//     color: #00c896;
//     margin: 15px 0;
//      color: #FFD700;
//   }

//   button {
//     background: #4dabf7;
//     color: white;
//     border: none;
//     padding: 10px 20px;
//     border-radius: 6px;
//     cursor: pointer;
//     transition: 0.3s;


//     &:hover {
//       background: #339af0;
//     }
//   }
// `;

// const FeaturesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   gap: 30px;
//   margin-top: 40px;

//   @media(max-width:428px){
//     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   }
// `;

// const FeatureCard = styled.div`
// //   background: rgba(255,255,255,0.05);
// background:rgba(0,0,0,0.8);
//   border: 1px solid rgba(255,255,255,0.1);
//   padding: 25px;
//   border-radius: 12px;
//   text-align: center;

//   .emoji {
//     font-size: 3rem;
//   }

//   h4 {
//     margin-top: 10px;
//     font-size: 1.2rem;
//   }

//   p {
//     font-size: 0.9rem;
//     margin-top: 8px;
//   }
// `;

// const AddonsGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 30px;
//   justify-content: center;
//   margin-top: 40px;
// `;

// const AddonCard = styled.div`
// //   background: #1f1f1f;
// background:gray;
//   color: white;
//   padding: 25px;
//   border-radius: 12px;
//   width: 300px;
//   text-align: center;

//   .emoji {
//     font-size: 3rem;
//   }

//   p {
//     margin-top: 10px;
//     font-weight: bold;
//   }

//   @media(max-width:884px){
//   width:250px;
//   }
// `;

// const VPSPage = () => {
//     const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
// const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const tldTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const pricingTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const pricingTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const pricingTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const [vpsPlans, setVpsPlans] = useState([]);
// const [loading, setLoading] = useState(true);
// const navigate = useNavigate();






// useEffect(() => {
//   fetch('https://www.elexdonhost.com/api_elexdonhost/get_vps_hosting_products.php') // replace with your actual PHP endpoint
//     .then(res => res.json())
//     .then(data => {
//       if (data && data.products && data.products.product) {
//         const filtered = data.products.product.filter(p => p.type === "server" || p.type === "hostingaccount" || p.type === "reselleraccount");
//         setVpsPlans(filtered);
//       }
//     })
//     .catch(err => console.error("Error fetching VPS plans:", err))
//     .finally(() => setLoading(false));
// }, []);




//   return (
//     <>
//       <Hero>
//         <h1 ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Elexdon Host Virtual Private Servers</h1>
//         <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>You have more Control over your Hosting Environment</p>
//         <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Managed VPS Hosting Elexdon Host is a managed VPS Hosting provider where we take care of all your needs regarding your website. We run our services on cutting edge technology and take support seriously.</p>
//         {/* <button style={{
//           marginTop: '30px',
//           backgroundColor: '#4dabf7',
//           border: 'none',
//           color: 'white',
//           padding: '12px 24px',
//           fontSize: '1.1rem',
//           borderRadius: '8px',
//           cursor: 'pointer'
//         }}>Check Out Elexdon VPS</button> */}
//       </Hero>

//       <Section>
//         <h2>Awesome Plans and Order Now</h2>
//         <p>Choose Which Package Is Best For You</p>
//         {/* <PlanGrid>
//           <PlanCard>
//             <h3>E-solo</h3>
//             <p className="price">₦60,000 /mo</p>
//             <p>4 Core</p>
//             <p>4GB Ram Memory</p>
//             <p>100GB SSD Storage</p>
//             <p>Well optimised</p>
//             <p>Free cPanel License</p>
//             <p>Best Support 24/7</p>
//             <button>Order now</button>
//           </PlanCard>
//           <PlanCard>
//             <h3>E-Team</h3>
//             <p className="price">₦70,000 /mo</p>
//             <p>6 Core</p>
//             <p>12GB Ram Memory</p>
//             <p>150GB SSD Storage</p>
//             <p>Well optimised</p>
//             <p>Free cPanel License</p>
//             <p>Best Support 24/7</p>
//             <button>Order now</button>
//           </PlanCard>
//           <PlanCard>
//             <h3>E-Business</h3>
//             <p className="price">₦80,000 /mo</p>
//             <p>8 Core</p>
//             <p>24GB Ram Memory</p>
//             <p>200GB SSD Storage</p>
//             <p>Well optimised</p>
//             <p>Free cPanel License</p>
//             <p>Best Support 24/7</p>
//             <button>Order now</button>
//           </PlanCard>
//         </PlanGrid> */}


//         <PlanGrid>
//   {loading ? (
//     <p>Loading plans...</p>
//   ) : vpsPlans.length > 0 ? (
//     vpsPlans.map(plan => (
//       <PlanCard key={plan.pid}>
//         <h3>{plan.name}</h3>
//         <p className="price">
//           {plan.pricing?.NGN?.monthly !== "-1.00"
//             ? `₦${parseFloat(plan.pricing.NGN.monthly).toLocaleString()} /mo`
//             : "Price Unavailable"}
//         </p>
//         <div style={{width:"100%"}}>
//           {plan.description
//             .split(/\r\n|\n|\r/)
//             .filter(line => line.trim() !== "")
//             .map((line, index) => (
//               <p key={index} style={{textAlign:"left"}}>🟢 {line}</p>
//             ))}
//         </div>
//         <button
//       onClick={() => {
//     localStorage.setItem("selectedProduct", JSON.stringify(plan));
//     navigate(`/hostingcheckout`);
  
//   }}
//         >Order now</button>
//       </PlanCard>
//     ))
//   ) : (
//     <p>No VPS plans available at the moment.</p>
//   )}
// </PlanGrid>

//       </Section>

//       <Section dark style={{backgroundImage:`url(${psbg6})`, backgroundSize:"cover"}}>
//         <h2 style={{color:'white' }}>VPS Features</h2>
//         <FeaturesGrid>
//           <FeatureCard>
//             <div className="emoji">⚡️</div>
//             <h4>Up To 20X Faster Servers</h4>
//             <p>Enjoy the latest speed technologies such as Solid State Drive RAID-10 Storage Array’s, PHP7, Caching, CDN & more.</p>
//           </FeatureCard>
//           <FeatureCard>
//             <div className="emoji">⏱️</div>
//             <h4>99.9% Uptime Guarantee</h4>
//             <p>All of our hosting plans are built on a robust infrastructure which guarantee a 99.9% uptime</p>
//           </FeatureCard>
//           <FeatureCard>
//             <div className="emoji">🖥️</div>
//             <h4>Supermicro Server Hardware</h4>
//             <p>Our Supermicro rackmount-based servers are designed for continuous high performance in a datacenter environment.</p>
//           </FeatureCard>
//           <FeatureCard>
//             <div className="emoji">🌐</div>
//             <h4>Our Optimized Network</h4>
//             <p>We operate Cisco/Brocade-powered network. We have connectivity to Level3, Highwinds, HE, Cogent and Integra.</p>
//           </FeatureCard>
//           <FeatureCard>
//             <div className="emoji">🛠️</div>
//             <h4>Server Management</h4>
//             <p>We offer a range of management options to suit your needs. Choose from self-managed, managed or fully managed.</p>
//           </FeatureCard>
//           <FeatureCard>
//             <div className="emoji">🏢</div>
//             <h4>Tier IV Phoenix Datacenter</h4>
//             <p>All Hostiko dedicated servers are hosted in our Tier IV Phoenix datacenter. power, network, climate and security systems.</p>
//           </FeatureCard>
//         </FeaturesGrid>
//       </Section>
//       <Border/>
// <Partners/>
//       <Section>
//         <h2>Supercharge Your MySQL Database</h2>
//         <p>
//           Enhance the performance of any managed VPS plan by selecting a MySQL VPS during checkout. This optional add-on service includes an isolated managed VPS optimized to deliver peak MySQL performance. Dedicated resources mean quicker page loads — and happier users! Get started with a one-week free trial.
//         </p>
//         <button style={{
//           marginTop: '20px',
//           backgroundColor: '#4dabf7',
//           border: 'none',
//           color: 'white',
//           padding: '10px 20px',
//           fontSize: '1rem',
//           borderRadius: '6px',
//           cursor: 'pointer'
//         }}>Learn More</button>
//       </Section>
// <Border/>
//       <Section >
//         <h2>VPS Addons</h2>
//         <p>We offer add-ons on VPS that complement and increase performance of your server as per your business requirements.</p>
//         <AddonsGrid>
//           <AddonCard>
//             <div className="emoji">📶</div>
//             <p>Additional Dedicated IP<br/> <strong style={{fontSize:"2rem", color:' #FFD700'}}>$5</strong></p>
//           </AddonCard>
//           <AddonCard>
//             <div className="emoji">💾</div>
//             <p>RAM Upgrade <br/> <strong style={{fontSize:"2rem", color:' #FFD700'}}>$15</strong></p>
//           </AddonCard>
//           <AddonCard>
//             <div className="emoji">⚙️</div>
//             <p>Additional CPU <br/> <strong style={{fontSize:"2rem", color:' #FFD700'}}>$25</strong></p>
//           </AddonCard>
//           <AddonCard>
//             <div className="emoji">🗄️</div>
//             <p>Diskspace 10GB <br/> <strong style={{fontSize:"2rem", color:' #FFD700'}}>$12</strong></p>
//           </AddonCard>
//           <AddonCard>
//             <div className="emoji">🌐</div>
//             <p>Bandwidth 100GB <br/> <strong style={{fontSize:"2rem", color:' #FFD700'}}>$11</strong></p>
//           </AddonCard>
//           <AddonCard>
//             <div className="emoji">🔧</div>
//             <p>Server Full Management <br/> <strong style={{fontSize:"2rem", color:' #FFD700'}}>$19</strong></p>
//           </AddonCard>
//         </AddonsGrid>
//       </Section>
//       <Border/>
//     </>
//   );
// };

// export default VPSPage;











import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import heroBg from '../Images/vpsimg.jpg'; // Replace with your actual background image path
import Partners from './Partners';
import psbg6 from '../Images/psbg6.jpg';
import Border from './Border';
import 'animate.css';
import useAnimateOnScroll from './useAnimateOnScroll';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// === Styled Components ===
const Hero = styled.section`
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 120px 20px;
  text-align: center;
  color: white;

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

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
  }

  p {
    max-width: 700px;
    margin: 20px auto 0;
    font-size: 1.2rem;
  }
`;

const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: ${props => (props.dark ? '#0f1115' : '#f8f9fa')};
  color: ${props => (props.dark ? 'white' : '#1f1f1f')};

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: ${props => (props.dark ? '#4dabf7' : '#2B32B2')};
  }
`;

const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const PlanCard = styled.div`
  background: #0f0f1b;
  color: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin: 10px 0;
  }

  .price {
    font-size: 1.8rem;
    font-weight: bold;
    color: #FFD700;
    margin: 15px 0;
  }

  button {
    background: #4dabf7;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
    margin-top: 15px;

    &:hover {
      background: #339af0;
    }
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, min-content);
  justify-content: center;
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 428px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const FeatureCard = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 25px;
  border-radius: 12px;
  text-align: center;

  .emoji {
    font-size: 3rem;
  }

  h4 {
    margin-top: 10px;
    font-size: 1.2rem;
  }

  p {
    font-size: 0.9rem;
    margin-top: 8px;
  }
`;

const AddonsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 40px;
`;

const AddonCard = styled.div`
  background: gray;
  color: white;
  padding: 25px;
  border-radius: 12px;
  width: 300px;
  text-align: center;

  .emoji {
    font-size: 3rem;
  }

  p {
    margin-top: 10px;
    font-weight: bold;
  }

  @media (max-width: 884px) {
    width: 250px;
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
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  min-height: 250px;
  animation: ${pulse} 1.5s infinite ease-in-out;
  margin-top: 40px;
`;

const VPSPage = () => {
  const [vpsPlans, setVpsPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError('');

    fetch('https://www.elexdonhost.com/api_elexdonhost/get_vps_hosting_products.php')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (data && data.products && data.products.product && data.products.product.length > 0) {
          const filtered = data.products.product.filter(p => p.type === "server" || p.type === "hostingaccount" || p.type === "reselleraccount");
          setVpsPlans(filtered);
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Plans loaded!',
            showConfirmButton: false,
            timer: 2000,
          });
        } else {
          setError('No VPS plans were found.');
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
      .catch(err => {
        console.error("Error fetching VPS plans:", err);
        setError('Failed to fetch VPS plans. Please try again later.');
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
    <>
      <Hero>
        <h1 ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Elexdon Host Virtual Private Servers</h1>
        <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>You have more Control over your Hosting Environment</p>
        <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Managed VPS Hosting Elexdon Host is a managed VPS Hosting provider where we take care of all your needs regarding your website. We run our services on cutting edge technology and take support seriously.</p>
      </Hero>

      <Section>
        <h2>Awesome Plans and Order Now</h2>
        <p>Choose Which Package Is Best For You</p>
        <PlanGrid>
          {loading && Array(3).fill().map((_, i) => <SkeletonCard key={i} />)}

          {!loading && error && (
            <p style={{ textAlign: 'center', width: '100%', gridColumn: "1 / -1", color: "#888" }}>
              🚧 {error}
            </p>
          )}

          {!loading && !error && vpsPlans.map(plan => (
            <PlanCard key={plan.pid}>
              <h3>{plan.name}</h3>
              <p className="price">
                {plan.pricing?.NGN?.monthly !== "-1.00"
                  ? `₦${parseFloat(plan.pricing.NGN.monthly).toLocaleString()} /mo`
                  : "Price Unavailable"}
              </p>
              <div style={{ width: "100%" }}>
                {plan.description
                  .split(/\r\n|\n|\r/)
                  .filter(line => line.trim() !== "")
                  .map((line, index) => (
                    <p key={index} style={{ textAlign: "left" }}>🟢 {line}</p>
                  ))}
              </div>
              <button
                onClick={() => {
                  localStorage.setItem("selectedProduct", JSON.stringify(plan));
                  navigate(`/hostingcheckout`);
                }}
              >Order now</button>
            </PlanCard>
          ))}
        </PlanGrid>
      </Section>

      <Section dark style={{ backgroundImage: `url(${psbg6})`, backgroundSize: "cover" }}>
        <h2 style={{ color: 'white' }}>VPS Features</h2>
        <FeaturesGrid>
          <FeatureCard>
            <div className="emoji">⚡️</div>
            <h4>Up To 20X Faster Servers</h4>
            <p>Enjoy the latest speed technologies such as Solid State Drive RAID-10 Storage Array’s, PHP7, Caching, CDN & more.</p>
          </FeatureCard>
          <FeatureCard>
            <div className="emoji">⏱️</div>
            <h4>99.9% Uptime Guarantee</h4>
            <p>All of our hosting plans are built on a robust infrastructure which guarantee a 99.9% uptime</p>
          </FeatureCard>
          <FeatureCard>
            <div className="emoji">🖥️</div>
            <h4>Supermicro Server Hardware</h4>
            <p>Our Supermicro rackmount-based servers are designed for continuous high performance in a datacenter environment.</p>
          </FeatureCard>
          <FeatureCard>
            <div className="emoji">🌐</div>
            <h4>Our Optimized Network</h4>
            <p>We operate Cisco/Brocade-powered network. We have connectivity to Level3, Highwinds, HE, Cogent and Integra.</p>
          </FeatureCard>
          <FeatureCard>
            <div className="emoji">🛠️</div>
            <h4>Server Management</h4>
            <p>We offer a range of management options to suit your needs. Choose from self-managed, managed or fully managed.</p>
          </FeatureCard>
          <FeatureCard>
            <div className="emoji">🏢</div>
            <h4>Tier IV Phoenix Datacenter</h4>
            <p>All Hostiko dedicated servers are hosted in our Tier IV Phoenix datacenter. power, network, climate and security systems.</p>
          </FeatureCard>
        </FeaturesGrid>
      </Section>
      <Border />
      <Partners />
      <Section>
        <h2>Supercharge Your MySQL Database</h2>
        <p>
          Enhance the performance of any managed VPS plan by selecting a MySQL VPS during checkout. This optional add-on service includes an isolated managed VPS optimized to deliver peak MySQL performance. Dedicated resources mean quicker page loads — and happier users! Get started with a one-week free trial.
        </p>
        <button style={{
          marginTop: '20px',
          backgroundColor: '#4dabf7',
          border: 'none',
          color: 'white',
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '6px',
          cursor: 'pointer'
        }}>Learn More</button>
      </Section>
      <Border />
      <Section>
        <h2>VPS Addons</h2>
        <p>We offer add-ons on VPS that complement and increase performance of your server as per your business requirements.</p>
        <AddonsGrid>
          <AddonCard>
            <div className="emoji">📶</div>
            <p>Additional Dedicated IP<br /> <strong style={{ fontSize: "2rem", color: ' #FFD700' }}>$5</strong></p>
          </AddonCard>
          <AddonCard>
            <div className="emoji">💾</div>
            <p>RAM Upgrade <br /> <strong style={{ fontSize: "2rem", color: ' #FFD700' }}>$15</strong></p>
          </AddonCard>
          <AddonCard>
            <div className="emoji">⚙️</div>
            <p>Additional CPU <br /> <strong style={{ fontSize: "2rem", color: ' #FFD700' }}>$25</strong></p>
          </AddonCard>
          <AddonCard>
            <div className="emoji">🗄️</div>
            <p>Diskspace 10GB <br /> <strong style={{ fontSize: "2rem", color: ' #FFD700' }}>$12</strong></p>
          </AddonCard>
          <AddonCard>
            <div className="emoji">🌐</div>
            <p>Bandwidth 100GB <br /> <strong style={{ fontSize: "2rem", color: ' #FFD700' }}>$11</strong></p>
          </AddonCard>
          <AddonCard>
            <div className="emoji">🔧</div>
            <p>Server Full Management <br /> <strong style={{ fontSize: "2rem", color: ' #FFD700' }}>$19</strong></p>
          </AddonCard>
        </AddonsGrid>
      </Section>
      <Border />
    </>
  );
};

export default VPSPage;
