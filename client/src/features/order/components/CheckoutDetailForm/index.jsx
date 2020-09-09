import React from "react";
import "./CheckoutDetailForm.scss";

function CheckoutDetailForm(props) {
  const { menu, onMenuClick } = props;

  const handleOnClick = () => {
    if(!onMenuClick) return;

    onMenuClick();
  }

  return (
    <div className="checkout-detail-form">

        <div className="checkout-detail-form__login">
            <div className="">
         
            </div>
        </div>

        <div className="checkout-detail-form__delivery">
            <div className="">
       
            </div>
        </div>

        <div className="checkout-detail-form__payment">
            <div className="">
          
            </div>
        </div>

    </div>
  );
}

export default CheckoutDetailForm;