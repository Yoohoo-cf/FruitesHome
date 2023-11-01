import React, { useState, ChangeEvent, HTMLInputTypeAttribute } from "react";
import { Icon } from "@iconify/react";
import useProducts from "../hooks/useProducts";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const { products } = useProducts();

  const fetchProducts = (value) => {
    fetch("https://localhost:6006/products")
      .then((res) => res.json())
      .then((json) => {
        const filteredProducts = json.filter((product) => {
          return (
            value &&
            product &&
            product.name &&
            product.name.toLowerCase().includes(value)
          );
        });
        SpeechRecogni;
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search-wrapper">
      <input value={query} type="text" onChange={handleChange} />
      <Icon icon="iconamoon:search-thin" id="search-icon" />
    </div>
  );
};

export default SearchBar;
