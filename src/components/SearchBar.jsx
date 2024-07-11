function SearchBar({ handleFilter, filter, inStock, handleCheckbox }) {
  return (
    <div>
      <input
        type="text"
        onChange={() => handleFilter()}
        value={filter}
        placeholder="Filter..."
      />
      <input type="checkbox" checked={inStock} onChange={handleCheckbox} />
    </div>
  );
}

export default SearchBar;
