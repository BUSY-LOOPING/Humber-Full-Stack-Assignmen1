import express from 'express';
import {Product} from '../../components/models/product.js';
import {Category} from '../../components/models/category.js';

const router = express.Router();

router.get("/", (request, response) => {
    response.render("index", {title : "T-shirt"});
});

router.get("/about", (request, response) => {
    response.render("about", {title : "About Us"});
});

export default router;