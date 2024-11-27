import React from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Products from './pages/Products';
import Settings from './pages/Settings';
import About from './pages/About';
import CrearProductos from './pages/CrearProductos';
import Cart from './pages/cart';
import Favorite from './pages/favorite';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Products/>}></Route>
          <Route path='/about' exact element={<About/>}></Route>
          <Route path='/settings' exact element={<Settings/>}></Route>
          <Route path='/crear/productos' exact element={<CrearProductos/>}></Route>
          <Route path='/crear/productos' exact element={<CrearProductos/>}></Route>
          <Route path='/cart' exact element={<Cart/>}></Route>
          <Route path='/favorite' exact element={<Favorite/>}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}


export default App;
