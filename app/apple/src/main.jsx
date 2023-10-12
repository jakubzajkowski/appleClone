/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import { MobileContext } from './context';
import BuyMac from './pages/Store/BuyMac/BuyMac';
import BuyiPhone from './pages/Store/BuyiPhone/BuyiPhone';
import BuyiPad from './pages/Store/BuyiPad/BuyiPad';
import BuyCastomizeMac from './pages/Store/BuyMac/BuyCastomizeMac';
import BuyCastomizeiPhone from './pages/Store/BuyiPhone/BuyCastomizeiPhone';
import BuyCastomizeiPad from './pages/Store/BuyiPad/BuyCastomizeiPad';
import IPadPro from './pages/iPadPro/iPadPro';
import { ParallaxProvider } from 'react-scroll-parallax';
import IPhone14Pro from './pages/iPhone14Pro/IPhone14Pro';
import IMac from './pages/IMac/IMac';
import ExploreAllMac from './pages/Mac/ExploreAllMac';
import ExploreAllIpad from './pages/IPad/ExploreAllIpad';
import ExploreAllIphone from './pages/iPhone/ExploreAllIphone';
import TVandHome from './pages/TV&Home/TV&Home';
import Register from './pages/Register/Register';
import SignUp from './pages/SignUp/SignUp'
import { Provider } from 'react-redux';
import store from './Redux/Store';
import {FetchUser} from './Redux/Actions'
import { FetchCart } from './Redux/Actions';
import useAuth from './hooks/useAuth';
import useCart from './hooks/useCart';
import Account from './pages/Account/Account'
import Bag from './pages/Bag/Bag';

export default function App() {
  const mobile=window.matchMedia("(max-width: 950px)")
  const {data,isLoading}=useAuth()
  const {cart}=useCart()
  useEffect(()=>{
      store.dispatch(FetchUser(data,isLoading))
      store.dispatch(FetchCart(cart))
  },[data,cart])

  return (
    <MobileContext.Provider value={mobile}>
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/store" element={<Store/>}></Route>
                <Route path="/store/buy-mac" element={<BuyMac/>}></Route>
                <Route path="/store/buy-iphone" element={<BuyiPhone/>}></Route>
                <Route path="/store/buy-ipad" element={<BuyiPad />}></Route>
                <Route path="/store/buy-mac/:name" element={<BuyCastomizeMac />} />
                <Route path="/store/buy-iphone/:name" element={<BuyCastomizeiPhone />} />
                <Route path="/store/buy-ipad/:name" element={<BuyCastomizeiPad />} />
                <Route path="/iphone-14-pro" element={<IPhone14Pro/>} />
                <Route path="/ipad-pro" element={<ParallaxProvider><IPadPro /></ParallaxProvider>} />
                <Route path="/imac" element={<IMac />} />
                <Route path="/mac" element={<ExploreAllMac />} />
                <Route path="/ipad" element={<ExploreAllIpad />} />
                <Route path="/iphone" element={<ExploreAllIphone />} />
                <Route path="/tv-home" element={<TVandHome />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/account" element={<Account />} />
                <Route path="/bag" element={<Bag/>} />
            </Routes>
          </BrowserRouter>
        </Provider>
    </MobileContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
