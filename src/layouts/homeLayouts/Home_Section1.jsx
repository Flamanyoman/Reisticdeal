import React from 'react';
import { BigHeadings } from '../../components/ui/headings';
import { ImageDiv } from '../../components/ui/images';
import Texts from '../../components/ui/texts';

const Home_Section1 = ({ services, onPurchaseClick }) => {
  return (
    <div className='flex md:w-full w-[1050px] overflow-scroll md:overflow-hidden'>
      <div className='md:flex-[.65] maxScreenMobile:flex-[1] h-[430px] flex items-center justify-between'>
        <ImageDiv
          src={services[0].image}
          arrayNum={0}
          width='potraite1'
          type='hover-image'
          bottomText={'Book an ambulance'}
          onPurchaseClick={onPurchaseClick}
        />

        <ImageDiv
          src={services[1].image}
          arrayNum={1}
          width='potraite1'
          type='hover-image'
          bottomText={'Order a coffin'}
          onPurchaseClick={onPurchaseClick}
        />

        <ImageDiv
          src={services[2].image}
          arrayNum={2}
          width='potraite1'
          type='hover-image'
          bottomText={'Design a gravestone'}
          onPurchaseClick={onPurchaseClick}
        />
      </div>

      <div className='md:flex-[.35] min-h-[430px] flex flex-col items-end justify-center maxScreenMobile:w-[300px]'>
        <BigHeadings type='h2' text1='Passing of a Loved One' />

        <Texts
          type='l'
          text='In times like this, let us handle the burden of arrangement'
        />
      </div>
    </div>
  );
};

export default Home_Section1;
