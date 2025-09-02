
// ResetPasswordPage.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import bg from '../Images/herobg5.jpg';
import logo from '../Images/logo4.jpeg';

const Container = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: url(${bg}) no-repeat center center/cover;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.7);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  box-sizing:border-box;
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

  &:hover {
    background: #1e2a91;
  }
`;

const ResetPasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

//   console.log(token);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const rp = params.get('rp');
    const match = rp?.match(/\/password\/reset\/redeem\/([a-z0-9]+)/i);
    if (match && match[1]) {
      setToken(match[1]);
    } else {
      Swal.fire('Invalid Link', 'Reset link is missing or invalid.', 'error');
      navigate('/login');
    }
  }, [location, navigate]);





  const handleResetPassword = async () => {
    if (!password || password.length < 6) {
      Swal.fire('Weak Password', 'Password must be at least 6 characters.', 'warning');
      return;
    }

    if(password !== confirmPassword){
        Swal.fire({text:"Passwords do not match"});
        return;
    }

    try {
      Swal.fire({ title: 'Resetting...', allowOutsideClick: false });
      Swal.showLoading();

      const res = await fetch('https://elexdonhost.com/api_elexdonhost/update_password.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, new_password: password })
      });

      const data = await res.json();
      if (data.success) {
        Swal.fire('Success', 'Password has been reset successfully.', 'success');
        navigate('/login');
      } else {
        Swal.fire('Failed', data.message || 'Password reset failed.', 'error');
      }
    } catch (err) {
      Swal.fire('Error', 'Could not connect to the server.', 'error');
    }
  };

  return (
    <Container>
      <Card>
        <img src={logo} alt="Logo" style={{ width: '100%', marginBottom: '1rem' }} />
        <h2>Set New Password</h2>
        <p>Enter a new password for your account.</p>
        <Input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <Input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button onClick={handleResetPassword}>Update Password</Button>
      </Card>
    </Container>
  );
};

export default ResetPasswordPage;
