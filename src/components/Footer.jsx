// // // components/Footer.jsx
// // import React from 'react';
// // import styled from 'styled-components';
// // import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// // const FooterWrapper = styled.footer`
// //   background: #0d1b2a;
// //   color: #ffffff;
// //   padding-top: 80px;
// //   position: relative;
// // `;

// // const CurvedTop = styled.div`
// //   background: #1b263b;
// //   height: 100px;
// //   border-top-left-radius: 100% 50px;
// //   border-top-right-radius: 100% 50px;
// //   position: absolute;
// //   top: -100px;
// //   left: 0;
// //   width: 100%;
// // `;

// // const FooterContent = styled.div`
// //   max-width: 1200px;
// //   margin: auto;
// //   padding: 40px 20px;
// //   display: grid;
// //   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
// //   gap: 30px;

// //   @media (max-width: 768px) {
// //     text-align: center;
// //     grid-template-columns: 1fr;
// //   }
// // `;

// // const Section = styled.div``;

// // const Title = styled.h4`
// //   margin-bottom: 16px;
// //   font-size: 18px;
// //   color: #00d1ff;
// // `;

// // const Link = styled.a`
// //   display: block;
// //   color: #ddd;
// //   margin: 8px 0;
// //   text-decoration: none;
// //   font-size: 15px;
// //   transition: 0.3s;

// //   &:hover {
// //     color: #00d1ff;
// //   }
// // `;

// // const SocialIcons = styled.div`
// //   display: flex;
// //   gap: 15px;
// //   margin-top: 15px;
// //   color: #ffffff;

// //   a {
// //     color: #00d1ff;
// //     font-size: 20px;
// //     transition: 0.3s;

// //     &:hover {
// //       color: #fff;
// //     }
// //   }
// // `;

// // const Newsletter = styled.div`
// //   input {
// //     width: 100%;
// //     padding: 10px;
// //     border: none;
// //     margin-top: 10px;
// //     border-radius: 5px;
// //     outline: none;
// //   }

// //   button {
// //     margin-top: 10px;
// //     padding: 10px;
// //     background: #00d1ff;
// //     color: #000;
// //     border: none;
// //     border-radius: 5px;
// //     cursor: pointer;
// //     font-weight: bold;
// //     transition: 0.3s;

// //     &:hover {
// //       background: #ffffff;
// //       color: #0d1b2a;
// //     }
// //   }
// // `;

// // const Copyright = styled.div`
// //   background: #1b263b;
// //   text-align: center;
// //   padding: 15px;
// //   font-size: 14px;
// //   color: #aaa;
// // `;









// // const Footer = () => {
// //   return (
// //     <FooterWrapper>
// //       <CurvedTop />
// //       <FooterContent>
// //         <Section>
// //           <Title>ELEXDON HOST</Title>
// //           <p>Secure. Scalable. Simple Hosting for Everyone.</p>
// //           <SocialIcons>
// //             <a href="#"><FaFacebookF /></a>
// //             <a href="#"><FaTwitter /></a>
// //             <a href="#"><FaInstagram /></a>
// //             <a href="#"><FaLinkedin /></a>
// //           </SocialIcons>
// //         </Section>

// //         <Section>
// //           <Title>Company</Title>
// //           <Link href="#">About Us</Link>
// //           <Link href="#">Blog</Link>
// //           <Link href="#">Careers</Link>
// //           <Link href="#">Partners</Link>
// //         </Section>

// //         <Section>
// //           <Title>Hosting</Title>
// //           <Link href="#">Shared Hosting</Link>
// //           <Link href="#">VPS Hosting</Link>
// //           <Link href="#">Dedicated Servers</Link>
// //           <Link href="#">Reseller Hosting</Link>
// //         </Section>

// //         <Section>
// //           <Title>Domains</Title>
// //           <Link href="#">Register Domain</Link>
// //           <Link href="#">Transfer Domain</Link>
// //           <Link href="#">WHOIS Lookup</Link>
// //           <Link href="#">Free SSL</Link>
// //         </Section>

// //         <Section>
// //           <Title>Support</Title>
// //           <Link href="#">Contact Us</Link>
// //           <Link href="#">Knowledgebase</Link>
// //           <Link href="#">Privacy Policy</Link>
// //           <Link href="#">Refund Policy</Link>
// //           <Link href="#">Terms of Service</Link>
// //         </Section>

// //         <Section>
// //           <Title>Newsletter</Title>
// //           <Newsletter>
// //             <input type="email" placeholder="Enter your email" />
// //             <button>Subscribe</button>
// //           </Newsletter>
// //         </Section>
// //       </FooterContent>

