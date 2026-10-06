import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaShieldAlt, FaGlobe, FaServer, FaCheckCircle, FaClock, FaSyncAlt , FaUser, FaPhone} from 'react-icons/fa';
import ServicesLinks from './ServicesLinks';
import { Context } from './Context';
import OrderStatistics from './OrderStatistics';
import LoginModal2 from './LoginModal2';
import Swal from 'sweetalert2';
import PaystackPop from "@paystack/inline-js";
import axios from 'axios';



const Container = styled.div`
  margin: 10px auto;
  padding: 10px;
  border-radius: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  gap: 10px;

  @media(max-width: 884px){
    flex-direction: column;
  }
`;

const Container2 = styled.div`
  width: 100%;
`;

const Container3 = styled.div`
  width: 100%;
  max-width: 320px;

  @media(max-width: 884px){
    max-width: 100%;
  }
`;

const Header = styled.h1`
  font-size: 1.4rem;
  color:#4f46e5;
  margin-bottom: 10px;
  font-weight: 700;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 15px rgba(43,50,178,0.06);
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
`;

const SectionSubHeader = styled.h3`
  font-size: 1.1rem;
  color: #1e293b;
  margin: 10px 0 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
`;

const Label = styled.div`
  font-weight: 600;
  color: #64748b;
  font-size: 0.85rem;
  margin-bottom: 2px;
`;

const Value = styled.div`
  font-size: 0.95rem;
  color: #0f172a;
  margin-bottom: 8px;
  font-weight: 500;
`;

const StatsGrid = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  button {
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 8px 10px;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(43, 50, 178, 0.2);
    transition: all 0.2s ease;
    flex: 1;
    min-width: 130px;

    &:hover {
      background: #4338ca;
      transform: translateY(-2px);
    }

    h3 {
      font-size: 0.9rem;
      margin: 0;
      font-weight: 600;
    }
  }
`;

const HostingTable = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);

  .table-row {
    display: grid;
    grid-template-columns: 2fr 1.5fr 1fr 1fr;
    padding: 8px 10px;
    border-bottom: 1px solid #f1f5f9;
    font-size: 0.88rem;
    align-items: center;

    &:last-child {
      border-bottom: none;
    }

    &.header-row {
      background: #f8fafc;
      font-weight: 700;
      color: #475569;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 8px;
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
  }

  .renew-btn {
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 0.78rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: background 0.2s ease;

    &:hover {
      background: #4338ca;
    }
  }
`;

const EmptyState = styled.div`
  padding: 10px;
  text-align: center;
  color: #64748b;
  font-size: 0.85rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px dashed #cbd5e1;
  margin-bottom: 10px;
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const Title = styled.h2`
  color: #4f46e5;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ButtonWrap = styled.div`
display:flex;
gap: 10px;

`

const Button = styled.button`
background: #4f46e5;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    font-size: 0.78rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: background 0.2s ease;

    &:hover {
      background: #4338ca;
    }
`



const TableWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  margin-bottom: 2rem;
`;

const ScrollableContainer = styled.div`
  max-height: 600px; /* Vertical scroll height */
  overflow-y: auto;
  overflow-x: auto; /* Horizontal scroll support */
  
  /* Custom scrollbars */
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
  white-space: nowrap; /* Forces horizontal scroll when content overflows */

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


const ExpiredBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #fee2e2;
  color: #991b1b;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 700;
  margin-left: 8px;
  vertical-align: middle;
`;

const RenewalBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #e0f2fe;
  color: #0369a1;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 700;
  margin-left: 8px;
  vertical-align: middle;
