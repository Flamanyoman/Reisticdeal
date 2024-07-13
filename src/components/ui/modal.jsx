import React, { useEffect, useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import { cartContext } from '../../context/cartContext';

const Modal = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const { cart, setCart } = useContext(cartContext);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div
      className='w-full h-full bg-black bg-opacity-75 fixed inset-0 flex items-center justify-center overflow-hidden'
      onClick={onClose}
    >
      <div
        className='bg-white p-5 rounded shadow-lg w-[65%] max-h-[85%] maxScreenMobile:w-[98%] overflow-x-scroll no-scrollbar'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-end mb-4 '>
          <button onClick={onClose} className='text-black'>
            Close
          </button>
        </div>
        <div className='grid grid-cols-3 gap-x-5 maxScreenMobile:grid-cols-2 gap-y-10'>
          {data.map((item, index) => (
            <div
              key={index}
              className='relative flex items-center justify-center aspect-square'
            >
              <p className='s text-white drop-shadow-[0_48px_48px_rgba(0,0,0,1)] absolute top-[12px] left-[12px] z-10 bg-[rgba(0,0,0,0.16)] p-2'>
                <CurrencyFormat
                  value={item.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₦'}
                  renderText={(value) => <div>{value}</div>}
                />
              </p>
              <img
                src={item.img}
                alt='Best image'
                className='absolute w-full h-full top-0 left-0 object-cover'
              />
              <button
                className='white px-[18px] py-[4.5px] rounded-[7px] maxScreenMobile:py-[10px] maxScreenMobile:px-[20px] absolute bottom-[12px] right-[12px]'
                onClick={() => handleAddToCart(item)}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
