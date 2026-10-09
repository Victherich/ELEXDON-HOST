
import React, { createContext, useState , useEffect} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

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

//  const domainPricings = [
//   { domain: ".com", register: 28500, transfer: 28500, renewal: 28500 },
//   { domain: ".net", register: 40000, transfer: 40000, renewal: 40000 },
//   { domain: ".org", register: 30000, transfer: 30000, renewal: 30000 },
//   { domain: ".biz", register: 47000, transfer: 47000, renewal: 48000 },
//   { domain: ".info", register: 60000, transfer: 60000, renewal: 65000 },
//   { domain: ".com.ng", register: 13500, transfer: 13500, renewal: 13500 },
//   { domain: ".ng", register: 17500, transfer: 17500, renewal: 18000 },
//   { domain: ".us", register: 17500, transfer: 17500, renewal: 17500 },
//   { domain: ".edu.ng", register: 18000, transfer: 18000, renewal: 18000 },
//   { domain: ".eu", register: 1199, transfer: 1199, renewal: 1300 },
//   { domain: ".uk", register: 26500, transfer: 26500, renewal: 26500 },
//   { domain: ".club", register: 50000, transfer: 50000, renewal: 50000 },
//   { domain: ".sch.ng", register: 3000, transfer: 3000, renewal: 3000 },
//     { domain: ".tech", register: 120000, transfer: 120000, renewal: 120000 },
// ];




