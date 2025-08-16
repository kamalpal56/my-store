import { useRouter } from "next/router";
import Products from "../../data/products";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Find the product by id
  const product = Products.find((p) => p.id.toString() === id);

  if (!product) return <p className="p-8 text-red-500">Product not found!</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg p-6">
        
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-green-600 font-semibold mb-2">₹{product.price}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="mb-2"><strong>Category:</strong> {product.category}</p>
          <p className="mb-4"><strong>Rating:</strong> ⭐ {product.rating}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-2 mb-4">
            <label className="font-medium">Quantity:</label>
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="border px-2 py-1 w-16 rounded-md"
            />
          </div>

          {/* Add to Cart */}
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => alert(`${product.title} added to cart`)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
