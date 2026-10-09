// // LoginPage.js
// import React from 'react';
// import styled from 'styled-components';
// import bg from '../Images/herobg5.jpg';
// import illustration from '../Images/logo4.jpeg';
// import Swal from 'sweetalert2';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuthContainer = styled.div`
//   position: relative;
//   display: flex;
//   min-height: 100vh;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;
//   background: url(${bg}) no-repeat center center/cover;
//   z-index: 0;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(255, 255, 255, 0.7); /* White overlay with 70% opacity */
//     z-index: 1;
//   }

//   > * {
//     position: relative;
//     z-index: 2;
//   }

//    @media(max-width:428px){
//     padding:0.5rem;
//   }
// `;

// const AuthCard = styled.div`
//   background: rgba(255, 255, 255, 0.5);
//   border-radius: 20px;
//   padding: 3rem;
//   max-width: 450px;
//   width: 100%;
//   box-shadow: 0 10px 40px rgba(0,0,0,0.15);

//    @media(max-width:428px){
//     padding:1rem;
//     box-shadow:none;
//     img{
//     display:none;
//     }
//   }
// `;

// const Title = styled.h2`
//   text-align: center;
//   color: #2B32B2;
//   margin-bottom: 1.5rem;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 1rem;
//   margin-bottom: 1.25rem;
//   border-radius: 10px;
//   border: 1px solid #cbd5e1;
//   font-size: 1rem;
//   box-sizing: border-box;
// `;

// const Button = styled.button`
//   width: 100%;
//   background: #2B32B2;
//   color: white;
//   padding: 1rem;
//   border: none;
//   border-radius: 10px;
//   font-size: 1rem;
//   cursor: pointer;
//   transition: 0.3s;

//   &:hover {
//     background: #1e2a91;
//   }
// `;

// const LinkText = styled.p`
//   text-align: center;
//   margin-top: 1rem;
//   font-size: 0.9rem;
//   cursor:pointer;

//   a {
//     color: #2B32B2;
//     text-decoration: none;
//     font-weight: bold;
//   }
// `;

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();



//  useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       navigate('/dashboard');
//     }
//   }, []);





// const handleLogin = async () => {
//   if (!email || !password) {
//     Swal.fire({ icon: 'warning', text: 'Please enter email and password.' });
//     return;
//   }

//   try {
//     Swal.fire({
//       title: 'Logging in...',
//       allowOutsideClick: false,
//       didOpen: () => {
//         Swal.showLoading();
//       }
//     });

//     const res = await fetch('https://www.elexdonhost.com/api_elexdonhost/login.php', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password })
//     });

//     const data = await res.json();
//     Swal.close(); // close loading

//     if (data.success) {
//       Swal.fire({ icon: 'success', text: 'Login successful!' });
//       localStorage.setItem('user', JSON.stringify(data.user));
//       navigate('/dashboard');
//     } else {
//       console.log(data);
//       Swal.fire({ icon: 'error', text: data.message || 'Login failed' });
//     }
//   } catch (error) {
//     console.error(error);
//     Swal.close(); // close loading on error too
//     Swal.fire({ icon: 'error', text: 'Server error' });
//   }
// };




//   return (
//     <AuthContainer>
//        <AuthCard>
//         <img src={illustration} alt="Login" style={{ width: '100%', marginBottom: '1rem' }} />
//         <Title>Welcome Back, Please Login</Title>
//         <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <Button onClick={handleLogin}>Login</Button>
//         <LinkText><a onClick={()=>navigate('/signup')}>Don't have an accocunt? Register.</a></LinkText>
//         <LinkText><a onClick={()=>navigate('/forgot-password')}>Forgot Password?</a></LinkText>
      
//       </AuthCard>
//     </AuthContainer>
//   );
// };

// export default LoginPage;






// // LoginPage.js
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import bg from '../Images/herobg5.jpg';
// import illustration from '../Images/logo4.jpeg';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const AuthContainer = styled.div`
//   position: relative;
//   display: flex;
//   min-height: 100vh;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;
//   background: url(${bg}) no-repeat center center/cover;
//   z-index: 0;
//   overflow: hidden;

//   @media(max-width: 428px) {
//     padding: 1rem;
//   }

//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//      background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), rgba(0, 0, 0, 0.5);
   
