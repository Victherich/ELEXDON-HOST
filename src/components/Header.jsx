




import React, { useRef, useState , useEffect} from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../Images/logo4.jpeg';
import { NavLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// Animation for the lighting effect
const shine = keyframes`
  0% {
    left: -75%;
  }
  100% {
    left: 100%;
  }
`;

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: 0.3s ease-in-out;
`;

const Container = styled.div`
  max-width: 1400px;
  padding: 10px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;

  img {
    width: 200px;
    border-radius: 10px;
  }
`;

const Nav = styled.nav`
  backdrop-filter: blur(15px);
  // background-color: rgba(0, 0, 80, 0.5);
   background-color: rgba(79, 0, 110, 0.5);
  padding-right: 20px;
  border-radius: 10px;
  border:1px solid lightgray;

  @media (max-width: 884px) {
    display: none;
    ${({ isOpen }) => isOpen && `display: block;`}
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(13, 27, 42, 0.95);
    padding: 20px;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 30px;

    @media (max-width: 884px) {
      flex-direction: column;
    }

    li {
      a {
        position: relative;
        display: inline-block;
        padding: 5px 10px;
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        overflow: hidden;
        transition: 0.3s;

        &.active {
          color: #00d1ff;
        }

        &.active::before {
          content: '';
          position: absolute;
          top: 0;
          left: -75%;
          width: 200%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          animation: ${shine} 2s infinite linear;
          z-index: 1;
        }

        &:hover {
          color: #00d1ff;
        }
      }
    }
  }
`;


const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  // background-color: rgba(0, 0, 50, 0.9);
  background-color: rgba(101, 1, 141, 0.8);
  border:1px solid lightgray;
  border-radius: 8px;
  padding: 10px 0;
  min-width: 200px;
  display: ${({ open }) => (open ? 'block' : 'none')};
  z-index: 999;

  li {
    a {
      display: block;
      padding: 10px 20px;
      font-size: 13px;
      color: #fff;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }

  @media (max-width: 884px) {
    position: static;
    background: none;
    padding: 0;

    li a {
      padding: 8px 10px;
    }
  }
`;


const Toggle = styled.div`
  display: none;
  font-size: 24px;
  color: #fff;
  cursor: pointer;

  @media (max-width: 884px) {
    display: block;
  }
`;

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();
  const menuRef2 = useRef();
   const menuRef3 = useRef();
 const menuRef4 = useRef();

  const [dropdownOpen, setDropdownOpen] = useState(false);
 const [dropdownOpen2, setDropdownOpen2] = useState(false);
 const [dropdownOpen3, setDropdownOpen3] = useState(false);
 const [dropdownOpen4, setDropdownOpen4] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  
  };

   const handleDropdownToggle2 = () => {
    setDropdownOpen2(!dropdownOpen2);
    
  };

   const handleDropdownToggle3 = () => {
    setDropdownOpen3(!dropdownOpen3);
    
  };

  const handleDropdownToggle4 = () => {
    setDropdownOpen4(!dropdownOpen4);
    
  };


   // handling click away

useEffect(()=>{
   const handleClickOutside = (event)=>{
      if(menuRef.current&&!menuRef.current.contains(event.target)){
         setDropdownOpen(false)
      }
   }
   document.addEventListener('mousedown',handleClickOutside)
      return ()=>{
         document.removeEventListener('mousedown',handleClickOutside)
      }
},[])



   // handling click away

useEffect(()=>{
   const handleClickOutside = (event)=>{
      if(menuRef2.current&&!menuRef2.current.contains(event.target)){
         setDropdownOpen2(false)
      }
   }
   document.addEventListener('mousedown',handleClickOutside)
      return ()=>{
         document.removeEventListener('mousedown',handleClickOutside)
      }
},[])





   // handling click away

useEffect(()=>{
   const handleClickOutside = (event)=>{
      if(menuRef3.current&&!menuRef3.current.contains(event.target)){
         setDropdownOpen3(false)
      }
   }
   document.addEventListener('mousedown',handleClickOutside)
      return ()=>{
         document.removeEventListener('mousedown',handleClickOutside)
      }
},[])



   // handling click away
