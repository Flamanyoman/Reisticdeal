import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';

const CartPart = ({ show, setShow, cart, open, setOpen }) => {
  const handleClose = () => {
    if (open) {
      setOpen(false);
    }
  };

  const handleOrderClick = (e) => {
    e.stopPropagation();
    const number = '+2348132446079';

    // Group items by name and type
    const groupedItems = cart.reduce((acc, item) => {
      const key = `${item.name}-${item.type}`;
      if (!acc[key]) {
        acc[key] = { ...item, count: 0 };
      }
      acc[key].count += 1;
      return acc;
    }, {});

    // Generate message
    const items = Object.values(groupedItems)
      .map((item, index, array) => {
        const itemDescription = `${item.count > 1 ? item.count + ' ' : ''}${
          item.name
        } which is a type of ${item.type}`;
        if (index === array.length - 1 && array.length > 1) {
          return `and ${itemDescription}`;
        }
        return itemDescription;
      })
      .join(', ');

    const message = `I would like to order the following: ${items}`;

    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank').focus();
  };

  return (
    <div
      className='w-full h-[65px] py-1 flex justify-between items-center'
      onClick={handleClose}
    >
      {show && (
        <>
          <span className='flex-[.11]'>
            {!open ? (
              <IoIosArrowUp className='text-lime-400' />
            ) : (
              <IoIosArrowDown className='text-lime-400' />
            )}
          </span>
          {!open && (
            <span className='flex-[.89] text-left'>
              You have {cart.length} {cart.length === 1 ? 'item' : 'items'} in
              your cart
            </span>
          )}

          <button
            className={`${
              !open
                ? 'w-[34px] aspect-square rounded-full border-[2px] border-lime-400 flex items-center justify-center animate-pulse flex-[.1]'
                : 'bg-lime-400 text-white px-[9px] py-[7.5px] rounded-[7px] maxScreenMobile:py-[10px] maxScreenMobile:px-[20px]'
            }`}
            onClick={handleOrderClick}
          >
            {!open ? (
              <FaWhatsapp className='text-lime-400' />
            ) : (
              <span className='flex items-center'>
                Order now <FaWhatsapp className='ml-2' />
              </span>
            )}
          </button>
        </>
      )}
    </div>
  );
};

export default CartPart;
