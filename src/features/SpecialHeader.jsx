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
          text1='Welcome to Cent Best Wellness, where we combine care and cost.'
        />

        <Texts
          color='white'
          type='xl'
          text='We understand that losing a loved one is incredibly painful. Our goal is to support you during this sorrowful time with care, compassion, and quality services.'
        />
        <span className='m-[20px]'></span>

        <NormalButton colorType='white' text='Book a service' />
      </div>
    </div>
  );
};

export default SpecialHeader;
