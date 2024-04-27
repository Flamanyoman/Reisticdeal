import CallToAction from '../features/callToAction';
import Footer from '../features/footer';
import Navbar from '../features/navbar';
import SpecialHeader from '../features/SpecialHeader';

import Home_Section1 from '../layouts/homeLayouts/Home_Section1';
import HomeSection2 from '../layouts/homeLayouts/Home_Section2';
import HomeSection3 from '../layouts/homeLayouts/Home_Section3';
import HomeSection4 from '../layouts/homeLayouts/Home_Section4';
import HomeSection5 from '../layouts/homeLayouts/Home_Section5';
import HomeSection6 from '../layouts/homeLayouts/Home_Section6';
import HomeSection7 from '../layouts/homeLayouts/Home_Section7';

const Home = () => {
  return (
    <div className='fillwindow'>
      <section className='bg-[#1E1E1E] relative overflow-hidden'>
        <Navbar />
        <SpecialHeader />
      </section>

      <section>
        <Home_Section1 />
      </section>

      <section>
        <HomeSection2 />
      </section>

      <section>
        <HomeSection3 />
      </section>

      <section>
        <HomeSection4 />
      </section>

      <CallToAction />

      <section>
        <HomeSection5 />
      </section>

      <section>
        <HomeSection6 />
      </section>

      <section className='pb-0 maxScreenMobile:bg-[#1E1E1E]'>
        <HomeSection7 />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
