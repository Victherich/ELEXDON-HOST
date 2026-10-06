
// import React, { useEffect, useState, useContext } from 'react';
// import styled from 'styled-components';
// import ServicesLinks from './ServicesLinks';
// import { Context } from './Context';

// const Container = styled.div`
//   // max-width: 900px;
//   margin: 2rem auto;
//   padding: 50px 20px;
// //   background: #f7f9fc;
//   border-radius: 10px;
// //   box-shadow: 0 8px 30px rgba(0,0,0,0.12);
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   display:flex;
//   justify-content:center;
//   gap:10px;

//   @media(max-width:884px){
//    flex-direction:column;
//   }
 

// `;

// const Container2 = styled.div`
// width:100%;

// `



// const Container3 = styled.div`
// width:100%;

// `

// const Header = styled.h1`
//   font-size: 1.5rem;
//   color: #2B32B2;
//   margin-bottom: 1rem;
// `;

// const Card = styled.div`
//   background: rgba(0,0,255,0.1);
//   border-radius: 10px;
//   padding: 1.5rem;
//   box-shadow: 0 4px 15px rgba(43,50,178,0.2);
//   margin-bottom: 1.5rem;
//   width:85%;

//   @media(max-width:768px){
//     // width:90%;
//   }
// `;

// const Label = styled.div`
//   font-weight: 600;
//   color: #555;
//   margin-bottom: 0.3rem;
// `;

// const Value = styled.div`
//   font-size: 0.8rem;
//   color: #222;
//   margin-bottom: 1rem;
// `;

// const StatsGrid = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 1rem;
//   flex-wrap:wrap;
//   gap:5px;
//   width:100%;

//    @media(max-width:768px){
//     // width:100%;
//   }

//   button{
//   background:#2B32B2;
//   color:white;
//   border:none;
//   border-radius:5px;
//   padding:10px 20px;
//   cursor:pointer;

//   &:hover{
//   background:purple;
//   }
//   }
// `;

// const StatBox = styled.div`
//   background: rgba(0,0,255,0.5);
//   color:white;
//   border-radius: 12px;
//   text-align: center;
//   // flex: 1;
//   margin: 0 0.5rem;
//   padding:0;
//   width:100px;
//   height:50px;

//   & h3 {
//     // margin-bottom: 0.5rem;
//     font-weight: bold;
//   }

//   & p {
//     font-size: 1rem;
//     font-weight: bold;
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
//   color: red;
//   text-align: center;
//   margin-top: 2rem;
//   font-weight: 600;
// `;


// const Title = styled.h2`
//   color: #2B32B2;
//   font-size: 2rem;
//   margin-bottom: 1.5rem;
// `;

// const UserProfile = ({handleMenuClick}) => {
//   const [client, setClient] = useState(null);
//   const [stats, setStats] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//     const [invoices, setInvoices] = useState([]);
//       const [services, setServices] = useState([]);
//        const [tickets, setTickets] = useState([]);
//        const [domains, setDomains] = useState([]);
//        const {api_domain, api_key} = useContext(Context);

