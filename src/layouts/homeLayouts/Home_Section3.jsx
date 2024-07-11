import { BigHeadings } from '../../components/ui/headings';
import { ImageCard } from '../../components/ui/images';

const Home_Section3 = () => {
  return (
    <div>
      <div className='w-full flex items-center justify-center'>
        <BigHeadings text1={'Other Services'} type={'h2'} />
      </div>

      <div className='grid grid-cols-3 maxScreenMobile:grid-cols-1 gap-3 maxScreenMobile:gap-1 space-y-6 w-full'>
        <div className='flex items-center justify-center'>
          <ImageCard
            width={'potraite2'}
            src={
              'https://images.unsplash.com/photo-1610478492347-5fc0583ed279?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            header={'Order a Hearse'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ducimus rerum ex earum voluptatem quisquam, sequi libero omnis asperiores. Odio sapiente repellendus '
            }
            button={'Purchase'}
          />
        </div>

        <div className='flex items-center justify-center'>
          <ImageCard
            width={'potraite2'}
            src={
              'https://th.bing.com/th/id/R.f7784ce8df1b67d82ff45d094b06ca89?rik=P%2b7LBeQuhZaKvQ&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fACYRWW%2flowering-device-and-funeral-setup-before-the-ceremony-in-a-cemetery-ACYRWW.jpg&ehk=%2fkyTAoW0EaBNAt%2fZCljX51niIs095Lg0GFKLeuY%2fRgQ%3d&risl=&pid=ImgRaw&r=0'
            }
            header={'Lowering Devices'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ducimus rerum ex earum voluptatem quisquam, sequi libero omnis asperiores. Odio sapiente repellendus '
            }
            button={'Purchase'}
          />
        </div>

        <div className='flex items-center justify-center'>
          <ImageCard
            width={'potraite2'}
            src={
              'https://plus.unsplash.com/premium_photo-1672774492335-a3183674f3cf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            header={'Event Security'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ducimus rerum ex earum voluptatem quisquam, sequi libero omnis asperiores. Odio sapiente repellendus '
            }
            button={'Purchase'}
          />
        </div>

        <div className='flex items-center justify-center'>
          <ImageCard
            width={'potraite2'}
            src={
              'https://plus.unsplash.com/premium_photo-1713985789850-6c713e0fb1b2?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            header={'Hall Decoration'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ducimus rerum ex earum voluptatem quisquam, sequi libero omnis asperiores. Odio sapiente repellendus '
            }
            button={'Purchase'}
          />
        </div>

        <div className='flex items-center justify-center'>
          <ImageCard
            width={'potraite2'}
            src={
              'https://images.unsplash.com/photo-1654130015839-2cdfc163ec87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            header={'Funeral Planning'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ducimus rerum ex earum voluptatem quisquam, sequi libero omnis asperiores. Odio sapiente repellendus '
            }
            button={'Purchase'}
          />
        </div>

        <div className='flex items-center justify-center'>
          <ImageCard
            width={'potraite2'}
            src={
              'https://plus.unsplash.com/premium_photo-1680859126181-6f85456f864e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            header={'Billboards and Advertisments'}
            text={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ducimus rerum ex earum voluptatem quisquam, sequi libero omnis asperiores. Odio sapiente repellendus '
            }
            button={'Purchase'}
          />
        </div>
      </div>
    </div>
  );
};

export default Home_Section3;
