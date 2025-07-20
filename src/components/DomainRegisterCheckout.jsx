


// import React, { useState } from "react";
// import styled from "styled-components";
// import bg from "../Images/herobg5.jpg";
// import logo from "../Images/logo4.jpeg";
// import Swal from "sweetalert2";
// import { useNavigate, useParams } from "react-router-dom";

// const PageWrapper = styled.div`
//   background: url(${bg}) no-repeat center center/cover;
//   min-height: 100vh;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;

//   &::before {
//     content: "";
//     background: rgba(255, 255, 255, 0.8);
//     position: absolute;
//     inset: 0;
//     z-index: 1;
//   }

//   > * {
//     position: relative;
//     z-index: 2;
//   }

//   @media (max-width: 428px) {
//     padding: 1rem;
//   }
// `;

// const FormContainer = styled.form`
//   width: 100%;
//   max-width: 900px;
//   background: rgba(255, 255, 255, 0.6);
//   border-radius: 20px;
//   padding: 2.5rem;
//   box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;

// const Logo = styled.img`
//   max-width: 180px;
//   margin: 0 auto 1.5rem;
//   display: block;
// `;

// const Title = styled.h2`
//   text-align: center;
//   font-size: 2rem;
//   color: #2b32b2;
//   margin-bottom: 2rem;
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
//   gap: 1.2rem;
// `;

// const Input = styled.input`
//   padding: 1rem;
//   width: 100%;
//   border-radius: 10px;
//   border: 1px solid #cbd5e1;
//   font-size: 1rem;
//   box-sizing: border-box;

  
// `;

// const Select = styled.select`
//   padding: 1rem;
//   width: 100%;
//   border-radius: 10px;
//   border: 1px solid #cbd5e1;
//   font-size: 1rem;
// `;

// const Button = styled.button`
//   width: 100%;
//   background: #2b32b2;
//   color: white;
//   padding: 1rem;
//   border: none;
//   border-radius: 12px;
//   font-size: 1rem;
//   font-weight: bold;
// //   margin-top: 2rem;
//   cursor: pointer;

//   &:hover {
//     background: #1e2a91;
//   }

//   &:disabled {
//     background-color: #999;
//     cursor: not-allowed;
//   }
// `;

// const Error = styled.p`
//   color: red;
//   text-align: center;
//   margin-top: 1rem;
// `;


// const DomainWrapper = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   width: 100%;
// `;

// const DomainInput = styled.input`
//   flex: 2;
//   padding: 1rem;
//   border-radius: 10px;
//   border: 1px solid #cbd5e1;
//   font-size: 1rem;
//   box-sizing: border-box;
// `;

// const TldSelect = styled.select`
//   flex: 1;
//   padding: 1rem;
//   border-radius: 10px;
//   border: 1px solid #cbd5e1;
//   font-size: 1rem;
//     box-sizing: border-box;
// `;



// export default function HostingCheckoutPage() {

//     const {domainname} = useParams();
//     const navigate = useNavigate();
//     const [confirmEmail, setConfirmEmail] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('')

// const [form, setForm] = useState({
//   firstname: "",
//   lastname: "",
//   email: "",
//   password: "",
//   domain: domainname,
// //   tld: "",
//   domaintype: "register",
// //   billingcycle: "",
// //   pid: pid,
//   companyname: "",
//   address1: "",
//   address2: "",
//   city: "",
//   state: "",
//   postcode: "",
//   country: "NG", // default country code for Nigeria
//   phonenumber: ""
// });





// //    const fullDomain = form.domain.trim() + form.tld;

// //    console.log(fullDomain)

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [domainStatus, setDomainStatus] = useState(null);
//   const [checkingDomain, setCheckingDomain] = useState(false);
//   const [checkoutType, setCheckoutType]=useState(false);

// //   const checkDomainAvailability = async () => {
// //     if (!form.domain) {
// //       Swal.fire({ icon: "warning", text: "Please enter a domain." });
// //       return;
// //     }
// //     if (!form.domaintype) {
// //       Swal.fire({ icon: "warning", text: "Please select a domain type." });
// //       return;
// //     }

// //        if (!form.tld) {
// //       Swal.fire({ icon: "warning", text: "Please select a TLD." });
// //       return;
// //     }

   

// //     setCheckingDomain(true);
// //     setDomainStatus(null);

