import { MouseEvent } from "react";

function ListGroup() {
  let items: string[] = [
    "New York",
    "Kuala Lumpur",
    "Los Angeles",
    "Cairo",
    "Paris",
  ];
  //   items = [];

  const handleClick = (e: MouseEvent) => console.log("Clicked:", e.target);

  //   Bootstrap like classes made with Tailwind. See index.scss
  return (
    <>
      <h2>City List</h2>
      {!items.length && (
        <>
          <p className="text-red-500">No items found</p>
        </>
      )}
      <ul className="list-group border mt-5">
        {items.map((city, i) => (
          <li className="list-group-item" key={i} onClick={handleClick}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
