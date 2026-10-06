import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaSyncAlt, FaCheckCircle, FaClock, FaUser, FaPhone, FaSearch } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Context } from './Context';

// Styled Components
const PageContainer = styled.div`
  padding: 30px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const HeaderSection = styled.div`
  margin-bottom: 24px;
  
  h1 {
    font-size: 1.8rem;
    color: #1e293b;
    font-weight: 700;
    margin: 0 0 6px 0;
  }

  p {
    color: #64748b;
    font-size: 0.95rem;
    margin: 0;
  }
`;

const TableWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  margin-bottom: 2rem;
`;

const ScrollableContainer = styled.div`
  max-height: 600px;
  overflow-y: auto;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  white-space: nowrap;

  th {
    background: #f8fafc;
    color: #475569;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 700;
    padding: 14px 18px;
    border-bottom: 1px solid #e2e8f0;
    position: sticky;
    top: 0;
    z-index: 2;
  }

  td {
    padding: 14px 18px;
    font-size: 0.9rem;
    color: #0f172a;
    border-bottom: 1px solid #f1f5f9;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover td {
    background: #f8fafc;
  }
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;

  &.active {
    background: #dcfce7;
    color: #166534;
  }
  &.pending {
    background: #fef9c3;
    color: #854d0e;
  }
`;

const RenewButton = styled.button`
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: all 0.2s ease;

  &:hover {
    background: #4338ca;
    transform: translateY(-1px);
  }
`;

const UserInfoCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  .name {
    font-weight: 600;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .contact {
    font-size: 0.8rem;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const EmptyState = styled.div`
  padding: 40px;
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
  background: #ffffff;
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 60px;
  color: #64748b;
  font-size: 1rem;
`;


const SearchBarContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  max-width: 400px;

  svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
  }

  input {
    width: 100%;
    padding: 10px 14px 10px 40px;
    font-size: 0.9rem;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    outline: none;
    transition: all 0.2s ease;
    background: #ffffff;

    &:focus {
      border-color: #4f46e5;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }
  }
`;


const StyledLink = styled.a`
  color: #2563eb; /* A clean blue color */
  text-decoration: none;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 16px;
  display: inline-block;
  text-decoration: underline;
cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ManageEmailOrders = ({handleMenuClick}) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { api_domain, emailPackages } = useContext(Context);
    const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`${api_domain}/get_all_email_orders_with_users.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOrders(data.orders);
        } else {
          setError(data.message || 'Failed to load email orders.');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Server connection error while fetching email orders.');
        setLoading(false);
      });
  }, [api_domain]);

 const getEmailPlanName = (productId) => {
  // Convert both to string just in case product_id is saved as an integer in the database
  const foundPackage = emailPackages.find(pkg => String(pkg.id) === String(productId));
  return foundPackage ? foundPackage.title : `Email Plan #${productId}`;
};

  const handleRenew = (order) => {
    Swal.fire({
      title: 'Renew Email Order?',
      text: `Are you sure you want to trigger a renewal for mailbox domain: ${order.domain}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Renew',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Renewed!', `Renewal sequence initiated for ${order.domain}.`, 'success');
      }
    });
  };

    const filteredOrders = orders.filter((order) => {
  const query = searchTerm.toLowerCase();
  const userName = (order.user_name || '').toLowerCase();
  const userEmail = (order.user_email || '').toLowerCase();
  return userName.includes(query) || userEmail.includes(query);
});

  if (loading) {
    return <LoadingContainer>Loading Email Subscriptions and Client Data...</LoadingContainer>;
  }

  if (error) {
    return <LoadingContainer style={{ color: 'red' }}>{error}</LoadingContainer>;
  }

  return (
    <PageContainer>
       <div>
    <StyledLink onClick={()=>handleMenuClick('profile')}>← Back to Dashboard</StyledLink>
  </div>
      <HeaderSection>
        <h1><FaEnvelope style={{ color: '#4f46e5', marginRight: '8px' }} /> Manage Email Orders</h1>
        <p>Review customer professional email hosting packages, client contact information, and renewal statuses.</p>
      </HeaderSection>
<SearchBarContainer>
        <FaSearch />
        <input 
          type="text" 
          placeholder="Search by user name or email..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBarContainer>
      <TableWrapper>
        <ScrollableContainer>
          <Table>
            <thead>
              <tr>
                {/* <th># ID</th> */}
                <th>Client Details</th>
                <th>Plan Name</th>
                <th>Domain Mailbox</th>
                <th>Paid amount</th>
                <th>Reference</th>
                <th>Status</th>
                
                <th>Created Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order, index) => {
                  const status = order.status || 'Active';
                  const isActive = status.toLowerCase().includes('active');
                  return (
                    <tr key={order.id || index}>
                      {/* <td>#{order.id}</td> */}
                      <td>
                        <UserInfoCell>
                          <span className="name">
                            <FaUser size={12} color="#4f46e5" /> {order.user_name || 'N/A'}
                          </span>
                          <span className="contact">
                            <FaEnvelope size={11} /> {order.user_email || 'N/A'} &bull; <FaPhone size={11} /> {order.user_phone || 'N/A'}
                          </span>
                        </UserInfoCell>
                      </td>
                      <td style={{ fontWeight: '600' }}>{getEmailPlanName(order.product_id)}</td>
                      <td>{order.domain}</td>
               <td>
  {Number(order.amount).toLocaleString('en-US', { 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  })}
</td>
                        <td>
                        {order.reference}
                      </td>
                      <td>
                        <StatusBadge className={isActive ? 'active' : 'pending'}>
                          {isActive ? <FaCheckCircle /> : <FaClock />} {status}
                        </StatusBadge>
                      </td>
                    
                      <td>{order.created_at || 'N/A'}</td>
                      <td>
                        <RenewButton onClick={() => handleRenew(order)}>
                          <FaSyncAlt /> Renew
                        </RenewButton>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7">
                    <EmptyState>No email orders found in the database.</EmptyState>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </ScrollableContainer>
      </TableWrapper>
    </PageContainer>
  );
};

export default ManageEmailOrders;