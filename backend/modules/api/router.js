import express from 'express';
const router = express.Router();
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from '../../components/models/product.js';
import {
  getAllCategories,
  createCategory,
  getCategoryById,
  deleteCategory,
  updateCategory
} from '../../components/models/category.js';

// Dashboard Route
router.get('/dashboard', async (req, res) => {
  try {
    const productCount = (await getAllProducts()).length;
    const categoryCount = (await getAllCategories()).length;
    const products = await getAllProducts();
    const categories = await getAllCategories();
    res.json({ productCount, categoryCount, products, categories });
  } catch (err) {
    console.error('Error fetching dashboard data:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get("/products", async (req, res) => {
    try {
        const products = await getAllProducts(); 
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/products/:id', async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.post('/products', async (req, res) => {
  try {
    const newProduct = await createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/products/:id', async (req, res) => {
  try {
    const updatedProduct = await updateProduct(req.params.id, req.body);
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    await deleteProduct(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Category Routes
router.get("/categories", async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/categories/:id', async (req, res) => {
  try {
    const category = await getCategoryById(req.params.id);
    res.json(category);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.post('/categories', async (req, res) => {
  try {
    const newCategory = await createCategory(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/categories/:id', async (req, res) => {
  try {
    const updatedCategory = await updateCategory(req.params.id, req.body);
    res.json(updatedCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/categories/:id', async (req, res) => {
  try {
    await deleteCategory(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



export default router;