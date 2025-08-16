// components/Navbar.jsx
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar({ onSearch }) {
  const { cartItems } = useCart(); // get cart items
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-blue-700 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">Logo</div>

      {/* Search + Cart */}
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch w-full sm:w-3/5 gap-2 sm:gap-4">
        {/* Search */}
        <div className="flex-1 w-full sm:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full sm:w-full pl-10 pr-4 py-2 rounded-xl border border-white/30 bg-transparent text-sm text-white placeholder-white/50 focus:border-white focus:ring-2 focus:ring-white outline-none transition"
            />
            <div className="absolute left-3 top-2.5 text-white/50">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 0 5 11a6 6 0 0 0 12 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link href="/cart">
          <button className="relative flex items-center bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13L17 13M7 13H5.4"
              />
            </svg>
            Cart
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {totalQuantity}
              </span>
            )}
          </button>
        </Link>
      </div>
    </nav>
  );
}
