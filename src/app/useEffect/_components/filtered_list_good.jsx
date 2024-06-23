import React from "react";

export default function FilteredListGood({ list, filter }) {
  const filteredItems = list.filter((item) => item.includes(filter));

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
