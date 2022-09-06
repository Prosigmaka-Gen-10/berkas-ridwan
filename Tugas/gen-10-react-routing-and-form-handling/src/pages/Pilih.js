import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Pilih = () => {
  const navigate = useNavigate();
  return (
    <div>
      ITEM DITAMBAHKAN KE DALAM KERANJANG
      <button onClick={() => navigate(-1)}>
        <Link to="/"></Link> TAMPILAN UTAMA
      </button>
    </div>
  );
};

export default Pilih;
