import { useContext, useState, useEffect } from "react";
import { ProductContext } from "./ProductContext";
import { useNavigate } from "react-router-dom";

function ProductForm() {
  const { addProduct, updateProduct, currentProduct, setCurrentProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct.name);
      setPrice(currentProduct.price);
    }
  }, [currentProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentProduct) {
      updateProduct(currentProduct.index, { name, price });
      setCurrentProduct(null); 
    } else {
      addProduct({ name, price });
    }

    navigate("/"); 
  };

  return (
    <div className="container mt-4">
      <h2>{currentProduct ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            className="form-control"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          {currentProduct ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
