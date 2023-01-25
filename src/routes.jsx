import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Redirect from './components/PrivateRoutes/Redirect';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/rahulreddy.github.com"
          element={<Redirect redirectUrl="/" />}
        />
      </Routes>
    </>
  );
};

export default Routers;

// 9739031283 ->
// 9663254231 -> details to share
