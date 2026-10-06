// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import Swal from 'sweetalert2';
// import { Context } from './Context';

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem 1rem;
//   padding-top:80px;
// `;

// const Title = styled.h1`
//   font-size: 1.75rem;
//   font-weight: bold;
//   text-align: center;
//   margin-bottom: 2rem;
//   color: #2B32B2;
// `;

// const Grid = styled.div`
//   display: grid;
//   gap: 1.5rem;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
// `;

// const Card = styled.div`
//   border: 1px solid #e2e8f0;
//   border-radius: 8px;
//   box-shadow: 0 2px 8px rgba(0,0,0,0.05);
//   padding: 1.25rem;
//   background-color: #fff;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1rem;
// `;

// const ServiceName = styled.h2`
//   font-size: 1.1rem;
//   font-weight: 600;
//   color: #2c5282;
// `;

// const Badge = styled.span`
//   font-size: 0.75rem;
//   text-transform: capitalize;
//   padding: 0.25rem 0.5rem;
//   border-radius: 12px;
//   background-color: #edf2f7;
//   border: 1px solid #cbd5e0;
// `;

// const InfoText = styled.p`
//   font-size: 0.9rem;
//   color: #4a5568;
//   margin: 0.3rem 0;
// `;

// const ErrorMessage = styled.p`
//   color: #e53e3e;
//   text-align: center;
// `;

// const NoServices = styled.p`
//   color: #718096;
//   text-align: center;
// `;

// const spin = keyframes`
//   to { transform: rotate(360deg); }
// `;

// const Loader = styled.div`
//   width: 24px;
//   height: 24px;
//   border: 3px solid #ccc;
//   border-top: 3px solid #2c5282;
//   border-radius: 50%;
//   animation: ${spin} 0.8s linear infinite;
//   margin: auto;
// `;

// const LoaderWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 160px;
// `;

// const ButtonWrap = styled.div`


// `


// const Button = styled.button`
// padding:5px;
// border:none;
// border-radius:5px;
// background:#2c5282;
// color:white;
// cursor:pointer;


// &:hover{
// background:purple;
// }

// `


// const ServiceCard = ({ service }) => {
// const navigate = useNavigate();
// const user = JSON.parse(localStorage.getItem('user'));
// const { api_domain, api_key } = useContext(Context);




// async function renewHosting2(clientId, serviceId, amount) {
//   const confirmed = await Swal.fire({
//     title: 'Confirm Renewal',
//     text: `Invoice ₦${amount} for hosting #${serviceId}?`,
//     icon: 'question',
//     showCancelButton: true
//   });
//   if (!confirmed.isConfirmed) return;

//   Swal.fire({ title: 'Creating Invoice...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
// try {
//   const resp = await fetch(`${api_domain}/renew_hosting2.php?key=${api_key}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ clientid: clientId, serviceid: serviceId, amount })
//   });

//   const text = await resp.text(); // read body ONCE
//   let result;

//   try {
//     result = JSON.parse(text); // try to parse as JSON
//   } catch {
//     throw new Error(`Invalid JSON response: ${text}`); // fallback to raw response
//   }

//   if (resp.ok && result.success) {
//     Swal.fire('Success', 'Redirecting to invoice…', 'success');
//     navigate(`/invoice/${result.invoiceid}`);
//   } else {
//     throw new Error(result.message || 'Failed to create invoice');
//   }

// } catch (err) {
//   console.error(err);
//   Swal.fire('Error', err.message, 'error');
// }

// }





//   return(<Card>
//     <Header>
//       <ServiceName>{service.name}</ServiceName>
//       <Badge>{service.status}</Badge>
//     </Header>
//     <div>
//       <InfoText><strong>Domain:</strong> {service.domain || '—'}</InfoText>
//       <InfoText><strong>Billing Cycle:</strong> {service.billingCycle}</InfoText>
//       <InfoText><strong>Next Due:</strong> {service.nextDueDate}</InfoText>

//     </div>
//     <ButtonWrap>
//  <Button onClick={() => window.open(`https://${service.domain}/cpanel`,'_blank')} style={{marginRight:"10px"}}>
//   Go to cPanel
// </Button>



// {/* latest */}
// <Button onClick={() => renewHosting2(user.id, service.id, service.recurringamount )}>
//   Renew Hosting
// </Button>





   


//     </ButtonWrap>
//   </Card>)
// }

// const UserActiveServices = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const {api_domain, api_key} = useContext(Context);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (!user?.id) {
//       setError('User not found. Please log in again.');
//       setLoading(false);
//       return;
//     }

//     const fetchServices = async () => {
//       try {
//         const res = await fetch(
//           `${api_domain}/get_active_services_by_user.php?id=${user.id}&key=${api_key}`
//         );
//         const data = await res.json();

//         if (data.success) {
//           setServices(data.services);
//           console.log(data)
//         } else {
//           setError(data.message);
//         }
//       } catch (err) {
//         setError('Failed to fetch services.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   return (
//     <Container>
//       <Title>My Active Services</Title>

//       {loading && (
//         <LoaderWrapper>
//           <Loader />
//         </LoaderWrapper>
//       )}

//       {error && <ErrorMessage>{error}</ErrorMessage>}

//       {!loading && !error && services.length === 0 && (
//         <NoServices>You have no active services.</NoServices>
//       )}

//       <Grid>
//         {services.map((service) => (
//           <ServiceCard key={service.id} service={service} />
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default UserActiveServices;








