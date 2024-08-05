import React, { useEffect, useState } from 'react';
import allData from '../data/data';

const ImagePreloader = ({ images }) => {
  useEffect(() => {
    // Preload images by creating hidden img elements
    images.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.style.visibility = 'hidden';
      img.style.position = 'absolute';
      document.body.appendChild(img);
    });
  }, [images]);

  return null;
};

export default ImagePreloader;