// //       <Copyright>
// //         &copy; {new Date().getFullYear()} ELEXDON HOST. All rights reserved.
// //       </Copyright>
// //     </FooterWrapper>
// //   );
// // };

// // export default Footer;





// import React from 'react';
// import styled from 'styled-components';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// const FooterWrapper = styled.footer`
//   background: #4b0082;
//   color: #fdfdfd;
//   padding-top: 80px;
//   position: relative;
// `;

// const CurvedTop = styled.div`
//   background: #5d3a9b;
//   height: 100px;
//   border-top-left-radius: 100% 50px;
//   border-top-right-radius: 100% 50px;
//   position: absolute;
//   top: -100px;
//   left: 0;
//   width: 100%;
// `;

// const FooterContent = styled.div`
//   max-width: 1200px;
//   margin: auto;
//   padding: 40px 20px;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
//   gap: 30px;

//   @media (max-width: 768px) {
//     text-align: center;
//     grid-template-columns: 1fr;
//   }
// `;

// const Section = styled.div``;

// const Title = styled.h4`
//   margin-bottom: 16px;
//   font-size: 18px;
//   color: #ffd700;
// `;

// const Link = styled.a`
//   display: block;
//   color: #fdfdfd;
//   margin: 8px 0;
//   text-decoration: none;
//   font-size: 15px;
//   transition: 0.3s;

//   &:hover {
//     color: #ffd700;
//   }
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   gap: 15px;
//   margin-top: 15px;

//   a {
//     color: #ffd700;
//     font-size: 20px;
//     transition: 0.3s;

//     &:hover {
//       color: #fff5b7;
//     }
//   }
// `;

// const Newsletter = styled.div`
//   input {
//     width: 100%;
//     padding: 10px;
//     border: none;
//     margin-top: 10px;
//     border-radius: 5px;
//     outline: none;
//   }

//   button {
//     margin-top: 10px;
//     padding: 10px;
//     background: #ffd700;
//     color: #4b0082;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     font-weight: bold;
//     transition: 0.3s;

//     &:hover {
//       background: #fff5b7;
//       color: #4b0082;
//     }
//   }
// `;

// const Copyright = styled.div`
//   background: #5d3a9b;
//   text-align: center;
//   padding: 30px 20px 20px;
//   font-size: 14px;
//   color: #f5e6ff;
// `;

// const Footer = () => {
//   return (
//     <FooterWrapper>
//       <CurvedTop />
//       <FooterContent>
//         <Section>
//           <Title>ELEXDON HOST</Title>
//           <p>Secure. Scalable. Simple Hosting for Everyone.</p>
//           <SocialIcons>
//             <a href="#"><FaFacebookF /></a>
//             <a href="#"><FaTwitter /></a>
//             <a href="#"><FaInstagram /></a>
//             <a href="#"><FaLinkedin /></a>
//           </SocialIcons>
//         </Section>

//         <Section>
//           <Title>Company</Title>
//           <Link href="#">About Us</Link>
//           <Link href="#">Blog</Link>
//           <Link href="#">Careers</Link>
//           <Link href="#">Partners</Link>
//         </Section>

//         <Section>
//           <Title>Hosting</Title>
//           <Link href="#">Shared Hosting</Link>
//           <Link href="#">VPS Hosting</Link>
//           <Link href="#">Dedicated Servers</Link>
//           <Link href="#">Reseller Hosting</Link>
//         </Section>

//         <Section>
//           <Title>Domains</Title>
//           <Link href="#">Register Domain</Link>
//           <Link href="#">Transfer Domain</Link>
//           <Link href="#">WHOIS Lookup</Link>
//           <Link href="#">Free SSL</Link>
//         </Section>

//         <Section>
//           <Title>Support</Title>
//           <Link href="#">Contact Us</Link>
//           <Link href="#">Knowledgebase</Link>
//           <Link href="#">Privacy Policy</Link>
//           <Link href="#">Refund Policy</Link>
//           <Link href="#">Terms of Service</Link>
//         </Section>

//         <Section>
//           <Title>Newsletter</Title>
//           <Newsletter>
//             <input type="email" placeholder="Enter your email" />
//             <button>Subscribe</button>
//           </Newsletter>
//         </Section>
//       </FooterContent>

//       <Copyright>
//         &copy; {new Date().getFullYear()} <span style={{ color: '#ffd700' }}>ELEXDON HOST</span>. All rights reserved.
//       </Copyright>
//     </FooterWrapper>
//   );
// };

