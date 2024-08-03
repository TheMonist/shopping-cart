import styled from "styled-components";
import productOne from "../assets/image-product-1.jpg";
import { useContext, useRef, useEffect } from "react";
import UseCartToggle from "./UseCartToggle";
// import { Link } from "react-router-dom"

const ShopSection = styled.section`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  flex-direction: column;
  min-width: fit-content;
  padding: 1em;
  right: 3em;
  background-color: white;
  box-shadow: 0px 15px 34px 8px rgba(0, 0, 0, 0.36);
  z-index: 1;
  border-radius: 0.3em

  & button:hover {
    color: white
    box-shadow: 0px 2px 15px 0px hsl(26, 100%, 55%);
  }

  & p {
    margin: 0;
  }

  & h6 {
    margin: 0;
    padding: 0;
    font-weight: bold;
    color: hsl(220, 13%, 13%);
  }
`;

const CartButton = styled.button`
  width: 12em;
  min-width: 100%;
  background-color: hsl(26, 100%, 55%);
  color: hsl(0, 0%, 100%);
  border-radius: 0.4em;
`;

const ShopContent = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  align-items: center;

  & img {
    width: 2.5em
    padding-bottom: 10px;
  }

  & #bin {
    width: 1.5em;
  }

  & bin:hover {
    cursor: pointer;
    padding-top: 4px;
  }
`;

const Shop = ({ id, cartItems, emptyCart }) => {
  const show = useContext(CartContext);
  const toggleShow = useContext(ToggleContext);

  const cartRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        toggleShow(false);
      }
    };
    document, addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [toggleShow]);

  return (
    <ShopSection show={show} id={id} ref={cartRef}>
      <h6>Cart</h6>
      <ShopContent cartItems={cartItems}></ShopContent>
      <CartButton>Add To Cart</CartButton>
    </ShopSection>
  );
};

export default Shop;

{
  cartItems > 0 ? (
    <>
      <ShopContent cartItems={cartItems}>
        <img src={productOne} alt="product" />
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 x {cartItems}</p>
      </ShopContent>
      <div>
        <CartButton>Add To Cart</CartButton>
      </div>
      <ShopContent>
        <p>Your Cart Is Empty</p>
      </ShopContent>
    </>
  ) : (
    <>
      <p>Your Cart Is Empty</p>
    </>
  );
}

//https://www.frontendmentor.io/solutions/shopping-cart-using-react-js-and-styled-components-AAcBFAYyvs
