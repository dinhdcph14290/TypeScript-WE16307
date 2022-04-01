import { useEffect, useState } from 'react'
import axios from 'axios'
import logo from './logo.svg'
import "antd/dist/antd.variable.min.css";
import './App.css'
import ShowInfo from './components/ShowInfo'
import type {ProductType} from './types/product';
import { add, list, remove } from './api/product'
import { NavLink,Navigate,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct'
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';

import "bootstrap/dist/css/bootstrap.min.css"
import ProductAdd from './pages/ProductAdd';
import ProductEdit from './pages/ProductEdit';
import { ConfigProvider } from 'antd';
import PrivateRouter from './components/PrivateRouter';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
  const [products, setProducts] = useState<ProductType[]>([]); 

    useEffect(() => { // b3
      const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
      }
      getProducts();
  },[])

  const onHandleRemove = async (id:number) =>{
    // xoa tren API
    await remove(id);
    //reRender
    setProducts(products.filter(item => item.id !== id));
  }
  const onHandleAdd = async (product: ProductType) => {
    // call API
    const { data} = await add(product);
    setProducts([...products, data])
  }
  return (
    <div className="App">
      <header>
        <ul>
          <li><NavLink to="/">Home Page</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/admin">Admin Dashboard</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
            <Route path="/" element={<WebsiteLayout/>}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}> 
          <Route index element={<Navigate to="dashboard"/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<ManagerProduct data={products} onRemove={onHandleRemove}/>} />
          <Route path="/admin/product/add" element={<ProductAdd onAdd={onHandleAdd}/>} />
        </Route>
        </Routes>
      </main>
    </div>
  )
}
//B1: npm i react-router-dom react-hook-form
//B2: Use component <BrowserRouter> for wrapper <App /> in file main.tsx
//B3: Khai báo và sử dụng <Routes> trong app
//B4: Khai báo sử dụng <Route> để định nghĩa các đường đẫn
export default App
