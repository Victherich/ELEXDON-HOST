


// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { FaBars, FaTimes, FaUser, FaUserCircle } from 'react-icons/fa';

// import Swal from 'sweetalert2';



// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import UserProfile from './UserProfile';
// import UserInvoicesPage from './UserInvoicesPage';
// import UserActiveServices from './UserActiveServices';
// import UserTickets from './UserTickets';
// import UserActiveDomains from './UserActiveDomains';



// // Styled Components
// const DashboardContainer = styled.div`
//   display: flex;
//   min-height: 100vh;
//   overflow: hidden;
// `;

// const Sidebar = styled.div`
// padding-top:50px;
//   background:#F4F4F4;
//   color: white;
//   width: ${(props) => (props.isOpen ? '250px' : '0')};
//   overflow: hidden;
//   transition: width 0.3s ease-in-out;
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   height: 100%;
//   min-height:100vh;
//   z-index:7;
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

//   @media (min-width: 768px) {
//     width: 250px;
//     position: static;
//     transition: none;
//   }
// `;

// const SidebarHeader = styled.div`
//   padding: 20px;
//   font-size: 1.5rem;
//   text-align: center;
//   font-weight: bold;
//   color:#000050;

// `;

// const SidebarMenu = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// const SidebarMenuItem = styled.li`
//   padding: 15px 20px;
//   cursor: pointer;
//   background: ${(props) => (props.active ? 'gray;' : 'transparent')};
//   color: ${(props)=>(props.active ? 'white':"#000050")};


//   font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
//   transition: all 0.3s ease-in-out;

//   &:hover {
 
//     background:gray;
//   }
// `;

// const ContentArea = styled.div`
// width:100%;
//   flex-grow: 1;
//   margin-left: ${(props) => (props.isOpen ? '250px' : '0')};
//   transition: margin-left 0.3s ease-in-out;
//   // padding: 20px;

//   @media (min-width: 768px) {
//     // margin-left: 250px;
//   }
// `;

// const Hamburger = styled.div`
//   position: fixed;
//   top: 70px;
//   left: 20px;
//   background: #000050;
//   color: white;
//   padding: 10px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   z-index: 9;

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
//   background: rgba(0, 0, 0, 0.5);
//   z-index: 6;
// `;






// // Main Component
// const UserDashboard = () => {
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
//         return  <UserProfile  handleMenuClick={handleMenuClick}/>;

//          case 'myinvoices':
//         return  <UserInvoicesPage/>;

      

//           case 'useractiveservices':
//         return  <UserActiveServices/>;


//           case 'useractivedomains':
//         return  <UserActiveDomains/>;

//           case 'tickets':
//         return  <UserTickets/>;
       

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
//         <SidebarHeader>User Dashboard</SidebarHeader>
//         <SidebarMenu>
       
//           <SidebarMenuItem
//           style={{fontSize:"0.9rem"}}
//             active={activeMenu === 'profile'}
//             onClick={() => handleMenuClick('profile')}
//           >
//           <FaUserCircle/>  WELCOME, {user?.name?.toUpperCase().slice(0,3)}
//           </SidebarMenuItem>

//            <SidebarMenuItem
//           style={{fontSize:"0.9rem"}}
//             active={activeMenu === 'myinvoices'}
//             onClick={() => handleMenuClick('myinvoices')}
//           >
//           Invoices
//           </SidebarMenuItem>

//             <SidebarMenuItem
//           style={{fontSize:"0.9rem"}}
//             active={activeMenu === 'useractiveservices'}
//             onClick={() => handleMenuClick('useractiveservices')}
//           >
//           Active Services
//           </SidebarMenuItem>


//             <SidebarMenuItem
//           style={{fontSize:"0.9rem"}}
//             active={activeMenu === 'useractivedomains'}
//             onClick={() => handleMenuClick('useractivedomains')}
//           >
//           Active Domains
//           </SidebarMenuItem>


//            <SidebarMenuItem
//           style={{fontSize:"0.9rem"}}
//             active={activeMenu === 'tickets'}
//             onClick={() => handleMenuClick('tickets')}
//           >
//           Tickets
//           </SidebarMenuItem>

        

          
//           <SidebarMenuItem
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

// export default UserDashboard;