useEffect(()=>{
   const handleClickOutside = (event)=>{
      if(menuRef4.current&&!menuRef4.current.contains(event.target)){
         setDropdownOpen4(false)
      }
   }
   document.addEventListener('mousedown',handleClickOutside)
      return ()=>{
         document.removeEventListener('mousedown',handleClickOutside)
      }
},[])

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Function to read user from localStorage and update state
    const checkUser = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    // Initial check on mount
    checkUser();

    // Set interval to check every 3 seconds
    const id = setInterval(checkUser, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(id);
  }, []);




  return (
    <HeaderWrapper>
      <Container>
        <Logo onClick={() => navigate('/')}>
          <img src={logo} alt="Elexdon Logo" />
        </Logo>
        <Toggle onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <FaTimes style={{padding:"5px", background:"#000050", borderRadius:"10px"}}/> : <FaBars style={{padding:"5px", background:"#000050", borderRadius:"10px"}}/>}
        </Toggle>
        <Nav isOpen={navOpen}>
          <ul>
            <li onClick={()=>setNavOpen(false)}><NavLink to="/" end>Home</NavLink></li>
            {/* <li onClick={()=>setNavOpen(false)}><NavLink to="/aboutus">About Us</NavLink></li> */}
            
            <li onClick={handleDropdownToggle2}>
                   <li  style={{ color: '#fff', cursor: 'pointer' , fontWeight:"500",marginTop:"5px"}} onMouseEnter={()=>{setDropdownOpen2(true); setDropdownOpen(false); setDropdownOpen3(false); setDropdownOpen4(false)}}>DOMAINS ▾</li>
             {dropdownOpen2&& <Dropdown open={dropdownOpen2} ref={menuRef2}>
                              {/* <li onClick={()=>setNavOpen(false)}><NavLink to="/domainsearch">Domain Search</NavLink></li> */}
                 <li onClick={() => setNavOpen(false)}>
  <HashLink smooth to="/#domainsearch">
    Domain Search
  </HashLink>
</li>
                 <li onClick={()=>setNavOpen(false)}><NavLink to="/domainspage">Domain Registration</NavLink></li>
                 <li onClick={()=>setNavOpen(false)}><NavLink to="/domaintransfer">Domain Transfer</NavLink></li>
                                 <li onClick={()=>setNavOpen(false)}><NavLink to="/whoislookup">WHOIS Look Up</NavLink></li>
             
               </Dropdown>}   
            </li>
          

            <li onClick={handleDropdownToggle}>
            <li style={{ color: '#fff', cursor: 'pointer' , fontWeight:"500",marginTop:"5px"}} onMouseEnter={()=>{setDropdownOpen(true); setDropdownOpen2(false);setDropdownOpen3(false);setDropdownOpen4(false) }}>WEBSITE HOSTING ▾</li>
              {dropdownOpen&& <Dropdown open={dropdownOpen} ref={menuRef}>
                 <li onClick={()=>setNavOpen(false)}><NavLink to="/sharedhosting">Shared Hosting</NavLink></li>
                 <li onClick={()=>setNavOpen(false)}><NavLink to="/dedicatedhosting">Dedicated Hosting</NavLink></li>
                 <li onClick={()=>setNavOpen(false)}><NavLink to="/wordpresshosting">WordPress Hosting</NavLink></li>
                  <li onClick={()=>setNavOpen(false)}><NavLink to="/resellerhosting">Reseller Hosting</NavLink></li>
                  <li onClick={()=>setNavOpen(false)}><NavLink to="/vps">VPS</NavLink></li>
               </Dropdown>}
             </li>

                <li onClick={()=>setNavOpen(false)}><NavLink to="/emailhosting" end>EMAIL HOSTING</NavLink></li>


              {/* <li onClick={handleDropdownToggle5}>
            <li style={{ color: '#fff', cursor: 'pointer' , fontWeight:"500",marginTop:"5px"}} onMouseEnter={()=>{setDropdownOpen5(true); setDropdownOpen2(false);setDropdownOpen3(false);setDropdownOpen4(false);setDropdownOpen(false) }}>EMAIL HOSTING ▾</li>
              {dropdownOpen&& <Dropdown open={dropdownOpen5} ref={menuRef5}>
                 <li onClick={()=>setNavOpen(false)}><NavLink to="/sharedhosting">Email Plus Core</NavLink></li>
                 <li onClick={()=>setNavOpen(false)}><NavLink to="/dedicatedhosting">Dedicated Hosting</NavLink></li>
                 <li onClick={()=>setNavOpen(false)}><NavLink to="/wordpresshosting">WordPress Hosting</NavLink></li>
                  <li onClick={()=>setNavOpen(false)}><NavLink to="/resellerhosting">Reseller Hosting</NavLink></li>
                  <li onClick={()=>setNavOpen(false)}><NavLink to="/vps">VPS</NavLink></li>
               </Dropdown>}
             </li> */}
            
          
             <li onClick={handleDropdownToggle3} onMouseEnter={()=>{setDropdownOpen3(true);setDropdownOpen(false); setDropdownOpen2(false);setDropdownOpen4(false) }}>
            <li style={{ color: '#fff', cursor: 'pointer' , fontWeight:"500",marginTop:"5px"}}>SECURITY ▾</li>
              {dropdownOpen3&& <Dropdown open={dropdownOpen3} ref={menuRef3} style={{left:"50%"}}>
                 <li onClick={()=>setNavOpen(false)}><NavLink to="/freessl">Free SSL</NavLink></li>
                 <li onClick={()=>setNavOpen(false)}><NavLink to="/sslpage">Site Security Lock</NavLink></li>
               </Dropdown>}
             </li>
            <li onClick={()=>setNavOpen(false)}><NavLink to="/support">Support</NavLink></li>
               {/* {user ? (
        <li style={{ color: '#fff', cursor: 'default', fontWeight: '500', marginTop: '1px' }}>
          <NavLink to='/dashboard'>
            Welcome, {user.name.slice(0,3)}
          </NavLink>
        </li>
      ) : (
        <li onClick={() => setNavOpen(false)}>
          <NavLink to="/login">Login</NavLink>
        </li>
      )} */}




       {user ? (
        <li style={{ color: '#fff', cursor: 'default', fontWeight: '500', marginTop: '1px' }}>
          <NavLink to='/dashboard'>
            Welcome, {user.name.slice(0,3)}
          </NavLink>
        </li>
      ):(

 <li onClick={handleDropdownToggle4} onMouseEnter={()=>{setDropdownOpen4(true);setDropdownOpen(false); setDropdownOpen2(false); setDropdownOpen3(false);}}>
              <li style={{ color: '#fff', cursor: 'pointer' , fontWeight:"500",marginTop:"5px"}}>ACCOUNT ▾</li>
              {dropdownOpen4&& <Dropdown open={dropdownOpen4} ref={menuRef4} style={{left:"50%"}}>
                 <li onClick={()=>setNavOpen(false)}><NavLink to="/signup">Register</NavLink></li>
                 <li onClick={()=>setNavOpen(false)}><NavLink to="/login">Login</NavLink></li>
                   <li onClick={()=>setNavOpen(false)}><NavLink to="/login">View Cart</NavLink></li>
                 <li onClick={()=>setNavOpen(false)}><NavLink to="/support">Submit Ticket</NavLink></li>
               </Dropdown>}
      </li>)}

            {/* <li onClick={()=>setNavOpen(false)}><NavLink to="/blogs">Blogs</NavLink></li> */}
            {/* <li onClick={()=>setNavOpen(false)}><NavLink to="/contactus">Contact</NavLink></li> */}
            {/* <li><NavLink to="/login">Login</NavLink></li> */}
          </ul>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;



// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../Images/logo4.jpeg';
// import { NavLink, useNavigate } from 'react-router-dom';

// const shine = keyframes`
//   0% { left: -75%; }
//   100% { left: 100%; }
// `;

// // // Animation for the lighting effect
// // const shine = keyframes`
// //   0% {
// //     left: -75%;
// //   }
// //   100% {
// //     left: 100%;
// //   }
// // `;

// const HeaderWrapper = styled.header`
//   position: fixed;
//   width: 100%;
//   top: 0;
//   z-index: 1000;
//   transition: 0.3s ease-in-out;
// `;

// const Container = styled.div`
//   max-width: 1400px;
//   padding: 10px 20px;
//   margin: auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Logo = styled.a`
//   img {
//     width: 180px;
//     border-radius: 10px;
//   }
// `;

// const Nav = styled.nav`
//   backdrop-filter: blur(15px);
//   background-color: rgba(0, 0, 80, 0.5);
//   padding-right: 20px;
//   border-radius: 10px;

//   @media (max-width: 768px) {
//     display: none;
//     ${({ isOpen }) => isOpen && `display: block;`}
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     background: rgba(13, 27, 42, 0.95);
//     padding: 20px;
//   }

//   ul {
//     display: flex;
//     gap: 30px;
//     list-style: none;

