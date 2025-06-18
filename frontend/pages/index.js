import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
        Welcome to Geer-Inspired Shop 🛍️
      </h1>
      <p className="text-gray-600 text-lg mb-8 max-w-xl">
        Discover stylish, high-performance products at great prices. Start exploring now!
      </p>
      <Link href="/products">
        <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
          View Products
        </button>
      </Link>
    </div>
  );
}