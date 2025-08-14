import React, { useEffect, useState } from "react";

type DashboardData = {
  productCount: number;
  categoryCount: number;
  products: any[];
  categories: any[];
};

const Admin: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.error("Error loading admin dashboard:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="p-6">Loading dashboard...</p>;
  }

  if (!data) {
    return (
      <p className="p-6 text-red-500">Failed to load dashboard data</p>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
          <h2 className="text-lg font-semibold text-gray-700">Products</h2>
          <p className="text-3xl font-bold mt-2">{data.productCount}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
          <h2 className="text-lg font-semibold text-gray-700">Categories</h2>
          <p className="text-3xl font-bold mt-2">{data.categoryCount}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Recent Products</h2>
        <ul className="list-disc list-inside text-gray-700">
          {data.products.slice(0, 5).map((p) => (
            <li key={p._id}>
              {p.name}{" "}
              <span className="text-gray-500">(${p.price})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Categories</h2>
        <ul className="list-disc list-inside text-gray-700">
          {data.categories.map((c) => (
            <li key={c._id}>{c.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
