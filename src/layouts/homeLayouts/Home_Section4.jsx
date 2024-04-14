import { BigHeadings } from '../../components/ui/headings';
import checkbox from '../../assets/checkbox.png';
import Texts from '../../components/ui/texts';
import bigSideImage from './assets/bigsideimage.png';

const HomeSection4 = () => {
  return (
    <div>
      <span className='w-full flex justify-center items-center pb-[30px]'>
        <BigHeadings
          color=''
          type='h2'
          text1='Your One-Stop Real Estate'
          specialText='Solutions!!'
        />
      </span>
      <div className=' flex-row-reverse min-h-[515px] flex w-full items-center'>
        <div className='w-[50%]'>
          <BigHeadings color='' type='h2' text1='Pay Per Close Offer' />

          <span className='h-[50px] flex items-center'>
            <img src={checkbox} alt='checked' className='pr-[4px]' />
            <Texts
              color=''
              type='l'
              text='Pay 10-20% commission on every closed deal.'
            />
          </span>

          <span className='h-[50px] flex items-center'>
            <img src={checkbox} alt='checked' className='pr-[4px]' />
            <Texts color='' type='l' text='You Win, We Win.' />
          </span>

          <span className='h-[50px] flex items-center'>
            <img src={checkbox} alt='checked' className='pr-[4px]' />
            <Texts
              color=''
              type='l'
              text=' Just a One-Time Setup Fee and Nothing Else.'
            />
          </span>
        </div>

        <div className='w-[50%] min-h-[515px] px-[30px] overflow-hidden'>
          <img
            src={bigSideImage}
            alt='Reisticdeal image'
            className='h-[515px] rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection4;
