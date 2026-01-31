


import React, { useState, useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import 'animate.css';
import Swal from 'sweetalert2';
import domainsearchimg from '../Images/domainsearchimg.jpeg';
import { Navigate, useNavigate } from 'react-router-dom';
import { Context } from './Context';

const useAnimateOnScroll = (animationClass) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: isVisible ? `animate__animated ${animationClass}` : '',
  };
};

const DomainWrap = styled.div`
  width: 100%;
  padding: 20px 0px;
  background-image: url(${domainsearchimg});
  background-size: cover;
  background-position: bottom;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #2B32B2, #3b82f6, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 12px 20px;
  border-radius: 30px;
  border: none;
  width: 600px;
  font-size: 16px;
  outline: #2B32B2;
  border: 4px solid rgba(0,0,255,0.4);
  background: #eee;
  color: #333;

  @media(max-width:768px){
    width:300px;
  }
`;

const Button = styled.button`
  background: linear-gradient(90deg, #facc15, #fcd34d);
  color: #000;
  padding: 12px 25px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #facc15, #fde68a);
    transform: scale(1.05);
  }
`;

const Result = styled.div`
  margin-top: 30px;
  // font-size: 18px;
  background: ${({ available }) =>
    available ? 'rgba(34,197,94,0.5)' : 'rgba(239,68,68,0.5)'};
  color: ${({ available }) => (available ? 'white' : 'white')};
  padding: 20px;
  border-radius: 10px;
  font-weight: bold;
  border: 1px solid ${({ available }) => (available ? '#22c55e' : '#ef4444')};
  strong{
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
    font-size:1.2rem;
  }
`;

const DomainSearch = () => {
  const [domain, setDomain] = useState('');
  const [tld, setTld] = useState(null);
  const [domaintype, setDomaintype] = useState('register');
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const {domainPricings}=useContext(Context);

  const titleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const formAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
  const resultAnim = useAnimateOnScroll('animate__fadeIn animate__slower');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const fullDomain = `${domain}${tld}`;
  //   if (!domain) {
  //     Swal.fire({ icon: "warning", text: "Please enter a domain." });
  //     return;
  //   }

  //   if(!tld){
  //        Swal.fire({ icon: "warning", text: "Please select a tld" });
  //     return;
  //   }

  //   Swal.fire({
  //     title: "Checking domain...",
  //     text: "Please wait while we check availability.",
  //     allowOutsideClick: false,
  //     didOpen: () => {
  //       Swal.showLoading();
  //     },
  //   });

  //   try {
  //     const res = await fetch("https://www.elexdonhost.com/api_elexdonhost/check_domain.php", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ domain: fullDomain, type: domaintype }),
  //     });

  //     const data = await res.json();

  //     if (domaintype === "register") {
  //       if (data.available) {
  //         setResult({ available: true, name: fullDomain });
  //         Swal.fire({
  //           icon: "success",
  //           title: "Domain Available",
  //           text: "Great! The domain is available for registration.",
  //         });
  //       } else {
  //         setResult({ available: false, name: fullDomain });
  //         Swal.fire({
  //           icon: "error",
  //           title: "Domain Unavailable",
  //           text: "Sorry, that domain is not available.",
  //         });
  //       }
  //     } else {
  //       if (data.available) {
  //         setResult({ available: false, name: fullDomain });
  //         Swal.fire({
  //           icon: "error",
  //           title: "Domain Not Registered",
  //           text: "This domain cannot be used for transfer or own domain.",
  //         });
  //       } else {
  //         setResult({ available: true, name: fullDomain });
  //         Swal.fire({
  //           icon: "success",
  //           title: "Domain Registered",
  //           text: "The domain is registered and can be used.",
  //         });
  //       }
  //     }
  //   } catch (err) {
  //     console.error("Domain check error:", err);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error",
  //       text: "There was an error checking the domain. Please try again.",
  //     });
  //   }
  // };


const handleSubmit = async (e) => {
  e.preventDefault();
  const fullDomain = `${domain}${tld}`;
  if (!domain || !tld) {
    Swal.fire({ icon: "warning", text: "Please enter a domain and select a TLD." });
    return;
  }

  Swal.fire({
    title: "Checking domain...",
    text: "Please wait while we check availability.",
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading(),
  });

  try {
    const res = await fetch("https://www.elexdonhost.com/api_elexdonhost/check_domain.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ domain: fullDomain, type: "register" }),
    });

    const data = await res.json();

    if (data.available) {
      setResult({ available: true, name: fullDomain });
      Swal.fire({ icon: "success", title: "Domain Available", text: "Great! The domain is available for registration." });
    } else {
      setResult({ available: false, name: fullDomain });
      Swal.fire({ icon: "error", title: "Domain Unavailable", text: "Sorry, that domain is not available." });
    }
  } catch (err) {
    console.error("Domain check error:", err);
    Swal.fire({ icon: "error", title: "Error", text: "There was an error checking the domain. Please try again." });
  }
};











// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const fullDomain = `${domain}${tld}`;
//   if (!domain) {
//     Swal.fire({ icon: "warning", text: "Please enter a domain." });
//     return;
//   }
//   if (!tld) {
//     Swal.fire({ icon: "warning", text: "Please select a tld" });
//     return;
//   }

//   Swal.fire({
//     title: "Checking domain...",
//     text: "Please wait while we check availability.",
//     allowOutsideClick: false,
//     didOpen: () => {
//       Swal.showLoading();
//     },
//   });

//   try {
//     // WhoisXML API endpoint
//     const apiKey = "at_iTvMxQuCvZe92Qrpce6r7e8g5rZjs"; // 🔑 replace with your key
//     const res = await fetch(
//       `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=${apiKey}&domainName=${fullDomain}`
//     );

//     const data = await res.json();
//     console.log("WhoisAPI Response:", data);

//     const availability = data?.DomainInfo?.domainAvailability;

//     if (domaintype === "register") {
//       if (availability === "AVAILABLE") {
//         setResult({ available: true, name: fullDomain });
//         Swal.fire({
//           icon: "success",
//           title: "Domain Available",
//           text: "Great! The domain is available for registration.",
//         });
//       } else {
//         setResult({ available: false, name: fullDomain });
//         Swal.fire({
//           icon: "error",
//           title: "Domain Unavailable",
//           text: "Sorry, that domain is not available.",
//         });
//       }
//     } else {
//       if (availability === "AVAILABLE") {
//         setResult({ available: false, name: fullDomain });
//         Swal.fire({
//           icon: "error",
//           title: "Domain Not Registered",
//           text: "This domain cannot be used for transfer or own domain.",
//         });
//       } else {
//         setResult({ available: true, name: fullDomain });
//         Swal.fire({
//           icon: "success",
//           title: "Domain Registered",
//           text: "The domain is registered and can be used.",
//         });
//       }
//     }
//   } catch (err) {
//     console.error("Domain check error:", err);
//     Swal.fire({
//       icon: "error",
//       title: "Error",
//       text: "There was an error checking the domain. Please try again.",
//     });
//   }
// };






  return (
    <DomainWrap id="domainsearch">
      <Container>
        <Title ref={titleAnim.ref} className={titleAnim.className}>
          Search for Your Dream Domain
        </Title>

        <Form ref={formAnim.ref} className={formAnim.className} onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Enter domain (without TLD) (e.g. elexdon)"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            required
          />

          <select
          required
            style={{
              padding: '12px 20px',
              borderRadius: '30px',
              border: '4px solid rgba(0,0,255,0.4)',
              background: '#eee',
              color: '#333',
              fontSize: '16px'
            }}
            value={tld}
            onChange={(e) => setTld(e.target.value)}
           
          >
           <option>-- Select TLD --</option>

           {domainPricings.map((d)=>(
            <option key={d.domain} value={d.domain}>{d.domain}</option>
           ))}
    {/* <option value=".com">.com</option>
    <option value=".net">.net</option>
    <option value=".org">.org</option>

    <option value=".info">.info</option>
    <option value=".biz">.biz</option>
      <option value=".com.ng">.com.ng</option>
    <option value=".us">.us</option>
      <option value=".ng">.ng</option>
        <option value=".edu.ng">.edu.ng</option>
    <option value=".eu">.eu</option>
    <option value=".sch.ng">.sch.ng</option>
<option value=".uk">.uk</option>
    <option value=".club">.club</option> */}
          </select>

          {/* <select
            style={{
              padding: '12px 20px',
              borderRadius: '30px',
              border: '4px solid rgba(0,0,255,0.4)',
              background: '#eee',
              color: '#333',
              fontSize: '16px'
            }}
            value={domaintype}
            onChange={(e) => setDomaintype(e.target.value)}
          >
            <option value="register">Register</option>
            <option value="transfer">Transfer</option>
            <option value="owndomain">Use Own Domain</option>
          </select> */}

          <Button type="submit">Search</Button>
        </Form>

        <Title style={{ fontSize: "1rem" }}>
          .com ₦27,500│.com.ng ₦9,000│.ng ₦17,500│.org ₦30,000│.net 40000│
        </Title>

        {result && (
          <Result
            ref={resultAnim.ref}
            className={resultAnim.className}
            available={result.available}
          >
            {result.available ? (
              <>🎉 <strong>{result.name}</strong> is available! <Button onClick={()=>navigate(`/domainregistercheckout/${result.name}/${domain}/${tld}`)}>Register</Button></>
            ) : (
              <>❌ <strong>{result.name}</strong> is already taken.</>
            )}
          </Result>
        )}
      </Container>
    </DomainWrap>
  );
};

