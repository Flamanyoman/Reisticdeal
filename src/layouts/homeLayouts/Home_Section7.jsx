import { BigHeadings } from '../../components/ui/headings';
import Texts from '../../components/ui/texts';
import Omar from './assets/Omar.png';

const Home_Section7 = () => {
  return (
    <div className='flex justify-center'>
      <div className='bg-[#1E1E1E] w-[75%] maxScreenMobile:w-full flex justify-around px-[60px] py-[45px] maxScreenMobile:flex-col maxScreenMobile:px-0 maxScreenMobile:py-[10px]'>
        <div className='w-2/3 flex flex-col justify-between maxScreenMobile:w-full items-center'>
          <BigHeadings
            color='bigheader_white'
            type='h2'
            text1='The passing of a loved one'
          />

          <Texts
            color='white'
            type='s'
            text='
            Dignified Farewell: this captures the  company’s commitment to honoring the deceased and offering professional funeral services that are befitting of the departed soul. 
           '
          />
        </div>
      </div>
    </div>
  );
};

export default Home_Section7;
