
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import blog1Img from '../Images/blog1.jpg';
// import blog2Img from '../Images/blog2.jpg';
// import blog3Img from '../Images/blog3.jpg';
// import blog4Img from '../Images/blog4.jpg';
// import blog5Img from '../Images/blog5.jpg';
// import blog6Img from '../Images/blog6.jpg';
// import blog7Img from '../Images/blog7.jpg';
// import blog from '../Images/blog.jpg';
// import useAnimateOnScroll from './useAnimateOnScroll';
// import 'animate.css'


// const blogs = [
//   {
//     title: 'Why Choose Elexdon Hosting?',
//     image: blog1Img,
//     content: `Choosing the right hosting provider can be the turning point for your online success. At Elexdon, we believe that hosting is more than just a service—it's a partnership. We’ve built our infrastructure to deliver blazing-fast speed, near-perfect uptime, and top-notch support around the clock.

// If you're tired of downtime or slow load speeds that turn visitors away, you're in the right place. We understand the challenges of small business owners, entrepreneurs, and developers who need scalable and secure solutions. That’s why our hosting packages come loaded with features that support you from day one.

// Whether you’re running a simple blog or launching a full-scale eCommerce store, our systems are optimized to handle it. Our automated backups, powerful control panels, and intuitive tools mean you spend less time fixing issues and more time growing.

// When you choose Elexdon, you're not just choosing technology—you’re choosing a community of support and innovation. Ready to take your website to the next level? Let Elexdon handle the heavy lifting while you focus on creating, building, and scaling with confidence.`
//   },
//   {
//     title: 'Beginner’s Guide to Setting Up WordPress',
//     image: blog2Img,
//     content: `Welcome to your WordPress journey! If you’re new to website building, the process might seem overwhelming—but don’t worry. Elexdon is here to guide you every step of the way.

// WordPress is a user-friendly, powerful platform that powers over 40% of all websites. Thanks to our 1-click Softaculous installer, launching your first site is easier than ever. Within minutes, you’ll go from zero to live, with no technical skills required.

// Start by choosing a domain name that reflects your brand or purpose. Then, log into your Elexdon control panel and click “Install WordPress.” From there, Softaculous handles the rest—automatically setting up your database and WordPress files.

// Once installed, you can log into your dashboard, choose a theme, and begin adding content. No need to learn code. Everything from layout to color customization is just a few clicks away.

// We designed this process to be intuitive and beginner-friendly, but we’re always here if you need help. Our 24/7 support team can walk you through anything—no question is too small.

// So breathe easy, get creative, and enjoy the process. You’re not just building a website; you're creating your digital identity. With Elexdon and WordPress, your online dreams are just getting started.`
//   },
//   {
//     title: '5 Ways to Speed Up Your Website',
//     image: blog3Img,
//     content: `Speed matters. A slow website frustrates users and hurts your rankings on search engines. But don’t worry—there are simple ways to boost your site’s performance today.

// First, optimize your images. Uploading massive photos can drag your site down. Use tools like TinyPNG or built-in WordPress plugins to compress them without losing quality.

// Second, leverage browser caching. This allows repeat visitors to load your site faster by storing common files locally. Elexdon hosting supports this out of the box.

// Third, choose lightweight themes and avoid bloated plugins. Every added plugin can slow things down, so only use what you truly need.

// Fourth, enable a Content Delivery Network (CDN). A CDN spreads your content across servers worldwide, delivering it faster to global visitors. At Elexdon, our hosting plans integrate seamlessly with top CDN providers.

// Lastly, upgrade your hosting plan. If you’re on shared hosting and seeing spikes in traffic, consider moving to VPS or semi-dedicated solutions. Elexdon offers flexible plans tailored to your growth.

// Improving speed isn’t just technical—it’s a service to your audience. A fast site keeps users engaged, increases conversions, and enhances your brand. Let’s build a web that’s faster, together.`
//   },
//   {
//     title: 'Shared vs VPS Hosting: What’s Right for You?',
//     image: blog4Img,
//     content: `So, you're planning to launch a website—but you're stuck on choosing between Shared and VPS hosting? Don’t worry, you're not alone. Let’s break it down.

