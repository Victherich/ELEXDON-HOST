import React, { useState , useContext} from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context';

const LoginModal2 = ({ isOpen, onClose, email,}) => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { api_domain, api_key } = useContext(Context);

  if (!isOpen) return null;

  const handleLogin = async () => {
    if (!email || !password) {
      Swal.fire({ icon: 'warning', text: 'Please enter a password.' });
      return;
    }

    const endpoint = `${api_domain}/login.php?key=${api_key}`;
    const targetDashboard = '/dashboard';

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
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate(targetDashboard);
        onClose(); // Close modal on success
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
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>Switch to your Web Hosting dashboard</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>Enter your Web Hosting 
                dashboard Password</label>
            <Input 
              type="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          <SubmitButton onClick={handleLogin}>
            Proceed
          </SubmitButton>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default LoginModal2;

/* ================= STYLES ================= */

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContainer = styled.div`
  background: #ffffff;
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  animation: slideUp 0.3s ease-in-out;

  @keyframes slideUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #f1f5f9;

  h2 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e293b;
    background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #64748b;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #0f172a;
  }
`;

const ModalBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #334155;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #1e293b;
  transition: all 0.2s ease;
  background-color: #ffffff;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  padding: 12px 20px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
  transition: all 0.25s ease-in-out;
  margin-top: 8px;

  &:hover {
    background: linear-gradient(135deg, #4338ca 0%, #7e22ce 100%);
    box-shadow: 0 6px 16px rgba(147, 51, 234, 0.35);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(79, 70, 229, 0.2);
  }
`;