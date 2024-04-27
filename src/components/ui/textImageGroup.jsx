import Texts from './texts';

const TextImageGroup = ({
  position,
  color1,
  color2,
  type1,
  type2,
  img,
  text1,
  text2,
}) => {
  return (
    <div
      className={`rounded-tl-[30px] absolute ${position} p-3 bg-white  maxScreenMobile:p-2`}
    >
      <div className='w-[90%] flex items-center maxScreenMobile:w-full'>
        <img src={img} alt='Reisticdeal image' />

        <span className='pl-[30px] flex flex-col justify-between maxScreenMobile:pl-[15px]'>
          <Texts color={color1} type={type1} text={text1} />
          <br />
          <Texts color={color2} type={type2} text={text2} />
        </span>
      </div>
    </div>
  );
};

export default TextImageGroup;