// **Shared Hosting** is like renting an apartment. You share space and resources with other websites. It’s affordable and beginner-friendly, perfect for small blogs, personal sites, or new startups.

// **VPS Hosting**, on the other hand, is like owning a condo. You get dedicated resources and more control over your environment. It’s ideal for growing businesses, developers, or anyone needing higher performance and scalability.

// Ask yourself: Do you expect low to moderate traffic? Shared might be perfect. Running an eCommerce site or custom app? Go VPS for power and flexibility.

// At Elexdon, we offer both options—fully optimized and monitored 24/7. You’re never locked in. As your site grows, you can upgrade seamlessly without downtime.

// Still unsure? Reach out to our support team. We’re here to guide you to the best decision based on your goals, traffic, and technical needs.

// No matter where you start, know this: Elexdon has your back. With the right hosting, your ideas have no limits.`
//   },
//   {
//     title: 'How to Secure Your Website in 2025',
//     image: blog5Img,
//     content: `The internet is evolving—and so are online threats. If you’re building a website in 2025, security isn’t optional—it’s essential.

// Let’s begin with **SSL certificates**. This simple layer of encryption protects your users' data and builds trust. At Elexdon, SSL is included free with every hosting plan.

// Next, keep your platform and plugins updated. Most vulnerabilities come from outdated software. Whether you’re using WordPress or custom apps, regular updates close security gaps.

// Use strong passwords and enable two-factor authentication for admin access. It’s a simple habit that protects against brute-force attacks.

// Don’t forget backups. Mistakes happen, and sites can get hacked. Elexdon runs automated daily backups, so you can recover instantly if something goes wrong.

// Install a firewall and malware scanner. We include security tools in your hosting dashboard to detect threats before they become problems.

// Lastly, educate yourself. The best defense is knowledge. Understand the basics of phishing, data protection, and user permissions.

// Remember, your website is more than a URL—it’s your brand, your business, and your voice. Protect it like you would any valuable asset. With Elexdon, you're not just getting hosting. You’re gaining a security partner committed to your success.`
//   },
//   {
//     title: 'Creating an Online Store with WooCommerce',
//     image: blog6Img,
//     content: `Dreaming of selling products online? With WooCommerce and Elexdon, building your store is easier than you think—no coding needed.

// Start by installing WordPress through our 1-click Softaculous installer. Then, add the free WooCommerce plugin. Within minutes, you’ll have a powerful, customizable online store ready for business.

// Choose a beautiful theme tailored for eCommerce. WooCommerce works with thousands of templates, and we’ll help you pick one that fits your brand.

// Add your products, set prices, manage stock, and start selling. From physical goods to digital downloads, WooCommerce supports it all.

// Need payment gateways? It integrates with PayPal, Stripe, credit cards, and more. You can even set up local delivery or international shipping with just a few clicks.

// What makes WooCommerce powerful is flexibility. Customize everything from your homepage to checkout process. With Elexdon’s fast hosting, your store loads quickly—keeping customers engaged and driving sales.

// Whether you’re a beginner or growing brand, your store deserves a strong foundation. That’s why Elexdon combines reliability with ease of use, so you can focus on what matters: your business.

// Start building your online empire today—because your customers are waiting.`
//   },
//   {
//     title: 'Top 10 Free Tools for Web Developers in 2025',
//     image: blog7Img,
//     content: `Web development in 2025 is more exciting than ever. Whether you're a student, freelancer, or seasoned pro, the right tools can supercharge your productivity—and most are free!

// Let’s dive into 10 must-have tools:

