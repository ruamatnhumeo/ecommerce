import React from "react";
import "./OrderList.scss";

function OrderList(props) {
	const { orders } = props;

	return (
		<div className="order-list">
			<div className="order-list__inner">
				<div className="order-list__title">
					<h6>Order List</h6>
				</div>
				<div className="order-list__table">
					<table>
						<thead>
							<tr>
								<th>Id</th>
								<th>Date</th>
								<th>Total</th>
								<th>FromId</th>
								<th>Address</th>
								<th>Cart</th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => (
								<tr>
									<td>{order._id}</td>
									<td>{order.date}</td>
									<td> {formatCurrency(order.totalPrice)}</td>
									<td>{order.fromId}</td>
									<td>{order.toCity}</td>
									<td>
										{order.cart.map((product) => (
											<div>
												{product.name} {" x "}{" "}
												{product.quantity}
											</div>
										))}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default OrderList;
