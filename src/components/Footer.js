import React from "react";
import styled from "styled-components";
import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <FooterStyle>
      <section>
        <article>
          <ul>
            <li>FAQs</li>
            <li>CONTACT US</li>
            <li>TERMS & CONDITIONS</li>
          </ul>
        </article>

        <article>
          <ul>
            <li>RETURN POLICY</li>
            <li>ABOUT US</li>
            <li>TRACK YOUR ORDER</li>
          </ul>
        </article>

        <article>
          <ul>
            <li>PRIVACY POLICY</li>
          </ul>
        </article>
      </section>

      <hr />

      <div className='social-links'>
        <button>
          <GrInstagram />
        </button>
        <button>
          <GrFacebookOption />
        </button>
        <button>
          <GrTwitter />
        </button>
      </div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.footer`
  background-color: #240808;
  color: white;
  min-height: 50vh;
  padding: 0rem 3rem;

  section {
    padding-block: 3rem;
    display: flex;
    gap: 10rem;

    ul {
      list-style: none;

      li {
        padding-block: 0.5rem;
      }
    }
  }

  .social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding-block: 2rem;
    button {
      padding: 1rem;
      border-radius: 50%;

      svg {
        scale: 2;
      }
    }
  }

  @media (max-width: 600px) {
    section {
      flex-direction: column;
      gap: 3rem;
    }

    .social-links {
      gap: 2rem;
    }
  }
`;
