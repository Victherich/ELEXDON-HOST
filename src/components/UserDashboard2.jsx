


// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { FaBars, FaTimes, FaUser, FaUserCircle } from 'react-icons/fa';

// import Swal from 'sweetalert2';



// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import UserProfile2 from './UserProfile2';
// import UserInvoicesPage from './UserInvoicesPage';
// import UserActiveServices from './UserActiveServices';
// import UserTickets from './UserTickets';
// import UserActiveDomains from './UserActiveDomains';
// import ManageDomainOrders from './ManageDomainOrders';
// import ManageEmailOrders from './ManageEmailOrders';
// import ManageSSLOrders from './ManageSSLOrders';




// // Styled Components (Modernized)
// const DashboardContainer = styled.div`
//   display: flex;
//   min-height: 100vh;
//   background-color: #f8fafc;
//   overflow: hidden;
//   padding-top: 40px; /* Adjust for fixed header */
// `;

// const Sidebar = styled.div`
//   padding-top: 60px;
//   background: #ffffff;
//   color: #1e293b;
//   width: ${(props) => (props.isOpen ? '260px' : '0')};
//   overflow: hidden;
//   transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   height: 100%;
//   min-height: 100vh;
//   z-index: 7;
//   border-right: 1px solid #f1f5f9;
//   box-shadow: 4px 0 24px rgba(0, 0, 0, 0.03);

//   @media (min-width: 768px) {
//     width: 200px;
//     min-width: 200px;
//     position: static;
//     transition: none;
//   }
// `;

// const SidebarHeader = styled.div`
//   padding: 24px 20px;
//   font-size: 1rem;
//   text-align: left;
//   font-weight: 700;
//   color: #4f46e5;
//   letter-spacing: -0.025em;
//   border-bottom: 1px solid #f1f5f9;
//   margin-bottom: 12px;
// `;

// const SidebarMenu = styled.ul`
//   list-style: none;
//   padding: 0 12px;
//   margin: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
// `;

// const SidebarMenuItem = styled.li`
//   padding: 12px 16px;
//   cursor: pointer;
//   border-radius: 10px;
//   background: ${(props) => (props.active ? 'linear-gradient(135deg, #4f46e5, #9333ea)' : 'transparent')};
//   color: ${(props) => (props.active ? '#ffffff' : '#64748b')};
//   font-weight: ${(props) => (props.active ? '600' : '500')};
//   font-size: 0.9rem;
//   transition: all 0.2s ease-in-out;
//   box-shadow: ${(props) => (props.active ? '0 4px 12px rgba(79, 70, 229, 0.2)' : 'none')};

//   &:hover {
//     background: ${(props) => (props.active ? 'linear-gradient(135deg, #4f46e5, #9333ea)' : '#f8fafc')};
//     color: ${(props) => (props.active ? '#ffffff' : '#1e293b')};
//     transform: translateX(4px);
//   }
// `;

// const ContentArea = styled.div`
//   width: 100%;
//   flex-grow: 1;
//   margin-left: ${(props) => (props.isOpen ? '260px' : '0')};
//   transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   background-color: #f8fafc;

//   @media (min-width: 768px) {
//     margin-left: 0;
//   }
// `;

// const Hamburger = styled.div`
//   position: fixed;
//   top: 75px;
//   left: 20px;
//   background: linear-gradient(135deg, #4f46e5, #9333ea);
//   color: white;
//   width: 42px;
//   height: 42px;
//   border-radius: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   z-index: 9;
//   box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
//   transition: transform 0.2s ease;

//   &:hover {
//     transform: scale(1.05);
//   }

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

// const Overlay = styled.div`
//   display: ${(props) => (props.isOpen ? 'block' : 'none')};
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(15, 23, 42, 0.4);
//   backdrop-filter: blur(4px);
//   z-index: 6;
// `;




// // Main Component
// const UserDashboard2 = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState('profile');
//   const [user, setUser]=useState({});
//   const [error, setError]=useState('')
//   const navigate = useNavigate();
  
  
//   console.log(user)


