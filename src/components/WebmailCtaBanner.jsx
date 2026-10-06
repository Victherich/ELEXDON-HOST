// import React from 'react';
// import styled from 'styled-components';
// import webmail from '../Images/webmail.jpeg'
// import { useNavigate } from 'react-router-dom';

// // ==========================================
// // STYLED COMPONENTS (Matching Core Theme)
// // ==========================================

// const CtaContainer = styled.section`
//   max-width: 1200px;
//   margin: 60px auto;
//   padding: 0 20px;
//   box-sizing: border-box;
// `;

// const CardWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   background: #ffffff;
//   border-radius: 16px;
//   overflow: hidden;
//   box-shadow: 0 15px 35px rgba(0, 50, 150, 0.08);
//   border: 1px solid #e1e8ed;
  
//   @media (max-width: 992px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ContentColumn = styled.div`
//   padding: 50px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
  
//   @media (max-width: 576px) {
//     padding: 30px 20px;
//   }
// `;

// const ImageColumn = styled.div`
// background: url(${webmail}) no-repeat center center;  background-size: cover;
//   min-height: 350px;
  
//   @media (max-width: 992px) {
//     height: 250px;
//     min-height: unset;
//     grid-row: 1; /* Puts image on top on mobile screens */
//   }
// `;

// const Tag = styled.span`
//   background-color: #e6f0ff;
//   color: #0052cc;
//   font-size: 0.85rem;
//   font-weight: 700;
//   padding: 6px 12px;
//   border-radius: 20px;
//   width: fit-content;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   margin-bottom: 20px;
// `;

// const Title = styled.h2`
//   color: #002e7a;
//   font-size: 2.2rem;
//   line-height: 1.3;
//   margin: 0 0 15px 0;
//   font-weight: 700;
  
//   @media (max-width: 576px) {
//     font-size: 1.75rem;
//   }
// `;

// const Description = styled.p`
//   color: #555555;
//   font-size: 1.05rem;
//   line-height: 1.6;
//   margin: 0 0 30px 0;
// `;

// const ActionButton = styled.a`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #0052cc;
//   color: #ffffff;
//   text-decoration: none;
//   font-size: 1.1rem;
//   font-weight: 600;
//   padding: 14px 32px;
//   border-radius: 8px;
//   width: fit-content;
//   transition: all 0.3s ease;
//   box-shadow: 0 4px 12px rgba(0, 82, 204, 0.2);

//   &:hover {
//     background-color: #003d99;
//     transform: translateY(-2px);
//     box-shadow: 0 6px 18px rgba(0, 82, 204, 0.3);
//     color: #ffffff;
//   }

//   &:active {
//     transform: translateY(0);
//   }
// `;

// // ==========================================
// // RENDER MODULE
// // ==========================================

// export default function WebmailCtaBanner() {
//     const navigate = useNavigate();
//   return (
//     <CtaContainer>
//       <CardWrapper>
        
//         {/* Left Side: Information Hook */}
//         <ContentColumn>
//           <Tag>Identity Upgrade</Tag>
//           <Title>Looking for a Professional Corporate Email?</Title>
//           <Description>
//             Stop using public domains like generic @gmail.com accounts for business deals. Win big-budget clients, secure corporate communication channels, and build lasting trust using your custom branded brand name address.
//           </Description>
          
//           {/* Update the href string path to link exactly to where your form page file lives */}
//           <ActionButton onClick={()=>navigate('/webmail')}>
//             Configure Your Webmail Now
//           </ActionButton>
//         </ContentColumn>

//         {/* Right Side: Unsplash High Resolution Corporate Context Graphic */}
//         <ImageColumn />

//       </CardWrapper>
//     </CtaContainer>
//   );
// }



// import React from 'react';
// import styled from 'styled-components';
// import webmail from '../Images/webmail.jpeg';
// import { useNavigate } from 'react-router-dom';

// // ==========================================
// // SECTION
// // ==========================================

// const Section = styled.section`
//   max-width: 1200px;
//   margin: 10px auto;
//   padding: 10px;
//   box-sizing: border-box;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   overflow: hidden;
//   min-height: 390px;
//   background: #f7faff;
//   border: 1px solid #e5edf7;
//   border-radius: 10px;

