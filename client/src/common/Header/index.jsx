import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Header.scss";
import Menu from "../Menu";
import Search from "../../features/search";
import Login from "../../features/auth/components/Login";
import Cart from "../../features/cart/components/Cart";
import Backdrop from "../Backdrop";
import Account from "../../features/auth/components/Account";

import {
	cartRemove,
	cartCheckOut,
	cartClear,
} from "../../flux/actions/cartAction";
import { clearErrors } from "../../flux/actions/errorAction";
import { login, logout } from "../../flux/actions/authAction";
import productApi from "../../flux/api/productApi";

function Header() {
	const dispatch = useDispatch();
	const error = useSelector((state) => state.error);
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const user = useSelector((state) => state.auth.user);
	let isAdmin;
	let userId;
	if (user) {
		isAdmin = user.isAdmin;
		userId = user.userId;
	}

	const cart = useSelector((state) => state.cart.bag);

	const totalCart = cart.reduce((total, next) => {
		const totalEachProduct = next.quantity * next.price;
		total += totalEachProduct;
	}, 0);

	const [accountOpen, setAccountOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [loginOpen, setLoginOpen] = useState(false);
	const [meesage, setMessage] = useState(null);
	const [cartOpen, setCartOpen] = useState(false);
	const [searchPanelOpen, setSearchPanelOpen] = useState(false);
	const [searchFilter, setSearchFilter] = useState(null);
	const [searchs, setSearchs] = useState(null);

	//handle open & close panel
	const handleBackDropClick = () => {
		if (menuOpen) {
			setMenuOpen(false);
		} else if (loginOpen) {
			setLoginOpen(false);
		} else if (cartOpen) {
			setCartOpen(false);
		} else if (searchPanelOpen) {
			setSearchPanelOpen(false);
		} else if (accountOpen) {
			setAccountOpen(false);
		}
	};

	const handleMenuClick = () => {
		if (loginOpen) {
			setLoginOpen(false);
		} else if (cartOpen) {
			setCartOpen(false);
		} else if (searchPanelOpen) {
			setSearchPanelOpen(false);
		} else if (accountOpen) {
			setAccountOpen(false);
		}

		setMenuOpen(!menuOpen);
	};

	const handleAccountOpenClick = () => {
		if (menuOpen) {
			setMenuOpen(false);
		} else if (cartOpen) {
			setCartOpen(false);
		} else if (searchPanelOpen) {
			setSearchPanelOpen(false);
		}

		setAccountOpen(!accountOpen);
	};

	const handleLoginOpenClick = () => {
		if (menuOpen) {
			setMenuOpen(false);
		} else if (cartOpen) {
			setCartOpen(false);
		} else if (searchPanelOpen) {
			setSearchPanelOpen(false);
		}

		dispatch(clearErrors());

		setLoginOpen(!loginOpen);
	};

	const handleLoginSubmit = (values) => {
		// POST on server
		const user = {
			...values,
		};

		dispatch(login(user));
	};

	const handleLogout = () => {
		dispatch(logout());
	};

	useEffect(() => {
		// Check for login error
		if (error.id === "LOGIN_FAIL") {
			setMessage(error.msg.msg);
		} else {
			setMessage(null);
		}

		// If authenticated, close modal
		if (loginOpen) {
			if (isAuthenticated) {
				setLoginOpen(false);
			}
		}
	}, [isAuthenticated, error, loginOpen]);

	const handleCartOpenClick = () => {
		if (loginOpen) {
			setLoginOpen(false);
		} else if (menuOpen) {
			setMenuOpen(false);
		} else if (searchPanelOpen) {
			setSearchPanelOpen(false);
		} else if (accountOpen) {
			setAccountOpen(false);
		}

		setCartOpen(!cartOpen);
	};

	//cart actions
	const handleRemoveCart = (productId) => {
		dispatch(cartRemove(productId));
	};

	const handleClearCart = () => {
		dispatch(cartClear());
	};

	const handleCheckout = () => {
		dispatch(cartCheckOut(cart, totalCart));
	};

	//Search
	const handleSearchClick = () => {
		if (loginOpen) {
			setLoginOpen(false);
		} else if (cartOpen) {
			setCartOpen(false);
		} else if (menuOpen) {
			setMenuOpen(false);
		} else if (accountOpen) {
			setAccountOpen(false);
		}

		setSearchPanelOpen(!searchPanelOpen);
	};

	useEffect(() => {
		async function fetchSearchs() {
			try {
				const response = await productApi.getSearchProducts(
					searchFilter
				);
				setSearchs(response);
			} catch (error) {
				console.log(error.message);
			}
		}

		if (!searchFilter) return;
		console.log(searchFilter);
		fetchSearchs(searchFilter);
	}, [searchFilter]);

	const handleSearchChange = (formValue) => {
		setSearchFilter({
			...searchFilter,
			search_term: formValue.term,
		});
	};

	return (
		<header className="header">
			<nav className="header__viewport">
				<div className="header__part header__logo">
					<div className="header__logo-content">
						<a href="http://localhost:3000">BALENCIAGA</a>
					</div>
				</div>

				<div className="header__part header__search">
					<div className="header__search-content">
						<Search
							searchs={searchs}
							isSearchPanelOpen={searchPanelOpen}
							onSearchClick={handleSearchClick}
							onSearchChange={handleSearchChange}
						/>
					</div>
				</div>

				<div className="header__part header__actions">
					<div className="header__actions-content">
						<ul>
							<li>
								{isAuthenticated ? (
									<Account
										isAccountOpen={accountOpen}
										onAccountClick={handleAccountOpenClick}
										onLogout={handleLogout}
										isAdmin={isAdmin}
										userId={userId}
									/>
								) : (
									<Login
										isLoginOpen={loginOpen}
										message={meesage}
										onLoginClick={handleLoginOpenClick}
										onLoginSubmit={handleLoginSubmit}
									/>
								)}
							</li>
							<li>
								<Cart
									isCartOpen={cartOpen}
									cart={cart}
									total={totalCart}
									onCartClick={handleCartOpenClick}
									onRemove={handleRemoveCart}
									onClear={handleClearCart}
									onCheckout={handleCheckout}
								/>
							</li>
							<li>
								<Menu
									isMenuOpen={menuOpen}
									onMenuClick={handleMenuClick}
								/>
							</li>
						</ul>
					</div>
				</div>
				<Backdrop
					isOpen={
						menuOpen ||
						cartOpen ||
						loginOpen ||
						accountOpen ||
						searchPanelOpen
					}
					onClick={handleBackDropClick}
				/>
			</nav>
		</header>
	);
}

export default Header;
