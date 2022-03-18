import { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo';
import type {ProductType} from './types/product';
import { NavLink,Navigate,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [count, setCount] = useState<number>(0);

    useEffect(() => {
      const getProducts = async () => {
        const {data} = await axios.get('http://localhost:3000/products');
        setProducts(data);
      }
      getProducts();
    },[])
  return (
    <div className="App">
      {count} <button onClick={() => setCount(count + 1)}>Click</button>
      <hr />
      {/* <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th></th>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return <tr>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => removeItem(item._id)}>Remove</button>
                    </td>
                  </tr>
          })}
          
        </tbody>
      </table> */}
      <header>
        <ul>
          <li><NavLink to="/">Home Page</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/admin">Admin Dashboard</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
            {/* <Route path="/" element={<h1>Home page</h1>} />
            <Route path="product" element={<h1>Product page</h1>} />
            <Route path="about" element={<h1>About page</h1>} /> */}
            <Route path="/" element={<WebsiteLayout/>}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}> 
          <Route index element={<Navigate to="dashboard"/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<ManagerProduct />} />
        </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
