import './App.scss';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation, useNavigate, } from "react-router-dom"
import Header from './components/_render-component/Header/Header';
import Home from './components/_pages/Home/Home';
import { ProductCart } from './components/_render-component/_product/ProdcutCart/ProductCart';
import { history } from './helper';
import Login from './components/_pages/login/Login';
import { Cart } from './components/_render-component/_product/Cart/Cart';

export { App };

function App() {

  history.location=useLocation()
  history.navigate=useNavigate()
    return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productdetail/:id" element={<ProductCart />} />
        <Route path="/Cart" element={<Cart />} />

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}


