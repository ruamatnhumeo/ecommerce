import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Checkout.scss";

import CheckoutForm from "../../components/CheckoutForm";
import Cart from "../../../cart/components/Cart";
import {
	cartRemove,
	cartCheckOut,
	cartClear,
} from "../../../../flux/actions/cartAction";

function Checkout() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart.bag);

	const totalCost = cart.reduce((total, next) => {
		const totalEachProduct = next.quantity * next.price;
		total += totalEachProduct;
		return total;
	}, 0);

	const handleCheckoutSubmit = (checkoutForm) => {
		const newOrder = { ...checkoutForm, cart, totalCost };
		dispatch(cartCheckOut(newOrder));
	};

	const handleRemoveCart = (productId) => {
		dispatch(cartRemove(productId));
	};

	const handleClearCart = () => {
		dispatch(cartClear());
	};

	return (
		<div className="checkout">
			<div className="checkout__form-layout">
				<CheckoutForm onCheckoutSubmit={handleCheckoutSubmit} />
			</div>

			<div className="checkout__cart-layout">
				<Cart
					isCheckoutPage={true}
					cartOpen={true}
					cart={cart}
					total={totalCost}
					onRemove={handleRemoveCart}
					onClear={handleClearCart}
				/>
			</div>
		</div>
	);
}

export default Checkout;
