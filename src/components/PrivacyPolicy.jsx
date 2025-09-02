
// PrivacyPolicyPage.jsx

import React from 'react';
import styled from 'styled-components';
import bgImage from '../Images/ppimg.jpeg'; // Use your background image here
import 'animate.css'
import useAnimateOnScroll from './useAnimateOnScroll';

const Wrapper = styled.div`
  font-family: 'Segoe UI', sans-serif;
  color: #333;
  position: relative;
  overflow: hidden;
`;

const DecorativeCircle = styled.div`
  position: absolute;
  width: ${(props) => props.size || '200px'};
  height: ${(props) => props.size || '200px'};
  background: ${(props) => props.gradient || 'radial-gradient(circle, #facc15, transparent)'};
  border-radius: 50%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  filter: blur(50px);
  opacity: 0.6;
  z-index: 0;
`;

const Hero = styled.section`
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${bgImage}) center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 100px 20px 100px;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform:uppercase;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
  position: relative;
  z-index: 2;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #4f46e5;
  text-transform:uppercase;
`;

const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
`;

const PrivacyPolicyPage = () => {
 const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const a = useAnimateOnScroll('animate__fadeInUp animate__slower');
const b = useAnimateOnScroll('animate__fadeInUp animate__slower');
const c = useAnimateOnScroll('animate__fadeInUp animate__slower');
const d = useAnimateOnScroll('animate__fadeInUp animate__slower');
const e = useAnimateOnScroll('animate__fadeInDown animate__slower');



  return (
    <Wrapper>
      {/* Decorative Background Circles */}
      <DecorativeCircle top="5%" left="10%" size="300px" gradient="radial-gradient(circle, #6366f1, transparent)" />
      <DecorativeCircle top="80%" left="60%" size="200px" gradient="radial-gradient(circle, #ec4899, transparent)" />
      <DecorativeCircle top="20%" left="75%" size="150px" gradient="radial-gradient(circle, #22d3ee, transparent)" />
      <DecorativeCircle top="70%" left="15%" size="250px" gradient="radial-gradient(circle, #a78bfa, transparent)" />
      <DecorativeCircle top="40%" left="45%" size="500px" gradient="radial-gradient(circle, rgba(255,255,255,0.3), transparent)" />

      {/* Hero Section */}
      <Hero>
        <HeroTitle ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Privacy Policy</HeroTitle>
        <HeroSubtitle ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>How we handle your data at Elexdon Hosting</HeroSubtitle>
      </Hero>

      {/* Main Content */}
      <Container>
        <Section>
          <SectionTitle>Our Commitment To Privacy</SectionTitle>
          <SectionText>
          Your privacy is important to elexdonhost.com. To better protect your privacy we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used.  </SectionText>
       
       <SectionText>
        elexdonhost.com reserves the right to change this Privacy Policy at any time. Such changes, modifications, additions or deletions shall be effective immediately upon posting on-line at this location. You acknowledge and agree that it is your responsibility to review this site and this Policy periodically and to be aware of any modifications. You may identify whether elexdonhost.com has revised this Privacy Policy by noting the “Effective Date” above. Your continued use of the site after such modifications will constitute your: (a) acknowledgment of the modified Policy; and (b) agreement to abide and be bound by the modified Policy. If you do not agree to these terms, please do not access or use this site.
       </SectionText>
        </Section>
       

        <Section>
          <SectionTitle>Types of Information Collected</SectionTitle>
          <SectionText>
          In order to better provide you with our numerous services, we collect two types of information about our users: Personal Information and Non-Personal Information.   </SectionText>
        </Section>

        <Section>
          <SectionTitle>Personal Information</SectionTitle>
          <SectionText>
           When you order services through elexdonhost.com, we request certain personally identifiable information from you on our order form to us to allow us to process your order, provide you with the services you order from us, and to provide ongoing technical support for your account. You must provide contact information (such as name, email, phone number, and address). By purchasing our services, you agree to provide and maintain accurate, complete and updated information. Your personal information will be kept only as long as we need it for the purposes for which we collected it, or as permitted by law.
          </SectionText>
          <SectionText>
            After you have ordered our services, we may be in communication with you about your account. These communications are essential to our relationship with you and to our ability to provide you with quality services that are responsive to your needs. As a result, we may maintain information about our communications with you for future use.
          </SectionText>
          <SectionText>

elexdonhost.com shall only process Personal Information in a way that is compatible with and relevant for the purpose for which it was collected or authorized by the individual. To the extent necessary for those purposes, elexdonhost.com shall take reasonable steps to ensure that personal information is accurate, complete, current and reliable for its intended use.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>Disclosure of Personal Information</SectionTitle>
          <SectionText>
          We use the information you provide about yourself when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide service. In the event that this policy changes, we will provide you with an opportunity to opt out or otherwise prohibit the disclosure of your information to third parties for any purpose other than your ordering and ongoing use of our services. For sensitive information, affirmative or explicit (opt in) choice will be given if the information is to be disclosed to a third party or used for a purpose other than previously authorized.</SectionText>
        <SectionText>
          We do not sell, trade, or rent your Personal Information to others. We do provide some of our services through contractual arrangements with affiliates, services providers, partners and other third parties. We and our service partners use your Personal Information to operate our sites and to deliver our services.
        </SectionText>
        <SectionText>
          Occasionally, elexdonhost.com may be required by law enforcement or judicial authorities to provide Personal Information to the appropriate governmental authorities. We will disclose Personal Information upon receipt of a court order or subpoena or to cooperate with a law enforcement investigation. We fully cooperate with law enforcement agencies in identifying those who use elexdonhost.com services for illegal activities. We reserve the right to report to law enforcement agencies any activities that elexdonhost.com in good faith believe to be unlawful.
        </SectionText>
        <SectionText>
          elexdonhost.com may also use the Personal Information collected to contact customers regarding important changes to our site, new services and special offers we think you will find valuable. You will be given the opportunity to notify us of your desire not to receive these offers through email by sending your request at support@elexdonhost.com.
        </SectionText>
        </Section>

        <Section>
          <SectionTitle>Non-Personal Information</SectionTitle>
          <SectionText>
           elexdonhost.com collects tracking data when users visit our websites. Whenever you request a page through your browser, navigation data such as your IP address, browser and version, operating system, date and time and the site from which you came are stored in a log file. We use this data to analyze visitors’ use of our site in order to make improvements to our site. </SectionText>
        </Section>

        <Section>
          <SectionTitle>Disclosure of Non-Personal Information</SectionTitle>
          <SectionText>
           elexdonhost.com may share this anonymous traffic and demographic information in aggregate form with other business partners. We do not share any information with anyone that can identify an individual user. </SectionText>
        </Section>

        <Section>
          <SectionTitle>Cookies</SectionTitle>
          <SectionText>
          A cookie is a small text file that is stored on a users computer for record-keeping purposes. elexdonhost.com may use both session ID cookies and/or persistent cookies. We use session cookies to make it easier for you to navigate our site. A session ID cookie expires when you close your browser. A persistent cookie remains on your hard drive for an extended period of time. You can remove persistent cookies by following directions provided in your Internet browsers help file. </SectionText>
        </Section>

    

        <Section>
          <SectionTitle>Our Commitment To Data Security</SectionTitle>
          <SectionText>
            To prevent unauthorized access, maintain data accuracy, and ensure the correct use of information, we have put in place appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online. The elexdonhost.com website uses industry-standard Secure Sockets Layer (SSL) encryption on all web pages where personal information is required. When entering Personal Information, we strongly recommend an SSL-enabled web browser.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>
            Our Commitment to Safe Harbor
          </SectionTitle>
          <SectionText>
            elexdonhost.com believes in protecting your privacy. When we collect personal information from you on our website, we comply with the U.S.-EU Safe Harbor Framework as set forth by the U.S. Department of Commerce regarding the collection, use and retention of personal data from the European Union. Elexdonhost.net will regularly review our privacy promises, to ensure that we are in compliance U.S.-EU Safe Harbor Framework.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>
            Safe Harbor Enforcement
          </SectionTitle>
          <SectionText>
            elexdonhost.com uses a self-assessment approach to assure compliance with this privacy policy and periodically verifies that the policy is accurate, comprehensive for the information intended to be covered, prominently displayed, completely implemented and accessible and in conformity with the Principles of Safe Harbor. Should you have any concerns please contact us with the information provided and we will investigate and attempt to resolve any complaints and disputes regarding use and disclosure of Personal Information in accordance with the Principles. Our Commitment To Children’s Privacy
          </SectionText>
          <SectionText>
            Protecting the privacy of the very young is especially important. For that reason, we never collect or maintain information at our website from those we actually know are under 13, and no part of our website is structured to attract anyone under 13.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>
            Access To Your Personal Information
          </SectionTitle>
          <SectionText>
            You always have access to the information we have about you. To review and update your personal contact information, simply log into our client portal. You may also email support@elexdonhost.com to have the information changed or do it yourself on your profile page.
          </SectionText>
        </Section>

        <Section>
          <SectionTitle>
            Questions
          </SectionTitle>
          <SectionText>
            If you have any questions about this Privacy Policy, the practices of this site, or our compliance with the Safe Harbor principals, please contact us at:
          <br/>
          Elexdon Digital Technologies Limited.<br/>
Attn: Legal Department<br/>
Plot SP 795 First-Gate Mechanic Estate, Apo Fct-Abuja.<br/>
Email: support@elexdonhost.com
          </SectionText>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default PrivacyPolicyPage;
