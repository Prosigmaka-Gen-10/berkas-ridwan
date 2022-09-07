import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Absensi from "./component/pages/Absensi";
import Home from "./component/pages/Home";
import Product from "./component/pages/Product";
import Members from "./component/pages/Members";
import MembersDetails from "./component/pages/Members/MembersDetails";
import ListProduct from "./component/pages/Product/ListProduct";
import DetailProduk from "./component/pages/Product/DetailProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="absensi" element={<Absensi />} />
          <Route path="product" element={<Product />}>    
            <Route path="list-produk" element={<ListProduct />} />
            <Route path="detail-produk/:namaproduk" element={<DetailProduk />} />
          </Route>
          <Route path="Members" element={<Members />}>
            <Route path=":memberId" element={<MembersDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