//     @media (max-width: 768px) {
//       flex-direction: column;
//     }

//     li {
//       position: relative;

//       a {
//         display: inline-block;
//         padding: 5px 10px;
//         text-decoration: none;
//         color: #fff;
//         font-size: 14px;
//         font-weight: 500;
//         text-transform: uppercase;
//         position: relative;
//         transition: 0.3s;

//         &.active {
//           color: #00d1ff;
//         }

//         &.active::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -75%;
//           width: 200%;
//           height: 100%;
//           background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
//           animation: ${shine} 2s infinite linear;
//           z-index: 1;
//         }

//         &:hover {
//           color: #00d1ff;
//         }
//       }
//     }
//   }
// `;

// const Dropdown = styled.ul`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background-color: rgba(0, 0, 50, 0.9);
//   border-radius: 8px;
//   padding: 10px 0;
//   min-width: 200px;
//   display: ${({ open }) => (open ? 'block' : 'none')};
//   z-index: 999;

//   li {
//     a {
//       display: block;
//       padding: 10px 20px;
//       font-size: 13px;
//       color: #fff;

//       &:hover {
//         background-color: rgba(255, 255, 255, 0.1);
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     position: static;
//     background: none;
//     padding: 0;

//     li a {
//       padding: 8px 10px;
//     }
//   }
// `;

// const Toggle = styled.div`
//   display: none;
//   font-size: 24px;
//   color: #fff;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const Header = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleDropdownToggle = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <HeaderWrapper>
//       <Container>
//         <Logo onClick={() => navigate('/')}>
//           <img src={logo} alt="Elexdon Logo" />
//         </Logo>
//         <Toggle onClick={() => setNavOpen(!navOpen)}>
//           {navOpen ? <FaTimes /> : <FaBars />}
//         </Toggle>
//         <Nav isOpen={navOpen}>
//           <ul>
//             <li><NavLink to="/" end>Home</NavLink></li>
//             <li><NavLink to="/aboutus">About Us</NavLink></li>
//             <li><NavLink to="/domainspage">Domains</NavLink></li>

//             <li onClick={handleDropdownToggle}>
//               <span style={{ color: '#fff', cursor: 'pointer' }}>Hosting ▾</span>
//               <Dropdown open={dropdownOpen}>
//                 <li><NavLink to="/webhostingpage">Shared Hosting</NavLink></li>
//                 <li><NavLink to="/dedicatedhostingpage">Dedicated Hosting</NavLink></li>
//                 <li><NavLink to="/wordpresshosting">WordPress Hosting</NavLink></li>
//               </Dropdown>
//             </li>

//             <li><NavLink to="/vps">VPS</NavLink></li>
//             <li><NavLink to="/blogs">Blogs</NavLink></li>
//             <li><NavLink to="/contactus">Contact</NavLink></li>
//             <li><NavLink to="/login">Login</NavLink></li>
//           </ul>
//         </Nav>
//       </Container>
//     </HeaderWrapper>
//   );
// };

// export default Header;


