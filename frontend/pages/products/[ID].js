import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const { id } = useRouter().query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4000/api/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="rounded mb-4 w-full h-64 object-cover" />
      <p className="text-lg font-medium mb-2">₹{product.price}</p>
      <p className="text-gray-600">{product.description || "No description provided."}</p>
    </div>
  );
}