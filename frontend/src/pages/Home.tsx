import { useEffect, useState } from "react";
import Products from "./Products";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return <Products products={products} />;
};

export default Home;
