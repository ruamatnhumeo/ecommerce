import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./Checkout.scss";

import CheckoutForm from "../../components/CheckoutForm";
import Cart from "../../../cart/components/Cart";

function Checkout() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const user = useSelector((state) => state.auth.user);

  const handleAddToCart = (miniProduct) => {
    dispatch(cartAdd(miniProduct));
  };

  return (
    <div className="checkout">
      <Cart />
      <CheckoutForm />
    </div>
  );
}

export default Checkout;
