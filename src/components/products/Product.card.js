export default function Product({ product, handleDelete }) {
  return (
    <div style={{ width: "150px", border: "1px solid #000", margin: "20px" }}>
      <img
        style={{ width: "100%" }}
        src={product.thumbnail}
        alt={product.title}
      />
      <h4> {product.title} </h4>
      <p> {product.price} &euro; </p>
      <p> {product.description} </p>
      <button onClick={handleDelete}>Delete</button>
      <a
        type="button"
        className="btn bnt-primary"
        href={"http://localhost:3000/show/" + product.id}
      >
        Detail
      </a>
    </div>
  );
}
