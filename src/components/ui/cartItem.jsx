import { NumericFormat } from 'react-number-format';

const CartItem = ({ item, i, handleRemove }) => {
  return (
    <div className='w-full py-2  flex justify-between items-center' key={i}>
      <div className='min-w-[130px] max-w-[130px] aspect-square  flex items-center justify-center'>
        <img
          src={item.img}
          alt='Best image'
          className='w-full h-full  object-cover'
        />
      </div>

      <span className='flex flex-col w-[135px]'>
        <span className='w-[65%] overflow-x-ellipsis text-nowrap'>
          {item.name}
        </span>

        <span className='w-[30%] overflow-ellipsis'>
          <NumericFormat
            value={item.price}
            prefix='₦'
            displayType='text'
            thousandSeparator=','
            onValueChange={(values, sourceInfo) => {
              console.log(values, sourceInfo);
            }}
          />
        </span>
        <div className='flex justify-between items-center'>
          <button
            className='w-[20%] text-lime-400'
            onClick={() => handleRemove(i)}
          >
            Remove
          </button>

          <small className='w-40px h-15px px-1 py-[.5px] text-[12px] bg-lime-400 rounded-md'>
            {item.type}
          </small>
        </div>
      </span>
    </div>
  );
};

export default CartItem;
