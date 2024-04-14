const Texts = ({ color, type, text }) => {
  return <p className={`${color} ${type}`}>{text}</p>;
};

export default Texts;
