import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-6">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border p-4 rounded-lg"
            >
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