//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }else{
//         navigate('/login')
//     }
//   }, []);

  
//   const handleLogout = () => {
//     Swal.fire({
//       title: "Are you sure you want to log out?",
//       text: "You will need to log in again to access your account.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, log me out",
//       cancelButtonText: "Cancel",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Perform the logout actions
//           localStorage.removeItem('user'); // Delete user data
//     navigate('/login'); // Navigate to login page
//         Swal.fire({
//           title: "Logged Out",
//           text: "You have been logged out successfully.",
//           icon: "success",
//           timer: 2000,
//           showConfirmButton: false,
//         });
  
      
//       }
//     });
//   };
  



//   const handleMenuClick = (menu) => {
//     window.scroll(0,0);
//     setActiveMenu(menu);
//     setMenuOpen(false); // Close menu on mobile when a menu item is clicked
//   };

//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   const closeMenuOnOutsideClick = () => setMenuOpen(false);

//   // Map menu options to content
//   const renderContent = () => {
//     switch (activeMenu) {
//       case 'profile':
//         return  <UserProfile2  handleMenuClick={handleMenuClick}/>;

//          case 'managedomainorders':
//         return  <ManageDomainOrders handleMenuClick={handleMenuClick} />;

      

//           case 'manageemailsorders':
//         return  <ManageEmailOrders handleMenuClick={handleMenuClick} />;


//           case 'managesslorders':
//         return  <ManageSSLOrders handleMenuClick={handleMenuClick}  />;

//         //   case 'tickets':
//         // return  <UserTickets/>;
       

//       default:
//         return <h1 style={{color:"green",textAlign:"center",width:"100%"}}>Welcome to your Dashboard</h1>;
//     }
//   };







//   return (
//     <DashboardContainer>
//       <Hamburger onClick={toggleMenu}>
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </Hamburger>
//       <Overlay isOpen={menuOpen} onClick={closeMenuOnOutsideClick} />
//       <Sidebar isOpen={menuOpen}>
//         <SidebarHeader>SSL / WEBMAIL / DOMAIN MANAGEMENT</SidebarHeader>
//         <SidebarMenu>
       
//           <SidebarMenuItem
//           style={{fontSize:"0.9rem"}}
//             active={activeMenu === 'profile'}
//             onClick={() => handleMenuClick('profile')}
//           >
//           <FaUserCircle/>  WELCOME, {user?.name?.toUpperCase().slice(0,3)}
//           </SidebarMenuItem>

//                     <SidebarMenuItem
//             onClick={handleLogout}
//           >
//             Logout
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </Sidebar>
//       <ContentArea isOpen={menuOpen}>{renderContent()}</ContentArea>
//     </DashboardContainer>
//   );
// };

// export default UserDashboard2;







import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaTimes, FaUserCircle, FaGlobe, FaEnvelope, FaShieldAlt, FaSignOutAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import UserProfile2 from './UserProfile2';
import ManageDomainOrders from './ManageDomainOrders';
import ManageEmailOrders from './ManageEmailOrders';
import ManageSSLOrders from './ManageSSLOrders';
import BlogPostsManager from './BlogPostsManager';

// -----------------------------------------------------
// Animations & Theme Styling
// -----------------------------------------------------
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// -----------------------------------------------------
// Styled Components
// -----------------------------------------------------
const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8fafc;
  overflow-x: hidden;
  padding-top: 40px;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Sidebar = styled.div`
  padding-top: 60px;
  background: #ffffff;
  color: #1e293b;
  width: ${(props) => (props.isOpen ? '260px' : '0')};
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  min-height: 100vh;
  z-index: 7;
  border-right: 1px solid #f1f5f9;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.03);

  @media (min-width: 768px) {
    width: 240px;
    // min-width: 240px;
    position: static;
    transition: none;
  }
`;

const SidebarHeader = styled.div`
  padding: 24px 20px;
  font-size: 0.85rem;
  text-align: left;
  font-weight: 700;
  color: #4f46e5;
  letter-spacing: -0.025em;
  border-bottom: 1px solid #f1f5f9;
  margin-bottom: 12px;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0 12px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-grow: 1;
  padding-bottom: 30px;
`;

