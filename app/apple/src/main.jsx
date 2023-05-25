import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './pages/Home/Home';


export default function App() {
  const mobile=window.matchMedia("(max-width: 950px)")
  console.log(mobile)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home mobile={mobile}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
