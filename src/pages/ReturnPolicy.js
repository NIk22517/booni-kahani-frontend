import React from "react";
import styled from "styled-components";
const ReturnPolicy = () => {
  return (
    <ReturnPolicyStyle>
      <header>
        <h1>RETURN POLICY</h1>
      </header>

      <section>
        <article>
          <h4>Please Note :</h4>
          <h3>
            Only ONLINE STORE CREDIT in the form of a GIFT CARD will be issued.
            You can use the GIFT CARD code at checkout on our website{" "}
          </h3>
          <h3>www.boonikahani.com</h3>
        </article>

        <article>
          <h3>NO CASH refunds will be provided.</h3>
          <h3>
            In case, you need to return your order, kindly send an email to
            shubham@boonikahani.com within 7 days of receiving your order.
          </h3>
          <h3>
            Please send an email at shubham@boonikahani.com to get your return
            request approved.
          </h3>
          <h3>In the subject of the email please mention</h3>
          <h3>" Return Request for order "Insert your order number here" "</h3>
        </article>

        <article>
          <h3>
            Booni Kahani will accept Return of an item only if the following
            conditions are met:
          </h3>
          <ol>
            <strong>
              <li>
                Return should be initiated within 7 days of delivery of the
                original order by sending us an email on shubham@boonikahani.com
                with your order number and details of return.{" "}
              </li>
            </strong>
            <strong>
              {" "}
              <li>
                Only after receiving it, we will inspect and issue a STORE
                CREDIT GIFT CARD (if all policy conditions are met)
              </li>
            </strong>
            <strong>
              <li>
                The STORE CREDIT GIFT CARD will be sent to you via email once
                the return product has been received at our warehouse. Please do
                not share the GIFT CARD code with anyone as it is a one time use
                Gift Card.
              </li>
            </strong>
            <strong>
              <li>
                The STORE CREDIT GIFT CARD will be valid for 1 year from the
                date of issue and can be used at checkout for your future
                purchases.
              </li>
            </strong>
            <strong>
              <li>The tags on the product should be intact.</li>
            </strong>
            <strong>
              <li>
                The product should be unused, unwashed and in undamaged
                condition.
              </li>
            </strong>
            <strong>
              <li>
                If an exchange request has been processed for an original order,
                no return requests can be processed for the original order.
              </li>
            </strong>
            <strong>
              <li>
                Please ask for a return receipt when handing over the package to
                the courier representative.
              </li>
            </strong>
          </ol>

          <h3>
            Booni Kahani reserves the right to reject any return request if any
            of the above conditions are not met.{" "}
          </h3>
        </article>
      </section>
    </ReturnPolicyStyle>
  );
};

export default ReturnPolicy;

const ReturnPolicyStyle = styled.main`
  background-color: #380d0d;
  color: white;
  padding: 3rem;

  header {
    text-align: center;
  }
  section {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    article {
      line-height: 2rem;
    }
  }
`;
