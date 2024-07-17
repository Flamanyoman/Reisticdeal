import { BigHeadings } from '../components/ui/headings';
import Texts from '../components/ui/texts';

import { FaGoogle } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import CustomLink from '../components/ui/links';

const Footer = () => {
  return (
    <footer className='flex justify-between bg-[#1E1E1E] py-[75px] maxScreenMobile:flex-col'>
      <div className='w-1/2 flex flex-col justify-between pr-[80px] maxScreenMobile:w-full maxScreenMobile:pr-0'>
        <BigHeadings
          color='bigheader_white'
          type='h2'
          text1='Cent Best Wellness'
        />
        <Texts
          color='white'
          type='l'
          align={'left'}
          text="Our company's focus is on healthcare and end-of-life services that are exceptional, compassionate, and dignified for patients and their families."
        />

        <span className='flex items-center justify-between maxScreenMobile:justify-around w-[190px] pt-[30px] maxScreenMobile:w-full'>
          <span className='p-[11.5px] cursor-pointer rounded-full bg-[#2386c06e] text-white'>
            <FaGoogle />
          </span>
          <span className='p-[11.5px] cursor-pointer rounded-full bg-[#2386c06e] text-white'>
            <FaTwitter />
          </span>
          <span className='p-[11.5px] cursor-pointer rounded-full bg-[#2386c06e] text-white'>
            <FaInstagram />
          </span>
          <span className='p-[11.5px] cursor-pointer rounded-full bg-[#2386c06e] text-white'>
            <FaLinkedin />
          </span>
        </span>
      </div>

      <div className='w-1/2 flex flex-col pr-[60px] maxScreenMobile:w-full maxScreenMobile:pr-0'>
        <BigHeadings color='bigheader_white' type='h2' text1='Links' />
        <div className='flex justify-between items-center maxScreenMobile:flex-col maxScreenMobile:h-[300px] maxScreenMobile:items-start maxScreenMobile:mt-[30px]'>
          <CustomLink to='/' text='Home' />
          <CustomLink to='/about' text='About' />
          <CustomLink to='/services' text='Services' />
          <CustomLink to='/case-studies' text='Case Studies' />
          <CustomLink to='/testimonials' text='Testimonials' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
