import React from "react";
import { Link } from "react-router-dom";

import "./Account.scss";

function Account(props) {
	const { accountOpen, onAccountClick, onLogout, isAdmin = false, userId } = props;
	const viewportClassName = !accountOpen
		? "account__viewport"
		: "account__viewport open";

	const handleOpenClick = () => {
		if (!onAccountClick) return;
		onAccountClick();
	};

	const handleLogout = () => {
		if (!onLogout) return;
		onLogout();
	};

	return (
		<section className="account">
			<div className="account-button" onClick={handleOpenClick}>
				<span>Account</span>
			</div>
			<section className={viewportClassName}>
				<div className="account__content">
					<ul>
						<li>
							<Link to={`/auth/profile/:${userId}`}>Profile</Link>
						</li>
						<li>
							{isAdmin ? (
								<Link to="/order/admin">Orders</Link>
							) : (
								<Link to="/product/wishlist">Wishlist</Link>
							)}
						</li>
						<li>
							{isAdmin ? (
								<Link to="/order/admin">Users</Link>
							) : (
								<Link to="/auth/history">History</Link>
							)}
						</li>
						<li onClick={handleLogout}>
							<a href="#">Logout</a>
						</li>
					</ul>
				</div>
			</section>
		</section>
	);
}

export default Account;
