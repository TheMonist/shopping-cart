import styled from "styled-components";
import img from "../assets/background.jpg";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  text-align: center;
  background-image: url(${img});
`;

const Text = styled.button`
  position: absolute;
  top: 50%;
  background-color: hsl(25, 100%, 94%)
  color: hsl(0, 0%, 100%)
  border-radius: 10px;
  padding: 15px;
`;

const Home = () => {
  return (
    <Background>
      <Text>Shop Now</Text>
    </Background>
  );
};

export default Home;
