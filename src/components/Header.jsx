




// import React, { useRef, useState , useEffect} from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../Images/logo4.jpeg';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

// // Animation for the lighting effect
// const shine = keyframes`
//   0% {
//     left: -75%;
//   }
//   100% {
//     left: 100%;
//   }
// `;

// const HeaderWrapper = styled.header`
//   position: fixed;
//   width: 100%;
//   top: 0;
//   z-index: 9;
//   transition: 0.3s ease-in-out;
// `;

// const Container = styled.div`
//   max-width: 1400px;
//   padding: 10px;
//   margin: auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Logo = styled.a`
//   font-size: 24px;
//   font-weight: 800;
//   color: white;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   text-decoration: none;
//   cursor: pointer;

//   img {
//     width: 200px;
//     border-radius: 10px;
//   }
// `;

// const Nav = styled.nav`
//   backdrop-filter: blur(15px);
//   // background-color: rgba(0, 0, 80, 0.5);
//    background-color: rgba(79, 0, 110, 0.5);
//   padding-right: 20px;
//   border-radius: 10px;
//   border:1px solid lightgray;

//   @media (max-width: 884px) {
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
//     list-style: none;
//     gap: 30px;

//     @media (max-width: 884px) {
//       flex-direction: column;
//     }

//     li {
//       a {
//         position: relative;
//         display: inline-block;
//         padding: 5px 10px;
//         text-decoration: none;
//         color: #fff;
//         font-size: 14px;
//         font-weight: 500;
//         text-transform: uppercase;
//         overflow: hidden;
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
//           background: linear-gradient(
//             120deg,
//             transparent,
//             rgba(255, 255, 255, 0.5),
//             transparent
//           );
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
//   // background-color: rgba(0, 0, 50, 0.9);
//   background-color: rgba(101, 1, 141, 0.8);
//   border:1px solid lightgray;
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

//   @media (max-width: 884px) {
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

//   @media (max-width: 884px) {
//     display: block;
//   }
// `;

// const Header = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const navigate = useNavigate();
//   const menuRef = useRef();
//   const menuRef2 = useRef();
//    const menuRef3 = useRef();
//  const menuRef4 = useRef();

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//  const [dropdownOpen2, setDropdownOpen2] = useState(false);
//  const [dropdownOpen3, setDropdownOpen3] = useState(false);
//  const [dropdownOpen4, setDropdownOpen4] = useState(false);

//   const handleDropdownToggle = () => {
//     setDropdownOpen(!dropdownOpen);
  
//   };

//    const handleDropdownToggle2 = () => {
//     setDropdownOpen2(!dropdownOpen2);
    
//   };

//    const handleDropdownToggle3 = () => {
//     setDropdownOpen3(!dropdownOpen3);
    
//   };

//   const handleDropdownToggle4 = () => {
//     setDropdownOpen4(!dropdownOpen4);
    
//   };


//    // handling click away

// useEffect(()=>{
//    const handleClickOutside = (event)=>{
//       if(menuRef.current&&!menuRef.current.contains(event.target)){
//          setDropdownOpen(false)
//       }
//    }
//    document.addEventListener('mousedown',handleClickOutside)
//       return ()=>{
//          document.removeEventListener('mousedown',handleClickOutside)
//       }
// },[])



//    // handling click away

// useEffect(()=>{
//    const handleClickOutside = (event)=>{
//       if(menuRef2.current&&!menuRef2.current.contains(event.target)){
//          setDropdownOpen2(false)
//       }
//    }
//    document.addEventListener('mousedown',handleClickOutside)
//       return ()=>{
//          document.removeEventListener('mousedown',handleClickOutside)
//       }
// },[])





//    // handling click away

// useEffect(()=>{
//    const handleClickOutside = (event)=>{
//       if(menuRef3.current&&!menuRef3.current.contains(event.target)){
//          setDropdownOpen3(false)
//       }
//    }
//    document.addEventListener('mousedown',handleClickOutside)
//       return ()=>{
//          document.removeEventListener('mousedown',handleClickOutside)
//       }
// },[])



//    // handling click away
// useEffect(()=>{
//    const handleClickOutside = (event)=>{
//       if(menuRef4.current&&!menuRef4.current.contains(event.target)){
//          setDropdownOpen4(false)
//       }
//    }
//    document.addEventListener('mousedown',handleClickOutside)
//       return ()=>{
//          document.removeEventListener('mousedown',handleClickOutside)
//       }
// },[])

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Function to read user from localStorage and update state
//     const checkUser = () => {
//       const storedUser = localStorage.getItem('user');
//       if (storedUser) {
//         setUser(JSON.parse(storedUser));
//       } else {
//         setUser(null);
//       }
//     };

//     // Initial check on mount
//     checkUser();

//     // Set interval to check every 3 seconds
//     const id = setInterval(checkUser, 3000);

//     // Cleanup interval on unmount
//     return () => clearInterval(id);
//   }, []);




//   return (
//     <HeaderWrapper>
//       <Container>
//         <Logo onClick={() => navigate('/')}>
//           <img src={logo} alt="Elexdon Logo" />
//         </Logo>
//         <Toggle onClick={() => setNavOpen(!navOpen)}>
//           {navOpen ? <FaTimes style={{padding:"5px", background:"#000050", borderRadius:"10px"}}/> : <FaBars style={{padding:"5px", background:"#000050", borderRadius:"10px"}}/>}
//         </Toggle>
//         <Nav isOpen={navOpen}>
//           <ul>
//             <li onClick={()=>setNavOpen(false)}><NavLink to="/" end>Home</NavLink></li>
//             {/* <li onClick={()=>setNavOpen(false)}><NavLink to="/aboutus">About Us</NavLink></li> */}
            
