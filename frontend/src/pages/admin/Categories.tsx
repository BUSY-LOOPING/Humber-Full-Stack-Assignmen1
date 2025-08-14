import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Category = {
  _id: string;
  name: string;
  description?: string;
};

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCategories = () => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Categories</h1>
        <Link
          to="/admin/categories/new"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          + Add Category
        </Link>
      </div>

      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Description</th>
            <th className="text-left p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((c) => (
            <tr key={c._id} className="border-b">
              <td className="p-2">{c.name}</td>
              <td className="p-2">{c.description}</td>
              <td className="p-2 space-x-2">
                <Link
                  to={`/admin/categories/${c._id}/edit`}
                  className="px-3 py-1 bg-blue-500 text-white rounded"
                >
                  Edit
                </Link>
                <Link
                  to={`/admin/categories/${c._id}/delete`}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
          {categories.length === 0 && (
            <tr>
              <td colSpan={3} className="text-center p-4">
                No categories found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;
