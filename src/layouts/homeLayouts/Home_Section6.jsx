import { BigHeadings } from '../../components/ui/headings';
import Texts from '../../components/ui/texts';
import allData from '../../data/data';

const HomeSection6 = () => {
  return (
    <div className='flex flex-col items-center relative'>
      <BigHeadings color='' type='h2' text1='What Makes Us Different?' />

      <div className='w-full flex justify-between items-center maxScreenMobile:flex-col'>
        {allData.longcards.map((longcard, i) => (
          <span
            key={i}
            className='flex border w-[250px] items-center maxScreenMobile:w-full maxScreenMobile:mb-[30px]'
          >
            <img
              src={longcard.img}
              alt='Reisticdeal image'
              className='pr-[10px]'
            />

            <Texts color='' type='xl' text={longcard.text} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default HomeSection6;