const domainPricings = [
    { domain: '.ng', badge: 'Sale', register: 11500.00, newPeriod: '1 Year', transfer: 11500.00, transferPeriod: '1 Year', renewal: 17500.00, renewalPeriod: '1 Year' },
    { domain: '.com.ng', badge: 'Hot', register: 4500.00, newPeriod: '1 Year', transfer: 1200.00, transferPeriod: '1 Year', renewal: 9000.00, renewalPeriod: '1 Year' },
    { domain: '.com', badge: 'Hot', register: 11500.00, newPeriod: '1 Year', transfer: 11500.00, transferPeriod: '1 Year', renewal: 20500.00, renewalPeriod: '1 Year' },
    { domain: '.online', badge: 'Hot', register: 12000.00, newPeriod: '1 Year', transfer: 75000.00, transferPeriod: '1 Year', renewal: 75000.00, renewalPeriod: '1 Year' },
    { domain: '.org', badge: 'Sale', register: 28000.00, newPeriod: '1 Year', transfer: 28000.00, transferPeriod: '1 Year', renewal: 28000.00, renewalPeriod: '1 Year' },
    { domain: '.org.ng', badge: 'Hot', register: 6000.00, newPeriod: '1 Year', transfer: 0.00, transferPeriod: '', renewal: 12000.00, renewalPeriod: '1 Year' },
    { domain: '.site', badge: 'New', register: 8000.00, newPeriod: '1 Year', transfer: 78000.00, transferPeriod: '1 Year', renewal: 78000.00, renewalPeriod: '1 Year' },
    { domain: '.biz', badge: 'Sale', register: 50000.00, newPeriod: '1 Year', transfer: 50000.00, transferPeriod: '1 Year', renewal: 50000.00, renewalPeriod: '1 Year' },
    { domain: '.store', badge: 'Sale', register: 13500.00, newPeriod: '1 Year', transfer: 118000.00, transferPeriod: '1 Year', renewal: 118000.00, renewalPeriod: '1 Year' },
    { domain: '.net', badge: 'Sale', register: 30000.00, newPeriod: '1 Year', transfer: 30000.00, transferPeriod: '1 Year', renewal: 35000.00, renewalPeriod: '1 Year' },
    { domain: '.uk', badge: '', register: 28000.00, newPeriod: '1 Year', transfer: 28000.00, transferPeriod: '1 Year', renewal: 28000.00, renewalPeriod: '1 Year' },
    { domain: '.tech', badge: 'New', register: 11800.00, newPeriod: '1 Year', transfer: 120000.00, transferPeriod: '1 Year', renewal: 120000.00, renewalPeriod: '1 Year' },
    { domain: '.gov.ng', badge: '', register: 20000.00, newPeriod: '1 Year', transfer: 20000.00, transferPeriod: '1 Year', renewal: 20000.00, renewalPeriod: '1 Year' },
    { domain: '.website', badge: '', register: 10000.00, newPeriod: '1 Year', transfer: 70000.00, transferPeriod: '1 Year', renewal: 70000.00, renewalPeriod: '1 Year' },
    { domain: '.edu.ng', badge: '', register: 20000.00, newPeriod: '1 Year', transfer: 15000.00, transferPeriod: '1 Year', renewal: 20000.00, renewalPeriod: '1 Year' },
    { domain: '.club', badge: '', register: 50000.00, newPeriod: '1 Year', transfer: 50000.00, transferPeriod: '1 Year', renewal: 50000.00, renewalPeriod: '1 Year' },
    { domain: '.co.uk', badge: '', register: 28000.00, newPeriod: '1 Year', transfer: 28000.00, transferPeriod: '1 Year', renewal: 28000.00, renewalPeriod: '1 Year' },
    { domain: '.info', badge: '', register: 60000.00, newPeriod: '1 Year', transfer: 60000.00, transferPeriod: '1 Year', renewal: 60000.00, renewalPeriod: '1 Year' },
    { domain: '.mobi', badge: '', register: 90000.00, newPeriod: '1 Year', transfer: 90000.00, transferPeriod: '1 Year', renewal: 106000.00, renewalPeriod: '1 Year' },
    { domain: '.net.ng', badge: '', register: 5000.00, newPeriod: '1 Year', transfer: 0.00, transferPeriod: '', renewal: 10000.00, renewalPeriod: '1 Year' },
    { domain: '.me', badge: '', register: 51000.00, newPeriod: '1 Year', transfer: 51000.00, transferPeriod: '1 Year', renewal: 51000.00, renewalPeriod: '1 Year' },
    { domain: '.xyz', badge: '', register: 50000.00, newPeriod: '1 Year', transfer: 50000.00, transferPeriod: '1 Year', renewal: 50000.00, renewalPeriod: '1 Year' },
    { domain: '.ca', badge: 'New', register: 50000.00, newPeriod: '1 Year', transfer: 50000.00, transferPeriod: '1 Year', renewal: 50000.00, renewalPeriod: '1 Year' },
    { domain: '.io', badge: '', register: 145000.00, newPeriod: '1 Year', transfer: 145000.00, transferPeriod: '1 Year', renewal: 145000.00, renewalPeriod: '1 Year' },
    { domain: '.blog', badge: '', register: 60878.00, newPeriod: '1 Year', transfer: 60878.00, transferPeriod: '1 Year', renewal: 73777.00, renewalPeriod: '1 Year' },
    { domain: '.icu', badge: '', register: 23000.00, newPeriod: '1 Year', transfer: 23000.00, transferPeriod: '1 Year', renewal: 23000.00, renewalPeriod: '1 Year' },
    { domain: '.top', badge: '', register: 23666.00, newPeriod: '1 Year', transfer: 23666.00, transferPeriod: '1 Year', renewal: 25344.00, renewalPeriod: '1 Year' },
    { domain: '.vip', badge: '', register: 40758.00, newPeriod: '1 Year', transfer: 40758.00, transferPeriod: '1 Year', renewal: 50412.00, renewalPeriod: '1 Year' },
    { domain: '.us', badge: '', register: 30000.00, newPeriod: '1 Year', transfer: 30000.00, transferPeriod: '1 Year', renewal: 30000.00, renewalPeriod: '1 Year' },
    { domain: '.ru', badge: '', register: 15363.00, newPeriod: '1 Year', transfer: 0.00, transferPeriod: '', renewal: 17960.00, renewalPeriod: '1 Year' },
    { domain: '.nl', badge: '', register: 25613.00, newPeriod: '1 Year', transfer: 25613.00, transferPeriod: '1 Year', renewal: 30806.00, renewalPeriod: '1 Year' },
    { domain: '.de', badge: '', register: 20988.00, newPeriod: '1 Year', transfer: 20988.00, transferPeriod: '1 Year', renewal: 25099.00, renewalPeriod: '1 Year' },
    { domain: '.eu', badge: '', register: 24339.00, newPeriod: '1 Year', transfer: 24339.00, transferPeriod: '1 Year', renewal: 23017.00, renewalPeriod: '1 Year' },
    { domain: '.cn', badge: '', register: 21070.00, newPeriod: '1 Year', transfer: 23070.00, transferPeriod: '1 Year', renewal: 24397.00, renewalPeriod: '1 Year' },
  ];