//             <li onClick={handleDropdownToggle2}>
//                    <li  style={{ color: '#fff', cursor: 'pointer' , fontWeight:"500",marginTop:"5px"}} onMouseEnter={()=>{setDropdownOpen2(true); setDropdownOpen(false); setDropdownOpen3(false); setDropdownOpen4(false)}}>DOMAINS ▾</li>
//              {dropdownOpen2&& <Dropdown open={dropdownOpen2} ref={menuRef2}>
//                               {/* <li onClick={()=>setNavOpen(false)}><NavLink to="/domainsearch">Domain Search</NavLink></li> */}
//                  <li onClick={() => setNavOpen(false)}>
//   <HashLink smooth to="/#domainsearch">
//     Domain Search
//   </HashLink>
// </li>
//                  <li onClick={()=>setNavOpen(false)}><NavLink to="/domainspage">Domain Registration</NavLink></li>
//                  <li onClick={()=>setNavOpen(false)}><NavLink to="/domaintransfer">Domain Transfer</NavLink></li>
//                                  <li onClick={()=>setNavOpen(false)}><NavLink to="/whoislookup">WHOIS Look Up</NavLink></li>
             
//                </Dropdown>}   
//             </li>
          

//             <li onClick={handleDropdownToggle}>
//             <li style={{ color: '#fff', cursor: 'pointer' , fontWeight:"500",marginTop:"5px"}} onMouseEnter={()=>{setDropdownOpen(true); setDropdownOpen2(false);setDropdownOpen3(false);setDropdownOpen4(false) }}>WEBSITE HOSTING ▾</li>
//               {dropdownOpen&& <Dropdown open={dropdownOpen} ref={menuRef}>
//                  <li onClick={()=>setNavOpen(false)}><NavLink to="/sharedhosting">Shared Hosting</NavLink></li>
//                  <li onClick={()=>setNavOpen(false)}><NavLink to="/dedicatedhosting">Dedicated Hosting</NavLink></li>
//                  <li onClick={()=>setNavOpen(false)}><NavLink to="/wordpresshosting">WordPress Hosting</NavLink></li>
//                   <li onClick={()=>setNavOpen(false)}><NavLink to="/resellerhosting">Reseller Hosting</NavLink></li>
//                   <li onClick={()=>setNavOpen(false)}><NavLink to="/vps">VPS</NavLink></li>
//                </Dropdown>}
//              </li>

//                 <li onClick={()=>setNavOpen(false)}><NavLink to="/emailhosting" end>EMAIL HOSTING</NavLink></li>


  
          
//              <li onClick={handleDropdownToggle3} onMouseEnter={()=>{setDropdownOpen3(true);setDropdownOpen(false); setDropdownOpen2(false);setDropdownOpen4(false) }}>
//             <li style={{ color: '#fff', cursor: 'pointer' , fontWeight:"500",marginTop:"5px"}}>SECURITY ▾</li>
//               {dropdownOpen3&& <Dropdown open={dropdownOpen3} ref={menuRef3} style={{left:"50%"}}>
//                  <li onClick={()=>setNavOpen(false)}><NavLink to="/freessl">Free SSL</NavLink></li>
//                  <li onClick={()=>setNavOpen(false)}><NavLink to="/sslpage">Site Security Lock</NavLink></li>
//                </Dropdown>}
//              </li>
//             <li onClick={()=>setNavOpen(false)}><NavLink to="/support">Support</NavLink></li>

//             <li onClick={()=>setNavOpen(false)}><NavLink to="/webmail">Webmail</NavLink></li>
   




//        {user ? (
//         <li style={{ color: '#fff', cursor: 'default', fontWeight: '500', marginTop: '1px' }}>
//           <NavLink to='/dashboard'>
//             Welcome, {user.name.slice(0,3)}
//           </NavLink>
//         </li>
//       ):(

//  <li onClick={handleDropdownToggle4} onMouseEnter={()=>{setDropdownOpen4(true);setDropdownOpen(false); setDropdownOpen2(false); setDropdownOpen3(false);}}>
//               <li style={{ color: '#fff', cursor: 'pointer' , fontWeight:"500",marginTop:"5px"}}>ACCOUNT ▾</li>
//               {dropdownOpen4&& <Dropdown open={dropdownOpen4} ref={menuRef4} style={{left:"50%"}}>
//                  <li onClick={()=>setNavOpen(false)}><NavLink to="/signup">Register</NavLink></li>
//                  <li onClick={()=>setNavOpen(false)}><NavLink to="/login">Login</NavLink></li>
//                    <li onClick={()=>setNavOpen(false)}><NavLink to="/login">View Cart</NavLink></li>
//                  <li onClick={()=>setNavOpen(false)}><NavLink to="/support">Submit Ticket</NavLink></li>
//                </Dropdown>}
//       </li>)}

       
//           </ul>
//         </Nav>
//       </Container>
//     </HeaderWrapper>
//   );
// };

// export default Header;






// import React, { useRef, useState, useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaBars, FaTimes, FaGlobe, FaServer, FaShieldAlt, FaUserCircle, FaEnvelope, FaHeadset, FaSignInAlt, FaUserPlus, FaShoppingCart, FaTicketAlt } from 'react-icons/fa';
// import logo from '../Images/logo4.jpeg';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(6px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const HeaderWrapper = styled.header`
//   position: fixed;
//   width: 100%;
//   top: 0;
//   z-index: 999;
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   background: ${({ scrolled }) => (scrolled ? 'rgba(7, 13, 26, 0.9)' : 'transparent')};
//   backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(12px)' : 'none')};
//   border-bottom: ${({ scrolled }) => (scrolled ? '1px solid rgba(0, 180, 216, 0.15)' : '1px solid transparent')};
//   box-shadow: ${({ scrolled }) => (scrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none')};
// `;

// const Container = styled.div`
//   max-width: 1400px;
//   padding: 10px;
//   margin: auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Logo = styled.div`
//   cursor: pointer;
//   display: flex;
//   align-items: center;

