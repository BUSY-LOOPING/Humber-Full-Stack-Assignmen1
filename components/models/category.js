import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: String,
    description: String
});

const Category = mongoose.model('Category', categorySchema);

// Create a new category
async function createCategory(categoryData) {
    try {
        const newCategory = await Category.create(categoryData);
        return newCategory;
    } catch (error) {
        console.error('Error creating category:', error);
        throw Error('Failed to create category');
    }
}

// Get all categories
async function getAllCategories() {
    try {
        const categories = await Category.find();
        return categories;
    } catch (error) {
        console.error('Error getting categories:', error);
        throw Error('Failed to retrieve categories');
    }
}

// Get a single category by ID
async function getCategoryById(id) {
    try {
        const category = await Category.findById(id);
        if (!category) throw Error('Category not found');
        return category;
    } catch (error) {
        console.error('Error getting category:', error);
        throw Error(`Failed to retrieve category with ID ${id}`);
    }
}

// Update a category by ID
async function updateCategory(id, updatedData) {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(id, updatedData, { new: true }); // Return the updated document
        if (!updatedCategory) throw Error('Category not found');
        return updatedCategory;
    } catch (error) {
        console.error('Error updating category:', error);
        throw Error(`Failed to update category with ID ${id}`);
    }
}

// Delete a category by ID
async function deleteCategory(id) {
    try {
        await Category.findByIdAndDelete(id);
        return true; // Indicate successful deletion
    } catch (error) {
        console.error('Error deleting category:', error);
        throw Error(`Failed to delete category with ID ${id}`);
    }
}

export { 
    Category,
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};