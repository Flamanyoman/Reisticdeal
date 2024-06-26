import { CircleButton, NormalButton } from '../../components/ui/buttons';
import { BigHeadings } from '../../components/ui/headings';
import costumer from './assets/costumer.png';
import costumer2 from './assets/costumer2.png';
import costumer3 from './assets/costumer3.png';
import costumerNote from './assets/costumerNote.png';
import { FaLongArrowAltRight } from 'react-icons/fa';

const HomeSection5 = () => {
  return (
    <div className='flex flex-col items-center relative'>
      <NormalButton
        colorType='lightgreen_green'
        text='Real Stories, Real Success'
        click={() => console.log('clicked')}
      />

      <BigHeadings color='' type='h2' text1='See Why Agents Trust Us!' />

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
          click={() => console.log('clicked circle')}
        />
      </span>
    </div>
  );
};

export default HomeSection5;
