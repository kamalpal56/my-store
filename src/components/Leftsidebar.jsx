// src/components/FilterComponent.jsx
import { useState } from "react";

export default function FilterComponent({ onFilter }) {
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("1000");
  const [minRating, setMinRating] = useState("3");

  const handleApply = () => {
    onFilter({
      category,
      minPrice: minPrice ? Number(minPrice) : null,
      maxPrice: maxPrice ? Number(maxPrice) : null,
      minRating: minRating ? Number(minRating) : null,
    });
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-bold mb-2">Filters</h2>

      {/* Category */}
      <div className="mb-4">
        <label className="block font-semibold">Category</label>
        <select
          className="w-full border rounded px-2 py-1"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Phone">Phone</option>
          <option value="Shoes">Shoes</option>
          <option value="Sunglasses">Sunglasses</option>
          <option value="T-Shirt">T-Shirt</option>
          <option value="Watch">Watch</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block font-semibold">Min Price</label>
        <input
          type="number"
          className="w-full border rounded px-2 py-1"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <label className="block font-semibold mt-2">Max Price</label>
        <input
          type="number"
          className="w-full border rounded px-2 py-1"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* Minimum Rating */}
      <div className="mb-4">
        <label className="block font-semibold">Minimum Rating</label>
        <input
          type="number"
          min="0"
          max="5"
          className="w-full border rounded px-2 py-1"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
        />
      </div>

      <button
        onClick={handleApply}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
      >
        Apply Filters
      </button>
    </div>
  );
}
