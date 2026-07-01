

import React, { useState } from 'react';
import styled from 'styled-components';
import PaystackPop from "@paystack/inline-js";
import Swal from 'sweetalert2';

// ==========================================
// STYLED COMPONENTS (White & Blue Theme)
// ==========================================

const PageContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333333;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0052cc 0%, #002e7a 100%);
  color: #ffffff;
  padding: 80px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 20px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const FeaturesSection = styled.section`
  padding: 60px 20px;
  background-color: #f4f7fc;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #0052cc;
  font-size: 2rem;
  margin-bottom: 40px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  border-top: 4px solid #0052cc;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  color: #002e7a;
  margin-bottom: 12px;
  font-size: 1.3rem;
`;

const FeatureText = styled.p`
  color: #666666;
  font-size: 0.95rem;
  line-height: 1.5;
`;

const ContentSplitSection = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormColumn = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 50, 150, 0.1);
  border: 1px solid #e1e8ed;
`;

const FormTitle = styled.h3`
  color: #002e7a;
  font-size: 1.6rem;
  margin-bottom: 25px;
  border-bottom: 2px solid #f4f7fc;
  padding-bottom: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e1e8ed;
  border-radius: 6px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0052cc;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 2px solid #e1e8ed;
  border-radius: 6px;
  font-size: 1rem;
  color: #333;
  box-sizing: border-box;
  resize: vertical;
  min-height: 80px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0052cc;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 8px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border: 2px solid ${props => props.checked ? '#0052cc' : '#e1e8ed'};
  background-color: ${props => props.checked ? '#f4f7fc' : '#ffffff'};
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    border-color: #0052cc;
  }
`;

const RadioInput = styled.input`
  accent-color: #0052cc;
  transform: scale(1.2);
`;

const PriceTag = styled.span`
  margin-left: auto;
  font-weight: 700;
  color: #0052cc;
`;

const NoticeText = styled.p`
  font-size: 0.85rem;
  color: #666666;
  margin-top: 15px;
  line-height: 1.4;

  a {
    color: #0052cc;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #0052cc;
  color: #ffffff;
  border: none;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003d99;
  }
`;

const ActivationBlock = styled.div`
  background-color: #e6f0ff;
  border-left: 5px solid #0052cc;
  padding: 20px;
  border-radius: 0 8px 8px 0;
  margin-top: 25px;
`;

const ActivationTitle = styled.h4`
  color: #002e7a;
  margin: 0 0 8px 0;
  font-size: 1.05rem;
`;

const ActivationPhone = styled.span`
  font-weight: bold;
  color: #0052cc;
  font-size: 1.1rem;
`;

const WhatsAppButtonContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

const WhatsAppAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: #25D366;
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #20ba5a;
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(37, 211, 102, 0.4);
    color: #ffffff;
  }

  &:active {
    transform: translateY(0);
  }
`;

// ==========================================
// MAIN COMPONENT EXPORT
// ==========================================

export default function WebmailOrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    domain: '',
    extension: 'dot_com',
    customExtension: ''
  });



const handleChange = (e) => {
  let { name, value } = e.target;

  // If modifying the domain field, strip out spaces, dots, and common suffixes
  if (name === 'domain') {
    value = value
      .toLowerCase()                // Force lowercase for structural domain naming
      .replace(/\s+/g, '')          // Strip all spaces completely
      .replace(/\.(com|ng|org|net|biz|gov|edu|ltd|co)(\..*)?$/g, '') // Strip matching terminal extension strings
      .replace(/[^a-zA-Z0-9-]/g, ''); // Strip remaining dots or punctuation symbols safely
  }

  setFormData({
    ...formData,
    [name]: value
  });
};

  // 1. Compute Dynamic Pricing Structures
  const getPrice = () => {
    switch (formData.extension) {
      case 'dot_com':
        return 35000;
      case 'dot_com_ng':
        return 25000;
      case 'dot_ng':
        return 30000;
      case 'other':
      default:
        return 0;
    }
  };

  const total = getPrice();




