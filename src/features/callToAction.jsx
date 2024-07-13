import { NormalButton } from '../components/ui/buttons';
import { BigHeadings } from '../components/ui/headings';
import Texts from '../components/ui/texts';

const CallToAction = () => {
  return (
    <div className='w-full h-[300px] bg-[#1E1E1E] flex flex-col items-center justify-center maxScreenMobile:h-[250px]'>
      <span className='maxScreenMobile:px-[30px]'>
        <BigHeadings
          color='bigheader_white'
          type='h2'
          text1='Secure your spot for our'
          specialText='"Growth Thesis"'
        />
      </span>

      <Texts
        color='white'
        type='xl'
        text='Implementation by booking your call below'
      />

      <span className='py-[30px]'>
        <NormalButton colorType='green_black' text='Book a Call' />
      </span>
    </div>
  );
};

export default CallToAction;
