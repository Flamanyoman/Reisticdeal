import { createContext, useState, useMemo } from 'react';

// Create contexts
export const cartContext = createContext();
export const modalContext = createContext();

const CartContextProvider = (props) => {
  // Cart state
  const [cart, setCart] = useState([]);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  // Memoized values for contexts
  const providerCart = useMemo(() => ({ cart, setCart }), [cart]);
  const providerModal = useMemo(
    () => ({ isModalOpen, setIsModalOpen, modalData, setModalData }),
    [isModalOpen, modalData]
  );

  return (
    <cartContext.Provider value={providerCart}>
      <modalContext.Provider value={providerModal}>
        {props.children}
      </modalContext.Provider>
    </cartContext.Provider>
  );
};

export default CartContextProvider;