//        console.log(client)

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (!storedUser) {
//       setError('No user found. Please log in.');
//       setLoading(false);
//       return;
//     }

//     const user = JSON.parse(storedUser);
// // console.log(user);
//     fetch(`${api_domain}/get_user_by_id.php?id=${user.id}&key=${api_key}`)
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           setClient(data.client);
//           setStats(data.stats);
//         } else {
//           setError(data.message || 'Failed to load user details.');
//         }
//         setLoading(false);
//       })
//       .catch(() => {
//         setError('Failed to fetch data from server.');
//         setLoading(false);
//       });
//   }, []);




//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (!user || !user.id) {
//     //   setError('User not found in local storage.');
//     //   setLoading(false);
//       return;
//     }
//     // setLoading(true)

//     fetch(`${api_domain}/get_invoices_by_user.php?id=${user.id}&key=${api_key}`)
//       .then(res => res.json())
//       .then(data => {
//         if (data.success) {
//           setInvoices(data.invoices);
//         } else {
//         //   setError(data.message || 'Unable to load invoices.');
//         }
//         // setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         // setError('Server error.');
//         // setLoading(false);
//       });
//   }, []);




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
//         //   console.log(data)
//         } else {
//         //   setError(data.message);
//         }
//       } catch (err) {
//         // setError('Failed to fetch services.');
//       } finally {
//         // setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);



  
//     useEffect(() => {
//       const user = JSON.parse(localStorage.getItem('user'));
//       if (!user?.id) {
//         // setError('User not found. Please log in again.');
//         // setLoading(false);
//         return;
//       }
  
//       const fetchTickets = async () => {
//         try {
//           const res = await fetch(
//             `${api_domain}/get_tickets_by_user.php?id=${user.id}&key=${api_key}`
//           );
//           const data = await res.json();
  
//           if (data.success) {
//             setTickets(data.tickets);
//           } else {
//             // setError(data.message);
//           }
//         } catch (err) {
//         //   setError('Failed to fetch tickets.');
//         } finally {
//         //   setLoading(false);
//         }
//       };
  
//       fetchTickets();
//     }, []);





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
//           `${api_domain}/get_active_domains_by_user.php?id=${user.id}&key=${api_key}`
//         );
//         const data = await res.json();

//         if (data.success) {
//           setDomains(data.domains);
//           // console.log(data)
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






//    if (loading) return <Loading><Title>User Dashboard</Title>
//     <h4>Loading ...</h4></Loading>;
    
//   if (error) return <Loading><Title>User Dashboard</Title>
//     <h4>{error}</h4></Loading>;

//   return (
//     <Container>
      
// <Container2>

//   <p>Welcome, {client?.firstname} {client?.lastname}</p>
//   <Header>Manage your hosting plans</Header>
//   <Card>
//         <Label>Email</Label>
//         <Value>{client?.email}</Value>

//         <Label>Company</Label>
//         <Value>{client?.companyname || 'N/A'}</Value>

//         <Label>Phone Number</Label>
//         <Value>{client?.phonenumber || 'N/A'}</Value>

//         <Label>Address</Label>
//         <Value>
//           {client?.address1}, {client?.city}, {client?.state}, {client?.postcode}, {client?.country}
//         </Value>
//       </Card>



//  {stats && (
//         <StatsGrid>
//           <button onClick={()=>handleMenuClick('myinvoices')}>
//             <h3>Hosting Invoices ({invoices?.length || 0})</h3>
//             <p></p>
//           </button>
//           <button onClick={()=>handleMenuClick('useractiveservices')}>
//             <h3>Active Hosting ({services?.length || 0})</h3>
//             <p></p>
//           </button>
//            {/* <button onClick={()=>handleMenuClick('useractivedomains')}>
//             <h3>Active Domains ({domains?.length || 0})</h3>
//             <p></p>
//           </button> */}
//           <button onClick={()=>handleMenuClick('tickets')}>
//             <h3>Hosting Tickets ({tickets.length || 0})</h3>
//             <p></p>
//           </button>
//         </StatsGrid>
//       )}

// </Container2>
    

//      <Container3>
// <ServicesLinks/>
//      </Container3>
      
//     </Container>
//   );
// };

// export default UserProfile;









import React, { useEffect, useState, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import ServicesLinks from './ServicesLinks';
import { Context } from './Context';
import LoginModal from './LoginModal';

// -----------------------------------------------------
// Animations & Theme Colors
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
  gap: 30px;
  animation: ${fadeIn} 0.4s ease-out;

  @media (max-width: 968px) {
    flex-direction: column;
    padding: 0 15px;
  }
`;

const MainContent = styled.div`
  flex: 1.6;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SidebarContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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

const Card = styled.div`
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  &.full-width {
    grid-column: 1 / -1;
  }
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
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  button {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 14px;
    padding: 20px 16px;
    // cursor: pointer;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.01);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      // border-color: #4f46e5;
      // transform: translateY(-2px);
      // box-shadow: 0 10px 20px -5px rgba(79, 70, 229, 0.15);
      background: #faf5ff;

      h3 {
        color: #4f46e5;
      }
    }

    h3 {
      font-size: 0.85rem;
      font-weight: 600;
      color: #475569;
      margin: 0;
      transition: color 0.2s ease;
    }

    p {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0F172A;
      margin: 0;
    }
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
const UserProfile = ({ handleMenuClick }) => {
  const [client, setClient] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [invoices, setInvoices] = useState([]);
  const [services, setServices] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [domains, setDomains] = useState([]);
  const { api_domain, api_key } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(client);

  useEffect(() => {
    const fetchAllData = async () => {
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

      try {
        // Fetch user profile and summary counts concurrently
        const [userRes, invoicesRes, servicesRes, ticketsRes, domainsRes] = await Promise.all([
          fetch(`${api_domain}/get_user_by_id.php?id=${user.id}&key=${api_key}`),
          fetch(`${api_domain}/get_invoices_by_user.php?id=${user.id}&key=${api_key}`),
          fetch(`${api_domain}/get_active_services_by_user.php?id=${user.id}&key=${api_key}`),
          fetch(`${api_domain}/get_tickets_by_user.php?id=${user.id}&key=${api_key}`),
          fetch(`${api_domain}/get_active_domains_by_user.php?id=${user.id}&key=${api_key}`)
        ]);

        const userData = await userRes.json();
        if (!userData.success) {
          throw new Error(userData.message || 'Failed to load user details.');
        }

        setClient(userData.client);
        setStats(userData.stats);

        const invoicesData = await invoicesRes.json();
        if (invoicesData.success) setInvoices(invoicesData.invoices);

        const servicesData = await servicesRes.json();
        if (servicesData.success) setServices(servicesData.services);

        const ticketsData = await ticketsRes.json();
        if (ticketsData.success) setTickets(ticketsData.tickets);

        const domainsData = await domainsRes.json();
        if (domainsData.success) setDomains(domainsData.domains);

      } catch (err) {
        setError(err.message || 'Failed to fetch dashboard data from server.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [api_domain, api_key]);

  if (loading) {
    return (
      <StateContainer>
        <LoaderSpinner />
        <h3>Loading your dashboard...</h3>
        <p>Please wait while we retrieve your account details.</p>
      </StateContainer>
    );
  }

  if (error) {
    return (
      <StateContainer>
        <h3 style={{ color: '#EF4444' }}>Unable to load dashboard</h3>
        <p>{error}</p>
      </StateContainer>
    );
  }

  return (
    <Container>
      <MainContent>
        <WelcomeBanner>
          <p>Welcome back,</p>
          <Title>{client?.firstname} {client?.lastname}</Title>
        </WelcomeBanner>

        <Card>
          <InfoGroup>
            <Label>Email Address</Label>
            <Value>{client?.email || 'N/A'}</Value>
          </InfoGroup>

          <InfoGroup>
            <Label>Company Name</Label>
            <Value>{client?.companyname || 'N/A'}</Value>
          </InfoGroup>

          <InfoGroup>
            <Label>Phone Number</Label>
            <Value>{client?.phonenumber || 'N/A'}</Value>
          </InfoGroup>

          <InfoGroup className="full-width">
            <Label>Billing Address</Label>
            <Value>
              {[
                client?.address1,
                client?.city,
                client?.state,
                client?.postcode,
                client?.country
              ].filter(Boolean).join(', ') || 'N/A'}
            </Value>
          </InfoGroup>
        </Card>

        {stats && (
          <StatsGrid>
            <button 
            // onClick={() => handleMenuClick('myinvoices')}
              >
              <h3>Hosting Invoices</h3>
              <p>{invoices?.length || 0}</p>
            </button>

            <button onClick={() => handleMenuClick('useractiveservices')}>
              <h3>Active Hosting (Click)</h3>
              <p>{services?.length || 0}</p>
            </button>

            {/* <button onClick={() => handleMenuClick('tickets')}>
              <h3>Support Tickets</h3>
              <p>{tickets?.length || 0}</p>
            </button> */}
          </StatsGrid>
        )}
      </MainContent>

      <SidebarContent>
        <ServicesLinks setIsModalOpen={setIsModalOpen} />
      </SidebarContent>

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        email={client.email}
        api_domain={api_domain}
        api_key={api_key}
      />
    </Container>
  );
};

export default UserProfile;