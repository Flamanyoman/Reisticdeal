import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { BigHeadings } from '../../components/ui/headings';
import { NormalButton } from '../../components/ui/buttons';
import { useLocation, useNavigate } from 'react-router-dom';
import VideoThumbnail from '../../components/videothumbnail';

const videos = ['DX7fS8FGmjA', 'GowGxFgZddQ', 'B11UWGVjPEo'];

const Home_Section4 = React.memo(() => {
  const [state, setState] = useState({
    width: window.innerWidth,
    gallery: false,
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setState((prevState) => ({
        ...prevState,
        width: window.innerWidth,
      }));
    };

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/gallery') {
      setState((prevState) => ({
        ...prevState,
        gallery: true,
      }));
    }
  }, [location.pathname]);

  const isMobile = useMemo(() => state.width <= 768, [state.width]);

  const handleClick = useCallback(() => {
    navigate('/gallery');
  }, [navigate]);

  return (
    <div>
      <div className='w-full flex items-center justify-center'>
        <BigHeadings text1={'Gallery'} type={'h2'} color={'bigheader_white'} />
      </div>

      {!isMobile || state.gallery ? (
        <div className='columns-1 sm:columns-2 md:columns-3 gap-4 w-full'>
          {videos.map((video, i) => (
            <div key={i} className='mb-4 break-inside-avoid'>
              <VideoThumbnail id={video} />
            </div>
          ))}
        </div>
      ) : (
        <div className='w-full h-[120px] flex items-center justify-center'>
          <NormalButton
            colorType='white'
            text='Go To Gallery'
            click={handleClick}
          />
        </div>
      )}
    </div>
  );
});

export default Home_Section4;
