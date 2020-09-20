import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Product.scss";

import { getProduct } from "../../../../flux/actions/productAction";
import ProductImgList from "../../components/ProductImgList";
import ProductInformation from "../../components/ProductInformation";
import { cartAdd } from "../../../../flux/actions/cartAction"

function Product() {
	const { productId } = useParams();
	const dispatch = useDispatch();
	const [productData, setProductData] = useState(null);
	const user = useSelector((state) => state.auth.user);
	let isAdmin = false;
	const currency = "$";

	if (user) {
		isAdmin = user.isAdmin;
	}

	useEffect(() => {
		setProductData(dispatch(getProduct(productId)));
	}, []);

	const handleAddToCart = (miniProduct) => {
		dispatch(cartAdd(miniProduct));
	};

	return (
		<div className="product">
			<ProductImgList imgList={productData.imgList} isAdmin={isAdmin} />
			<ProductInformation
				productInfo={productData}
				currency={currency}
				isAdmin={isAdmin}
				onAddToCart={handleAddToCart}
			/>
		</div>
	);
}

export default Product;