//     // background: linear-gradient(135deg, rgba(79, 70, 229, 0.15), rgba(147, 51, 234, 0.15)), rgba(255, 255, 255, 0.75);
//     backdrop-filter: blur(8px);
//     z-index: 1;
//   }

//   > * {
//     position: relative;
//     z-index: 2;
//   }
// `;

// const AuthCard = styled.div`
//   background: rgba(255, 255, 255, 0.85);
//   backdrop-filter: blur(16px);
//   -webkit-backdrop-filter: blur(16px);
//   border: 1px solid rgba(255, 255, 255, 0.6);
//   border-radius: 24px;
//   padding: 2.5rem;
//   max-width: 460px;
//   width: 100%;
//   box-shadow: 0 20px 50px rgba(79, 70, 229, 0.15), 0 4px 12px rgba(0, 0, 0, 0.05);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     box-shadow: 0 25px 60px rgba(79, 70, 229, 0.22), 0 6px 16px rgba(0, 0, 0, 0.08);
//   }

//   @media(max-width: 428px) {
//     padding: 1.5rem;
//     border-radius: 16px;
//     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    
//     img {
//       display: none;
//     }
//   }
// `;

// const ImageWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   margin-bottom: 1.5rem;

//   img {
//     width: 80px;
//     height: 80px;
//     object-fit: cover;
//     border-radius: 20px;
//     box-shadow: 0 8px 20px rgba(79, 70, 229, 0.2);
//     border: 2px solid rgba(255, 255, 255, 0.8);
//   }
// `;

// const Title = styled.h2`
//   text-align: center;
//   color: #1e1b4b;
//   font-size: 1.6rem;
//   font-weight: 700;
//   margin-bottom: 0.5rem;
//   letter-spacing: -0.02em;
// `;

// const Subtitle = styled.p`
//   text-align: center;
//   color: #64748b;
//   font-size: 0.95rem;
//   margin-bottom: 2rem;
//   line-height: 1.5;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 1rem 1.25rem;
//   margin-bottom: 1.25rem;
//   border-radius: 12px;
//   border: 1px solid #cbd5e1;
//   background: rgba(255, 255, 255, 0.9);
//   font-size: 1rem;
//   box-sizing: border-box;
//   outline: none;
//   transition: all 0.3s ease;

