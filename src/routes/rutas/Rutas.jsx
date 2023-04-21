import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Auth from '../../pages/auth/Auth';
import Home from '../../pages/home/Home';
import Profile from '../../pages/profile/Profile';
import { useContext, useEffect } from 'react';
import UserContext from '../../context/user/UserContext';

const Rutas = () => {
  const { verifyToken, authStatus } = useContext(UserContext);

  useEffect(() => {
    const getUser = async () => {
      await verifyToken();
    };

    getUser();
  }, [authStatus]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          {!authStatus && <Route path='/auth' element={<Auth />} />}
          {authStatus && <Route path='/user/profile' element={<Profile />} />}
        </Route>
      </Routes>
    </>
  );
};

export default Rutas;
