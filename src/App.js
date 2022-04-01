import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Product from './features/product/Product';
import ProductAdd from './features/product/ProductAdd';

function App() {
  return (
    <div className="App">
      <Product />
    </div>
  );
}

export default App;
