import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryCreate: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => navigate("/admin/categories"));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Category</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          rows={3}
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default CategoryCreate;
