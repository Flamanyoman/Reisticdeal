import { useEffect, useState } from 'react';
import allData from '../data/data';

const useImageSlider = () => {
  // Combine coffinImages and familyImages into one array
  const combinationArray = [...allData.coffinImages, ...allData.familyImages];

  // State to track the current slide index
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    // Function to update the slide index
    const updateSlideIndex = () => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % combinationArray.length
      );
    };

    // Set an interval to update the slide index every 5 seconds
    const intervalId = setInterval(updateSlideIndex, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [combinationArray.length]);

  // Get the current slide image URL
  const currentSlide = combinationArray[currentSlideIndex];

  console.log(currentSlide);

  return currentSlide;
};

export default useImageSlider;
