import { SmallHeadings } from './ui/headings';
import Texts from './ui/texts';

const WideCard = ({ img, heading, text }) => {
  return (
    <div className='wide__card'>
      <img src={img} alt='Reisticdeal image' className='w-[40px] h-[40px]' />

      <SmallHeadings type='h4' text={heading} />

      <Texts color='' type='s' text={text} />
    </div>
  );
};

export default WideCard;
