import React from "react";
import styled from "styled-components";
import Image from "../assets/sleeping1.png";

const Blogs = () => {
  return (
    <BlogStyle>
      <h1>Blogs</h1>
      <section className='blog'>
        <article>
          <img src={Image} alt='' />
          <div className='content'>
            <h4>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem.
            </h4>
            <button>Read More</button>
          </div>
        </article>

        <article>
          <img src={Image} alt='' />

          <div className='content'>
            <h4>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem.
            </h4>
            <button>Read More</button>
          </div>
        </article>
      </section>
    </BlogStyle>
  );
};

export default Blogs;

const BlogStyle = styled.section`
  padding: 3rem 5rem;
  background-color: #d9d9d9;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    padding-bottom: 3rem;
    text-align: center;
  }
  .blog {
    display: flex;
    gap: 2rem;
    /* justify-content: space-around; */
    article {
      display: flex;
      gap: 1rem;

      img {
        width: 35%;
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;

        button {
          background-color: #33363f;
          color: white;
          border: none;
          border-radius: 1rem;
          padding: 0.5rem 1rem;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .blog {
      flex-direction: column;
      align-items: center;

      article {
      }
    }
  }
`;
