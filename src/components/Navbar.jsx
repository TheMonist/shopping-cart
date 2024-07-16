import styled from "styled-components";
import img from "../assets/logo.svg";
import CartWidget from "./CartWidget";

const Body = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100vw;
  margin: 0;
  background-color: hsl(223, 64%, 98%);
  color: hsl(220, 13%, 13%);
`;

const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
`;

const NavLink = styled.li`
  padding: 0.625rem;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Body>
      <img src={img} alt="sneaker logo" />
      <LinksContainer>
        <NavLink>Collections</NavLink>
        <NavLink>Men</NavLink>
        <NavLink>Women</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
        <CartWidget />
      </LinksContainer>
    </Body>
  );
};

export default Navbar;
