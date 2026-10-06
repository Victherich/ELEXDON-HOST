// import React, { useEffect, useState, useContext } from 'react';
// import styled from 'styled-components';
// import { FaShieldAlt, FaSyncAlt, FaCheckCircle, FaClock, FaUser, FaEnvelope, FaPhone , FaSearch} from 'react-icons/fa';
// import Swal from 'sweetalert2';
// import axios from 'axios';
// import { Context } from './Context';

// // Styled Components
// const PageContainer = styled.div`
//   padding: 30px;
//   max-width: 1200px;
//   margin: 0 auto;
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// `;

// const HeaderSection = styled.div`
//   margin-bottom: 24px;
  
//   h1 {
//     font-size: 1.8rem;
//     color: #1e293b;
//     font-weight: 700;
//     margin: 0 0 6px 0;
//   }

//   p {
//     color: #64748b;
//     font-size: 0.95rem;
//     margin: 0;
//   }
// `;

// const TableWrapper = styled.div`
//   background: #ffffff;
//   border: 1px solid #e2e8f0;
//   border-radius: 12px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
//   overflow: hidden;
//   margin-bottom: 2rem;
// `;

// const ScrollableContainer = styled.div`
//   max-height: 600px; /* Vertical scroll height */
//   overflow-y: auto;
//   overflow-x: auto; /* Horizontal scroll support */
  
//   /* Custom scrollbars */
//   &::-webkit-scrollbar {
//     width: 8px;
//     height: 8px;
//   }
//   &::-webkit-scrollbar-track {
//     background: #f1f5f9;
//   }
//   &::-webkit-scrollbar-thumb {
//     background: #cbd5e1;
//     border-radius: 4px;
//   }
//   &::-webkit-scrollbar-thumb:hover {
//     background: #94a3b8;
//   }
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   text-align: left;
//   white-space: nowrap; /* Forces horizontal scroll when content overflows */

//   th {
//     background: #f8fafc;
//     color: #475569;
//     font-size: 0.78rem;
//     text-transform: uppercase;
//     letter-spacing: 0.05em;
//     font-weight: 700;
//     padding: 14px 18px;
//     border-bottom: 1px solid #e2e8f0;
//     position: sticky;
//     top: 0;
//     z-index: 2;
//   }

//   td {
//     padding: 14px 18px;
//     font-size: 0.9rem;
//     color: #0f172a;
//     border-bottom: 1px solid #f1f5f9;
//   }

//   tr:last-child td {
//     border-bottom: none;
//   }

//   tr:hover td {
//     background: #f8fafc;
//   }
// `;

// const StatusBadge = styled.span`
//   display: inline-flex;
//   align-items: center;
//   gap: 5px;
//   padding: 4px 10px;
//   border-radius: 20px;
//   font-size: 0.75rem;
//   font-weight: 700;

//   &.active {
//     background: #dcfce7;
//     color: #166534;
//   }
//   &.pending {
//     background: #fef9c3;
//     color: #854d0e;
//   }
// `;

// const RenewButton = styled.button`
//   background: #4f46e5;
//   color: white;
//   border: none;
//   border-radius: 6px;
//   padding: 6px 12px;
//   font-size: 0.78rem;
//   font-weight: 600;
//   cursor: pointer;
//   display: inline-flex;
//   align-items: center;
//   gap: 5px;
//   transition: all 0.2s ease;

//   &:hover {
//     background: #4338ca;
//     transform: translateY(-1px);
//   }
// `;

// const UserInfoCell = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2px;

//   .name {
//     font-weight: 600;
//     color: #1e293b;
//     display: flex;
//     align-items: center;
//     gap: 6px;
//   }
//   .contact {
//     font-size: 0.8rem;
//     color: #64748b;
//     display: flex;
//     align-items: center;
//     gap: 6px;
//   }
// `;

// const EmptyState = styled.div`
//   padding: 40px;
//   text-align: center;
//   color: #64748b;
//   font-size: 0.9rem;
//   background: #ffffff;
// `;

// const LoadingContainer = styled.div`
//   text-align: center;
//   padding: 60px;
//   color: #64748b;
//   font-size: 1rem;
// `;

// const SearchBarContainer = styled.div`
//   position: relative;
//   margin-bottom: 20px;
//   max-width: 400px;

//   svg {
//     position: absolute;
//     left: 14px;
//     top: 50%;
//     transform: translateY(-50%);
//     color: #94a3b8;
//   }

