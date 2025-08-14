import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    imageUrl: String 
});

const Product = mongoose.model('Product', productSchema);

// Create a new product
async function createProduct(productData) {
    try {
        const newProduct = await Product.create(productData);
        return newProduct;
    } catch (error) {
        console.error('Error creating product:', error);
        throw Error('Failed to create product');
    }
}

// Get all products
async function getAllProducts() {
    try {
        const products = await Product.find().populate('category'); // Populate category data
        return products;
    } catch (error) {
        console.error('Error getting products:', error);
        throw Error('Failed to retrieve products');
    }
}

// Get a single product by ID
async function getProductById(id) {
    try {
        const product = await Product.findById(id).populate('category'); // Populate category data
        if (!product) throw Error('Product not found');
        return product;
    } catch (error) {
        console.error('Error getting product:', error);
        throw Error(`Failed to retrieve product with ID ${id}`);
    }
}

// Update a product by ID
async function updateProduct(id, updatedData) {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedProduct) throw Error('Product not found');
        return updatedProduct;
    } catch (error) {
        console.error('Error updating product:', error);
        throw Error(`Failed to update product with ID ${id}`);
    }
}

// Delete a product by ID
async function deleteProduct(id) {
    try {
        await Product.findByIdAndDelete(id);
        return true; // Indicate successful deletion
    } catch (error) {
        console.error('Error deleting product:', error);
        throw Error(`Failed to delete product with ID ${id}`);
    }
}



export { 
    Product,
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};