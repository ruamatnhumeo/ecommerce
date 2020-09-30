import React from "react";
import "./Menu.scss";
import ToggleButton from "./ToggleButton";
import AsideMenu from "./AsideMenu";

function Menu(props) {
	const { menu, onMenuClick } = props;
	const menuViewportClass = !menu
		? "menu__viewport"
		: "menu__viewport menu__viewport--open";

	const handleOnClick = () => {
		if (!onMenuClick) return;

		onMenuClick();
	};

	return (
		<div className="menu">
			<ToggleButton onClick={handleOnClick} />
			<section className={menuViewportClass}>
				<AsideMenu />
			</section>
		</div>
	);
}

export default Menu;
