import { BigHeadings } from '../../components/ui/headings';
import { ImageDiv } from '../../components/ui/images';
import { useEffect, useState } from 'react';
import { NormalButton } from '../../components/ui/buttons';
import { useLocation, useNavigate } from 'react-router-dom';

import famImg1 from '../../assets/Fam img 1.jpg';
import famImg2 from '../../assets/Fam img 2.jpg';
import famImg3 from '../../assets/Fam img 3.jpg';
import famImg4 from '../../assets/Fam img 4.jpg';
import famImg5 from '../../assets/Fam img 5.jpg';
import famImg6 from '../../assets/Fam img 6.jpg';
import famImg7 from '../../assets/Fam img 7.jpg';
import famImg8 from '../../assets/Fam img 8.jpg';

import cofImg1 from '../../assets/Cof img 1.jpg';
import cofImg2 from '../../assets/Cof img 2.jpg';
import cofImg3 from '../../assets/Cof img 3.jpg';
import cofImg4 from '../../assets/Cof img 4.jpg';
import cofImg5 from '../../assets/Cof img 5.jpg';
import VideoThumbnail from '../../components/videothumbnail';

const videos = ['DX7fS8FGmjA', 'GowGxFgZddQ', 'B11UWGVjPEo'];

const Home_Section4 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const [gallery, setGallery] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === 'gallery') setGallery(true);
  }, [location.pathname]);

  const navigate = useNavigate();

  const images = [
    { src: famImg1, alt: 'Adebisi`s' },
    { src: famImg2, alt: 'Smith`s' },
    { src: famImg3, alt: 'Abubakar Bala`s' },
    { src: famImg4, alt: 'Jola`s' },
    { src: famImg5, alt: 'Chukwubenikem' },
    { src: famImg6, alt: 'Asido`s' },
    { src: famImg7, alt: 'Attah`s' },
    { src: famImg8, alt: 'Damini`s' },
    { src: cofImg1, alt: 'Nigerian Military' },
    { src: cofImg2, alt: 'Nigerian Military' },
    { src: cofImg3, alt: 'Nigerian Military' },
    { src: cofImg4, alt: 'Nigerian Military' },
    { src: cofImg5, alt: 'Nigerian Military' },
  ];

  return (
    <div>
      <div className='w-full flex items-center justify-center'>
        <BigHeadings text1={'Gallery'} type={'h2'} color={'bigheader_white'} />
      </div>

      {!isMobile || gallery ? (
        <div className='columns-1 sm:columns-2 md:columns-3 gap-4 w-full'>
          {videos.map((video, i) => (
            <div key={i} className='mb-4 break-inside-avoid'>
              {/* <ImageDiv
                width={'w-full'}
                src={image.src}
                // bottomText={image.alt}
              /> */}

              <VideoThumbnail id={video} />
            </div>
          ))}
        </div>
      ) : (
        <div className='w-full h-[120px] flex items-center justify-center'>
          <NormalButton
            colorType='white'
            text='Go To Gallery'
            click={() => navigate('/gallery')}
          />
        </div>
      )}
    </div>
  );
};

export default Home_Section4;
