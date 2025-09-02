
import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.h2`
  margin-top: 0;
  font-size: 1.5rem;
color:#2B32B2;
`;

const DomainList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 16px 0;
`;

const DomainItem = styled.li`
  margin: 8px 0;
  cursor: pointer;
  color: #007bff;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const CancelButton = styled.button`
  background: #ccc;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  float: right;
  &:hover {
    background: #bbb;
  }
`;

const DomainModal = ({ open, onClose, services }) => {
  return (
    <ModalBackdrop open={open}>
      <ModalContainer>
        <ModalHeader >Select a Domain / Hosting</ModalHeader>
        <DomainList>
          {services.map((s, index) => (
            <DomainItem
              key={index}
              onClick={() => window.open(`https://${s.domain}/cpanel`, '_blank')}
            //   onClick={() => window.open(`https://elexdonhost.com/cpanel`, '_blank')}
            >
              {s.domain}
            </DomainItem>
          ))}
        </DomainList>
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default DomainModal;
