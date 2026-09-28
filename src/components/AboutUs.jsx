

// import React from 'react';
// import styled from 'styled-components';
// import heroBg from '../Images/aboutimg.jpg';
// import michaelImg from '../Images/team1.jpg';
// import amakaImg from '../Images/team2.jpg';
// import ayodeleImg from '../Images/team3.jpg';
// import innocentImg from '../Images/team4.jpg';

// import { useRef, useState, useEffect } from 'react';
// import Partners from './Partners';
// import TemplateShowcase from './TemplateShowcase';
// import Partners2 from './Partners2';

// // Hook
// const useAnimateOnScroll = (animationClass) => {
//   const ref = useRef(null);
//   const [isVisible, setVisible] = useState(false);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setVisible(entry.isIntersecting);
//       },
//       { threshold: 0.2 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return {
//     ref,
//     className: isVisible ? `animate__animated ${animationClass}` : 'opacity-0',
//   };
// };

// // Styles
// const AboutSection = styled.section`
//   background-image: url(${heroBg});
//   background-size: cover;
//   background-position: center;

//   color: white;
//   padding: 100px 20px;
//   text-align: center;
//   position: relative;
// `;

// const Overlay = styled.div`
//   position: absolute;
//   top: 0; left: 0; right: 0; bottom: 0;
//   background: rgba(0, 0, 0, 0.3);
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 2;
//   max-width: 900px;
//   margin: auto;
// `;

// const Title = styled.h1`
//   font-size: 3rem;
//   margin-bottom: 20px;
//   text-transform: uppercase;
// `;

// const Subtitle = styled.p`
//   font-size: 1.3rem;
//   line-height: 1.6;
// `;

// const InfoSection = styled.section`
//   background: #f8f9fc;
//   padding: 60px 20px;
//   color: #333;

//   h2 {
//     color: #2B32B2;
//     font-size: 2rem;
//     text-transform: uppercase;
//   }
// `;

// const InfoBlock = styled.div`
//   max-width: 1000px;
//   margin: auto;
//   font-size: 1.1rem;
//   line-height: 1.8;
//   text-align: center;
// `;

// const Highlights = styled.section`
//   padding: 60px 20px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 30px;
//   background: #fff;
// `;

// const HighlightCard = styled.div`
//   background: #1e1e2f;
//   color: white;
//   padding: 30px;
//   border-radius: 12px;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//   max-width: 300px;
//   flex: 1 1 250px;
//   text-align: center;
//   transition: transform 0.3s;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   h3 {
//     margin-bottom: 15px;
//     font-size: 1.3rem;
//   }

//   p {
//     font-size: 0.95rem;
//   }
// `;

// const TeamSection = styled.section`
//   background: #f1f3f6;
//   padding: 60px 20px;
//   text-align: center;
// `;

// const TeamTitle = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 40px;
//   color: #2B32B2;
//   text-transform: uppercase;
// `;

// const TeamGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//   gap: 20px;
// `;

// const TeamCard = styled.div`
//   background-image: url(${props => props.bg});
//   background-size: cover;
//   background-position: center;
//   border-radius: 12px;
//   height: 300px;
//   position: relative;
//   overflow: hidden;
//   color: white;
//   display: flex;
//   align-items: flex-end;
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
//   transition: transform 0.3s;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   .info {
//     background: rgba(0, 0, 0, 0.6);
//     padding: 15px;
//     width: 100%;
//     text-align: center;

//     h4 {
//       margin: 0;
//       font-size: 1.1rem;
//       font-weight: bold;
//     }

//     p {
//       font-size: 0.9rem;
//       margin: 5px 0 0;
//     }
//   }
// `;

// const AboutPage = () => {
//   // Hero section animation
//   const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const heroSubAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');

//   // Info section animation
//   const infoTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const infoTextAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');

