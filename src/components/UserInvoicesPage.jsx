
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h2`
  color: #2B32B2;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: rgba(0,0,255,0.1);
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:300px;

  @media(max-width:428px){
  width:250px
  }
`;

const Label = styled.div`
  font-weight: 600;
  color: #222;
  margin-top: 0.5rem;
`;

const Value = styled.div`
  font-size: 1.1rem;
  color: #111;
  margin-bottom: 0.5rem;
`;

const StatusBadge = styled.div`
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
  font-weight: 600;
  color: white;
  background-color: ${({ status }) =>
    status === 'Paid' ? '#28a745' :
    status === 'Unpaid' ? '#dc3545' :
    '#ffc107'};
  margin-top: 0.5rem;
`;

const Button = styled.a`
  margin-top: 20px;
  text-align: center;
  background: #2B32B2;
  color: white;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s ease;
  cursor:pointer;
  &:hover {
    background: #1a237e;
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
  text-align: center;
  color: red;
  margin-top: 2rem;
`;

const UserInvoicesPage = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
      setError('User not found in local storage.');
      setLoading(false);
      return;
    }
    setLoading(true)

    fetch(`https://www.elexdonhost.com/api_elexdonhost/get_invoices_by_user.php?id=${user.id}`)
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
        setError('Server error.');
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading><Title>My Invoices</Title>
    <h4>Loading invoices...</h4></Loading>;

  if (error) return <Loading><Title>My Invoices</Title>
    <h4>{error}</h4></Loading>;

  return (
    <PageWrapper>
      <Title>My Invoices</Title>
      <Grid>
        {invoices.map(invoice => (
          <Card key={invoice.id}>
            <div>
              <Label>Invoice #: {invoice.id}</Label>
              <Value></Value>

              <Label>Date: {invoice.date}</Label>
              <Value></Value>

              <Label>Total: ₦{invoice.total}</Label>
              <Value></Value>

              <Label>Status: <StatusBadge status={invoice.status}>{invoice.status}</StatusBadge></Label>
              
            </div>
            <Button onClick={()=>navigate(`/invoice/${invoice.id}`)}>
              View Invoice
            </Button>
          </Card>
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default UserInvoicesPage;
