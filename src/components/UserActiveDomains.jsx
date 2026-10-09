// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import Swal from 'sweetalert2';

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



// const DomainCard = ({ domain }) => {
// const user = JSON.parse(localStorage.getItem('user'));
// const navigate = useNavigate();



// const handleRenewDomain = async (domain, clientid) => {
//   const confirm = await Swal.fire({
//     title: 'Renew Domain?',
//     text: `Generate invoice to renew ${domain}?`,
//     icon: 'question',
//     showCancelButton: true,
//     confirmButtonText: 'Yes, Renew'
//   });

//   if (!confirm.isConfirmed) return;

//   Swal.fire({
//     title: 'Processing...',
//     allowOutsideClick: false,
//     didOpen: () => Swal.showLoading()
//   });

//   try {
//     const res = await fetch('https://www.elexdonhost.com/api_elexdonhost/renew_domain.php', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         domain,
//         clientid,
//         years: 1
//       })
//     });

//     if (!res.ok) {
//       throw new Error(`Server responded with status ${res.status}`);
//     }

//     const result = await res.json();

//     if (result.success) {
//       Swal.fire({
//         title: 'Success!',
//         text: 'Invoice generated. Redirecting...',
//         icon: 'success'
//       }).then(() => {
//         navigate(`/invoice/${result.invoiceid}`);
//       });
//     } else {
//       Swal.fire('Failed', result.message || 'Something went wrong', 'error');
//     }

//   } catch (err) {
//     Swal.fire('Error', err.message || 'Failed to connect to the server.', 'error');
//     console.error(err);
//   }
// };




    

//     return(

    
//   <Card>
//     <Header>
//       <ServiceName>{domain.domain}</ServiceName>
//       <Badge>{domain.status}</Badge>
//     </Header>
//     <div>
//       {/* <InfoText><strong>Registrar:</strong> {domain.registrar || '—'}</InfoText> */}
//       <InfoText><strong>Registration Date:</strong> {domain.registrationdate}</InfoText>
//       <InfoText><strong>Next Due:</strong> {domain.nextDueDate}</InfoText>
//       {/* <InfoText><strong>Expiry:</strong> {domain.expirydate}</InfoText> */}
//     </div>
//     <ButtonWrap>

// <Button onClick={() => handleRenewDomain(domain.domain, user.id)}>
//   Renew
// </Button>



//     </ButtonWrap>
//   </Card>)
// }

// const UserActiveDomains = () => {
//   const [domains, setDomains] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (!user?.id) {
//       setError('User not found. Please log in again.');
//       setLoading(false);
//       return;
//     }

//     const fetchDomains = async () => {
//       try {
//         const res = await fetch(
//           `https://www.elexdonhost.com/api_elexdonhost/get_active_domains_by_user.php?id=${user.id}`
//         );
//         const data = await res.json();

//         if (data.success) {
//           setDomains(data.domains);
//           console.log(data)
//         } else {
//           setError(data.message);
//         }
//       } catch (err) {
//         setError('Failed to fetch domains.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDomains();
//   }, []);

//   return (
//     <Container>
//       <Title>My Active Domains</Title>

//       {loading && (
//         <LoaderWrapper>
//           <Loader />
//         </LoaderWrapper>
//       )}

//       {error && <ErrorMessage>{error}</ErrorMessage>}

//       {!loading && !error && domains.length === 0 && (
//         <NoServices>You have no active domains.</NoServices>
//       )}

//       <Grid>
//         {domains.map((domain) => (
//           <DomainCard key={domain.id} domain={domain} />
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default UserActiveDomains;





import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Swal from 'sweetalert2';
import { Context } from './Context';

// -----------------------------------------------------
// Animations & Theme Colors (Matching UserProfile)
// -----------------------------------------------------
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// -----------------------------------------------------
// Styled Components
// -----------------------------------------------------
const Container = styled.div`
  max-width: 1200px;
  margin: 2.5rem auto;
  padding: 0 20px;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${fadeIn} 0.4s ease-out;

  @media (max-width: 968px) {
    padding: 0 15px;
  }
`;

const WelcomeBanner = styled.div`
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  color: #ffffff;
  padding: 24px 28px;
  border-radius: 16px;
  box-shadow: 0 10px 25px -5px rgba(79, 70, 229, 0.25);
  display: flex;
  flex-direction: column;
  gap: 6px;

  p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
    font-weight: 500;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #ffffff;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: #4f46e5;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -5px rgba(79, 70, 229, 0.15);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`;

const ServiceName = styled.h2`
  font-size: 1.1rem;
  font-weight: 700;
  color: #0F172A;
  margin: 0;
  word-break: break-all;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
  white-space: nowrap;

  background-color: ${({ status }) =>
    status === 'Active' || status === 'active' ? '#dcfce7' :
    status === 'Pending' || status === 'pending' ? '#fef3c7' :
    '#fee2e2'};

  color: ${({ status }) =>
    status === 'Active' || status === 'active' ? '#166534' :
    status === 'Pending' || status === 'pending' ? '#92400e' :
    '#991b1b'};
`;

const DomainDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Label = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748B;
`;

const Value = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: #0F172A;
`;

const Button = styled.button`
  background: #f8fafc;
  border: 1px solid #E2E8F0;
  color: #0F172A;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 10px 16px;
  border-radius: 10px;
  transition: all 0.2s ease;
  cursor: pointer;
  text-align: center;
  width: 100%;

  &:hover {
    background: #4f46e5;
    color: #ffffff;
    border-color: #4f46e5;
  }
`;

const StateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  width: 100%;
  gap: 16px;
  text-align: center;
  font-family: 'Inter', sans-serif;

  h3 {
    color: #0F172A;
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
  }

  p {
    color: #64748B;
    font-size: 0.95rem;
    margin: 0;
  }
`;

const LoaderSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #E2E8F0;
  border-top: 3px solid #4f46e5;
  border-radius: 50%;
  animation: ${Spinner} 0.8s linear infinite;
`;

// -----------------------------------------------------
// Domain Card Sub-Component
// -----------------------------------------------------
const DomainCard = ({ domain, api_domain, api_key }) => {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleRenewDomain = async (domainName, clientid) => {
    const confirm = await Swal.fire({
      title: 'Renew Domain?',
      text: `Generate invoice to renew ${domainName}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Renew',
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#64748B'
    });

    if (!confirm.isConfirmed) return;

    Swal.fire({
      title: 'Processing...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    try {
      const res = await fetch(`${api_domain}/renew_domain.php?key=${api_key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: domainName,
          clientid,
          years: 1,
          // key: api_key
        })
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
        console.error(res.status)
      }

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Invoice generated. Redirecting...',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
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

  return (
    <Card>
      <DomainDetails>
        <Header>
          <ServiceName>{domain.domain}</ServiceName>
          <Badge status={domain.status}>{domain.status}</Badge>
        </Header>

        <InfoGroup>
          <Label>Registration Date</Label>
          <Value>{domain.registrationdate || '—'}</Value>
        </InfoGroup>

        <InfoGroup>
          <Label>Next Due Date</Label>
          <Value>{domain.nextDueDate || '—'}</Value>
        </InfoGroup>
      </DomainDetails>

      <Button onClick={() => handleRenewDomain(domain.domain, user?.id)}>
        Renew Domain
      </Button>
    </Card>
  );
};

// -----------------------------------------------------
// Main Component Definition
// -----------------------------------------------------
const UserActiveDomains = () => {
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { api_domain, api_key } = useContext(Context);
console.log(domains)


  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      setError('No active session found. Please log in.');
      setLoading(false);
      return;
    }

    let user;
    try {
      user = JSON.parse(storedUser);
    } catch (e) {
      setError('Invalid session data. Please log in again.');
      setLoading(false);
      return;
    }

    if (!user?.id) {
      setError('User ID missing. Please log in again.');
      setLoading(false);
      return;
    }

    const fetchDomains = async () => {
      try {
        const res = await fetch(
          `${api_domain}/get_active_domains_by_user.php?id=${user.id}&key=${api_key}`
        );
        const data = await res.json();

        if (data.success) {
          setDomains(data.domains || []);
        } else {
          setError(data.message || 'Unable to load active domains.');
        }
      } catch (err) {
        setError('Failed to fetch domains from server.');
      } finally {
        setLoading(false);
      }
    };

    fetchDomains();
  }, [api_domain, api_key]);

  if (loading) {
    return (
      <StateContainer>
        <LoaderSpinner />
        <h3>Loading your domains...</h3>
        <p>Please wait while we retrieve your domain list.</p>
      </StateContainer>
    );
  }

  if (error) {
    return (
      <StateContainer>
        <h3 style={{ color: '#EF4444' }}>Unable to load domains</h3>
        <p>{error}</p>
      </StateContainer>
    );
  }

  if (domains.length === 0) {
    return (
      <Container>
        <WelcomeBanner>
          <p>Domain Portfolio</p>
          <Title>My Active Domains</Title>
        </WelcomeBanner>
        <StateContainer>
          <h3>No active domains found</h3>
          <p>You currently do not have any registered domains.</p>
        </StateContainer>
      </Container>
    );
  }

  return (
    <Container>
      <WelcomeBanner>
        <p>Domain Portfolio</p>
        <Title>My Active Domains</Title>
      </WelcomeBanner>

      <Grid>
        {domains.map((domain) => (
          <DomainCard 
            key={domain.id} 
            domain={domain} 
            api_domain={api_domain} 
            api_key={api_key} 
          />
        ))}
      </Grid>
    </Container>
  );
};

export default UserActiveDomains;