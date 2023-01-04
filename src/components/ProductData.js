import React from "react";
import styled from "styled-components";
import { BsFillStarFill } from "react-icons/bs";
import ProductImg from "../assets/product-img.png";

const Data = [
  {
    scr: ProductImg,
    rating: 4,
    view: "33.4K",
    productName: "de Finibus",
    description: "Bonorum et Malorum",
    price: 999,
    offer: "62% OFF",
  },
  {
    scr: ProductImg,
    rating: 4,
    view: "33.4K",
    productName: "de Finibus",
    description: "Bonorum et Malorum",
    price: 999,
    offer: "62% OFF",
  },
  {
    scr: ProductImg,
    rating: 4,
    view: "33.4K",
    productName: "de Finibus",
    description: "Bonorum et Malorum",
    price: 999,
    offer: "62% OFF",
  },
  {
    scr: ProductImg,
    rating: 4,
    view: "33.4K",
    productName: "de Finibus",
    description: "Bonorum et Malorum",
    price: 999,
    offer: "62% OFF",
  },
  {
    scr: ProductImg,
    rating: 4,
    view: "33.4K",
    productName: "de Finibus",
    description: "Bonorum et Malorum",
    price: 999,
    offer: "62% OFF",
  },
  {
    scr: ProductImg,
    rating: 4,
    view: "33.4K",
    productName: "de Finibus",
    description: "Bonorum et Malorum",
    price: 999,
    offer: "62% OFF",
  },
  {
    scr: ProductImg,
    rating: 4,
    view: "33.4K",
    productName: "de Finibus",
    description: "Bonorum et Malorum",
    price: 999,
    offer: "62% OFF",
  },
  {
    scr: ProductImg,
    rating: 4,
    view: "33.4K",
    productName: "de Finibus",
    description: "Bonorum et Malorum",
    price: 999,
    offer: "62% OFF",
  },
  {
    scr: ProductImg,
    rating: 4,
    view: "33.4K",
    productName: "de Finibus",
    description: "Bonorum et Malorum",
    price: 999,
    offer: "62% OFF",
  },
  {
    scr: ProductImg,
    rating: 4,
    view: "33.4K",
    productName: "de Finibus",
    description: "Bonorum et Malorum",
    price: 999,
    offer: "62% OFF",
  },
  {
    scr: ProductImg,
    rating: 4,
    view: "33.4K",
    productName: "de Finibus",
    description: "Bonorum et Malorum",
    price: 999,
    offer: "62% OFF",
  },
  {
    scr: ProductImg,
    rating: 4,
    view: "33.4K",
    productName: "de Finibus",
    description: "Bonorum et Malorum",
    price: 999,
    offer: "62% OFF",
  },
];

const ProductData = () => {
  return (
    <ProductDataStyle>
      {Data.map((product, idx) => {
        return (
          <article key={idx}>
            <div className='product-img'>
              <img src={product.scr} alt='' />

              <div className='rating'>
                <h4>{product.rating}</h4>
                <BsFillStarFill />
                <h4 className='view'>{product.view}</h4>
              </div>
            </div>
            <div className='product-detail'>
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
              <div className='price'>
                <h4>{product.price}</h4>
                <h5>{product.offer}</h5>
              </div>
            </div>
          </article>
        );
      })}
    </ProductDataStyle>
  );
};

export default ProductData;

const ProductDataStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 3rem;

  article {
    .product-img {
      position: relative;
      img {
        width: 95%;
      }

      .rating {
        display: flex;
        position: absolute;
        bottom: 10px;
        left: 10px;
        background-color: #ffffff7b;

        .view {
          padding-left: 0.5rem;
        }
      }
    }
    .product-detail {
      .price {
        display: flex;
        gap: 0.5rem;
      }
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
