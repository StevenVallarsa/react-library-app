export default function ListGroup() {
  const cities: any[] = ["Sudbury", "Toronto", "Ottawa", "North Bay", "Sarnia"];
  return (
    <>
      <h1>LIST</h1>
      {cities.length === 0 && <p>No Cities Found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li key={index} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
