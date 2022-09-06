import { Link, Outlet } from "react-router-dom";
const Shoess = () => {
  return (
    <div>
      <h1>Sepatu</h1>
      <br/>
      <nav>
        <Link to="terbaru">Terbaru</Link>
        <span> | </span>
        <Link to="termurah">Termurah</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Shoess;