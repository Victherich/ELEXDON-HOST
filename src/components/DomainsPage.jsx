
import React from 'react';
import styled from 'styled-components';
import domainheroimg from '../Images/domainsbg.jpg'
import useAnimateOnScroll from './useAnimateOnScroll';
import 'animate.css';
import DomainNameSpace from './DomainNameSpace';
import DomainSearch from './DomainSearch';

const HeroSection = styled.section`
  background-image: url(${domainheroimg});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 20px;
  text-align: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
   text-transform:uppercase;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
`;

const SearchBox = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  input {
    padding: 15px;
    font-size: 1rem;
    border: none;
    width: 300px;
    border-radius: 8px 0 0 8px;
  }
  button {
    padding: 15px 25px;
    border: none;
    background: #00aaff;
    color: white;
    font-size: 1rem;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    transition: background 0.3s;
    &:hover {
      background: #008ecc;
    }
  }
`;

const TLDSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  background: #f8f9fc;

`;

const TLDTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #2B32B2;
`;

const TLDGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const TLDCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  min-width: 150px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 30px;
  border-radius: 12px;
  background: #1e1e2f;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    overflow-x: scroll;
    position: relative;
  }

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 10px;
  }
`;

const DomainTable = styled.table`
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
  color: #f5f5f5;

  th, td {
    padding: 16px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #333;
  }

  th {
    background: #2b2b3d;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.85rem;
  }

  tr:nth-child(even) {
    background-color: #252539;
  }

  tr:hover {
    background-color: #33334d;
    transition: background 0.3s;
  }

  td:first-child, th:first-child {
    background: #1b1b2c;
    position: sticky;
    left: 0;
    z-index: 1;
    text-align: left;
  }

  @media (max-width: 768px) {
    th, td {
      font-size: 0.85rem;
    }

    td:first-child, th:first-child {
      min-width: 120px;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
    }
  }
`;



const PricingSection = styled.section`
  padding: 60px 20px;
  background:lightgray;

  h2{
    color: #2B32B2;
  }
`;

const DomainsPage = () => {

 const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const tldTitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle1 = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle2 = useAnimateOnScroll('animate__fadeInUp animate__slower');
const pricingTitle3 = useAnimateOnScroll('animate__fadeInUp animate__slower');

  return (
    <div>
      <HeroSection>
        <Overlay />
        <HeroContent>
          <Title ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Domain Registration</Title>
          <Subtitle ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Join our awesome customers. Domain is where it starts. Choose your domain today!</Subtitle>
          {/* <SearchBox>
            <input type="text" placeholder="Search your domain (e.g. yourname.com)" />
            <button>Search</button>
          </SearchBox> */}
        </HeroContent>

      </HeroSection>
      <DomainSearch/>
{/* 
      <TLDSection>
        <TLDTitle  ref={tldTitleAnim.ref} className={tldTitleAnim.className}>Popular TLDs</TLDTitle>
        <TLDGrid>
          {['.com', '.net', '.org', '.com.ng', '.ng', '.store'].map((tld) => (
            <TLDCard key={tld}>
              <h3>{tld}</h3>
             
            </TLDCard>
          ))}
        </TLDGrid>
      </TLDSection> */}

      <DomainNameSpace/>

      <PricingSection>
        <h2 ref={pricingTitle1.ref} className={pricingTitle1.className}>Domain Pricing</h2>
        <TableWrapper>
          <DomainTable>
          <thead>
            <tr>
              <th>TLD</th>
              <th>Years</th>
              <th>Register</th>
              <th>Transfer</th>
              <th>Renew</th>
            </tr>
          </thead>
        <tbody>
  {[
    ['.com', '1 Year', '₦28500.00', '₦28500.00', '₦28500.00'],
    ['.com.ng', '1 Year', '₦13500.00', '₦13500.00', '₦13500.00'],
    ['.ng', '1 Year', '₦17500.00', '₦17500.00', '₦18000.00'],
    ['.store', '1 Year', '₦7500.00', '₦7500.00', '₦7500.00'],
    ['.website', '1 Year', '₦7500.00', '₦7500.00', '₦7500.00'],
    ['.us', '1 Year', '₦17500.00', '₦17500.00', '₦17500.00'],
    ['.net', '1 Year', '₦40000.00', '₦40000.00', '₦40000.00'],
     ['.tech', '1 Year', '₦120000.00', '₦120000.00', '₦120000.00']
  ].map(([tld, years, reg, trans, renew]) => (
    <tr key={tld}>
      <td>{tld}</td>
      <td>{years}</td>
      <td>{reg}</td>
      <td>{trans}</td>
      <td>{renew}</td>
    </tr>
  ))}
</tbody>

        </DomainTable>
        </TableWrapper>

      </PricingSection>



        <PricingSection>
        <h2 ref={pricingTitle2.ref} className={pricingTitle2.className} >Domain Pricing</h2>
       <TableWrapper>
           <DomainTable>
          <thead>
            <tr>
              <th>TLD</th>
              <th>Years</th>
              <th>Register</th>
              <th>Transfer</th>
              <th>Renew</th>
            </tr>
          </thead>
  <tbody>
  {[
    ['.org', '1 Year', '₦30000.00', '₦30000.00', '₦30000.00'],
    ['.ca', '1 Year', '₦5500.00', '₦5500.00', '₦5500.00'],
    ['.co.uk', '1 Year', '₦17500.00', '₦17500.00', '₦17500.00'],
    ['.uk', '1 Year', '₦18500.00', '₦18500.00', '₦18500.00'],
    ['.sch.ng', '1 Year', '₦6000.00', '₦6000.00', '₦6000.00'],
    ['.mobi.ng', '1 Year', '₦4000.00', '₦4000.00', '₦4000.00'],
    ['.net.ng', '1 Year', '₦3500.00', '₦3500.00', '₦4000.00']
  ].map(([tld, years, reg, trans, renew]) => (
    <tr key={tld}>
      <td>{tld}</td>
      <td>{years}</td>
      <td>{reg}</td>
      <td>{trans}</td>
      <td>{renew}</td>
    </tr>
  ))}
</tbody>


        </DomainTable>
       </TableWrapper>
      </PricingSection>

         <PricingSection>
        <h2 ref={pricingTitle3.ref} className={pricingTitle3.className}>Domain Pricing</h2>
       <TableWrapper>
           <DomainTable>
          <thead>
            <tr>
              <th>TLD</th>
              <th>Years</th>
              <th>Register</th>
              <th>Transfer</th>
              <th>Renew</th>
            </tr>
          </thead>
<tbody>
  {[
    ['.info', '1 Year', '₦3000.00', '₦4500.00', '₦4500.00'],
    ['.gov.ng', '1 Year', '₦7500.00', '₦7500.00', '₦8000.00'],
    ['.edu.ng', '1 Year', '₦50000.00', '₦50000.00', '₦50000.00'],
    ['.me', '1 Year', '₦62000.00', '₦62000.00', '₦62000.00'],
    ['.biz', '1 Year', '₦14500.00', '₦25500.00', '₦25500.00'],
    ['.tv', '1 Year', '₦45000.00', '₦55500.00', '₦56000.00'],
    ['.org.ng', '1 Year', '₦3500.00', '₦3500.00', '₦3500.00']
  ].map(([tld, years, reg, trans, renew]) => (
    <tr key={tld}>
      <td>{tld}</td>
      <td>{years}</td>
      <td>{reg}</td>
      <td>{trans}</td>
      <td>{renew}</td>
    </tr>
  ))}
</tbody>



        </DomainTable>
       </TableWrapper>
      </PricingSection>
    </div>
  );
};

export default DomainsPage;
