import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import BgImg from "../assets/productBg.png";
const ProductsTopSection = () => {
  return (
    <ProductTopStyle>
      <Nav />

      <section>
        <div className='detail'>
          <h1>RAI PILLOWS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est
          </p>
          <button>Buy Now</button>
        </div>
      </section>
    </ProductTopStyle>
  );
};

export default ProductsTopSection;

const ProductTopStyle = styled.main`
  min-height: 90vh;
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;

  section {
    color: white;
    padding-inline: 3rem;

    .detail {
      max-width: 400px;
      min-height: 80vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 1.5rem;

      button {
        border: none;
        background-color: black;
        border-radius: 1rem;
        padding: 0.5rem 2rem;
        color: white;
      }
    }
  }
`;
