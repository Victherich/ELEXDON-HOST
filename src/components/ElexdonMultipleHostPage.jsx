import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Features from './Features';
import CPanelShowcase from './HostFeaturesShowcase';
import SoftaculousShowcase from './SoftaculousShowcase';
import Border from './Border';
import 'animate.css';
import useAnimateOnScroll from './useAnimateOnScroll';
import Features2 from './Features2';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Context } from './Context';
import { FaLayerGroup, FaCheckCircle, FaRocket, FaShieldAlt, FaArrowRight, FaSpinner, FaExclamationTriangle, FaWifi } from 'react-icons/fa';
import rhimg from '../Images/rhimg.jpg';

// === Styled Components ===
const PageWrapper = styled.div`
  background: #fcfbfe;
  color: #0f172a;
  font-family: "Inter", sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-bottom: 80px;
`;

const FullPageLoader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #fcfbfe;
  color: #9333ea;
  gap: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.1rem;

  svg {
    animation: spin 1s linear infinite;
    font-size: 2.5rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const HeroSection = styled.section`
  background-image: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${rhimg});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #eae2f8;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.5);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const BadgeHeader = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-left: 3px solid #9333ea;
  background: linear-gradient(135deg, #9333ea, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;

  svg {
    -webkit-text-fill-color: initial;
    color: #9333ea;
  }
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  margin: 0;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #ffffff;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
  color: #cbd5e1;
  max-width: 700px;

  strong {
    color: #f1f5f9;
    font-weight: 700;
  }
`;

const FeaturesSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  text-align: center;

  h2 {
    color: #102a43;
    font-size: 1.8rem;
    font-weight: 900;
    margin-bottom: 30px;

    span {
      background: linear-gradient(135deg, #9333ea, #c084fc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  padding: 24px;
  border-radius: 12px;
  border-left: 4px solid #9333ea;
  border-top: 1px solid #eae2f8;
  border-right: 1px solid #eae2f8;
  border-bottom: 1px solid #eae2f8;
  font-size: 1rem;
  font-weight: 700;
  color: #102a43;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 10px 25px rgba(147, 51, 234, 0.04);
  text-align: left;

  svg {
    color: #9333ea;
    font-size: 1.2rem;
    flex-shrink: 0;
  }
`;

const PricingSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  text-align: center;
`;

const PricingTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: #102a43;
  font-weight: 900;

  span {
    background: linear-gradient(135deg, #9333ea, #c084fc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 10px 20px;
  border-radius: 16px;
  border: 1px solid #eae2f8;
  box-shadow: 0 10px 30px rgba(147, 51, 234, 0.06);
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(147, 51, 234, 0.12);
    border-color: #9333ea;
  }

  h3 {
    font-size: 1.5rem;
    color: #102a43;
    font-weight: 800;
  }

  .ssd-desc {
    color: #102a43;
    font-size: 0.95rem;
    font-weight: 600;
  }

  .price-box {
    margin: 12px 0 20px 0;
    padding-bottom: 16px;
    border-bottom: 1px solid #eae2f8;
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
      font-size: 1.1rem;
      color: #9333ea;
      font-weight: 800;
    }
  }

  ul {
    padding-left: 0;
    list-style: none;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    line-height: 10px;
  }

  li {
    font-size: 0.95rem;
    color: #102a43;
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
      content: "•";
      color: #9333ea;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  button {
    background: linear-gradient(135deg, #9333ea 0%, #c084fc 100%);
    color: white;
    border: none;
    padding: 14px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-shadow: 0 6px 20px rgba(147, 51, 234, 0.3);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(147, 51, 234, 0.4);
      background: linear-gradient(135deg, #7e22ce 0%, #a855f7 100%);
    }
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5rem 2rem;
  max-width: 600px;
  margin: 4rem auto;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #1a202c;
  }

  p {
    color: #61758a;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  button {
    background-color: #9333ea;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: background 0.2s ease;

    &:hover {
      background-color: #7e22ce;
    }
  }
`;

const ElexdonMultipleHostPage = () => {
  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const heroSubtitleAnim = useAnimateOnScroll('animate__fadeIn animate__slower');
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { api_key, api_domain } = useContext(Context);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  // Monitor network online/offline status in real-time
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const fetchProducts = () => {
    if (!navigator.onLine) {
      setIsOffline(true);
      setLoading(false);
      setError("You appear to be offline. Please check your internet connection.");
      return;
    }

    setLoading(true);
    setError(null);

    let isMounted = true;
    let retryTimer = null;
    let maxRetries = 3;

    const attemptFetch = (currentAttempt) => {
      // You can point to a multiple hosting endpoint or use your custom query parameter/endpoint
      fetch(`${api_domain}/get_multiple_hosting_products.php?key=${api_key}`)
        .then(res => {
          if (!res.ok) throw new Error(`Server returned status ${res.status}`);
          return res.json();
        })
        .then(data => {
          if (!isMounted) return;

          if (data.success && Array.isArray(data.products) && data.products.length > 0) {
            setProducts(data.products);
            setError(null);
            setLoading(false);
            setRetryCount(0);
          } else {
            throw new Error(data.error || "No multiple hosting products found at the moment.");
          }
        })
        .catch(err => {
          if (!isMounted) return;

          if (currentAttempt < maxRetries) {
            setRetryCount(currentAttempt);
            setError(`Connection unstable. Retrying (${currentAttempt}/${maxRetries})...`);
            retryTimer = setTimeout(() => attemptFetch(currentAttempt + 1), 4000);
          } else {
            setLoading(false);
            setRetryCount(0);
            if (!navigator.onLine) {
              setIsOffline(true);
              setError("Network connection lost. Please check your router or mobile data.");
            } else {
              setError(err.message || "Unable to load multiple hosting plans right now. Please try again later.");
            }
          }
        });
    };

    attemptFetch(1);

    return () => {
      isMounted = false;
      if (retryTimer) clearTimeout(retryTimer);
    };
  };

  useEffect(() => {
    fetchProducts();
    const interval = setInterval(fetchProducts, 300000); // Poll every 5 mins
    return () => clearInterval(interval);
  }, [api_domain, api_key]);

  // 1. Initial Full Page Loader
  if (loading && products.length === 0) {
    return (
      <FullPageLoader>
        <FaSpinner className="fa-spin" style={{ fontSize: '2.5rem', marginBottom: '1rem' }} />
        <span>Loading Elexdon Multiple Hosting Plans...</span>
        {retryCount > 0 && <small style={{ marginTop: '0.5rem', opacity: 0.8 }}>Retrying connection ({retryCount}/3)...</small>}
      </FullPageLoader>
    );
  }

  // 2. Error / Offline State View
  if (error && products.length === 0) {
    return (
      <PageWrapper>
        <ErrorContainer>
          {isOffline ? <FaWifi style={{ fontSize: '3rem', color: '#ff6b6b', marginBottom: '1rem' }} /> : <FaExclamationTriangle style={{ fontSize: '3rem', color: '#f59e0b', marginBottom: '1rem' }} />}
          <h2>
            {isOffline ? "No Internet Connection" : "Something Went Wrong"}
          </h2>
          <p>
            {error}
          </p>
          <button onClick={fetchProducts}>
            Try Again
          </button>
        </ErrorContainer>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      {error && products.length > 0 && (
        <div style={{ backgroundColor: '#fff3cd', color: '#856404', padding: '0.75rem', textAlign: 'center', fontSize: '0.9rem' }}>
          ⚠️ {error}
        </div>
      )}

      <HeroSection>
        <Overlay />
        <HeroContent>
          <BadgeHeader>
            <FaLayerGroup /> Multi-Domain & Reseller Ready
          </BadgeHeader>
          <Title ref={heroTitleAnim.ref} className={heroTitleAnim.className}>
            Elexdon <span>Multiple Hosting</span>
          </Title>
          <Subtitle ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>
            Host multiple websites, manage multiple domains effortlessly, and scale your online portfolio with Elexdon Multiple Host.<br />
            <strong>
              Enjoy uncompromised multi-site resource allocation with lightning-fast SSD storage and full control.
            </strong>
          </Subtitle>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <h2>Included as <span>Standard:</span></h2>
        <FeatureGrid>
          <FeatureItem><FaCheckCircle /> Multi-Site Management</FeatureItem>
          <FeatureItem><FaShieldAlt /> Advanced DDoS Protection</FeatureItem>
          <FeatureItem><FaRocket /> Free Multi-SSL Certificates</FeatureItem>
          <FeatureItem><FaLayerGroup /> Unlimited Subdomains & Databases</FeatureItem>
        </FeatureGrid>
      </FeaturesSection>

      <PricingSection>
        <PricingTitle>Multiple Hosting <span>Plans & Pricing</span></PricingTitle>

        <PricingGrid>
          {products.map((product) => {
            const pricing = product.pricing?.NGN;
            const monthly = pricing?.monthly;
            const annually = pricing?.annually;
            const prefix = pricing?.prefix || "";

            return (
              <Card key={product.pid}>
                <div>
                  <h3>{product.name}</h3>
                  <p className="ssd-desc">
                    Multiple Host - {product.description.split(/\r\n|\n|\r/)[0]}
                  </p>

                  <div className="price-box">
                    {monthly !== "-1.00" && (
                      <span>{prefix}{parseFloat(monthly).toLocaleString()} / month</span>
                    )}
                    {annually !== "-1.00" && (
                      <span style={{ fontSize: '0.95rem', color: '#61758a' }}>{prefix}{parseFloat(annually).toLocaleString()} / year</span>
                    )}
                  </div>

                  <ul>
                    {product.description
                      .split(/\r\n|\n|\r/)
                      .filter(line => line.trim() !== "")
                      .map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    localStorage.setItem("selectedProduct", JSON.stringify(product));
                    navigate(`/hostingcheckout`);
                  }}
                >
                  Order Now <FaArrowRight />
                </button>
              </Card>
            );
          })}
        </PricingGrid>
      </PricingSection>

      <CPanelShowcase />
    </PageWrapper>
  );
};

export default ElexdonMultipleHostPage;