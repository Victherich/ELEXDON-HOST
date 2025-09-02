import React from "react";
import styled from "styled-components";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

// Replace with your background image
import bgImage from "../Images/reseller.png";

// ---------- Styled Components ----------
const PageWrapper = styled.div`
  font-family: "Inter", sans-serif;
  color: #222;
`;

/* Hero Section */
const HeroSection = styled.section`
  background: url(${bgImage}) center/cover no-repeat;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  padding-top:50px;

  @media (max-width: 768px) {
    // height: 60vh;
  }

  @media (max-width: 480px) {
    // height: 50vh;
    // padding: 0 1rem;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }

  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 320px) {
    font-size: 0.9rem;
  }
`;

/* Generic Section */
const Section = styled.section`
  padding: 5rem 2rem;
  background: ${(props) => props.bg || "white"};

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 320px) {
    padding: 2rem 0.8rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #0d47a1;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 320px) {
    font-size: 1.3rem;
  }
`;

/* Grid */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 480px) {
    padding: 1.5rem;
  }

  @media (max-width: 320px) {
    padding: 1rem;
  }
`;

const CardTitle = styled.h3`
  margin-bottom: 1rem;
  color: #ff6b00;
`;

/* CTA */
const CTASection = styled.section`
  padding: 4rem 2rem;
  background: #0d47a1;
  text-align: center;
  color: white;

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 320px) {
    padding: 2rem 0.8rem;
  }
`;

const CTAButton = styled.a`
  margin-top: 1rem;
  display: inline-block;
  background: #ff6b00;
  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  color: white;
  transition: 0.3s;

  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  &:hover {
    background: #e65a00;
  }
`;

// ---------- Page Component ----------
export default function BecomeReseller() {
  return (
    <PageWrapper>
      {/* Hero */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <Zoom triggerOnce={false}>
            <HeroTitle>Become a Reseller with Elexdon Host</HeroTitle>
            <HeroSubtitle>
              Partner with us and start offering premium hosting, email, and
              digital solutions under your own brand. Scale your business with
              reliable infrastructure and full support.
            </HeroSubtitle>
          </Zoom>
        </HeroContent>
      </HeroSection>

      {/* Why Partner with Us */}
      <Section>
        <Fade cascade triggerOnce={false}>
          <SectionTitle>Why Partner with Elexdon Host?</SectionTitle>
          <Grid>
            <Card>
              <CardTitle>Trusted Infrastructure</CardTitle>
              <p>Reliable hosting powered by cutting-edge technology.</p>
            </Card>
            <Card>
              <CardTitle>White-Label Branding</CardTitle>
              <p>Sell under your own brand with no hidden references.</p>
            </Card>
            <Card>
              <CardTitle>Scalable Solutions</CardTitle>
              <p>Grow effortlessly as your customers increase.</p>
            </Card>
            <Card>
              <CardTitle>24/7 Support</CardTitle>
              <p>Dedicated reseller support team always here to help.</p>
            </Card>
          </Grid>
        </Fade>
      </Section>

      {/* Benefits */}
      <Section bg="#f9f9f9">
        <SectionTitle>Reseller Benefits</SectionTitle>
        <Slide direction="up" cascade triggerOnce={false}>
          <Grid>
            <Card>
              <CardTitle>High Profit Margins</CardTitle>
              <p>Earn more with flexible pricing and bulk discounts.</p>
            </Card>
            <Card>
              <CardTitle>Easy Management</CardTitle>
              <p>Intuitive control panel for managing clients and resources.</p>
            </Card>
            <Card>
              <CardTitle>Marketing Materials</CardTitle>
              <p>Get pre-built marketing kits to grow your business faster.</p>
            </Card>
            <Card>
              <CardTitle>Full Automation</CardTitle>
              <p>Billing and provisioning automated for seamless operations.</p>
            </Card>
          </Grid>
        </Slide>
      </Section>

      {/* Steps */}
      <Section>
        <SectionTitle>How to Get Started</SectionTitle>
        <Fade cascade triggerOnce={false}>
          <Grid>
            <Card>
              <CardTitle>1. Sign Up</CardTitle>
              <p>Create your reseller account with Elexdon Host.</p>
            </Card>
            <Card>
              <CardTitle>2. Customize</CardTitle>
              <p>Set pricing and brand your services to match your business.</p>
            </Card>
            <Card>
              <CardTitle>3. Start Selling</CardTitle>
              <p>Offer hosting and digital solutions to your clients instantly.</p>
            </Card>
            <Card>
              <CardTitle>4. Grow with Us</CardTitle>
              <p>Scale your business with our infrastructure and support.</p>
            </Card>
          </Grid>
        </Fade>
      </Section>

      {/* Call to Action */}
      <CTASection>
        <Zoom triggerOnce={false}>
          <h2>Ready to Build Your Hosting Business?</h2>
          <p>
            Join Elexdon Host’s reseller program today and unlock new revenue
            opportunities.
          </p>
          <CTAButton href="mailto:partners@elexdontech.com">
            Apply as a Reseller
          </CTAButton>
        </Zoom>
      </CTASection>
    </PageWrapper>
  );
}
