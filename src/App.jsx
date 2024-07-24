import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/About_Us';
import CaseStudies from './pages/Case_Studies';
import Testimonials from './pages/Testimonials';
import OutofBounds from './pages/404';
import { useContext } from 'react';
import { cartContext } from './context/cartContext';
import Gallary from './pages/Gallary';
import Cart from './components/cart';

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
    path: '/gallery',
    element: <Gallary />,
  },
]);

function App() {
  const { cart } = useContext(cartContext);

  return (
    <>
      <RouterProvider router={router} />

      {cart.length > 0 && <Cart />}
    </>
  );
}

export default App;
