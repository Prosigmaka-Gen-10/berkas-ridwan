import { Link } from "react-router-dom";
const Produk = () => {
  return (
    <div>
      <h1>Produk</h1>
      <br/>
      <span> | </span>
        <p>Halaman Produk</p>
      <nav>
        <Link to="/">Tampilan Utama</Link>
      </nav>
    </div>
  );
};
export default Produk;