//   &:focus {
//     border-color: #4f46e5;
//     box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.12);
//     background: #ffffff;
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   background: linear-gradient(135deg, #4f46e5, #9333ea);
//   color: white;
//   padding: 1rem;
//   border: none;
//   border-radius: 12px;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   box-shadow: 0 8px 20px rgba(79, 70, 229, 0.35);
//   transition: all 0.3s ease;
//   margin-top: 0.5rem;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 12px 28px rgba(79, 70, 229, 0.45);
//     background: linear-gradient(135deg, #4338ca, #7e22ce);
//   }

//   &:active {
//     transform: translateY(0);
//     box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
//   }
// `;

// const LinkText = styled.p`
//   text-align: center;
//   margin-top: 1.25rem;
//   font-size: 0.9rem;
//   color: #475569;

//   a {
//     background: linear-gradient(135deg, #4f46e5, #9333ea);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     text-decoration: none;
//     font-weight: 700;
//     cursor: pointer;
//     transition: opacity 0.2s ease;

//     &:hover {
//       opacity: 0.8;
//       text-decoration: underline;
//     }
//   }
// `;

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       navigate('/dashboard');
//     }
//   }, [navigate]);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Swal.fire({ icon: 'warning', text: 'Please enter email and password.' });
//       return;
//     }

//     try {
//       Swal.fire({
//         title: 'Logging in...',
//         allowOutsideClick: false,
//         didOpen: () => {
//           Swal.showLoading();
//         }
//       });

//       const res = await fetch('https://www.elexdonhost.com/api_elexdonhost/login.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });

//       const data = await res.json();
//       Swal.close();

//       if (data.success) {
//         Swal.fire({ icon: 'success', text: 'Login successful!' });
//         localStorage.setItem('user', JSON.stringify(data.user));
//         navigate('/dashboard');
//       } else {
//         console.log(data);
//         Swal.fire({ icon: 'error', text: data.message || 'Login failed' });
//       }
//     } catch (error) {
//       console.error(error);
//       Swal.close();
//       Swal.fire({ icon: 'error', text: 'Server error' });
//     }
//   };

//   return (
//     <AuthContainer>
//       <AuthCard>
//         <ImageWrapper>
//           <img src={illustration} alt="Login Illustration" />
//         </ImageWrapper>
//         <Title>Welcome Back</Title>
//         <Subtitle>Please sign in to access your Elexdon Host dashboard.</Subtitle>
//         <Input 
//           type="email" 
//           placeholder="Email Address" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//         />
//         <Input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//         />
//         <Button onClick={handleLogin}>Login</Button>
//         <LinkText>
//           Don't have an account? <a onClick={() => navigate('/signup')}>Register</a>
//         </LinkText>
//         <LinkText style={{ marginTop: '0.5rem' }}>
//           <a onClick={() => navigate('/forgot-password')}>Forgot Password?</a>
//         </LinkText>
//       </AuthCard>
//     </AuthContainer>
//   );
// };

// export default LoginPage;




// // LoginPage.js
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import bg from '../Images/herobg5.jpg';
// import illustration from '../Images/logo4.jpeg';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';

// const AuthContainer = styled.div`
//   position: relative;
//   display: flex;
//   min-height: 100vh;
//   align-items: center;
//   justify-content: center;
//   padding: 10px;
//   background: url(${bg}) no-repeat center center/cover;
//   z-index: 0;
//   overflow: hidden;

//   @media(max-width: 428px) {
//     padding: 10px;
//   }

//   &::before {
//     content: '';
//     position: absolute;
//     inset: 0;
//      background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), rgba(0, 0, 0, 0.5);
   
//     // background: linear-gradient(135deg, rgba(79, 70, 229, 0.15), rgba(147, 51, 234, 0.15)), rgba(255, 255, 255, 0.75);
//     backdrop-filter: blur(8px);
//     z-index: 1;
//   }

//   > * {
//     position: relative;
//     z-index: 2;
//   }
// `;

// const AuthCard = styled.div`
//   background: rgba(255, 255, 255, 0.85);
//   backdrop-filter: blur(16px);
//   -webkit-backdrop-filter: blur(16px);
//   border: 1px solid rgba(255, 255, 255, 0.6);
//   border-radius: 10px;
//   padding: 10px;
//   max-width: 450px;
//   width: 100%;
//   box-shadow: 0 10px 40px rgba(79, 70, 229, 0.15);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     box-shadow: 0 15px 50px rgba(79, 70, 229, 0.22);
//   }

//   @media(max-width: 428px) {
//     padding: 10px;
//     box-shadow: none;
    
//     img {
//       display: none;
//     }
//   }
// `;

// const ImageWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   margin-bottom: 10px;

//   img {
//     height: 60px;
//     object-fit: cover;
//     border-radius: 10px;
//     box-shadow: 0 4px 10px rgba(79, 70, 229, 0.2);
//     border: 2px solid rgba(255, 255, 255, 0.8);
//   }
// `;

// const Title = styled.h2`
//   text-align: center;
//   color: #1e1b4b;
//   font-size: 1.3rem;
//   font-weight: 700;
//   margin-bottom: 10px;
//   letter-spacing: -0.02em;
// `;

// const Subtitle = styled.p`
//   text-align: center;
//   color: #64748b;
//   font-size: 0.85rem;
//   margin-bottom: 10px;
//   line-height: 1.4;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 10px;
//   border-radius: 10px;
//   border: 1px solid #cbd5e1;
//   background: rgba(255, 255, 255, 0.9);
//   font-size: 0.95rem;
//   box-sizing: border-box;
//   outline: none;
//   transition: all 0.3s ease;

//   &:focus {
//     border-color: #4f46e5;
//     box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.12);
//     background: #ffffff;
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   background: linear-gradient(135deg, #4f46e5, #9333ea);
//   color: white;
//   padding: 10px;
//   border: none;
//   border-radius: 10px;
//   font-size: 0.95rem;
//   font-weight: 600;
//   cursor: pointer;
//   box-shadow: 0 4px 10px rgba(79, 70, 229, 0.35);
//   transition: all 0.3s ease;
//   margin-bottom: 10px;

//   &:hover {
//     transform: translateY(-1px);
//     box-shadow: 0 6px 15px rgba(79, 70, 229, 0.45);
//     background: linear-gradient(135deg, #4338ca, #7e22ce);
//   }

//   &:active {
//     transform: translateY(0);
//   }
// `;

// const LinkText = styled.p`
//   text-align: center;
//   margin-top: 10px;
//   font-size: 0.85rem;
//   color: #475569;

//   a {
//     background: linear-gradient(135deg, #4f46e5, #9333ea);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     text-decoration: none;
//     font-weight: 700;
//     cursor: pointer;
//     transition: opacity 0.2s ease;

//     &:hover {
//       opacity: 0.8;
//       text-decoration: underline;
//     }
//   }
// `;

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       navigate('/dashboard');
//     }
//   }, [navigate]);

//   const handleLogin = async () => {
//     if (!email || !password) {
//       Swal.fire({ icon: 'warning', text: 'Please enter email and password.' });
//       return;
//     }

//     try {
//       Swal.fire({
//         title: 'Logging in...',
//         allowOutsideClick: false,
//         didOpen: () => {
//           Swal.showLoading();
//         }
//       });

//       const res = await fetch('https://www.elexdonhost.com/api_elexdonhost/login.php', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//       });

//       const data = await res.json();
//       Swal.close();

//       if (data.success) {
//         Swal.fire({ icon: 'success', text: 'Login successful!' });
//         localStorage.setItem('user', JSON.stringify(data.user));
//         navigate('/dashboard');
//       } else {
//         console.log(data);
//         Swal.fire({ icon: 'error', text: data.message || 'Login failed' });
//       }
//     } catch (error) {
//       console.error(error);
//       Swal.close();
//       Swal.fire({ icon: 'error', text: 'Server error' });
//     }
//   };

//   return (
//     <AuthContainer>
//       <AuthCard>
//         <ImageWrapper>
//           <img src={illustration} alt="Login Illustration" />
//         </ImageWrapper>
//         <Title>Welcome Back</Title>
//         <Subtitle>Please sign in to access your Elexdon Host dashboard.</Subtitle>
//         <Input 
//           type="email" 
//           placeholder="Email Address" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//         />
//         <Input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//         />
//         <Button onClick={handleLogin}>Login</Button>
//         <LinkText>
//           Don't have an account? <a onClick={() => navigate('/signup')}>Register</a>
//         </LinkText>
//         <LinkText style={{ marginTop: '5px' }}>
//           <a onClick={() => navigate('/forgot-password')}>Forgot Password?</a>
//         </LinkText>
//       </AuthCard>
//     </AuthContainer>
//   );
// };

// export default LoginPage;






// LoginPage.js
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import bg from '../Images/herobg5.jpg';
import illustration from '../Images/logo4.jpeg';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import {Context} from './Context';


const AuthContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  align-items: stretch;
  background: #ffffff;
  overflow: hidden;

  @media(max-width: 968px) {
    flex-direction: column-reverse;
    overflow-y: auto;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 60px;
  background: #ffffff;
  max-width: 550px;
  z-index: 2;

  @media(max-width: 968px) {
    max-width: 100%;
    padding: 30px 20px;
  }
`;

const RightColumn = styled.div`
  flex: 1.2;
  position: relative;
  background: url(${bg}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 60px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.4), rgba(147, 51, 234, 0.5)), rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media(max-width: 968px) {
    min-height: 250px;
    // padding: 50px 20px;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 24px;

  img {
    height: 50px;
    object-fit: contain;
    border-radius: 8px;
  }
`;

const Title = styled.h2`
  color: #0f172a;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 10px;
  letter-spacing: -0.03em;
`;

const Subtitle = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
  font-size: 0.95rem;
  box-sizing: border-box;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);
    background: #ffffff;
  }
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  font-size: 0.88rem;

  a {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #475569;
  cursor: pointer;
  font-weight: 500;

  input {
    accent-color: #4f46e5;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  color: white;
  padding: 14px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(79, 70, 229, 0.35);
  transition: all 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(79, 70, 229, 0.45);
    background: linear-gradient(135deg, #4338ca, #7e22ce);
  }

  &:active {
    transform: translateY(0);
  }
`;

const RegisterPrompt = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #475569;

  a {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const HeroBadge = styled.span`
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  color: #ffffff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
  width: max-content;
`;

const HeroTitle = styled.h1`
  color: #ffffff;
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 16px;
  letter-spacing: -0.03em;

  @media(max-width: 1200px) {
    font-size: 2.2rem;
  }
`;

const HeroText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.5;
  max-width: 500px;
`;


// ... (keep your other styled components like AuthContainer, LeftColumn, Input, etc.)

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #ffffff;
  color: #1f2937;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
  appearance: none; /* Removes native browser dropdown arrow */
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
  }

  option {
    color: #1f2937;
    background-color: #ffffff;
    padding: 8px;
  }
`;




const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState(''); 
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const {api_domain, api_key} = useContext(Context);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      navigate('/dashboard');
    }
  }, [navigate]);


    useEffect(() => {
    const storedUser = localStorage.getItem('user2');
    if (storedUser) {
      navigate('/dashboard2');
    }
  }, [navigate]);






 const handleLogin = async () => {
    if (!email || !password) {
      Swal.fire({ icon: 'warning', text: 'Please enter email and password.' });
      return;
    }

    if (!accountType) {
      Swal.fire({ icon: 'warning', text: 'Please select an account type.' });
      return;
    }

    // Determine endpoint and destination based on account type selection
    const isHosting = accountType === 'hosting';
    const endpoint = isHosting 
      ? `${api_domain}/login.php?key=${api_key}` 
      : `${api_domain}/login_user.php`;
    const targetDashboard = isHosting ? '/dashboard' : '/dashboard2';

    try {
      Swal.fire({
        title: 'Logging in...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      Swal.close();

      if (data.success) {
        Swal.fire({ icon: 'success', text: 'Login successful!' });
        
        // Store in 'user2' if navigating to dashboard2, otherwise store in 'user'
        if (targetDashboard === '/dashboard2') {
          localStorage.setItem('user2', JSON.stringify(data.user));
        } else {
          localStorage.setItem('user', JSON.stringify(data.user));
        }

        navigate(targetDashboard);
      } else {
        console.log(data);
        Swal.fire({ icon: 'error', text: data.message || 'Login failed' });
      }
    } catch (error) {
      console.error(error);
      Swal.close();
      Swal.fire({ icon: 'error', text: 'Server error' });
    }
  };

  
  
  
  
  return (
    <AuthContainer>
      {/* Left Column: Form & Brand Logo */}
      <LeftColumn>
        <LogoWrapper>
          {/* <img src={illustration} alt="Elexdon Host Logo" /> */}
        </LogoWrapper>

        <Title>Welcome back.</Title>
        <Subtitle>Sign in to manage your hosting, domains, invoices and support requests.</Subtitle>

        <InputGroup>
          <Label>Email Address</Label>
          <Input 
            type="email" 
            placeholder="you@example.com" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </InputGroup>

        <InputGroup>
          <Label>Password</Label>
          <Input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </InputGroup>

        <InputGroup>
          <Label>Account Type</Label>
          <Select 
            value={accountType} 
            onChange={(e) => setAccountType(e.target.value)}
            required
          >
             <option value="">--Select Account Type to login to--</option>
            <option value="hosting">Hosting & Domain account</option>
            <option value="ssl_webmail">SSL & Webmail account</option>
          </Select>
        </InputGroup>

        <ActionRow>
          {/* <CheckboxLabel>
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={(e) => setRememberMe(e.target.checked)} 
            />
            Remember Me
          </CheckboxLabel> */}
          <a onClick={() => navigate('/forgot-password')}>Forgot Password?</a>
        </ActionRow>

        <Button onClick={handleLogin}>Sign in to your account</Button>

        <RegisterPrompt>
          Don't have an account? <a onClick={() => navigate('/signup')}>Register</a>
        </RegisterPrompt>
      </LeftColumn>

      {/* Right Column: Hero Visual Showcase */}
      <RightColumn>
        <HeroBadge>Your Digital Business, Simplified</HeroBadge>
        <HeroTitle>Everything you need, in one place.</HeroTitle>
        <HeroText>Manage your online presence with reliable hosting, domains and help when you need it.</HeroText>
      </RightColumn>
    </AuthContainer>
  );
};

export default LoginPage;