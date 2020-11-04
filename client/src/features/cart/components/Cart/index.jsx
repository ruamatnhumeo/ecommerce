import React from "react";
import "./Cart.scss";

import ProductInCart from "../ProductInCart";

function Cart(props) {
	const {
		cart,
		total,
		isCartOpen,
		onRemove,
		onClear,
		onCheckout = null,
		onCartClick,
	} = props;
	const cartContentClassName = !isCartOpen
		? "cart__content"
		: "cart__content cart__content--open";

	const handleOnClick = () => {
		if (!onCartClick) return;

		onCartClick();
	};

	const handleClear = () => {
		if (!onClear) return;

		onClear();
	};

	const handleCheckout = (total) => {
		if (!onCheckout) return;

		onCheckout(total);
	};

	return (
		<div className="cart">
			<div className="cart__button" onClick={handleOnClick}>
				<span>
					<i
						className="e-shopping-bag"
						style={{ width: "16px", height: "22px" }}
					/>
					<div className="cart__button__count">
						<span>{cart.length > 0 ? cart.length : null}</span>
					</div>
				</span>
			</div>

			<section className={cartContentClassName}>
				<div className="cart__inner">
					<div className="cart__header">
						<span className="cart__title">Shopping Bag</span>
						<span
							className="cart__remove-button"
							onClick={handleClear}
						>
							X
						</span>
					</div>
					{cart.length > 0 ? (
						<div className="cart__wrapper">
							<div className="cart__main">
								<ul className="cart__product-list">
									{cart.map((product) => (
										<ProductInCart
											key={product.id}
											product={product}
											onRemove={onRemove}
										/>
									))}
								</ul>
							</div>

							<div className="cart__footer">
								<div className="cart__total">
									<span className="cart__total-title">
										TOTAL
									</span>
									<span className="cart__total-price">
										{total}
									</span>
								</div>

								<button
									className="cart__checkout-button"
									onClick={handleCheckout}
								>
									Checkout
								</button>
							</div>
						</div>
					) : (
						<span className="cart__empty">
							Your Shopping Bag is empty
						</span>
					)}
				</div>
			</section>
		</div>
	);
}

export default Cart;
