// import React, { useState } from 'react';
// import styled from 'styled-components';
// import heroBg from '../Images/kbp2.png'; // Your background image
// import supportIcon from '../Images/kbp1.png'; // Optional category icon
// import useAnimateOnScroll from './useAnimateOnScroll';
// import 'animate.css'
// import KnowledgeBaseTitle from './KnowledgeBaseArticles/KnowledgeBaseTitles';

// const PageContainer = styled.div`
//   font-family: 'Segoe UI', sans-serif;
//   color: #1e293b;
// `;

// const Hero = styled.section`
//   position: relative;
//   height: 45vh;
//   background: url(${heroBg}) no-repeat center center/cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;

//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//     background: rgba(43, 50, 178, 0.6);
//     z-index: 1;
//   }

//   > * {
//     position: relative;
//     z-index: 2;
//     color: white;
//   }
// `;

// const HeroContent = styled.div`
//   max-width: 700px;
//   padding: 0 20px;
// `;

// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   margin-bottom: 1rem;
// `;

// const HeroSubtitle = styled.p`
//   font-size: 1.2rem;
// `;

// const SearchBar = styled.input`
//   width: 100%;
//   max-width: 600px;
//   padding: 1rem;
//   border-radius: 12px;
//   border: none;
//   margin: 2rem auto;
//   display: block;
//   font-size: 1rem;
//   box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
//   box-sizing:border-box;
// `;

// const Section = styled.section`
//   padding: 60px 20px;
//   background: #f9fafb;
// `;

// const SectionTitle = styled.h2`
//   text-align: center;
//   color: #2B32B2;
//   margin-bottom: 2rem;
// `;

// const Grid = styled.div`
//   display: grid;
//   gap: 2rem;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   max-width: 1100px;
//   margin: 0 auto;
// `;

// const Card = styled.div`
//   background: #fff;
//   padding: 2rem;
//   border-radius: 16px;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);

//   h3 {
//     color: #2B32B2;
//     margin-top: 1rem;
//   }

//   p {
//     color: #475569;
//     font-size: 0.95rem;
//   }

//   img {
//     width: 40px;
//   }
// `;

// const FaqSection = styled.div`
//   max-width: 900px;
//   margin: 60px auto 0;
// `;

// const FaqItem = styled.div`
//   background: white;
//   border-radius: 12px;
//   margin-bottom: 1rem;
//   padding: 1.5rem;
//   box-shadow: 0 8px 20px rgba(0,0,0,0.05);
//   cursor: pointer;
// `;

// const Question = styled.h4`
//   font-size: 1.1rem;
//   margin: 0;
//   color: #2B32B2;
// `;

// const Answer = styled.p`
//   margin-top: 0.5rem;
//   color: #334155;
//   display: ${({ show }) => (show ? 'block' : 'none')};
// `;

// const categories = [
//   {
//     title: 'Web Hosting',
//     description: 'Everything you need to know about getting your site live.',
//   },
//   {
//     title: 'Billing',
//     description: 'Questions about payments, invoices, and subscriptions.',
//   },
//   {
//     title: 'Technical Support',
//     description: 'Troubleshooting errors, downtime, and more.',
//   },
//   {
//     title: 'Domain Management',
//     description: 'DNS, WHOIS, and domain renewals explained.',
//   }
// ];

// const faqs = [
//   {
//     question: 'How do I point my domain to Elexdon Host?',
//     answer: 'You can point your domain by updating its DNS records to our nameservers: ns1.elexdonhost.com and ns2.elexdonhost.com'
//   },
//   {
//     question: 'How can I upgrade my hosting plan?',
//     answer: 'Simply go to your Client Area > Services > Choose Plan > Click Upgrade.Your payment is protected.'
//   },
//   {
//     question: 'What’s included in technical support?',
//     answer: 'Our technical support includes server issues, email setup, DNS errors, and more. We don’t cover code customization.'
//   }
// ];

// const KnowledgeBasePage = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//     const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
//   const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const a = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const b = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const c = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const d = useAnimateOnScroll('animate__fadeInUp animate__slower');
//   const e = useAnimateOnScroll('animate__fadeInDown animate__slower');
  

//   return (
//     <PageContainer>
//       <Hero>
//         <HeroContent>
//           <HeroTitle ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Knowledge Base</HeroTitle>
//           <HeroSubtitle ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Find answers to common questions and explore our hosting guides.</HeroSubtitle>
//         </HeroContent>
//       </Hero>

//       <Section>
//         {/* <SearchBar placeholder="Search articles, FAQs, topics..." /> */}

//         <SectionTitle>Categories</SectionTitle>
//         <Grid>
//           {categories.map((cat, index) => (
//             <Card key={index}>
//               <img src={supportIcon} alt="icon" />
//               <h3>{cat.title}</h3>
//               <p>{cat.description}</p>
//             </Card>
//           ))}
//         </Grid>

