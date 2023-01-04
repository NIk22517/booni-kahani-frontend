import styled from "styled-components";
import BgImg from "../assets/homeBg.png";
import SideImg from "../assets/rai-pillows.png";
import Logo from "../assets/logo.png";
import Nav from "./Nav";
const Home = () => {
  return (
    <HomeStyle>
      <Nav />
      <section>
        <img src={Logo} alt='' className='logo' />

        <div className='side-img'>
          <img src={SideImg} alt='' />
        </div>
      </section>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.main`
  background-color: red;
  /* clip-path: ellipse(50% 15% at 50% 85%); */
  background-image: url(${BgImg});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 80vh;
  position: relative;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .logo {
      width: 100%;
    }

    .side-img {
      display: flex;
      justify-content: flex-end;
      padding-right: 5rem;
      img {
        width: 20%;
        border-radius: 50%;
        border: 5px solid white;
      }
    }
  }
`;
