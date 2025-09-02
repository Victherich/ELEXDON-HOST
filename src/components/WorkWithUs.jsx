
import React from "react";
import styled from "styled-components";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

// Background image (replace with your own)
import bgImage from "../Images/workwithus.png";
import Swal from "sweetalert2";


// ---------- Styled Components ----------
const PageWrapper = styled.div`
  font-family: "Inter", sans-serif;
  color: #222;
`;

/* Hero Section */
const HeroSection = styled.section`
  background: url(${bgImage}) center/cover no-repeat;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  padding-top:50px;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media(max-width:320px){
  font-size:2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
`;

/* About Section */
const Section = styled.section`
  padding: 5rem 2rem;
  background: ${(props) => props.bg || "white"};
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #0d47a1;
`;

/* Benefits */
const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const BenefitCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const BenefitTitle = styled.h3`
  margin-bottom: 1rem;
  color: #ff6b00;
`;

/* Roles */
const RolesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const RoleCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
`;

const RoleTitle = styled.h3`
  color: #0d47a1;
  margin-bottom: 1rem;
`;

const ApplyButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background: #ff6b00;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
  cursor:pointer;
  &:hover {
    background: #e65a00;
  }
`;

/* CTA */
const CTASection = styled.section`
  padding: 4rem 2rem;
  background: #0d47a1;
  text-align: center;
  color: white;
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
  &:hover {
    background: #e65a00;
  }
`;

// ---------- Page Component ----------
export default function WorkWithUs() {

const comingSoon = ()=>{

    Swal.fire({text:"Coming Soon..."})
}
 
  return (
    <PageWrapper>
      {/* Hero */}
      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <Zoom triggerOnce={false}>
            <HeroTitle>Work With Us at Elexdon Tech</HeroTitle>
            <HeroSubtitle>
              At Elexdon Tech, we build cutting-edge hosting and digital solutions
              that empower businesses worldwide. Join a team that values innovation,
              creativity, and growth.
            </HeroSubtitle>
          </Zoom>
        </HeroContent>
      </HeroSection>

      {/* About Us */}
      <Section>
        <Fade cascade triggerOnce={false}>
          <SectionTitle>Why Join Elexdon Tech?</SectionTitle>
          <p style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            At Elexdon Tech, we’re more than just a tech company. We’re a family of
            problem-solvers, innovators, and dreamers. Working here means being part
            of a supportive culture where your ideas matter, your growth is encouraged,
            and your impact is real.
          </p>
        </Fade>
      </Section>

      {/* Benefits */}
      <Section bg="#f9f9f9">
        <SectionTitle>Perks & Benefits</SectionTitle>
        <BenefitsGrid>
          <Slide direction="up" cascade triggerOnce={false}>
            <BenefitCard>
              <BenefitTitle>Flexible Work</BenefitTitle>
              <p>Remote-friendly with hybrid options for a healthy work-life balance.</p>
            </BenefitCard>
            <BenefitCard>
              <BenefitTitle>Learning & Growth</BenefitTitle>
              <p>Access to courses, certifications, and mentorship programs.</p>
            </BenefitCard>
            <BenefitCard>
              <BenefitTitle>Health & Wellness</BenefitTitle>
              <p>Comprehensive health coverage and wellness perks.</p>
            </BenefitCard>
            <BenefitCard>
              <BenefitTitle>Inclusive Culture</BenefitTitle>
              <p>A diverse, welcoming, and innovative team environment.</p>
            </BenefitCard>
          </Slide>
        </BenefitsGrid>
      </Section>

      {/* Open Roles */}
      <Section>
        <SectionTitle>Open Roles</SectionTitle>
        <RolesGrid>
          <Fade cascade triggerOnce={false}>
            <RoleCard>
              <RoleTitle>Frontend Developer</RoleTitle>
              <p>Build modern, scalable UIs with React and cutting-edge web tech.</p>
              <ApplyButton onClick={comingSoon}>
                Apply Now
              </ApplyButton>
            </RoleCard>

            <RoleCard>
              <RoleTitle>Backend Engineer</RoleTitle>
              <p>Design secure, high-performance APIs and hosting solutions.</p>
              <ApplyButton onClick={comingSoon}>
                Apply Now
              </ApplyButton>
            </RoleCard>

            <RoleCard>
              <RoleTitle>UI/UX Designer</RoleTitle>
              <p>Create intuitive, beautiful user experiences for global clients.</p>
              <ApplyButton onClick={comingSoon}>
                Apply Now
              </ApplyButton>
            </RoleCard>
          </Fade>
        </RolesGrid>
      </Section>

      {/* Call to Action */}
      <CTASection>
        <Zoom triggerOnce={false}>
          <h2>Ready to Shape the Future with Elexdon Tech?</h2>
          <p>We’re always looking for passionate, driven people to join our team.</p>
          <CTAButton href="mailto:careers@elexdontech.com">
            Send Your CV
          </CTAButton>
        </Zoom>
      </CTASection>
    </PageWrapper>
  );
}
