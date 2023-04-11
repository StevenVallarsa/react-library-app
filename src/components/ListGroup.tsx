import { useState } from "react";

export default function ListGroup() {
  const cities: any[] = ["Sudbury", "Toronto", "Ottawa", "North Bay", "Sarnia"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (index: number) => setSelectedIndex(index);

  return (
    <>
      <h1>LIST</h1>
      {cities.length === 0 && <p>No Cities Found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={`list-group-item ${selectedIndex === index ? "active" : ""}`}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

// npm run dev
