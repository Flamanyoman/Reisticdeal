import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/About_Us';
import CaseStudies from './pages/Case_Studies';
import VideoPlayer from './components/videoplayer';
import { modal } from './hooks';
import Testimonials from './pages/Testimonials';
import OutofBounds from './pages/404';
import { useContext } from 'react';
import { ModalContext } from './context/modalContext';
import Gallary from './pages/Gallary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '*',
    element: <OutofBounds />,
  },

  {
    path: '/about',
    element: <AboutUs />,
  },

  {
    path: '/testimonials',
    element: <Testimonials />,
  },

  {
    path: '/case-studies',
    element: <CaseStudies />,
  },

  {
    path: 'gallary',
    element: <Gallary />,
  },
]);

function App() {
  const { state, setState } = useContext(ModalContext);

  return (
    <>
      <RouterProvider router={router} />
      <VideoPlayer
        state={state.state}
        handleModal={() => setState({ state: false, id: '' })}
        src={state.id}
      />
    </>
  );
}

export default App;