import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Swal from 'sweetalert2';
import { Context } from './Context';
import { FaServer, FaExternalLinkAlt, FaSyncAlt } from 'react-icons/fa';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8fafc;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  margin-bottom: 2rem;
  color: #0f172a;
  letter-spacing: -0.025em;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 12px;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const Card = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
  padding: 1.5rem;
  background-color: #ffffff;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.08);
    border-color: #cbd5e1;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
  gap: 12px;
`;

const ServiceName = styled.h2`
  font-size: 1.05rem;
  font-weight: 600;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;

  svg {
    color: #4f46e5;
    font-size: 1rem;
  }
`;

const Badge = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  background-color: ${(props) => (props.active ? '#f0fdf4' : '#fef2f2')};
  color: ${(props) => (props.active ? '#15803d' : '#b91c1c')};
  border: 1px solid ${(props) => (props.active ? '#bbf7d0' : '#fecaca')};
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f1f5f9;
`;

const InfoText = styled.div`
  font-size: 0.9rem;
  color: #475569;
  display: flex;
  justify-content: space-between;

  strong {
    color: #64748b;
    font-weight: 500;
  }

  span {
    color: #0f172a;
    font-weight: 600;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  text-align: center;
  font-weight: 500;
  background: #fef2f2;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #fecaca;
`;

const NoServices = styled.p`
  color: #64748b;
  text-align: center;
  font-size: 0.95rem;
  background: #ffffff;
  padding: 3rem;
  border-radius: 12px;
  border: 1px dashed #cbd5e1;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Loader = styled.div`
  width: 32px;
  height: 32px;
  border: 3px solid #e2e8f0;
  border-top: 3px solid #4f46e5;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin: auto;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  flex: 1;
  padding: 10px 14px;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s ease;

  background: ${(props) => (props.variant === 'secondary' ? '#f1f5f9' : 'linear-gradient(135deg, #4f46e5, #9333ea)')};
  color: ${(props) => (props.variant === 'secondary' ? '#334155' : '#ffffff')};
  box-shadow: ${(props) => (props.variant === 'secondary' ? 'none' : '0 4px 12px rgba(79, 70, 229, 0.2)')};

  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);
    background: ${(props) => (props.variant === 'secondary' ? '#e2e8f0' : 'linear-gradient(135deg, #4338ca, #7e22ce)')};
  }
`;

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const { api_domain, api_key } = useContext(Context);

  const isActive = service.status?.toLowerCase() === 'active';

  async function renewHosting2(clientId, serviceId, amount) {
    const confirmed = await Swal.fire({
      title: 'Confirm Renewal',
      text: `Generate invoice of ₦${amount} for hosting service #${serviceId}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Proceed to Invoice',
    });
    if (!confirmed.isConfirmed) return;

    Swal.fire({ title: 'Creating Invoice...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
    
    try {
      const resp = await fetch(`${api_domain}/renew_hosting2.php?key=${api_key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientid: clientId, serviceid: serviceId, amount })
      });

      const text = await resp.text();
      let result;

      try {
        result = JSON.parse(text);
      } catch {
        throw new Error(`Invalid JSON response: ${text}`);
      }

      if (resp.ok && result.success) {
        Swal.fire('Success', 'Redirecting to invoice…', 'success');
        navigate(`/invoice/${result.invoiceid}`);
      } else {
        throw new Error(result.message || 'Failed to create invoice');
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error', err.message, 'error');
    }
  }

  return (
    <Card>
      <Header>
        <ServiceName>
          <FaServer /> {service.name}
        </ServiceName>
        <Badge active={isActive}>{service.status}</Badge>
      </Header>
      
      <InfoGroup>
        <InfoText>
          <strong>Domain:</strong> <span>{service.domain || '—'}</span>
        </InfoText>
        <InfoText>
          <strong>Billing Cycle:</strong> <span>{service.billingCycle}</span>
        </InfoText>
        <InfoText>
          <strong>Next Due:</strong> <span>{service.nextDueDate}</span>
        </InfoText>
      </InfoGroup>

      <ButtonWrap>
        <Button 
          variant="secondary" 
          onClick={() => window.open(`https://${service.domain}/cpanel`, '_blank')}
        >
          <FaExternalLinkAlt /> cPanel
        </Button>

        <Button 
          onClick={() => renewHosting2(user.id, service.id, service.recurringamount)}
        >
          <FaSyncAlt /> Renew
        </Button>
      </ButtonWrap>
    </Card>
  );
};

const UserActiveServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { api_domain, api_key } = useContext(Context);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user?.id) {
      setError('User not found. Please log in again.');
      setLoading(false);
      return;
    }

    const fetchServices = async () => {
      try {
        const endpoint = api_domain && api_key
          ? `${api_domain}/get_active_services_by_user.php?id=${user.id}&key=${api_key}`
          : `https://www.elexdonhost.com/api_elexdonhost/get_active_services_by_user.php?id=${user.id}`;

        const res = await fetch(endpoint);
        const data = await res.json();

        if (data.success) {
          setServices(data.services);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('Failed to fetch services.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [api_domain, api_key]);

  return (
    <Container>
      <Title>My Active Services</Title>

      {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {!loading && !error && services.length === 0 && (
        <NoServices>You have no active services at the moment.</NoServices>
      )}

      <Grid>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Grid>
    </Container>
  );
};

export default UserActiveServices;