import React from 'react';
import heroImage from '../assets/desktopimg1.avif';
import bodyImg from '../assets/bodyimg.avif';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const CaseStudies = () => {
  return (
    <div className='flex w-screen h-screen '>
      {/* Left: Large hero image */}
      <aside className='w-[30%] fixed'>
        <img
          src={heroImage}
          alt='Skewered food'
          className='w-full h-screen object-cover'
        />
      </aside>

      {/* Right: Article content */}
      <main className='w-[72%] h-full ml-[31%] relative p-[36px]'>
        {/* Minimal top navigation */}
        <nav className='flex items-center justify-between'>
          <div className='text-xl font-bold text-gray-600'>Food Articles</div>
          <button className='flex flex-col space-y-1' aria-label='Open menu'>
            <span className='block w-6 h-0.5 bg-gray-600'></span>
            <span className='block w-6 h-0.5 bg-gray-600'></span>
            <span className='block w-6 h-0.5 bg-gray-600'></span>
          </button>
        </nav>

        <header className=' text-left mt-[50px] text-gray-600'>
          <h1 className='text-[40px] font-bold mb-2 w-[700px]'>
            Healthy food choices are happy food choices
          </h1>
          <p className='text-gray-600 leading-relaxed text-left article'>
            Admet minim non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </p>
        </header>

        <p className='text-gray-600 leading-relaxed text-left article'>
          Admet minim non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </p>

        {/* Main body content */}
        <div className='flex-grow space-y-1 overflow-y-auto my-[30px]'>
          {/* Three large images within the text */}
          <div className='flex gap-4 overflow-x-auto scrollbar-hide'>
            <img
              src={bodyImg}
              alt='Healthy dish 1'
              className='h-[220px] object-cover'
            />
            <img
              src={bodyImg}
              alt='Healthy dish 2'
              className='h-[220px] object-cover'
            />
            <img
              src={bodyImg}
              alt='Healthy dish 3'
              className='h-[220px] object-cover'
            />
          </div>
        </div>

        <p className='text-gray-600 leading-relaxed text-left article'>
          Admet minim non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet. Admet minim non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat duis enim velit
          mollit. Exercitation veniam consequat sunt nostrud amet. Admet minim
          non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet. Admet minim non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Admet minim non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet. Admet minim non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Admet minim non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet. Admet minim non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Admet minim non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet. Admet minim non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Admet minim non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet. Admet minim non deserunt ullamco est sit aliqua dolor do
          amet sint. Velit officia consequat duis enim velit mollit.
          Exercitation veniam consequat sunt nostrud amet. Admet minim non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet.
        </p>

        <footer className='text-gray-600 article'>
          <div className='flex items-start space-x-4'>
            <span className='font-semibold'>Share with</span>
            <a href='#!' className='text-blue-600 hover:underline'>
              <FacebookIcon />
            </a>
            <a href='#!' className='text-blue-600 hover:underline'>
              <XIcon />
            </a>
            <a href='#!' className='text-blue-600 hover:underline'>
              <InstagramIcon />
            </a>
          </div>

          <div className='flex items-end justify-end space-x-4'>
            <ArrowCircleLeftIcon fontSize='large' />
            <ArrowCircleRightIcon fontSize='large' />
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CaseStudies;
