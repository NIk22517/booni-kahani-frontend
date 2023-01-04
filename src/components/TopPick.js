import React from "react";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";
import Image from "../assets/product-1.png";

const TopPick = () => {
  return (
    <ProductStyle>
      <h1 className='deal'>Deal Of the day</h1>
      <section className='deal-day'>
        <article>
          <img src={Image} alt='' />
          <div className='detail'>
            <h6>Bolsters</h6>
            <div className='start-rating'>
              <BsFillStarFill />
              <p>33.4K</p>
            </div>
          </div>
        </article>
        <article>
          <img src={Image} alt='' />
          <div className='detail'>
            <h6>Bolsters</h6>
            <div className='start-rating'>
              <BsFillStarFill />
              <p>33.4K</p>
            </div>
          </div>
        </article>

        <article>
          <img src={Image} alt='' />
          <div className='detail'>
            <h6>Bolsters</h6>
            <div className='start-rating'>
              <BsFillStarFill />
              <p>33.4K</p>
            </div>
          </div>
        </article>

        <article>
          <img src={Image} alt='' />
          <div className='detail'>
            <h6>Bolsters</h6>
            <div className='start-rating'>
              <BsFillStarFill />
              <p>33.4K</p>
            </div>
          </div>
        </article>
      </section>

      <h1 className='pick'>Top Picks</h1>

      <section className='top-pick'>
        <article>
          <img src={Image} alt='' />
          <div className='detail'>
            <h6>Bolsters</h6>
            <div className='start-rating'>
              <BsFillStarFill />
              <p>33.4K</p>
            </div>
          </div>
        </article>

        <article>
          <img src={Image} alt='' />
          <div className='detail'>
            <h6>Bolsters</h6>
            <div className='start-rating'>
              <BsFillStarFill />
              <p>33.4K</p>
            </div>
          </div>
        </article>

        <article>
          <img src={Image} alt='' />
          <div className='detail'>
            <h6>Bolsters</h6>
            <div className='start-rating'>
              <BsFillStarFill />
              <p>33.4K</p>
            </div>
          </div>
        </article>

        <article>
          <img src={Image} alt='' />
          <div className='detail'>
            <h6>Bolsters</h6>
            <div className='start-rating'>
              <BsFillStarFill />
              <p>33.4K</p>
            </div>
          </div>
        </article>
      </section>
    </ProductStyle>
  );
};

export default TopPick;

const ProductStyle = styled.section`
  padding: 3rem 5rem;

  .deal {
    padding-block: 1rem;
  }
  .pick {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
  section {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    color: white;
    article {
      max-width: 300px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      background: linear-gradient(358.15deg, #240808 7.5%, #a9a8a8 62.78%);

      img {
        width: 100%;
      }

      .detail {
        display: flex;
        justify-content: space-between;

        .start-rating {
          display: flex;
          gap: 0.5rem;
        }
      }
    }
  }

  .deal-day {
    article {
      position: relative;
    }

    article::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 50%;
      left: 0;
      top: 0;
      background-color: #240808;
      clip-path: polygon(25% 0, 46% 0, 0 40%, 0 20%);
    }
    article::after {
      content: "15% OFF";
      position: absolute;
      left: 15px;
      top: 22px;
      rotate: -30deg;
      scale: 1.4;
    }
  }

  @media (max-width: 600px) {
    section {
      flex-direction: column;

      /* article {
        width: 50%;
      } */
    }
  }
`;