`;

const UserProfile2 = ({ handleMenuClick }) => {
  const [client, setClient] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [invoices, setInvoices] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [domains, setDomains] = useState([]);
  const [emailOrders, setEmailOrders] = useState([]);
  const [sslOrders, setSslOrders] = useState([]);
  const{api_domain, emailPackages, sslPackages, api_key, paystack_key}=useContext(Context);
    const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user2');
    if (!storedUser) {
      setError('No user found. Please log in.');
      setLoading(false);
      return;
    }

    const user = JSON.parse(storedUser);
    console.log(user); // Debugging line to check user ID

    // Fetch primary user profile and stats
    fetch(`${api_domain}/get_manual_user_by_id.php?id=${user.id}`)
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

    // Fetch Domains
    fetch(`${api_domain}/get_domain_orders_by_user.php?id=${user.id}`)
      .then(res => res.json())
      .then(data => { if (data.success) setDomains(data.orders || data.domains); })
      .catch(err => console.error(err));

    // Fetch Email Orders
    fetch(`${api_domain}/get_email_orders_by_user.php?id=${user.id}`)
      .then(res => res.json())
      .then(data => { if (data.success) setEmailOrders(data.orders); })
      .catch(() => setEmailOrders([]));

    // Fetch SSL Orders
    fetch(`${api_domain}/get_ssl_orders_by_user.php?id=${user.id}`)
      .then(res => res.json())
      .then(data => { if (data.success) setSslOrders(data.orders); })
      .catch(() => setSslOrders([]));
  }, []);

  // Helper for frontend email product name mapping
// Fixed Helper function using .find()
        const getEmailPlanName = (productId) => {
          // Convert both to string just in case product_id is saved as an integer in the database
          const foundPackage = emailPackages.find(pkg => String(pkg.id) === String(productId));
          return foundPackage ? foundPackage.title : `Email Plan #${productId}`;
        };

  // Helper for frontend SSL product name mapping
        const getSSLPlanName = (productId) => {
          // Convert both to string just in case product_id is saved as an integer in the database
          const foundPackage = sslPackages.find(pkg => String(pkg.id) === String(productId));
          return foundPackage ? foundPackage.title : `SSL Plan #${productId}`;
        };