export default DomainSearch;












// domain search backend
// <?php
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type');
// header('Content-Type: application/json');

// $apiUrl = "https://portal.elexdonhost.com/includes/api.php";
// $username = "1ZDawYiHgSrWtcNHxMMnrxNOXWrVuhf5";
// $password = "oaqCUTnic0Z4TIKMOgN1eODGeWwnjDaS";

// $input = json_decode(file_get_contents("php://input"), true);
// $domain = trim($input['domain'] ?? '');
// $type = $input['type'] ?? 'register';

// if (!$domain || !in_array($type, ['register', 'transfer', 'owndomain'])) {
//     echo json_encode(['available' => false, 'error' => 'Invalid input']);
//     exit;
// }

// $postfields = [
//     'action'        => 'DomainWhois',
//     'responsetype'  => 'json',
//     'username'      => $username,
//     'password'      => $password,
//     'domain'        => $domain
// ];

// $ch = curl_init();
// curl_setopt($ch, CURLOPT_URL, $apiUrl);
// curl_setopt($ch, CURLOPT_POST, true);
// curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postfields));
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// $response = curl_exec($ch);
// curl_close($ch);

// $data = json_decode($response, true);

// if (!$data) {
//     echo json_encode(['available' => false, 'error' => 'No response from API']);
//     exit;
// }

// switch ($type) {
//     case 'register':
//         // Domain must be available for registration
//         $available = isset($data['status']) && $data['status'] === 'available';
//         echo json_encode(['available' => $available]);
//         break;

//     case 'transfer':
//         // Domain must be registered (not available) to transfer
//         $available = isset($data['status']) && $data['status'] !== 'available';
//         echo json_encode(['available' => $available]);
//         break;

//     case 'owndomain':
//         // Domain must be registered/existing for using own domain
//         // This is similar to transfer check: domain not available = registered
//         $available = isset($data['status']) && $data['status'] !== 'available';
//         echo json_encode(['available' => $available]);
//         break;

//     default:
//         echo json_encode(['available' => false, 'error' => 'Invalid domain type']);
//         break;
// }
// ?>










// another file script
// <?php
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type');
// header('Content-Type: application/json');

// // ==== CONFIGURATION ====
// $apiUrl   = "https://my.hostafrica.com/modules/addons/DomainsReseller/api/index.php";
// $email    = "websiteokoronkwo@gmail.com"; // Your HostAfrica reseller email
// $apiKey   = "yEzJup2LXa2DJBZIFT02ZofzYl2mkdDj";   // Replace with your HostAfrica API key

