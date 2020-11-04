import React from "react";
import "./ProductInCart.scss";

function ProductInCart(props) {
	const { product, onRemove } = props;
	const { name, quantity, size, color, price, img } = product;
	const total = price * quantity;

	const handleRemoveProduct = () => {
		if (!onRemove) return;

		onRemove(product.id);
	};

	return (
		<li className="product-in-cart">
			<div className="product-in-cart__inner">
				<div className="product-in-cart__image">
					<a href="#">
						<img
							src={img}
							alt="product-image"
							style={{ minWidth: "155px", height: "155px" }}
						/>
					</a>
				</div>
				<div className="product-in-cart__info">
					<span
						style={{
							textTransform: "uppercase",
							marginBottom: "10px",
						}}
					>
						{name}
					</span>
					<span>Quantity: {quantity}</span>
					<span>Color: {size}</span>
					<span>Size: {color}</span>
					<span style={{ marginTop: "12px" }}>${total}</span>
				</div>
				<div className="product-in-cart__remove">
					<span
						style={{ cursor: "pointer" }}
						onClick={handleRemoveProduct}
					>
						x
					</span>
				</div>
			</div>
		</li>
	);
}

export default ProductInCart;
