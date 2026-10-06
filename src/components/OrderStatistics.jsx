import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from './Context';

export default function OrderStatistics() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { api_domain } = useContext(Context);

  useEffect(() => {
    // Fetch both endpoints concurrently
    Promise.all([
      fetch(`${api_domain}/get_all_email_orders_with_users.php`).then((res) => res.json()),
      fetch(`${api_domain}/get_all_ssl_orders_with_users.php`).then((res) => res.json())
    ])
      .then(([emailData, sslData]) => {
        const emailOrders = emailData.success ? emailData.orders.map(o => ({ ...o, type: 'Email' })) : [];
        const sslOrders = sslData.success ? sslData.orders.map(o => ({ ...o, type: 'SSL' })) : [];

        // Combine both into one list
        setOrders([...emailOrders, ...sslOrders]);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Server connection error while fetching orders.');
        setLoading(false);
      });
  }, [api_domain]);

  // Calculate Statistics
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + Number(order.amount || 0), 0);
  const emailCount = orders.filter((o) => o.type === 'Email').length;
  const sslCount = orders.filter((o) => o.type === 'SSL').length;

  if (loading) {
    return (
      <LoadingContainer>
        Loading statistics...
        <div>
          {/* <StyledLink href="/dashboard">← Back to Dashboard</StyledLink> */}
        </div>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <p>{error}</p>
        {/* <StyledLink href="/dashboard">← Back to Dashboard</StyledLink> */}
      </ErrorContainer>
    );
  }

  return (
    <DashboardWrapper>
      <HeaderSection>
        <Title>Order Statistics Overview</Title>
        {/* <StyledLink href="/dashboard">← Back to Dashboard</StyledLink> */}
      </HeaderSection>

      <StatsGrid>
        <StatCard>
          <StatLabel>Total Orders</StatLabel>
          <StatValue>{totalOrders.toLocaleString()}</StatValue>
          <StatSubtext>Combined Email & SSL orders</StatSubtext>
        </StatCard>

        {/* <StatCard>
          <StatLabel>Total Revenue</StatLabel>
          <StatValue>
            ${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </StatValue>
          <StatSubtext>Gross earnings</StatSubtext>
        </StatCard> */}

        <StatCard>
          <StatLabel>Email Orders</StatLabel>
          <StatValue>{emailCount.toLocaleString()}</StatValue>
          <StatSubtext>Active email service plans</StatSubtext>
        </StatCard>

        <StatCard>
          <StatLabel>SSL Orders</StatLabel>
          <StatValue>{sslCount.toLocaleString()}</StatValue>
          <StatSubtext>Secured certificates</StatSubtext>
        </StatCard>
      </StatsGrid>
    </DashboardWrapper>
  );
}

// --- Styled Components ---

const DashboardWrapper = styled.div`
  padding: 32px;
  background-color: #f8fafc;
  min-height: 100vh;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
`;

const StatCard = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.05);
  }
`;

const StatLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
`;

const StatValue = styled.div`
  font-size: 2.25rem;
  font-weight: 800;
  margin: 16px 0 8px 0;
  letter-spacing: -0.02em;
  /* Applying your color theme as a text gradient for the major text */
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatSubtext = styled.span`
  font-size: 0.8rem;
  color: #94a3b8;
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 60px;
  color: #64748b;
  font-size: 1rem;
`;

const ErrorContainer = styled.div`
  text-align: center;
  padding: 60px;
  color: #ef4444;
  font-size: 1rem;
`;

const StyledLink = styled.a`
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;