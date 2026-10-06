import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { FaArrowLeft, FaCalendarAlt, FaFolder, FaChevronRight } from "react-icons/fa";
import { Context } from "./Context";
import { useNavigate } from "react-router-dom";

/* ================= STYLES (PUBLIC BLOG LANDING) ================= */

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
  font-family: 'Inter', sans-serif;
  color: #1f2937;
  padding-top:50px;
`;

// const HeroSection = styled.div`
//   text-align: center;
//   margin-bottom: 50px;
  
//   h1 {
//     font-size: 2.5rem;
//     font-weight: 800;
//     color: #111827;
//     margin-bottom: 12px;
//     background: linear-gradient(90deg, #4f46e5, #9333ea);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }

//   p {
//     font-size: 1.1rem;
//     color: #6b7280;
//     max-width: 600px;
//     margin: 0 auto;
//   }
// `;



const HeroSection = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 50px;
  padding: 80px 20px; /* Added padding to give the background height */
  border-radius: 20px;
  overflow: hidden;
  background-image: url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1920&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Dark Overlay */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.7)
    );
    z-index: 1;
  }

  /* Ensure content sits above the overlay */
  > * {
    position: relative;
    z-index: 2;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 12px;
    /* Removed the gradient text clip so it stays white over the image */
    color: #ffffff; 
  }

  p {
    font-size: 1.1rem;
    color: #e5e7eb; /* Lighter color for better readability */
    max-width: 600px;
    margin: 0 auto;
    font-weight: 300;
  }
`;



const CategoriesScroll = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 15px;
  margin-bottom: 40px;
  justify-content: center;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e5e7eb;
    border-radius: 10px;
  }
`;

const CategoryPill = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid ${({ active }) => (active ? "#4f46e5" : "#e5e7eb")};
  background: ${({ active }) => (active ? "#4f46e5" : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#4b5563")};
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ active }) => (active ? "0 4px 14px rgba(79, 70, 229, 0.4)" : "0 2px 5px rgba(0,0,0,0.02)")};

  &:hover {
    background: ${({ active }) => (active ? "#4338ca" : "#f3f4f6")};
    border-color: ${({ active }) => (active ? "#4338ca" : "#d1d5db")};
    transform: translateY(-2px);
  }
`;

const BlogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
`;

const BlogCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
  border: 1px solid #f3f4f6;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

const CardImage = styled.div`
  height: 210px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const CategoryBadge = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(17, 24, 39, 0.75);
  backdrop-filter: blur(4px);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const CardContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 12px;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 0.8rem;
  color: #9ca3af;
  margin-bottom: 14px;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const ReadMore = styled.div`
  margin-top: auto;
  font-size: 0.9rem;
  font-weight: 600;
  color: #4f46e5;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: gap 0.2s ease;

  ${BlogCard}:hover & {
    gap: 10px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: #6b7280;
  grid-column: 1 / -1;

  h3 {
    font-size: 1.5rem;
    color: #374151;
    margin-bottom: 8px;
  }
`;

/* PAGINATION */
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 10px;
  flex-wrap: wrap;
`;

const PageButton = styled.button`
  min-width: 44px;
  height: 44px;
  padding: 0 12px;
  border-radius: 12px;
  border: none;
  background: ${({ active }) => (active ? "#4f46e5" : "#ffffff")};
  color: ${({ active }) => (active ? "#fff" : "#4b5563")};
  box-shadow: ${({ active }) => (active ? "0 4px 14px rgba(79, 70, 229, 0.4)" : "0 2px 5px rgba(0,0,0,0.05)")};
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:hover {
    background: #4f46e5;
    color: #fff;
    transform: translateY(-2px);
  }
`;

const BackLinkWrapper = styled.div`
  margin-bottom: 25px;

  p {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #4f46e5;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease;
    margin: 0;

    &:hover {
      transform: translateX(-4px);
    }
  }
`;

/* ================= COMPONENT ================= */

const PublicBlogPage = ({ handleMenuBack }) => {
  const { categories } = useContext(Context);
  const api_domain = "https://www.mikeconnect.com/mc_api";
  
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(5); // 0 means "All Categories"
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [availablePages, setAvailablePages] = useState([1]);
  const limit = 50;

  /* -------- FETCH POSTS BY CATEGORY -------- */
  const fetchPosts = (pageNum = 1, categoryId = selectedCategory) => {
    axios
      .get(`${api_domain}/get_posts_by_category.php`, {
        params: {
          category: categoryId,
          page: pageNum,
          t: Date.now(),
        },
      })
      .then(res => {
        if (res.data?.success) {
          const fetchedPosts = res.data.posts || [];
          setPosts(fetchedPosts);

          if (fetchedPosts.length === limit) {
            setAvailablePages(prev => {
              const next = pageNum + 1;
              return prev.includes(next) ? prev : [...prev, next];
            });
          }
        } else {
          setPosts([]);
        }
      })
      .catch(() => setPosts([]));
  };

  useEffect(() => {
    setPage(1);
    setAvailablePages([1]);
    fetchPosts(1, selectedCategory);
  }, [selectedCategory]);

  return (
    <Container>
      {handleMenuBack && (
        <BackLinkWrapper>
          <p onClick={handleMenuBack}>
            <FaArrowLeft /> Back
          </p>
        </BackLinkWrapper>
      )}

      <HeroSection>
        <h1>Our Blogs & Insights</h1>
        <p>Explore articles, tutorials, and updates curated by our expert team.</p>
      </HeroSection>

      {/* Categories Filter Bar */}
      <CategoriesScroll>
        {/* <CategoryPill
          active={selectedCategory === 0}
          onClick={() => setSelectedCategory(0)}
        >
          All Stories
        </CategoryPill> */}
        {categories?.map(c => (
          <CategoryPill
            key={c.id}
            active={selectedCategory === c.id}
            onClick={() => setSelectedCategory(c.id)}
          >
            {c.title}
          </CategoryPill>
        ))}
      </CategoriesScroll>

      {/* Blogs Grid */}
      <BlogsGrid>
        {posts.length > 0 ? (
          posts.map(post => {
            const category = categories?.find(c => c.id == post.category);
            return (
              <BlogCard
                key={post.id}
                onClick={() => navigate(`/post/${post.slug}`)}
              >
                <CardImage
                  bg={post.image || "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4"}
                >
                  {/* <CategoryBadge>
                    <FaFolder /> {category?.title || "General"}
                  </CategoryBadge> */}
                </CardImage>

                <CardContent>
                  <BlogMeta>
                    <span>
                      <FaCalendarAlt /> {new Date(post.created_at).toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </BlogMeta>
                  
                  <h3>{post.title}</h3>

                  <ReadMore>
                    Read Article <FaChevronRight size={10} />
                  </ReadMore>
                </CardContent>
              </BlogCard>
            );
          })
        ) : (
          <EmptyState>
            <h3>No posts found</h3>
            <p>There are no blog posts available in this category right now.</p>
          </EmptyState>
        )}
      </BlogsGrid>

      {/* PAGINATION */}
      {availablePages.length > 1 && (
        <PaginationWrapper>
          {availablePages.map(p => (
            <PageButton
              key={p}
              active={p === page}
              onClick={() => {
                setPage(p);
                fetchPosts(p, selectedCategory);
              }}
            >
              {p}
            </PageButton>
          ))}
        </PaginationWrapper>
      )}
    </Container>
  );
};

export default PublicBlogPage;