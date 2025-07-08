import express from 'express';
import adminController from "./controller.js";

const router = express.Router(); 

//admin routes
// Product routes
router.get('/', adminController.dashboard);
router.get('/products', adminController.listProductsPage);
router.get('/products/new', adminController.newProductPage);
router.post('/products/new/save', adminController.saveNewProduct);
router.get('/products/:id/edit', adminController.editProductPage);
router.post('/products/:id/update', adminController.saveUpdatedProduct);
router.get('/products/:id/delete', adminController.deleteProductPage);
router.post('/products/:id/delete/save', adminController.deleteProductConfirm);

// Category routes
router.get('/categories', adminController.listCategoriesPage);
router.get('/categories/new', adminController.newCategoryPage);
router.post('/categories/new/save', adminController.saveNewCategory);
router.get('/categories/:id/edit', adminController.editCategoryPage);
router.post('/categories/:id/update', adminController.saveUpdatedCategory);
router.get('/categories/:id/delete', adminController.deleteCategoryPage);
router.post('/categories/:id/delete/save', adminController.deleteCategoryConfirm);

export default router;