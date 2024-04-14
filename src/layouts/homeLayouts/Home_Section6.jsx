import { BigHeadings } from '../../components/ui/headings';
import Texts from '../../components/ui/texts';
import allData from '../../data/data';

const HomeSection6 = () => {
  return (
    <div className='flex flex-col items-center relative'>
      <BigHeadings color='' type='h2' text1='What Makes Our Leads Qualified?' />

      <div className='w-full flex justify-between items-center'>
        {allData.longcards.map((longcard, i) => (
          <span key={i} className='flex border w-[250px] items-center'>
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
