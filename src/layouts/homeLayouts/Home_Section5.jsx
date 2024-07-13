import { CircleButton, NormalButton } from '../../components/ui/buttons';
import { BigHeadings } from '../../components/ui/headings';
import costumer from './assets/costumer.png';
import costumer2 from './assets/costumer2.png';
import costumer3 from './assets/costumer3.png';
import costumerNote from './assets/costumerNote.png';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Home_Section5 = () => {
  return (
    <div className='flex flex-col items-center relative'>
      <NormalButton text='Real Stories, Real Memories' />

      <BigHeadings color='' type='h2' text1='See Why Families Trust Us!' />

      <span className='flex w-[350px] justify-between items-center'>
        <img src={costumer} alt='Reisticdeal image' />

        <img src={costumer2} alt='Reisticdeal image' />

        <img src={costumer3} alt='Reisticdeal image' />
      </span>

      <img src={costumerNote} alt='Reisticdeal image' />

      <span className='absolute right-0 top-1/2'>
        <CircleButton
          colorType='lightgreen_green'
          svg={<FaLongArrowAltRight />}
        />
      </span>
    </div>
  );
};

export default Home_Section5;