//         <KnowledgeBaseTitle/>

//         <FaqSection>
//           <SectionTitle>Frequently Asked Questions</SectionTitle>
//           {faqs.map((faq, index) => (
//             <FaqItem key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
//               <Question>{faq.question}</Question>
//               <Answer show={openIndex === index}>{faq.answer}</Answer>
//             </FaqItem>
//           ))}
//         </FaqSection>
//       </Section>
//     </PageContainer>
//   );
// };

// export default KnowledgeBasePage;




import React, { useState } from 'react';
import styled from 'styled-components';
import heroBg from '../Images/kbp2.png'; // Your background image
import supportIcon from '../Images/kbp1.png'; // Optional category icon
import useAnimateOnScroll from './useAnimateOnScroll';
import 'animate.css';
import KnowledgeBaseTitle from './KnowledgeBaseArticles/KnowledgeBaseTitles';

const PageContainer = styled.div`
  font-family: 'Segoe UI', sans-serif;
  color: #1e293b;
`;

const Hero = styled.section`
  position: relative;
  height: 45vh;
  background: url(${heroBg}) no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.5), rgba(147, 51, 234, 0.5));
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
    color: white;
  }
`;

const HeroContent = styled.div`
  max-width: 700px;
  padding: 0 10px;
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 10px;
  font-weight: 800;
  letter-spacing: -0.5px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
`;

const Section = styled.section`
  padding: 10px;
  background: #f8fafc;
`;

const SectionTitle = styled.h2`
  text-align: center;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 10px;
  font-size: 2rem;
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  max-width: 1100px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.08);
  border: 1px solid rgba(79, 70, 229, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(147, 51, 234, 0.15);
  }

  h3 {
    color: #4f46e5;
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.2rem;
  }

  p {
    color: #475569;
    font-size: 0.9rem;
    margin: 0;
  }

  img {
    width: 36px;
    height: 36px;
    object-fit: contain;
  }
`;

const FaqSection = styled.div`
  max-width: 900px;
  margin: 10px auto 0;
  padding: 10px;
`;

const FaqItem = styled.div`
  background: white;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.05);
  border: 1px solid rgba(79, 70, 229, 0.08);
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: rgba(79, 70, 229, 0.3);
  }
`;

const Question = styled.h4`
  font-size: 1rem;
  margin: 0;
  color: #4f46e5;
  font-weight: 600;
`;

const Answer = styled.p`
  margin-top: 5px;
  margin-bottom: 0;
  color: #334155;
  font-size: 0.9rem;
  display: ${({ show }) => (show ? 'block' : 'none')};
  animation: fadeIn 0.3s ease;
`;

const categories = [
  {
    title: 'Web Hosting',
    description: 'Everything you need to know about getting your site live.',
  },
  {
    title: 'Billing',
    description: 'Questions about payments, invoices, and subscriptions.',
  },
  {
    title: 'Technical Support',
    description: 'Troubleshooting errors, downtime, and more.',
  },
  {
    title: 'Domain Management',
    description: 'DNS, WHOIS, and domain renewals explained.',
  }
];

const faqs = [
  {
    question: 'How do I point my domain to Elexdon Host?',
    answer: 'You can point your domain by updating its DNS records to our nameservers: ns1.elexdonhost.com and ns2.elexdonhost.com'
  },
  {
    question: 'How can I upgrade my hosting plan?',
    answer: 'Simply go to your Client Area > Services > Choose Plan > Click Upgrade. Your payment is protected.'
  },
  {
    question: 'What’s included in technical support?',
    answer: 'Our technical support includes server issues, email setup, DNS errors, and more. We don’t cover code customization.'
  }
];

const KnowledgeBasePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');

  return (
    <PageContainer>
      <Hero>
        <HeroContent>
          <HeroTitle ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Knowledge Base</HeroTitle>
          <HeroSubtitle ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Find answers to common questions and explore our hosting guides.</HeroSubtitle>
        </HeroContent>
      </Hero>

      <Section>
        <SectionTitle>Categories</SectionTitle>
        <Grid>
          {categories.map((cat, index) => (
            <Card key={index}>
              <img src={supportIcon} alt="icon" />
              <h3>{cat.title}</h3>
              <p>{cat.description}</p>
            </Card>
          ))}
        </Grid>

        <KnowledgeBaseTitle />

        <FaqSection>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          {faqs.map((faq, index) => (
            <FaqItem key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              <Question>{faq.question}</Question>
              <Answer show={openIndex === index}>{faq.answer}</Answer>
            </FaqItem>
          ))}
        </FaqSection>
      </Section>
    </PageContainer>
  );
};

export default KnowledgeBasePage;