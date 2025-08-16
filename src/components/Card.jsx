import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Card({ image, title, price, rating, id }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <Link href={`/product/${id}`}>
        <img src={image} alt={title} className="w-full h-48 object-cover cursor-pointer" />
      </Link>

      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">₹{price}</p>
        <p className="text-yellow-500">⭐ {rating}</p>

        <button
          onClick={() => addToCart({ id, image, title, price, rating })}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
