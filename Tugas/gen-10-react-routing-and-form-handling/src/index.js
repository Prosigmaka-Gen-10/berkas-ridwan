import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Home from './pages/Home';
import Absensi from './pages/Absensi';
import MemberDetails from './pages/Member/MemberDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route index element={<Home />} />
          <Route path="absensi" element={<Absensi />} />
          <Route path="pilih" element={<Pilih />} />
          <Route path="sepatu" element={<Sepatu />} >
            <Route path='terbaru' element={<Terbaru />} >
              <Route path='produk' element={<Produk />} />
            </Route>
            <Route path='termurah' element={<Termurah />} >
              <Route path='produk' element={<Produk />} />
            </Route>
          </Route>
          <Route path="member" element={<Member />} >
            <Route path=':memberId' element={<MemberDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
