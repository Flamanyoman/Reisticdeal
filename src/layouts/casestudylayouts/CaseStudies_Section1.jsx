import FaceCard from '../../components/faceCard';
import allData from '../../data/data';

const CaseStudySection1 = () => {
  return (
    <div>
      <div className='flex justify-between flex-wrap'>
        {allData.faceCards.map((faceCard, i) => (
          <FaceCard
            img={faceCard.img}
            mainHeadings={faceCard.mainHeadings}
            heading={faceCard.heading}
            text={faceCard.text}
            buttonText={faceCard.buttonText}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudySection1;
