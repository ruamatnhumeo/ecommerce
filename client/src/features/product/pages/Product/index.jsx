import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Product.scss";

import ProductImgList from "../../components/ProductImgList";
import ProductInformation from "../../components/ProductInformation";
import { cartAdd } from "../../../../flux/actions/cartAction";
import productApi from "../../../../flux/api/productApi";

function Product() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [productData, setProductData] = useState(null);
	const user = useSelector((state) => state.auth.user);
	let isAdmin = false;
	const currency = "$";

	if (user) {
		isAdmin = user.isAdmin;
	}

	useEffect(() => {
		const fetchProductData = async () => {
			const response = await productApi.getProduct(id);
			setProductData(response);
		};
		fetchProductData();
	}, [id]);

	const handleAddToCart = (miniProduct) => {
		dispatch(cartAdd(miniProduct));
	};

	return (
		<>
			{productData && (
				<div className="product">
					<ProductImgList
						imgList={productData.imgList}
						isAdmin={isAdmin}
					/>
					<ProductInformation
						product={productData}
						currency={currency}
						isAdmin={isAdmin}
						onAddToCart={handleAddToCart}
					/>
				</div>
			)}
		</>
	);
}

export default Product;
