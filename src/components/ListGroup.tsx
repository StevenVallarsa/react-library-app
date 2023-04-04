export default function ListGroup() {
  const cities = ["Sudbury", "Toronto", "Ottawa", "North Bay", "Sarnia"];
  return (
    <>
      <h1>LIST</h1>
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