const api_key = "MY_SUPER_SECRET_KEY"
const api_domain = "https://www.elexdonhost.com/api_elexdonhost"
// const paystack_key = "pk_live_3626fe7772aaca28a10724ebb1f9727dfcc5d6cb"
const paystack_key="pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4"




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


// useEffect(() => {
//   const STORAGE_KEY = "products1";

//   const fetchProducts = () => {
//     fetch(`${api_domain}/get_shared_hosting_products.php?key=${api_key}`)
//       .then(res => res.json())
//       .then(data => {
//         if (data.success && data.products?.product?.length > 0) {
//           const productsData = data.products.product;

//           setProducts(productsData);

//           // Save to localStorage
//           localStorage.setItem(STORAGE_KEY, JSON.stringify(productsData));
//         } else {
//           setError(data.error || "No shared hosting products found.");
//         }
//       })
//       .catch(err => {
//         console.error("Fetch error:", err);
//         setError("Failed to fetch shared hosting plans. Please try again later.");
//       })
//       .finally(() => setLoading(false));
//   };

//   // 1. Load from localStorage immediately
//   const cached = localStorage.getItem(STORAGE_KEY);
//   if (cached) {
//     try {
//       setProducts(JSON.parse(cached));
//       setLoading(false); // show cached instantly
//     } catch (e) {
//       console.error("LocalStorage parse error:", e);
//     }
//   }

//   // 2. Fetch fresh data immediately
//   fetchProducts();

//   // 3. Fetch every 5 minutes (300000 ms)
//   const interval = setInterval(fetchProducts, 300000);

//   // Cleanup
//   return () => clearInterval(interval);
// }, []);





// useEffect(() => {
//   const STORAGE_KEY = "products1";

//   const fetchProducts = () => {
//     fetch(`${api_domain}/get_shared_hosting_products2.php?key=${api_key}`)
//       .then(res => res.json())
//       .then(data => {
//         // Updated check to match the normalized PHP backend array structure
//         if (data.success && Array.isArray(data.products) && data.products.length > 0) {
//           const productsData = data.products;

//           setProducts(productsData);

//           // Save to localStorage
//           localStorage.setItem(STORAGE_KEY, JSON.stringify(productsData));
//         } else {
//           setError(data.error || "No shared hosting products found.");
//         }
//       })
//       .catch(err => {
//         console.error("Fetch error:", err);
//         setError("Failed to fetch shared hosting plans. Please try again later.");
//       })
//       .finally(() => setLoading(false));
//   };

//   // 1. Load from localStorage immediately
//   const cached = localStorage.getItem(STORAGE_KEY);
//   if (cached) {
//     try {
//       setProducts(JSON.parse(cached));
//       setLoading(false); // show cached instantly
//     } catch (e) {
//       console.error("LocalStorage parse error:", e);
//     }
//   }

//   // 2. Fetch fresh data immediately
//   fetchProducts();

//   // 3. Fetch every 5 minutes (300000 ms)
//   const interval = setInterval(fetchProducts, 300000);

//   // Cleanup
//   return () => clearInterval(interval);
// }, [api_domain, api_key]); // Added dependencies to satisfy React hooks best practices



// useEffect(() => {
//   const STORAGE_KEY = "product2";

//   const fetchProducts = () => {
//     fetch(`${api_domain}/get_wordpress_hosting_products.php?key=${api_key}`)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then(data => {
//         if (data.products?.product?.length > 0) {
//           const productsData = data.products.product;

