import { CircleButton, NormalButton } from '../components/ui/buttons';
import { BigHeadings } from '../components/ui/headings';
import Texts from '../components/ui/texts';
import { FaPlay } from 'react-icons/fa';
import joelFilipe from './assets/joel-filipe.png';
import TextImageGroup from '../components/ui/textImageGroup';
import raphaelMane from './assets/raphael-mane.png';

const SpecialHeader = () => {
  return (
    <div className='bg-[#1E1E1E] py-[75px] flex items-center justify-between maxScreenMobile:py-[30px] maxScreenMobile:flex-col'>
      <div className='flex-grow w-1/2 maxScreenMobile:w-full '>
        <NormalButton
          colorType='darkgreen_green'
          text='Real estate Agent'
          click={() => console.log('clicked circle')}
        />

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

        <div className='flex items-center justify-between w-[435px] py-[30px] maxScreenMobile:w-full'>
          <NormalButton
            colorType='green_white'
            text='Book a call'
            click={() => console.log('clicked circle')}
          />

          <span className='flex items-center justify-around w-[230px] maxScreenMobile:w-[190px]'>
            <CircleButton
              colorType='transparent_white'
              svg={<FaPlay />}
              click={() => console.log('clicked circle')}
            />

            <Texts color='white' type='l' text='Watch This Video' />
          </span>
        </div>
      </div>

      <div className='w-1/2 maxScreenMobile:w-full maxScreenMobile:h-[400px]'>
        <img
          src={joelFilipe}
          alt='Riestical image'
          className='absolute bottom-[-150px] scale-[.767] right-[-80px] maxScreenMobile:bottom-[60px] maxScreenMobile:right-[-50px]'
        />

        <TextImageGroup
          position='bottom-[0]'
          color1=''
          color2=''
          type1='s'
          type2='s'
          img={raphaelMane}
          text1="Meet Rhytham, a young entrepreneur making history with Reisticdeal AI. He's all about helping Real Estate Agents and Businesses achieve"
          text2='Remarkable growth through his own Strategies. Join His Journey Now!'
        />
      </div>
    </div>
  );
};

export default SpecialHeader;