// 1. **Visual Studio Code** – Lightweight, customizable, and packed with extensions.
// 2. **Figma** – Collaborate on UI/UX design with real-time feedback.
// 3. **GitHub** – Version control and project management in one.
// 4. **CodePen** – Great for testing and showcasing frontend experiments.
// 5. **Postman** – Simplifies API testing and development.
// 6. **Canva** – Quick design work without Photoshop.
// 7. **Unsplash & Pexels** – Free high-quality stock images.
// 8. **Tailwind CSS** – Build modern UIs faster.
// 9. **Netlify** – Host and deploy static sites with ease.
// 10. **Elexdon’s Dev Toolkit** – Our own curated set of developer-friendly hosting and tools.

// Each of these tools helps you build smarter and faster. But tools are only half the equation—the real magic happens when you apply them with creativity and intention.

// At Elexdon, we’re constantly evolving to support developers. Whether you need scalable hosting, integrated Git workflows, or a friendly support team—we’re here to help you build boldly.

// Remember: great developers aren’t defined by how much they know—but how well they adapt and create. Keep learning. Keep coding. The web is your canvas.`
//   },
// ];


// const PageWrapper = styled.div`
//   font-family: 'Segoe UI', sans-serif;

  
// `;

// const Hero = styled.section`
//   position: relative;
//   padding: 80px 20px;
//   color: white;
//   text-align: center;
//   background-image: url(${blog});
//   background-size: cover;
//   background-position: center;
//   z-index: 1;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.7); /* Adjust transparency here */
//     z-index: 0;
//   }

//   > * {
//     position: relative;
//     z-index: 1;
//   }
// `;


// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   margin-bottom: 20px;
//    text-transform:uppercase;
// `;

// const HeroSub = styled.p`
//   font-size: 1.25rem;
//   max-width: 600px;
//   margin: 0 auto;
// `;

// const ContentSection = styled.section`
//   display: flex;
//   max-width: 1200px;
//   margin: 40px auto;
//   padding: 0 20px;
//   gap: 40px;

//   @media(max-width:768px){
//     display:flex;
//     flex-direction:column;
//   }
// `;

// const Sidebar = styled.div`
//   flex: 1;
//   min-width: 200px;
//   background: rgba(0,0,255,0.1);
//   border-radius: 12px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
//   padding: 20px;

  

// `;

// const SidebarTitle = styled.h2`
//   font-size: 1.2rem;
//   margin-bottom: 15px;
// `;

// const BlogList = styled.ul`
//   list-style: none;
//   padding: 0;

//   @media(max-width:768px){
//     height:200px;
//     overflow-y:scroll;
//   }
// `;

// const BlogItem = styled.li`
//   margin-bottom: 10px;
//   cursor: pointer;
//   font-weight: 500;
//   color: #2563eb;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const BlogContent = styled.article`
//   flex: 3;
//   background: white;
//   padding: 20px;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0,0,0,0.06);
// `;

// const BlogTitle = styled.h3`
//   font-size: 2rem;
//   margin-bottom: 15px;
//   color: #2563eb;
// `;

// const BlogImage = styled.img`
//   width: 100%;
//   border-radius: 12px;
//   margin-bottom: 20px;
// `;

// const BlogText = styled.p`
//   font-size: 1.1rem;
//   line-height: 1.7;
// `;

// const BlogPage = () => {
//   const [activeBlog, setActiveBlog] = useState(0);


//   const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
// const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const a = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const b = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const c = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const d = useAnimateOnScroll('animate__fadeInUp animate__slower');
// const e = useAnimateOnScroll('animate__fadeInDown animate__slower');

//   return (
//     <PageWrapper>
//       <Hero>
//         <HeroTitle ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Elexdon Blog Hub</HeroTitle>
//         <HeroSub ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Insights, tutorials, and resources to help you get the most out of your website and hosting experience.</HeroSub>
//       </Hero>

//       <ContentSection>
//         <Sidebar>
//           <SidebarTitle>Recent Articles</SidebarTitle>
//           <BlogList>
//             {blogs.map((blog, index) => (
//               <BlogItem key={index} onClick={() => setActiveBlog(index)}>
//                 {blog.title}
//               </BlogItem>
//             ))}
//           </BlogList>
//         </Sidebar>

