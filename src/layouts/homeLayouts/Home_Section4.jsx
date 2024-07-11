import { BigHeadings } from '../../components/ui/headings';
import { ImageDiv } from '../../components/ui/images';
import { useEffect, useState } from 'react';
import { NormalButton } from '../../components/ui/buttons';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

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

  const [gallary, setGallary] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/gallary') setGallary(true);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div>
      <div className='w-full flex items-center justify-center'>
        <BigHeadings
          text1={'Gallary of Recent Events'}
          type={'h2'}
          color={'bigheader_white'}
        />
      </div>

      {!isMobile || gallary ? (
        <div className='grid grid-cols-3 gap-3 space-y-6 maxScreenMobile:grid-cols-1 maxScreenMobile:space-y-2 w-full'>
          <div className='flex items-center justify-center'>
            <ImageDiv
              width={'potraite2'}
              src='https://images.unsplash.com/photo-1580171564195-978cd9b462df?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              bottomText={'Adebisi`s'}
            />
          </div>

          <div className='flex items-center justify-center'>
            <ImageDiv
              width={'potraite2'}
              src='https://images.unsplash.com/photo-1644666219357-ad1fcfca63b9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              bottomText={'Smith`s'}
            />
          </div>

          <div className='flex items-center justify-center'>
            <ImageDiv
              width={'potraite2'}
              src='https://images.unsplash.com/photo-1662729429569-ad4b1300512e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vdXJuaW5nfGVufDB8MXwwfHx8MA%3D%3D'
              bottomText={'Abubakar Bala`s'}
            />
          </div>

          <div className='flex items-center justify-center'>
            <ImageDiv
              width={'potraite2'}
              src='https://images.unsplash.com/photo-1573826098296-7f3dbf7d7fbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vdXJuaW5nfGVufDB8MXwwfHx8MA%3D%3D'
              bottomText={'Jola`s'}
            />
          </div>

          <div className='flex items-center justify-center'>
            <ImageDiv
              width={'potraite2'}
              src='https://images.unsplash.com/photo-1674281594279-9be271475df6?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              bottomText={'Chukwubenikem'}
            />
          </div>

          <div className='flex items-center justify-center'>
            <ImageDiv
              width={'potraite2'}
              src='https://images.unsplash.com/photo-1710738093745-0da116233e78?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              bottomText={'Asido`s'}
            />
          </div>

          <div className='flex items-center justify-center'>
            <ImageDiv
              width={'potraite2'}
              src='https://images.unsplash.com/photo-1663668044325-fa5f48221155?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              bottomText={'Attah`s'}
            />
          </div>

          <div className='flex items-center justify-center'>
            <ImageDiv
              width={'potraite2'}
              src='https://images.unsplash.com/photo-1630914441929-0d8ea69f95e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              bottomText={'Damini`s'}
            />
          </div>

          <div className='flex items-center justify-center'>
            <ImageDiv
              width={'potraite2'}
              src='https://images.unsplash.com/photo-1573217968560-05cbc6f683e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              bottomText={'Nigerian Military'}
            />
          </div>
        </div>
      ) : (
        <div className='w-full h-[120px] flex items-center justify-center'>
          <NormalButton
            colorType='white'
            text='Go To Galary'
            click={() => navigate('/gallary')}
          />
        </div>
      )}
    </div>
  );
};

export default Home_Section4;