// export default Footer;





// components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../Images/ELogo.png'
import logo2 from '../Images/logo4.jpeg';
import { useNavigate } from 'react-router-dom';


const FooterWrapper = styled.footer`
position:relative;
//   background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
//   color: #f5f5f5;
//   padding-top: 80px;
  position: relative;
  background: #303D72;
//   background: linear-gradient(135deg, #3F689D,  #303D72);
background: #1488CC;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`;

const CurvedTop = styled.div`
  background: #1e1e2f;
  height: 100px;
  border-top-left-radius: 100% 50px;
  border-top-right-radius: 100% 50px;
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
`;

const TopBorder = styled.div`
height:50px;
);
background-size: 400% 400%;
animation: goldGlow 15s ease infinite;
background: #12c2e9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


@keyframes goldGlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`

const FooterContent = styled.div`
  width:100%;
//   margin: auto;
  padding: 20px 0px;
 
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:flex-start;
  gap:20px;
  

  border-radius:400px 0px 500px 0px;
//   background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
// background:#E6E6FF;
// background:rgba(255,255,255,1);
background:#E4E9F1;


@media (max-width: 1279px) {
    border-radius:0px 0px 0px 0px;
  }

  @media (max-width: 768px) {
    text-align: center;
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div`
img{
width:100px;
}
width:150px;

p{
font-size:0.9rem;
}
`;

const SectionN = styled.div`
position:absolute;
 left:75%;
  top:70%;
   z-index:2;

   @media(max-width:1279px){
    display:none;
   }
`;


const Title1 = styled.h4`
  margin-bottom: 16px;
  font-size: 2rem;
  color: #000080; /* navy blue */
  font-weight: 800;
  text-shadow:
    -1px -1px 0 #fff,
     1px -1px 0 #fff,
    -1px  1px 0 #fff,
     1px  1px 0 #fff;
`;


const Title = styled.h4`
  margin-bottom: 16px;
  font-size: 18px;
  color: #000080; /* saffron gold */
`;

const Title3 = styled.h4`
margin-bottom:2px;
  font-size: 18px;
  color: #000080; /* saffron gold */
