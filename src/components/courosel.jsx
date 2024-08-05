import { useEffect, useState } from 'react';
import allData from '../data/data';

const useImageSlider = () => {
  const combinationArray = [...allData.coffinImages, ...allData.familyImages];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const updateSlideIndex = () => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % combinationArray.length
      );
    };

    const intervalId = setInterval(updateSlideIndex, 5000);

    return () => clearInterval(intervalId);
  }, [combinationArray.length]);

  return combinationArray[currentSlideIndex];
};

export default useImageSlider;
