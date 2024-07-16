import styled from "styled-components";
import img from "../assets/background.jpg";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${img});
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 150px;
`;

const Banner = styled.h1`
  color: hsl(220, 13%, 13%);
  font-weight: bold;
  font-size: 5rem;
  padding-top: 85px;
`;

const Text = styled.button`
  position: relative;
  top: 50%;
  background-color: hsl(219, 9%, 45%);
  color: hsl(0, 0%, 100%);
  border-radius: 10px;
  padding: 15px;
  font-weight: bold;
`;

const Home = () => {
  return (
    <Background>
      <Container>
        <Banner>Build Your Fit</Banner>
        <Text>Shop Now</Text>
      </Container>
    </Background>
  );
};

export default Home;