const handleBackendSubmit = async (paymentReference = null) => {
  // 1. Determine the clean, final extension value
  const isOther = formData.extension === 'other';
  
  let extensionName = '';
  if (formData.extension === 'dot_com') extensionName = '.com';
  else if (formData.extension === 'dot_com_ng') extensionName = '.com.ng';
  else if (formData.extension === 'dot_ng') extensionName = '.ng';
  else extensionName = formData.customExtension;

  // 2. Build the payload conditionally
  const payload = {
    name: formData.name,
    address: formData.address,
    email: formData.email,
    phone: formData.phone,
    domain: formData.domain,
    extension: extensionName, 
    price: total,
    paymentReference: paymentReference || 'N/A',
  };

  if (isOther) {
    payload.customExtension = formData.customExtension;
  }

  // 3. Trigger SweetAlert Loading State
  Swal.fire({
    title: 'Processing Order...',
    text: 'Please wait while we log your webmail setup request.',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading(); // Shows the spinning loader graphic
    }
  });

  // 4. Secure API Transmission Core Block
  try {
    const response = await fetch('https://elexdonhost.com/api_elexdonhost/submit_webmail_request.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP network fault error! Status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success) {
      // 5. Success Notification Dialog
      Swal.fire({
        icon: 'success',
        title: 'Order Completed!',
        text: result.message,
        confirmButtonColor: '#0052cc'
      });
      
      // Reset form inputs upon successful logging
      setFormData({
        name: '',
        address: '',
        email: '',
        phone: '',
        domain: '',
        extension: 'dot_com',
        customExtension: ''
      });
    } else {
      // 6. Backend Controlled Error Validation Alert
      Swal.fire({
        icon: 'error',
        title: 'Setup Failed',
        text: result.error,
        confirmButtonColor: '#0052cc'
      });
    }

  } catch (error) {
    console.error("Transmission error occurred: ", error);
    
    // 7. General Network/Connection Fault Alert
    Swal.fire({
      icon: 'error',
      title: 'Connection Error',
      text: 'Could not connect to the deployment server. Please verify your network and try again.',
      confirmButtonColor: '#0052cc'
    });
  }
};



  // 3. Payment Success Verification Logic
  const handleVerify = (reference) => {
    console.log("Verifying payment transaction layout reference: ", reference);
    handleBackendSubmit(reference);
  };



  // 5. Submit Router Interceptor
  