// //     Swal.fire({
// //       title: "Checking domain...",
// //       text: "Please wait while we check availability.",
// //       allowOutsideClick: false,
// //       didOpen: () => {
// //         Swal.showLoading();
// //       },
// //     });

// //     try {
// //       const res = await fetch("https://www.elexdonhost.com.ng/api_elexdonhost/check_domain.php", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ domain: fullDomain, type: form.domaintype }),
// //       });

// //       const data = await res.json();

// //       if (form.domaintype === "register") {
// //         if (data.available) {
// //           setDomainStatus("available");
// //           Swal.fire({
// //             icon: "success",
// //             title: "Domain Available",
// //             text: "Great! The domain is available for registration.",
// //           });
// //         } else {
// //           setDomainStatus("unavailable");
// //           Swal.fire({
// //             icon: "error",
// //             title: "Domain Unavailable",
// //             text: "Sorry, that domain is not available for registration.",
// //           });
// //         }
// //       } else if (form.domaintype === "transfer" || form.domaintype === "owndomain") {
// //         if (data.available) {
// //           // If domain is available, it means NOT registered, so can't transfer/use own domain
// //           setDomainStatus("unavailable");
// //           Swal.fire({
// //             icon: "error",
// //             title: "Domain Not Registered",
// //             text: "This domain is not registered and cannot be transferred or used as your own.",
// //           });
// //         } else {
// //           setDomainStatus("available");
// //           Swal.fire({
// //             icon: "success",
// //             title: "Domain Registered",
// //             text: "The domain is registered and can be transferred or used.",
// //           });
// //         }
// //       } else {
// //         setDomainStatus("error");
// //         Swal.fire({
// //           icon: "error",
// //           title: "Error",
// //           text: "Invalid domain type selected.",
// //         });
// //       }
// //     } catch (err) {
// //       console.error("Domain check error:", err);
// //       setDomainStatus("error");
// //       Swal.fire({
// //         icon: "error",
// //         title: "Error",
// //         text: "There was an error checking the domain. Please try again.",
// //       });
// //     } finally {
// //       setCheckingDomain(false);
// //     }
// //   };






//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     // if (e.target.name === "domain" || e.target.name === "domaintype" || e.target.name ==='tld') {
//     //   // Reset domain status on change to force new check
//     //   setDomainStatus(null);
//     //   setError(null);
//     // }
//   };









// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setError(null);

//   if(form.email!==confirmEmail&&!checkoutType){
//     Swal.fire({text:"Emails do not match"});
//     return;
//   }

//    if(form.password!==confirmPassword&&!checkoutType){
//     Swal.fire({text:"Passwords do not match"});
//     return;
//   }

// // alert(checkoutType?'checkout2':'checkout')
// // return;


//   Swal.fire({
//     title: "Processing your order...",
//     allowOutsideClick: false,
//     didOpen: () => {
//       Swal.showLoading();
//     },
//   });

//   // Build full domain
// //   const fullDomain = form.domain.trim() + form.tld;

//   // Determine endpoint and payload
//   const endpoint = checkoutType
//     ? "https://www.elexdonhost.com.ng/api_elexdonhost/checkout2.php" // Has account
//     : "https://www.elexdonhost.com.ng/api_elexdonhost/checkout.php"; // New user

//   // Construct payload
//   const payload = checkoutType
//     ? {
//         email: form.email,
//         password: form.password,
//         domain: form.domain,
//         domaintype: form.domaintype,
//         // billingcycle: form.billingcycle,
//         // pid: form.pid,
//       }
//     : {
//         form
       
//       };



//   try {
//     const res = await fetch(endpoint, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     const data = await res.json();
//     Swal.close();

//     if (data.success) {
//       Swal.fire({
//         icon: "success",
//         title: "Order Successful",
//         text: "Redirecting...",
//         timer: 2000,
//         showConfirmButton: false,
//       });
//       navigate(`/invoice/${data.invoiceId}`);
//     } else {
//       setError(data.message || "Checkout failed.");
//       Swal.fire({
//         icon: "error",
//         title: "Checkout Failed",
//         text: data.details?.message || "An error occurred during checkout.",
//       });
//     }
//   } catch (err) {
//     Swal.close();
//     console.error(err);
//     setError("Something went wrong.");
//     Swal.fire({
//       icon: "error",
//       title: "Error",
//       text: "Something went wrong. Please try again.",
//     });
//   } finally {
//     setLoading(false);
//   }
// };





