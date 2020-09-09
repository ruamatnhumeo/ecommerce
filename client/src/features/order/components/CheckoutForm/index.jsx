import React from "react";
import "./Menu.scss";

import CheckoutDetailForm from "./CheckoutDetailForm";

function CheckoutForm(props) {
  const { menu, onMenuClick } = props;
  const menuViewportClass = !menu ? "menu__viewport" : "menu__viewport menu__viewport--open";

  const handleOnClick = () => {
    if(!onMenuClick) return;

    onMenuClick();
  }

  return (
    <div className="checkout-form">

        <div className="checkout-form__title">
            <div className="">
                <span></span>
            </div>
        </div>

        <div className="checkout-form__detail-form">
            <CheckoutDetailForm />
        </div>

        <div className="checkout-form__button">
            <div className="">
                <button></button>
            </div>
        </div>

    </div>
  );
}

export default CheckoutForm;