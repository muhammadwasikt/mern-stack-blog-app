import { Route, Routes } from 'react-router';
import routes from './routes';
import { Toaster } from 'react-hot-toast';
import ApiHandling from './layout/modules/ApiHandling';
import LoadingScreen from './components/common/LoadingScreen';

const App = () => {

  const renderRoutes = (routes) => {
    return routes.map(({ path, element, children }, index) => (
      <Route key={index} path={path} element={element}>
        {children && renderRoutes(children)}
      </Route>
    ));
  };

  return (
    <>
      <ApiHandling />
      <LoadingScreen>
        <Toaster />
        <Routes>{renderRoutes(routes)}</Routes>
      </LoadingScreen>
    </>
  );
};

export default App;
