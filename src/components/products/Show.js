import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Show() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:3004/products/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="text-center m-5">
      <h1>Title : {product.title}</h1>
      <h1>ID : {product.id}</h1>
      <h1>Price : {product.price}</h1>
    </div>
  );
}
