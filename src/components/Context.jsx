
import React, { createContext, useState , useEffect} from 'react'


export const Context = createContext();

const ContextProvider = ({children}) => {

const yes ="true"

const dollarRate = 1510;
const [products, setProducts] = useState([]);
 const [wordpressProducts, setWordpressProducts] = useState([]);
   const [plans, setPlans] = useState([]);
    const [vpsPlans, setVpsPlans] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

 const domainPricings = [
  { domain: ".com", register: 27500, transfer: 27500, renewal: 27500 },
  { domain: ".net", register: 40000, transfer: 40000, renewal: 40000 },
  { domain: ".org", register: 30000, transfer: 30000, renewal: 30000 },
  { domain: ".biz", register: 47000, transfer: 47000, renewal: 48000 },
  { domain: ".info", register: 60000, transfer: 60000, renewal: 65000 },
  { domain: ".com.ng", register: 9000, transfer: 9500, renewal: 9500 },
  { domain: ".ng", register: 17500, transfer: 17500, renewal: 18000 },
  { domain: ".us", register: 17500, transfer: 17500, renewal: 17500 },
  { domain: ".edu.ng", register: 18000, transfer: 18000, renewal: 18000 },
  { domain: ".eu", register: 1199, transfer: 1199, renewal: 1300 },
  { domain: ".uk", register: 26500, transfer: 26500, renewal: 26500 },
  { domain: ".club", register: 50000, transfer: 50000, renewal: 50000 },
  { domain: ".sch.ng", register: 3000, transfer: 3000, renewal: 3000 },
];

const api_key = "MY_SUPER_SECRET_KEY"
const api_domain = "https://www.elexdonhost.com/api_elexdonhost"





// useEffect(() => {
//   fetch(`${api_domain}/get_shared_hosting_products.php?key=${api_key}`)
//     .then(res => res.json())
//     .then(data => {
//       if (data.success && data.products?.product?.length > 0) {
//         setProducts(data.products.product);
//         // Swal.fire({
//         //   toast: true,
//         //   position: 'top-end',
//         //   icon: 'success',
//         //   title: 'Plans loaded 🎉',
//         //   showConfirmButton: false,
//         //   timer: 2000,
//         // });
//       } else {
//         setError(data.error || "No shared hosting products found.");
//         // Swal.fire({
//         //   toast: true,
//         //   position: 'top-end',
//         //   icon: 'warning',
//         //   title: data.error || 'No plans available',
//         //   showConfirmButton: false,
//         //   timer: 2000,
//         // });
//       }
//     })
//     .catch(err => {
//       console.error("Fetch error:", err);
//       setError("Failed to fetch shared hosting plans. Please try again later.");
//       // Swal.fire({
//       //   toast: true,
//       //   position: 'top-end',
//       //   icon: 'error',
//       //   title: 'Error loading plans',
//       //   showConfirmButton: false,
//       //   timer: 2000,
//       // });
//     })
//     .finally(() => setLoading(false));
// }, []);


useEffect(() => {
  const STORAGE_KEY = "products1";

  const fetchProducts = () => {
    fetch(`${api_domain}/get_shared_hosting_products.php?key=${api_key}`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.products?.product?.length > 0) {
          const productsData = data.products.product;

          setProducts(productsData);

          // Save to localStorage
          localStorage.setItem(STORAGE_KEY, JSON.stringify(productsData));
        } else {
          setError(data.error || "No shared hosting products found.");
        }
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError("Failed to fetch shared hosting plans. Please try again later.");
      })
      .finally(() => setLoading(false));
  };

  // 1. Load from localStorage immediately
  const cached = localStorage.getItem(STORAGE_KEY);
  if (cached) {
    try {
      setProducts(JSON.parse(cached));
      setLoading(false); // show cached instantly
    } catch (e) {
      console.error("LocalStorage parse error:", e);
    }
  }

  // 2. Fetch fresh data immediately
  fetchProducts();

  // 3. Fetch every 5 minutes (300000 ms)
  const interval = setInterval(fetchProducts, 300000);

  // Cleanup
  return () => clearInterval(interval);
}, []);









