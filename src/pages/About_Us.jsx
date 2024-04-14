import Footer from '../features/footer';
import Header from '../features/header';
import Navbar from '../features/navbar';
import Aboutus_Section from '../layouts/AboutusLayouts/Aboutus_Section1';

const AboutUs = () => {
  return (
    <div className='fillwindow'>
      <section className='bg-[#1E1E1E] relative overflow-hidden'>
        <Navbar />
        <Header
          header='About'
          greenHeader=' Us'
          text='Tailored Solutions And Helping You Become A Local Celebrity What
          We Offer !! And Get Your Client Acquisition Infrastructure Build Out.'
        />
      </section>

      <section>
        <Aboutus_Section />
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
