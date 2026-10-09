import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FaGlobe, FaSearch, FaArrowRight, FaTag } from 'react-icons/fa';
import { Context } from './Context';

const PageContainer = styled.div`
  font-family: "Inter", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1a202c;
  background-color: #f8fafc;
  min-height: 100vh;
  padding-bottom: 60px;
`;

const Hero = styled.section`
  background: linear-gradient(
      135deg,
      rgba(15, 23, 42, 0.9) 0%,
      rgba(30, 27, 75, 0.95) 100%
    );
  padding: 60px 20px;
  text-align: center;
  color: white;
  border-bottom: 2px solid #4f46e5;
  margin-bottom: 40px;

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  .badge {
    background: rgba(79, 70, 229, 0.2);
    border: 1px solid #818cf8;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #c7d2fe;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  h1 {
    font-size: clamp(2.2rem, 3.5vw, 3rem);
    font-weight: 900;
    margin: 0;

    span {
      background: linear-gradient(135deg, #818cf8, #c084fc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    max-width: 650px;
    margin: 0;
    font-size: 1.05rem;
    color: #cbd5e1;
    line-height: 1.6;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const SearchFilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 16px 24px;
  border-radius: 16px;
  border: 1px solid #eae2f8;
  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.05);
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }

  .search-input-wrap {
    display: flex;
    align-items: center;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    padding: 0 14px;
    height: 44px;
    flex: 1;
    max-width: 400px;

    svg {
      color: #4f46e5;
      margin-right: 10px;
    }

    input {
      border: none;
      outline: none;
      background: transparent;
      font-size: 14px;
      width: 100%;
      color: #0f172a;
      font-weight: 500;

      &::placeholder {
        color: #94a3b8;
      }
    }
  }

  .results-count {
    font-size: 0.9rem;
    font-weight: 600;
    color: #64748b;
  }
`;

const TableCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #eae2f8;
  box-shadow: 0 10px 30px rgba(79, 70, 229, 0.06);
  overflow: hidden;

  .table-responsive {
    width: 100%;
    overflow-x: auto;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  min-width: 750px;

  th {
    background: #f8fafc;
    color: #1e293b;
    font-size: 0.85rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 16px 20px;
    border-bottom: 2px solid #b6c3d4;
  }

  td {
    padding: 5px 20px;
    font-size: 0.95rem;
    color: #334155;
    border-bottom: 1px solid #c8d4e0;
    vertical-align: middle;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover td {
    background: #fafafe;
  }

  .domain-col {
    font-weight: 800;
    color: #0f172a;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .badge-tag {
    font-size: 10px;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &.sale {
      background: #fef2f2;
      color: #dc2626;
      border: 1px solid #fecaca;
    }
    &.hot {
      background: #fffbeb;
      color: #d97706;
      border: 1px solid #fde68a;
    }
    &.new {
      background: #f0fdf4;
      color: #16a34a;
      border: 1px solid #bbf7d0;
    }
  }

  .price-cell {
    display: flex;
    flex-direction: column;
    gap: 2px;

    .price {
      font-weight: 700;
      color: #4f46e5;
    }
    .period {
      font-size: 0.78rem;
      color: #64748b;
      font-weight: 500;
    }
    .na {
      color: #94a3b8;
      font-weight: 600;
    }
  }

  .action-btn {
    background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
    color: white;
    border: none;
    padding: 7px 14px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.85rem;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 5px;

    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
  }
`;

const DomainPricingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
const {domainPricings}=useContext(Context);

//    const domainPricings = [
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

  // const pricingData = [
  //   { domain: '.ng', badge: 'Sale', register: 11500.00, newPeriod: '1 Year', transfer: 11500.00, transferPeriod: '1 Year', renewal: 17500.00, renewalPeriod: '1 Year' },
  //   { ext: '.com.ng', badge: 'Hot', newPrice: '₦4,500.00', newPeriod: '1 Year', transfer: '₦1,200.00', transferPeriod: '1 Year', renewal: '₦9,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.com', badge: 'Hot', newPrice: '₦11,500.00', newPeriod: '1 Year', transfer: '₦11,500.00', transferPeriod: '1 Year', renewal: '₦20,500.00', renewalPeriod: '1 Year' },
  //   { ext: '.online', badge: 'Hot', newPrice: '₦12,000.00', newPeriod: '1 Year', transfer: '₦75,000.00', transferPeriod: '1 Year', renewal: '₦75,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.org', badge: 'Sale', newPrice: '₦28,000.00', newPeriod: '1 Year', transfer: '₦28,000.00', transferPeriod: '1 Year', renewal: '₦28,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.org.ng', badge: 'Hot', newPrice: '₦6,000.00', newPeriod: '1 Year', transfer: 'N/A', transferPeriod: '', renewal: '₦12,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.site', badge: 'New', newPrice: '₦8,000.00', newPeriod: '1 Year', transfer: '₦78,000.00', transferPeriod: '1 Year', renewal: '₦78,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.biz', badge: 'Sale', newPrice: '₦50,000.00', newPeriod: '1 Year', transfer: '₦50,000.00', transferPeriod: '1 Year', renewal: '₦50,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.store', badge: 'Sale', newPrice: '₦13,500.00', newPeriod: '1 Year', transfer: '₦118,000.00', transferPeriod: '1 Year', renewal: '₦118,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.net', badge: 'Sale', newPrice: '₦30,000.00', newPeriod: '1 Year', transfer: '₦30,000.00', transferPeriod: '1 Year', renewal: '₦35,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.uk', badge: '', newPrice: '₦28,000.00', newPeriod: '1 Year', transfer: '₦28,000.00', transferPeriod: '1 Year', renewal: '₦28,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.tech', badge: 'New', newPrice: '₦11,800.00', newPeriod: '1 Year', transfer: '₦120,000.00', transferPeriod: '1 Year', renewal: '₦120,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.gov.ng', badge: '', newPrice: '₦20,000.00', newPeriod: '1 Year', transfer: '₦20,000.00', transferPeriod: '1 Year', renewal: '₦20,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.website', badge: '', newPrice: '₦10,000.00', newPeriod: '1 Year', transfer: '₦70,000.00', transferPeriod: '1 Year', renewal: '₦70,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.edu.ng', badge: '', newPrice: '₦20,000.00', newPeriod: '1 Year', transfer: '₦15,000.00', transferPeriod: '1 Year', renewal: '₦20,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.club', badge: '', newPrice: '₦50,000.00', newPeriod: '1 Year', transfer: '₦50,000.00', transferPeriod: '1 Year', renewal: '₦50,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.co.uk', badge: '', newPrice: '₦28,000.00', newPeriod: '1 Year', transfer: '₦28,000.00', transferPeriod: '1 Year', renewal: '₦28,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.info', badge: '', newPrice: '₦60,000.00', newPeriod: '1 Year', transfer: '₦60,000.00', transferPeriod: '1 Year', renewal: '₦60,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.mobi', badge: '', newPrice: '₦90,000.00', newPeriod: '1 Year', transfer: '₦90,000.00', transferPeriod: '1 Year', renewal: '₦106,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.net.ng', badge: '', newPrice: '₦5,000.00', newPeriod: '1 Year', transfer: 'N/A', transferPeriod: '', renewal: '₦10,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.me', badge: '', newPrice: '₦51,000.00', newPeriod: '1 Year', transfer: '₦51,000.00', transferPeriod: '1 Year', renewal: '₦51,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.xyz', badge: '', newPrice: '₦50,000.00', newPeriod: '1 Year', transfer: '₦50,000.00', transferPeriod: '1 Year', renewal: '₦50,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.ca', badge: 'New', newPrice: '₦50,000.00', newPeriod: '1 Year', transfer: '₦50,000.00', transferPeriod: '1 Year', renewal: '₦50,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.io', badge: '', newPrice: '₦145,000.00', newPeriod: '1 Year', transfer: '₦145,000.00', transferPeriod: '1 Year', renewal: '₦145,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.blog', badge: '', newPrice: '₦60,878.00', newPeriod: '1 Year', transfer: '₦60,878.00', transferPeriod: '1 Year', renewal: '₦73,777.00', renewalPeriod: '1 Year' },
  //   { ext: '.icu', badge: '', newPrice: '₦23,000.00', newPeriod: '1 Year', transfer: '₦23,000.00', transferPeriod: '1 Year', renewal: '₦23,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.top', badge: '', newPrice: '₦23,666.00', newPeriod: '1 Year', transfer: '₦23,666.00', transferPeriod: '1 Year', renewal: '₦25,344.00', renewalPeriod: '1 Year' },
  //   { ext: '.vip', badge: '', newPrice: '₦40,758.00', newPeriod: '1 Year', transfer: '₦40,758.00', transferPeriod: '1 Year', renewal: '₦50,412.00', renewalPeriod: '1 Year' },
  //   { ext: '.us', badge: '', newPrice: '₦30,000.00', newPeriod: '1 Year', transfer: '₦30,000.00', transferPeriod: '1 Year', renewal: '₦30,000.00', renewalPeriod: '1 Year' },
  //   { ext: '.ru', badge: '', newPrice: '₦15,363.00', newPeriod: '1 Year', transfer: 'N/A', transferPeriod: '', renewal: '₦17,960.00', renewalPeriod: '1 Year' },
  //   { ext: '.nl', badge: '', newPrice: '₦25,613.00', newPeriod: '1 Year', transfer: '₦25,613.00', transferPeriod: '1 Year', renewal: '₦30,806.00', renewalPeriod: '1 Year' },
  //   { ext: '.de', badge: '', newPrice: '₦20,988.00', newPeriod: '1 Year', transfer: '₦20,988.00', transferPeriod: '1 Year', renewal: '₦25,099.00', renewalPeriod: '1 Year' },
  //   { ext: '.eu', badge: '', newPrice: '₦24,339.00', newPeriod: '1 Year', transfer: '₦24,339.00', transferPeriod: '1 Year', renewal: '₦23,017.00', renewalPeriod: '1 Year' },
  //   { ext: '.cn', badge: '', newPrice: '₦21,070.00', newPeriod: '1 Year', transfer: '₦23,070.00', transferPeriod: '1 Year', renewal: '₦24,397.00', renewalPeriod: '1 Year' },
  // ];




  const filteredData = domainPricings.filter((item) =>
    item.domain.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageContainer>
      {/* <Hero>
        <div className="hero-content">
          <div className="badge"><FaGlobe /> Domain Pricing List</div>
          <h1>Secure the Perfect <span>Domain Name</span></h1>
          <p>Establish your online identity with lightning-fast routing and transparent registration pricing.</p>
        </div>
      </Hero> */}

      <ContentWrapper>
        {/* <SearchFilterBar>
          <div className="search-input-wrap">
            <FaSearch />
            <input
              type="text"
              placeholder="Search domain extension (e.g. .com, .ng)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="results-count">
            Showing {filteredData.length} of {pricingData.length} extensions
          </div>
        </SearchFilterBar> */}
<br/>
        <TableCard>
          <div className="table-responsive">
            <Table>
              <thead>
                <tr>
                  <th>Extension</th>
                  <th>New Price</th>
                  <th>Transfer</th>
                  <th>Renewal</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, idx) => (
                  <tr key={idx}>
                    <td>

                      <div className="domain-col">
                        {item.domain}
                        {item.badge && (
                          <span className={`badge-tag ${item.badge.toLowerCase()}`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="price-cell">
                        <span className="price">₦{item.register.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        <span className="period">{item.newPeriod}</span>
                      </div>
                    </td>
                    <td>
                      <div className="price-cell">
                        {item.transfer === 'N/A' ? (
                          <span className="na">N/A</span>
                        ) : (
                          <>
                           <span className="price">₦{item.transfer.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            <span className="period">{item.transferPeriod}</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="price-cell">
                        <span className="price">₦{item.renewal.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        <span className="period">{item.renewalPeriod}</span>
                      </div>
                    </td>
                    {/* <td>
                      <button className="action-btn">
                        Register <FaArrowRight size={10} />
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </TableCard>
      </ContentWrapper>
    </PageContainer>
  );
};

export default DomainPricingPage;