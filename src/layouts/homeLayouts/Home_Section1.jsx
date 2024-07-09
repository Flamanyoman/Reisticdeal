import { BigHeadings } from '../../components/ui/headings';
import { ImageDiv } from '../../components/ui/images';
import Texts from '../../components/ui/texts';

const Home_Section1 = () => {
  return (
    <div className='flex md:w-full w-[1050px] overflow-scroll md:overflow-hidden'>
      <div className='md:flex-[.65] maxScreenMobile:flex-[1] h-[430px] flex items-center justify-between'>
        <ImageDiv
          src='https://images.unsplash.com/photo-1621201216621-262db27f9f12?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          width='potraite1'
          type='hover-image'
          bottomText={'Book an ambulance'}
        />

        <ImageDiv
          src='https://plus.unsplash.com/premium_photo-1713985789550-c3988a65f4c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNvZmZpbnxlbnwwfDF8MHx8fDA%3D'
          width='potraite1'
          type='hover-image'
          bottomText={'Order a coffin'}
        />

        <ImageDiv
          src='https://images.unsplash.com/photo-1620405400036-ed8d0e237078?q=80&w=1428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          width='potraite1'
          type='hover-image'
          bottomText={'Design a gravestone'}
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