//         <BlogContent>
//           <BlogTitle>{blogs[activeBlog].title}</BlogTitle>
//           <BlogImage src={blogs[activeBlog].image} alt={blogs[activeBlog].title} />
//           <BlogText>{blogs[activeBlog].content}</BlogText>
//         </BlogContent>
//       </ContentSection>
//     </PageWrapper>
//   );
// };

// export default BlogPage;



import React, { useState } from 'react';
import styled from 'styled-components';
import blog1Img from '../Images/blog1.jpg';
import blog2Img from '../Images/blog2.jpg';
import blog3Img from '../Images/blog3.jpg';
import blog4Img from '../Images/blog4.jpg';
import blog5Img from '../Images/blog5.jpg';
import blog6Img from '../Images/blog6.jpg';
import blog7Img from '../Images/blog7.jpg';
import blog from '../Images/blog.jpg';
import useAnimateOnScroll from './useAnimateOnScroll';
import 'animate.css';

const blogs = [
  {
    title: 'Why Choose Elexdon Hosting?',
    image: blog1Img,
    content: `Choosing the right hosting provider can be the turning point for your online success. At Elexdon, we believe that hosting is more than just a service—it's a partnership. We’ve built our infrastructure to deliver blazing-fast speed, near-perfect uptime, and top-notch support around the clock.

If you're tired of downtime or slow load speeds that turn visitors away, you're in the right place. We understand the challenges of small business owners, entrepreneurs, and developers who need scalable and secure solutions. That’s why our hosting packages come loaded with features that support you from day one.

Whether you’re running a simple blog or launching a full-scale eCommerce store, our systems are optimized to handle it. Our automated backups, powerful control panels, and intuitive tools mean you spend less time fixing issues and more time growing.

When you choose Elexdon, you're not just choosing technology—you’re choosing a community of support and innovation. Ready to take your website to the next level? Let Elexdon handle the heavy lifting while you focus on creating, building, and scaling with confidence.`
  },
  {
    title: 'Beginner’s Guide to Setting Up WordPress',
    image: blog2Img,
    content: `Welcome to your WordPress journey! If you’re new to website building, the process might seem overwhelming—but don’t worry. Elexdon is here to guide you every step of the way.

WordPress is a user-friendly, powerful platform that powers over 40% of all websites. Thanks to our 1-click Softaculous installer, launching your first site is easier than ever. Within minutes, you’ll go from zero to live, with no technical skills required.

Start by choosing a domain name that reflects your brand or purpose. Then, log into your Elexdon control panel and click “Install WordPress.” From there, Softaculous handles the rest—automatically setting up your database and WordPress files.

Once installed, you can log into your dashboard, choose a theme, and begin adding content. No need to learn code. Everything from layout to color customization is just a few clicks away.

We designed this process to be intuitive and beginner-friendly, but we’re always here if you need help. Our 24/7 support team can walk you through anything—no question is too small.

So breathe easy, get creative, and enjoy the process. You’re not just building a website; you're creating your digital identity. With Elexdon and WordPress, your online dreams are just getting started.`
  },
  {
    title: '5 Ways to Speed Up Your Website',
    image: blog3Img,
    content: `Speed matters. A slow website frustrates users and hurts your rankings on search engines. But don’t worry—there are simple ways to boost your site’s performance today.

First, optimize your images. Uploading massive photos can drag your site down. Use tools like TinyPNG or built-in WordPress plugins to compress them without losing quality.

Second, leverage browser caching. This allows repeat visitors to load your site faster by storing common files locally. Elexdon hosting supports this out of the box.

Third, choose lightweight themes and avoid bloated plugins. Every added plugin can slow things down, so only use what you truly need.

Fourth, enable a Content Delivery Network (CDN). A CDN spreads your content across servers worldwide, delivering it faster to global visitors. At Elexdon, our hosting plans integrate seamlessly with top CDN providers.

Lastly, upgrade your hosting plan. If you’re on shared hosting and seeing spikes in traffic, consider moving to VPS or semi-dedicated solutions. Elexdon offers flexible plans tailored to your growth.

Improving speed isn’t just technical—it’s a service to your audience. A fast site keeps users engaged, increases conversions, and enhances your brand. Let’s build a web that’s faster, together.`
  },
  {
    title: 'Shared vs VPS Hosting: What’s Right for You?',
    image: blog4Img,
    content: `So, you're planning to launch a website—but you're stuck on choosing between Shared and VPS hosting? Don’t worry, you're not alone. Let’s break it down.

**Shared Hosting** is like renting an apartment. You share space and resources with other websites. It’s affordable and beginner-friendly, perfect for small blogs, personal sites, or new startups.

**VPS Hosting**, on the other hand, is like owning a condo. You get dedicated resources and more control over your environment. It’s ideal for growing businesses, developers, or anyone needing higher performance and scalability.

Ask yourself: Do you expect low to moderate traffic? Shared might be perfect. Running an eCommerce site or custom app? Go VPS for power and flexibility.

At Elexdon, we offer both options—fully optimized and monitored 24/7. You’re never locked in. As your site grows, you can upgrade seamlessly without downtime.

Still unsure? Reach out to our support team. We’re here to guide you to the best decision based on your goals, traffic, and technical needs.

No matter where you start, know this: Elexdon has your back. With the right hosting, your ideas have no limits.`
  },
  {
    title: 'How to Secure Your Website in 2025',
    image: blog5Img,
    content: `The internet is evolving—and so are online threats. If you’re building a website in 2025, security isn’t optional—it’s essential.

Let’s begin with **SSL certificates**. This simple layer of encryption protects your users' data and builds trust. At Elexdon, SSL is included free with every hosting plan.

Next, keep your platform and plugins updated. Most vulnerabilities come from outdated software. Whether you’re using WordPress or custom apps, regular updates close security gaps.

Use strong passwords and enable two-factor authentication for admin access. It’s a simple habit that protects against brute-force attacks.

Don’t forget backups. Mistakes happen, and sites can get hacked. Elexdon runs automated daily backups, so you can recover instantly if something goes wrong.

Install a firewall and malware scanner. We include security tools in your hosting dashboard to detect threats before they become problems.

Lastly, educate yourself. The best defense is knowledge. Understand the basics of phishing, data protection, and user permissions.

Remember, your website is more than a URL—it’s your brand, your business, and your voice. Protect it like you would any valuable asset. With Elexdon, you're not just getting hosting. You’re gaining a security partner committed to your success.`
  },
  {
    title: 'Creating an Online Store with WooCommerce',
    image: blog6Img,
    content: `Dreaming of selling products online? With WooCommerce and Elexdon, building your store is easier than you think—no coding needed.

Start by installing WordPress through our 1-click Softaculous installer. Then, add the free WooCommerce plugin. Within minutes, you’ll have a powerful, customizable online store ready for business.

Choose a beautiful theme tailored for eCommerce. WooCommerce works with thousands of templates, and we’ll help you pick one that fits your brand.

Add your products, set prices, manage stock, and start selling. From physical goods to digital downloads, WooCommerce supports it all.

Need payment gateways? It integrates with PayPal, Stripe, credit cards, and more. You can even set up local delivery or international shipping with just a few clicks.

What makes WooCommerce powerful is flexibility. Customize everything from your homepage to checkout process. With Elexdon’s fast hosting, your store loads quickly—keeping customers engaged and driving sales.

Whether you’re a beginner or growing brand, your store deserves a strong foundation. That’s why Elexdon combines reliability with ease of use, so you can focus on what matters: your business.

Start building your online empire today—because your customers are waiting.`
  },
  {
    title: 'Top 10 Free Tools for Web Developers in 2025',
    image: blog7Img,
    content: `Web development in 2025 is more exciting than ever. Whether you're a student, freelancer, or seasoned pro, the right tools can supercharge your productivity—and most are free!

Let’s dive into 10 must-have tools:

1. **Visual Studio Code** – Lightweight, customizable, and packed with extensions.
2. **Figma** – Collaborate on UI/UX design with real-time feedback.
3. **GitHub** – Version control and project management in one.
4. **CodePen** – Great for testing and showcasing frontend experiments.
5. **Postman** – Simplifies API testing and development.
6. **Canva** – Quick design work without Photoshop.
7. **Unsplash & Pexels** – Free high-quality stock images.
8. **Tailwind CSS** – Build modern UIs faster.
9. **Netlify** – Host and deploy static sites with ease.
10. **Elexdon’s Dev Toolkit** – Our own curated set of developer-friendly hosting and tools.

Each of these tools helps you build smarter and faster. But tools are only half the equation—the real magic happens when you apply them with creativity and intention.

At Elexdon, we’re constantly evolving to support developers. Whether you need scalable hosting, integrated Git workflows, or a friendly support team—we’re here to help you build boldly.

Remember: great developers aren’t defined by how much they know—but how well they adapt and create. Keep learning. Keep coding. The web is your canvas.`
  },
];