//   // Highlight Animations (titles and text)
//   const highlight1 = {
//     title: useAnimateOnScroll('animate__fadeInUp animate__slower'),
//     text: useAnimateOnScroll('animate__fadeInUp animate__slower')
//   };
//   const highlight2 = {
//     title: useAnimateOnScroll('animate__fadeInUp animate__slower'),
//     text: useAnimateOnScroll('animate__fadeInUp animate__slower')
//   };
//   const highlight3 = {
//     title: useAnimateOnScroll('animate__fadeInUp animate__slower'),
//     text: useAnimateOnScroll('animate__fadeInUp animate__slower')
//   };
//   const highlight4 = {
//     title: useAnimateOnScroll('animate__fadeInUp animate__slower'),
//     text: useAnimateOnScroll('animate__fadeInUp animate__slower')
//   };

//   // Team member animations
//   const team = [
//     {
//       name: useAnimateOnScroll('animate__fadeInUp animate__slower'),
//       role: useAnimateOnScroll('animate__fadeInUp animate__slower')
//     },
//     {
//       name: useAnimateOnScroll('animate__fadeInUp animate__slower'),
//       role: useAnimateOnScroll('animate__fadeInUp animate__slower')
//     },
//     {
//       name: useAnimateOnScroll('animate__fadeInUp animate__slower'),
//       role: useAnimateOnScroll('animate__fadeInUp animate__slower')
//     },
//     {
//       name: useAnimateOnScroll('animate__fadeInUp animate__slower'),
//       role: useAnimateOnScroll('animate__fadeInUp animate__slower')
//     }
//   ];

//   return (
//     <div>
//       <AboutSection>
//         <Overlay />
//         <HeroContent>
//           <Title ref={heroTitleAnim.ref} className={heroTitleAnim.className}>
//             About Elexdon Host
//           </Title>
//           <Subtitle ref={heroSubAnim.ref} className={heroSubAnim.className}>
//             The Innovative, Fast Web Hosting Company. Secure, scalable and always reliable — that's Elexdon.
//           </Subtitle>
//         </HeroContent>
//       </AboutSection>

//       <InfoSection>
//         <InfoBlock>
//           <h2 ref={infoTitleAnim.ref} className={infoTitleAnim.className}>
//             Who are we and what do we do?
//           </h2>
//           <p >
//           Elexdon a world-class integrated web solution Provision company with a track record of success in tech services. We develop and offer flexible range of solutions development and services.Elexdon Host is an integral part of Elexdon Digital technologies limited an IT and Web developemnt company. Elexdon Host provides shared hosting, reseller hosting, semi-dedicated and virtual hosting in and other parts of Africa. We leverage our extensive knowledge of web hosting and software development to create reliable self sustaining solutions. We believe that the best hosting solution is one where the services themselves know how to recover from common problems, as opposed to other hosts that require fixes from people. Even with this automation we are monitoring the health of all our servers every minute to be informed of any potential problems.</p>
//         </InfoBlock>
//       </InfoSection>

//       <Highlights>
//         {[highlight1, highlight2, highlight3,].map((h, i) => (
//           <HighlightCard key={i}>
//             <h3 ref={h.title.ref} className={h.title.className}>
//               {['24/7 Hosting Support', '99.9% Uptime Guarantee', '30-Day Money Back',][i]}
//             </h3>
//             <p ref={h.text.ref} className={h.text.className}>
//               {
//                 [
//                   'Our tech-support team is always here to help over email, chat and phone across the year, at any time.',
//                   'All of our shared hosting plans are built on a robust infrastructure which guarantee a 99.9% uptime',
//                   'Our blazing fast and reliable shared hosting plans come with a 30-day money back guarantee'
//                 ][i]
//               }
//             </p>
//           </HighlightCard>
//         ))}
//       </Highlights>
//       <TemplateShowcase/>
//  <Partners/>
//  <Partners2/>
//       {/* <TeamSection>
//         <TeamTitle>Our Team Members</TeamTitle>
//         <TeamGrid>
//           {[michaelImg, amakaImg, ayodeleImg, innocentImg].map((img, i) => (
//             <TeamCard key={i} bg={img}>
//               <div className="info">
//                 <h4 ref={team[i].name.ref} className={team[i].name.className}>
//                   {
//                     ['OKORONKWO MICHAEL', 'AMAKA NZOM', 'AYODELE SEGUN PETER', 'INNOCENT AGBAEZE'][i]
//                   }
//                 </h4>
//                 <p ref={team[i].role.ref} className={team[i].role.className}>
//                   {
//                     ['CEO / Senior Developer', 'Admin / Billing & Marketing', 'Tech Support / Backend Developer', 'Sales Rep / Project Manager - London'][i]
//                   }
//                 </p>
//               </div>
//             </TeamCard>
//           ))}
//         </TeamGrid>
//       </TeamSection> */}
     