//   img {
//     width: 150px;
//     border-radius: 6px;
//     object-fit: contain;
//   }
// `;

// const Nav = styled.nav`
//   @media (max-width: 960px) {
//     display: none;
//     ${({ isOpen }) => isOpen && `display: block;`}
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     background: rgba(7, 13, 26, 0.98);
//     backdrop-filter: blur(16px);
//     padding: 10px;
//     border-bottom: 1px solid rgba(0, 180, 216, 0.2);
//     max-height: 80vh;
//     overflow-y: auto;
//   }

//   ul {
//     display: flex;
//     list-style: none;
//     gap: 10px;
//     align-items: center;
//     margin: 0;
//     padding: 0;

//     @media (max-width: 960px) {
//       flex-direction: column;
//       align-items: stretch;
//       gap: 5px;
//     }

//     > li {
//       position: relative;
//     }
//   }
// `;

// const NavItemLink = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   padding: 6px 10px;
//   text-decoration: none;
//   color: #cbd5e1;
//   font-size: 13px;
//   font-weight: 500;
//   letter-spacing: 0.5px;
//   text-transform: uppercase;
//   border-radius: 6px;
//   transition: all 0.2s ease;

//   &.active, &:hover {
//     color: #00b4d8;
//     background: rgba(0, 180, 216, 0.08);
//   }
// `;

// const DropdownTrigger = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   padding: 6px 10px;
//   color: #cbd5e1;
//   cursor: pointer;
//   font-weight: 500;
//   font-size: 13px;
//   letter-spacing: 0.5px;
//   text-transform: uppercase;
//   border-radius: 6px;
//   transition: all 0.2s ease;
//   user-select: none;

//   &:hover {
//     color: #00b4d8;
//     background: rgba(0, 180, 216, 0.08);
//   }

//   span.arrow {
//     font-size: 10px;
//     transition: transform 0.2s;
//     transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
//   }
// `;

// const DropdownMenu = styled.div`
//   position: absolute;
//   top: calc(100% + 4px);
//   left: 0;
//   background: rgba(10, 18, 35, 0.95);
//   backdrop-filter: blur(14px);
//   border: 1px solid rgba(0, 180, 216, 0.2);
//   border-radius: 8px;
//   padding: 6px;
//   min-width: 220px;
//   display: ${({ open }) => (open ? 'flex' : 'none')};
//   flex-direction: column;
//   gap: 4px;
//   z-index: 999;
//   box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
//   animation: ${fadeIn} 0.2s ease forwards;

//   @media (max-width: 960px) {
//     position: static;
//     background: rgba(0, 0, 0, 0.2);
//     border: none;
//     box-shadow: none;
//     padding: 0 0 0 10px;
//     margin-top: 4px;
//   }
// `;

// const DropdownItem = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   padding: 8px 10px;
//   font-size: 12px;
//   font-weight: 500;
//   color: #cbd5e1;
//   text-decoration: none;
//   border-radius: 6px;
//   transition: all 0.2s ease;
//   text-transform: none;

//   svg {
//     color: #00b4d8;
//     font-size: 14px;
//   }

//   &:hover {
//     background: linear-gradient(90deg, rgba(0, 180, 216, 0.15), rgba(0, 74, 173, 0.15));
//     color: #ffffff;
//     padding-left: 12px;
//   }
// `;

// const DropdownHashItem = styled(HashLink)`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   padding: 8px 10px;
//   font-size: 12px;
//   font-weight: 500;
//   color: #cbd5e1;
//   text-decoration: none;
//   border-radius: 6px;
//   transition: all 0.2s ease;
//   text-transform: none;

//   svg {
//     color: #00b4d8;
//     font-size: 14px;
//   }

//   &:hover {
//     background: linear-gradient(90deg, rgba(0, 180, 216, 0.15), rgba(0, 74, 173, 0.15));
//     color: #ffffff;
//     padding-left: 12px;
//   }
// `;

// const Toggle = styled.div`
//   display: none;
//   font-size: 20px;
//   color: #fff;
//   cursor: pointer;

//   @media (max-width: 960px) {
//     display: block;
//   }
// `;

// const Header = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();

//   const menuRef1 = useRef();
//   const menuRef2 = useRef();
//   const menuRef3 = useRef();
//   const menuRef4 = useRef();

//   const [activeDropdown, setActiveDropdown] = useState(null);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 15);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Click outside to close dropdowns
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         (menuRef1.current && !menuRef1.current.contains(event.target)) &&
//         (menuRef2.current && !menuRef2.current.contains(event.target)) &&
//         (menuRef3.current && !menuRef3.current.contains(event.target)) &&
//         (menuRef4.current && !menuRef4.current.contains(event.target))
//       ) {
//         setActiveDropdown(null);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const checkUser = () => {
//       const storedUser = localStorage.getItem('user');
//       setUser(storedUser ? JSON.parse(storedUser) : null);
//     };
//     checkUser();
//     const id = setInterval(checkUser, 3000);
//     return () => clearInterval(id);
//   }, []);

//   const toggleMenu = (menuName) => {
//     setActiveDropdown(activeDropdown === menuName ? null : menuName);
//   };

//   return (
//     <HeaderWrapper scrolled={scrolled}>
//       <Container>
//         <Logo onClick={() => navigate('/')}>
//           <img src={logo} alt="Elexdon Logo" />
//         </Logo>

//         <Toggle onClick={() => setNavOpen(!navOpen)}>
//           {navOpen ? (
//             <FaTimes style={{ padding: '6px', background: '#004aad', borderRadius: '6px' }} />
//           ) : (
//             <FaBars style={{ padding: '6px', background: '#004aad', borderRadius: '6px' }} />
//           )}
//         </Toggle>

//         <Nav isOpen={navOpen}>
//           <ul>
//             <li>
//               <NavItemLink to="/" end onClick={() => setNavOpen(false)}>
//                 Home
//               </NavItemLink>
//             </li>

