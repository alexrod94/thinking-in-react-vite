import { useState } from "react";
import jsonData from "./data.json";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";

function App() {
  const [products, setProducts] = useState(jsonData);
  const [filter, setFilter] = useState("");
  const [inStock, setInStock] = useState(false);
  const [name, setName] = useState("Alex");
  const [showFilter, setShowFilter] = useState(false);

  const handleFilter = (event) => {
    console.log(event);
    setFilter(event.target.value);
  };

  const handleCheckbox = (event) => {
    setInStock(event.target.checked);
  };

  const filteredProducts = products.filter((item) => {
    if (inStock) {
      return item.name.toLowerCase().includes(filter) && item.inStock;
    } else {
      return item.name.toLowerCase().includes(filter);
    }
  });

  return (
    <div>
      <h1>Welcome to Products Page, {name}</h1>
      <button onClick={() => setShowFilter(!showFilter)}>ShowFilters</button>
      {showFilter && (
        <SearchBar
          handleFilter={handleFilter}
          filter={filter}
          inStock={inStock}
          handleCheckbox={handleCheckbox}
        />
      )}

      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default App;