const SidebarMenuItem = styled.li`
  padding: 12px 16px;
  cursor: pointer;
  border-radius: 10px;
  background: ${(props) => (props.active ? 'linear-gradient(135deg, #4f46e5, #9333ea)' : 'transparent')};
  color: ${(props) => (props.active ? '#ffffff' : '#64748b')};
  font-weight: ${(props) => (props.active ? '600' : '500')};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease-in-out;
  box-shadow: ${(props) => (props.active ? '0 4px 12px rgba(79, 70, 229, 0.2)' : 'none')};

  svg {
    font-size: 1.1rem;
    color: ${(props) => (props.active ? '#ffffff' : '#94A3B8')};
    transition: color 0.2s ease;
  }

  &:hover {
    background: ${(props) => (props.active ? 'linear-gradient(135deg, #4f46e5, #9333ea)' : '#f8fafc')};
    color: ${(props) => (props.active ? '#ffffff' : '#1e293b')};
    transform: translateX(2px);

    svg {
      color: ${(props) => (props.active ? '#ffffff' : '#4f46e5')};
    }
  }

  &.logout-item {
    // margin-top: auto;
    color: #EF4444;

    svg {
      color: #EF4444;
    }

    &:hover {
      background: #FEF2F2;
      color: #DC2626;

      svg {
        color: #DC2626;
      }
    }
  }
`;

const ContentArea = styled.div`
  width: 100%;
  flex-grow: 1;
  margin-left: ${(props) => (props.isOpen ? '260px' : '0')};
  transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #f8fafc;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

const Hamburger = styled.div`
  position: fixed;
  top: 75px;
  left: 20px;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  color: white;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(4px);
  z-index: 6;
  animation: ${fadeIn} 0.2s ease-out;
`;

// -----------------------------------------------------
// Main Component
// -----------------------------------------------------
const UserDashboard2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('profile');
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user2');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      text: "You will need to log in again to access your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4f46e5",
      cancelButtonColor: "#EF4444",
      confirmButtonText: "Yes, log me out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('user2');
        navigate('/login');
        Swal.fire({
          title: "Logged Out",
          text: "You have been logged out successfully.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleMenuClick = (menu) => {
    window.scroll(0, 0);
    setActiveMenu(menu);
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenuOnOutsideClick = () => setMenuOpen(false);

  // Map menu options to content
  const renderContent = () => {
    switch (activeMenu) {
      case 'profile':
        return <UserProfile2 handleMenuClick={handleMenuClick} />;
      case 'managedomainorders':
        return <ManageDomainOrders handleMenuClick={handleMenuClick} />;
      case 'manageemailsorders':
        return <ManageEmailOrders handleMenuClick={handleMenuClick} />;
      case 'managesslorders':
        return <ManageSSLOrders handleMenuClick={handleMenuClick} />;
         case 'manageblogs':
        return <BlogPostsManager handleMenuClick={handleMenuClick} />;
      default:
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <h1 style={{ color: "#4f46e5", textAlign: "center", width: "100%", fontSize: "1.5rem" }}>
              Welcome to your Dashboard
            </h1>
          </div>
        );
    }
  };

  const welcomeName = user?.name ? user.name.toUpperCase().slice(0, 6) : 'USER';

  return (
    <DashboardContainer>
      <Hamburger onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      
      <Overlay isOpen={menuOpen} onClick={closeMenuOnOutsideClick} />
      
      <Sidebar isOpen={menuOpen}>
        <SidebarHeader>SSL & WEBMAIL MANAGEMENT</SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem
            active={activeMenu === 'profile'}
            onClick={() => handleMenuClick('profile')}
          >
            <FaUserCircle /> WELCOME, {welcomeName}
          </SidebarMenuItem>

          {/* <SidebarMenuItem
            active={activeMenu === 'managedomainorders'}
            onClick={() => handleMenuClick('managedomainorders')}
          >
            <FaGlobe /> Domain Orders
          </SidebarMenuItem> */}

          {/* <SidebarMenuItem
            active={activeMenu === 'manageemailsorders'}
            onClick={() => handleMenuClick('manageemailsorders')}
          >
            <FaEnvelope /> Webmail Orders
          </SidebarMenuItem> */}

          {/* <SidebarMenuItem
            active={activeMenu === 'managesslorders'}
            onClick={() => handleMenuClick('managesslorders')}
          >
            <FaShieldAlt /> SSL Orders
          </SidebarMenuItem> */}

          <SidebarMenuItem
            className="logout-item"
            onClick={handleLogout}
          >
            <FaSignOutAlt /> Logout
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>

      <ContentArea isOpen={menuOpen}>
        {renderContent()}
      </ContentArea>
    </DashboardContainer>
  );
};

export default UserDashboard2;