//     </div>
//   );
// };

// export default AboutPage;


import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import heroBg from '../Images/aboutimg.jpg';
import michaelImg from '../Images/team1.jpg';
import amakaImg from '../Images/team2.jpg';
import ayodeleImg from '../Images/team3.jpg';
import innocentImg from '../Images/team4.jpg';
import Partners from './Partners';
import TemplateShowcase from './TemplateShowcase';
import Partners2 from './Partners2';
import 'animate.css';

// Hook
const useAnimateOnScroll = (animationClass) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: isVisible ? `animate__animated ${animationClass}` : 'opacity-0',
  };
};

// Styles
const AboutSection = styled.section`
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 10px;
  text-align: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(15, 23, 42, 0.8);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: auto;
  padding: 70px 10px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 8px;
  text-transform: uppercase;
 color:white;
  font-weight: 800;
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  line-height: 1.4;
  color: #cbd5e1;
  margin: 0;
`;

const InfoSection = styled.section`
  background: #f8fafc;
  padding: 10px;
  color: #1e293b;

  h2 {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.4rem;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

const InfoBlock = styled.div`
  max-width: 1000px;
  margin: auto;
  font-size: 0.95rem;
  line-height: 1.5;
  text-align: center;
  padding: 10px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.05);
  border: 1px solid rgba(79, 70, 229, 0.1);

  p {
    margin: 0;
    color: #475569;
  }
`;

const Highlights = styled.section`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  background: #ffffff;
`;

const HighlightCard = styled.div`
  background: #ffffff;
  color: #1e293b;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.08);
  border: 1px solid rgba(79, 70, 229, 0.1);
  max-width: 280px;
  flex: 1 1 220px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  h3 {
    margin-bottom: 6px;
    font-size: 1rem;
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 0.85rem;
    color: #64748b;
    margin: 0;
    line-height: 1.4;
  }
`;

const TeamSection = styled.section`
  background: #f1f5f9;
  padding: 10px;
  text-align: center;
`;

const TeamTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
`;

const TeamCard = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  height: 220px;
  position: relative;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  .info {
    background: rgba(15, 23, 42, 0.85);
    padding: 8px 10px;
    width: 100%;
    text-align: center;

    h4 {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 700;
    }

    p {
      font-size: 0.8rem;
      margin: 4px 0 0;
      color: #cbd5e1;
    }
  }
