import express from 'express';
const router = express.Router();
import {getAllProducts, Product} from '../../components/models/product.js';
import {Category, getAllCategories} from '../../components/models/category.js';


router.get("/products", async (req, res) => {
    try {
        const products = await getAllProducts(); 
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/categories", async (req, res) => {
    try {
        const categories = await getAllCategories();
        res.json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).send("Internal Server Error");
    }
});


export default router;