//             {/* DOMAINS */}
//             <li ref={menuRef1} onMouseEnter={() => setActiveDropdown('domains')} onMouseLeave={() => setActiveDropdown(null)}>
//               <DropdownTrigger open={activeDropdown === 'domains'} onClick={() => toggleMenu('domains')}>
//                 <FaGlobe /> Domains <span className="arrow">▾</span>
//               </DropdownTrigger>
//               <DropdownMenu open={activeDropdown === 'domains'}>
//                 <DropdownHashItem smooth to="/#domainsearch" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaGlobe /> Domain Search
//                 </DropdownHashItem>
//                 <DropdownItem to="/domainspage" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaGlobe /> Domain Registration
//                 </DropdownItem>
//                 <DropdownItem to="/domaintransfer" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaGlobe /> Domain Transfer
//                 </DropdownItem>
//                 <DropdownItem to="/whoislookup" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaGlobe /> WHOIS Look Up
//                 </DropdownItem>
//               </DropdownMenu>
//             </li>

//             {/* HOSTING */}
//             <li ref={menuRef2} onMouseEnter={() => setActiveDropdown('hosting')} onMouseLeave={() => setActiveDropdown(null)}>
//               <DropdownTrigger open={activeDropdown === 'hosting'} onClick={() => toggleMenu('hosting')}>
//                 <FaServer /> Hosting <span className="arrow">▾</span>
//               </DropdownTrigger>
//               <DropdownMenu open={activeDropdown === 'hosting'}>
//                 <DropdownItem to="/sharedhosting" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaServer /> Shared Hosting
//                 </DropdownItem>
//                 <DropdownItem to="/dedicatedhosting" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaServer /> Dedicated Hosting
//                 </DropdownItem>
//                 <DropdownItem to="/wordpresshosting" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaServer /> WordPress Hosting
//                 </DropdownItem>
//                 <DropdownItem to="/resellerhosting" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaServer /> Reseller Hosting
//                 </DropdownItem>
//                 <DropdownItem to="/vps" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaServer /> VPS Hosting
//                 </DropdownItem>
//               </DropdownMenu>
//             </li>

//             <li>
//               <NavItemLink to="/emailhosting" end onClick={() => setNavOpen(false)}>
//                 <FaEnvelope /> Email
//               </NavItemLink>
//             </li>

//             {/* SECURITY */}
//             <li ref={menuRef3} onMouseEnter={() => setActiveDropdown('security')} onMouseLeave={() => setActiveDropdown(null)}>
//               <DropdownTrigger open={activeDropdown === 'security'} onClick={() => toggleMenu('security')}>
//                 <FaShieldAlt /> Security <span className="arrow">▾</span>
//               </DropdownTrigger>
//               <DropdownMenu open={activeDropdown === 'security'}>
//                 <DropdownItem to="/freessl" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaShieldAlt /> Free SSL
//                 </DropdownItem>
//                 <DropdownItem to="/sslpage" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaShieldAlt /> Site Security Lock
//                 </DropdownItem>
//               </DropdownMenu>
//             </li>

//             <li>
//               <NavItemLink to="/support" onClick={() => setNavOpen(false)}>
//                 <FaHeadset /> Support
//               </NavItemLink>
//             </li>

//             <li>
//               <NavItemLink to="/webmail" onClick={() => setNavOpen(false)}>
//                 <FaEnvelope /> Webmail
//               </NavItemLink>
//             </li>

//             {/* ACCOUNT */}
//             {user ? (
//               <li>
//                 <NavItemLink to="/dashboard" onClick={() => setNavOpen(false)}>
//                   <FaUserCircle /> {user.name.slice(0, 3)}
//                 </NavItemLink>
//               </li>
//             ) : (
//               <li ref={menuRef4} onMouseEnter={() => setActiveDropdown('account')} onMouseLeave={() => setActiveDropdown(null)}>
//                 <DropdownTrigger open={activeDropdown === 'account'} onClick={() => toggleMenu('account')}>
//                   <FaUserCircle /> Account <span className="arrow">▾</span>
//                 </DropdownTrigger>
//                 <DropdownMenu open={activeDropdown === 'account'} style={{ left: 'auto', right: 0 }}>
//                   <DropdownItem to="/signup" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                     <FaUserPlus /> Register
//                   </DropdownItem>
//                   <DropdownItem to="/login" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                     <FaSignInAlt /> Login
//                   </DropdownItem>
//                   <DropdownItem to="/login" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                     <FaShoppingCart /> View Cart
//                   </DropdownItem>
//                   <DropdownItem to="/support" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                     <FaTicketAlt /> Submit Ticket
//                   </DropdownItem>
//                 </DropdownMenu>
//               </li>
//             )}
//           </ul>
//         </Nav>
//       </Container>
//     </HeaderWrapper>
//   );
// };

// export default Header;




// import React, { useRef, useState, useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaBars, FaTimes, FaGlobe, FaServer, FaShieldAlt, FaUserCircle, FaEnvelope, FaHeadset, FaSignInAlt, FaUserPlus, FaShoppingCart, FaTicketAlt } from 'react-icons/fa';
// import logo from '../Images/logo4.jpeg';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(6px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const HeaderWrapper = styled.header`
//   position: fixed;
//   width: 100%;
//   top: 0;
//   z-index: 999;
//   transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//   color: ${({ scrolled }) => (scrolled ? '#004aad' : 'white')};
//   background: ${({ scrolled }) => (scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent')};
//   backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(12px)' : 'none')};
//   border-bottom: ${({ scrolled }) => (scrolled ? '1px solid rgba(0, 74, 173, 0.15)' : '1px solid transparent')};
//   box-shadow: ${({ scrolled }) => (scrolled ? '0 10px 30px rgba(0, 74, 173, 0.08)' : 'none')};

//   @media(max-width:960px){
// color:#004aad;
// }

