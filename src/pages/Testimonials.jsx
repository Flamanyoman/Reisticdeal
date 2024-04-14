import Footer from '../features/footer';
import Header from '../features/header';
import Navbar from '../features/navbar';
import TestimonialsSection1 from '../layouts/TestimonialsLayouts/Testimonials_Section1';

const Testimonials = () => {
  return (
    <div className='fillwindow'>
      <section className='bg-[#1E1E1E] relative overflow-hidden'>
        <Navbar />
        <Header header='Case' greenHeader=' Studies' text='~Testimonials~' />
      </section>

      <section>
        <TestimonialsSection1 />
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
