import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            PRODUCTS
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Most Popular Products
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {products.map((c) => (
            <Link
              to={`/products/${c.id}`}
              key={c.id}
              className="lg:w-1/4 md:w-1/2 p-4 w-full cursor-pointer"
            >
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt={c.title}
                  className="object-contain object-center w-full h-full block"
                  src={c.image}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {c.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {c.title}
                </h2>
                <p className="mt-1">${c.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
