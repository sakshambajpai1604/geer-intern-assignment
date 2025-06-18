import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block border border-gray-200 rounded-2xl p-4 shadow-md hover:shadow-lg transition bg-white"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-300"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
          {product.name}
        </h3>
        <p className="text-green-600 text-lg font-bold mt-1">₹{product.price}</p>
      </div>
    </Link>
  );
}