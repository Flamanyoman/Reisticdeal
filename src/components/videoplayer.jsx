import React, { useEffect } from 'react';

const VideoPlayer = ({ state, src, onClose }) => {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [state]);

  return (
    <>
      {state && (
        <div
          className='w-full h-full bg-black bg-opacity-75 fixed inset-0 flex items-center justify-center overflow-hidden'
          onClick={onClose}
        >
          <div
            className='bg-white p-5 rounded shadow-lg w-[65%] max-h-[85%] maxScreenMobile:w-[98%] overflow-y-auto no-scrollbar'
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-end mb-4 '>
              <button onClick={onClose} className='text-black'>
                Close
              </button>
            </div>

            <iframe
              src={`https://www.youtube.com/embed/${src}?autoplay=1`}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              frameBorder='0'
              allowFullScreen
              className='w-full aspect-video'
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
