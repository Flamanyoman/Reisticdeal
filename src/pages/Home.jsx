// Home.js
import React, { useRef, useState } from 'react';
import Footer from '../features/footer';
import Navbar from '../features/navbar';
import SpecialHeader from '../features/SpecialHeader';
import allData from '../data/data';
import Home_Section1 from '../layouts/homeLayouts/Home_Section1';
import Home_Section2 from '../layouts/homeLayouts/Home_Section2';
import Home_Section3 from '../layouts/homeLayouts/Home_Section3';
import Home_Section4 from '../layouts/homeLayouts/Home_Section4';
import Home_Section5 from '../layouts/homeLayouts/Home_Section5';
import Home_Section6 from '../layouts/homeLayouts/Home_Section6';
import Home_Section7 from '../layouts/homeLayouts/Home_Section7';
import Modal from '../components/ui/modal';
import Home_Section3_5 from '../layouts/homeLayouts/Home_Section3_5';
import useImageSlider from '../components/courosel';
import ImagePreloader from '../hooks/imagePreloader';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const section1Ref = useRef(null); // Ref for Home_Section1

  const handlePurchaseClick = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const scrollToSection1 = () => {
    console.log('clicked');
    if (section1Ref.current) {
      section1Ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const currentImage = useImageSlider();

  // Combine all image URLs for preloading
  const allImageUrls = [...allData.coffinImages, ...allData.familyImages];

  return (
    <div className='fillwindow'>
      {/* Preload images */}
      <ImagePreloader images={allImageUrls} />

      <section className={`sticky top-0`}>
        <div className='absolute inset-0 bg-black opacity-80 z-0 border'></div>
        <div
          className='absolute inset-0 z-[-1] bg-no-repeat bg-cover bg-center overflow-hidden'
          style={{
            backgroundImage: `url(${currentImage})`,
          }}
        ></div>
        <div className='relative z-10'>
          <Navbar />
          <SpecialHeader onScrollToSection1={scrollToSection1} />
        </div>
      </section>

      <div className='bg-white sticky top-[90px]'>
        <section className='w-full overflow-scroll'>
          <Home_Section1
            services={allData.services}
            onPurchaseClick={handlePurchaseClick}
            ref={section1Ref} // Pass the ref here
          />
        </section>
        <section>
          <Home_Section2 onPurchaseClick={handlePurchaseClick} />
        </section>
        <section>
          <Home_Section3
            services={allData.services}
            onPurchaseClick={handlePurchaseClick}
          />
        </section>

        <section>
          <Home_Section3_5
            services={allData.services}
            onPurchaseClick={handlePurchaseClick}
          />
        </section>
        <section className='bg-[#1E1E1E]'>
          <Home_Section4 />
        </section>

        <section>
          <Home_Section5 />
        </section>

        <section>
          <Home_Section6 />
        </section>
        <section className='pb-0 maxScreenMobile:bg-[#1E1E1E]'>
          <Home_Section7 />
        </section>
        <Footer />
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} data={modalData} />
    </div>
  );
};

export default Home;
