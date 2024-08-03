import { createContext, useContext, useState } from "react";

const UseCartToggle = ({ children }) => {
  const CartContext = createContext();
  const ToggleContext = createContext();

  const [show, setShow] = useState(false);
  return (
    <CartContext.Provider value={show}>
      <ToggleContext.Provider value={setShow}>
        <div>{children}</div>
      </ToggleContext.Provider>
    </CartContext.Provider>
  );
};

export default UseCartToggle;
