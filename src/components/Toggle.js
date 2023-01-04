import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import styled from "styled-components";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Question layout className='question' onClick={() => setToggle(!toggle)}>
      <h4 layout>
        {toggle ? (
          <span>
            <AiOutlineMinus />
          </span>
        ) : (
          <span>
            <AiOutlinePlus />
          </span>
        )}

        {title}
      </h4>
      {toggle ? children : ""}
    </Question>
  );
};
export default Toggle;

const Question = styled.article`
  h4 {
    background-color: #380d0d;
    padding: 1rem 3rem;
    margin: 1rem 3rem;
    border-radius: 1rem;
    color: white;
    display: flex;
    gap: 1rem;
  }
`;
