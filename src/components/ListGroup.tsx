export default function ListGroup() {
  const cities: any[] = ["Sudbury", "Toronto", "Ottawa", "North Bay", "Sarnia"];
  const handleClick = (city: string) => console.log(city);
  return (
    <>
      <h1>LIST</h1>
      {cities.length === 0 && <p>No Cities Found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li key={index} onClick={() => handleClick(city)} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
