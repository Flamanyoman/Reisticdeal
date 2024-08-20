import { NormalButton } from './buttons';
import { BigHeadings } from './headings';
import Texts from './texts';
import allData from '../../data/data';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';

const ImageDiv = ({
  src,
  width,
  type,
  bottomText,
  arrayNum,
  onPurchaseClick,
}) => {
  const { cart, setCart } = useContext(cartContext);

  const handlePurchaseClick = () => {
    const serviceData = allData.services[arrayNum].types;

    if (serviceData.length > 1) {
      onPurchaseClick(serviceData);
    } else {
      setCart([...cart, allData.services[arrayNum].types[0]]);
    }
  };

  return type === 'hover-image' ? (
    <div
      className={`relative ${width} cursor-pointer image__div overflow-hidden`}
    >
      <img
        src={src}
        className={`w-full h-full absolute top-0 left-0`}
        alt='Cent Best image'
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
      className={`relative ${width} h-auto cursor-pointer image__div overflow-hidden`}
    >
      <img src={src} className={`w-full h-auto top-0 left-0`} alt='Cent Best' />
      <div className='absolute bottom-[25px] w-full flex flex-col items-center justify-center'>
        <div className='w-full flex items-start pl-4 mb-[20px]'>
          <Texts type={'xl'} text={bottomText} color={'white'} />
        </div>
        <div className='w-full flex items-start pl-4'>
          <Texts
            type={'s'}
            // text={
            //   'This is going to be a one or two lines biography, for example: Professor who touched many lives'
            // }
            align={'left'}
            color={'white'}
          />
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ width, src, header, text, button, click }) => {
  return (
    <div className={`${width}  cursor-pointer image__div overflow-hidden`}>
      <img src={src} className={`w-full aspect-video`} alt='Cent image' />

      <div className='w-full min-h-[340px] maxScreenMobile:min-h-[270px] flex flex-col justify-between items-center p-[20px] maxScreenMobile:py-[15px]'>
        <div className='w-full flex items-start min-h-[80px] maxScreenMobile:h-[50px]'>
          <BigHeadings type={'h2'} text1={header} />
        </div>

        <div className='flex-1 flex flex-col justify-start'>
          <Texts text={text} type={'l'} align={'left'} />
        </div>

        <NormalButton text={button} colorType={'black'} click={click} />
      </div>
    </div>
  );
};

export { ImageDiv, ImageCard };
