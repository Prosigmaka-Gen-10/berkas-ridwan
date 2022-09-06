import { Link, Outlet, useSearchParams } from "react-router-dom";

export default function Members() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeMember = searchParams.get("filter") === "active";
  const members = [
    {
      id: 1,
      nama: "Bambang IX",
    },
    {
      id: 2,
      nama: "Bambang VIII",
    },
    {
      id: 3,
      nama: "Bambang VII",
    },
  ];

  return (
    <div>
      <h1>Member</h1>
      <p>Tugas Use Params</p>
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
          <button onClick={() => setSearchParams({})}>Reset Filters</button>
        </div>
        {activeMember ? (
          <h3>Show Active Members</h3>
        ) : (
          <h3>Select to Active Members</h3>
        )}
      </div>
    </div>
  );
}
