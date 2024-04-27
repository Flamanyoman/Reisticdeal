import { BigHeadings } from '../../components/ui/headings';
import VideoThumbnail from '../../components/videothumbnail';

const Home_Section1 = () => {
  return (
    <div className='flex flex-col '>
      <div className='flex-grow  min-h-[350px] flex w-full maxScreenMobile:flex maxScreenMobile:flex-col maxScreenMobile:py-[30px]'>
        <span className=' w-1/2 flex items-center p-[75px] maxScreenMobile:w-full maxScreenMobile:p-0'>
          <BigHeadings
            color=''
            type='h2'
            text1="Hear About Omar Megally's"
            specialText='Great Experience With'
            text2='Reisticdeal AI'
          />
        </span>

        <span className='w-1/2 flex items-center justify-center maxScreenMobile:w-full'>
          <VideoThumbnail id='XF1XIEOKlaE' />
        </span>
      </div>

      <div className='flex-grow  min-h-[350px] flex flex-row-reverse w-full maxScreenMobile:flex maxScreenMobile:flex-col maxScreenMobile:py-[30px]'>
        <span className=' w-1/2 flex items-center p-[75px] maxScreenMobile:w-full maxScreenMobile:p-0'>
          <BigHeadings
            color=''
            type='h2'
            text1='"4 Deals in this month"'
            specialText='Eqbal'
          />
        </span>

        <span className='w-1/2 flex items-center justify-center maxScreenMobile:w-full'>
          <VideoThumbnail id='04DWJ0g4uJE' />
        </span>
      </div>
    </div>
  );
};

export default Home_Section1;
