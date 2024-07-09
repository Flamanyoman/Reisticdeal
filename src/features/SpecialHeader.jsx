import { NormalButton } from '../components/ui/buttons';
import { BigHeadings } from '../components/ui/headings';
import Texts from '../components/ui/texts';

const SpecialHeader = () => {
  return (
    <div className='bg-transparent py-[75px] flex items-center justify-center maxScreenMobile:py-[30px] maxScreenMobile:flex-col'>
      <div className='maxScreenMobile:w-full h-[450px] flex flex-col items-center justify-center'>
        <BigHeadings
          color='bigheader_white'
          type='h1'
          text1='Here’s how you can Become a Local Celebrity and Close an Extra 10+ Deals'
        />

        <Texts
          color='white'
          type='xl'
          text='Get your own Client Acquisition Infrastructure Build Out... Without Wasting Your Time Or Money-'
        />
        <span className='m-[20px]'></span>

        <NormalButton
          colorType='white'
          text='Book a service'
          click={() => console.log('clicked circle')}
        />
      </div>
    </div>
  );
};

export default SpecialHeader;
