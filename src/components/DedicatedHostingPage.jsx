
import React, { useState , useEffect} from 'react';
import styled from 'styled-components';
import dedicatedHeroImg from '../Images/dedicatedhosting.jpg'; // Replace with your actual image
import Features from './Features';
import 'animate.css'
import useAnimateOnScroll from './useAnimateOnScroll';
import Partners from './Partners';
import Features3 from './Features3';

const HeroSection = styled.section`
  background-image: url(${dedicatedHeroImg});
  background-size: cover;
  background-position: center;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  color: #fff;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const HostingSection = styled.section`
  background: #0f0f1b;
  color: #fff;
  padding: 60px 20px;
  text-align: center;
`;

const HostingTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #FFD700;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const HostingCard = styled.div`
  background: linear-gradient(145deg, #1c1c2e, #121221);
  padding: 30px 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }

  h3 {
    font-size: 1.6rem;
    color: #00e6e6;
    margin-bottom: 10px;
  }

  p.price {
    color: #FFD700;
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding-left: 0;
    line-height: 1.8;
  }

  li {
    position: relative;
    padding-left: 1.5rem;
  }

  li::before {
    content: '✔';
    position: absolute;
    left: 0;
    color: #00ff88;
  }

  .out-of-stock {
    margin-top: 20px;
    background: crimson;
    padding: 10px 15px;
    border-radius: 8px;
    display: inline-block;
    color: #fff;
    font-weight: bold;
  }
`;

const DedicatedHostingPage = () => {
  const plans = [
    {
      name: 'BASIC-PENTIUM MICRO',
      price: '₦2500/month',
      features: [
        '5GB SSD Diskspace',
        '50GB Monthly Bandwidth',
        'Free SSL Certificate',
        'Unlimited MySQL Databases',
        '5 Email Accounts',
        'Unlimited Website Builder',
        'Control Panel',
        'DMCA Ignored Location'
      ]
    },
    {
      name: 'CLASSIC-PENTIUM',
      price: '₦3800/month',
      features: [
        '5GB SSD Diskspace',
        'Unlimited Monthly Bandwidth',
        'Free SSL Certificate',
        'Unlimited MySQL Databases',
        '25 Email Accounts',
        'Unlimited Website Builder',
        'Control Panel',
        'DMCA Ignored Location'
      ]
    },
    {
      name: 'GOLD-PENTIUM',
      price: '₦5500/month',
      features: [
        'Unlimited SSD Diskspace',
        'Unlimited Monthly Bandwidth',
        'Free SSL Certificate',
        'Single MySQL Databases',
        '50 Email Accounts',
        'Unlimited Website Builder',
        'Control Panel',
        'DMCA Ignored Location'
      ]
    }
  ];



     const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const tldTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');

const [dedicatedProducts, setDedicatedProducts]=useState([]);



useEffect(() => {
  fetch("https://www.elexdonhost.com/api_elexdonhost/get_dedicated_hosting_products.php")
    .then(res => res.json())
    .then(data => {
      if (data.products && data.products.product) {
        setDedicatedProducts(data.products.product);
      } else {
        console.error("No products found:", data);
      }
    })
    .catch(err => console.error("Fetch error:", err));
}, []);


  return (
    <div>
      <HeroSection>
        <Overlay />
        <HeroContent>
          <Title ref={heroTitleAnim.ref} className={heroTitleAnim.className}>DEDICATED SERVERS</Title>
          <Subtitle ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
            An Optimized DMCA Ignored Hosting Platform<br />
            OFFSHORE HOSTING with Guaranteed 99.9% Uptime.<br />
            Elexdon Host Dedicated Plans
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <HostingSection>
        <HostingTitle>Choose Your Plan</HostingTitle>
        <CardsContainer>
          {plans.map((plan) => (
            <HostingCard key={plan.name}>
              <h3>{plan.name}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <div className="out-of-stock">Out of Stock</div>
            </HostingCard>
          ))}
        </CardsContainer>
        <Partners/>
        <Features3/>
      </HostingSection>
    </div>
  );
};

export default DedicatedHostingPage;
