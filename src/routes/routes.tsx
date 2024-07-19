import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';

export default function Navigation() {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    //  { path: '/about', element: <About /> },
  ]);

  return element;
}
