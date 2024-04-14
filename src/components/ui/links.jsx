import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ to, text }) => {
  return (
    <Link to={to} className='text-white'>
      {text}
    </Link>
  );
};

export default CustomLink;