//           setWordpressProducts(productsData);

//           // Save to localStorage
//           localStorage.setItem(STORAGE_KEY, JSON.stringify(productsData));

         
//         } else {
//           setError('No products found. Please try again later.');

          
//         }
//       })
//       .catch(err => {
//         console.error("Fetch error:", err);
//         setError('Failed to fetch WordPress products. Please try again later.');

       
//       })
//       .finally(() => setLoading(false));
//   };

//   // 1. Load from localStorage instantly
//   const cached = localStorage.getItem(STORAGE_KEY);
//   if (cached) {
//     try {
//       setWordpressProducts(JSON.parse(cached));
//       setLoading(false);
//     } catch (e) {
//       console.error("LocalStorage parse error:", e);
//     }
//   }

//   // 2. Fetch fresh data immediately
//   fetchProducts();

//   // 3. Refresh every 5 minutes
//   const interval = setInterval(fetchProducts, 300000);

//   // Cleanup
//   return () => clearInterval(interval);

// }, []);





// useEffect(() => {
//   const STORAGE_KEY = "product4";

//   const fetchProducts = () => {
//     fetch(`https://www.elexdonhost.com/api_elexdonhost/get_vps_hosting_products.php?key=${api_key}`)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then(data => {
//         if (data?.products?.product?.length > 0) {
//           const filtered = data.products.product.filter(
//             p =>
//               p.type === "server" ||
//               p.type === "hostingaccount" ||
//               p.type === "reselleraccount"
//           );

//           setVpsPlans(filtered);

//           // Save to localStorage
//           localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));

   
//         } else {
//           setError('No VPS plans were found.');

//         }
//       })
//       .catch(err => {
//         console.error("Error fetching VPS plans:", err);
//         setError('Failed to fetch VPS plans. Please try again later.');

//       })
//       .finally(() => setLoading(false));
//   };

//   // 1. Load cached data instantly
//   const cached = localStorage.getItem(STORAGE_KEY);
//   if (cached) {
//     try {
//       setVpsPlans(JSON.parse(cached));
//       setLoading(false);
//     } catch (e) {
//       console.error("LocalStorage parse error:", e);
//     }
//   }

//   // 2. Fetch fresh data immediately
//   fetchProducts();

//   // 3. Auto-refresh every 5 minutes
//   const interval = setInterval(fetchProducts, 300000);

//   // Cleanup
//   return () => clearInterval(interval);

// }, []);




// useEffect(() => {
//   const STORAGE_KEY = "product3";

//   const fetchProducts = () => {
//     fetch(`${api_domain}/get_reseller_hosting_products.php?key=${api_key}`)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then(data => {
//         if (data?.products?.product?.length > 0) {
//           const productsData = data.products.product;

//           setPlans(productsData);

//           // Save to localStorage
//           localStorage.setItem(STORAGE_KEY, JSON.stringify(productsData));

//         } else {
//           setError('No reseller hosting products were found.');

//         }
//       })
//       .catch(error => {
//         console.error('Failed to fetch reseller plans:', error);
//         setError('Failed to fetch reseller hosting plans. Please try again later.');
//       })
//       .finally(() => setLoading(false));
//   };

//   // 1. Load cached data instantly
//   const cached = localStorage.getItem(STORAGE_KEY);
//   if (cached) {
//     try {
//       setPlans(JSON.parse(cached));
//       setLoading(false);
//     } catch (e) {
//       console.error("LocalStorage parse error:", e);
//     }
//   }

//   // 2. Fetch fresh data immediately
//   fetchProducts();

//   // 3. Auto-refresh every 5 minutes
//   const interval = setInterval(fetchProducts, 300000);

//   // Cleanup
//   return () => clearInterval(interval);

// }, []);






