import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo rent.png';
import CustomLink from '../components/ui/links';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className='flex items-center justify-between'>
      <img
        src={Logo}
        alt='Reisticdeal '
        onClick={() => navigate('/')}
        className='cursor-pointer'
      />

      <span className='flex w-[619px] items-center justify-between'>
        <CustomLink to='/' text='Home' />
        <CustomLink to='/about' text='About' />
        <CustomLink to='/services' text='Services' />
        <CustomLink to='/case-studies' text='Case Studies' />
        <CustomLink to='/testimonials' text='Testimonials' />
      </span>
    </nav>
  );
};

export default Navbar;