const PageWrapper = styled.div`
  font-family: 'Inter', 'Segoe UI', sans-serif;
  background-color: #f8fafc;
  color: #102a43;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

const Hero = styled.section`
  position: relative;
  padding: 50px 10px;
  text-align: center;
  background-image: url(${blog});
  background-size: cover;
  background-position: center;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  margin: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(16, 42, 67, 0.9), rgba(79, 70, 229, 0.8));
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 10px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ffffff;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
`;

const HeroSub = styled.p`
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
  color: #f1f5f9;
`;

const ContentSection = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 10px auto;
  padding: 0 10px;
  gap: 10px;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  flex: 1;
  min-width: 200px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  padding: 10px;
  margin: 0;
  height: fit-content;
`;

const SidebarTitle = styled.h2`
  font-size: 1.1rem;
  margin: 0 0 10px 0;
  color: #102a43;
  border-bottom: 2px solid #4f46e5;
  padding-bottom: 8px;
`;

const BlogList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media(max-width: 768px) {
    max-height: 200px;
    overflow-y: auto;
  }
`;

const BlogItem = styled.li`
  margin: 0 0 10px 0;
  padding: 8px 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
  color: ${props => props.$active ? '#ffffff' : '#475569'};
  background: ${props => props.$active ? 'linear-gradient(135deg, #4f46e5 0%, #9333ea 100%)' : 'transparent'};
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    background: ${props => props.$active ? 'linear-gradient(135deg, #4f46e5 0%, #9333ea 100%)' : '#f1f5f9'};
    color: ${props => props.$active ? '#ffffff' : '#102a43'};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const BlogContent = styled.article`
  flex: 3;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  margin: 0;
`;

