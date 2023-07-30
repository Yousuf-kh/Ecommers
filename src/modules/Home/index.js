import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Products from "../../components/Products";
import Feature from "../../components/Feature";
import StatCard from "../../components/StatCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=12");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <>
      <Hero />
      {products.length > 0 ? <Products products={products} /> : "...Loading"}
      <Feature />
      <StatCard />
    </>
  );
};

export default Home;
