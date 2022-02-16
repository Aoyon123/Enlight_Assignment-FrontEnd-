import React from "react";
import styles from "./productView.module.css";
import Cart from "../cart/cart";
const ProductView = (props) => {
  return (
    <div className={styles.productViewContainer}>
      <h1>Available Products</h1>
      <div className={styles.cartContainer}>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  );
};
export default ProductView;
