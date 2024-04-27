import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo rent.png';
import CustomLink from '../components/ui/links';
import Menu from '../assets/Menu.png';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className='flex flex-col'>
      <nav className='flex items-center justify-between'>
        <img
          src={Logo}
          alt='Reisticdeal '
          onClick={() => navigate('/')}
          className='cursor-pointer'
        />

        <span className='flex w-[619px] items-center justify-between maxScreenMobile:hidden'>
          <CustomLink to='/' text='Home' />
          <CustomLink to='/about' text='About' />
          <CustomLink to='/services' text='Services' />
          <CustomLink to='/case-studies' text='Case Studies' />
          <CustomLink to='/testimonials' text='Testimonials' />
        </span>

        <span
          className='items-center justify-between md:hidden'
          onClick={() => setOpen(!open)}
        >
          <img src={Menu} alt='Reisticdeal menu' />
        </span>
      </nav>

      <span
        className={`md:w-[619px] hidden items-center justify-between h-[300px] ${
          open && 'maxScreenMobile:flex maxScreenMobile:flex-col'
        }`}
      >
        <CustomLink to='/' text='Home' />
        <CustomLink to='/about' text='About' />
        <CustomLink to='/services' text='Services' />
        <CustomLink to='/case-studies' text='Case Studies' />
        <CustomLink to='/testimonials' text='Testimonials' />
      </span>
    </div>
  );
};

export default Navbar;
