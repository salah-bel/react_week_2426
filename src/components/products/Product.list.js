import React, { useState, useEffect } from "react";
import ProductCard from "./Product.card";
import { useNavigate } from "react-router-dom/dist";

function ProductList(props) {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [selectNumber, setSelectNumber] = useState(1);
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
        navigate('/products')
        console.log("produit supprim")
      })
      .catch((err) => console.log(err));

      
  };

  function handleChange(e) {
    let newSelectNumber = e.target.value;
    setSelectNumber(newSelectNumber);
  }

 

  useEffect(() => {
    getProducts(); // appel au chargement de la page
  }, []);

  return (
    <div className="App">
      <article id="products">
        <h1 style={{ margin: "2em" }}>Liste des produits</h1>
        
        <div>
          <label htmlFor="pet-select">Résultat</label>
          <select onChange={handleChange}>
            <option value="30">Tous</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "flex",
            flexWrap: "wrap",
            width: "90%",
            margin: "auto"
          }}
        >
          {products.map((product) => (
            <ProductCard 
              product={product}
              parentProduct={product} 
              key={product.id} 
              handleDelete={deleteProduct}
              />
          ))}
        </div>
      </article>
    </div>
  );
}
export default ProductList;
