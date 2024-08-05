import { NormalButton } from '../components/ui/buttons';
import { BigHeadings } from '../components/ui/headings';
import Texts from '../components/ui/texts';

const SpecialHeader = () => {
  return (
    <div className='bg-transparent py-[75px] flex items-center justify-center maxScreenMobile:py-[30px] maxScreenMobile:flex-col'>
      <div className='maxScreenMobile:w-full h-[450px] flex flex-col items-center justify-center'>
        <h1 className='bigheader_white text-[53px] leading-[56px] font-[500] max-w-[800px] py-[30px] text-center maxScreenMobile:text-[33px] maxScreenMobile:leading-[36px] maxScreenMobile:py-[15px]'>
          At Cent Best Wellness we give quality <span> care </span>and a
          <span> dignified farewell</span>.
        </h1>

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
