import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const CategoryDelete: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState<{ name?: string }>({});

  useEffect(() => {
    fetch(`/api/categories/${id}`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, [id]);

  const handleDelete = () => {
    fetch(`/api/categories/${id}`, { method: "DELETE" }).then(() =>
      navigate("/admin/categories")
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Delete Category</h1>
      <p>
        Are you sure you want to delete <strong>{category.name}</strong>?
      </p>
      <div className="mt-4 space-x-2">
        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Yes, Delete
        </button>
        <Link
          to="/admin/categories"
          className="px-4 py-2 bg-gray-400 text-white rounded"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default CategoryDelete;
