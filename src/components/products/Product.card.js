import React from "react";

function productCard({product, handleClick, handleDetail}) {
  return (
    <div className="w-50 m-auto border border-primary p-5 rounded flex-wrap">
      <h2>{product.title}</h2>
      <h2>{product.price}</h2>
      <h2>ID == {product.id}</h2>
      <button
        onClick={handleClick}
      >
        Delete
      </button>
      <a type="button"
         className="btn bnt-primary" 
         href={'http://localhost:3000/show/'+product.id}
         onClick={handleDetail}>
        Detail
      </a>
    </div>
  );
}
export default productCard;
