import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="hidden md:flex flex-col w-64 bg-[#111] text-white">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/admin"
            className="block px-3 py-2 rounded hover:bg-gray-800"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/products"
            className="block px-3 py-2 rounded hover:bg-gray-800"
          >
            Products
          </Link>
          <Link
            to="/admin/categories"
            className="block px-3 py-2 rounded hover:bg-gray-800"
          >
            Categories
          </Link>
        </nav>
      </aside>

      <div className="flex flex-col flex-1">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Admin User</span>
            <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
              Logout
            </button>
          </div>
        </header>

        <main className="p-4 flex-1">
          <Outlet />
        </main>

        <footer className="bg-gray-200 p-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} DripNest Admin
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
