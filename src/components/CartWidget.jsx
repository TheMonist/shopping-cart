import cart from "../assets/icon-cart.svg";
import styled from "styled-components";

const CartContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CartWidget = () => {
  return (
    <CartContainer>
      <div>
        <img src={cart} alt="" />
      </div>
    </CartContainer>
  );
};

export default CartWidget;
