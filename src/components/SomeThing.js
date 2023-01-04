import React from "react";
import styled from "styled-components";
import BGimage from "../assets/yellow-taxi.png";
import Image from "../assets/sapling-5.png";

const SomeThing = () => {
  return (
    <SomethingStyle>
      unde omnis iste natus error sit voluptatem
      <section className='something'>
        <article>
          <img src={Image} alt='' />
          <h5>unde omnis iste natus error sit voluptatem </h5>
          <h5>
            accusantium doloremque laudantium, totam rem. unde omnis iste natus
            error sit voluptatem accusantium doloremque
          </h5>
        </article>

        <article>
          <img src={Image} alt='' />
          <h5>unde omnis iste natus error sit voluptatem </h5>
          <h5>
            accusantium doloremque laudantium, totam rem. unde omnis iste natus
            error sit voluptatem accusantium doloremque
          </h5>
        </article>

        <article>
          <img src={Image} alt='' />
          <h5>unde omnis iste natus error sit voluptatem </h5>
          <h5>
            accusantium doloremque laudantium, totam rem. unde omnis iste natus
            error sit voluptatem accusantium doloremque
          </h5>
        </article>
      </section>
    </SomethingStyle>
  );
};

export default SomeThing;

const SomethingStyle = styled.section`
  background-image: url(${BGimage});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .something {
    display: flex;
    align-items: center;
    justify-content: center;

    article {
      background-color: white;
      text-align: center;
      max-width: 20rem;
      padding: 0rem 1rem 1rem 1rem;

      h5 {
        padding-block: 0.5rem;
      }
    }

    article:nth-child(2) {
      background-color: #221818;
      color: white;
    }
  }

  @media (max-width: 600px) {
    .something {
      flex-direction: column;
    }
  }
`;
