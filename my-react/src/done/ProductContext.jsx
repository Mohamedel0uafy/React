import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    { name: "Phone", price: 500 },
    { name: "Laptop", price: 1200 }
  ]);

  const [currentProduct, setCurrentProduct] = useState(null); // for edit

  const addProduct = (product) => {
    setProducts([...products, product]);
  };


  const updateProduct = (index, updatedProduct) => {
    const newProducts = [...products];
    newProducts[index] = updatedProduct;
    setProducts(newProducts);
  };

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      currentProduct,
      setCurrentProduct
    }}>
      {children}
    </ProductContext.Provider>
  );
}
