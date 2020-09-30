import React from "react";
import PropTypes from "prop-types";
import "./ProductInformation.scss";

ProductInformation.propTypes = {
	product: PropTypes.object.isRequired,
};

function ProductInformation(props) {
	const { product, onAddToCart, currency } = props;
	const productSizes = Object.keys(product.size);
	const finalPrice = currency + product.price;

	const handleAdd = () => {
		if (!onAddToCart) return;
		const productToAdd = {
			id: product._id,
			name: product.name,
			quantity: 1,
			size: product.size,
			price: Number(product.price),
			img: product.imgList[0],
		};

		onAddToCart(productToAdd);
	};

	return (
		<section className="product-information">
			<div className="product-information__inner">
				<div className="buy-place">
					<div className="buy-place__part">
						<span>{finalPrice}</span>
					</div>
					<button
						className="buy-place__part buy-place__button"
						type="button"
						onClick={handleAdd}
					>
						<span>Add to card</span>
					</button>
				</div>
				<div className="main-place">
					<div className="main-place__name">
						<span>{product.name}</span>
					</div>
				</div>
				<div className="options-place">
					<div className="options-place__part options-place__color">
						<span className="options-place__title product-information__title">
							Color:
						</span>
						<div>{product.color}</div>
					</div>
					<div className="options-place__part options-place__size">
						<div>
							<span className="options-place__title product-information__title">
								Size:
							</span>
							<span className="options-place__size__guide-button">
								Size Guide
							</span>
						</div>
						<ul>
							{productSizes.map((size, index) => (
								<li key={index}>{size}</li>
							))}
						</ul>
					</div>
				</div>
				<div className="shipping-place">
					<button type="button">
						<span>Shipping & return</span>
					</button>
				</div>
				<div className="product-details">
					<div className="product-details__title product-information__title">
						<span>Product Details</span>
					</div>
					<div className="product-details__id">
						<span>Product ID:{product.id}</span>
					</div>
					<div className="product-details__composition">
						<span>Composition:{product.composition}</span>
					</div>
					<div className="product-details__list">
						<ul>
							{product.description.map((detail, index) => (
								<li key={index}>{detail}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProductInformation;
