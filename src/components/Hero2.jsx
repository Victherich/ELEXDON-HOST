import React from 'react';
import styled, { keyframes } from 'styled-components';
import dragon1 from '../Images/f1.png';
import dragon2 from '../Images/f2.png';
import dragon3 from '../Images/f3.png';
import dragon4 from '../Images/f4.png';
import dragon5 from '../Images/f5.png';
import dragon6 from '../Images/fp6.png';
import dragon7 from '../Images/f1.png';
import dragon8 from '../Images/f2.png';
import dragon9 from '../Images/f3.png';
import dragon10 from '../Images/f4.png';

const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const floatOrb = keyframes`
  0%, 100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
`;

const GlobalBackground = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* Clean light theme background with subtle grid lines */
  background-color: #f8fafc;
  background-image:
    repeating-linear-gradient(to right, transparent 0 100px, rgba(79, 70, 229, 0.04) 100px 101px),
    repeating-linear-gradient(to bottom, transparent 0 100px, rgba(147, 51, 234, 0.04) 100px 101px);
  position: relative;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 60px 0;

  /* Ambient glowing light orbs */
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    pointer-events: none;
    z-index: 0;
  }

  &::before {
    top: 10%;
    left: 15%;
    width: 280px;
    height: 280px;
    background: rgba(79, 70, 229, 0.08);
    animation: ${floatOrb} 8s ease-in-out infinite;
  }

  &::after {
    bottom: 10%;
    right: 15%;
    width: 300px;
    height: 300px;
    background: rgba(147, 51, 234, 0.08);
    animation: ${floatOrb} 10s ease-in-out infinite reverse;
  }
`;

const HeaderContent = styled.div`
  text-align: center;
  z-index: 2;
  padding: 0 20px 30px 20px;

  h2 {
    font-size: 2.2rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 10px;
    letter-spacing: -0.5px;
    
    span {
      background: linear-gradient(135deg, #4f46e5, #9333ea);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  p {
    color: #64748b;
    font-size: 1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
  z-index: 2;

  /* Clean gradient fade edges blending into the light background */
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 140px;
    height: 100%;
    z-index: 3;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #f8fafc, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #f8fafc, transparent);
  }
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  gap: 24px;
  animation: ${scrollLeft} 35s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Card = styled.div`
  width: 220px;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  flex-shrink: 0;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(147, 51, 234, 0.4);
    box-shadow: 0 15px 30px -5px rgba(147, 51, 234, 0.15);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Hero2 = () => {
  const images = [
    dragon1, dragon2, dragon3, dragon4, dragon5, 
    dragon6, dragon7, dragon8, dragon9, dragon10
  ];

  // Duplicate for smooth seamless looping
  const loopImages = [...images, ...images];

  return (
    <GlobalBackground>
      <HeaderContent>
        <h2>Powered by <span>Elexdon Infrastructure</span></h2>
        <p>Explore our high-performance cloud assets, templates, and server nodes.</p>
      </HeaderContent>
      
      <SliderContainer>
        <Track>
          {loopImages.map((img, i) => (
            <Card key={i}>
              <img src={img} alt={`Slide item ${i + 1}`} />
            </Card>
          ))}
        </Track>
      </SliderContainer>
    </GlobalBackground>
  );
};

export default Hero2;