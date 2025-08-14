import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Product = {
  _id: string;
  name: string;
  price: number;
  imageUrl?: string;
};

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = () => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link
          to="/admin/products/new"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          + Add Product
        </Link>
      </div>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Price</th>
            <th className="text-left p-2">Image</th>
            <th className="text-left p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="border-b">
              <td className="p-2">{p.name}</td>
              <td className="p-2">${p.price}</td>
              <td className="p-2">
                {p.imageUrl && (
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="h-12 object-contain"
                  />
                )}
              </td>
              <td className="p-2 space-x-2">
                <Link
                  to={`/admin/products/${p._id}/edit`}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </Link>
                <Link
                  to={`/admin/products/${p._id}/delete`}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center p-4">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
