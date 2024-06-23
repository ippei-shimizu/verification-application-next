import React, { useState, useEffect } from "react";

export default function FilteredListNotGood({ list, filter }) {
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered = list.filter((item) => item.includes(filter));
    setFilteredItems(filtered);
  }, [list, filter]);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
