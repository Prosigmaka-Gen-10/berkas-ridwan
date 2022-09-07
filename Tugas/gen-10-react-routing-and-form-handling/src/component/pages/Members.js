import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function Members() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveMembers = searchParams.get("filter") === "active";
  const members = [
    {
      id: 1,
      nama: "Bambang I",
    },
    {
      id: 2,
      nama: "Bambang II",
    },
    {
      id: 3,
      nama: "Bambang III",
    },
  ];

  return (
    <div>
      <h1>Daftar Member</h1>
      <p>Use Params</p>
      <ul>
        {members.map((item) => (
          <Link to={`/members/${item.id}`} key={item.id}>
            <li>{item.nama}</li>
          </Link>
        ))}
      </ul>
      <Outlet />
      <p>Select Params</p>
      <div>
        <div>
          <button onClick={() => setSearchParams({ filter: "active" })}>
            Active Members
          </button>
          <span>  </span>
          <button onClick={() => setSearchParams({})}>Reset</button>
        </div>
        {showActiveMembers ? (
          <h3>List Active Members</h3>
        ) : (
          <h3>Select to Active Members</h3>
        )}
      </div>
    </div>
  );
}
