import { useNavigate } from 'react-router-dom';
import Logo from '../assets/cent best logo.jpg';
import CustomLink from '../components/ui/links';
// import Menu from '../assets/Menu.png';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className='flex flex-col bg-transparent '>
      <nav className='flex items-center justify-between'>
        <span className='flex w-[450px] items-center justify-between maxScreenMobile:hidden'></span>

        <img
          src={Logo}
          alt='Reisticdeal '
          onClick={() => navigate('/')}
          className='cursor-pointer w-[120px] aspect-auto'
        />

        <span className='flex w-[450px] items-center justify-between maxScreenMobile:hidden'></span>

        {/* <span
          className='items-center justify-between md:hidden'
          onClick={() => setOpen(!open)}
        >
          <img src={Menu} alt='Reisticdeal menu' />
        </span> */}
      </nav>

      <span
        className={`md:w-[619px] hidden items-center justify-between h-[300px] ${
          open && 'maxScreenMobile:flex maxScreenMobile:flex-col'
        }`}
      >
        <CustomLink to='/' text='Home' />
        <CustomLink to='/about' text='Services' />
        <CustomLink to='/services' text='Gallary' />

        <CustomLink to='/case-studies' text='About us' />
        <CustomLink to='/case-studies' text='Tribute site' />
        <CustomLink to='/testimonials' text='Location' />
      </span>
    </div>
  );
};

export default Navbar;
