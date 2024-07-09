const Texts = ({ color, type, text, align }) => {
  return (
    <p
      className={`${color} ${type} ${align} drop-shadow-[0 48px 48px rgba(0,0,0,0.8)]`}
    >
      {text}
    </p>
  );
};

export default Texts;
