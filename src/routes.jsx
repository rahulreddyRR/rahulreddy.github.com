import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Redirect from './components/PrivateRoutes/Redirect';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route
          path="/rahulreddy.github.com"
          element={<Redirect redirectUrl="/" />}
        />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
};

export default Routers;