const emailPackages = [
  {
    id: "1",
    title: "Email Plus Core",
    price: "NGN 20,000 / user / month",
    numericPrice: 20000,
    duration: "1 month",
    features: [
      "10 GB Mailbox per user",
      "Webmail & Mobile Access",
      "Advanced Spam Protection",
      "Custom Domain Emails",
      "99.9% Uptime Guarantee"
    ],
    buttonText: "Get Started",
    buttonHref: "#order-form"
  },
  {
    id: "2",
    title: "Email Plus Workspace",
    price: "NGN 25,000 / user / month",
    numericPrice: 25000,
    duration: "1 month",
    features: [
      "30 GB Mailbox per user",
      "Collaboration Tools & Calendars",
      "File Storage & Sharing",
      "Video Conferencing Support",
      "Priority Customer Support"
    ],
    buttonText: "Get Started",
    buttonHref: "#order-form"
  },
];



  const sslPackages = [
    {
      id: '1',
      title: 'E-Commercial SSL',
      priceDisplay: '₦13,500',
      duration: '.00/year',
      numericPrice: 13500,
      features: [
        { label: 'Brand (CA)', value: 'Certum' },
        { label: 'Validation Level', value: 'Domain Validation' },
        { label: 'Paperwork Required', value: 'No' },
        { label: 'Domains Secured', value: 'Single Domain' },
        { label: 'Delivery', value: 'Within 1 Day' }
      ]
    },
    {
      id: '2',
      title: 'E-Trusted SSL (OV)',
      priceDisplay: '₦170,000',
      duration: '.00/Year',
      numericPrice: 170000,
      features: [
        { label: 'Brand (CA)', value: 'Certum' },
        { label: 'Validation Level', value: 'Organizational Validation' },
        { label: 'Paperwork Required', value: 'Yes' },
        { label: 'Domains Secured', value: 'Single Domain' },
        { label: 'Delivery', value: '7 Days' }
      ]
    },
    {
      id: '3',
      title: 'E-Commercial Wildcard (DV)',
      priceDisplay: '₦105,000',
      duration: '/Annually',
      numericPrice: 105000,
      features: [
        { label: 'Brand (CA)', value: 'Certum' },
        { label: 'Validation Level', value: 'Domain Validation' },
        { label: 'Paperwork Required', value: 'No' },
        { label: 'Domains Secured', value: 'Wildcard (1 + sub-domains)' },
        { label: 'Delivery', value: '24 hours' }
      ]
    },
    {
      id: '4',
      title: 'E-Trusted Wildcard SSL (OV)',
      priceDisplay: '₦180,000',
      duration: '.00/Year',
      numericPrice: 180000,
      features: [
        { label: 'Brand (CA)', value: 'Certum' },
        { label: 'Validation Level', value: 'Organizational Validation' },
        { label: 'Paperwork Required', value: 'Yes' },
        { label: 'Domains Secured', value: 'Wildcard (1 + sub-domains)' },
        { label: 'Delivery', value: '7 Days' }
      ]
    },
    {
      id: '5',
      title: 'E-Comodo Positive DV SSL',
      priceDisplay: '₦20,000',
      duration: '.00/Year',
      numericPrice: 20000,
      features: [
        { label: 'Description', value: 'Suitable for personal / social media' },
        { label: 'Brand (CA)', value: 'Comodo' },
        { label: 'Validation Level', value: 'Domain Validation' },
        { label: 'Paperwork Required', value: 'No' },
        { label: 'Domains Secured', value: 'Single Domain' },
        { label: 'Delivery', value: 'Within 1 Day' }
      ]
    },
    {
      id: '6',
      title: 'E-Comodo Positive Wildcard DV',
      priceDisplay: '₦130,000',
      duration: '.00/Year',
      numericPrice: 130000,
      features: [
        { label: 'Description', value: 'Suitable for personal / social media' },
        { label: 'Brand (CA)', value: 'Comodo' },
        { label: 'Validation Level', value: 'Domain Validation' },
        { label: 'Paperwork Required', value: 'No' },
        { label: 'Domains Secured', value: '1 plus first-level subdomains' },
        { label: 'Delivery', value: 'Within 1 Day' }
      ]
    }
  ];


    const categories = [
    // { id: 2, title: "Relationship" },
    // { id: 3, title: "Entrepreneurship/Business" },
    // { id: 4, title: "Inspire/Motivate" },
    { id: 5, title: "Digital Skills/Tech" },
    // { id: 6, title: "Education" },
    // { id: 7, title: "Family" },
    // { id: 8, title: "Food" },
    // { id: 10, title: "Health" },
    // { id: 11, title: "Viral Gist" },
    // { id: 12, title: "Religion" },
    // { id: 13, title: "Entertainment" },
    // { id: 14, title: "Travel" },
    // { id: 15, title: "Finance & Investment" },
    // { id: 16, title: "Sports" },
    // { id: 17, title: "Beauty" },
    // { id: 18, title: "Trending News" },
    { id: 19, title: "Tech & AI Tools" },
    // { id: 20, title: "Kids Zone" },
    // { id: 21, title: "Gaming" }
  ];



    const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  const cacheKey = "all_posts";
  const firestoreKey = "mike_connect_all_posts_doc";


  // const loadFromFirestore = async () => {
  //   try {
  //     const ref = doc(db, "cache", firestoreKey);
  //     const snap = await getDoc(ref);

  //     if (snap.exists()) {
  //       const data = snap.data().posts || [];
  //       return data;
  //     }
  //     return null;
  //   } catch (err) {
  //     return null;
  //   }
  // };

  // const saveToFirestore = async (data) => {
  //   try {
  //     const ref = doc(db, "cache", firestoreKey);
  //     await setDoc(ref, { posts: data, updatedAt: Date.now() });
  //   } catch (err) {
  //     console.log("Firestore save failed");
  //   }
  // };