//   return (
//     <PageWrapper>
//       <FormContainer onSubmit={handleSubmit}>
//         <Logo src={logo} alt="Elexdon Host Logo" />
//         <Title>Complete Your Hosting Order</Title>

//       <div style={{ marginBottom: "1rem" }}>
//   <label >
//     <p>Do you already have an account? Check the box below</p>
//     <input
//       type="checkbox"
//       checked={checkoutType}
//       onChange={(e) => setCheckoutType(e.target.checked)}
//       style={{ width: "20px", height: "20px" }}
//     />
//     I already have an account
//   </label>
// </div>


      


//         <Grid>
//   {/* Common fields for both checkout types */}
//   <Input
//     name="email"
//     type="email"
//     placeholder="Email Address"
//     required
//     onChange={handleChange}
//     value={form.email}
//   />
//    {!checkoutType && (
//           <Input
//     name="confirmEmail"
//     type="email"
//     placeholder="Confirm Email"
//     required
//     onChange={(e)=>setConfirmEmail(e.target.value)}
//     value={confirmEmail}
//   />
//    )}
  
//   <Input
//     name="password"
//     type="password"
//     placeholder="Password"
//     required
//     onChange={handleChange}
//     value={form.password}
//   />
//    {!checkoutType && (
//           <Input
//     name="confirmPassword"
//     type="password"
//     placeholder="Confirm Password"
//     required
//     onChange={(e)=>setConfirmPassword(e.target.value)}
//     value={confirmPassword}
//   />
//    )}

//   {/* Only show these fields if it's a new user */}
//   {!checkoutType && (
//     <>
//       <Input
//         name="firstname"
//         placeholder="First Name"
//         required
//         onChange={handleChange}
//         value={form.firstname}
//       />
//       <Input
//         name="lastname"
//         placeholder="Last Name"
//         required
//         onChange={handleChange}
//         value={form.lastname}
//       />
//       <Input
//   name="companyname"
//   placeholder="Company Name"
//   onChange={handleChange}
//   value={form.companyname}
// />

// <Input
//   name="address1"
//   placeholder="Address 1"
//   required
//   onChange={handleChange}
//   value={form.address1}
// />

// <Input
//   name="address2"
//   placeholder="Address 2"
//   onChange={handleChange}
//   value={form.address2}
// />

// <Input
//   name="city"
//   placeholder="City"
//   required
//   onChange={handleChange}
//   value={form.city}
// />

// <Input
//   name="state"
//   placeholder="State/Region"
//   required
//   onChange={handleChange}
//   value={form.state}
// />

// <Input
//   name="postcode"
//   placeholder="Postcode"
//   required
//   onChange={handleChange}
//   value={form.postcode}
// />

// <Select
//   name="country"
//   onChange={handleChange}
//   required
//   value={form.country}
// >
//   <option value="">-- Select Country --</option>
//   <option value="NG">Nigeria</option>
//   <option value="GH">Ghana</option>
//   <option value="US">United States</option>
//   <option value="GB">United Kingdom</option>
//   {/* Add more as needed */}
// </Select>

// <Input
//   name="phonenumber"
//   placeholder="Phone Number"
//   required
//   onChange={handleChange}
//   value={form.phonenumber}
// />

//     </>
//   )}

//   {/* <Select name="billingcycle" onChange={handleChange} required value={form.billingcycle}>
//     <option value="">-- Select billing cycle --</option>
//     <option value="monthly">Monthly</option>
//     <option value="annually">Annually</option>
//   </Select>

//   <Select name="domaintype" onChange={handleChange} required value={form.domaintype}>
//     <option value="">-- Select domain type --</option>
//     <option value="register">Register New Domain</option>
//     <option value="transfer">Transfer Existing Domain</option>
//     <option value="owndomain">Use Own Domain</option>
//   </Select> */}

//   {/* <Input
//     name="domain"
//     placeholder="Enter domain (without TLD)"
//     required
//     onChange={handleChange}
//     value={form.domain}
//   /> */}

//   {/* <Select name="tld" value={form.tld} onChange={handleChange} required>
//     <option>-- Select TLD --</option>
//     <option value=".com">.com</option>
//     <option value=".net">.net</option>
//     <option value=".org">.org</option>

