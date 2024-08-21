const Home_Section5 = () => {
  const handleMapClick = () => {
    const destination = '9.033506,7.4846105'; // Latitude and Longitude of the destination
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}&travelmode=driving`;
    window.open(url, '_blank');
  };

  return (
    <div
      className='flex flex-col items-center relative md:h-[400px] border w-full maxScreenMobile:w-full maxScreenMobile:aspect-video'
      onClick={handleMapClick}
      style={{ cursor: 'pointer', position: 'relative' }}
    >
      {/* Map iframe */}
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3313684762797!2d7.4846105!3d9.033506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b8300e0f173%3A0x548663570c2acc54!2s2FMM%2B9RJ%2C%20Tafawa%20Balewa%20Way%2C%20Garki%2C%20Abuja%20900103%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1724197184484!5m2!1sen!2sng'
        className='w-full h-full'
        style={{ border: 0, pointerEvents: 'none' }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>

      {/* Dimming overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50 hover:opacity-30 flex justify-center items-center transition-opacity duration-300'>
        <span className='text-white text-lg font-semibold'>
          Click to get directions
        </span>
      </div>
    </div>
  );
};

export default Home_Section5;
