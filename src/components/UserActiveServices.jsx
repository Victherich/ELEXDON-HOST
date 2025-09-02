import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Swal from 'sweetalert2';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  padding-top:80px;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #2B32B2;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Card = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 1.25rem;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ServiceName = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c5282;
`;

const Badge = styled.span`
  font-size: 0.75rem;
  text-transform: capitalize;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  background-color: #edf2f7;
  border: 1px solid #cbd5e0;
`;

const InfoText = styled.p`
  font-size: 0.9rem;
  color: #4a5568;
  margin: 0.3rem 0;
`;

const ErrorMessage = styled.p`
  color: #e53e3e;
  text-align: center;
`;

const NoServices = styled.p`
  color: #718096;
  text-align: center;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Loader = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid #ccc;
  border-top: 3px solid #2c5282;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  margin: auto;
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
`;

const ButtonWrap = styled.div`


`


const Button = styled.button`
padding:5px;
border:none;
border-radius:5px;
background:#2c5282;
color:white;
cursor:pointer;


&:hover{
background:purple;
}

`


const ServiceCard = ({ service }) => {
const navigate = useNavigate();
const user = JSON.parse(localStorage.getItem('user'));




// async function renewHosting(clientId, serviceId, paymentmethod = 'banktransfer') {
//   if (!clientId || !serviceId) {
//     return Swal.fire('Error', 'Missing client or service ID', 'error');
//   }

//   const { isConfirmed } = await Swal.fire({
//     title: 'Renew Hosting?',
//     text: `Renew hosting service #${serviceId}?`,
//     icon: 'question',
//     showCancelButton: true,
//     confirmButtonText: 'Renew Now'
//   });
//   if (!isConfirmed) return;

//   Swal.fire({ title: 'Processing...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });

//   try {
//     const resp = await fetch('https://www.elexdonhost.com/api_elexdonhost/renew_hosting.php', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ clientid: clientId, serviceid: serviceId, paymentmethod })
//     });
//     const result = await resp.json();
//     if (resp.ok && result.success) {
//       Swal.fire('Success', 'Redirecting to invoice...', 'success');
//       navigate(`/invoice/${result.invoiceid}`);
//     } else {
//       Swal.fire('Error', result.message || 'Renewal failed', 'error');
//       console.error(result.raw || result);
//     }
//   } catch (err) {
//     Swal.fire('Network Error', err.message, 'error');
//     console.error(err);
//   }
// }




// async function renewHosting2(clientId, serviceId, amount) {
//   // Validate inputs
//   const confirmed = await Swal.fire({
//     title: 'Confirm Renewal',
//     text: `Invoice ₦${amount} for hosting #${serviceId}?`,
//     icon: 'question',
//     showCancelButton: true
//   });
//   if (!confirmed.isConfirmed) return;

//   Swal.fire({ title: 'Creating Invoice...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });

//   const resp = await fetch('https://www.elexdonhost.com/api_elexdonhost/renew_hosting2.php', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ clientid: clientId, serviceid: serviceId, amount })
//   });
//   const result = await resp.json();

//   if (resp.ok && result.success) {
//     Swal.fire('Success', 'Redirecting to invoice…', 'success');
//     navigate(`/invoice/${result.invoiceid}`);
//   } else {
//     Swal.fire('Error', result.message || 'Failed to create invoice', 'error');
//     console.error(result);
//   }
// }

async function renewHosting2(clientId, serviceId, amount) {
  const confirmed = await Swal.fire({
    title: 'Confirm Renewal',
    text: `Invoice ₦${amount} for hosting #${serviceId}?`,
    icon: 'question',
    showCancelButton: true
  });
  if (!confirmed.isConfirmed) return;

  Swal.fire({ title: 'Creating Invoice...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });
try {
  const resp = await fetch('https://www.elexdonhost.com/api_elexdonhost/renew_hosting2.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ clientid: clientId, serviceid: serviceId, amount })
  });

  const text = await resp.text(); // read body ONCE
  let result;

  try {
    result = JSON.parse(text); // try to parse as JSON
  } catch {
    throw new Error(`Invalid JSON response: ${text}`); // fallback to raw response
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





  return(<Card>
    <Header>
      <ServiceName>{service.name}</ServiceName>
      <Badge>{service.status}</Badge>
    </Header>
    <div>
      <InfoText><strong>Domain:</strong> {service.domain || '—'}</InfoText>
      <InfoText><strong>Billing Cycle:</strong> {service.billingCycle}</InfoText>
      <InfoText><strong>Next Due:</strong> {service.nextDueDate}</InfoText>

    </div>
    <ButtonWrap>
 <Button onClick={() => window.open(`https://${service.domain}/cpanel`,'_blank')} style={{marginRight:"10px"}}>
  Go to cPanel
</Button>



{/* latest */}
<Button onClick={() => renewHosting2(user.id, service.id, service.recurringamount )}>
  Renew Hosting
</Button>





   


    </ButtonWrap>
  </Card>)
}

const UserActiveServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user?.id) {
      setError('User not found. Please log in again.');
      setLoading(false);
      return;
    }

    const fetchServices = async () => {
      try {
        const res = await fetch(
          `https://www.elexdonhost.com/api_elexdonhost/get_active_services_by_user.php?id=${user.id}`
        );
        const data = await res.json();

        if (data.success) {
          setServices(data.services);
          console.log(data)
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
  }, []);

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
        <NoServices>You have no active services.</NoServices>
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