//   `;

// const Container = styled.div`
//   max-width: 1400px;
//   padding: 10px;
//   margin: auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Logo = styled.div`
//   cursor: pointer;
//   display: flex;
//   align-items: center;

//   img {
//     width: 150px;
//     border-radius: 6px;
//     object-fit: contain;
//   }
// `;

// const Nav = styled.nav`
//   @media (max-width: 960px) {
//     display: none;
//     ${({ isOpen }) => isOpen && `display: block;`}
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     background: rgba(255, 255, 255, 0.98);
//     backdrop-filter: blur(16px);
//     padding: 10px;
//     border-bottom: 1px solid rgba(0, 74, 173, 0.15);
//     max-height: 80vh;
//     overflow-y: auto;
//     box-shadow: 0 10px 30px rgba(0, 74, 173, 0.1);
//   }

//   ul {
//     display: flex;
//     list-style: none;
//     gap: 10px;
//     align-items: center;
//     margin: 0;
//     padding: 0;

//     @media (max-width: 960px) {
//       flex-direction: column;
//       align-items: stretch;
//       gap: 5px;
//     }

//     > li {
//       position: relative;
//     }
//   }
// `;

// const NavItemLink = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   padding: 6px 10px;
//   text-decoration: none;
//   color: ${({ scrolled }) => (scrolled ? '#004aad' : 'white')};
//   font-size: 13px;
//   font-weight: 600;
//   letter-spacing: 0.5px;
//   text-transform: uppercase;
//   border-radius: 6px;
//   transition: all 0.2s ease;

//   &.active, &:hover {
//     color: ${({ scrolled }) => (scrolled ? '#004aad' : '#38bdf8')};
//     background: ${({ scrolled }) => (scrolled ? 'rgba(0, 74, 173, 0.08)' : 'rgba(255, 255, 255, 0.15)')};
//   }

//   @media(max-width:960px){
//   color:#004aad;
//   }
// `;

// const DropdownTrigger = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   padding: 6px 10px;
//   color: ${({ scrolled }) => (scrolled ? '#004aad' : 'white')};
//   cursor: pointer;
//   font-weight: 600;
//   font-size: 13px;
//   letter-spacing: 0.5px;
//   text-transform: uppercase;
//   border-radius: 6px;
//   transition: all 0.2s ease;
//   user-select: none;

//     @media(max-width:960px){
//   color:#004aad;
//   }

//   &:hover {
//     color: ${({ scrolled }) => (scrolled ? '#004aad' : '#38bdf8')};
//     background: ${({ scrolled }) => (scrolled ? 'rgba(0, 74, 173, 0.08)' : 'rgba(255, 255, 255, 0.15)')};
//   }

//   span.arrow {
//     font-size: 10px;
//     transition: transform 0.2s;
//     transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
//   }
// `;

// const DropdownMenu = styled.div`
//   position: absolute;
//   top: calc(100% + 0px);
//   left: 0;
//   background: rgba(255, 255, 255, 0.98);
//   backdrop-filter: blur(14px);
//   border: 1px solid rgba(0, 74, 173, 0.15);
//   border-radius: 8px;
//   padding: 6px;
//   min-width: 220px;
//   display: ${({ open }) => (open ? 'flex' : 'none')};
//   flex-direction: column;
//   gap: 4px;
//   z-index: 999;
//   box-shadow: 0 12px 30px rgba(0, 74, 173, 0.12);
//   animation: ${fadeIn} 0.2s ease forwards;

//   @media (max-width: 960px) {
//     position: static;
//     background: rgba(0, 74, 173, 0.03);
//     border: none;
//     box-shadow: none;
//     padding: 0 0 0 10px;
//     margin-top: 4px;
//   }
// `;

// const DropdownItem = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   padding: 8px 10px;
//   font-size: 12px;
//   font-weight: 500;
//   color: #334155;
//   text-decoration: none;
//   border-radius: 6px;
//   transition: all 0.2s ease;
//   text-transform: none;

//   svg {
//     color: #004aad;
//     font-size: 14px;
//   }

//   &:hover {
//     background: linear-gradient(90deg, rgba(0, 180, 216, 0.12), rgba(0, 74, 173, 0.12));
//     color: #004aad;
//     padding-left: 12px;
//   }
// `;

// const DropdownHashItem = styled(HashLink)`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   padding: 8px 10px;
//   font-size: 12px;
//   font-weight: 500;
//   color: #334155;
//   text-decoration: none;
//   border-radius: 6px;
//   transition: all 0.2s ease;
//   text-transform: none;

//   svg {
//     color: #004aad;
//     font-size: 14px;
//   }

//   &:hover {
//     background: linear-gradient(90deg, rgba(0, 180, 216, 0.12), rgba(0, 74, 173, 0.12));
//     color: #004aad;
//     padding-left: 12px;
//   }
// `;

// const Toggle = styled.div`
//   display: none;
//   font-size: 20px;
//   color: #004aad;
//   cursor: pointer;

//   @media (max-width: 960px) {
//     display: block;
//   }
// `;

// const Header = () => {
//   const [navOpen, setNavOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();

//   const menuRef1 = useRef();
//   const menuRef2 = useRef();
//   const menuRef3 = useRef();
//   const menuRef4 = useRef();

//   const [activeDropdown, setActiveDropdown] = useState(null);

//   // Handle scroll background toggle
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 15);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Click outside to close dropdowns
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         (menuRef1.current && !menuRef1.current.contains(event.target)) &&
//         (menuRef2.current && !menuRef2.current.contains(event.target)) &&
//         (menuRef3.current && !menuRef3.current.contains(event.target)) &&
//         (menuRef4.current && !menuRef4.current.contains(event.target))
//       ) {
//         setActiveDropdown(null);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const [user, setUser] = useState(null);
//   useEffect(() => {
//     const checkUser = () => {
//       const storedUser = localStorage.getItem('user');
//       setUser(storedUser ? JSON.parse(storedUser) : null);
//     };
//     checkUser();
//     const id = setInterval(checkUser, 3000);
//     return () => clearInterval(id);
//   }, []);

