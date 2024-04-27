import { SmallHeadings } from '../../components/ui/headings';
import Texts from '../../components/ui/texts';
import money from './assets/money.png';
import time from './assets/time.png';
import allData from '../../data/data';

const TestimonialsSection1 = () => {
  return (
    <div className='flex flex-col'>
      {allData.testimonials.map((testimonial, i) => (
        <div key={i}>
          <img
            src={testimonial.img}
            alt='Reisticdeal Image'
            className='w-[350px] rounded-lg mb-[20px]'
          />

          <div className='flex items-center justify-between w-[400px] maxScreenMobile:flex-col maxScreenMobile:items-start'>
            <span className='flex items-center justify-between maxScreenMobile:pb-[10px]'>
              <img src={money} alt='Reisticdeal Image' />
              <Texts color='' type='l' text='Cash Collected' />:{' '}
              <Texts color='green' type='l' text={testimonial.money} />
            </span>

            <span className='flex items-center justify-between'>
              <img src={time} alt='Reisticdeal Image' />
              <Texts color='' type='l' text='Time' />:{' '}
              <Texts color='green' type='l' text={testimonial.time} />
            </span>
          </div>
          {testimonial.paragraph.map((paragraph, i) => (
            <span className='flex flex-col pt-[40px]' key={i}>
              <SmallHeadings type='h3' text={paragraph.mainHeadings} />

              <Texts type='l special' text={paragraph.text} />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TestimonialsSection1;
