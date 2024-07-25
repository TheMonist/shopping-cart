import styled from "styled-components";
import img from "../assets/background.jpg";
//import { Link } from "react-router-dom";

const Background = styled.section`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${img});
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  padding: 1em;
  box-shadow: 0px 15px 34px 8px rgba(0, 0, 0, 0.36);
  z-index: 1;
  border-radius: 0.3em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const ContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.h1`
  color: hsl(220, 13%, 13%);
  font-weight: bold;
  font-size: 5rem;
`;

const ShopButton = styled.button`
  position: relative;
  top: 50%;
  background-color: hsl(219, 9%, 45%);
  color: hsl(0, 0%, 100%);
  border-radius: 0.4em;
  padding: 15px;
  font-weight: bold;
`;

const Home = () => {
  return (
    <Background>
      <Container>
        <Banner>Build Your Fit</Banner>
        <ContainerTwo>
          <ShopButton>Shop Now</ShopButton>
        </ContainerTwo>
      </Container>
    </Background>
  );
};

/*
  <Background>
      <Container>
        <Banner>Build Your Fit</Banner>
        <Link to="/shop">
          <ShopButton>Shop Now</ShopButton>
        </Link>
      </Container>
    </Background>

*/

/*

  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${img});
  display: flex;

*/

export default Home;