// // ==== READ INPUT ====
// $input  = json_decode(file_get_contents("php://input"), true);
// $domain = trim($input['domain'] ?? '');
// $type   = $input['type'] ?? 'register';

// if (!$domain || !in_array($type, ['register', 'transfer', 'owndomain'])) {
//     echo json_encode(['available' => false, 'error' => 'Invalid input']);
//     exit;
// }

// // ==== BUILD TOKENS (try 0h, +1h, +2h) ====
// function buildToken($email, $apiKey, $offsetHours = 0) {
//     $time = gmdate("Y-m-d H", strtotime("+$offsetHours hours"));
//     $message = $email . ":" . $time;
//     $hmac    = hash_hmac("sha256", $apiKey, $message, true); // raw binary
//     return base64_encode($hmac);
// }

// $possibleTokens = [
//     buildToken($email, $apiKey, 0),  // current UTC hour
//     buildToken($email, $apiKey, 1),  // +1 hour
//     buildToken($email, $apiKey, 2),  // +2 hours
// ];

// // ==== API Request (Domain Lookup) ====
// $action = "/domains/lookup";
// $params = [
//     "searchTerm" => $domain,
// ];

// $response = null;
// $data = null;
// $usedToken = null;

// foreach ($possibleTokens as $tryToken) {
//     $headers = [
//         "username: $email",
//         "token: $tryToken"
//     ];

//     $ch = curl_init();
//     curl_setopt($ch, CURLOPT_URL, $apiUrl . $action);
//     curl_setopt($ch, CURLOPT_POST, true);
//     curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
//     curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//     curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
//     curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);

//     $response = curl_exec($ch);
//     curl_close($ch);

//     $data = json_decode($response, true);
//     if ($data && !isset($data['error'])) {
//         $usedToken = $tryToken;
//         break; // ✅ worked!
//     }
// }

// // ==== DEBUG LOG ====
// $debug  = "UTC Hour: " . gmdate("Y-m-d H") . "\n";
// $debug .= "EMAIL: $email\n";
// $debug .= "REQUEST:\n" . print_r($params, true) . "\n\n";
// $debug .= "HEADERS:\n" . print_r($headers, true) . "\n\n";
// $debug .= "RESPONSE:\n" . $response . "\n\n";
// $debug .= "PARSED:\n" . print_r($data, true) . "\n\n";
// $debug .= "USED TOKEN: " . ($usedToken ?? "none (all failed)") . "\n\n";
// file_put_contents("whois_debug.log", $debug, FILE_APPEND);

// // ==== HANDLE RESPONSE ====
// if (!$data) {
//     echo json_encode(['available' => false, 'error' => 'No response from HostAfrica API']);
//     exit;
// }

// if (isset($data['error'])) {
//     echo json_encode(['available' => false, 'error' => $data['error']]);
//     exit;
// }

// $status = $data['status'] ?? null;

// switch ($type) {
//     case 'register':
//         $available = ($status && strtolower($status) === 'available');
//         echo json_encode(['available' => $available]);
//         break;

//     case 'transfer':
//     case 'owndomain':
//         $available = ($status && strtolower($status) === 'unavailable');
//         echo json_encode(['available' => $available]);
//         break;

//     default:
//         echo json_encode(['available' => false, 'error' => 'Invalid domain type']);
//         break;
// }
// ?>











// script 3 , checking .com for now but , not .com.ng

// <?php
// // === CORS HEADERS ===
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type');

// // Handle preflight request for CORS
// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     http_response_code(200);
//     exit;
// }

// header('Content-Type: application/json');

// // === CONFIGURATION (WHMCS API credentials) ===
// $apiUrl   = "https://portal.elexdonhost.com/includes/api.php"; // WHMCS API endpoint
// $username = "1ZDawYiHgSrWtcNHxMMnrxNOXWrVuhf5"; // WHMCS API identifier/username
// $password = "oaqCUTnic0Z4TIKMOgN1eODGeWwnjDaS"; // WHMCS API secret/password

