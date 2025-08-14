import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageLayout from "./layouts/PageLayout";
import Admin from "./pages/admin/Admin";
import AdminLayout from "./layouts/AdminLayout";
import Products from "./pages/admin/Products";
import ProductCreate from "./pages/admin/ProductCreate";
import ProductEdit from "./pages/admin/ProductEdit";
import ProductDelete from "./pages/admin/ProductDelete";
import Categories from "./pages/admin/Categories";
import CategoryCreate from "./pages/admin/CategoryCreate";
import CategoryEdit from "./pages/admin/CategoryEdit";
import CategoryDelete from "./pages/admin/CategoryDelete";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Admin />} />
        <Route path="products" element={<Products />} />
        <Route path="products/new" element={<ProductCreate />} />
        <Route path="products/:id/edit" element={<ProductEdit />} />
        <Route path="products/:id/delete" element={<ProductDelete />} />

        <Route path="categories" element={<Categories />} />
        <Route path="categories/new" element={<CategoryCreate />} />
        <Route path="categories/:id/edit" element={<CategoryEdit />} />
        <Route path="categories/:id/delete" element={<CategoryDelete />} />
      </Route>
    </Routes>
  );
}

export default App;
