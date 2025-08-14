import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CategoryEdit: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", description: "" });

  useEffect(() => {
    fetch(`/api/categories/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setForm({ name: data.name, description: data.description || "" })
      );
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`/api/admin/categories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => navigate("/admin/categories"));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Category</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          rows={3}
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Update
        </button>
      </form>
    </div>
  );
};

export default CategoryEdit;
