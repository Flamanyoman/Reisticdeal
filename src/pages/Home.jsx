import React, { useState } from 'react';
import Footer from '../features/footer';
import Navbar from '../features/navbar';
import SpecialHeader from '../features/SpecialHeader';
import allData from '../data/data';
import Home_Section1 from '../layouts/homeLayouts/Home_Section1';
import Home_Section2 from '../layouts/homeLayouts/Home_Section2';
import Home_Section3 from '../layouts/homeLayouts/Home_Section3';
import Home_Section4 from '../layouts/homeLayouts/Home_Section4';
import Home_Section6 from '../layouts/homeLayouts/Home_Section6';
import Home_Section7 from '../layouts/homeLayouts/Home_Section7';
import Modal from '../components/ui/modal';
import Home_Section3_5 from '../layouts/homeLayouts/Home_Section3_5';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handlePurchaseClick = (data) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  return (
    <div className='fillwindow'>
      <section className='bg-[url("https://images.unsplash.com/photo-1518343161123-c7e9ab4dc4da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-no-repeat bg-cover bg-center overflow-hidden sticky top-0 z-[-1]'>
        <Navbar />
        <SpecialHeader />
      </section>
      <div className='bg-white sticky top-[90px]'>
        <section className='w-full overflow-scroll'>
          <Home_Section1
            services={allData.services}
            onPurchaseClick={handlePurchaseClick}
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
