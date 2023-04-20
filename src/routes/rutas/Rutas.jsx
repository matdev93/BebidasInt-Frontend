import { Routes, Route } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Home from '../../pages/home/Home';
import Auth from '../../pages/auth/Auth';
import Products from '../../pages/products/Products';
import Product from '../../pages/product/Product';

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/auth' element={<Auth />} />
        </Route>
      </Routes>
    </>
  );
};

export default Rutas;
