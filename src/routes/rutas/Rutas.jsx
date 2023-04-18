import { Routes, Route } from 'react-router-dom';
// import Catalogo from '../../pages/catalogo/Catalogo';
import Layout from '../../components/layout/Layout';
import Home from '../../pages/home/Home';
import Auth from '../../pages/auth/Auth';

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          {/* <Route path='/catalogo' element={<Catalogo />}/> */}
          {/* <Route path='/admin/users' element={<Users />}/> */}
          <Route path='/auth' element={<Auth />} />
        </Route>
      </Routes>
    </>
  );
};

export default Rutas;
