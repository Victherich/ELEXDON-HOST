




import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet-async"; // 👈 Import Helmet
import DOMPurify from "dompurify";
import axios from "axios";

export default function PostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const api_domain = "https://www.mikeconnect.com/mc_api"; // Replace with your actual API domain

//   useEffect(() => {
//     if (!slug) return;
//     setLoading(true);
//     setError(null);

//     try {
//       const cached = localStorage.getItem("all_posts");
//       if (!cached) {
//         setError("No cached posts found");
//         return;
//       }
//       const allPosts = JSON.parse(cached);
//       const foundPost = allPosts.find((p) => p.slug === slug);

//       if (!foundPost) {
//         setError("Post not found");
//       } else {
//         setPost(foundPost);
//       }
//     } catch (err) {
//       setError("Error loading post");
//     } finally {
//       setLoading(false);
//     }
//   }, [slug]);



useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(null);

    axios
      .get(`${api_domain}/get_post_by_slug.php`, {
        params: {
          slug: slug,
          t: Date.now(),
        },
      })
      .then((res) => {
        if (res.data?.success && res.data.post) {
          setPost(res.data.post);
        } else {
          setError(res.data?.error || "Post not found");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Error loading post. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);




  if (error) return <Status>{error}</Status>;
  if (!post) return null;

  const currentUrl = window.location.href;

  return (
    <Wrapper>
      {/* 🚀 Dynamic Meta Tags for Social Sharing */}
      {/* <Helmet>
        <title>{post.title} | MikeConnect</title>
        <meta name="description" content={post.title} />
        
 
        <meta property="og:type" content="article" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.title} />
        <meta property="og:image" content={post.image} />
      </Helmet> */}

      <HeaderContainer>
        <Title>{post.title}</Title>
        <Meta>Published on {new Date(post.created_at).toDateString()}</Meta>
      </HeaderContainer>

      {post.image && (
        <ImageWrapper>
          <BlogImage src={post.image} alt={post.title} />
        </ImageWrapper>
      )}

      <ContentWrapper>
        <Article
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content),
          }}
        />
      </ContentWrapper>

      <BackWrapper>
        <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
      </BackWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Poppins", sans-serif;
  color: #111;
  padding-top:50px;
`;

const Hero = styled.div`
  height: 60vh;
  min-height: 320px;

  background-position: top;
  position: relative;
  display: flex;
  align-items: flex-end;

  @media (max-width: 768px) {
    // height: 45vh;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 1)
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  color: #fff;
  animation: fadeUp 0.6s ease-out;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


const ContentWrapper = styled.div`
  max-width: 900px;
  margin:0 auto;
  padding: 40px;
  background: white;
  border-radius: 16px;
  // box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
 
    padding: 24px;
  }
`;

const Article = styled.div`
  font-size: 0.9rem;
  // line-height: 1.9;
  color: #333;

  a {
    color: #2563eb;
    font-weight: 500;
    text-decoration: underline;
    word-break: break-word;
  }

  a:hover {
    color: #1e40af;
  }

  br {
    display: block;
    margin-bottom: 12px;
  }


  /* ✅ Headings in green */
  h1, h2, h3, h4, h5, h6 {
    color: #16a34a; /* nice green */
  }

    /* ✅ Move lists slightly to the right */
  ul, ol {
    padding-left: 20px;
    margin-left: 10px;
  }
`;


const Status = styled.div`
  text-align: center;
  margin-top: 120px;
  font-size: 1.3rem;
  color: #555;
`;


const BackWrapper = styled.div`
  margin-top: 60px;
  margin-bottom:60px;
  display: flex;
  justify-content: center;
`;

const BackButton = styled.button`
  background: linear-gradient(135deg, #4f46e5, #6366f1);
  color: white;
  border: none;
  padding: 14px 36px;
  font-size: 1rem;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 10px 25px rgba(79, 70, 229, 0.35);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(79, 70, 229, 0.45);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }
`;


const LinksSection = styled.div`
  margin-top: 30px;
`;

const LinksTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  color:green;
`;

const LinkItem = styled.div`
  margin-bottom: 8px;

  a {
    color: #2563eb;
    font-weight: 500;
    text-decoration: underline;

    &:hover {
      color: #1e40af;
    }
  }
`;


const HeaderContainer = styled.header`
  max-width: 740px;      /* Matches clean, readable modern reading widths */
  margin: 0 auto;
  padding: 40px 20px 24px 20px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 1.2;
  font-weight: 900;
  color: #4f46e5;        /* Crisp, modern near-black */
  margin-bottom: 12px;
//   color:green;
  text-align:center;

  @media (max-width: 768px) {
    font-size: 1.85rem;
  }
`;

const Meta = styled.div`
  font-size: 0.95rem;
  color: #6b7280;        /* Sleek modern gray */
  text-align:center;
`;



const ImageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto 40px auto;
  border-radius: 12px;
  
  /* Flexbox centers the image if its natural size is smaller than 900px */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px; /* Gives small breathing room on mobile screens */
`;

const BlogImage = styled.img`
  /* 1. Forces the image to render at its exact natural size */
  width: auto;
  height: auto;

  /* 2. Caps large images to the container width so they don't spill out */
  max-width: 100%;

  /* 3. Prevents any artificial stretching or squishing */
  object-fit: normal; 
  display: block;
`;