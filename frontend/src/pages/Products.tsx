import React from "react";
import Banner from "../components/Banner";

type Product = {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
};

type ProductsProps = {
  products: Product[];
};

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <main className="min-h-screen bg-white">
      <Banner title="Our Products" imageUrl="/img/banner.jpg" />

      <section className="max-w-7xl mx-auto p-4 md:p-8">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center"
              > 
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full max-h-72 object-contain mb-4 bg-white"
                  style={{ background: "#fff" }}
                />

                <p className="text-lg font-bold mb-1 text-center">
                  {product.name}
                </p>
                <p className="text-gray-600 mb-2 text-center">
                  ${product.price}.00
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-60">
            <p className="text-lg text-gray-500">No products found!</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Products;
