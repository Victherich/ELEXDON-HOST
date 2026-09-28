

// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// // import { useSelector } from 'react-redux';

// const spinY = keyframes`
//   0% { transform: rotateY(0deg); }
//   100% { transform: rotateY(360deg); }
// `;

// const spaceBackgroundLight = `
//   radial-gradient(circle at 20% 40%, #dbeafe 0%, #e0f2fe 20%, #f8fafc 80%),
//   linear-gradient(to right, #f1f5f9, #e2e8f0)
// `;

// const spaceBackgroundDark = `
//   radial-gradient(circle at 30% 30%, #0f172a 0%, #1e293b 30%, #000000 90%)
// `;

// const Container = styled.div`
//   padding: 50px 10px;
//   background: ${({ theme }) =>
//     theme === 'dark' ? spaceBackgroundDark : spaceBackgroundLight};
//   background-size: cover;
//   background-repeat: no-repeat;
  
//   color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#1e293b')};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 3rem;
//   color: ${({ theme }) => (theme === 'dark' ? 'white' : '#FF7133')};
// `;

// const Grid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 2rem;
// `;

// const Sphere = styled.div`
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
//   background: ${({ theme }) =>
//     theme === 'dark'
//       ? 'radial-gradient(circle at 35% 35%, #fbbf24, #78350f)'
//       : 'radial-gradient(circle at 35% 35%, #FF7133, #b45309)'};
//   color: #fff;
//   font-weight: bold;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   animation: ${spinY} 12s linear infinite;
//   transform-style: preserve-3d;
//   box-shadow: 0 0 30px rgba(255, 255, 255, 0.05);
//   text-shadow: 0 0 6px rgba(0, 0, 0, 0.4);
// `;

// const DomainNameSpace = () => {
// //   const theme = useSelector((state) => state.theme);
//   const theme = false;

//   const qualifications = [
//     '.com', '.net', '.org', '.com.ng', '.ng', '.store',
//   ];

//   return (
//     <Container theme={theme === true ? 'light' : 'dark'}>
//       <Title theme={theme === true ? 'light' : 'dark'}>
//         Popular TLDs
//       </Title>
//       <Grid>
//         {qualifications.map((qual, index) => (
//           <Sphere key={index} theme={theme === true ? 'light' : 'dark'}>
//             {qual}
//           </Sphere>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default DomainNameSpace;




import React from 'react';
import styled, { keyframes } from 'styled-components';
// import { useSelector } from 'react-redux';

const floatAnim = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

const Container = styled.section`
  padding: 60px 20px;
  background: ${({ theme }) => (theme === 'dark' ? '#090d16' : '#f8fafc')};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#0f172a')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  border-radius:20px;
`;

const HeaderWrapper = styled.div`
  text-align: center;
  max-width: 700px;
  margin-bottom: 40px;

  span {
    color: #9333ea;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    display: block;
    margin-bottom: 8px;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#0f172a')};
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const TldCard = styled.div`
  background: ${({ theme }) => (theme === 'dark' ? '#0f172a' : '#ffffff')};
  border: 1px solid ${({ theme }) => (theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : '#e2e8f0')};
  border-radius: 14px;
  padding: 24px 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${floatAnim} 6s ease-in-out infinite;
  animation-delay: ${({ index }) => `${index * 0.4}s`};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    border-color: #9333ea;
    background: ${({ theme }) => (theme === 'dark' ? '#131c31' : '#f8fafc')};
    box-shadow: 0 10px 30px rgba(147, 51, 234, 0.2);

    .tld-name {
      color: #c084fc;
    }
  }
`;

const TldName = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#0f172a')};
  margin: 0 0 8px 0;
  transition: color 0.3s ease;
`;

const TldBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.3px;
`;

const DomainNameSpace = () => {
  // const theme = useSelector((state) => state.theme);
  const theme = false; // defaults to dark theme based on component style logic
  const currentTheme = theme === true ? 'light' : 'dark';

  const qualifications = [
    { tld: '.com', tag: 'Most Popular' },
    { tld: '.net', tag: 'Reliable & Secure' },
    { tld: '.org', tag: 'Trusted Authority' },
    { tld: '.com.ng', tag: 'Local Business' },
    { tld: '.ng', tag: 'Nigerian Pride' },
    { tld: '.store', tag: 'E-Commerce' },
  ];

  return (
    <Container theme={currentTheme}>
      <HeaderWrapper>
        <span>Top Level Domains</span>
        <Title theme={currentTheme}>Explore Popular TLD Extensions</Title>
      </HeaderWrapper>
      <Grid>
        {qualifications.map((item, index) => (
          <TldCard key={index} theme={currentTheme} index={index}>
            <TldName className="tld-name" theme={currentTheme}>
              {item.tld}
            </TldName>
            <TldBadge>{item.tag}</TldBadge>
          </TldCard>
        ))}
      </Grid>
    </Container>
  );
};

export default DomainNameSpace;