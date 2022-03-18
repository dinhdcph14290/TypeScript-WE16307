import { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo';
import { list, remove } from './api/product';
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
  const [products, setProducts] = useState<ProductType[]>([]);  //b1
  // const [count, setCount] = useState<number>(0);

    useEffect(() => { // b3
      const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
      }
      getProducts();
  },[])

  const removeItem = async (id: number) => {
    // xoa tren API
    const { data } = await remove(id);
    // reRender
    data && setProducts(products.filter(item => item._id !== data._id));
  }
  return (
    <div className="App">
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
//B1: npm i react-router-dom
//B2: sử dụng component <BrowserRouter> để wrapper <App /> trong file main.tsx
//B3: Khai báo và sử dụng <Routes> trong app
//B4: Khai báo sử dụng <Route> để định nghĩa các đường đẫn
export default App
