import { useState } from "react";

function ListGroup() {
  let cities = ["Delhi", "New York", "Paris", "Berlin", "Barielly"];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {cities.length === 0 ? <p>No Cities</p> : null}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
            key={city}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
