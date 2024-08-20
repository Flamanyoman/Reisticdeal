// SpecialHeader.js
import React from 'react';
import { NormalButton } from '../components/ui/buttons';
import Texts from '../components/ui/texts';

import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSquarePhone } from 'react-icons/fa6';

const SpecialHeader = ({ onScrollToSection1 }) => {
  return (
    <div className='bg-transparent py-[75px] flex items-center justify-center maxScreenMobile:py-[30px] maxScreenMobile:flex-col'>
      <div className='maxScreenMobile:w-full h-[450px] flex flex-col items-center justify-center'>
        <h1 className='bigheader_white text-[53px] leading-[56px] font-[500] max-w-[800px] py-[30px] text-center maxScreenMobile:text-[33px] maxScreenMobile:leading-[36px] maxScreenMobile:py-[15px]'>
          At Cent Best Wellness we give <span> quality care </span>and a
          <span> dignified farewell</span>.
        </h1>

        <Texts
          color='white'
          type='xl'
          text='We understand that losing a loved one is incredibly painful. Our goal is to support you during this sorrowful time with care, compassion, and quality services.'
        />

        <span className='m-[20px]'></span>

        <NormalButton
          colorType='white'
          text='Book a service'
          click={onScrollToSection1}
        />

        <span className='m-[20px]'></span>

        <span className='flex items-center justify-between maxScreenMobile:justify-around w-[190px] pt-[30px]'>
          <a
            className='p-[11.5px] cursor-pointer rounded-full bg-[#2386c06e] text-white'
            href='mailto:centbestwellness@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGoogle />
          </a>

          <a
            className='p-[11.5px] cursor-pointer rounded-full bg-[#2386c06e] text-white'
            href='https://www.instagram.com/centbestwellness/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>

          <a
            className='p-[11.5px] cursor-pointer rounded-full bg-[#2386c06e] text-white'
            href='https://web.facebook.com/profile.php?id=61561477370262'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook />
          </a>

          <a
            className='p-[11.5px] cursor-pointer rounded-full bg-[#2386c06e] text-white'
            href='tel:+2349068314394'
          >
            <FaSquarePhone />
          </a>
        </span>
      </div>
    </div>
  );
};

export default SpecialHeader;
