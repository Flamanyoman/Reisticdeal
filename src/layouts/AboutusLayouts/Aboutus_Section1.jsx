import { BigHeadings } from '../../components/ui/headings';
import Texts from '../../components/ui/texts';
import aboutUs2 from './assets/aboutus2.png';
import aboutUs3 from './assets/aboutus3.png';
import VideoThumbnail from '../../components/videothumbnail';

const Aboutus_Section = () => {
  return (
    <div className='flex flex-col '>
      <div className='flex-grow  min-h-[350px] flex w-full'>
        <span className=' w-1/2 flex flex-col py-[75px] pr-[50px] h-[350px]'>
          <Texts
            color=''
            type='l special'
            text='At Reisticdeal AI, we help realtors become local celebrities in their Area. And we build out a client acquisition infrastructure that helps them with the whole Client Acquisition process A-Z.'
          />
        </span>

        <span className='w-1/2 flex items-center justify-center'>
          <VideoThumbnail id='XF1XIEOKlaE' />
        </span>
      </div>

      <div className='flex-grow  min-h-[350px] flex flex-row-reverse w-full'>
        <span className=' w-1/2 flex flex-col py-[75px]'>
          <BigHeadings
            color=''
            type='h2'
            text1='This is what we do at Reisticdeal AI.'
          />

          <Texts
            color=''
            type='l special'
            text="In today's Day and Age-as a Real Estate agent, it is necessary to build and have your Personal Brand. We understand this, hence, we came up with the exact strategies and solutions that will help you become a Local Celebrity in your area. So you can get referral quality leads in your sleep... And we help you build out your whole Client Acquisition System that takes cares of your whole Client Acquisition process From A-Z. These are exact proven ways that helped our clients, this means that you want invest something more precise and proven. This is what we offer at Reisticdeal AI."
          />
        </span>

        <span className='w-1/2 flex items-center justify-center'>
          <img src={aboutUs2} alt='Reisticdeal image' />
        </span>
      </div>

      <div className='flex-grow  min-h-[350px] flex w-full'>
        <span className=' w-1/2 flex flex-col py-[75px] pr-[50px] h-[350px]'>
          <Texts
            color=''
            type='l special'
            text="Welcome to Reisticdeal AI, where we're on a mission to revolutionise the real estate game! Our passion lies in crafting tailored marketing solutions for agents and businesses eager to shine in today's competitive landscape. Picture this: You, a local celebrity in the real estate world, captivating your community with your expertise and charisma. That's the power of our personalised strategies designed to make you stand out from the crowd. But it doesn't stop there. Our B&R offer ensures that you have the tools and support needed to build out your entire client acquisition!"
          />
        </span>

        <span className='w-1/2 flex'>
          <img src={aboutUs3} alt='Reisticdeal image border' />
        </span>
      </div>
    </div>
  );
};

export default Aboutus_Section;
