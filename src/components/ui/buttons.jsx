const NormalButton = ({ colorType, text, click }) => {
  return (
    <button
      onClick={click}
      className={`${colorType} px-[50px] py-[12.5px] rounded-[114px] maxScreenMobile:py-[10px] maxScreenMobile:px-[20px]`}
    >
      {text}
    </button>
  );
};

const CircleButton = ({ colorType, svg, click }) => {
  return (
    <button onClick={click} className={`${colorType} p-[12.5px] rounded-full`}>
      {svg}
    </button>
  );
};

export { NormalButton, CircleButton };
