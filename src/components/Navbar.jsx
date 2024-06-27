import styled from "styled-components";

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100vw;
  margin: 0;
`;

const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
`;

const Link = styled.li`
  padding: 0.625rem;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Body>
      <p>SNEAKER Logo</p>
      <LinksContainer>
        <Link>Collections</Link>
        <Link>Men</Link>
        <Link>Women</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </LinksContainer>
    </Body>
  );
};

export default Navbar;
