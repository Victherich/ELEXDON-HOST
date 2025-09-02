
// // TermsPage.jsx

// import React from 'react';
// import styled from 'styled-components';
// import bgImage from '../Images/terms.jpg'; // Replace with your actual image path



// const DecorativeCircle = styled.div`
//   position: absolute;
//   width: ${(props) => props.size || '200px'};
//   height: ${(props) => props.size || '200px'};
//   background: ${(props) => props.gradient || 'radial-gradient(circle, #facc15, transparent)'};
//   border-radius: 50%;
//   top: ${(props) => props.top};
//   left: ${(props) => props.left};
//   filter: blur(3px);
//   opacity: 0.9;
//   z-index: 0;
// `;

// const Wrapper = styled.div`
//   font-family: 'Segoe UI', sans-serif;
//   color: #333;
// `;

// const Hero = styled.section`
//   background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${bgImage}) center/cover no-repeat;
//   color: white;
//   text-align: center;
//   padding: 100px 20px 60px;
// `;

// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: bold;
//   margin-bottom: 10px;
// `;

// const HeroSubtitle = styled.p`
//   font-size: 1.2rem;
//   opacity: 0.9;
// `;

// const Container = styled.div`
//   max-width: 1000px;
//   margin: 0 auto;
//   padding: 60px 20px;
// `;

// const Section = styled.div`
//   margin-bottom: 40px;
// `;

// const SectionTitle = styled.h2`
//   font-size: 1.8rem;
//   margin-bottom: 15px;
//   color: #4f46e5;
// `;

// const SectionText = styled.p`
//   font-size: 1rem;
//   line-height: 1.7;
// `;

// const TermsPage = () => {
//   return (
//     <Wrapper>
//       <Hero>
//         <HeroTitle>Terms & Conditions</HeroTitle>
//         <HeroSubtitle>Your agreement with Elexdon Hosting</HeroSubtitle>
//       </Hero>

//       <Container>

//           <DecorativeCircle top="1%" left="5%" size="400px" gradient="radial-gradient(circle,rgba(78, 70, 229, 0.5), transparent)" />
//       <DecorativeCircle top="70%" left="70%" size="220px" gradient="radial-gradient(circle, #818cf8, transparent)" />
//       <DecorativeCircle top="5%" left="60%" size="120px" gradient="radial-gradient(circle, #f43f5e, transparent)" />
//       <DecorativeCircle top="60%" left="20%" size="200px" gradient="radial-gradient(circle, #10b981, transparent)" />
//  {/* <DecorativeCircle top="60%" left="8%" size="500px" gradient="radial-gradient(circle, #4f46e5, transparent)" /> */}
// <DecorativeCircle top="60%" left="8%" size="500px" gradient="radial-gradient(circle, rgba(255,255,255,0.5))" />
    
//         <Section>
//           <SectionTitle>1. Introduction</SectionTitle>
//           <SectionText>
//             Welcome to Elexdon Hosting! By accessing our services and using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part, please refrain from using our services.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>2. Services Provided</SectionTitle>
//           <SectionText>
//             Elexdon provides web hosting, domain registration, website builder tools, and other web-related services. We strive for 99.9% uptime, offer 24/7 customer support, and provide scalable hosting solutions for businesses of all sizes.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>3. User Responsibilities</SectionTitle>
//           <SectionText>
//             Users must provide accurate personal information, maintain the confidentiality of their accounts, and avoid any use that violates laws, infringes rights, or harms Elexdon or other users.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>4. Content Ownership</SectionTitle>
//           <SectionText>
//             You retain ownership of the content you host on our servers. However, you grant Elexdon permission to store, back up, and display your content as part of our service functionality.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>5. Payment & Billing</SectionTitle>
//           <SectionText>
//             All services are billed in advance. Failure to pay may result in suspension or termination of service. All fees are non-refundable unless otherwise specified.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>6. Termination</SectionTitle>
//           <SectionText>
//             Either party may terminate the service with notice. Inappropriate use, abusive behavior, or non-payment may result in immediate suspension or cancellation of service.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>7. Limitation of Liability</SectionTitle>
//           <SectionText>
//             Elexdon is not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services, even if advised of the possibility.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>8. Changes to Terms</SectionTitle>
//           <SectionText>
//             Elexdon reserves the right to modify these terms at any time. Changes will be posted on this page, and your continued use of our services signifies your acceptance.
//           </SectionText>
//         </Section>