//   display: grid;
//   grid-template-columns: 1.05fr 0.95fr;
//   align-items: center;

//   @media (max-width: 800px) {
//     grid-template-columns: 1fr;
//     min-height: auto;
//   }
// `;

// // ==========================================
// // LEFT CONTENT
// // ==========================================

// const Content = styled.div`
//   padding: 10px 10px 10px 20px;

//   @media (max-width: 800px) {
//     padding: 20px 10px 10px;
//   }
// `;

// const SmallLabel = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 7px;
//   margin-bottom: 10px;

//   color: #1670ce;
//   font-size: 0.72rem;
//   font-weight: 800;
//   text-transform: uppercase;
//   letter-spacing: 1.2px;
// `;

// const LabelDot = styled.span`
//   width: 7px;
//   height: 7px;
//   border-radius: 50%;
//   background: #1670ce;
// `;

// const Title = styled.h2`
//   max-width: 600px;
//   margin: 0 0 10px;

//   color: #102a43;
//   font-size: clamp(2rem, 4vw, 3.4rem);
//   line-height: 1.05;
//   letter-spacing: -1.8px;
//   font-weight: 800;
// `;

// const Highlight = styled.span`
//   color: #0866c6;
// `;

// const Description = styled.p`
//   max-width: 560px;
//   margin: 0 0 10px;

//   color: #61758a;
//   font-size: 0.95rem;
//   line-height: 1.6;
// `;

// // ==========================================
// // EMAIL ADDRESS DISPLAY
// // ==========================================

// const EmailLine = styled.div`
//   display: flex;
//   align-items: center;
//   max-width: 510px;

//   margin: 10px 0;

//   border-top: 1px solid #dce7f2;
//   border-bottom: 1px solid #dce7f2;

//   @media (max-width: 500px) {
//     display: block;
//     padding: 8px 0;
//   }
// `;

// const EmailIcon = styled.div`
//   width: 35px;
//   height: 35px;
//   margin-right: 8px;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   color: #0866c6;
//   font-size: 1rem;
// `;

// const EmailText = styled.div`
//   color: #183b61;
//   font-size: 0.85rem;
//   font-weight: 700;

//   span {
//     color: #6d8093;
//     font-weight: 500;
//   }
// `;

// // ==========================================
// // BUTTON
// // ==========================================

// const Button = styled.button`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;

//   border: none;
//   cursor: pointer;

//   padding: 10px 14px;

//   background: #0866c6;
//   color: #fff;

//   border-radius: 5px;

//   font-size: 0.85rem;
//   font-weight: 700;

//   transition: 0.25s ease;

//   &:hover {
//     background: #0755a5;
//     transform: translateY(-1px);
//   }
// `;

// const Arrow = styled.span`
//   font-size: 1.05rem;
// `;

// // ==========================================
// // RIGHT VISUAL
// // ==========================================

// const Visual = styled.div`
//   position: relative;
//   height: 100%;
//   min-height: 390px;

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   padding: 10px;

//   @media (max-width: 800px) {
//     min-height: 240px;
//   }
// `;

// const ImageFrame = styled.div`
//   position: relative;

//   width: 88%;
//   height: 300px;

//   overflow: hidden;

//   @media (max-width: 800px) {
//     width: 100%;
//     height: 220px;
//   }
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;

//   display: block;

//   object-fit: cover;

//   filter: saturate(0.9);
// `;

// // ==========================================
// // IMAGE SIDE DETAILS
// // ==========================================

// const VerticalText = styled.div`
//   position: absolute;
//   right: 10px;
//   top: 50%;

//   transform: translateY(-50%) rotate(90deg);

//   transform-origin: center;

//   color: rgba(255, 255, 255, 0.9);

//   font-size: 0.65rem;
//   font-weight: 800;
//   letter-spacing: 2px;
//   text-transform: uppercase;

//   white-space: nowrap;

//   @media (max-width: 800px) {
//     display: none;
//   }
// `;

// const ImageNumber = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 0;

