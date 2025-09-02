
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ServicesLinks from './ServicesLinks';

const Container = styled.div`
  // max-width: 900px;
  margin: 2rem auto;
  padding: 50px 20px;
//   background: #f7f9fc;
  border-radius: 10px;
//   box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display:flex;
  justify-content:center;
  gap:10px;

  @media(max-width:884px){
   flex-direction:column;
  }
 

`;

const Container2 = styled.div`
width:100%;

`



const Container3 = styled.div`
width:100%;

`

const Header = styled.h1`
  font-size: 1.2rem;
  color: #2B32B2;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  background: rgba(0,0,255,0.1);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(43,50,178,0.2);
  margin-bottom: 1.5rem;
  width:85%;

  @media(max-width:768px){
    // width:90%;
  }
`;

const Label = styled.div`
  font-weight: 600;
  color: #555;
  margin-bottom: 0.3rem;
`;

const Value = styled.div`
  font-size: 0.8rem;
  color: #222;
  margin-bottom: 1rem;
`;

const StatsGrid = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  flex-wrap:wrap;
  gap:5px;
  width:100%;

   @media(max-width:768px){
    // width:100%;
  }

  button{
  background:#2B32B2;
  color:white;
  border:none;
  border-radius:5px;
  padding:0px 15px;
  cursor:pointer;

  &:hover{
  background:purple;
  }
  }
`;

const StatBox = styled.div`
  background: rgba(0,0,255,0.5);
  color:white;
  border-radius: 12px;
  text-align: center;
  // flex: 1;
  margin: 0 0.5rem;
  padding:0;
  width:100px;
  height:50px;

  & h3 {
    // margin-bottom: 0.5rem;
    font-weight: bold;
  }

  & p {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

const ErrorMsg = styled.div`
  color: red;
  text-align: center;
  margin-top: 2rem;
  font-weight: 600;
`;


const Title = styled.h2`
  color: #2B32B2;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const UserProfile = ({handleMenuClick}) => {
  const [client, setClient] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    const [invoices, setInvoices] = useState([]);
      const [services, setServices] = useState([]);
       const [tickets, setTickets] = useState([]);
       const [domains, setDomains] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      setError('No user found. Please log in.');
      setLoading(false);
      return;
    }

    const user = JSON.parse(storedUser);

    fetch(`https://www.elexdonhost.com/api_elexdonhost/get_user_by_id.php?id=${user.id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setClient(data.client);
          setStats(data.stats);
        } else {
          setError(data.message || 'Failed to load user details.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch data from server.');
        setLoading(false);
      });
  }, []);




  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
    //   setError('User not found in local storage.');
    //   setLoading(false);
      return;
    }
    // setLoading(true)

    fetch(`https://www.elexdonhost.com/api_elexdonhost/get_invoices_by_user.php?id=${user.id}`)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setInvoices(data.invoices);
        } else {
        //   setError(data.message || 'Unable to load invoices.');
        }
        // setLoading(false);
      })
      .catch(err => {
        console.error(err);
        // setError('Server error.');
        // setLoading(false);
      });
  }, []);




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
        //   console.log(data)
        } else {
        //   setError(data.message);
        }
      } catch (err) {
        // setError('Failed to fetch services.');
      } finally {
        // setLoading(false);
      }
    };

    fetchServices();
  }, []);



  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user?.id) {
        // setError('User not found. Please log in again.');
        // setLoading(false);
        return;
      }
  
      const fetchTickets = async () => {
        try {
          const res = await fetch(
            `https://www.elexdonhost.com/api_elexdonhost/get_tickets_by_user.php?id=${user.id}`
          );
          const data = await res.json();
  
          if (data.success) {
            setTickets(data.tickets);
          } else {
            // setError(data.message);
          }
        } catch (err) {
        //   setError('Failed to fetch tickets.');
        } finally {
        //   setLoading(false);
        }
      };
  
      fetchTickets();
    }, []);





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
          // console.log(data)
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






   if (loading) return <Loading><Title>User Dashboard</Title>
    <h4>Loading ...</h4></Loading>;
    
  if (error) return <Loading><Title>User Dashboard</Title>
    <h4>{error}</h4></Loading>;

  return (
    <Container>
      
<Container2>

  <Header>Welcome, {client?.firstname} {client?.lastname}</Header>
  <Card>
        <Label>Email</Label>
        <Value>{client?.email}</Value>

        <Label>Company</Label>
        <Value>{client?.companyname || 'N/A'}</Value>

        <Label>Phone Number</Label>
        <Value>{client?.phonenumber || 'N/A'}</Value>

        <Label>Address</Label>
        <Value>
          {client?.address1}, {client?.city}, {client?.state}, {client?.postcode}, {client?.country}
        </Value>
      </Card>



 {stats && (
        <StatsGrid>
          <button onClick={()=>handleMenuClick('myinvoices')}>
            <h3>Invoices ({invoices?.length || 0})</h3>
            <p></p>
          </button>
          <button onClick={()=>handleMenuClick('useractiveservices')}>
            <h3>Active Services ({services?.length || 0})</h3>
            <p></p>
          </button>
           <button onClick={()=>handleMenuClick('useractivedomains')}>
            <h3>Active Domains ({domains?.length || 0})</h3>
            <p></p>
          </button>
          <button onClick={()=>handleMenuClick('tickets')}>
            <h3>Tickets ({tickets.length || 0})</h3>
            <p></p>
          </button>
        </StatsGrid>
      )}

</Container2>
    

     <Container3>
<ServicesLinks/>
     </Container3>
      
    </Container>
  );
};

export default UserProfile;