//         <Section>
//           <SectionTitle>9. Contact</SectionTitle>
//           <SectionText>
//             If you have questions regarding these terms, please contact us at: <br />
//             📧 support@elexdon.com <br />
//             📞 +1 (800) 555-ELXN
//           </SectionText>
//         </Section>
//       </Container>
//     </Wrapper>
//   );
// };

// export default TermsPage;






// TermsPage.jsx

import React from 'react';
import styled from 'styled-components';
import bgImage from '../Images/terms.jpg'; // Your background image
import 'animate.css'
import useAnimateOnScroll from './useAnimateOnScroll';

const Wrapper = styled.div`
  font-family: 'Segoe UI', sans-serif;
  color: #333;
  position: relative;
  overflow: hidden;
`;

const DecorativeCircle = styled.div`
  position: absolute;
  width: ${(props) => props.size || '200px'};
  height: ${(props) => props.size || '200px'};
  background: ${(props) => props.gradient || 'radial-gradient(circle, #facc15, transparent)'};
  border-radius: 50%;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  filter: blur(50px);
  opacity: 0.6;
  z-index: 0;
`;

const Hero = styled.section`
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage}) center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 100px 20px 60px;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform:uppercase;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
  position: relative;
  z-index: 2;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #4f46e5;
  text-transform:uppercase;
`;