const BlogTitle = styled.h3`
  font-size: 1.8rem;
  margin: 0 0 10px 0;
  background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BlogImage = styled.img`
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  border-radius: 8px;
  margin: 0 0 10px 0;
`;

const BlogText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #334155;
  margin: 0;
  white-space: pre-line;
`;

const BlogPage = () => {
  const [activeBlog, setActiveBlog] = useState(0);

  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
  const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');

  return (
    <PageWrapper>
      <Hero>
        <HeroTitle ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Elexdon Blog Hub</HeroTitle>
        <HeroSub ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Insights, tutorials, and resources to help you get the most out of your website and hosting experience.</HeroSub>
      </Hero>

      <ContentSection>
        <Sidebar>
          <SidebarTitle>Recent Articles</SidebarTitle>
          <BlogList>
            {blogs.map((blog, index) => (
              <BlogItem 
                key={index} 
                $active={activeBlog === index}
                onClick={() => setActiveBlog(index)}
              >
                {blog.title}
              </BlogItem>
            ))}
          </BlogList>
        </Sidebar>

        <BlogContent>
          <BlogTitle>{blogs[activeBlog].title}</BlogTitle>
          <BlogImage src={blogs[activeBlog].image} alt={blogs[activeBlog].title} />
          <BlogText>{blogs[activeBlog].content}</BlogText>
        </BlogContent>
      </ContentSection>
    </PageWrapper>
  );
};

export default BlogPage;