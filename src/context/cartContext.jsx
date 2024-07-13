import { createContext, useState, useMemo } from 'react';

export const cartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const providerCart = useMemo(() => ({ cart, setCart }), [cart, setCart]);

  return (
    <cartContext.Provider value={providerCart}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