//   const toggleMenu = (menuName) => {
//     setActiveDropdown(activeDropdown === menuName ? null : menuName);
//   };

//   return (
//     <HeaderWrapper scrolled={scrolled}>
//       <Container>
//         <Logo onClick={() => navigate('/')}>
//           <img src={logo} alt="Elexdon Logo" />
//         </Logo>

//         <Toggle onClick={() => setNavOpen(!navOpen)}>
//           {navOpen ? (
//             <FaTimes style={{ padding: '6px', background: '#004aad', color: '#fff', borderRadius: '6px' }} />
//           ) : (
//             <FaBars style={{ padding: '6px', background: '#004aad', color: '#fff', borderRadius: '6px' }} />
//           )}
//         </Toggle>

//         <Nav isOpen={navOpen}>
//           <ul>
//             <li>
//               <NavItemLink scrolled={scrolled} to="/" end onClick={() => setNavOpen(false)}>
//                 Home
//               </NavItemLink>
//             </li>

//             {/* DOMAINS */}
//             <li ref={menuRef1} onMouseEnter={() => setActiveDropdown('domains')} onMouseLeave={() => setActiveDropdown(null)}>
//               <DropdownTrigger scrolled={scrolled} open={activeDropdown === 'domains'} onClick={() => toggleMenu('domains')}>
//                 <FaGlobe /> Domains <span className="arrow">▾</span>
//               </DropdownTrigger>
//               <DropdownMenu open={activeDropdown === 'domains'}>
//                 <DropdownHashItem smooth to="/#domainsearch" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaGlobe /> Domain Search
//                 </DropdownHashItem>
//                 <DropdownItem to="/domainspage" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaGlobe /> Domain Registration
//                 </DropdownItem>
//                 <DropdownItem to="/domaintransfer" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaGlobe /> Domain Transfer
//                 </DropdownItem>
//                 <DropdownItem to="/whoislookup" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaGlobe /> WHOIS Look Up
//                 </DropdownItem>
//               </DropdownMenu>
//             </li>

//             {/* HOSTING */}
//             <li ref={menuRef2} onMouseEnter={() => setActiveDropdown('hosting')} onMouseLeave={() => setActiveDropdown(null)}>
//               <DropdownTrigger scrolled={scrolled} open={activeDropdown === 'hosting'} onClick={() => toggleMenu('hosting')}>
//                 <FaServer /> Hosting <span className="arrow">▾</span>
//               </DropdownTrigger>
//               <DropdownMenu open={activeDropdown === 'hosting'}>
//                 <DropdownItem to="/sharedhosting" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaServer /> Shared Hosting
//                 </DropdownItem>
//                 <DropdownItem to="/dedicatedhosting" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaServer /> Dedicated Hosting
//                 </DropdownItem>
//                 <DropdownItem to="/wordpresshosting" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaServer /> WordPress Hosting
//                 </DropdownItem>
//                 <DropdownItem to="/resellerhosting" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaServer /> Reseller Hosting
//                 </DropdownItem>
//                 <DropdownItem to="/vps" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaServer /> VPS Hosting
//                 </DropdownItem>
//               </DropdownMenu>
//             </li>

//             <li>
//               <NavItemLink scrolled={scrolled} to="/emailhosting" end onClick={() => setNavOpen(false)}>
//                 <FaEnvelope /> Email
//               </NavItemLink>
//             </li>

//             {/* SECURITY */}
//             <li ref={menuRef3} onMouseEnter={() => setActiveDropdown('security')} onMouseLeave={() => setActiveDropdown(null)}>
//               <DropdownTrigger scrolled={scrolled} open={activeDropdown === 'security'} onClick={() => toggleMenu('security')}>
//                 <FaShieldAlt /> Security <span className="arrow">▾</span>
//               </DropdownTrigger>
//               <DropdownMenu open={activeDropdown === 'security'}>
//                 <DropdownItem to="/freessl" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaShieldAlt /> Free SSL
//                 </DropdownItem>
//                 <DropdownItem to="/sslpage" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                   <FaShieldAlt /> Site Security Lock
//                 </DropdownItem>
//               </DropdownMenu>
//             </li>

//             <li>
//               <NavItemLink scrolled={scrolled} to="/support" onClick={() => setNavOpen(false)}>
//                 <FaHeadset /> Support
//               </NavItemLink>
//             </li>

//             <li>
//               <NavItemLink scrolled={scrolled} to="/webmail" onClick={() => setNavOpen(false)}>
//                 <FaEnvelope /> Webmail
//               </NavItemLink>
//             </li>

//             {/* ACCOUNT */}
//             {user ? (
//               <li>
//                 <NavItemLink scrolled={scrolled} to="/dashboard" onClick={() => setNavOpen(false)}>
//                   <FaUserCircle /> {user.name.slice(0, 3)}
//                 </NavItemLink>
//               </li>
//             ) : (
//               <li ref={menuRef4} onMouseEnter={() => setActiveDropdown('account')} onMouseLeave={() => setActiveDropdown(null)}>
//                 <DropdownTrigger scrolled={scrolled} open={activeDropdown === 'account'} onClick={() => toggleMenu('account')}>
//                   <FaUserCircle /> Account <span className="arrow">▾</span>
//                 </DropdownTrigger>
//                 <DropdownMenu open={activeDropdown === 'account'} style={{ left: 'auto', right: 0 }}>
//                   <DropdownItem to="/signup" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                     <FaUserPlus /> Register
//                   </DropdownItem>
//                   <DropdownItem to="/login" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                     <FaSignInAlt /> Login
//                   </DropdownItem>
//                   <DropdownItem to="/login" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                     <FaShoppingCart /> View Cart
//                   </DropdownItem>
//                   <DropdownItem to="/support" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
//                     <FaTicketAlt /> Submit Ticket
//                   </DropdownItem>
//                 </DropdownMenu>
//               </li>
//             )}
//           </ul>
//         </Nav>
//       </Container>
//     </HeaderWrapper>
//   );
// };

