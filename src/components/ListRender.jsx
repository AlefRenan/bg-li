import { useState } from "react";

const ListRender = () => {
  const [list] = useState([
    { id: 1, name: "Alef", age: 18 },
    { id: 2, name: "Douglas", age: 23 },
  ]);
  return (
    <ul>
      {list.map((list) => (
        <li key={list.id} style={{ backgroundColor: "red" }}>
          {list.name} - {list.age}
        </li>
      ))}
    </ul>
  );
};

export default ListRender;
