import React, { useState } from "react";

const SearchFilter = () => {
  const list = [
    "Mulberry",
    "Guava",
    "Papaya",
    "Mandarin",
    "Satsuma",
    "Pineapple",
    "Raspberry",
    "Watermelon",
    "Plum",
    "Sugarcane",
    "Soursop",
    "Longan",
    "Dragon fruit",
  ];

  const [filterList, setFilterList] = useState(list);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }
    const filteredValue = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValue);
  };

  return (
    <div className="App">
      <div>
        Search: <input type="text" placeholder="Search..." onChange={handleSearch} />
      </div>
      {filterList &&
                filterList.map((item, index)=>(
                    <div key={index}>{item}</div>
                ))

      }
    </div>
  );
};

export default SearchFilter;
