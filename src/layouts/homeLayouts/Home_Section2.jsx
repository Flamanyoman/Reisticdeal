import { BigHeadings } from '../../components/ui/headings';
import WideCard from '../../components/wideCard';
import allData from '../../data/data';

const HomeSection2 = () => {
  return (
    <div>
      <span className='w-full flex justify-center items-center pb-[30px] maxScreenMobile:pb-[15px]'>
        <BigHeadings color='' type='h2' text1='Why Choose Us' />
      </span>

      <div className='flex justify-between flex-wrap'>
        {allData.widCards.map((wildcard, i) => (
          <WideCard
            img={wildcard.img}
            heading={wildcard.heading}
            text={wildcard.text}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSection2;