`;

const AboutPage = () => {
  // Hero section animation
  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const heroSubAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');

  // Info section animation
  const infoTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');

  // Highlight Animations
  const highlight1 = {
    title: useAnimateOnScroll('animate__fadeInUp animate__slower'),
    text: useAnimateOnScroll('animate__fadeInUp animate__slower')
  };
  const highlight2 = {
    title: useAnimateOnScroll('animate__fadeInUp animate__slower'),
    text: useAnimateOnScroll('animate__fadeInUp animate__slower')
  };
  const highlight3 = {
    title: useAnimateOnScroll('animate__fadeInUp animate__slower'),
    text: useAnimateOnScroll('animate__fadeInUp animate__slower')
  };

  // Team member animations
  const team = [
    {
      name: useAnimateOnScroll('animate__fadeInUp animate__slower'),
      role: useAnimateOnScroll('animate__fadeInUp animate__slower')
    },
    {
      name: useAnimateOnScroll('animate__fadeInUp animate__slower'),
      role: useAnimateOnScroll('animate__fadeInUp animate__slower')
    },
    {
      name: useAnimateOnScroll('animate__fadeInUp animate__slower'),
      role: useAnimateOnScroll('animate__fadeInUp animate__slower')
    },
    {
      name: useAnimateOnScroll('animate__fadeInUp animate__slower'),
      role: useAnimateOnScroll('animate__fadeInUp animate__slower')
    }
  ];

  return (
    <div>
      <AboutSection>
        <Overlay />
        <HeroContent>
          <Title ref={heroTitleAnim.ref} className={heroTitleAnim.className}>
            About Elexdon Host
          </Title>
          <Subtitle ref={heroSubAnim.ref} className={heroSubAnim.className}>
            The Innovative, Fast Web Hosting Company. Secure, scalable and always reliable — that's Elexdon.
          </Subtitle>
        </HeroContent>
      </AboutSection>

      <InfoSection>
        <InfoBlock>
          <h2 ref={infoTitleAnim.ref} className={infoTitleAnim.className}>
            Who are we and what do we do?
          </h2>
          <p>
            Elexdon is a world-class integrated web solution provision company with a track record of success in tech services. We develop and offer a flexible range of solutions development and services. Elexdon Host is an integral part of Elexdon Digital Technologies Limited an IT and web development company. Elexdon Host provides shared hosting, reseller hosting, semi-dedicated and virtual hosting in and other parts of Africa. We leverage our extensive knowledge of web hosting and software development to create reliable self-sustaining solutions. We believe that the best hosting solution is one where the services themselves know how to recover from common problems, as opposed to other hosts that require fixes from people. Even with this automation we are monitoring the health of all our servers every minute to be informed of any potential problems.
          </p>
        </InfoBlock>
      </InfoSection>

      <Highlights>
        {[highlight1, highlight2, highlight3].map((h, i) => (
          <HighlightCard key={i}>
            <h3 ref={h.title.ref} className={h.title.className}>
              {['24/7 Hosting Support', '99.9% Uptime Guarantee', '30-Day Money Back'][i]}
            </h3>
            <p ref={h.text.ref} className={h.text.className}>
              {
                [
                  'Our tech-support team is always here to help over email, chat and phone across the year, at any time.',
                  'All of our shared hosting plans are built on a robust infrastructure which guarantee a 99.9% uptime',
                  'Our blazing fast and reliable shared hosting plans come with a 30-day money back guarantee'
                ][i]
              }
            </p>
          </HighlightCard>
        ))}
      </Highlights>
      
      <TemplateShowcase />
      {/* <Partners /> */}
      {/* <Partners2 /> */}

      {/* <TeamSection>
        <TeamTitle>Our Team Members</TeamTitle>
        <TeamGrid>
          {[michaelImg, amakaImg, ayodeleImg, innocentImg].map((img, i) => (
            <TeamCard key={i} bg={img}>
              <div className="info">
                <h4 ref={team[i].name.ref} className={team[i].name.className}>
                  {
                    ['OKORONKWO MICHAEL', 'AMAKA NZOM', 'AYODELE SEGUN PETER', 'INNOCENT AGBAEZE'][i]
                  }
                </h4>
                <p ref={team[i].role.ref} className={team[i].role.className}>
                  {
                    ['CEO / Senior Developer', 'Admin / Billing & Marketing', 'Tech Support / Backend Developer', 'Sales Rep / Project Manager - London'][i]
                  }
                </p>
              </div>
            </TeamCard>
          ))}
        </TeamGrid>
      </TeamSection> */}
    </div>
  );
};

export default AboutPage;