const payWithPaystack = () => {
  // 1. Native Window Interceptor Function
  const preventRefresh = (e) => {
    e.preventDefault();
    e.returnValue = "Payment processing. Please do not close or refresh this page.";
    return e.returnValue;
  };

  // Attach the browser refresh block immediately
  window.addEventListener('beforeunload', preventRefresh);

  // 2. Clear Visual Notice Toast
  Swal.fire({
    icon: 'info',
    title: 'Initializing...',
    text: 'Do not refresh or close this page while making this payment',
    showConfirmButton: false,
    timer: 10000, // Displays clearly for 3.5 seconds before loading Paystack
    timerProgressBar: true,
    allowOutsideClick: false,
    didClose: () => {
      // 3. Launch Paystack Popup once the warning alert closes
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4",
        // key: "pk_live_3626fe7772aaca28a10724ebb1f9727dfcc5d6cb",
        amount: Math.ceil(total * 100),
        email: formData.email,
        onSuccess: (transaction) => {
          // Safe state reached: Remove the browser block safely before processing backend routing
          window.removeEventListener('beforeunload', preventRefresh);
          handleBackendSubmit(transaction.reference);
        },
        onCancel: () => {
          // User cancelled: Remove the block so they aren't trapped on the page indefinitely
          window.removeEventListener('beforeunload', preventRefresh);
          Swal.fire({ 
            icon: "warning", 
            text: "Payment cancelled by user.", 
            showConfirmButton: true,
            confirmButtonColor: '#0052cc'
          });
        },
        onError: (error) => {
          // Error state reached: Clear the event listener
          window.removeEventListener('beforeunload', preventRefresh);
          Swal.fire({
            icon: "error",
            title: "Payment Failed",
            text: error.message || "An unknown error occurred.",
            showConfirmButton: true,
            confirmButtonColor: '#0052cc'
          });
        }
      });
    }
  });
};

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.extension === 'other') {
      // Free or custom pricing: Skip Paystack gateway, submit immediately
      handleBackendSubmit();
    } else {
      // Core pricing variant: Launch secure billing engine
      payWithPaystack();
    }
  };

  const phoneNumber = "2347066911338"; 
  const defaultMessage = encodeURIComponent("Hello, I just completed the Webmail Setup form and would like to activate my order.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <PageContainer>
      {/* 1. Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Get a Professional Corporate Webmail System</HeroTitle>
          <HeroSubtitle>
            Build trust with your clients using a branded email address (e.g., info@yourcompany.com). 
            Secure, ultra-fast, and compatible across all your mobile and desktop apps.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      {/* 2. Feature Cards Section */}
      <FeaturesSection>
        <SectionTitle>Why Choose Our Webmail Services?</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureImage src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=500&q=80" alt="Secure Email" />
            <FeatureTitle>Corporate Identity</FeatureTitle>
            <FeatureText>
              Stop using generic public emails. Win big-budget clients by showcasing absolute professionalism with custom extensions.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureImage src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80" alt="Cross Platform" />
            <FeatureTitle>24/7 Webmail Access</FeatureTitle>
            <FeatureText>
              Access your communication logs anywhere, anytime via Outlook, mobile devices, web browsers, or tablet endpoints seamlessly.
            </FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureImage src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=500&q=80" alt="Fast Server" />
            <FeatureTitle>Advanced Spam Filtering</FeatureTitle>
            <FeatureText>
              Keep your inbox strictly professional. Our integrated security stacks stop malicious phishing traps right at server entry.
            </FeatureText>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>

      {/* 3. Form and Dynamic Checkout Area */}
      <ContentSplitSection>
        <InfoColumn>
          <h2 style={{ color: '#002e7a', fontSize: '2.2rem', marginBottom: '20px' }}>Setup Your Account Easily</h2>
          <p style={{ color: '#555', lineHeight: '1.7', fontSize: '1.05rem', margin: '0 0 20px 0' }}>
            Fill out the request architecture form accurately. Our server operators set up your infrastructure immediately following payment confirmation logs.
          </p>
          <p style={{ color: '#555', lineHeight: '1.7', fontSize: '1.05rem' }}>
            Ensure you spell your desired target domain name perfectly. Double-check all spellings before proceeding to prevent setup alignment adjustments.
          </p>
          
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
            alt="Business Workflow Analytics" 
            style={{ width: '100%', borderRadius: '8px', marginTop: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}
          />
        </InfoColumn>

        <FormColumn>
          <FormTitle>Webmail Setup Form</FormTitle>
          <form onSubmit={handleSubmit}>
            
            <FormGroup>
              <Label htmlFor="name">Full Name / Business Title</Label>
              <Input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="e.g., John Doe Enterprises" 
                required 
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="address">Contact Address</Label>
              <TextArea 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                placeholder="Enter structural business location or street details" 
                required 
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Current Active Email Address</Label>
              <Input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="For status logs updates (e.g. name@gmail.com)" 
                required 
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="e.g., 08012345678" 
                required 
              />
            </FormGroup>


            <FormGroup>
  <Label htmlFor="domain">Desired Custom Domain Name</Label>
  <span style={{ fontSize: '0.8rem', color: '#666', display: 'block', marginBottom: '6px', fontWeight:"bold" }}>
    Enter your brand name only (do not add .com or .ng)
  </span>
  <Input 
    type="text" 
    id="domain" 
    name="domain" 
    value={formData.domain} 
    onChange={handleChange} 
    placeholder="e.g., echobyteconcept" 
    required 
  />
</FormGroup>

            <FormGroup>
              <Label>Select Extension</Label>
              <RadioGroup>
                <RadioLabel checked={formData.extension === 'dot_com'}>
                  <RadioInput 
                    type="radio" 
                    name="extension" 
                    value="dot_com" 
                    checked={formData.extension === 'dot_com'} 
                    onChange={handleChange} 
                  />
                  Serve Webmail with .com
                  <PriceTag>₦35,000</PriceTag>
                </RadioLabel>

                <RadioLabel checked={formData.extension === 'dot_com_ng'}>
                  <RadioInput 
                    type="radio" 
                    name="extension" 
                    value="dot_com_ng" 
                    checked={formData.extension === 'dot_com_ng'} 
                    onChange={handleChange} 
                  />
                  Serve Webmail with .com.ng
                  <PriceTag>₦25,000</PriceTag>
                </RadioLabel>

                <RadioLabel checked={formData.extension === 'dot_ng'}>
                  <RadioInput 
                    type="radio" 
                    name="extension" 
                    value="dot_ng" 
                    checked={formData.extension === 'dot_ng'} 
                    onChange={handleChange} 
                  />
                  Serve Webmail with .ng
                  <PriceTag>₦30,000</PriceTag>
                </RadioLabel>

                <RadioLabel checked={formData.extension === 'other'}>
                  <RadioInput 
                    type="radio" 
                    name="extension" 
                    value="other" 
                    checked={formData.extension === 'other'} 
                    onChange={handleChange} 
                  />
                  Other TLD Extensions
                  <PriceTag>Contact Us</PriceTag>
                </RadioLabel>
              </RadioGroup>
            </FormGroup>

            {/* Conditional Input for Custom Extension */}
            {formData.extension === 'other' && (
              <FormGroup>
                <Label htmlFor="customExtension">Specify Your Domain Extension</Label>
                <Input 
                  type="text" 
                  id="customExtension" 
                  name="customExtension" 
                  value={formData.customExtension} 
                  onChange={handleChange} 
                  placeholder="e.g., .org, .net, .biz" 
                  required 
                />
              </FormGroup>
            )}

            <NoticeText>
              * Please note that <a href="/termsandconditions">Contact us Terms &amp; Conditions</a> apply to all ongoing provisioning agreements.
            </NoticeText>

            <SubmitButton type="submit">
              {formData.extension === 'other' ? 'Submit Order Form' : `Proceed to Pay ₦${total.toLocaleString()}`}
            </SubmitButton>

          </form>

          <ActivationBlock>
            <ActivationTitle>After Payment &amp; Transfer Activation Notice</ActivationTitle>
            <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: '#444', lineHeight: '1.4' }}>
              Send your <b>Proof of Payment</b> and <b>"ACTIVATE"</b> to: <ActivationPhone>07066911338</ActivationPhone>
            </p>
            <WhatsAppButtonContainer>
              <WhatsAppAnchor href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 4.933 1.504 5.485 0 9.949-4.464 9.952-9.949.001-2.656-1.026-5.153-2.892-7.019C16.774 1.824 14.283.796 11.625.796c-5.49 0-9.957 4.463-9.96 9.948-.001 1.905.513 3.766 1.492 5.395l-1.017 3.714 3.821-.1.086-.046zM17.51 14.86c-.28-.14-1.65-.814-1.906-.907-.255-.094-.44-.14-.625.14-.185.281-.716.907-.878 1.093-.162.186-.324.208-.605.068-.28-.14-1.18-.435-2.249-1.39-0.832-.742-1.393-1.658-1.557-1.939-.163-.28-.017-.431.122-.571.126-.126.28-.328.42-.492.14-.164.185-.281.28-.469.095-.188.047-.352-.023-.492-.07-.14-.625-1.507-.856-2.064-.225-.542-.453-.468-.625-.477-.16-.008-.344-.01-.528-.01-.185 0-.485.07-.74.352-.254.28-.97.949-.97 2.316 0 1.367.994 2.688 1.134 2.875.14.188 1.956 2.988 4.739 4.194.662.287 1.179.459 1.583.587.665.211 1.271.181 1.75.11.533-.079 1.65-.675 1.882-1.326.233-.652.233-1.21.163-1.325-.07-.11-.255-.18-.535-.32z"/>
                </svg>
                Click here to WhatsApp (07066911338)
              </WhatsAppAnchor>
            </WhatsAppButtonContainer>
          </ActivationBlock>

        </FormColumn>
      </ContentSplitSection>
    </PageContainer>
  );
}