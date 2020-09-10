import React, { useEffect, useState } from "react";
import "./Orders.scss";
import OrderList from "../../components/OrderList";
import orderApi from "../../../../flux/api/orderApi";

function Orders() {
	const [orders, setOders] = useState([]);
	useEffect(() => {
		async function fetchOrders() {
			try {
				const response = await orderApi.getOrders();
				const responseJSON = await response.json();
				setOders(responseJSON);
			} catch (error) {
				console.log(error.message);
			}
		}

		fetchOrders();
	}, []);

	return (
		<div className="orders">
			<OrderList orders={orders}/>
		</div>
	);
}

export default Orders;