//   padding: 7px 10px;

//   background: #0866c6;
//   color: white;

//   font-size: 0.7rem;
//   font-weight: 700;
// `;

// // ==========================================
// // BOTTOM DETAILS
// // ==========================================

// const Bottom = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   padding: 8px 2px 0;

//   color: #71859a;
//   font-size: 0.7rem;

//   @media (max-width: 600px) {
//     display: block;
//   }
// `;

// const BottomLeft = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;

//   @media (max-width: 600px) {
//     flex-wrap: wrap;
//   }
// `;

// const Detail = styled.span`
//   display: flex;
//   align-items: center;
//   gap: 4px;

//   strong {
//     color: #0866c6;
//   }
// `;

// const BottomRight = styled.span`
//   color: #8798a9;

//   @media (max-width: 600px) {
//     display: block;
//     margin-top: 5px;
//   }
// `;

// // ==========================================
// // COMPONENT
// // ==========================================

// export default function WebmailCtaBanner() {
//   const navigate = useNavigate();

//   return (
//     <Section>

//       <Wrapper>

//         <Content>

//           <SmallLabel>
//             <LabelDot />
//             Business Communication
//           </SmallLabel>

//           <Title>
//             Make Your Email
//             <br />
//             Part of Your <Highlight>Brand.</Highlight>
//           </Title>

//           <Description>
//             Give your business a professional identity with a custom
//             email address connected to your own domain.
//           </Description>

//           <EmailLine>

//             <EmailIcon>
//               ✉
//             </EmailIcon>

//             <EmailText>
//               hello@yourbusiness.com
//               <span> — your brand, not a generic inbox</span>
//             </EmailText>

//           </EmailLine>

//           <Button onClick={() => navigate('/webmail')}>
//             Create Your Business Email
//             <Arrow>→</Arrow>
//           </Button>

//         </Content>

//         <Visual>

//           <ImageFrame>

//             <Image
//               src={webmail}
//               alt="Professional business email"
//             />

//             <ImageNumber>
//               01 / WEBMAIL
//             </ImageNumber>

//           </ImageFrame>

//           <VerticalText>
//             Professional Digital Identity
//           </VerticalText>

//         </Visual>

//       </Wrapper>

//       <Bottom>

//         <BottomLeft>

//           <Detail>
//             <strong>✓</strong>
//             Custom domain
//           </Detail>

//           <Detail>
//             <strong>✓</strong>
//             Professional identity
//           </Detail>

//           <Detail>
//             <strong>✓</strong>
//             Business ready
//           </Detail>

//         </BottomLeft>

//         <BottomRight>
//           Built for businesses that mean business
//         </BottomRight>

//       </Bottom>

//     </Section>
//   );
// }




import React from 'react';
import styled from 'styled-components';
import webmail from '../Images/webmail.jpeg';
import { useNavigate } from 'react-router-dom';

// ==========================================
// SECTION
// ==========================================

const Section = styled.section`
  max-width: 1200px;
  margin: 10px auto;
  padding: 10px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 390px;
  background: linear-gradient(135deg, #f7f5ff 0%, #ffffff 100%);
  border: 1px solid #eae2f8;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(147, 51, 234, 0.04);

  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

// ==========================================
// LEFT CONTENT
// ==========================================

const Content = styled.div`
  padding: 20px 10px 20px 30px;

  @media (max-width: 800px) {
    padding: 30px 20px 20px;
  }
`;

const SmallLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 12px;

  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

const LabelDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
`;

const Title = styled.h2`
  max-width: 600px;
  margin: 0 0 12px;

  color: #102a43;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.05;
  letter-spacing: -1.8px;
  font-weight: 800;
`;

const Highlight = styled.span`
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  max-width: 560px;
  margin: 0 0 15px;

  color: #61758a;
  font-size: 0.95rem;
  line-height: 1.6;
`;

// ==========================================
// EMAIL ADDRESS DISPLAY
// ==========================================

const EmailLine = styled.div`
  display: flex;
  align-items: center;
  max-width: 510px;
  margin: 15px 0;
  border-top: 1px solid #eee2f6;
  border-bottom: 1px solid #eee2f6;

  @media (max-width: 500px) {
    display: block;
    padding: 10px 0;
  }
`;