// // === READ INPUT ===
// $input  = json_decode(file_get_contents("php://input"), true);
// $domain = trim($input['domain'] ?? '');
// $type   = $input['type'] ?? 'register';

// // Validate input
// if (!$domain || !in_array($type, ['register', 'transfer', 'owndomain'])) {
//     echo json_encode(['available' => false, 'error' => 'Invalid input']);
//     exit;
// }

// // === API Request (using WHMCS API) ===
// $postfields = [
//     'action'       => 'DomainWhois',
//     'responsetype' => 'json',
//     'username'     => $username,
//     'password'     => $password,
//     'domain'       => $domain
// ];

// // CURL
// $ch = curl_init();
// curl_setopt($ch, CURLOPT_URL, $apiUrl);
// curl_setopt($ch, CURLOPT_POST, true);
// curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postfields));
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// $response = curl_exec($ch);
// curl_close($ch);

// $data = json_decode($response, true);

// // === DEBUG LOG ===
// $debug  = "REQUEST:\n" . print_r($postfields, true) . "\n\n";
// $debug .= "RESPONSE:\n" . $response . "\n\n";
// $debug .= "PARSED:\n" . print_r($data, true) . "\n\n";
// file_put_contents("whois_debug.log", $debug, FILE_APPEND);

// // === HANDLE RESPONSE ===
// if (!$data) {
//     echo json_encode(['available' => false, 'error' => 'No response from WHMCS API']);
//     exit;
// }

// if (isset($data['result']) && $data['result'] === 'error') {
//     echo json_encode(['available' => false, 'error' => $data['message'] ?? 'API error']);
//     exit;
// }

// $status = strtolower($data['status'] ?? '');

// switch ($type) {
//     case 'register':
//         // Domain must be available
//         $available = ($status === 'available');
//         echo json_encode(['available' => $available]);
//         break;

//     case 'transfer':
//     case 'owndomain':
//         // Domain must already be registered
//         $available = ($status === 'unavailable');
//         echo json_encode(['available' => $available]);
//         break;

//     default:
//         echo json_encode(['available' => false, 'error' => 'Invalid domain type']);
//         break;
// }





// working intrnal who is look up for .com also working for aailability

// <?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

// // === CORS HEADERS ===
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type');

// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     http_response_code(200);
//     exit;
// }

// header('Content-Type: application/json');

// // === BOOTSTRAP WHMCS ===
// // Make sure this path points to your WHMCS root (adjust as needed)
// require_once '/home/elexdonh/public_html/portal/init.php';
// require_once '/home/elexdonh/public_html/portal/includes/functions.php';
// require_once '/home/elexdonh/public_html/portal/includes/clientfunctions.php';
// require_once '/home/elexdonh/public_html/portal/includes/modulefunctions.php';

// // === READ INPUT ===
// $input  = json_decode(file_get_contents("php://input"), true);
// $domain = trim($input['domain'] ?? '');
// $type   = $input['type'] ?? 'register';

// if (!$domain || !in_array($type, ['register', 'transfer', 'owndomain'])) {
//     echo json_encode(['available' => false, 'error' => 'Invalid input']);
//     exit;
// }

// // === CALL WHMCS LOCAL API ===
// $command = 'DomainWhois';
// $postfields = ['domain' => $domain];
// $adminUsername = 'admin'; // Replace with your actual WHMCS admin username
// $results = localAPI($command, $postfields, $adminUsername);

// // === DEBUG LOG ===
// $debug  = "DOMAIN: $domain\n";
// $debug .= "RESULTS:\n" . print_r($results, true) . "\n\n";
// file_put_contents("whois_debug.log", $debug, FILE_APPEND);

// if (!$results || !isset($results['status'])) {
//     echo json_encode(['available' => false, 'error' => 'WHMCS localAPI failed']);
//     exit;
// }

// $status = strtolower($results['status']);