const processSSLRenewalBackend = async (order, renewalAmount, paymentRef) => {
  try {
    // --------------------------------------------------
    // 1. Validate the order
    // --------------------------------------------------

    console.log("SSL renewal order:", order);

    const orderId = Number(
      typeof order === "object" ? order?.id : order
    );

    if (!orderId || orderId <= 0) {
      console.error("Invalid order ID:", order);

      Swal.fire(
        "Error",
        "Invalid SSL order ID. The renewal request cannot be processed.",
        "error"
      );

      return;
    }

    // --------------------------------------------------
    // 2. Show loading message
    // --------------------------------------------------

    Swal.fire({
      title: "Payment Successful!",
      text: "Processing your SSL renewal request...",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // --------------------------------------------------
    // 3. Create backend payload
    // --------------------------------------------------

    const requestData = {
      order_id: orderId
    };

    console.log(
      "Submitting SSL renewal payload to backend:",
      requestData
    );

    // --------------------------------------------------
    // 4. Send request to PHP backend
    // --------------------------------------------------

    const response = await axios.post(
      `${api_domain}/request_ssl_renewal.php`,
      requestData,
      {
        headers: {
          "Content-Type": "application/json"
        },
        timeout: 30000
      }
    );

    console.log("Backend HTTP status:", response.status);
    console.log("Backend response:", response.data);

    // --------------------------------------------------
    // 5. Close loading alert
    // --------------------------------------------------

    Swal.close();

    // --------------------------------------------------
    // 6. Check backend response
    // --------------------------------------------------

    if (response.data?.success === true) {

      // -----------------------------------------------
      // Renewal successfully saved in database
      // -----------------------------------------------

      await Swal.fire({
        icon: "success",
        title: "Renewal Requested!",
        text:
          response.data.message ||
          "Your SSL renewal request was successfully submitted.",
        confirmButtonText: "OK"
      });

      // ------------------------------------------------
      // 7. Refresh SSL orders from database
      // ------------------------------------------------

      const clientId =
        order?.user_id ||
        (typeof client !== "undefined" ? client?.id : null);

      console.log("Client ID for refresh:", clientId);

      if (clientId) {
        try {

          const refreshResponse = await axios.get(
            `${api_domain}/get_ssl_orders_by_user.php`,
            {
              params: {
                id: clientId
              },
              timeout: 30000
            }
          );

          console.log(
            "Updated SSL orders response:",
            refreshResponse.data
          );

          if (refreshResponse.data?.success === true) {

            setSslOrders(
              refreshResponse.data.orders || []
            );

            console.log(
              "SSL orders table refreshed successfully."
            );

          } else {

            console.warn(
              "SSL orders were updated but table refresh failed:",
              refreshResponse.data
            );
          }

        } catch (refreshError) {

          console.error(
            "Error refreshing SSL orders:",
            refreshError
          );

          // Don't tell the user the renewal failed.
          // The database update already succeeded.
        }
      }

      return;
    }

    // --------------------------------------------------
    // 8. Backend returned success:false
    // --------------------------------------------------

    console.error(
      "Backend rejected SSL renewal:",
      response.data
    );

    Swal.fire({
      icon: "warning",
      title: "Renewal Not Updated",
      text:
        response.data?.message ||
        "The SSL renewal request could not be updated.",
      confirmButtonText: "OK"
    });

  } catch (error) {

    // --------------------------------------------------
    // 9. Close loading popup
    // --------------------------------------------------

    Swal.close();

    // --------------------------------------------------
    // 10. Detailed error logging
    // --------------------------------------------------

    console.error(
      "SSL renewal request failed:",
      error
    );

    console.error(
      "Error response:",
      error?.response?.data
    );

    console.error(
      "HTTP status:",
      error?.response?.status
    );

    console.error(
      "Request config:",
      error?.config
    );

    // --------------------------------------------------
    // 11. Show useful error to user
    // --------------------------------------------------

    const serverMessage =
      error?.response?.data?.message ||
      error?.response?.data?.error;

    Swal.fire({
      icon: "error",
      title: "Renewal Request Failed",
      text:
        serverMessage ||
        "Payment was successful, but the SSL renewal request could not be processed. Please try again.",
      confirmButtonText: "OK"
    });
  }
};



 const generateCustomReference = () => {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `SSL-${timestamp}-${randomString}`;
  };



  const handleRenewSSL = (serviceType, order) => {
    if (serviceType !== 'SSL Certificate') return;

 if (order.activation_date) {
  const activationDate = new Date(order.activation_date);
  const oneYearFromActivation = new Date(activationDate);
  oneYearFromActivation.setFullYear(oneYearFromActivation.getFullYear() + 1);

  // Checks if the current date is more than 1 year past the activation date
  if (oneYearFromActivation > new Date()) {
    Swal.fire({
      icon: "warning",
      title: "Invalid Renewal Request",
      text: "You cannot renew this SSL certificate yet."
    });
    return;
  }
}

    const matchedPackage = sslPackages.find(pkg => String(pkg.id) === String(order.product_id));
    const renewalAmount = matchedPackage ? matchedPackage.numericPrice : Number(order.amount) || 0;
    const formattedAmount = '₦' + renewalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const packageName = matchedPackage ? matchedPackage.title : `SSL Plan #${order.product_id}`;

    // 1. Confirm renewal details
    Swal.fire({
      title: 'Request SSL Renewal?',
      html: `
        <div style="text-align: left; font-size: 0.95rem;">
          <p><b>Domain:</b> ${order.domain || 'N/A'}</p>
          <p><b>Package:</b> ${packageName}</p>
          <p><b>Renewal Fee:</b> <span style="color: #4f46e5; font-weight: bold;">${formattedAmount}</span></p>
          <p style="margin-top: 10px; color: #64748b; font-size: 0.85rem;">You will be redirected to complete payment securely.</p>
        </div>
      `,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Proceed to Payment',
    }).then((result) => {
      if (!result.isConfirmed) return;

      // 2. Initialize Paystack Transaction
      const customRef = typeof generateCustomReference === 'function' ? generateCustomReference() : 'SSL-REN-' + Date.now();
      const paystack = new PaystackPop();

      paystack.newTransaction({
        key: paystack_key,
        amount: Math.ceil(renewalAmount * 100),
        email: client?.email,
        ref: customRef,
        onSuccess: (transaction) => {
          const paymentRefUsed = transaction?.reference || customRef;
          // Hand off to the backend processing function cleanly
          processSSLRenewalBackend(order, renewalAmount, paymentRefUsed);
        },
        onCancel: () => {
          Swal.fire({ icon: "warning", text: "Payment cancelled by user." });
        },
        onError: (err) => {
          Swal.fire({ icon: "error", title: "Payment Failed", text: err?.message || "An unknown error occurred during payment." });
        }
      });
    });
  };




  if (loading) return (
    <Loading>
      <Title>User Dashboard</Title>
      <h4>Loading your hosting profile...</h4>
    </Loading>
  );
    
  if (error) return (
    <Loading>
      <Title>User Dashboard</Title>
      <h4 style={{ color: 'red' }}>{error}</h4>
    </Loading>
  );

  return (
    <Container>
      <Container2>
        <p>Welcome back, {client?.firstname || client?.name || 'Client'} 👋</p>
        {client?.role === 'admin'
          ? <Header>Admin SSL and Email Hosting Management Dashboard</Header>
          : <Header>Client SSL and Email Hosting Management Dashboard</Header>
        }

          
        {/* Client Account Overview Card */}
        <Card>
          <SectionSubHeader style={{ marginTop: 0, color: '#2B32B2' }}><FaServer /> Client Account Profile</SectionSubHeader>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
            <div>
              <Label>Email Address</Label>
              <Value>{client?.email}</Value>

  
            </div>
            <div>
              <Label>Phone Number</Label>
              <Value>{client?.phonenumber || client?.phone || 'N/A'}</Value>

        
            </div>
          </div>
        </Card>

        {client?.role!=="admin"&&<button onClick={() => setIsModalOpen(true)} style={{backgroundColor:"#4f46e5", color:"white", padding:"8px", borderRadius:"5px", border:"none", cursor:"pointer"}}>Manage Your Web Hosting</button>
      }
        
        {client?.role==='admin'&&<>
        <Title style={{fontSize: '1.2rem', fontWeight: 'bold'}}>Admin Actions</Title>
    
        <ButtonWrap>
            
        {/* <Button onClick={()=>handleMenuClick('managedomainorders')}>
            Manage Domain Orders
        </Button> */}

        <Button onClick={()=>handleMenuClick('managesslorders')}>
            Manage SSL Certificate Orders
        </Button>
           <Button onClick={()=>handleMenuClick('manageblogs')}>
            Manage Blogs
        </Button>
        <Button onClick={()=>handleMenuClick('manageemailsorders')}>
            Manage Email Hosting Orders
        </Button>
        

       
        </ButtonWrap>
        </>
            
            }
{client?.role!=="admin"&&<>

        {/* Domain Portfolio Section */}
        {/* <SectionSubHeader><FaGlobe /> Registered Domains</SectionSubHeader> */}
        {/* {domains.length > 0 ? (
          <HostingTable>
            <div className="table-row header-row">
              <div>Domain Name</div>
              <div>Expiry Date</div>
              <div>Status</div>
              <div>Action</div>
            </div>
            {domains.map((dom, idx) => {
              const status = dom.status || 'Active';
              const isActive = status.toLowerCase().includes('active');
              return (
                <div className="table-row" key={idx}>
                  <div style={{ fontWeight: 600 }}>{dom.domain || dom.name}</div>
                  <div>{dom.expirydate || dom.nextduedate || 'Active'}</div>
                  <div>
                    <span className={`status-badge ${isActive ? 'active' : 'pending'}`}>
                      {isActive ? <FaCheckCircle /> : <FaClock />} {status}
                    </span>
                  </div>
                  <div>
                    <button className="renew-btn" 
                    // onClick={() => handleRenew('Domain', dom)}
                    >
                      <FaSyncAlt /> Renew
                    </button>
                  </div>
                </div>
              );
            })}
          </HostingTable>
        ) : (
          <EmptyState>No domains registered under your account yet.</EmptyState>
        )} */}

        {/* Email Hosting Details Section */}
        <SectionSubHeader><FaEnvelope /> Email Hosting Subscriptions</SectionSubHeader>
               <TableWrapper>
                    <ScrollableContainer>
                      <Table>
                        <thead>
                          <tr>
                            {/* <th># ID</th> */}
                            {/* <th>Client Details</th> */}
                            <th>Plan Name</th>
                            <th>Domain Mailbox</th>
                            <th>Status</th>
                            <th>Reference</th>
                            <th>Created Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {emailOrders.length > 0 ? (
                            emailOrders.map((order, index) => {
                              const status = order.status || 'Active';
                              const isActive = status.toLowerCase().includes('active');
                              return (
                                <tr key={order.id || index}>
                                  {/* <td>#{order.id}</td> */}
                               
                                  <td style={{ fontWeight: '600' }}>{getEmailPlanName(order.product_id)}</td>
                                  <td>{order.domain}</td>
                                  <td>
                                    <StatusBadge className={isActive ? 'active' : 'pending'}>
                                      {isActive ? <FaCheckCircle /> : <FaClock />} {status}
                                    </StatusBadge>
                                  </td>
                                  <td>
                                    {order.reference}
                                  </td>
                                  <td>{order.created_at || 'N/A'}</td>
                                  <td>
                                    <RenewButton 
                                    // onClick={() => handleRenew(order)}
                                    >
                                      <FaSyncAlt /> Renew
                                    </RenewButton>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <tr>
                              <td colSpan="7">
                                <EmptyState>No email orders.</EmptyState>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </Table>
                    </ScrollableContainer>
                  </TableWrapper>
        

  

        {/* SSL Certificate Details Section */}
<SectionSubHeader><FaShieldAlt /> SSL Certificates</SectionSubHeader>
<TableWrapper>
  <ScrollableContainer>
    <Table>
      <thead>
        <tr>
          <th>Certificate Type</th>
          <th>Secured Domain</th>
          <th>Status</th>
          <th>Reference</th>
          <th>Created Date</th>
          <th>Activation Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {sslOrders.length > 0 ? (
          sslOrders.map((order, index) => {
            const status = order.status || 'Pending_Activation';
            const isActive = status.toLowerCase() === 'activated' || status.toLowerCase().includes('active');
            const isRenewalRequested = Number(order.renewal_requested) === 1;
            // Expiry check: 1 year (365 days) from activation_date
            let isExpired = false;
            if (order.activation_date) {
              const activationDate = new Date(order.activation_date);
              const expiryDate = new Date(activationDate);
              expiryDate.setFullYear(expiryDate.getFullYear() + 1);
              const currentDate = new Date();
              if (currentDate > expiryDate) {
                isExpired = true;
              }
            }

            return (
              <tr key={order.id || index}>
                <td style={{ fontWeight: '600' }}>{getSSLPlanName(order.product_id)}   
                  <br/>
                  {isExpired && (  
                    <ExpiredBadge>
                      <FaClock size={10} /> Expired
                    </ExpiredBadge>
                  )}<br/>
                  {isRenewalRequested && (
    <RenewalBadge>
      <FaSyncAlt size={10} /> Renewal Requested
    </RenewalBadge>
  )}
                  </td>
                <td>
                  {order.domain}
                
                </td>
                <td>
                  <StatusBadge className={isActive ? 'active' : 'pending'}>
                    {isActive ? <FaCheckCircle /> : <FaClock />} {status}
                  </StatusBadge>
                </td>
                <td>{order.reference || 'N/A'}</td>
                <td>{order.created_at || 'N/A'}</td>
                <td>{order.activation_date || 'Not Activated'}</td>
                <td>
                 <RenewButton 
  onClick={() => handleRenewSSL('SSL Certificate', order)} 
  disabled={isRenewalRequested}
  style={{ opacity: isRenewalRequested ? 0.2 : 1, cursor: isRenewalRequested ? 'not-allowed' : 'pointer' }}
>
  {!isRenewalRequested && <FaSyncAlt />} Renew
</RenewButton>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan="7">
              <EmptyState>No SSL certificates installed. Protect your client data with enterprise SSL encryption.</EmptyState>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  </ScrollableContainer>
</TableWrapper>
</>}
{client.role==="admin" && <OrderStatistics/>}

  <LoginModal2
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        email={client.email}
        api_domain={api_domain}
        api_key={api_key}
      />
      </Container2>
{/* 
      <Container3>
        <ServicesLinks />
      </Container3> */}
    </Container>
  );
};

export default UserProfile2;