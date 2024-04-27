import { NormalButton } from '../../components/ui/buttons';
import { BigHeadings } from '../../components/ui/headings';
import Texts from '../../components/ui/texts';
import Omar from './assets/Omar.png';

const HomeSection7 = () => {
  return (
    <div className='flex justify-center'>
      <div className='bg-[#1E1E1E] w-[75%] flex justify-around px-[60px] py-[45px] maxScreenMobile:w-full maxScreenMobile:flex-col maxScreenMobile:px-0 maxScreenMobile:py-[10px]'>
        <span className='w-1/2 maxScreenMobile:w-full'>
          <img
            src={Omar}
            alt='Reisticdeal image'
            className='h-[300px] maxScreenMobile:w-full maxScreenMobile:h-auto '
          />
        </span>

        <div className='w-1/2 flex flex-col justify-between maxScreenMobile:w-full'>
          <BigHeadings
            color='bigheader_white'
            type='h2'
            text1='Putting You First
Client Satisfaction Drives
Our Growth Thesis'
          />

          <Texts
            color='white'
            type='s'
            text='Lorem ipsum dolor sit amet consectetur. Purus imperdiet quis tincidunt blandit. Id turpis elit suspendisse consectetur Purus imperdiet quis tincidunt blandit. Id turpis elit suspendisse consectetur orem turpis elit suspen'
          />

          <span className='py-[30px]'>
            <NormalButton
              colorType='green_white'
              text='Book Now'
              click={() => console.log('clicked circle')}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeSection7;
