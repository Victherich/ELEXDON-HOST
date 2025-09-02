import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

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
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  padding: 1.25rem;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Subject = styled.h2`
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

const NoTickets = styled.p`
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

const TicketCard = ({ ticket }) => (
  <Card>
    <Header>
      <Subject>{ticket.subject}</Subject>
      <Badge>{ticket.status}</Badge>
    </Header>
    <div>
      <InfoText><strong>Priority:</strong> {ticket.priority}</InfoText>
      <InfoText><strong>Last Reply:</strong> {ticket.lastReply}</InfoText>
      <InfoText><strong>Opened:</strong> {ticket.date}</InfoText>
    </div>
  </Card>
);

const UserTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user?.id) {
      setError('User not found. Please log in again.');
      setLoading(false);
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
          setError(data.message);
        }
      } catch (err) {
        setError('Failed to fetch tickets.');
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  return (
    <Container>
      <Title>My Support Tickets</Title>
<p style={{textAlign:"center"}}>To submit tickets , ensure you are logged in, then proceed to the <button style={{color:"white", backgroundColor:"#2B32B2", cursor:"pointer", border:"none", padding:"5px", borderRadius:"5px"}} onClick={()=>navigate('/support')}>Support Page</button> </p>
      {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {!loading && !error && tickets.length === 0 && (
        <NoTickets>You have no tickets.</NoTickets>
      )}

      <Grid>
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </Grid>
    </Container>
  );
};

export default UserTickets;
