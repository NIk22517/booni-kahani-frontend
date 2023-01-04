import React from "react";
import styled from "styled-components";
import Toggle from "../components/Toggle";

const Faq = () => {
  return (
    <FaqStyle>
      <header>
        <h1>FAQ’s</h1>
      </header>

      <section>
        <Toggle title='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'>
          <div className='answer'>
            <p>
              {" "}
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem. Ut enim ad minima veniam
            </p>
          </div>
        </Toggle>

        <Toggle title='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'>
          <div className='answer'>
            <p>
              {" "}
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem. Ut enim ad minima veniam
            </p>
          </div>
        </Toggle>

        <Toggle title='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'>
          <div className='answer'>
            <p>
              {" "}
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem. Ut enim ad minima veniam
            </p>
          </div>
        </Toggle>

        <Toggle title='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'>
          <div className='answer'>
            <p>
              {" "}
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem. Ut enim ad minima veniam
            </p>
          </div>
        </Toggle>

        <Toggle title='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'>
          <div className='answer'>
            <p>
              {" "}
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem. Ut enim ad minima veniam
            </p>
          </div>
        </Toggle>

        <Toggle title='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'>
          <div className='answer'>
            <p>
              {" "}
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem. Ut enim ad minima veniam
            </p>
          </div>
        </Toggle>
      </section>
    </FaqStyle>
  );
};

export default Faq;

const FaqStyle = styled.main`
  background-color: #f5f5f5;
  padding-block: 2rem;
  header {
    text-align: center;
    padding-block: 2rem;
  }

  .question {
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    background-color: #ffffff;
    border-radius: 1rem;
    margin-inline: 3rem;
    p {
      padding: 1rem 3rem;
    }
  }
`;
