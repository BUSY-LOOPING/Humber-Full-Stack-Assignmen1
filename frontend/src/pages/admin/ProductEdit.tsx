import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Category = {
  _id: string;
  name: string;
};

const ProductEdit: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) =>
        setForm({
          name: data.name,
          description: data.description || "",
          price: data.price.toString(),
          category: data.category?._id || "",
          imageUrl: data.imageUrl || "",
        })
      );

    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: parseFloat(form.price),
      }),
    }).then(() => navigate("/admin/products"));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
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
          value={form.description}
          onChange={handleChange}
          rows={4}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select a category</option>
          {categories.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ProductEdit;
