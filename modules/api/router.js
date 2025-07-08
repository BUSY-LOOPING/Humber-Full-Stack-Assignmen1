import express from 'express';
const router = express.Router();
import {Product} from '../../components/models/product.js';
import {Category} from '../../components/models/category.js';


//api endpoints
// index.js (modified)
router.get("/products", async (req, res) => {
    try {
        const products = await Product.find().populate('category'); // Fetch and populate category data
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/categories", async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).send("Internal Server Error");
    }
});


export default router;