import React from "react";
import { BiUserCircle, BiSearchAlt2 } from "react-icons/bi";
import styled from "styled-components";

const Nav = ({ userToggle, setUserToggle }) => {
  console.log(userToggle);
  return (
    <NavBar>
      <div className='user' onClick={() => setUserToggle(!userToggle)}>
        <BiUserCircle />

        {userToggle ? (
          <div className='user-info'>
            <h1>User Name</h1>
          </div>
        ) : (
          ""
        )}
      </div>
      <ul className='nav-links'>
        <li>Home</li>
        <li>Collections</li>
        <li>Category</li>
        <li>Sales/Offers</li>
      </ul>
      <div className='search-input'>
        <input type='text' placeholder='Search' />
        <BiSearchAlt2 />
      </div>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  min-height: 10vh;
  background-color: #ffffff7b;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 3rem;

  .user {
    position: relative;
    cursor: pointer;
    svg {
      scale: 2.5;
    }

    .user-info {
      position: absolute;
      bottom: -100px;
      background-color: blueviolet;
      width: max-content;
    }
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.4em;
    line-height: 39px;
  }

  .search-input {
    position: relative;

    input {
      outline: none;
      border-radius: 1rem;
      padding: 0.5rem 1rem;
      border: none;
      background-color: black;
      color: white;

      ::placeholder {
        color: white;
      }
    }

    svg {
      color: white;
      position: absolute;
      scale: 1.5;
      right: 5%;
      top: 25%;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding-block: 1rem;
    gap: 2rem;
  }
`;
