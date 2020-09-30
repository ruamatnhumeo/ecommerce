import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./AsideMenu.scss";

function AsideMenu() {
	const [activeMenu, setActiveMenu] = useState("main");

	const AsideItem = (props) => {
		return (
			<a
				href="#"
				className="aside__menu-item"
				onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
			>
				{props.leftIcon && (
					<span className="icon-left">{props.leftIcon}</span>
				)}

				<div>{props.children}</div>
				<span className="icon-right">{props.rightIcon}</span>
			</a>
		);
	};

	return (
		<aside className="aside">
			<CSSTransition
				in={activeMenu === "main"}
				timeout={500}
				classNames="aside__menu-primary"
				unmountOnExit
			>
				<div className="aside__menu">
					<AsideItem></AsideItem>
					<AsideItem
						goToMenu="men"
						rightIcon={<i className="e-chevron-right"></i>}
					>
						All
					</AsideItem>
					<AsideItem
						goToMenu="women"
						rightIcon={<i className="e-chevron-right"></i>}
					>
						Women
					</AsideItem>
					<AsideItem
						goToMenu="men"
						rightIcon={<i className="e-chevron-right"></i>}
					>
						Men
					</AsideItem>
					<AsideItem>Store Locator</AsideItem>
					<AsideItem>Shop In Vietnam</AsideItem>
					<AsideItem>Client service</AsideItem>
					<AsideItem>Register</AsideItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "women"}
				timeout={500}
				classNames="aside__menu-secondary"
				unmountOnExit
			>
				<div className="aside__menu">
					<AsideItem
						goToMenu="main"
						leftIcon={<i className="e-chevron-left"></i>}
					>
						<span>Women</span>
					</AsideItem>
					<AsideItem>High summer</AsideItem>
					<AsideItem>Neo classic</AsideItem>
					<AsideItem>Arrivals</AsideItem>
					<AsideItem>Ready to wear</AsideItem>
					<AsideItem>Sneakers</AsideItem>
					<AsideItem>Bags</AsideItem>
					<AsideItem>Small leather goods</AsideItem>
					<AsideItem>Shoes</AsideItem>
					<AsideItem>Accessories</AsideItem>
				</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === "men"}
				timeout={500}
				classNames="aside__menu-secondary"
				unmountOnExit
			>
				<div className="aside__menu">
					<AsideItem
						goToMenu="main"
						leftIcon={<i className="e-chevron-left"></i>}
					>
						<span>Men</span>
					</AsideItem>
					<AsideItem>High summer</AsideItem>
					<AsideItem>Neo classic</AsideItem>
					<AsideItem>Arrivals</AsideItem>
					<AsideItem>Ready to wear</AsideItem>
					<AsideItem>Sneakers</AsideItem>
					<AsideItem>Bags</AsideItem>
					<AsideItem>Small leather goods</AsideItem>
					<AsideItem>Shoes</AsideItem>
					<AsideItem>Accessories</AsideItem>
				</div>
			</CSSTransition>
		</aside>
	);
}

export default AsideMenu;
