
// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { Context } from './Context';

// const PageWrapper = styled.div`
//   max-width: 1200px;
//   margin: 2rem auto;
//   padding: 2rem;
//   font-family: 'Segoe UI', sans-serif;
// `;

// const Title = styled.h2`
//   color: #2B32B2;
//   font-size: 2rem;
//   margin-bottom: 1.5rem;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   gap: 1.5rem;
// `;

// const Card = styled.div`
//   background: rgba(0,0,255,0.1);
//   border-radius: 16px;
//   padding: 1.5rem;
//   box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   width:300px;

//   @media(max-width:428px){
//   width:250px
//   }
// `;

// const Label = styled.div`
//   font-weight: 600;
//   color: #222;
//   margin-top: 0.5rem;
// `;

// const Value = styled.div`
//   font-size: 1.1rem;
//   color: #111;
//   margin-bottom: 0.5rem;
// `;

// const StatusBadge = styled.div`
//   display: inline-block;
//   padding: 5px;
//   border-radius: 5px;
//   font-weight: 600;
//   color: white;
//   background-color: ${({ status }) =>
//     status === 'Paid' ? '#28a745' :
//     status === 'Unpaid' ? '#dc3545' :
//     '#ffc107'};
//   margin-top: 0.5rem;
// `;

// const Button = styled.a`
//   margin-top: 20px;
//   text-align: center;
//   background: #2B32B2;
//   color: white;
//   font-weight: 600;
//   padding: 0.5rem 1rem;
//   border-radius: 8px;
//   text-decoration: none;
//   transition: 0.3s ease;
//   cursor:pointer;
//   &:hover {
//     background: #1a237e;
//   }
// `;

// const Loading = styled.div`
//   text-align: center;
//   font-size: 1.1rem;
//   color: #666;
//   width:100%;
//   height:100%;
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   flex-direction:column;
// `;

// const ErrorMsg = styled.div`
//   text-align: center;
//   color: red;
//   margin-top: 2rem;
// `;

// const UserInvoicesPage = () => {
//   const [invoices, setInvoices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const {api_domain, api_key}=useContext(Context);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (!user || !user.id) {
//       setError('User not found in local storage.');
//       setLoading(false);
//       return;
//     }
//     setLoading(true)

//     fetch(`${api_domain}/get_invoices_by_user.php?id=${user.id}&key${api_key}`)
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           setInvoices(data.invoices);
//         } else {
//           setError(data.message || 'Unable to load invoices.');
//         }
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setError('Server error.');
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <Loading><Title>My Invoices</Title>
//     <h4>Loading invoices...</h4></Loading>;

//   if (error) return <Loading><Title>My Invoices</Title>
//     <h4>{error}</h4></Loading>;

//   return (
//     <PageWrapper>
//       <Title>My Invoices</Title>
//       <Grid>
//         {invoices.map(invoice => (
//           <Card key={invoice.id}>
//             <div>
//               <Label>Invoice #: {invoice.id}</Label>
//               <Value></Value>

//               <Label>Date: {invoice.date}</Label>
//               <Value></Value>

//               <Label>Total: ₦{invoice.total}</Label>
//               <Value></Value>

//               <Label>Status: <StatusBadge status={invoice.status}>{invoice.status}</StatusBadge></Label>
              
//             </div>
//             <Button onClick={()=>navigate(`/invoice/${invoice.id}`)}>
//               View Invoice
//             </Button>
//           </Card>
//         ))}
//       </Grid>
//     </PageWrapper>
//   );
// };

// export default UserInvoicesPage;



import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
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

const InvoiceDetails = styled.div`
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
  word-break: break-word;

  &.amount {
    font-size: 1.25rem;
    font-weight: 700;
    color: #4f46e5;
  }
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  width: fit-content;
  
  background-color: ${({ status }) =>
    status === 'Paid' ? '#dcfce7' :
    status === 'Unpaid' ? '#fee2e2' :
    '#fef3c7'};

  color: ${({ status }) =>
    status === 'Paid' ? '#166534' :
    status === 'Unpaid' ? '#991b1b' :
    '#92400e'};
`;

const Button = styled.button`
  background: #f8fafc;
  border: 1px solid #E2E8F0;
  color: #0F172A;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 10px 16px;
  border-radius: 10px;
  text-decoration: none;
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
// Component Definition
// -----------------------------------------------------
const UserInvoicesPage = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { api_domain, api_key } = useContext(Context);

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

    setLoading(true);

    // Fixed query parameter string syntax bug (&key -> &key=)
    fetch(`${api_domain}/get_invoices_by_user.php?id=${user.id}&key=${api_key}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setInvoices(data.invoices);
        } else {
          setError(data.message || 'Unable to load invoices.');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Server error while fetching invoices.');
        setLoading(false);
      });
  }, [api_domain, api_key]);

  if (loading) {
    return (
      <StateContainer>
        <LoaderSpinner />
        <h3>Loading your invoices...</h3>
        <p>Please wait while we retrieve your billing history.</p>
      </StateContainer>
    );
  }

  if (error) {
    return (
      <StateContainer>
        <h3 style={{ color: '#EF4444' }}>Unable to load invoices</h3>
        <p>{error}</p>
      </StateContainer>
    );
  }

  return (
    <Container>
      <WelcomeBanner>
        <p>Billing & Payments</p>
        <Title>My Invoices</Title>
      </WelcomeBanner>

      <Grid>
        {invoices.map(invoice => (
          <Card key={invoice.id}>
            <InvoiceDetails>
              <InfoGroup>
                <Label>Invoice Number</Label>
                <Value>#{invoice.id}</Value>
              </InfoGroup>

              <InfoGroup>
                <Label>Issue Date</Label>
                <Value>{invoice.date}</Value>
              </InfoGroup>

              <InfoGroup>
                <Label>Total Amount</Label>
                <Value className="amount">₦{invoice.total}</Value>
              </InfoGroup>

              <InfoGroup>
                <Label>Status</Label>
                <Value>
                  <StatusBadge status={invoice.status}>
                    {invoice.status}
                  </StatusBadge>
                </Value>
              </InfoGroup>
            </InvoiceDetails>

            <Button onClick={() => navigate(`/invoice/${invoice.id}`)}>
              View Invoice
            </Button>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default UserInvoicesPage;