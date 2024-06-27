import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// footer
const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 100vw;
  padding: 1rem;
  background-color: hsl(219, 9%, 13%);
  color: hsl(0, 0% 100%);
`;
// footer icon
const LinkContainer = styled.ul`
    display: flex;
    justify-conent: space-between;
    align-items; center;
    margin: 0;
    width: 12.5rem;
    padding 10px;
`;

const FooterSection = () => {
  return (
    <Footer>
      <p>Like Us on Social Media!</p>
      <LinkContainer>
        <FaFacebook />
        <FaInstagram />
        <FaXTwitter />
        <FaTiktok />
      </LinkContainer>
      <p>Copyright © The Monist 2024</p>
    </Footer>
  );
};

export default FooterSection;
