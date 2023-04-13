import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    index === selectedIndex ? setSelectedIndex(-1) : setSelectedIndex(index);
    onSelectItem(items[index]);
  };

  return (
    <>
      <h1>{heading.toUpperCase()}</h1>
      {items.length === 0 && (
        <p>No {heading.substring(0, 1).toUpperCase() + heading.substring(1).toLowerCase()} Found</p>
      )}
      <ul className="list-group">
        {items.map((city, index) => (
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
