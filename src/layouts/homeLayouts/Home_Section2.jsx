import { NormalButton } from '../../components/ui/buttons';
import { BigHeadings } from '../../components/ui/headings';
import Texts from '../../components/ui/texts';
import { cartContext } from '../../context/cartContext';
import { useContext } from 'react';
import allData from '../../data/data';

const Home_Section2 = () => {
  const { cart, setCart } = useContext(cartContext);

  const handleClick = () => {
    setCart([...cart, allData.services[3].types[0]]);
  };

  return (
    <div className='flex w-full maxScreenMobile:flex-col-reverse maxScreenMobile:min-h-[450px] maxScreenMobile:pb-5 h-[550px]  bg-[url("https://images.unsplash.com/photo-1619252584172-a83a949b6efd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      <div className='flex-[.55] h-full flex items-center justify-center'>
        <span className='w-[80%] h-[300px] flex flex-col items-center justify-between'>
          <BigHeadings type={'h2'} text1={'Create Tribute Site'} />

          <Texts
            type={'l'}
            align='left'
            text='Our memories are all that we have left of them and should be immortalized forever. Request a custom website where family and friends can write thier tributes and most cherished memories.'
          />

          <div className='w-full flex items-center justify-center'>
            <NormalButton
              colorType={'black'}
              text={'Place an order'}
              click={handleClick}
            />
          </div>
        </span>
      </div>

      <div className='flex-[.45] h-full flex items-center justify-end'>
        <img
          src={allData.services[3].image}
          alt='Cent Best'
          className='w-[98%]'
        />
      </div>
    </div>
  );
};

export default Home_Section2;
