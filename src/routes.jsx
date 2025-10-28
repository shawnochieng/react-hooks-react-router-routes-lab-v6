import Actors from './pages/Actors';
import Home from './pages/Home';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';
import Directors from './pages/Directors';


const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/actors',
    element: <Actors />,
  },
  {
    path: '/directors',
    element: <Directors />,
  },
  {
    path: '/movie/:id',
    element: <Movie />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

export default routes;