//   input {
//     width: 100%;
//     padding: 10px 14px 10px 40px;
//     font-size: 0.9rem;
//     border: 1px solid #cbd5e1;
//     border-radius: 8px;
//     outline: none;
//     transition: all 0.2s ease;
//     background: #ffffff;

//     &:focus {
//       border-color: #4f46e5;
//       box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
//     }
//   }
// `;

// const StyledLink = styled.a`
//   color: #2563eb; /* A clean blue color */
//   text-decoration: none;
//   font-weight: 500;
//   margin-top: 16px;
//   margin-bottom: 16px;
//   display: inline-block;
//   text-decoration: underline;
// cursor: pointer;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const ManageSSLOrders = ({handleMenuClick}) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { api_domain, sslPackages } = useContext(Context);
//   const [searchTerm, setSearchTerm] = useState('');

//   // console.log(orders)

//   useEffect(() => {
//     fetch(`${api_domain}/get_all_ssl_orders_with_users.php`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           setOrders(data.orders);
//         } else {
//           setError(data.message || 'Failed to load SSL orders.');
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError('Server connection error while fetching SSL orders.');
//         setLoading(false);
//       });
//   }, [api_domain]);

//   const handleRenew = (order) => {
//     Swal.fire({
//       title: 'Renew SSL Order?',
//       text: `Are you sure you want to trigger a renewal for domain: ${order.domain}?`,
//       icon: 'question',
//       showCancelButton: true,
//       confirmButtonColor: '#4f46e5',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, Renew',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Implement your renewal API call or logic here
//         Swal.fire('Renewed!', `Renewal sequence initiated for ${order.domain}.`, 'success');
//       }
//     });
//   };

//   // Helper for frontend SSL product name mapping
//         const getSSLPlanName = (productId) => {
//           // Convert both to string just in case product_id is saved as an integer in the database
//           const foundPackage = sslPackages.find(pkg => String(pkg.id) === String(productId));
//           return foundPackage ? foundPackage.title : `SSL Plan #${productId}`;
//         };




//         const filteredOrders = orders.filter((order) => {
//   const query = searchTerm.toLowerCase();
//   const userName = (order.user_name || '').toLowerCase();
//   const userEmail = (order.user_email || '').toLowerCase();
//   return userName.includes(query) || userEmail.includes(query);
// });

//   if (loading) {
//     return <LoadingContainer>Loading SSL Orders and Client Data...</LoadingContainer>;
//   }

//   if (error) {
//     return <LoadingContainer style={{ color: 'red' }}>{error}</LoadingContainer>;
//   }

//   return (
//     <PageContainer>
//       <HeaderSection>
//         <div>
//     <StyledLink onClick={()=>handleMenuClick('profile')}>← Back to Dashboard</StyledLink>
//   </div>
//         <h1><FaShieldAlt style={{ color: '#4f46e5', marginRight: '8px' }} /> Manage SSL Orders</h1>
//         <p>Review all customer SSL certificates, inspect client contact details, and manage renewals.</p>
//       </HeaderSection>
// <SearchBarContainer>
//         <FaSearch />
//         <input 
//           type="text" 
//           placeholder="Search by user name or email..." 
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </SearchBarContainer>
//       <TableWrapper>
//         <ScrollableContainer>
//           <Table>
//             <thead>
//               <tr>
//                 {/* <th># ID</th> */}
//                 <th>Client Details</th>
//                 <th>Secured Domain</th>
//                 <th>Certificate Type</th>
//                 <th>Paid amount</th>
//                 <th>Reference</th>
//                 <th>Status</th>
                
//                 <th>Created Date</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredOrders.length > 0 ? (
//                 filteredOrders.map((order, index) => {
//                   const status = order.status || 'Active';
//                   const isActive = status.toLowerCase().includes('active');
//                   return (
//                     <tr key={order.id || index}>
//                       {/* <td>#{order.id}</td> */}
//                       <td>
//                         <UserInfoCell>
//                           <span className="name">
//                             <FaUser size={12} color="#4f46e5" /> {order.user_name || 'N/A'}
//                           </span>
//                           <span className="contact">
//                             <FaEnvelope size={11} /> {order.user_email || 'N/A'} &bull; <FaPhone size={11} /> {order.user_phone || 'N/A'}
//                           </span>
//                         </UserInfoCell>
//                       </td>
//                       <td style={{ fontWeight: '600' }}>{order.domain}</td>
//                       <td>{getSSLPlanName(order.product_id)}</td>
//                         <td>
//   {Number(order.amount).toLocaleString('en-US', { 
//     minimumFractionDigits: 2, 
//     maximumFractionDigits: 2 
//   })}
// </td>
//                         <td>{order.reference || 'N/A'}</td>
//                       <td>
//                         <StatusBadge className={isActive ? 'active' : 'pending'}>
//                           {isActive ? <FaCheckCircle /> : <FaClock />} {status}
//                         </StatusBadge>
//                       </td>
                    
