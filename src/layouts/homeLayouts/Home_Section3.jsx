import { BigHeadings } from '../../components/ui/headings';
import Texts from '../../components/ui/texts';
import checkbox from '../../assets/checkbox.png';
import { NormalButton } from '../../components/ui/buttons';
import Illustration from './assets/Illustration.png';

const HomeSection3 = () => {
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

      <div className='flex-grow  min-h-[515px] flex w-full items-center maxScreenMobile:flex-col-reverse '>
        <div className='w-[50%] maxScreenMobile:w-full'>
          <span className='maxScreenMobile:block maxScreenMobile:pb-[40px]'>
            <BigHeadings
              color=''
              type='h2'
              text1='Qualified-Exclusive RE Leads Via Organic Content'
            />
          </span>

          <span className='h-[50px] flex items-center maxScreenMobile:pb-[30px]'>
            <img
              src={checkbox}
              alt='checked'
              className='pr-[4px] maxScreenMobile:pr-0'
            />
            <Texts
              color=''
              type='s'
              text=' Exclusive, qualified Real Estate Leads at your Fingertips.'
            />
          </span>

          <span className='h-[50px] flex items-center maxScreenMobile:pb-[30px]'>
            <img
              src={checkbox}
              alt='checked'
              className='pr-[4px] maxScreenMobile:pr-0'
            />
            <Texts
              color=''
              type='s'
              text='Tested Content Playbook that turns Eye-Balls into $$$ Signs.'
            />
          </span>

          <span className='h-[50px] flex items-center maxScreenMobile:pb-[30px]'>
            <img
              src={checkbox}
              alt='checked'
              className='pr-[4px] maxScreenMobile:pr-0'
            />
            <Texts
              color=''
              type='s'
              text='Guaranteed 10+ Closed Deals using the "Growth Thesis" System.'
            />
          </span>
        </div>

        <div className='w-[50%] min-h-[515px] px-[30px] relative overflow-hidden maxScreenMobile:w-full maxScreenMobile:border-2 maxScreenMobile:border-[#E0DEF7] maxScreenMobile:mb-[30px]'>
          <span className='w-[82.5%] h-[250px] flex flex-col justify-between maxScreenMobile:h-[100px]'>
            <BigHeadings
              color=''
              type='h2'
              specialText='Your One-Stop Real Estate Solutions!!'
            />

            <Texts
              color=''
              type='s'
              text='Find your dream place to live in with more than 10k+ properties listed.'
            />

            <span className='py-[30px]'>
              <NormalButton
                colorType='green_white'
                text='Book Now'
                click={() => console.log('clicked circle')}
              />
            </span>
          </span>

          <img
            src={Illustration}
            alt='Reisticdeal image'
            className='absolute w-[375px] bottom-0 right-0'
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
