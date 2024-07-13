import { useContext, useEffect, useRef, useState } from 'react';
import { cartContext } from '../context/cartContext';
import CartPart from './ui/cartPart';
import CartItem from './ui/cartItem';

const Cart = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const { cart, setCart } = useContext(cartContext);
  const cartRef = useRef();

  useEffect(() => {
    setTimeout(() => setShow(true), 1000); // Show after 6 seconds
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOpen = () => {
    if (!open) {
      setShow(false);
      setOpen(true);
      setTimeout(() => setShow(true), 1000);
    }
  };

  const handleRemove = (i) => {
    const updatedCart = [...cart];
    updatedCart.splice(i, 1);
    setCart(updatedCart);
  };

  return (
    <>
      <div
        ref={cartRef}
        className={`w-[290px] ${
          open ? 'h-[375px]' : 'h-[65px] overflow-hidden'
        } bg-[#1E1E1E] rounded-lg fixed left-1/2 transform -translate-x-1/2 bottom-5 animate-grow flex flex-col justify-end items-center p-[15px] text-white cursor-pointer shadow-xl`}
        onClick={handleOpen}
      >
        {open && (
          <div className='flex-grow flex flex-col w-full overflow-scroll no-scrollbar'>
            {cart.map((item, i) => (
              <CartItem
                key={i}
                item={item}
                handleRemove={() => handleRemove(i)}
              />
            ))}
          </div>
        )}

        <CartPart
          show={show}
          setShow={setShow}
          open={open}
          setOpen={setOpen}
          cart={cart}
        />
      </div>
    </>
  );
};

export default Cart;
