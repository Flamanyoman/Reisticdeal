const BigHeadings = ({ color, type, text1, specialText, text2 }) => {
  return (
    <>
      {type === 'h1' ? (
        <h1
          className={`${color} text-[53px] leading-[56px] font-[500] max-w-[800px] py-[30px] text-center maxScreenMobile:text-[33px] maxScreenMobile:leading-[36px] maxScreenMobile:py-[15px]`}
        >
          {text1}
          <span>{specialText} </span>
          {text2}
        </h1>
      ) : (
        <h2
          className={`${color} text-[33px] leading-[36px] font-[500] max-w-[650px] py-[30px] maxScreenMobile:text-[26px] maxScreenMobile:text-center maxScreenMobile:leading-[30px] maxScreenMobile:py-[15px]`}
        >
          {text1}
          {specialText && (
            <>
              <span> {specialText} </span>
              {text2}
            </>
          )}
        </h2>
      )}
    </>
  );
};

const SmallHeadings = ({ type, text }) => {
  return type === 'h3' ? (
    <h3 className='text-[28px] leading-[30px] font-[500] py-[20px]'>{text}</h3>
  ) : (
    <h4 className='text-[24px] leading-[30px] font-[500] py-[10px]'>{text}</h4>
  );
};

export { BigHeadings, SmallHeadings };
