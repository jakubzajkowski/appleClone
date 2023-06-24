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
import useFetchApi from './hooks/useFetchApi';
import Account from './pages/Account/Account'

export default function App() {
  const mobile=window.matchMedia("(max-width: 950px)")
  const {data,error,isLoading}=useFetchApi('/api/users')
  useEffect(()=>{
    store.dispatch(FetchUser(data,isLoading))
  },[data])
  return (
    <MobileContext.Provider value={mobile}>
      <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home mobile={mobile}/>}></Route>
                <Route path="/store" element={<Store mobile={mobile}/>}></Route>
                <Route path="/store/buy-mac" element={<BuyMac mobile={mobile}/>}></Route>
                <Route path="/store/buy-iphone" element={<BuyiPhone mobile={mobile}/>}></Route>
                <Route path="/store/buy-ipad" element={<BuyiPad mobile={mobile}/>}></Route>
                <Route path="/store/buy-mac/:name" element={<BuyCastomizeMac mobile={mobile}/>} />
                <Route path="/store/buy-iphone/:name" element={<BuyCastomizeiPhone mobile={mobile}/>} />
                <Route path="/store/buy-ipad/:name" element={<BuyCastomizeiPad mobile={mobile}/>} />
                <Route path="/iphone-14-pro" element={<IPhone14Pro mobile={mobile}/>} />
                <Route path="/ipad-pro" element={<ParallaxProvider><IPadPro mobile={mobile} /></ParallaxProvider>} />
                <Route path="/imac" element={<IMac mobile={mobile}/>} />
                <Route path="/mac" element={<ExploreAllMac mobile={mobile}/>} />
                <Route path="/ipad" element={<ExploreAllIpad mobile={mobile}/>} />
                <Route path="/iphone" element={<ExploreAllIphone mobile={mobile}/>} />
                <Route path="/tv-home" element={<TVandHome mobile={mobile}/>} />
                <Route path="/register" element={<Register mobile={mobile}/>} />
                <Route path="/sign-up" element={<SignUp mobile={mobile}/>} />
                <Route path="/account" element={<Account mobile={mobile}/>} />
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