`;

const Link = styled.a`
  display: block;
  color: #333;
  margin: 8px 0;
  text-decoration: none;
  font-size: 0.9rem;
  transition: 0.3s;
  font-weight:400;
  cursor:pointer;

  &:hover {
    // color: #b983ff; /* light galaxy purple */
    text-decoration:underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;

  a {
    color: #2B32B2;
    font-size: 20px;
    transition: 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;

const Newsletter = styled.div`
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #2B32B2;
    // margin-top: 10px;
    border-radius: 5px;
    outline: none;
    background: white;
   
  }

  button {
    margin-top: 10px;
    padding: 10px;
    background: #2B32B2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      background: gray;
      
    }
  }
`;

const WaveTop = styled.div`
  position: relative;
  top: -1px;
  width: 100%;
  height: 100px;
  overflow: hidden;
  line-height: 0;

  svg {
    position: relative;
    display: block;
    width: calc(150% + 1.3px);
    height: 60px;
  }

  path {
    fill: #1e1e2f;
  }
`;

const Copyright = styled.div`
//   background: #1e1e2f;
// background: linear-gradient(135deg, #3F689D,  #303D72);
  text-align: center;
  padding: 10px 0px;
  padding-top:20px;
  font-size: 14px;
  color: white;
  height:100px;
  background: #1488CC;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
border-radius:200px 0px 0px 0px;

@media(max-width:428px){
    border-radius:30px 0px 0px 0px;
}

`;

const Copyright2 = styled.div`
//   background: #1e1e2f;
// background: linear-gradient(135deg, #3F689D,  #303D72);
  text-align: center;
  padding: 10px 0px;
  padding-top:20px;
  font-size: 14px;
  color: white;
  height:100px;
  background: #1488CC;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


`;


// ---- Main Footer Component ----

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterWrapper>
      {/* <CurvedTop /> */}
      <TopBorder></TopBorder>
      <FooterContent>
        <Section style={{width:"250px"}}>
            {/* <img src={logo}/> */}
          {/* <Title1>ELEXDON HOST</Title1> */}<br/>
          <img src={logo2} alt='logo' style={{width:"200px", borderRadius:"5px", marginTop:"10px"}}/>
          {/* <p>Secure. Scalable. Simple Hosting for Everyone.</p> */}
          <p><strong style={{
  color: "#2B32B2",
  textShadow: "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff"
}}>Email:</strong> support@elexdonhost.com</p>
        <p>
          <strong style={{color:" #2B32B2", 
             textShadow: "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff"
          }}>Phone (NIG):</strong> +234 818 560 9702
        </p>
          <p>
          <strong style={{color:" #2B32B2", 
             textShadow: "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff"
          }}>Phone (UK):</strong> +44(0)7479305003
        </p>
        <p>
          <strong style={{color:" #2B32B2"}}>Address (NIG):</strong> Elexdon Digital Technologies Limited.<br/>
          Plot SP 795 First-Gate Mechanic Estate, Apo Fct-Abuja.
        </p>

         <p>
          <strong style={{color:" #2B32B2"}}>Address (UK):</strong> The Old Vicarage building,<br/> Trinity Road Old Market Avon, Bristol – United Kingdom.
        </p>
          <SocialIcons>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </SocialIcons>
        </Section>

        <Section>
          <Title>Company</Title>
          <Link onClick={()=>navigate('/aboutus')}>About Us</Link>
          <Link onClick={()=>navigate('/blogs')}>Blogs</Link>
          <Link onClick={()=>navigate('/affiliate')}>Affiliate</Link>
          <Link onClick={()=>navigate('/announcement')}>Announcement</Link>
          <Link onClick={()=>navigate('/becomeareseller')}>Become a Reseller</Link>
          <Link onClick={()=>navigate('/workwithus')}>Work With Us</Link>
          {/* <Link href="#">Partners</Link> */}
        </Section>

        <Section>
          <Title>Website Hosting</Title>
          <Link onClick={()=>navigate('/sharedhosting')}>Shared Hosting</Link>
        
          <Link onClick={()=>navigate('/dedicatedhosting')}>Dedicated Servers</Link>
          <Link onClick={()=>navigate('/wordpresshosting')}>WordPress Hosting</Link>
          <Link onClick={()=>navigate('/resellerhosting')}>Reseller Hosting</Link>
            <Link onClick={()=>navigate('/vps')}>VPS Hosting</Link>
           
            <Link onClick={()=>navigate('/emailhosting')}>Email Hosting</Link>
        </Section>

        <Section>
          <Title>Domains</Title>
          <Link onClick={()=>navigate('/domainspage')}>Register Domain</Link>
          <Link onClick={()=>navigate('/domaintransfer')}>Transfer Domain</Link>
          <Link onClick={()=>navigate('/freessl')}>Free SSL</Link>
          <Link onClick={()=>navigate('/whoislookup')}>WHOIS Lookup</Link>
        </Section>

        <Section>
          <Title>Support</Title>
          <Link  onClick={()=>navigate('/contactus')}>Contact Us</Link>
          <Link  onClick={()=>navigate('/support')}>Tickets</Link>
          <Link  onClick={()=>navigate('/knowledgebase')}>Knowledgebase</Link>
          
        </Section>

          <Section>
          <Title>Legal</Title>
          <Link  onClick={()=>navigate('/privacypolicy')}>Privacy Policy</Link>
          <Link  onClick={()=>navigate('/refundpolicy')}>Refund Policy</Link>
          <Link  onClick={()=>navigate('/termsandconditions')}>Terms of Service</Link>
        </Section>

        <SectionN >
          <Title3>Newsletter</Title3>
          <Newsletter>
       
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </Newsletter>
        </SectionN>
      </FooterContent>

      {/* <WaveTop>
        <svg viewBox="0 0 500 60" preserveAspectRatio="none">
          <path d="M0,30 C150,60 350,0 500,30 L500,0 L0,0 Z" />
        </svg>
      </WaveTop> */}

      <Copyright style={{width:"100%", zIndex:"1", position:"absolute", bottom:"0px", left:"0px",}}>
        &copy; {new Date().getFullYear()} ELEXDON HOST. All rights reserved.
        {/* <img src={logo2} alt=''/> */}
      </Copyright>
        <Copyright2 style={{  background:"#E4E9F1"}}>
        &copy; {new Date().getFullYear()} ELEXDON HOST. All rights reserved.
        
      </Copyright2>
       <div style={{
          margin:"0 auto",
          width:"100%",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          position:"absolute",
          transfrom:"translate(-50%, -50%)",
          bottom:"20px",
          left:"0px",
          zIndex:"1000000"
        }}>
          <img src={logo2} alt='logo' style={{width:"200px", borderRadius:"5px"}}/>
        </div>
    </FooterWrapper>
  );
};

export default Footer;