//     <option value=".info">.info</option>
//     <option value=".biz">.biz</option>
//       <option value=".com.ng">.com.ng</option>
//     <option value=".us">.us</option>
//       <option value=".ng">.ng</option>
//         <option value=".edu.ng">.edu.ng</option>
//     <option value=".eu">.eu</option>
//     <option value=".sch.ng">.sch.ng</option>
// <option value=".uk">.uk</option>
//     <option value=".club">.club</option>

//   </Select> */}

//   {/* <Button
//     type="button"
//     onClick={checkDomainAvailability}
//     disabled={checkingDomain}
//   >
//     {checkingDomain ? "Checking..." : "Check Domain"}
//   </Button> */}

//   {/* {domainStatus === "available" && (
//     <p style={{ color: "green" }}>
//       {form.domaintype === "register"
//         ? "✅ Domain is available for registration"
//         : "✅ Domain is registered and ready"}
//     </p>
//   )}
//   {domainStatus === "unavailable" && (
//     <p style={{ color: "red" }}>
//       {form.domaintype === "register"
//         ? "❌ Domain is not available for registration"
//         : "❌ Domain is not registered"}
//     </p>
//   )}
//   {domainStatus === "error" && (
//     <p style={{ color: "orangered" }}>⚠️ Error checking domain</p>
//   )} */}
// </Grid>


//           <Button type="submit" disabled={loading} style={{marginTop:"20px"}}>
//             {loading ? "Processing..." : "Proceed with Order"}
//           </Button>
      

//         {error && <Error>{error}</Error>}
//       </FormContainer>
//     </PageWrapper>
//   );
// }





import React, { useState } from "react";
import styled from "styled-components";
import bg from "../Images/herobg5.jpg";
import logo from "../Images/logo4.jpeg";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import PricingModalForDomain from "./PricingModalForDomain";
import DomainSearch from "./DomainSearch";
import PricingModalForDomain2 from "./PricingModalForDomain2";
import countryOptions from "./CountryCodes";

const PageWrapper = styled.div`
  background: url(${bg}) no-repeat center center/cover;
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top:80px;
  &::before {
    content: "";
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    inset: 0;
    z-index: 1;
  }
  > * {
    // position: relative;
    z-index: 2;
  }
`;

const FormContainer = styled.form`
  width: 100%;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  max-width: 180px;
  margin: 0 auto 1.5rem;
  display: block;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #2b32b2;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  box-sizing:border-box;
`;

const Select = styled.select`
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  background: #2b32b2;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 2rem;
  &:hover {
    background: #1e2a91;
  }
  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

const Error = styled.p`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;

export default function DomainRegisterCheckout() {
  const { domainname , domain , tld} = useParams();
  const navigate = useNavigate();

  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checkoutType, setCheckoutType] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen]=useState(false)

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    domain: domainname,
    domaintype: "register",
    companyname: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    country: "NG",
    phonenumber: ""
  });

  console.log(form)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (reference) => {

    setError(null);

    if (!checkoutType) {
      if (form.email !== confirmEmail) {
        Swal.fire({ text: "Emails do not match" });
        return;
      }
      if (form.password !== confirmPassword) {
        Swal.fire({ text: "Passwords do not match" });
        return;
      }
    }

    Swal.fire({
      title: "Processing your order...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    const endpoint = checkoutType
      ? "https://www.elexdonhost.com.ng/api_elexdonhost/domain_checkout2.php"
      : "https://www.elexdonhost.com.ng/api_elexdonhost/domain_checkout.php";

    const payload = checkoutType
      ? {
          email: form.email,
          password: form.password,
          domain: form.domain,
          domaintype: form.domaintype
        }
      : { ...form };

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      Swal.close();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Order Successful",
          text: "Redirecting...",
          timer: 2000,
          showConfirmButton: false,
        });
        // navigate(`/invoice/${data.invoiceId}`);
        markInvoiceAsPaid(data.invoiceId, reference)


      } else {
        setError(data.message || "Checkout failed.");
        Swal.fire({
          icon: "error",
          title: "Checkout Failed",
          text: data.details?.message || "An error occurred during checkout.",
        });
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };




