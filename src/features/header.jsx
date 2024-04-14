import { BigHeadings } from '../components/ui/headings';

const Header = ({ header, greenHeader, text }) => {
  return (
    <header>
      <div className='flex flex-col items-center relative py-[80px]'>
        <BigHeadings
          color='bigheader_white'
          type='h1'
          text1={header}
          specialText={greenHeader}
        />

        <p className='w-[850px] text-white text-[20px] leading-[34px] text-center'>
          {text}
        </p>
      </div>
    </header>
  );
};

export default Header;
