// src/controllers/admin.js
import { Product, createProduct, getAllProducts, updateProduct, getProductById, deleteProduct } from '../../components/models/product.js';
import { Category, getAllCategories, createCategory, getCategoryById, deleteCategory } from '../../components/models/category.js';

// Admin dashboard controller
async function dashboard(req, res) { 
	try {
		const productCount = await Product.countDocuments({});
		const categoryCount = await Category.countDocuments({});
		const categories = await getAllCategories();
		const products = await getAllProducts();

		res.render('admin/index', {
			title: "Dashboard",
			productCount,
			categoryCount,
			products,
			categories
		});
	} catch (error) {
		console.error('Error fetching dashboard data:', error);
		res.status(500).send('Internal Server Error');
	}
}

// Product controllers
async function listProductsPage(req, res) {
	try {
		const products = await getAllProducts();
		res.render('admin/products', {title:"Products", products: products });
	} catch (error) {
		console.error('Error fetching products:', error);
		res.status(500).send('Internal Server Error');
	}
}

async function newProductPage(req, res) {
	res.render('admin/createProduct', { title: 'New Product', categories: await getAllCategories() });
}

async function saveNewProduct(req, res) {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const categoryId = req.body.category;
    const imageUrl = req.body.imageUrl;

    // Validate required fields (you can add more validation as needed)
    if (!name || !price) {
        return res.status(400).json({ message: 'Name and price are required' });
    }

    const productData = {
        name,
        description,
        price,
        category: categoryId,
        imageUrl
    };

    try {
        const newProduct = await createProduct(productData);
        res.redirect('/admin/products');
    } catch (error) {
        console.error('Error saving new product:', error);
        res.status(500).json({ message: 'Failed to create product', error: error.message });
    }
}

async function editProductPage(req, res) {
    try {
        const productId = req.params.id;
        const productToEdit = await getProductById(productId);
        const categories = await getAllCategories();
        console.log(`id = ${productId} product = ${productToEdit.name}`);
        if (!productToEdit) {
            return res.status(404).render('admin/error', { message: 'Product not found' });
        }
        res.render('admin/editProduct', { product: productToEdit, title: "Edit Product", categories: categories });
    } catch (error) {
        console.error('Error fetching product for editing:', error);

        return res.status(500).render('admin/error', { message: 'Failed to load product for editing' });
    }
}

async function saveUpdatedProduct(req, res) {
    const productId = req.params.id;
    const updatedData = req.body;

    try {
        await updateProduct(productId, updatedData);
        res.redirect('/admin/products');
    } catch (error) {
        console.error('Error updating product:', error);

        return res.status(500).render('admin/error', { message: 'Failed to update product' });
    }
}   

async function deleteProductPage(req, res) {
    const productId = req.params.id;
    try {
        const productToDelete = await getProductById(productId);
        res.render('admin/deleteProduct', {product: productToDelete, title: `Delete ${productToDelete.name}?`});
    } catch (error) {
        console.log(error);
        return res.status(500).render('admin/error', { message: 'Failed to get product' });
    }
}

async function deleteProductConfirm(req, res) {
    try {
        const productId = req.params.id;
        await deleteProduct(productId);
        res.redirect('/admin/products');
    } catch (error) {
        console.log(error);
        return res.status(500).render('admin/error', { message: 'Failed to delete product' });
    }
}

async function editCategoryPage(req, res) {
    try {
        const categoryId = req.params.id;
        const categoryToEdit = await getCategoryById(categoryId);
        console.log(`id = ${categoryId} category = ${categoryToEdit.name}`);
        if (!categoryToEdit) {
            return res.status(404).render('admin/error', { message: 'category not found' });
        }
        res.render('admin/editCategory', { category: categoryToEdit, title: "Edit category" });
    } catch (error) {
        console.error('Error fetching category for editing:', error);

        return res.status(500).render('admin/error', { message: 'Failed to load category for editing' });
    }
}

async function saveUpdatedCategory(req, res) {
    const categoryId = req.params.id;
    const updatedData = req.body;

    try {
        await updatecategory(categoryId, updatedData);
        res.redirect('/admin/categories');
    } catch (error) {
        console.error('Error updating category:', error);

        return res.status(500).render('admin/error', { message: 'Failed to update category' });
    }
}   



// Category controllers
async function listCategoriesPage(req, res) {
	try {
		const categories = await getAllCategories();
		res.render('admin/categories', {title:"Categories", categories: categories });
	} catch (error) {
		console.error('Error fetching categories:', error);
		res.status(500).send('Internal Server Error');
	}
}

function newCategoryPage(req, res) {
	res.render('admin/createCategory', { title: 'New Product'});
}

async function saveNewCategory(req, res) {
    const name = req.body.name;
    const description = req.body.description;

    if (!name || !description) {
        // If validation fails, return errors to be displayed in the form
        return res.render('admin/createCategory');
    }

    const categoryData = {
        name,
        description
    };

    try {
        // Create the new category in the database
        const newCategory = await createCategory(categoryData);

        // Redirect to the categories listing page
        return res.redirect('/admin/categories');
    } catch (error) {
        console.error('Error creating category:', error);
        // Return validation errors if they exist
        return res.render('admin/createCategory');
    }
}

async function deleteCategoryPage(req, res) {
    const categoryId = req.params.id;
    try {
        const categoryToDelete = await getCategoryById(categoryId);
        res.render('admin/deleteCategory', {category: categoryToDelete, title: `Delete ${categoryToDelete.name}?`});
    } catch (error) {
        console.log(error);
        return res.status(500).render('admin/error', { message: 'Failed to get category' });
    }
}

async function deleteCategoryConfirm(req, res) {
    try {
        const categoryId = req.params.id;
        await deleteCategory(categoryId);
        res.redirect('/admin/categories');
    } catch (error) {
        console.log(error);
        return res.status(500).render('admin/error', { message: 'Failed to delete category' });
    }
}

export default {
	dashboard,
	listCategoriesPage,
	listProductsPage,
	newProductPage,
	saveNewProduct,
    editProductPage,
    saveUpdatedProduct,
    deleteProductPage,
    deleteProductConfirm,

	newCategoryPage,
	saveNewCategory,
    editCategoryPage,
    saveUpdatedCategory,
    deleteCategoryPage,
    deleteCategoryConfirm
}