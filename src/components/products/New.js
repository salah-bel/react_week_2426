import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

export default function NewProduct() {
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [description, setDescription] = useState("");
  const navigate = useNavigate()
  function handleTitle(e) {
    setTitleValue(e.target.value);
  }
  function handlePrice(e) {
    setPriceValue(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  // sendData
  const newProduct = (product) => {
    fetch("http://localhost:3004/products", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(product),
    })
      .then((res) => {
        console.log("produit envoyé");
      })
      .catch((err) => console.log(err));
  };

  function handleSubmit(e) {
    e.preventDefault();

    let product = {
      title: titleValue,
      price: priceValue,
      description: description,
    };
    newProduct(product);
    navigate("/products")
  }

  return (
    <>
      <div id="form" className="mt-5 w-50 mx-">
        <form onSubmit={handleSubmit}>
          <input value={titleValue} onChange={handleTitle} />
          <input type="number" value={priceValue} onChange={handlePrice} />
          <input value={description} onChange={handleDescription} />

          <button>Envoyer</button>
        </form>
      </div>
    </>
  );
}
