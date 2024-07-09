import Footer from '../features/footer';
import Navbar from '../features/navbar';
import SpecialHeader from '../features/SpecialHeader';

import Home_Section1 from '../layouts/homeLayouts/Home_Section1';
import HomeSection2 from '../layouts/homeLayouts/Home_Section2';
import HomeSection3 from '../layouts/homeLayouts/Home_Section3';
import HomeSection4 from '../layouts/homeLayouts/Home_Section4';
import HomeSection6 from '../layouts/homeLayouts/Home_Section6';
import HomeSection7 from '../layouts/homeLayouts/Home_Section7';

const Home = () => {
  return (
    <div className='fillwindow'>
      <section className='bg-[url("https://images.unsplash.com/photo-1518343161123-c7e9ab4dc4da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-no-repeat bg-cover bg-center overflow-hidden sticky top-0 z-[-1]'>
        <Navbar />
        <SpecialHeader />
      </section>

      <div className='bg-white sticky top-[90px]'>
        <section className='w-full overflow-scroll'>
          <Home_Section1 />
        </section>

        <section>
          <HomeSection2 />
        </section>

        <section>
          <HomeSection3 />
        </section>

        <section className='bg-[#1E1E1E]'>
          <HomeSection4 />
        </section>

        <section>
          <HomeSection6 />
        </section>

        <section className='pb-0 maxScreenMobile:bg-[#1E1E1E]'>
          <HomeSection7 />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
