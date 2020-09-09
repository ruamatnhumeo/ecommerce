import React from "react";
import "./Menu.scss";
import TooglebButton from "./TooglebButton";
import DropdownMenu from "./DropdownMenu";


function Menu(props) {
  const { menu, onMenuClick } = props;
  const menuViewportClass = !menu ? "menu__viewport" : "menu__viewport menu__viewport--open";

  const handleOnClick = () => {
    if(!onMenuClick) return;

    onMenuClick();
  }

  return (
    <div className="menu">
      <TooglebButton onClick={handleOnClick} />
      <section className={menuViewportClass}>
        <DropdownMenu />
      </section>
    </div>
  );
}

export default Menu;