const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
`;

// Page Component
const TermsPage = () => {

 const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const a = useAnimateOnScroll('animate__fadeInUp animate__slower');
const b = useAnimateOnScroll('animate__fadeInUp animate__slower');
const c = useAnimateOnScroll('animate__fadeInUp animate__slower');
const d = useAnimateOnScroll('animate__fadeInUp animate__slower');
const e = useAnimateOnScroll('animate__fadeInDown animate__slower');


  return (
    <Wrapper>
      {/* Decorative Background Circles */}
      <DecorativeCircle top="5%" left="10%" size="300px" gradient="radial-gradient(circle,rgb(190, 191, 243), transparent)" />
      <DecorativeCircle top="80%" left="60%" size="200px" gradient="radial-gradient(circle, #ec4899, transparent)" />
      <DecorativeCircle top="20%" left="75%" size="150px" gradient="radial-gradient(circle, #22d3ee, transparent)" />
      <DecorativeCircle top="70%" left="15%" size="250px" gradient="radial-gradient(circle, #a78bfa, transparent)" />
      <DecorativeCircle top="40%" left="45%" size="500px" gradient="radial-gradient(circle, rgba(255,255,255,0.3), transparent)" />
 <DecorativeCircle top="30%" left="10%" size="300px" gradient="radial-gradient(circle,rgb(184, 185, 238), transparent)" />
      <DecorativeCircle top="40%" left="60%" size="200px" gradient="radial-gradient(circle, #ec4899, transparent)" />
      <DecorativeCircle top="80%" left="75%" size="150px" gradient="radial-gradient(circle, #22d3ee, transparent)" />
      <DecorativeCircle top="30%" left="15%" size="250px" gradient="radial-gradient(circle, #a78bfa, transparent)" />
      <DecorativeCircle top="10%" left="45%" size="500px" gradient="radial-gradient(circle, rgba(255,255,255,0.3), transparent)" />

      {/* Hero Section */}
      <Hero>
        <HeroTitle ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Terms & Conditions</HeroTitle>
        <HeroSubtitle ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Your agreement with Elexdon Hosting</HeroSubtitle>
      </Hero>

      {/* Main Content */}
      <Container>
        <Section>
          <h2 style={{textAlign:"center"}}>The use of services from elexdonhost.com (Elexdon Digital Technologies Ltd), constitutes agreement to these terms.
          </h2>
          <SectionTitle>1.) Account Setup / Email on file</SectionTitle>
          <SectionText>
           We will setup your account after we have received payment and we and/or our payment partner(s) have screened the order(s) incase of fraud. It is your responsibility to provide us with an email address which is not @ the domain(s) you are signing up under. If there is ever an abuse issue or we need to contact you, the primary email address on file will be used for this purpose. It is your responsibility to ensure the email address on file is current or up to date at all times. Providing false contact information of any kind may result in the termination of your account. In dedicated server purchases or high risk transactions, it will be necessary to provide government issued identification and possibly a scan of the credit card used for the purchase. If you fail to meet these requirements, the order may be considered fraudulent in nature and be denied.</SectionText>
        </Section>

        <Section>
          <SectionTitle>Transfers</SectionTitle>
          <SectionText>
          Our transfers team will make every effort to help you move your site to us. However, transfers are provided as a courtesy service, and we can not make guarantees regarding the availability, possibility, or time required to complete an account transfer. Each hosting company is configured differently, and some hosting platforms save data in an incompatible or proprietary format, which may make it extremely difficult if not impossible to migrate some or all account data. We will try our best, but in some cases we may be unable to assist you in a transfer of data from an old host.  </SectionText>
       <SectionText>
        The free transfer services are available for 30 days from your signup date. Transfers outside of the 30 day free period will incur a charge; please contact a member of the support department with specific details to receive a price quote.
       </SectionText>
        </Section>

        <Section>
          <SectionTitle>2.) Content</SectionTitle>
          <SectionText>
           All services provided by Qservers.net may only be used for lawful purposes. The laws of the State where Our Company is Headquartered, and the Federal Republic of Nigeria apply.
<br/>
The customer agrees to indemnify and hold harmless elexdonhost.com from any claims resulting from the use of our services.</SectionText>
        <SectionText>
          Use of our services to infringe upon any copyright or trademark is prohibited. This includes but is not limited to unauthorized copying of music, books, photographs, or any other copyrighted work. The offer of sale of any counterfeit merchandise of a trademark holder will result in the immediate termination of your account. If you believe that your copyright or trademark is being infringed upon, please email support@elexdonhost.com with the information required. A list of required information may be found here. If the request is of a licensing issue, we may require further documentation.
        </SectionText>
        <SectionText>
          <strong>Examples of unacceptable material on all Shared and Reseller servers include:</strong>
<br/>
IRC Bots, Proxy Scripts / Anonymizers, Pirated Software / Warez, image, filedump, mirror, or banner-ad services (similar to rapidshare, photobucket, or commercial banner ad rotation), affiliate servers, topsites, commercial audio streaming (more than one or two streams), Escrow, High-Yield Interest Programs (HYIP) or related sites, Investment sites (FOREX, egold exchange), sale of any controlled substance without prior proof of appropriate permit(s), AutoSurf sites, Bank Debentures, Bank Debenture Trading Programs, Prime Banks Programs, lottery sites, muds / rpg’s, hate sites, hacker focused sites/archives/programs, or sites promoting illegal activities, IP Scanners, Brute Force Programs, Mail Bombers and Spam Scripts. Forums and or websites that distribute or link to warez content are prohibited.
<br/><br/>
Using a shared account as a backup/storage device is not permitted, with the exception of one cPanel backup of the same account.
        </SectionText>

        <SectionText>
          <strong>Examples of unacceptable material on Dedicated servers include:</strong>
<br/>
Pirated Software / Warez, Escrow, High-Yield Interest Programs (HYIP) or related sites, Investment sites (FOREX, egold exchange), sale of any controlled substance without prior proof of appropriate permit(s), AutoSurf sites, Bank Debentures, Bank Debenture Trading Programs, Prime Banks Programs, lottery sites, hate sites, hacker focused sites/archives/programs, or sites promoting illegal activities, IP Scanners, Brute Force Programs, Mail Bombers and Spam Scripts. Forums and or websites that distribute or link to warez content are prohibited.
<br/><br/>
elexdonhost.com services, including all related equipment, networks and network devices are provided only for authorized customer use. elexdonhost.com systems may be monitored for all lawful purposes, including to ensure that use is authorized, for management of the system, to facilitate protection against unauthorized access, and to verify security procedures, survivability and operational security. During monitoring, information may be examined, recorded, copied and used for authorized purposes. Use of elexdonhost.com system(s) constitutes consent to monitoring for these purposes.
<br/><br/>
We reserve the right to refuse service to anyone. Any material that, in our judgment, is obscene, threatening, illegal, or violates our terms of service in any manner may be removed from our servers (or otherwise disabled), with or without notice.
<br/><br/>
Failure to respond to email from our abuse department within 48 hours may result in the suspension or termination of your services. All abuse issues must be dealt with via troubleticket/email and will have a response within 48 hours.
<br/><br/>
If in doubt regarding the acceptability of your site or service, please contact us at support@elexdonhost.com and we will be happy to assist you.
<br/><br/>
Potential harm to minors is strictly forbidden, including but not limited to child pornography or content perceived to be child pornography (Lolita):
<br/><br/>
Any site found to host child pornography or linking to child pornography will be suspended immediately without notice.
<br/><br/>
Resellers: we will suspend the site in question and will notify you so you may terminate the account. We will further monitor your activity; more than one infraction of this type may result in the immediate termination of your account.
<br/><br/>
Direct customers: Your services will be terminated with or without notice.
<br/><br/>
Violations will be reported to the appropriate law enforcement agency.
<br/><br/>
It is your responsibility to ensure that scripts/programs installed under your account are secure and permissions of directories are set properly, regardless of installation method. When at all possible, set permissions on most directories to 755 or as restrictive as possible. Users are ultimately responsible for all actions taken under their account. This includes the compromise of credentials such as username and password. It is required that you use a secure password. If a weak password is used, your account may be suspended until you agree to use a more secure password. Audits may be done to prevent weak passwords from being used. If an audit is performed, and your password is found to be weak, we will notify you and allow time for you to change/update your password.
Click Here to generate passwords.
        </SectionText>
        </Section>

        <Section>
          <SectionTitle>3a.) Zero Tolerance Spam Policy</SectionTitle>
          <SectionText>
           We take a zero tolerance stance against sending of unsolicited e-mail, bulk emailing, and spam. “Safe lists” and “double opt-in” will be treated as spam. Any user who sends out spam will have their account terminated with or without notice.
Please read https://elexdonhost.com/privacy-policy/ for our generalized policy.
<br/><br/>
Sites advertised via SPAM (Spamvertised) may not be hosted on our servers. This provision includes, but is not limited to SPAM sent via fax, email, instant messaging, or usenet/newsgroups. No organization or entity listed in the ROKSO may be hosted on our servers. Any account which results in our IP space being blacklisted will be immediately suspended and/or terminated.
<br/><br/>
elexdonhost.com reserves the right to require changes or disable as necessary any web site, account, database, or other component that does not comply with its established policies, or to make any such modifications in an emergency at its sole discretion.
<br/><br/>
Elexdohost.com.ng reserves the right to charge the holder of the account used to send any unsolicited e-mail a clean up fee. This cost of the clean up fee is entirely at the discretion of Qservers.net.</SectionText>
        </Section>

        <Section>
          <SectionTitle>3b.) Domain Name Abuse</SectionTitle>
          <SectionText>
           You the registrant agrees to provide, maintain and update, current, complete and accurate information of the Whois Record and all the data elements about the domain name during the term of the domain name/order/service. You the registrant agrees that provision of inaccurate or unreliable information, and/or Registrant’s failure to promptly update information, or non-receipt of a response for over five (5) calendar days to inquiries sent to the email address of the Registrant or any other contact listed for the domain name concerning the accuracy of contact information associated with the domain name shall be constituted as a breach of this Agreement and a basis for freezing, suspending, or deleting that domain name/service. </SectionText>
        </Section>

        <Section>
          <SectionTitle>4.) Payment Information</SectionTitle>
          <SectionText>
           You agree to supply appropriate payment for the services received from elexdonhost.com, in advance of the time period during which such services are provided. You agree that until and unless you notify elexdonhost.com of your desire to cancel any or all services received, those services will be billed on a recurring basis.
<br/><br/>
Cancellations must be done in writing via the cancellation form provided in your client area on our website. To cancel a VPS/Dedicated server service, the client must submit a cancellation request 10 days before the invoice due date, else the cancellation request will be void and the client will be billed for the next subscription month. Once we receive your cancellation and have confirmed all necessary information with you via e-mail, we will inform you in writing (typically email) that your account has been canceled. Your cancellation confirmation will contain a ticket/tracking number in the subject for your reference, and for verification purposes. You should immediately receive an automatic “Your request has been received…” email with a tracking number. An employee will confirm your request (and process your cancellation) shortly thereafter. If you do not hear back from us, or do not receive the automatic confirmation email within a few minutes after submitting your cancellation, please contact us immediately via phone. We require that cancellations of service are done through the online form to (a) confirm your identity, (b) confirm in writing you are prepared for all files/emails to be removed, and (c) document the request. This process reduces the likelihood of mistakes, fraudulent/malicious requests, and ensures you are aware that the files, emails, and account may be removed immediately after a cancellation request is processed.
<br/><br/>
As a client of elexdonhost.com, it is your responsibility to ensure that your payment information is up to date, and that all invoices are paid on time. Any invoice that is overdue and not paid will result in a late fee and/or an account suspension until account balance has been paid in full.
<br/><br/>
Invoices that have been paid more than once with multiple InterSwitch Subscriptions can only be added as credit towards the account and cannot be refunded via InterSwitch. If you require assistance with this provision, please contactsupport@elexdonhost.com 
<br/><br/>
It is the clients responsibility to confirm that the domain name/hosting/services paid for during activation or renewal is successful by checking that your CPanel area is loading without any issues or checking your domains whois record to confirm domain registration or renewal within 24hrs after a payment confirmation or a service renewal confirmation, especially when using automated online payment options like Interswitch or Bank Transfers, to avoid loss of data from the termination of the hosting package/service or loss of the domain name due to expiration.
<br/><br/>
Elexdongost.com.ng reserves the right to change the yearly payment amount and any other charges at anytime.  </SectionText>
        </Section>

        <Section>
          <SectionTitle>5.) Backups and Data Loss</SectionTitle>
          <SectionText>
           Your use of the service is at your sole risk. elexdonhost.com is not responsible for files and/or data residing on your account. You agree to take full responsibility for files and data transferred and to maintain all appropriate backup of files and data stored on elexdonhost.com servers. You may refer to our backup policy for more information about backups.
<br/><br/>
It is your sole responsibility as a customer to make backups of the information you store on our servers on a regular basis and save them in a separate location from your account. Using a shared account as a backup/storage device is not permitted. We recommend that you make use of reliable and offsite third-party backup services such as but not limited to CodeGuard, JetPack, etc to make backup copies of your website.
<br/><br/>
Though we run periodic backups for some services, the availability of our backups is not guaranteed and we are not responsible for the loss of any customer’s data. We strongly recommend that you maintain periodic backups of your website’s information and store them in a secure location so that you have multiple options for recovering your data in the event of any loss. Our control panel also provides tools that allow you to take data, download and restore backups, etc.</SectionText>
        </Section>

        <Section>
          <SectionTitle>6.) Cancellations and Refunds</SectionTitle>
          <SectionText>
           elexdonhost.com reserves the right to cancel the account at any time with or without notice.
<br/><br/>
Any abuse of our staff in any medium or format will result in the suspension or termination of your services.
<br/><br/>
Cancellations must be done in writing via the cancellation form provided in your client area on our website. To cancel a VPS/Dedicated server service, the client must submit a cancellation request 10 days before the invoice due date, else the cancellation request will be void and the client will be billed for the next subscription month. Once we receive your cancellation and have confirmed all necessary information with you via e-mail, we will inform you in writing (typically email) that your account has been canceled. Your cancellation confirmation will contain a ticket/tracking number in the subject for your reference, and for verification purposes. You should immediately receive an automatic “Your request has been received…” email with a tracking number. An employee will confirm your request (and process your cancellation) shortly thereafter. If you do not hear back from us, or do not receive the automatic confirmation email within a few minutes after submitting your cancellation, please contact us immediately via phone. We require that cancellations of service are done through the online form to (a) confirm your identity, (b) confirm in writing you are prepared for all files/emails to be removed, and (c) document the request. This process reduces the likelihood of mistakes, fraudulent/malicious requests, and ensures you are aware that the files, emails, and account may be removed immediately after a cancellation request is processed.
<br/><br/>
None payment of due invoices when due would lead to service termination after 30 days for shared hosting. VPS/Dedicated servers hosting will be terminated 7 days after the due date and the clients account would be suspended until the overdue recurring subscription invoice is paid as server charges have already been made on such services to the data centers.
<br/><br/>
<strong>The following methods of payments are non-refundable, and refunds will be posted as credit to the hosting account:
</strong><br/>
* Bank Wire Transfers<br/>
* InterSwitch Debit Cards<br/>
* Cheque’s
<br/><br/>
There are no refunds on dedicated servers, administrative fees, install fees for custom software, or domain name purchases.
<br/><br/>
Violations of the Terms of Service will waive the refund policy (if any). </SectionText>
        </Section>

        <Section>
          <SectionTitle>7a.) Resource Usage</SectionTitle>
          <SectionText>
           User may not:<br/>
a) Use 25% or more of system resources for longer then 90 seconds. There are numerous activities that could cause such problems; these include: CGI scripts, FTP, PHP, HTTP, etc.<br/>
b) Run stand-alone, unattended server-side processes at any point in time on the server. This includes any and all daemons, such as IRCD.<br/>
c) Run any type of web spider or indexer (including Google Cash / AdSpy) on shared servers.<br/>
d) Run any software that interfaces with an IRC (Internet Relay Chat) network.<br/>
e) Run any bit torrent application, tracker, or client. You may link to legal torrents off-site, but may not host or store them on our shared servers.<br/>
f) Participate in any file-sharing/peer-to-peer activities<br/>
g) Run any gaming servers such as counter-strike, half-life, battlefield1942, etc<br/>
h) Run cron entries with intervals of less than 15 minutes<br/>

When using PHP include functions for including a local file, include the local file rather than the URL. Instead of include(“http://yourdomain.com/include.php”) use include(“include.php”)
          </SectionText>
        </Section>

           <Section>
          <SectionTitle>7b.) INODES</SectionTitle>
          <SectionText>
          The use of more than 50,000 inodes on any shared account may potentially result in suspension. Accounts found to be exceeding the 50,000 inode limit will automatically be removed from our backup system to avoid overusage. Every file (a webpage, image file, email, etc) on your account uses up 1 inode.
<br/><br/>
Sites that slightly exceed our inode limits are unlikely to be suspended; however, accounts that constantly create and delete large numbers of files on a regular basis, have hundreds of thousands of files, or cause file system damage may be flagged for review and/or suspension.
The primary cause of excessive inodes seems to be due to users leaving their catchall address enabled, but never checking their primary account mailbox. Over time, tens of thousands of messages (or more) build up, eventually pushing the account past our inode limit. To disable your default mailbox, login to cPanel and choose “Mail”, then “Default Address”, “Set Default Address”, and then type in: :fail: No such user here</SectionText>
        </Section>

         <Section>
          <SectionTitle>8.) Bandwidth Usage</SectionTitle>
          <SectionText>
         You are allocated a monthly bandwidth allowance. This allowance varies depending on the hosting package you purchase. Should your account pass the allocated amount we reserve the right to suspend the account until the start of the next allocation, suspend the account until more bandwidth is purchased at an additional fee, suspend the account until you upgrade to a higher level of package, terminate the account and/or charge you an additional fee for the overages. Unused transfer in one month cannot be carried over to the next month.</SectionText>
        </Section>


        <Section>
          <SectionTitle>9a.) Money back Guarantee</SectionTitle>
          <SectionText>
        We reserve the right to refund a prorated amount or no refund at all.
        </SectionText>
         </Section>

          <Section>
          <SectionTitle>9b.) Uptime Guarantee</SectionTitle>
          <SectionText>
       If your shared / reseller server has a physical downtime that is not within the 99.9% uptime you may receive one month of credit on your account. Approval of the credit is at the discretion of Qservers.net dependant upon justification provided. Third party monitoring service reports may not be used for justification due to a variety of factors including the monitor’s network capacity/transit availability. The uptime of the server is defined as the reported uptime from the operating system and the Apache Web Server which may differ from the uptime reported by other individual services. To request a credit, please contact support@elexdonhost.com with justification. All requests must be made in writing via email. Uptime guarantees only apply to shared / reseller solutions. Dedicated servers are covered by a network guarantee in which the credit is prorated for the amount of time the server is down which is not related to our uptime guarantee.
        </SectionText>
         </Section>


          <Section>
          <SectionTitle>10.) Reseller: Client Responsibility</SectionTitle>
          <SectionText>
     Resellers are responsible for supporting their clients. elexdonhost.com does not provide support to our Reseller’s Clients. If a reseller’s client contacts us, we reserve the right to place the client account on hold until the reseller can assume their responsibility for their client. All support requests must be made by the reseller on their clients’ behalf for security purposes. Resellers are also responsible for all content stored or transmitted under their reseller account and the actions of their clients’. Qservers.net will hold any reseller responsible for any of their clients actions that violate the law or the terms of service.
      </SectionText>
         </Section>


         
          <Section>
          <SectionTitle>11.) Shared (non-reseller accounts) / Semidedicated Servers</SectionTitle>
          <SectionText>
    Shared accounts may not resell web hosting to other people, if you wish to resell hosting you must use a reseller account. Semidedicated servers are not backed up. You must maintain your own backups.
       </SectionText>
         </Section>


         <Section>
          <SectionTitle>12.) Dedicated Servers</SectionTitle>
          <SectionText>
   elexdonhost.com reserves the right to reset the password on a dedicated server if the password on file is not current so that we may do security audits as required by our datacenter. It is the responsibility of the client to ensure that there is a valid email address and current root password on file for their dedicated server on file to prevent downtime from forced password resets. Qservers.net reserves the right to audit servers as needed and to perform administrative actions at the request of our datacenter. Dedicated servers are NOT backed up by us and it is the responsibility of the client to maintain backups or have a solution for this. You may purchase an additional hard drive and maintain backups to it as the most simple solution. Please contact support@elexdonhost.com if you wish to obtain a secondary hard drive. It is your responsibility to maintain backups.
      </SectionText>
         </Section>

          <Section>
          <SectionTitle>13.) Affiliate Terms & Conditions</SectionTitle>
          <SectionText>
  For clients who would like to be part of our affiliate system. These Policies apply:
<br/>
– You cannot refer yourself.<br/>
– Commissions are one time.<br/>
– Opening of multiple accounts by same client is not allowed and can lead to suspension of your account.<br/>
– The affiliate is credited an initial sum of N500.<br/>
– The affiliate can get up to 20% on every paid product/service (i.e. hosting only) and 5% on every paid reseller account after 35 maturation days.<br/>
– The affiliate can only withdraw after the N3000 mark is reached. The affiliate may decide to add this funds to his client account.<br/>
– Money withdrawn by the affiliate would be paid into any bank account in Nigeria within 5 working days.<br/>
– Money withdrawn would be paid to an account with the name of the affiliate.<br/>
– Two or more affiliate accounts cannot be combined.<br/>
   </SectionText>
         </Section>


         <Section>
          <SectionTitle>14.) Price Change</SectionTitle>
          <SectionText>
 We reserve the right to change prices listed on Qservers.net, and the right to increase the amount of resources given to plans at any time.
   </SectionText>
         </Section>

          <Section>
          <SectionTitle>15a.) Indemnification</SectionTitle>
          <SectionText>
Customer agrees that it shall defend, indemnify, save and hold elexdonhost.com harmless from any and all demands, liabilities, losses, costs and claims, including reasonable attorney’s fees asserted against elexdonhost.com, its agents, its customers, officers and employees, that may arise or result from any service provided or performed or agreed to be performed or any product sold by customer, its agents, employees or assigns. Customer agrees to defend, indemnify and hold harmless elexdonhost.com against liabilities arising out of; (1) any injury to person or property caused by any products sold or otherwise distributed in connection with elexdonhost.com (2) any material supplied by customer infringing or allegedly infringing on the proprietary rights of a third party; (3) copyright infringement and (4) any defective products sold to customers from Qservers.net’s server.
   </SectionText>
         </Section>


  <Section>
          <SectionTitle>15b.) Arbitration</SectionTitle>
          <SectionText>
By using any elexdonhost.com services, you agree to submit to binding arbitration. If any disputes or claims arise against elexdonhost.com or its subsidiaries, such disputes will be handled by an arbitrator of elexdonhost.com’s choice. An arbitrator from the Nigerian Arbitration Association. Arbitrators shall be attorneys or retired judges and shall be selected pursuant to the applicable rules. All decisions rendered by the arbitrator will be binding and final. The arbitrator’s award is final and binding on all parties. The Federal Arbitration Act, and not any state arbitration law, governs all arbitration under this Arbitration Clause. You are also responsible for any and all costs related to such arbitration.
   </SectionText>
         </Section>


          <Section>
          <SectionTitle>16.) Disclaimer</SectionTitle>
          <SectionText>
elexdonhost.com shall not be responsible for any damages your business may suffer. Elexdonhost>com.ng makes no warranties of any kind, expressed or implied for services we provide. elexdonhost.com disclaims any warranty or merchantability or fitness for a particular purpose. This includes loss of data resulting from delays, no deliveries, wrong delivery, and any and all service interruptions caused by elexdonhost.com and its employees. elexdonhost.com will not be held responsible for any damages, events that may occur resulting from the use of our services, downtimes, failure or refusal to register or renew your services with us
  </SectionText>
         </Section>

          <Section>
          <SectionTitle>17.) Disclosure to law enforcement</SectionTitle>
          <SectionText>
elexdonhost.com may disclose any subscriber information to law enforcement agencies without further consent or notification to the subscriber upon lawful request from such agencies.
We will cooperate fully with law enforcement agencies.
 </SectionText>
         </Section>


          <Section>
          <SectionTitle>18). Mandatory thirdparty softwares Updates</SectionTitle>
          <SectionText>
As a client of Elexdon Host using any thirdpraty software (e.g, wordpress, joomla, opencart, drupal, magento, etc), you agree to adhere to the following guidelines regarding the software installations, plugins, and themes:
<br/><br/>
Core Updates: It is mandatory for all users to keep their installations up to date with the latest stable version released. Failing to update the software core may leave your website vulnerable to security breaches and may result in a violation of this Terms of Service.<br/><br/>
Plugin Updates: Users are responsible for regularly updating all plugins installed on their websites. Keeping plugins updated is crucial for ensuring compatibility, security, and optimal performance. Failure to update plugins may expose your website to potential security risks and could lead to a violation of this Terms of Service.<br/><br/>
Theme Updates: Users must update their themes to the latest versions provided by the theme developers. Theme updates often include bug fixes, security patches, and new features that can improve your website’s functionality and security. Neglecting theme updates may jeopardize the stability and security of your website and may be considered a violation of this Terms of Service.<br/><br/>
Backup and Testing: Before performing any updates, users are strongly encouraged to create a full backup of their website, including databases and files. Additionally, it is advisable to test the updates in a staging environment to ensure compatibility and prevent potential disruptions to the live site.<br/><br/>
Support and Assistance: Elexdons will make efforts to assist users who encounter issues related to websites updates. However, ultimate responsibility for updating WordPress installations, plugins, and themes lies with the user, together with all condequences.<br/><br/>
Consequences of Non-Compliance: Failure to comply with the mandatory Website update policy may result in account suspension, termination, or other actions deemed appropriate by ElexdonHost. Repeated violations may lead to permanent suspension and subsequent termination of service that has failed compliance.<br/><br/>
By continuing to use ElexdonHost, you acknowledge and agree to abide by these guidelines regarding Websites updates. We reserve the right to modify this policy at any time, and it is your responsibility to review this section periodically for any updates.<br/><br/>
 </SectionText>
         </Section>


           <Section>
          <SectionTitle>19.) Changes to the TOS</SectionTitle>
          <SectionText>
elexdonhost.com reserves the right to revise its policies at any time without notice. </SectionText>
         </Section>


      </Container>
    </Wrapper>
  );
};

export default TermsPage;

