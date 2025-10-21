import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const { products, setCurrentProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleEdit = (index) => {
    setCurrentProduct({ ...products[index], index });
    navigate("/form"); // navigate to ProductForm
  };

  return (
    <div className="container mt-4">
      <h2>Product List</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={() => handleEdit(i)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
