import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./Category.scss";

import ProductList from "../../components/ProductList";
import Backtop from "../../components/Backtop";
import {
	getCategory,
	deleteProduct,
} from "../../../../flux/actions/productAction";
import { cartAdd } from "../../../../flux/actions/cartAction";
import MoreProduct from "../../components/MoreProduct";

function Category() {
	const { category } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const products = useSelector((state) => state.products);
	const user = useSelector((state) => state.auth.user);
	//   const filterConditions = useSelector((state) => state.conditions);

	let isAdmin = false;

	if (user) {
		isAdmin = user.isAdmin;
	}

	useEffect(() => {
		dispatch(getCategory(category));
	}, [category]);

	const handleAddToCart = (miniProduct) => {
		dispatch(cartAdd(miniProduct));
	};

	const handleProductClick = (productId) => {
		const productUrl = `/product/${productId}/detail`;
		history.push(productUrl);
	};

	const handleUpdateClick = (productId) => {
		const productUrl = `/product/${productId}/update`;
		history.push(productUrl);
	};

	const handleDeleteClick = (productId) => {
		dispatch(deleteProduct(productId));
	};

	// //filtered
	// const filteredProducts = [...products.productList];
	// if (filterConditions) {
	//   if (filterConditions.color || filterConditions.size) {
	//     filteredProducts.filter(product => product.color === color)
	//   }
	// }
	// if (products && products.productList.lenght % 4 !== 0) {
	//   products.productList.push({
	//     name: "fakeProduct",
	//   });
	// }

	return (
		<div className="category">
			<ProductList
				isAdmin={isAdmin}
				productList={products.productList}
				loading={products.loading}
				onProductClick={handleProductClick}
				onUpdateClick={handleUpdateClick}
				onDeleteClick={handleDeleteClick}
				onAddToCart={handleAddToCart}
			/>
			<MoreProduct />
			<Backtop />
		</div>
	);
}

export default Category;
