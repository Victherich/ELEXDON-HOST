// LoginPage.js
import React from 'react';
import styled from 'styled-components';
import bg from '../Images/herobg5.jpg';
import illustration from '../Images/logo4.jpeg';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: url(${bg}) no-repeat center center/cover;
  z-index: 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.7); /* White overlay with 70% opacity */
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }

   @media(max-width:428px){
    padding:0.5rem;
  }
`;

const AuthCard = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  padding: 3rem;
  max-width: 450px;
  width: 100%;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);

   @media(max-width:428px){
    padding:1rem;
    box-shadow:none;
    img{
    display:none;
    }
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #2B32B2;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.25rem;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  background: #2B32B2;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1e2a91;
  }
`;

const LinkText = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  cursor:pointer;

  a {
    color: #2B32B2;
    text-decoration: none;
    font-weight: bold;
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



 useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      navigate('/dashboard');
    }
  }, []);





const handleLogin = async () => {
  if (!email || !password) {
    Swal.fire({ icon: 'warning', text: 'Please enter email and password.' });
    return;
  }

  try {
    Swal.fire({
      title: 'Logging in...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const res = await fetch('https://www.elexdonhost.com/api_elexdonhost/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    Swal.close(); // close loading

    if (data.success) {
      Swal.fire({ icon: 'success', text: 'Login successful!' });
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/dashboard');
    } else {
      console.log(data);
      Swal.fire({ icon: 'error', text: data.message || 'Login failed' });
    }
  } catch (error) {
    console.error(error);
    Swal.close(); // close loading on error too
    Swal.fire({ icon: 'error', text: 'Server error' });
  }
};




  return (
    <AuthContainer>
       <AuthCard>
        <img src={illustration} alt="Login" style={{ width: '100%', marginBottom: '1rem' }} />
        <Title>Welcome Back, Please Login</Title>
        <Input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>Login</Button>
        <LinkText><a onClick={()=>navigate('/signup')}>Don't have an accocunt? Register.</a></LinkText>
        <LinkText><a onClick={()=>navigate('/forgot-password')}>Forgot Password?</a></LinkText>
      
      </AuthCard>
    </AuthContainer>
  );
};

export default LoginPage;

