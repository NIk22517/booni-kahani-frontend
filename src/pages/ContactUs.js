import React from "react";
import styled from "styled-components";
import BgImg from "../assets/map.png";
import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";

const ContactUs = () => {
  return (
    <ContactUsStyle>
      <header>
        <h1>GET IN TOUCH</h1>
      </header>

      <section>
        <article className='left'>
          <h1>Send us a Message</h1>

          <form action=''>
            <input type='text' placeholder='Your Name' />
            <input type='email' placeholder='Email ' />
            <input type='tel' name='' id='' placeholder='Phone' />
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='Message'
            ></textarea>
          </form>
        </article>
        <article className='rigth'>
          <h1>Contact Information</h1>

          <p>
            <span>Email :</span>contact@boonikahani.com
          </p>
          <p>
            <span>Phone Number :</span> 9748700140
          </p>
          <p>
            <span>Address :</span> Vasant Kunj New Delhi 110070
          </p>

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
        </article>
      </section>
    </ContactUsStyle>
  );
};

export default ContactUs;

const ContactUsStyle = styled.main`
  header {
    background-image: url(${BgImg});
    min-height: 50vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #380d0d;
    display: flex;
    align-items: center;
    color: white;
  }

  section {
    display: flex;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      outline: none;
      border: none;
      border-bottom: 2px solid black;
    }
    textarea {
      border: none;
      border-bottom: 2px solid black;
    }
  }

  .left {
    background-color: #ffffff;
    padding: 2rem;
  }
  .rigth {
    background-color: #221818;
    color: white;
    padding: 2rem;
  }
`;