import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaTimes, FaUserCircle, FaFileInvoice, FaServer, FaGlobe, FaHeadset, FaSignOutAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import UserProfile from './UserProfile';
import UserInvoicesPage from './UserInvoicesPage';
import UserActiveServices from './UserActiveServices';
import UserTickets from './UserTickets';
import UserActiveDomains from './UserActiveDomains';

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
  overflow-x: hidden;
  background-color: #F8FAFC;
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-top: 50px;
`;

const Sidebar = styled.div`
  padding-top: 30px;
  background: #FFFFFF;
  border-right: 1px solid #E2E8F0;
  width: ${(props) => (props.isOpen ? '260px' : '0')};
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  min-height: 100vh;
  z-index: 7;
  box-shadow: 4px 0 15px rgba(0, 0, 0, 0.02);

  @media (min-width: 768px) {
    width: 260px;
    position: static;
    transition: none;
  }
`;

const SidebarHeader = styled.div`
  padding: 0 24px 24px 24px;
  font-size: 1rem;
  font-weight: 700;
  color: #0F172A;
  border-bottom: 1px solid #F1F5F9;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 20px 16px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SidebarMenuItem = styled.li`
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => (props.active ? 'linear-gradient(135deg, #4f46e5 0%, #9333ea 100%)' : 'transparent')};
  color: ${(props) => (props.active ? '#FFFFFF' : '#64748B')};
  font-size: 0.9rem;
  font-weight: ${(props) => (props.active ? '600' : '500')};
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: ${(props) => (props.active ? '0 4px 12px rgba(79, 70, 229, 0.25)' : 'none')};
  transition: all 0.2s ease-in-out;

  svg {
    font-size: 1.1rem;
    color: ${(props) => (props.active ? '#FFFFFF' : '#94A3B8')};
    transition: color 0.2s ease;
  }

  &:hover {
    background: ${(props) => (props.active ? 'linear-gradient(135deg, #4f46e5 0%, #9333ea 100%)' : '#F8FAFC')};
    color: ${(props) => (props.active ? '#FFFFFF' : '#0F172A')};

    svg {
      color: ${(props) => (props.active ? '#FFFFFF' : '#4f46e5')};
    }
  }

  &.logout-item {
    margin-top: auto;
    color: #EF4444;

    svg {
      color: #EF4444;
    }

    &:hover {
      background: #FEF2F2;
      color: #DC2626;
    }
  }
`;

const ContentArea = styled.div`
  width: 100%;
  flex-grow: 1;
  min-height: 100vh;
  background-color: #F8FAFC;
  overflow-y: auto;
  transition: margin-left 0.3s ease-in-out;
`;

const Hamburger = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9;
  font-size: 1.1rem;
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
  backdrop-filter: blur(2px);
  z-index: 6;
  animation: ${fadeIn} 0.2s ease-out;
`;

// -----------------------------------------------------
// Main Component
// -----------------------------------------------------
const UserDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('profile');
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
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
        localStorage.removeItem('user');
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
        return <UserProfile handleMenuClick={handleMenuClick} />;
      case 'myinvoices':
        return <UserInvoicesPage />;
      case 'useractiveservices':
        return <UserActiveServices />;
      case 'useractivedomains':
        return <UserActiveDomains />;
      case 'tickets':
        return <UserTickets />;
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
        <SidebarHeader>
          Client Hosting & Domain Portal
        </SidebarHeader>
        
        <SidebarMenu>
          <SidebarMenuItem
            active={activeMenu === 'profile'}
            onClick={() => handleMenuClick('profile')}
          >
            <FaUserCircle /> WELCOME, {welcomeName}
          </SidebarMenuItem>

          <SidebarMenuItem
            active={activeMenu === 'myinvoices'}
            onClick={() => handleMenuClick('myinvoices')}
          >
            <FaFileInvoice /> Invoices
          </SidebarMenuItem>

          <SidebarMenuItem
            active={activeMenu === 'useractiveservices'}
            onClick={() => handleMenuClick('useractiveservices')}
          >
            <FaServer /> Active Hosting
          </SidebarMenuItem>

          <SidebarMenuItem
            active={activeMenu === 'useractivedomains'}
            onClick={() => handleMenuClick('useractivedomains')}
          >
            <FaGlobe /> Active Domains
          </SidebarMenuItem>

          {/* <SidebarMenuItem
            active={activeMenu === 'tickets'}
            onClick={() => handleMenuClick('tickets')}
          >
            <FaHeadset /> Support Tickets
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

export default UserDashboard;