import { NormalButton } from './ui/buttons';
import { BigHeadings } from './ui/headings';
import Texts from './ui/texts';
import { cartContext } from '../context/cartContext';
import { useContext } from 'react';

const LongCard = ({ services, onPurchaseClick }) => {
  const { cart, setCart } = useContext(cartContext);

  const handleClick = (service) => {
    console.log(service);
    if (service.types.length === 1) {
      setCart([...cart, service.types[0]]);
    } else {
      onPurchaseClick(service.types);
    }
  };

  return (
    <div className='w-full maxScreenMobile:flex-col maxScreenMobile:min-h-[10px] maxScreenMobile:pb-5 min-h-[340px]  bg-[url("https://plus.unsplash.com/premium_photo-1679830513990-82a4280f41b4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center bg-no-repeat flex flex-col justify-around items-center pt-6 maxScreenMobile:px-2'>
      <div className='w-[600px] maxScreenMobile:w-full h-[185px] bg-[#00000080] flex flex-col items-center justify-around px-[80px] maxScreenMobile:px-2 pb-[25px]'>
        <BigHeadings
          type={'h2'}
          color={'bigheader_white'}
          text1={'Repatriation Service'}
        />

        <Texts
          type={'l'}
          align='center'
          color={'white'}
          text='There is no greater honor we can give to a loved one after thier demise than to lay them to rest peacefully in their home town or place of choosing.'
        />
      </div>

      <div className='maxScreenMobile:mt-2'>
        <NormalButton
          colorType={'white'}
          text={'Book Service'}
          click={() => handleClick(services[services.length - 1])}
        />
      </div>
    </div>
  );
};

export default LongCard;