useEffect(() => {
  const loadPosts = async () => {
    setLoading(true);

    let cached = null;

    // ✅ 1. Try localStorage FIRST (instant if exists)
    try {
      cached = JSON.parse(localStorage.getItem(cacheKey));

      if (cached?.length) {
        setPosts(cached);
        setLoading(false); // show immediately
      }
    } catch {}

    // =========================
    // 2. Try API
    // =========================
    try {
      const res = await axios.get(
        `https://www.mikeconnect.com/mc_api/get_posts_by_category.php?category=0&t=${Date.now()}`
      );

      if (res.data?.success) {
        const allPosts = res.data.posts || [];

        setPosts(allPosts);
        localStorage.setItem(cacheKey, JSON.stringify(allPosts));

        // saveToFirestore(allPosts);

        setLoading(false);
        return;
      }
    } catch (err) {
      console.log("API failed");
    }

    // =========================
    // 3. Firestore fallback
    // =========================
    // const firestoreData = await loadFromFirestore();

    // if (firestoreData?.length) {
    //   setPosts(firestoreData);
    //   localStorage.setItem(cacheKey, JSON.stringify(firestoreData));
    // }

    setLoading(false);
  };

  loadPosts();
}, []);




const handleSendServiceNotification = async (serviceName, customerEmail) => {
  // Show loading spinner while processing
  Swal.fire({
    title: 'Processing...',
    text: 'Please wait while we record your order.',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  try {
    const response = await fetch(`${api_domain}/send_service_email.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: customerEmail,
        serviceName: serviceName
      })
    });

    const result = await response.json();

    if (result.success) {
      Swal.fire({
        icon: 'success',
        title: 'Order Successful!',
        text: `Your order for ${serviceName} has been received and activation is in progress. Please check your email inbox or spam folder for email confirmation`,
        confirmButtonColor: '#4f46e5'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Notice',
        text: result.message || 'Something went wrong. Please try again.',
        confirmButtonColor: '#4f46e5'
      });
    }
  } catch (error) {
    console.error('Network Error:', error);
    Swal.fire({
      icon: 'error',
      title: 'Connection Error',
      text: 'Unable to connect to the server. Please check your network connection.',
      confirmButtonColor: '#4f46e5'
    });
  }
};





  return (
    <Context.Provider value={{yes,domainPricings, dollarRate, api_key,api_domain,
    products,error,loading,
    wordpressProducts, plans, vpsPlans, paystack_key, emailPackages, sslPackages, categories, posts,
    handleSendServiceNotification
    }}>
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