// switch ($type) {
//     case 'register':
//         echo json_encode(['available' => ($status === 'available')]);
//         break;
//     case 'transfer':
//     case 'owndomain':
//         echo json_encode(['available' => ($status === 'unavailable')]);
//         break;
//     default:
//         echo json_encode(['available' => false, 'error' => 'Invalid domain type']);
// }





// 2 steps but only one step runs
// <?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

// // === CORS HEADERS ===
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type');

// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
//     http_response_code(200);
//     exit;
// }

// header('Content-Type: application/json');

// // === BOOTSTRAP WHMCS ===
// require_once '/home/elexdonh/public_html/portal/init.php';
// require_once '/home/elexdonh/public_html/portal/includes/functions.php';
// require_once '/home/elexdonh/public_html/portal/includes/clientfunctions.php';
// require_once '/home/elexdonh/public_html/portal/includes/modulefunctions.php';

// // === READ INPUT ===
// $input  = json_decode(file_get_contents("php://input"), true);
// $domain = trim($input['domain'] ?? '');
// $type   = $input['type'] ?? 'register';

// if (!$domain || !in_array($type, ['register', 'transfer', 'owndomain'])) {
//     echo json_encode(['available' => false, 'error' => 'Invalid input']);
//     exit;
// }

// // === STEP 1: Try WHMCS DomainWhois ===
// $command       = 'DomainWhois';
// $postfields    = ['domain' => $domain];
// $adminUsername = 'admin'; // <-- replace with your WHMCS admin username
// $results       = localAPI($command, $postfields, $adminUsername);

// // === DEBUG LOG ===
// $debug  = "DOMAIN: $domain\n";
// $debug .= "STEP 1 (DomainWhois) RESULTS:\n" . print_r($results, true) . "\n\n";
// file_put_contents("whois_debug.log", $debug, FILE_APPEND);

// // === If WHOIS failed or gave no usable status → STEP 2 HostAfrica ===
// if (!isset($results['status']) || $results['result'] === 'error') {
//     $modulePath = '/home/elexdonh/public_html/portal/modules/registrars/HOSTAFRICADomainResellerModuleWHMCS/calls/CheckAvailability.php';
//     if (file_exists($modulePath)) {
//         $_POST = ['searchTerm' => $domain]; // simulate WHMCS call
//         ob_start();
//         include $modulePath;
//         $response = trim(ob_get_clean());

//         $haResults = json_decode($response, true);

//         // Debug log
//         $debug  = "DOMAIN: $domain\n";
//         $debug .= "STEP 2 (HostAfrica Module) RAW RESPONSE:\n$response\n\n";
//         $debug .= "PARSED:\n" . print_r($haResults, true) . "\n\n";
//         file_put_contents("whois_debug.log", $debug, FILE_APPEND);

//         if (is_array($haResults) && isset($haResults['status'])) {
//             $results = [
//                 'result' => 'success',
//                 'status' => strtolower($haResults['status'])
//             ];
//         } else {
//             if (stripos($response, 'available') !== false) {
//                 $results = ['result' => 'success', 'status' => 'available'];
//             } elseif (stripos($response, 'unavailable') !== false || stripos($response, 'taken') !== false) {
//                 $results = ['result' => 'success', 'status' => 'unavailable'];
//             } else {
//                 echo json_encode(['available' => false, 'error' => 'HostAfrica lookup failed - unexpected response']);
//                 exit;
//             }
//         }
//     } else {
//         echo json_encode(['available' => false, 'error' => 'HostAfrica module not found']);
//         exit;
//     }
// }

// // === HANDLE RESPONSE ===
// if (!isset($results['status'])) {
//     echo json_encode(['available' => false, 'error' => 'No valid status from lookup']);
//     exit;
// }

// $status = strtolower($results['status']);

// switch ($type) {
//     case 'register':
//         echo json_encode(['available' => ($status === 'available')]);
//         break;
//     case 'transfer':
//     case 'owndomain':
//         echo json_encode(['available' => ($status === 'unavailable')]);
//         break;
//     default:
//         echo json_encode(['available' => false, 'error' => 'Invalid domain type']);
// }
