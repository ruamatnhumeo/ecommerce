import React from "react";
import ProductCard from "../ProductCard";

import "./ProductList.scss";

function ProductList(props) {
  const {
    isAdmin,
    productList,
    loading,
    onProductClick,
    onUpdateClick,
    onDeleteClick,
    onAddToCart,
  } = props;


  return (
    <div className="product-list">
      {loading ? (
        <div style={{"textAlign": "center"}}>Loading...</div>
      ) : (
        <ul>
          {productList.map((product) => (
            <ProductCard
              key={product._id}
              isAdmin={isAdmin}
              product={product}
              onProductClick={onProductClick}
              onUpdateClick={onUpdateClick}
              onDeleteClick={onDeleteClick}
              onAddToCart={onAddToCart}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
