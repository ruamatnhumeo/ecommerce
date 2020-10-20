import React from "react";
import "./Menu.scss";
import ToggleButton from "./ToggleButton";
import AsideMenu from "./AsideMenu";

function Menu(props) {
	const { isMenuOpen, onMenuClick } = props;
	const menuContentClassName = !isMenuOpen
		? "menu__content"
		: "menu__content menu__content--open";

	const handleOnClick = () => {
		if (!onMenuClick) return;

		onMenuClick();
	};

	return (
		<div className="menu">
			<ToggleButton onClick={handleOnClick} />
			<section className={menuContentClassName}>
				<AsideMenu />
			</section>
		</div>
	);
}

export default Menu;
