import { BigHeadings } from '../../components/ui/headings';
import { ImageCard } from '../../components/ui/images';
import { cartContext } from '../../context/cartContext';
import { useContext } from 'react';

const Home_Section3 = ({ services, onPurchaseClick }) => {
  const { cart, setCart } = useContext(cartContext);

  const Limiter = services.slice(4, services.length - 1);

  const handleClick = (service) => {
    if (service.types.length === 1) {
      setCart([...cart, service.types[0]]);
    } else {
      onPurchaseClick(service.types);
    }
  };

  return (
    <div>
      <div className='w-full flex items-center justify-center'>
        <BigHeadings text1={'Other Services'} type={'h2'} />
      </div>

      <div className='grid grid-cols-3 maxScreenMobile:grid-cols-1 gap-3 maxScreenMobile:gap-1 space-y-6 w-full'>
        {Limiter.map((service, i) => (
          <div className='flex items-center justify-center' key={i}>
            <ImageCard
              width={'potraite2'}
              src={service.image}
              header={service.tagLine}
              text={service.description}
              button={'Purchase'}
              click={() => handleClick(service)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home_Section3;