// export default Header;





import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBars, FaTimes, FaGlobe, FaServer, FaShieldAlt, FaUserCircle, FaEnvelope, FaHeadset, FaSignInAlt, FaUserPlus, FaShoppingCart, FaTicketAlt } from 'react-icons/fa';
import logo from '../Images/logo4.jpeg';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${({ scrolled }) => (scrolled ? '#173b5d' : 'white')};
  background: ${({ scrolled }) => (scrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent')};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(14px)' : 'none')};
  border-bottom: ${({ scrolled }) => (scrolled ? '1px solid #eae2f8' : '1px solid transparent')};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 10px 30px rgba(147, 51, 234, 0.05)' : 'none')};

  @media(max-width:960px){
    color: #173b5d;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  padding: 5px 20px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 140px;
    border-radius: 6px;
    object-fit: contain;
  }
`;

const Nav = styled.nav`
  @media (max-width: 960px) {
    display: none;
    ${({ isOpen }) => isOpen && `display: block;`}
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(16px);
    padding: 5px 20px;
    border-bottom: 1px solid #eae2f8;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 15px 30px rgba(79, 70, 229, 0.1);
  }

  ul {
    display: flex;
    list-style: none;
    gap: 6px;
    align-items: center;
    margin: 0;
    padding: 0;

    @media (max-width: 960px) {
      flex-direction: column;
      align-items: stretch;
      gap: 6px;
    }

    > li {
      position: relative;
    }
  }
`;

const NavItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 12px;
  text-decoration: none;
  color: ${({ scrolled }) => (scrolled ? '#475569' : 'rgba(255, 255, 255, 1)')};
  // font-size: 0.86rem;
  font-weight: 700;
  // letter-spacing: 0.5px;
  // text-transform: uppercase;
  border-radius: 8px;
  transition: all 0.2s ease;

  &.active, &:hover {
    // color: #4f46e5;
    background: ${({ scrolled }) => (scrolled ? 'rgba(79, 70, 229, 0.08)' : 'rgba(255, 255, 255, 0.15)')};
  }

  @media(max-width:960px){
    color: #475569;
    &:hover {
      background: rgba(79, 70, 229, 0.08);
      color: #4f46e5;
    }

    padding: 6px 12px;
  }
`;

const DropdownTrigger = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 2px 12px;
  color: ${({ scrolled }) => (scrolled ? '#475569' : 'rgba(255, 255, 255, 1)')};
  cursor: pointer;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
  // text-transform: uppercase;
  border-radius: 8px;
  transition: all 0.2s ease;
  user-select: none;

  @media(max-width:960px){
    color: #475569;
  }

  &:hover {
    // color: #4f46e5;
    background: ${({ scrolled }) => (scrolled ? 'rgba(79, 70, 229, 0.08)' : 'rgba(255, 255, 255, 0.15)')};
  }

  span.arrow {
    font-size: 14px;
    transition: transform 0.2s;
    transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 0px);
  left: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(14px);
  border: 1px solid #eae2f8;
  border-radius: 12px;
  padding: 8px;
  min-width: 220px;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  gap: 4px;
  z-index: 999;
  box-shadow: 0 12px 30px rgba(147, 51, 234, 0.08);
  animation: ${fadeIn} 0.2s ease forwards;

  @media (max-width: 960px) {
    position: static;
    background: rgba(79, 70, 229, 0.02);
    border: none;
    box-shadow: none;
    padding: 0 0 0 10px;
    margin-top: 4px;
  }
`;

const DropdownItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 9px 12px;
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-transform: none;

  svg {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 14px;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(147, 51, 234, 0.08));
    color: #4f46e5;
    padding-left: 14px;
  }
`;

