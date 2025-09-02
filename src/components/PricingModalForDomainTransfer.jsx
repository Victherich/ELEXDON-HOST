
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from './Context';
import Swal from 'sweetalert2';
import PaystackPop from "@paystack/inline-js";

const PricingModalForDomainTransfer = ({ onClose, domain, tld , handleSubmit, email, checkoutType }) => {
  const { domainPricings } = useContext(Context);

  const pricing = domainPricings.find((e) => e.domain === tld);
  const amount = pricing?.transfer ?? 'N/A';



const checkUserRegistration =()=>{

// Show loading
Swal.fire({
  title: 'Checking user...',
  allowOutsideClick: false,
  didOpen: () => {
    Swal.showLoading();
  }
});

fetch('https://www.elexdonhost.com/api_elexdonhost/check_user.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ email: email })
})
.then(res => res.json())
.then(data => {
  if (data.success) {
    // payWithPaystack();
    if(checkoutType===false){
 Swal.fire({
      icon: 'warning',
      title: 'User Found',
      text: 'You already have an account. Kindly go back and check the "i have an account box" and then proceed',
    });
    }else{
      payWithPaystack();
      // handleSubmit('by elexdon host');
    }
   
  } else {

    if(checkoutType===false){
      payWithPaystack();
      // handleSubmit('by elexdon host');
    } else{
  Swal.fire({
      icon: 'warning',
      title: 'You do not have not an account, kindy go back and uncheck the "i have an account box" and then proceed.',
      text: data.message,
    });
    }
  
  }
})
.catch(error => {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'An error occurred while checking the user.',
  });
});


  
}






  const payWithPaystack = () => {

  
    const paystack = new PaystackPop();
    paystack.newTransaction({
    //   key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
      key: "pk_live_3626fe7772aaca28a10724ebb1f9727dfcc5d6cb", // LIVE KEY
      amount: amount * 100 * 1.075, // in kobo
      email: email,
    //   firstname: user.fullname,
  
      onSuccess: (transaction) => {
        // Swal.fire({ icon: "info", title: "Verifying payment...", showConfirmButton: false, allowOutsideClick: false });
  
    handleVerify(transaction.reference);
      },
      onCancel: () => {
        Swal.fire({ icon: "warning", text: "Payment cancelled by user.", showConfirmButton: true });
      },
  
      onError: (error) => {
        Swal.fire({
          icon: "error",
          title: "Payment Failed",
          text: error.message || "An unknown error occurred.",
          showConfirmButton: true
        });
      }
    });
  };



   const handleVerify = async (reference) => {  
     const loading = Swal.fire({
        title: 'Verifying Payment...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });
  
      try {
        const response = await fetch('https://www.elexdonhost.com/api_elexdonhost/verify_payment.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ reference })
        });
  
        const result = await response.json();
  
        if (result.success) {
          handleSubmit(reference);
          Swal.fire({
            title: 'Success verified!',
            text: result.message,
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: 'Verification Failed',
            text: result.message,
            icon: 'error',
            confirmButtonText: 'Try Again'
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'An error occurred while verifying the payment.',
          icon: 'error',
          confirmButtonText: 'Close'
        });
      }
    };
  




  return (
    <Backdrop>
      <ModalContainer>
        <Header>Order Summary</Header>
        <Content>
          <Row><strong>Domain:</strong> {domain}{tld}</Row>
          <Row><strong>Amount:</strong> ₦{amount}</Row>
        </Content>
        <Actions>
          <ButtonPrimary onClick={checkUserRegistration}>Pay Now</ButtonPrimary>
          <ButtonSecondary onClick={onClose}>Cancel</ButtonSecondary>
        </Actions>
      </ModalContainer>
    </Backdrop>
  );
};

export default PricingModalForDomainTransfer;

// Styled Components
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

const Header = styled.h2`
  margin: 0 0 16px;
  font-size: 1.5rem;
  text-align: center;
  color: #2b32b2;
`;

const Content = styled.div`
  margin-bottom: 20px;
`;

const Row = styled.p`
  margin: 8px 0;
  font-size: 1rem;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const ButtonPrimary = styled.button`
  flex: 1;
  padding: 12px;
  background-color: #2b32b2;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonSecondary = styled.button`
  flex: 1;
  padding: 12px;
  background-color: lightgray;
  color: #333;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #ddd;
  }
`;

