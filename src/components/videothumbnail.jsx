import { useContext, useEffect } from 'react';
import play from '../assets/play.png';
import { modalContext } from '../context/cartContext';

const VideoThumbnail = ({ id }) => {
  const { isModalOpen, setIsModalOpen, setModalData } = useContext(modalContext);

  useEffect(() => {
    return () => {
      setIsModalOpen(false);
      setModalData(null);
    };
  }, [setIsModalOpen, setModalData]);

  return (
    <span
      className='relative w-fit h-fit'
      onClick={() => {
        setIsModalOpen(true);
        setModalData({ id });
      }}
    >
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt='Video Thumbnail'
        className='w-[400px] rounded-3xl maxScreenMobile:w-full'
      />
      <img
        src={play}
        alt='Play button'
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        style={{ width: '55px', height: '55px' }}
      />
    </span>
  );
};

export default VideoThumbnail;
