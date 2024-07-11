import { NormalButton } from './buttons';
import { BigHeadings } from './headings';
import Texts from './texts';
import allData from '../../data/data';

const ImageDiv = ({
  src,
  width,
  type,
  bottomText,
  arrayNum,
  onPurchaseClick,
}) => {
  const handlePurchaseClick = () => {
    const serviceData = allData.services[arrayNum].types;
    onPurchaseClick(serviceData);
  };

  return type === 'hover-image' ? (
    <div
      className={`relative ${width} cursor-pointer image__div overflow-hidden`}
    >
      <img
        src={src}
        className={`w-full h-full absolute top-0 left-0`}
        alt='Saint best image'
      />
      <span className='w-full h-full absolute z-10 flex items-center justify-center -top-full maxScreenMobile:top-0 hover:top-0 hover:bg-[#000000c0]'>
        <div className='scale-[0.8]'>
          <NormalButton
            colorType='white'
            text='Purchase'
            click={handlePurchaseClick}
          />
        </div>
      </span>
      <div className='absolute bottom-[25px] w-full flex items-center justify-center'>
        <Texts type={'xl'} text={bottomText} color={'white'} />
      </div>
    </div>
  ) : (
    <div
      className={`relative ${width} h-[544.26px] cursor-pointer image__div overflow-hidden`}
    >
      <img
        src={src}
        className={`w-full h-full absolute top-0 left-0`}
        alt='Saint best image'
      />
      <div className='absolute bottom-[25px] w-full flex flex-col items-center justify-center'>
        <div className='w-full flex items-start pl-4 mb-[20px]'>
          <Texts type={'xl'} text={bottomText} color={'white'} />
        </div>
        <div className='w-full flex items-start pl-4'>
          <Texts
            type={'s'}
            text={
              'This is going to be a one or two lines biography, for example: Professor who touched many lives'
            }
            align={'left'}
            color={'white'}
          />
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ width, src, header, text, button }) => {
  return (
    <div className={`${width}  cursor-pointer image__div overflow-hidden`}>
      <img src={src} className={`w-full aspect-video`} alt='Saint best image' />

      <div className='w-full min-h-[340px] maxScreenMobile:min-h-[250px] flex flex-col justify-between items-center p-[20px]'>
        <div className='w-full flex items-center justify-center'>
          <BigHeadings type={'h2'} text1={header} />
        </div>

        <Texts text={text} type={'l'} align={'left'} />

        <NormalButton text={button} colorType={'black'} />
      </div>
    </div>
  );
};

export { ImageDiv, ImageCard };
