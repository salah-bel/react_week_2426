import React, { useState, useEffect } from "react";
import ProductCard from "./Product.card";
import { useNavigate } from "react-router-dom/dist";

function ProductList(props) {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("http://localhost:3004/products");
    const data = await res.json();
    setProducts(data);
  };

  const deleteProduct = async (pId) => {
    if(!window.confirm("ests vous sur de vouloir sup^primer")) return ;
    fetch(`http://localhost:3004/products/${pId}`, {
      method: "DELETE",
    })
      .then((res) => {
        console.log("produit supprim")
        navigate('/products')
      })
      .catch((err) => console.log(err));

      
  };

  useEffect(() => {
    getProducts(); // appel au chargement de la page
  }, []);

  return (
    <>
      <h1 className="m-5 text-center">Liste des produits</h1>
      <main className="list d-flex">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            handleClick={() => {deleteProduct(product.id);}}
          />
        ))}
      </main>
    </>
  );
}
export default ProductList;
