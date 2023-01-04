import React from "react";
import styled from "styled-components";
import BGimage from "../assets/yellow-taxi.png";

const NewsLetter = () => {
  return (
    <NewsletterStyle>
      <article>
        <h3>Subscribe to our newsletter</h3>
        <p>
          Subscribe to our mailing list for coupon codes, product launches, and
          much more. Drop your e-mail and get a 10%OFF on our entire range!
        </p>

        <input type='text' placeholder='Email' />
      </article>
    </NewsletterStyle>
  );
};

export default NewsLetter;

const NewsletterStyle = styled.section`
  background-image: url(${BGimage});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 2rem 5rem;
    h3,
    p {
      padding-block: 0.5rem;
    }
    input {
      margin-block: 1rem;
      width: 50vh;
      outline: none;
    }
  }

  @media (max-width: 600px) {
    article {
      input {
        /* width: 20vh; */
      }
    }
  }
`;
