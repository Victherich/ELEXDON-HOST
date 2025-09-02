import React from 'react';
import styled from 'styled-components';
import heroBg from '../Images/contact4.jpg';
import support1 from '../Images/contact1.jpg';
import support2 from '../Images/contact2.jpg';
import support3 from '../Images/contact3.jpg';
import support4 from '../Images/contact4.jpg';
import useAnimateOnScroll from './useAnimateOnScroll';
import 'animate.css'

const Section = styled.section`
  padding: 80px 20px;
  text-align: center;

  h2{
  color:#2B32B2;
  font-size:2rem;
  }
`;

const Hero = styled(Section)`
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
  padding: 150px 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  div {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: auto;
    font-size:2rem;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  text-align: left;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  div {
    padding: 20px;

    h3 {
      margin-bottom: 10px;
      font-size: 1.2rem;
      color:#2B32B2;
    }

    p {
      font-size: 0.95rem;
      color: #555;
    }
  }
`;

const Form = styled.form`
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  input, textarea {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
  }

  button {
    padding: 15px;
    background: #2c3e50;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s;

    &:hover {
      background: #1a252f;
    }
  }
`;

const FAQ = styled.div`
  max-width: 800px;
  margin: 40px auto;
  text-align: left;

  h3 {
    margin-bottom: 15px;
   
  }

  details {
    margin-bottom: 15px;
    background: #f1f1f1;
    padding: 15px;
    border-radius: 8px;
  }

  summary {
    font-weight: bold;
    cursor: pointer;
    color:#2B32B2;
  }
`;

const ContactInfo = styled.div`
//   background: #1e1e2f;

  background: #1488CC;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2B32B2, #1488CC);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2B32B2, #1488CC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: white;
  padding: 40px 20px;
  text-align: center;
  margin-top: 60px;

  h4 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
`;

const ContactUs = () => {


  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const a = useAnimateOnScroll('animate__fadeInUp animate__slower');
const b = useAnimateOnScroll('animate__fadeInUp animate__slower');
const c = useAnimateOnScroll('animate__fadeInUp animate__slower');
const d = useAnimateOnScroll('animate__fadeInUp animate__slower');
const e = useAnimateOnScroll('animate__fadeInDown animate__slower');



  return (
    <div>
      <Hero>
        <div>
          <h1 ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Need Help? We’re Here for You</h1>
          <p ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Our support team is available 24/7 to assist you with anything you need.</p>
        </div>
      </Hero>

      <Section>
        <h2 style={{color:"#2B32B2"}}>Why Choose Our Support?</h2>
        <CardsContainer>
          <Card>
            <img src={support1} alt="Fast Response" />
            <div>
              <h3>Fast Response</h3>
              <p>We respond to all support queries quickly and efficiently.</p>
            </div>
          </Card>
          <Card>
            <img src={support2} alt="Expert Team" />
            <div>
              <h3>Expert Team</h3>
              <p>Our certified engineers solve issues with deep knowledge.</p>
            </div>
          </Card>
          <Card>
            <img src={support3} alt="Knowledge Base" />
            <div>
              <h3>Extensive Knowledge Base</h3>
              <p>Hundreds of guides and articles to help you 24/7.</p>
            </div>
          </Card>
          <Card>
            <img src={support4} alt="Live Chat" />
            <div>
              <h3>Live Chat</h3>
              <p>Reach out through our real-time chat system anytime.</p>
            </div>
          </Card>
        </CardsContainer>
      </Section>

      <Section>
        <h2 >Contact Our Support Team</h2>
        <Form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="6" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </Form>
      </Section>

      <Section>
        <h2>Frequently Asked Questions</h2>
        <FAQ>
          <details>
            <summary>How fast do you respond to support requests?</summary>
            <p>Our average response time is less than 30 minutes via live chat or ticket.</p>
          </details>
          <details>
            <summary>Can I get help migrating my website?</summary>
            <p>Yes! We offer free website migrations from your old host to Elexdon Host.</p>
          </details>
          <details>
            <summary>Is your support available 24/7?</summary>
            <p>Absolutely, we are available every day, all year round, day or night.</p>
          </details>
        </FAQ>
      </Section>

      <ContactInfo>
        <h4>Call Us: +234 818 560 9702</h4>
        <h4>Email: support@elexdonhost.com</h4>
      
      </ContactInfo>
    </div>
  );
};

export default ContactUs;