useEffect(() => {
  const STORAGE_KEY = "product2";

  const fetchProducts = () => {
    fetch(`${api_domain}/get_wordpress_hosting_products.php?key=${api_key}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (data.products?.product?.length > 0) {
          const productsData = data.products.product;

          setWordpressProducts(productsData);

          // Save to localStorage
          localStorage.setItem(STORAGE_KEY, JSON.stringify(productsData));

         
        } else {
          setError('No products found. Please try again later.');

          
        }
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError('Failed to fetch WordPress products. Please try again later.');

       
      })
      .finally(() => setLoading(false));
  };

  // 1. Load from localStorage instantly
  const cached = localStorage.getItem(STORAGE_KEY);
  if (cached) {
    try {
      setWordpressProducts(JSON.parse(cached));
      setLoading(false);
    } catch (e) {
      console.error("LocalStorage parse error:", e);
    }
  }

  // 2. Fetch fresh data immediately
  fetchProducts();

  // 3. Refresh every 5 minutes
  const interval = setInterval(fetchProducts, 300000);

  // Cleanup
  return () => clearInterval(interval);

}, []);





useEffect(() => {
  const STORAGE_KEY = "product4";

  const fetchProducts = () => {
    fetch(`https://www.elexdonhost.com/api_elexdonhost/get_vps_hosting_products.php?key=${api_key}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (data?.products?.product?.length > 0) {
          const filtered = data.products.product.filter(
            p =>
              p.type === "server" ||
              p.type === "hostingaccount" ||
              p.type === "reselleraccount"
          );

          setVpsPlans(filtered);

          // Save to localStorage
          localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));

   
        } else {
          setError('No VPS plans were found.');

        }
      })
      .catch(err => {
        console.error("Error fetching VPS plans:", err);
        setError('Failed to fetch VPS plans. Please try again later.');

      })
      .finally(() => setLoading(false));
  };

  // 1. Load cached data instantly
  const cached = localStorage.getItem(STORAGE_KEY);
  if (cached) {
    try {
      setVpsPlans(JSON.parse(cached));
      setLoading(false);
    } catch (e) {
      console.error("LocalStorage parse error:", e);
    }
  }

  // 2. Fetch fresh data immediately
  fetchProducts();

  // 3. Auto-refresh every 5 minutes
  const interval = setInterval(fetchProducts, 300000);

  // Cleanup
  return () => clearInterval(interval);

}, []);




useEffect(() => {
  const STORAGE_KEY = "product3";

  const fetchProducts = () => {
    fetch(`${api_domain}/get_reseller_hosting_products.php?key=${api_key}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (data?.products?.product?.length > 0) {
          const productsData = data.products.product;

          setPlans(productsData);

          // Save to localStorage
          localStorage.setItem(STORAGE_KEY, JSON.stringify(productsData));

        } else {
          setError('No reseller hosting products were found.');

        }
      })
      .catch(error => {
        console.error('Failed to fetch reseller plans:', error);
        setError('Failed to fetch reseller hosting plans. Please try again later.');
      })
      .finally(() => setLoading(false));
  };

  // 1. Load cached data instantly
  const cached = localStorage.getItem(STORAGE_KEY);
  if (cached) {
    try {
      setPlans(JSON.parse(cached));
      setLoading(false);
    } catch (e) {
      console.error("LocalStorage parse error:", e);
    }
  }

  // 2. Fetch fresh data immediately
  fetchProducts();

  // 3. Auto-refresh every 5 minutes
  const interval = setInterval(fetchProducts, 300000);

  // Cleanup
  return () => clearInterval(interval);

}, []);






  return (
    <Context.Provider value={{yes,domainPricings, dollarRate, api_key,api_domain,
    products,error,loading,
    wordpressProducts, plans, vpsPlans}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider

// preious ip
// 95.216.25.188

// whmcs

// identifier:1ZDawYiHgSrWtcNHxMMnrxNOXWrVuhf5
// 
// secret:oaqCUTnic0Z4TIKMOgN1eODGeWwnjDaS




// cpanel database
// pw: Mikeconnect@5050
// user: 
// db: User “elexdonh_db1” was added to the database “elexdonh_db1”.



// initail password reset email tempalte
// To reset your password, please click on the link below.

// Reset your password

// If you're having trouble, try copying and pasting the following URL into your browser:
// {$reset_password_url}

// If you did not request this reset, you can ignore this email. It will expire in 2 hours time.

// {$signature}





// domain_renew.php
// <?php
// // CORS & JSON headers
// header('Access-Control-Allow-Origin: *');
// header('Content-Type: application/json');
// header('Access-Control-Allow-Methods: POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type');
// if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;

// // Parse input
// $in = json_decode(file_get_contents('php://input'), true);
// if (empty($in['clientid']) || empty($in['serviceid'])) {
//     http_response_code(400);
//     echo json_encode(['success'=>false,'message'=>'Missing clientid or serviceid']);
//     exit;
// }
// $clientId  = (int)$in['clientid'];
// $serviceId = (int)$in['serviceid'];
// $payment   = $in['paymentmethod'] ?? 'banktransfer';

// // Build only hosting renewal payload
// $post = [
//   'action'             => 'AddOrder',
//   'username'           => '1ZDawYiHgSrWtcNHxMMnrxNOXWrVuhf5',
//   'password'           => 'oaqCUTnic0Z4TIKMOgN1eODGeWwnjDaS',
//   'clientid'           => $clientId,
//   'paymentmethod'      => $payment,
//   'servicerenewals[0]' => $serviceId,  // just this field
//   'responsetype'       => 'json',
// ];

// // API call
// $ch = curl_init('https://portal.elexdonhost.com/includes/api.php');
// curl_setopt($ch, CURLOPT_POST, true);
// curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// $out = curl_exec($ch);
// $err = curl_error($ch);
// curl_close($ch);

// // Handle errors
// if ($err) {
//     http_response_code(500);
//     exit(json_encode(['success'=>false,'message'=>$err]));
// }
// $res = json_decode($out, true);
// if (!empty($res['result']) && $res['result'] === 'success') {
//     echo json_encode(['success'=>true,'orderid'=>$res['orderid'],'invoiceid'=>$res['invoiceid'] ?? null]);
// } else {
//     http_response_code(400);
//     echo json_encode(['success'=>false,'message'=>$res['message'] ?? 'API error','raw'=>$res]);
// }
