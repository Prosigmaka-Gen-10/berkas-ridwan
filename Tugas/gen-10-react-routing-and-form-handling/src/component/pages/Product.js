import { Link, Outlet } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <h1>Product</h1>
      {/* <input placeholder="Search Products" type="search" /> */}
      <br/>
      <nav>
        <Link to="list-produk">Daftar Produk</Link>
        <span> | </span>
        <Link to="detail-product">Detail Produk</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Products;