const DropdownHashItem = styled(HashLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-transform: none;

  svg {
    background: linear-gradient(135deg, #4f46e5, #9333ea);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1rem;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(147, 51, 234, 0.08));
    color: #4f46e5;
    padding-left: 14px;
  }
`;

const Toggle = styled.div`
  display: none;
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 960px) {
    display: block;
  }
`;

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
const isDashboardRoute = location.pathname === '/dashboard' || 
location.pathname === '/dashboard2' || location.pathname === '/sslcheckout' ||
location.pathname ==='/emailcheckout'||location.pathname==='/login'||location.pathname==='/blogs'||
location.pathname.includes('/post')||location.pathname.includes('/domainregistercheckout');
// Combine your scroll check with the dashboard route check
const headerScrolled = scrolled || isDashboardRoute;

  const menuRef1 = useRef();
  const menuRef2 = useRef();
  const menuRef3 = useRef();
  const menuRef4 = useRef();

  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle scroll background toggle
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (menuRef1.current && !menuRef1.current.contains(event.target)) &&
        (menuRef2.current && !menuRef2.current.contains(event.target)) &&
        (menuRef3.current && !menuRef3.current.contains(event.target)) &&
        (menuRef4.current && !menuRef4.current.contains(event.target))
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const [user, setUser] = useState(null);
  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem('user');
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };
    checkUser();
    const id = setInterval(checkUser, 3000);
    return () => clearInterval(id);
  }, []);

   const [user2, setUser2] = useState(null);
  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem('user2');
      setUser2(storedUser ? JSON.parse(storedUser) : null);
    };
    checkUser();
    const id = setInterval(checkUser, 3000);
    return () => clearInterval(id);
  }, []);

  const toggleMenu = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <HeaderWrapper scrolled={headerScrolled}>
      <Container>
        <Logo onClick={() => navigate('/')}>
          <img src={logo} alt="Elexdon Logo" />
        </Logo>

        <Toggle onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? (
            <FaTimes style={{ padding: '8px', background: 'linear-gradient(135deg, #4f46e5, #9333ea)', color: '#fff', borderRadius: '8px' }} />
          ) : (
            <FaBars style={{ padding: '8px', background: 'linear-gradient(135deg, #4f46e5, #9333ea)', color: '#fff', borderRadius: '8px' }} />
          )}
        </Toggle>

        <Nav isOpen={navOpen}>
          <ul>
            <li>
              <DropdownTrigger scrolled={headerScrolled} end onClick={() => {setNavOpen(false);navigate('/')}}>
                Home
              </DropdownTrigger>
            </li>

            {/* DOMAINS */}
            <li ref={menuRef1} onMouseEnter={() => setActiveDropdown('domains')} onMouseLeave={() => setActiveDropdown(null)}>
              <DropdownTrigger scrolled={headerScrolled} open={activeDropdown === 'domains'} onClick={() => toggleMenu('domains')}>
                <FaGlobe /> Domains <span className="arrow">▾</span>
              </DropdownTrigger>
              <DropdownMenu open={activeDropdown === 'domains'}>
                <DropdownHashItem smooth to="/#domainsearch" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                  <FaGlobe /> Domain Search
                </DropdownHashItem>
                <DropdownItem to="/domainspage" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                  <FaGlobe /> Domain Registration
                </DropdownItem>
                {/* <DropdownItem to="/domaintransfer" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                  <FaGlobe /> Domain Transfer
                </DropdownItem> */}
                <DropdownItem to="/whoislookup" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                  <FaGlobe /> WHOIS Look Up
                </DropdownItem>
              </DropdownMenu>
            </li>

            {/* HOSTING */}
            <li ref={menuRef2} onMouseEnter={() => setActiveDropdown('hosting')} onMouseLeave={() => setActiveDropdown(null)}>
              <DropdownTrigger scrolled={headerScrolled} open={activeDropdown === 'hosting'} onClick={() => toggleMenu('hosting')}>
                <FaServer />Website Hosting <span className="arrow">▾</span>
              </DropdownTrigger>
              <DropdownMenu open={activeDropdown === 'hosting'}>
                <DropdownItem to="/sharedhosting" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                  <FaServer /> Shared Hosting
                </DropdownItem>
                {/* <DropdownItem to="/dedicatedhosting" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                  <FaServer /> Dedicated Hosting
                </DropdownItem> */}
                <DropdownItem to="/wordpresshosting" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                  <FaServer /> WordPress Hosting
                </DropdownItem>
                <DropdownItem to="/elexdonmultiplehost" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                  <FaServer /> Elexdon Multiple Host
                </DropdownItem>
                {/* <DropdownItem to="/resellerhosting" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                  <FaServer /> Reseller Hosting
                </DropdownItem> */}
                {/* <DropdownItem to="/vps" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                  <FaServer /> VPS Hosting
                </DropdownItem> */}
              </DropdownMenu>
            </li>

             <li>
              <DropdownTrigger scrolled={headerScrolled} onClick={() => {setNavOpen(false);navigate('/webmail')}}>
                <FaEnvelope /> Email Hosting
              </DropdownTrigger>
            </li>

            {/* <li>
              <NavItemLink scrolled={scrolled} to="/emailhosting" end onClick={() => setNavOpen(false)}>
                <FaEnvelope /> Email
              </NavItemLink>
            </li> */}

            {/* SECURITY */}
            <li ref={menuRef3} onMouseEnter={() => setActiveDropdown('security')} onMouseLeave={() => setActiveDropdown(null)}>
              <DropdownTrigger scrolled={headerScrolled} open={activeDropdown === 'security'} onClick={() => toggleMenu('security')}>
                <FaShieldAlt /> Services <span className="arrow">▾</span>
              </DropdownTrigger>
              <DropdownMenu open={activeDropdown === 'security'}>
                {/* <DropdownItem to="/freessl" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                  <FaShieldAlt /> Free SSL
                </DropdownItem> */}
                <DropdownItem to="/sslpage" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                  <FaShieldAlt /> Security
                </DropdownItem>
              </DropdownMenu>
            </li>

            <li>
              <DropdownTrigger scrolled={headerScrolled} onClick={() => {setNavOpen(false);navigate('/support')}}>
                <FaHeadset /> Support
              </DropdownTrigger>
            </li>

           

            {/* ACCOUNT */}
            {user||user2 ? (
              <li>
                <DropdownTrigger scrolled={headerScrolled} onClick={() => {setNavOpen(false);navigate('/login')}}>
                  <FaUserCircle /> 
                  My Account
                  {/* {user.name.slice(0, 3)} */}
                </DropdownTrigger>
              </li>
            ) : (
              <li ref={menuRef4} onMouseEnter={() => setActiveDropdown('account')} onMouseLeave={() => setActiveDropdown(null)}>
                <DropdownTrigger scrolled={headerScrolled} open={activeDropdown === 'account'} onClick={() => toggleMenu('account')}>
                  <FaUserCircle />Manage Account <span className="arrow">▾</span>
                </DropdownTrigger>
                <DropdownMenu open={activeDropdown === 'account'} style={{ left: 'auto', right: 0 }}>
                  <DropdownItem to="/signup" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                    <FaUserPlus /> Register
                  </DropdownItem>
                  <DropdownItem to="/login" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                    <FaSignInAlt /> Login
                  </DropdownItem>
                  {/* <DropdownItem to="/login" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                    <FaShoppingCart /> View Cart
                  </DropdownItem> */}
                  {/* <DropdownItem to="/support" onClick={() => { setNavOpen(false); setActiveDropdown(null); }}>
                    <FaTicketAlt /> Submit Ticket
                  </DropdownItem> */}
                </DropdownMenu>
              </li>
            )}
          </ul>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;