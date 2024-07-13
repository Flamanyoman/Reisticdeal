import { useContext, useEffect } from 'react';
import play from '../assets/play.png';
// import { ModalContext } from '../context/modalContext';

const VideoThumbnail = ({ id }) => {
  // const { state, setState } = useContext(ModalContext);
  // useEffect(() => {
  //   return () => {
  //     setState({ state: '', id: '' });
  //   };
  // }, []);
  // return (
  //   <span
  //     className='relative w-fit h-fit'
  //     onClick={() => setState({ state: true, id })}
  //   >
  //     <img
  //       src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
  //       alt='Reisticdeal video'
  //       className='w-[400px] rounded-3xl maxScreenMobile:w-full'
  //     />
  //     <img
  //       src={play}
  //       alt='play button'
  //       className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  //       style={{ width: '55px', height: '55px' }}
  //     />
  //   </span>
  // );
};

export default VideoThumbnail;
