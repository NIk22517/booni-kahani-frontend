import React from "react";
import styled from "styled-components";
import MenImg from "../assets/men.png";
import WomenImg from "../assets/women.png";

const Collections = () => {
  return (
    <CollectionStyle>
      <h1>Collection</h1>
      <section className='collection'>
        <article>
          <img src={MenImg} alt='' />
          <h4>For Men</h4>
        </article>

        <article>
          <img src={WomenImg} alt='' />
          <h4>For Women</h4>
        </article>

        <article>
          <img src={MenImg} alt='' />
          <h4>For Men</h4>
        </article>
      </section>
    </CollectionStyle>
  );
};

export default Collections;

const CollectionStyle = styled.section`
  padding: 3rem 5rem;
  background-color: #d9d9d9;
  h1 {
    padding-block: 1rem;
  }
  .collection {
    display: flex;
    justify-content: center;
    align-items: center;

    article {
      text-align: center;
      img {
        width: 50%;
        border-radius: 50%;
      }

      h4{
        padding-top: 0.5rem;
      }
    }
  }
`;
