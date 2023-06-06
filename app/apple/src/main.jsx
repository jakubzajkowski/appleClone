import React from 'react'
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


export default function App() {
  const mobile=window.matchMedia("(max-width: 950px)")
  return (
    <MobileContext.Provider value={mobile}>
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
            <Route path="/ipad-pro" element={<IPadPro mobile={mobile} />} />
        </Routes>
      </BrowserRouter>
    </MobileContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