//                       <td>{order.created_at || 'N/A'}</td>
//                       <td>
//                         <RenewButton onClick={() => handleRenew(order)}>
//                           <FaSyncAlt /> Renew
//                         </RenewButton>
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan="7">
//                     <EmptyState>No SSL orders found in the database.</EmptyState>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </Table>
//         </ScrollableContainer>
//       </TableWrapper>
//     </PageContainer>
//   );
// };

// export default ManageSSLOrders;






import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { FaShieldAlt, FaCheckCircle, FaClock, FaUser,FaSyncAlt, FaEnvelope, FaPhone, FaSearch, FaExclamationTriangle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import axios from 'axios';
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

const ActivateButton = styled.button`
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

  &:hover:not(:disabled) {
    background: #4338ca;
    transform: translateY(-1px);
  }

  &:disabled {
    background: #cbd5e1;
    color: #64748b;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
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
  color: #2563eb;
  text-decoration: underline;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 16px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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


const ManageSSLOrders = ({ handleMenuClick }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { api_domain, sslPackages } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchOrders = () => {
    fetch(`${api_domain}/get_all_ssl_orders_with_users.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOrders(data.orders);
        } else {
          setError(data.message || 'Failed to load SSL orders.');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Server connection error while fetching SSL orders.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, [api_domain]);

  const handleActivate = (order) => {
    Swal.fire({
      title: 'Activate SSL Order?',
      text: `Are you sure you want to mark SSL for ${order.domain} as Activated?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#4f46e5',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Activate',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`${api_domain}/update_ssl_status.php`, {
          order_id: order.id,
          reference: order.reference
        })
        .then((response) => {
          if (response.data.success) {
            Swal.fire('Activated!', response.data.message, 'success');
            fetchOrders(); // Refresh table contents
          } else {
            Swal.fire('Notice', response.data.message, 'info');
            fetchOrders(); // Refresh to catch synced states if already active
          }
        })
        .catch((err) => {
          console.error(err);
          Swal.fire('Error', 'Failed to communicate with update script.', 'error');
        });
      }
    });
  };



// const handleRenew = async (order) => {
//   try {
//     // ==========================================
//     // 1. GET ORDER ID
//     // ==========================================

//     const orderId = Number(
//       typeof order === "object" ? order?.id : order
//     );

//     console.log("SSL order received for renewal:", order);
//     console.log("SSL Order ID:", orderId);

//     // Validate order ID
//     if (!orderId || orderId <= 0) {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid Order",
//         text: "The SSL order ID is missing or invalid."
//       });

//        return;
//     }


//     // ==========================================
//     // 2. SHOW LOADING
//     // ==========================================

//     Swal.fire({
//       title: "Renewing SSL...",
//       text: "Please wait while the SSL certificate is being renewed.",
//       allowOutsideClick: false,
//       allowEscapeKey: false,
//       didOpen: () => {
//         Swal.showLoading();
//       }
//     });


//     // ==========================================
//     // 3. SEND ORDER ID TO BACKEND
//     // ==========================================

//     const requestData = {
//       order_id: orderId
//     };

//     console.log(
//       "Sending SSL renewal request:",
//       requestData
//     );


//     const response = await axios.post(
//       `${api_domain}/renew_ssl.php`,
//       requestData,
//       {
//         headers: {
//           "Content-Type": "application/json"
//         },
//         timeout: 30000
//       }
//     );


//     // ==========================================
//     // 4. LOG BACKEND RESPONSE
//     // ==========================================

//     console.log(
//       "SSL renewal backend response:",
//       response.data
//     );

//     console.log(
//       "HTTP status:",
//       response.status
//     );


//     // ==========================================
//     // 5. CLOSE LOADING
//     // ==========================================

//     Swal.close();


//     // ==========================================
//     // 6. CHECK SUCCESS
//     // ==========================================

//     if (response.data?.success === true) {

//       console.log(
//         "SSL renewal successful:",
//         response.data
//       );


//       // ========================================
//       // 7. SHOW SUCCESS MESSAGE
//       // ========================================

//       await Swal.fire({
//         icon: "success",
//         title: "SSL Renewed Successfully!",
//         html: `
//           <div style="text-align:center;">
//             <p>${response.data.message || "SSL certificate renewed successfully."}</p>

//             <p>
//               <strong>New Activation Date:</strong><br>
//               ${response.data.activation_date || "Updated"}
//             </p>
//           </div>
//         `,
//         confirmButtonText: "OK"
//       });


//       // ========================================
//       // 8. REFRESH SSL ORDERS TABLE
//       // ========================================

//       const clientId =
//         order?.user_id ||
//         (typeof client !== "undefined"
//           ? client?.id
//           : null);


//       console.log(
//         "Client ID for SSL order refresh:",
//         clientId
//       );


//       if (clientId) {

//         try {

//           const refreshResponse = await axios.get(
//             `${api_domain}/get_ssl_orders_by_user.php`,
//             {
//               params: {
//                 id: clientId
//               },
//               timeout: 30000
//             }
//           );


//           console.log(
//             "Refreshed SSL orders:",
//             refreshResponse.data
//           );


//           if (
//             refreshResponse.data?.success === true
//           ) {

//             setSslOrders(
//               refreshResponse.data.orders || []
//             );

//             console.log(
//               "SSL orders table refreshed successfully."
//             );

//           } else {

//             console.warn(
//               "SSL renewal succeeded, but the SSL orders table could not be refreshed.",
//               refreshResponse.data
//             );

//           }

//         } catch (refreshError) {

//           console.error(
//             "Error refreshing SSL orders:",
//             refreshError
//           );

//           // Don't show an error saying renewal failed.
//           // The renewal itself already succeeded.
//         }
//       }


//       return;
//     }


//     // ==========================================
//     // 9. BACKEND RETURNED success:false
//     // ==========================================

//     console.error(
//       "SSL renewal was rejected by backend:",
//       response.data
//     );


//     Swal.fire({
//       icon: "warning",
//       title: "Renewal Failed",
//       text:
//         response.data?.message ||
//         "The SSL certificate could not be renewed.",
//       confirmButtonText: "OK"
//     });


//   } catch (error) {

//     // ==========================================
//     // 10. CLOSE LOADING
//     // ==========================================

//     Swal.close();


//     // ==========================================
//     // 11. LOG ERROR
//     // ==========================================

//     console.error(
//       "SSL renewal request error:",
//       error
//     );

//     console.error(
//       "Server response:",
//       error?.response?.data
//     );

//     console.error(
//       "HTTP status:",
//       error?.response?.status
//     );


//     // ==========================================
//     // 12. SHOW ERROR
//     // ==========================================

//     Swal.fire({
//       icon: "error",
//       title: "SSL Renewal Error",
//       text:
//         error?.response?.data?.message ||
//         error?.response?.data?.error ||
//         "The SSL renewal request could not be completed.",
//       confirmButtonText: "OK"
//     });
//   }
// };

const handleRenew = async (order) => {
  try {
    const orderId = Number(
      typeof order === "object" ? order?.id : order
    );

    console.log("SSL order received for renewal:", order);
    console.log("SSL Order ID:", orderId);

    if (!orderId || orderId <= 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Order",
        text: "The SSL order ID is missing or invalid."
      });

      return;
    }

    Swal.fire({
      title: "Renewing SSL...",
      text: "Please wait while the SSL certificate is being renewed.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const requestData = {
      order_id: orderId
    };

    console.log("Sending SSL renewal request:", requestData);

    const response = await axios.post(
      `${api_domain}/renew_ssl.php`,
      requestData,
      {
        headers: {
          "Content-Type": "application/json"
        },
        timeout: 30000
      }
    );

    console.log(
      "SSL renewal backend response:",
      response.data
    );

    console.log(
      "HTTP status:",
      response.status
    );

    Swal.close();

    if (response.data?.success === true) {
      console.log(
        "SSL renewal successful:",
        response.data
      );

      await Swal.fire({
        icon: "success",
        title: "SSL Renewed Successfully!",
        html: `
          <div style="text-align:center;">
            <p>
              ${response.data.message || "SSL certificate renewed successfully."}
            </p>

            <p>
              <strong>New Activation Date:</strong><br>
              ${response.data.activation_date || "Updated"}
            </p>
          </div>
        `,
        confirmButtonText: "OK"
      });

      fetchOrders(); // Refresh table contents after successful renewal

      return;
    }

    console.error(
      "SSL renewal was rejected by backend:",
      response.data
    );

    Swal.fire({
      icon: "warning",
      title: "Renewal Failed",
      text:
        response.data?.message ||
        "The SSL certificate could not be renewed.",
      confirmButtonText: "OK"
    });

  } catch (error) {
    Swal.close();

    console.error(
      "SSL renewal request error:",
      error
    );

    console.error(
      "Server response:",
      error?.response?.data
    );

    console.error(
      "HTTP status:",
      error?.response?.status
    );

    Swal.fire({
      icon: "error",
      title: "SSL Renewal Error",
      text:
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "The SSL renewal request could not be completed.",
      confirmButtonText: "OK"
    });
  }
};

  const getSSLPlanName = (productId) => {
    const foundPackage = sslPackages.find(pkg => String(pkg.id) === String(productId));
    return foundPackage ? foundPackage.title : `SSL Plan #${productId}`;
  };

  const filteredOrders = orders.filter((order) => {
    const query = searchTerm.toLowerCase();
    const userName = (order.user_name || '').toLowerCase();
    const userEmail = (order.user_email || '').toLowerCase();
    return userName.includes(query) || userEmail.includes(query);
  });

  if (loading) {
    return <LoadingContainer>Loading SSL Orders and Client Data...</LoadingContainer>;
  }

  if (error) {
    return <LoadingContainer style={{ color: 'red' }}>{error}</LoadingContainer>;
  }

  return (
    <PageContainer>
      <HeaderSection>
        <div>
          <StyledLink onClick={() => handleMenuClick('profile')}>← Back to Dashboard</StyledLink>
        </div>
        <h1><FaShieldAlt style={{ color: '#4f46e5', marginRight: '8px' }} /> Manage SSL Orders</h1>
        <p>Review all customer SSL certificates, inspect client contact details, and handle activations.</p>
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
                <th>Client Details</th>
                <th>Secured Domain</th>
                <th>Certificate Type</th>
                <th>Paid Amount</th>
                <th>Reference</th>
                <th>Status</th>
                <th>Created Date</th>
                <th>Activation Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order, index) => {
                  const status = order.status || 'Pending_Activation';
                  const isActive = status.toLowerCase() === 'activated' || status.toLowerCase().includes('active');
                  const isRenewalRequested = order.renewal_requested == 1;
                  // Expiration check: 1 year (365 days) from activation_date
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
                      <td style={{ fontWeight: '600' }}>
                        {order.domain}
                        
                      </td>
                      <td>{getSSLPlanName(order.product_id)}
                        <br/>
                          {isExpired && (
                            <ExpiredBadge>
                              <FaExclamationTriangle size={10} /> Expired
                            </ExpiredBadge>
                          )}
                          <br/>
                          {isRenewalRequested && (
                            <RenewalBadge>
                              <FaSyncAlt size={10} /> Renewal Requested
                            </RenewalBadge>
                          )}
                        

                      </td>
                      <td>
                        {Number(order.amount).toLocaleString('en-US', { 
                          minimumFractionDigits: 2, 
                          maximumFractionDigits: 2 
                        })}
                      </td>
                      <td>{order.reference || 'N/A'}</td>
                      <td>
                        <StatusBadge className={isActive ? 'active' : 'pending'}>
                          {isActive ? <FaCheckCircle /> : <FaClock />} {status}
                        </StatusBadge>
                      </td>
                      <td>{order.created_at || 'N/A'}</td>
                      <td>{order.activation_date || 'Not Activated'}</td>
                      <td>
                        <ActivateButton 
                          onClick={() => handleActivate(order)} 
                          disabled={isActive}
                        >
                          <FaCheckCircle /> {isActive ? 'Activated' : 'Activate'}
                        </ActivateButton>
<br/>
                            {isRenewalRequested && (
                            <ActivateButton 
                              onClick={() => handleRenew(order)} 
                              // disabled={isActive}
                              style={{ marginTop: '8px', backgroundColor: '#0369a1' }}
                            >
                              <FaSyncAlt size={10} /> Renew
                            </ActivateButton>
                          )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="9">
                    <EmptyState>No SSL orders found in the database.</EmptyState>
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

export default ManageSSLOrders;