const markInvoiceAsPaid = async (invoiceId, reference, amount = null) => {
  const endpoint = 'https://www.elexdonhost.com.ng/api_elexdonhost/mark_invoice_paid.php'; // Change this to your actual PHP script path

  const payload = {
    invoiceid: invoiceId,
    reference: reference
  };

  if (amount) {
    payload.amount = amount;
  }

  // Show loading
  Swal.fire({
    title: 'Processing...',
    text: 'Marking invoice as paid, please wait...',
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    if (result.success) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: result.message || 'Invoice marked as paid'
      });
      setIsOpen(false);
      navigate('/login')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Failed',
        text: result.message || 'Could not mark invoice as paid'
      });
    }
  } catch (error) {
    console.error('Error:', error);
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An unexpected error occurred'
    });
  }
};







const handleSubmit1=(e)=>{
e.preventDefault();
setIsOpen(true);
}


  return (
    <PageWrapper>
      <FormContainer onSubmit={handleSubmit1}>
        <Logo src={logo} alt="Elexdon Host Logo" />
        <Title>Complete Your Domain Registration</Title>
<Title>Domain Name: <span style={{color:"purple", textDecoration:"underline"}}>{domainname}</span></Title>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            <p>Do you already have an account? Check the box below</p>
            <input
              type="checkbox"
              checked={checkoutType}
              onChange={(e) => setCheckoutType(e.target.checked)}
              style={{ width: "20px", height: "20px" }}
            />
            I already have an account
          </label>
        </div>

        <Grid>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            value={form.email}
          />
          {!checkoutType && (
            <Input
              name="confirmEmail"
              type="email"
              placeholder="Confirm Email"
              required
              onChange={(e) => setConfirmEmail(e.target.value)}
              value={confirmEmail}
            />
          )}
          <Input
            name="password"
            type="password"
            placeholder="Password"
            required
            onChange={handleChange}
            value={form.password}
          />
          {!checkoutType && (
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          )}

          {!checkoutType && (
            <>
              <Input
                name="firstname"
                placeholder="First Name"
                required
                onChange={handleChange}
                value={form.firstname}
              />
              <Input
                name="lastname"
                placeholder="Last Name"
                required
                onChange={handleChange}
                value={form.lastname}
              />
              <Input
                name="companyname"
                placeholder="Company Name"
                onChange={handleChange}
                value={form.companyname}
              />
              <Input
                name="address1"
                placeholder="Address 1"
                required
                onChange={handleChange}
                value={form.address1}
              />
              <Input
                name="address2"
                placeholder="Address 2"
                onChange={handleChange}
                value={form.address2}
              />
              <Input
                name="city"
                placeholder="City"
                required
                onChange={handleChange}
                value={form.city}
              />
              <Input
                name="state"
                placeholder="State/Region"
                required
                onChange={handleChange}
                value={form.state}
              />
              <Input
                name="postcode"
                placeholder="Postcode"
                required
                onChange={handleChange}
                value={form.postcode}
              />
              <Select
                name="country"
                required
                onChange={handleChange}
                value={form.country}
              >
                <option value="">-- Select Country --</option>
  <option value="AF">Afghanistan</option>
  <option value="AL">Albania</option>
  <option value="DZ">Algeria</option>
  <option value="AD">Andorra</option>
  <option value="AO">Angola</option>
  <option value="AG">Antigua and Barbuda</option>
  <option value="AR">Argentina</option>
  <option value="AM">Armenia</option>
  <option value="AU">Australia</option>
  <option value="AT">Austria</option>
  <option value="AZ">Azerbaijan</option>
  <option value="BS">Bahamas</option>
  <option value="BH">Bahrain</option>
  <option value="BD">Bangladesh</option>
  <option value="BB">Barbados</option>
  <option value="BY">Belarus</option>
  <option value="BE">Belgium</option>
  <option value="BZ">Belize</option>
  <option value="BJ">Benin</option>
  <option value="BT">Bhutan</option>
  <option value="BO">Bolivia</option>
  <option value="BA">Bosnia and Herzegovina</option>
  <option value="BW">Botswana</option>
  <option value="BR">Brazil</option>
  <option value="BN">Brunei</option>
  <option value="BG">Bulgaria</option>
  <option value="BF">Burkina Faso</option>
  <option value="BI">Burundi</option>
  <option value="CV">Cabo Verde</option>
  <option value="KH">Cambodia</option>
  <option value="CM">Cameroon</option>
  <option value="CA">Canada</option>
  <option value="CF">Central African Republic</option>
  <option value="TD">Chad</option>
  <option value="CL">Chile</option>
  <option value="CN">China</option>
  <option value="CO">Colombia</option>
  <option value="KM">Comoros</option>
  <option value="CG">Congo, Republic of the</option>
  <option value="CD">Congo, Democratic Republic of</option>
  <option value="CR">Costa Rica</option>
  <option value="CI">Côte d’Ivoire</option>
  <option value="HR">Croatia</option>
  <option value="CU">Cuba</option>
  <option value="CY">Cyprus</option>
  <option value="CZ">Czech Republic</option>
  <option value="DK">Denmark</option>
  <option value="DJ">Djibouti</option>
  <option value="DM">Dominica</option>
  <option value="DO">Dominican Republic</option>
  <option value="EC">Ecuador</option>
  <option value="EG">Egypt</option>
  <option value="SV">El Salvador</option>
  <option value="GQ">Equatorial Guinea</option>
  <option value="ER">Eritrea</option>
  <option value="EE">Estonia</option>
  <option value="SZ">Eswatini</option>
  <option value="ET">Ethiopia</option>
  <option value="FJ">Fiji</option>
  <option value="FI">Finland</option>
  <option value="FR">France</option>
  <option value="GA">Gabon</option>
  <option value="GM">Gambia</option>
  <option value="GE">Georgia</option>
  <option value="DE">Germany</option>
  <option value="GH">Ghana</option>
  <option value="GR">Greece</option>
  <option value="GD">Grenada</option>
  <option value="GT">Guatemala</option>
  <option value="GN">Guinea</option>
  <option value="GW">Guinea-Bissau</option>
  <option value="GY">Guyana</option>
  <option value="HT">Haiti</option>
  <option value="HN">Honduras</option>
  <option value="HU">Hungary</option>
  <option value="IS">Iceland</option>
  <option value="IN">India</option>
  <option value="ID">Indonesia</option>
  <option value="IR">Iran</option>
  <option value="IQ">Iraq</option>
  <option value="IE">Ireland</option>
  <option value="IL">Israel</option>
  <option value="IT">Italy</option>
  <option value="JM">Jamaica</option>
  <option value="JP">Japan</option>
  <option value="JO">Jordan</option>
  <option value="KZ">Kazakhstan</option>
  <option value="KE">Kenya</option>
  <option value="KI">Kiribati</option>
  <option value="KP">Korea, North</option>
  <option value="KR">Korea, South</option>
  <option value="XK">Kosovo</option>
  <option value="KW">Kuwait</option>
  <option value="KG">Kyrgyzstan</option>
  <option value="LA">Laos</option>
  <option value="LV">Latvia</option>
  <option value="LB">Lebanon</option>
  <option value="LS">Lesotho</option>
  <option value="LR">Liberia</option>
  <option value="LY">Libya</option>
  <option value="LI">Liechtenstein</option>
  <option value="LT">Lithuania</option>
  <option value="LU">Luxembourg</option>
  <option value="MG">Madagascar</option>
  <option value="MW">Malawi</option>
  <option value="MY">Malaysia</option>
  <option value="MV">Maldives</option>
  <option value="ML">Mali</option>
  <option value="MT">Malta</option>
  <option value="MH">Marshall Islands</option>
  <option value="MR">Mauritania</option>
  <option value="MU">Mauritius</option>
  <option value="MX">Mexico</option>
  <option value="FM">Micronesia</option>
  <option value="MD">Moldova</option>
  <option value="MC">Monaco</option>
  <option value="MN">Mongolia</option>
  <option value="ME">Montenegro</option>
  <option value="MA">Morocco</option>
  <option value="MZ">Mozambique</option>
  <option value="MM">Myanmar</option>
  <option value="NA">Namibia</option>
  <option value="NR">Nauru</option>
  <option value="NP">Nepal</option>
  <option value="NL">Netherlands</option>
  <option value="NZ">New Zealand</option>
  <option value="NI">Nicaragua</option>
  <option value="NE">Niger</option>
  <option value="NG">Nigeria</option>
  <option value="MK">North Macedonia</option>
  <option value="NO">Norway</option>
  <option value="OM">Oman</option>
  <option value="PK">Pakistan</option>
  <option value="PW">Palau</option>
  <option value="PA">Panama</option>
  <option value="PG">Papua New Guinea</option>
  <option value="PY">Paraguay</option>
  <option value="PE">Peru</option>
  <option value="PH">Philippines</option>
  <option value="PL">Poland</option>
  <option value="PT">Portugal</option>
  <option value="QA">Qatar</option>
  <option value="RO">Romania</option>
  <option value="RU">Russia</option>
  <option value="RW">Rwanda</option>
  <option value="KN">Saint Kitts and Nevis</option>
  <option value="LC">Saint Lucia</option>
  <option value="VC">Saint Vincent and the Grenadines</option>
  <option value="WS">Samoa</option>
  <option value="SM">San Marino</option>
  <option value="ST">São Tomé and Príncipe</option>
  <option value="SA">Saudi Arabia</option>
  <option value="SN">Senegal</option>
  <option value="RS">Serbia</option>
  <option value="SC">Seychelles</option>
  <option value="SL">Sierra Leone</option>
  <option value="SG">Singapore</option>
  <option value="SK">Slovakia</option>
  <option value="SI">Slovenia</option>
  <option value="SB">Solomon Islands</option>
  <option value="SO">Somalia</option>
  <option value="ZA">South Africa</option>
  <option value="ES">Spain</option>
  <option value="LK">Sri Lanka</option>
  <option value="SD">Sudan</option>
  <option value="SR">Suriname</option>
  <option value="SE">Sweden</option>
  <option value="CH">Switzerland</option>
  <option value="SY">Syria</option>
  <option value="TW">Taiwan</option>
  <option value="TJ">Tajikistan</option>
  <option value="TZ">Tanzania</option>
  <option value="TH">Thailand</option>
  <option value="TL">Timor-Leste</option>
  <option value="TG">Togo</option>
  <option value="TO">Tonga</option>
  <option value="TT">Trinidad and Tobago</option>
  <option value="TN">Tunisia</option>
  <option value="TR">Turkey</option>
  <option value="TM">Turkmenistan</option>
  <option value="TV">Tuvalu</option>
  <option value="UG">Uganda</option>
  <option value="UA">Ukraine</option>
  <option value="AE">United Arab Emirates</option>
  <option value="GB">United Kingdom</option>
  <option value="US">United States</option>
  <option value="UY">Uruguay</option>
  <option value="UZ">Uzbekistan</option>
  <option value="VU">Vanuatu</option>
  <option value="VE">Venezuela</option>
  <option value="VN">Vietnam</option>
  <option value="YE">Yemen</option>
  <option value="ZM">Zambia</option>
  <option value="ZW">Zimbabwe</option>
              </Select>
              {/* <Input
                name="phonenumber"
                placeholder="Phone Number"
                required
                onChange={handleChange}
                value={form.phonenumber}
              /> */}

              <Select
                // name="countryCode"
                required
                // onChange={handleChange}
                // value={form.country}
              >
                <option value="">-- Select Country Code --</option>
                {[...countryOptions]
                  .sort((a, b) => a.code.localeCompare(b.code))
                  .map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code}
                    </option>
                  ))}
              </Select>

<Input
  name="phonenumber"
  placeholder="eg 706453789"
  required
  onChange={(e) => {
    let value = e.target.value;

    // Allow only digits (removes +, letters, symbols, spaces, etc.)
    value = value.replace(/\D/g, '');

    setForm((prev) => ({
      ...prev,
      phonenumber: value,
    }));
  }}
  value={form.phonenumber}
/>

            </>
          )}
        </Grid>

        {/* <Button type="submit" disabled={loading}>
          {loading ? "Processing..." : "Proceed with Order"}
        </Button> */}

         <Button type="submit" >
          Proceed
        </Button>

        {error && <Error>{error}</Error>}
        {/* <PricingModalForDomain/> */}
      </FormContainer>

     {/* {isOpen&& <PricingModalForDomain onClose={()=>setIsOpen(false)}/>} */}
      {/* <PricingModalForDomain/> */}
      {isOpen&&<PricingModalForDomain2  onClose={()=>setIsOpen(false)} domain={domain} tld={tld} handleSubmit={handleSubmit} email={form.email} checkoutType={checkoutType}/>}
    </PageWrapper>
  );
}
