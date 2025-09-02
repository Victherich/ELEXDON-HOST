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



const DomainCard = ({ domain }) => {
const user = JSON.parse(localStorage.getItem('user'));
const navigate = useNavigate();



const handleRenewDomain = async (domain, clientid) => {
  const confirm = await Swal.fire({
    title: 'Renew Domain?',
    text: `Generate invoice to renew ${domain}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes, Renew'
  });

  if (!confirm.isConfirmed) return;

  Swal.fire({
    title: 'Processing...',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading()
  });

  try {
    const res = await fetch('https://www.elexdonhost.com/api_elexdonhost/renew_domain.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        domain,
        clientid,
        years: 1
      })
    });

    if (!res.ok) {
      throw new Error(`Server responded with status ${res.status}`);
    }

    const result = await res.json();

    if (result.success) {
      Swal.fire({
        title: 'Success!',
        text: 'Invoice generated. Redirecting...',
        icon: 'success'
      }).then(() => {
        navigate(`/invoice/${result.invoiceid}`);
      });
    } else {
      Swal.fire('Failed', result.message || 'Something went wrong', 'error');
    }

  } catch (err) {
    Swal.fire('Error', err.message || 'Failed to connect to the server.', 'error');
    console.error(err);
  }
};




    

    return(

    
  <Card>
    <Header>
      <ServiceName>{domain.domain}</ServiceName>
      <Badge>{domain.status}</Badge>
    </Header>
    <div>
      {/* <InfoText><strong>Registrar:</strong> {domain.registrar || '—'}</InfoText> */}
      <InfoText><strong>Registration Date:</strong> {domain.registrationdate}</InfoText>
      <InfoText><strong>Next Due:</strong> {domain.nextDueDate}</InfoText>
      {/* <InfoText><strong>Expiry:</strong> {domain.expirydate}</InfoText> */}
    </div>
    <ButtonWrap>

<Button onClick={() => handleRenewDomain(domain.domain, user.id)}>
  Renew
</Button>



    </ButtonWrap>
  </Card>)
}

const UserActiveDomains = () => {
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user?.id) {
      setError('User not found. Please log in again.');
      setLoading(false);
      return;
    }

    const fetchDomains = async () => {
      try {
        const res = await fetch(
          `https://www.elexdonhost.com/api_elexdonhost/get_active_domains_by_user.php?id=${user.id}`
        );
        const data = await res.json();

        if (data.success) {
          setDomains(data.domains);
          console.log(data)
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('Failed to fetch domains.');
      } finally {
        setLoading(false);
      }
    };

    fetchDomains();
  }, []);

  return (
    <Container>
      <Title>My Active Domains</Title>

      {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {!loading && !error && domains.length === 0 && (
        <NoServices>You have no active domains.</NoServices>
      )}

      <Grid>
        {domains.map((domain) => (
          <DomainCard key={domain.id} domain={domain} />
        ))}
      </Grid>
    </Container>
  );
};

export default UserActiveDomains;

