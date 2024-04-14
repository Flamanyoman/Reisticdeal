import CallToAction from '../features/callToAction';
import Footer from '../features/footer';
import Header from '../features/header';
import Navbar from '../features/navbar';
import CaseStudySection1 from '../layouts/casestudylayouts/CaseStudies_Section1';

const CaseStudies = () => {
  return (
    <div className='fillwindow'>
      <section className='bg-[#1E1E1E] relative overflow-hidden'>
        <Navbar />
        <Header header='Case' greenHeader=' Studies' text='~Case Studies~' />
      </section>

      <section>
        <CaseStudySection1 />
      </section>

      <CallToAction />

      <Footer />
    </div>
  );
};

export default CaseStudies;
