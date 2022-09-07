import { Link, Outlet } from "react-router-dom";

export default function ListProduct() {
  const Product = [
    {
      id: 1,
      nama: "Sepatu Pantofel",
    },
    {
      id: 2,
      nama: "Sepatu Kets",
    },
    {
      id: 3,
      nama: "Sepatu Warior",
    },
  ];
  return (
    <>
      <h2>Daftar Product</h2>
      <ul>
        {Product.map((item) => (
          <li>
            <Link to={`/detail-produk/${item.nama}`} key={item.id}>
              {item.nama} | Lihat Detail
            </Link>
          </li>
        ))}
        <Outlet />
      </ul>
    </>
  );
}
