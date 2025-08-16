// pages/index.jsx (Home Page)
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import FilterComponent from "../components/Leftsidebar";
import Products from "../data/products.js";

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [searchQuery, setSearchQuery] = useState("");

  // Handles filters from sidebar
  const handleFilter = (filter) => {
    let tempProducts = Products;

    // Category filter
    if (filter.category && filter.category !== "All") {
      tempProducts = tempProducts.filter(
        (p) => p.category === filter.category
      );
    }

    // Price range filter
    if (filter.minPrice != null) {
      tempProducts = tempProducts.filter((p) => p.price >= filter.minPrice);
    }
    if (filter.maxPrice != null) {
      tempProducts = tempProducts.filter((p) => p.price <= filter.maxPrice);
    }

    // Rating filter
    if (filter.minRating != null) {
      tempProducts = tempProducts.filter((p) => p.rating >= filter.minRating);
    }

    // Search filter
    if (searchQuery.trim()) {
      tempProducts = tempProducts.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(tempProducts);
  };

  // Handle search from Navbar
  const handleSearch = (query) => {
    setSearchQuery(query);
    handleFilter({
      category: "All",
      minPrice: null,
      maxPrice: null,
      minRating: null,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={handleSearch} />

      <section className="flex flex-row p-4 gap-4 flex-1">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0 sticky top-4 h-[calc(100vh-2rem)] overflow-y-auto">
          <FilterComponent onFilter={handleFilter} />
        </div>

        {/* Products */}
        <section className="flex-1 bg-gray-50 rounded-lg overflow-y-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p, index) => (
                <Card
                  key={index}
                  image={p.image}
                  id={p.id}
                  title={p.title}
                  price={p.price}
                  rating={p.rating}
                  onAddToCart={() => alert(`${p.title} added to cart`)}
                />
              ))
            ) : (
              <p className="col-span-3 text-gray-500">No products found.</p>
            )}
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}
