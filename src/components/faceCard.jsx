import { NormalButton } from './ui/buttons';
import { SmallHeadings } from './ui/headings';
import Texts from './ui/texts';

const FaceCard = ({ img, mainHeadings, heading, text, buttonText }) => {
  return (
    <div className='face__card'>
      <img src={img} alt='Reisticdeal image' className='w-[80%]' />
      <SmallHeadings type='h4' text={mainHeadings} />

      <Texts type='l' text={heading} />

      <Texts color='' type='s' text={text} />
      <span className='py-[10px]'>
        <NormalButton
          colorType='black_green'
          text={buttonText}
          click={() => console.log('clicked circle')}
        />
      </span>
    </div>
  );
};

export default FaceCard;
