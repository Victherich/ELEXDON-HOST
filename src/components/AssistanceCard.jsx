import React from 'react';
import styled from 'styled-components';
import supportimg from '../Images/supportimg.png'

// Container for the whole component with gradient background
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
//   max-width: 1000px;
  margin: 0 auto;
//   border-radius: 1.5rem;
  overflow: hidden;
  background: linear-gradient(135deg, #09091b, #9333ea);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 380px;
  }
`;

// Left column holding the text and action buttons
const LeftColumn = styled.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;

  @media (min-width: 768px) {
    padding: 3.5rem;
  }
`;

// Heading text
const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 1rem 0;
  letter-spacing: -0.025em;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Subtitle description text
const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  opacity: 0.9;
  font-weight: 400;
`;

// Button group wrapper
const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

// Base Button style
const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.75rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &:active {
    transform: scale(0.98);
  }
`;

// Primary action button ("Chat with us")
const ChatButton = styled(Button)`
  background-color: #ffffff;
  color: #4f46e5;

  &:hover {
    background-color: #f8fafc;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

// Secondary action button ("Knowledge base")
const KnowledgeButton = styled(Button)`
  background-color: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

// Right column holding the image container
const RightColumn = styled.div`
  flex: 1;
  position: relative;
  min-height: 250px;
//   background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: auto;
  }
`;

// Styled image to fill the right column nicely
const SupportImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export default function AssistanceCard() {
  return (
    <Container>
      <LeftColumn>
        <Title>Need help?</Title>
        <Description>
          Reach out to our local support experts.
        </Description>
        <ButtonGroup>
          <ChatButton onClick={() => alert('Opening chat...')}>
            Chat with us
          </ChatButton>
          <KnowledgeButton onClick={() => alert('Opening knowledge base...')}>
            Knowledge base
          </KnowledgeButton>
        </ButtonGroup>
      </LeftColumn>
      <RightColumn>
        <SupportImage
          src={supportimg}
          alt="Nigerian support team assistance"
        />
      </RightColumn>
    </Container>
  );
}