
// import React, { useState } from "react";
// import styled from "styled-components";
// import { Fade } from "react-awesome-reveal";

// // ---------- Styled Components ----------
// const PageWrapper = styled.div`
//   font-family: "Inter", sans-serif;
//   padding: 2rem;
//   max-width: 900px;
//   margin: auto;
//   padding-top:100px;
// `;

// const Title = styled.h1`
//   text-align: center;
//   color: #0d47a1;
//   margin-bottom: 1rem;
// `;

// const SearchBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 2rem;

//   input {
//     width: 100%;
//     max-width: 500px;
//     padding: 0.8rem 1rem;
//     border: 2px solid #ddd;
//     border-radius: 8px;
//     font-size: 1rem;
//     margin-bottom: 1rem;
//   }

//   button {
//     background: #ff6b00;
//     color: white;
//     border: none;
//     padding: 0.8rem 1.5rem;
//     border-radius: 8px;
//     cursor: pointer;
//     font-size: 1rem;
//     transition: 0.3s;

//     &:hover {
//       background: #e65a00;
//     }
//   }
// `;

// const ResultBox = styled.div`
//   background: #f9f9f9;
//   padding: 1.5rem;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//   margin-top: 2rem;
//   white-space: pre-wrap;
//   font-family: monospace;
//   font-size: 0.9rem;
// `;

// const ErrorMsg = styled.p`
//   color: red;
//   text-align: center;
// `;

// // ---------- Component ----------
// export default function WhoisLookup() {
//   const [domain, setDomain] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [whoisData, setWhoisData] = useState(null);
//   const [error, setError] = useState("");

//   const handleLookup = async () => {
//     if (!domain) {
//       setError("Please enter a domain name");
//       return;
//     }
//     setError("");
//     setLoading(true);
//     setWhoisData(null);

//     try {
//       // 🔑 Replace YOUR_API_KEY with your WhoisXML API key
//       const response = await fetch(
//         `https://whoisxmlapi.com/whoisserver/Whois?apiKey=YOUR_API_KEY&domainName=${domain}&outputFormat=JSON`
//       );

//       const data = await response.json();
//       setWhoisData(data);
//     } catch (err) {
//       setError("Error fetching WHOIS details. Try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <PageWrapper>
//       <Fade>
//         <Title>WHOIS Lookup</Title>
//         <p style={{ textAlign: "center", marginBottom: "2rem" }}>
//           Enter a domain name to see its registration details.
//         </p>

//         <SearchBox>
//           <input
//             type="text"
//             placeholder="e.g. elexdontech.com"
//             value={domain}
//             onChange={(e) => setDomain(e.target.value)}
//           />
//           <button onClick={handleLookup} disabled={loading}>
//             {loading ? "Looking up..." : "Search WHOIS"}
//           </button>
//         </SearchBox>

//         {error && <ErrorMsg>{error}</ErrorMsg>}

//         {whoisData && (
//           <ResultBox>
//             <strong>Registrar:</strong>{" "}
//             {whoisData?.WhoisRecord?.registryData?.registrarName || "N/A"}{"\n"}
//             <strong>Created:</strong>{" "}
//             {whoisData?.WhoisRecord?.registryData?.createdDate || "N/A"}{"\n"}
//             <strong>Expires:</strong>{" "}
//             {whoisData?.WhoisRecord?.registryData?.expiresDate || "N/A"}{"\n"}
//             <strong>Status:</strong>{" "}
//             {whoisData?.WhoisRecord?.registryData?.status || "N/A"}{"\n"}
//             <strong>Nameservers:</strong>{" "}
//             {whoisData?.WhoisRecord?.registryData?.nameServers?.hostNames?.join(
//               ", "
//             ) || "N/A"}
//           </ResultBox>
//         )}
//       </Fade>
//     </PageWrapper>
//   );
// }




import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";

// ---------- Animations ----------
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// ---------- Styled Components ----------
const PageWrapper = styled.div`
  font-family: "Inter", sans-serif;
  padding: 2rem;
  max-width: 100%;
  margin: auto;
  padding-top: 100px;
  background:rgba(0,0,255,0.2);
  
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  background: linear-gradient(90deg, #0d47a1, #1976d2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #555;
  font-size: 1.1rem;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

  input {
    width: 100%;
    max-width: 500px;
    padding: 1rem 1.2rem;
    border: 2px solid #ddd;
    border-radius: 12px;
    font-size: 1rem;
    margin-bottom: 1rem;
    outline: none;
    transition: 0.3s;

    &:focus {
      border-color: #1976d2;
      box-shadow: 0 0 8px rgba(25, 118, 210, 0.3);
    }
  }

  button {
    background: linear-gradient(90deg, #ff6b00, #ff9100);
    color: white;
    border: none;
    padding: 0.9rem 1.6rem;
    border-radius: 12px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
      background: linear-gradient(90deg, #e65a00, #ff6b00);
      transform: translateY(-2px);
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1976d2;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  animation: ${spin} 1s linear infinite;
  margin: 1rem auto;
`;

const ResultBox = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  margin-top: 2rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  strong {
    color: #0d47a1;
  }
`;

const ErrorMsg = styled.p`
  color: red;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
`;

// ---------- Component ----------
export default function WhoisLookup() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [whoisData, setWhoisData] = useState(null);
  const [error, setError] = useState("");

  const handleLookup = async () => {
    if (!domain) {
      setError("⚠️ Please enter a domain name");
      return;
    }
    setError("");
    setLoading(true);
    setWhoisData(null);

    try {
      // 🔑 Replace YOUR_API_KEY with your WhoisXML API key
      const response = await fetch(
        `https://whoisxmlapi.com/whoisserver/Whois?apiKey=YOUR_API_KEY&domainName=${domain}&outputFormat=JSON`
      );

      const data = await response.json();
      setWhoisData(data);
    } catch (err) {
      setError("❌ Error fetching WHOIS details. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Fade>
        <Hero>
          <Title>WHOIS Lookup</Title>
          <Subtitle>
            Find complete domain registration details instantly 🚀
          </Subtitle>
        </Hero>

        <SearchBox>
          <input
            type="text"
            placeholder="e.g. elexdontech.com"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <button onClick={handleLookup} disabled={loading}>
            {loading ? "Looking up..." : "Search WHOIS"}
          </button>
        </SearchBox>

        {loading && <Loader />}

        {error && <ErrorMsg>{error}</ErrorMsg>}

        {whoisData && (
          <ResultBox>
            <Row>
              <strong>Registrar:</strong>
              <span>
                {whoisData?.WhoisRecord?.registryData?.registrarName || "N/A"}
              </span>
            </Row>
            <Row>
              <strong>Created:</strong>
              <span>
                {whoisData?.WhoisRecord?.registryData?.createdDate || "N/A"}
              </span>
            </Row>
            <Row>
              <strong>Expires:</strong>
              <span>
                {whoisData?.WhoisRecord?.registryData?.expiresDate || "N/A"}
              </span>
            </Row>
            <Row>
              <strong>Status:</strong>
              <span>
                {whoisData?.WhoisRecord?.registryData?.status || "N/A"}
              </span>
            </Row>
            <Row>
              <strong>Nameservers:</strong>
              <span>
                {whoisData?.WhoisRecord?.registryData?.nameServers?.hostNames?.join(
                  ", "
                ) || "N/A"}
              </span>
            </Row>
          </ResultBox>
        )}
      </Fade>
    </PageWrapper>
  );
}

