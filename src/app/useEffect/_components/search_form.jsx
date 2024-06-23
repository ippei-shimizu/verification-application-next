"use client";
import FilteredListGood from "@/app/useEffect/_components/filtered_list_good";
import FilteredListNotGood from "@/app/useEffect/_components/filtered_list_not_good";
import { useState } from "react";

export default function SearchForm() {
  const [filter, setFilter] = useState("");
  const testListData = ["apple", "banana", "orange", "pear"];

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="果物フィルタリング..."
        value={filter}
        onChange={handleSearchChange}
        className="border border-gray-300 rounded-md p-2"
      />
      {/* <FilteredListNotGood list={testListData} filter={filter} /> */}
      <FilteredListGood list={testListData} filter={filter} />
    </>
  );
}