const EmailIcon = styled.div`
  width: 35px;
  height: 35px;
  margin-right: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #4f46e5, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.1rem;
`;

const EmailText = styled.div`
  color: #183b61;
  font-size: 0.85rem;
  font-weight: 700;

  span {
    color: #6d8093;
    font-weight: 500;
  }
`;

// ==========================================
// BUTTON
// ==========================================

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  border: none;
  cursor: pointer;

  padding: 12px 20px;

  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  color: #fff;

  border-radius: 8px;

  font-size: 0.88rem;
  font-weight: 700;

  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(147, 51, 234, 0.4);
    background: linear-gradient(135deg, #4338ca 0%, #7e22ce 100%);
  }
`;

const Arrow = styled.span`
  font-size: 1.05rem;
  transition: transform 0.2s ease;

  ${Button}:hover & {
    transform: translateX(3px);
  }
`;

// ==========================================
// RIGHT VISUAL
// ==========================================

const Visual = styled.div`
  position: relative;
  height: 100%;
  min-height: 390px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  @media (max-width: 800px) {
    min-height: 240px;
  }
`;

const ImageFrame = styled.div`
  position: relative;
  width: 88%;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(79, 70, 229, 0.12);

  @media (max-width: 800px) {
    width: 100%;
    height: 220px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  filter: saturate(0.95) contrast(1.05);
`;

// ==========================================
// IMAGE SIDE DETAILS
// ==========================================

const VerticalText = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;

  transform: translateY(-50%) rotate(90deg);
  transform-origin: center;

  background: linear-gradient(135deg, #ffffff, #e0c3fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: nowrap;

  @media (max-width: 800px) {
    display: none;
  }
`;

const ImageNumber = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  padding: 7px 12px;

  background: linear-gradient(135deg, #4f46e5, #9333ea);
  color: white;

  font-size: 0.7rem;
  font-weight: 700;
  border-top-right-radius: 6px;
`;

// ==========================================
// BOTTOM DETAILS
// ==========================================

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 12px 10px 0;

  color: #71859a;
  font-size: 0.75rem;

  @media (max-width: 600px) {
    display: block;
  }
`;

const BottomLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const Detail = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;

  strong {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
  }
`;

const BottomRight = styled.span`
  color: #8798a9;

  @media (max-width: 600px) {
    display: block;
    margin-top: 6px;
  }
`;

// ==========================================
// COMPONENT
// ==========================================

export default function WebmailCtaBanner() {
  const navigate = useNavigate();

  return (
    <Section>
      <Wrapper>
        <Content>
          <SmallLabel>
            <LabelDot />
            Business Communication
          </SmallLabel>

          <Title>
            Webmail <Highlight>Hosting</Highlight>
          </Title>

          <Description>
            Give your business a professional identity with a custom
            email address connected to your own domain.
          </Description>

          <EmailLine>
            <EmailIcon>✉</EmailIcon>
            <EmailText>
              hello@yourbusiness.com
              <span> — your brand, not a generic inbox</span>
            </EmailText>
          </EmailLine>

          <Button onClick={() => navigate('/webmail')}>
            Create Your Business Email
            <Arrow>→</Arrow>
          </Button>
        </Content>

        <Visual>
          <ImageFrame>
            <Image
              src={webmail}
              alt="Professional business email"
            />
            <ImageNumber>
              01 / WEBMAIL
            </ImageNumber>
          </ImageFrame>

          <VerticalText>
            Professional Digital Identity
          </VerticalText>
        </Visual>
      </Wrapper>

      <Bottom>
        <BottomLeft>
          <Detail>
            <strong>✓</strong>
            Custom domain
          </Detail>
          <Detail>
            <strong>✓</strong>
            Professional identity
          </Detail>
          <Detail>
            <strong>✓</strong>
            Business ready
          </Detail>
        </BottomLeft>

        <BottomRight>
          Built for businesses that mean business
        </BottomRight>
      </Bottom>
    </Section>
  );
}