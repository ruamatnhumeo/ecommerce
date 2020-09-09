import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./DropdownMenu.scss";
import { ReactComponent as ChevronRightIcon } from "../../../assets/images/chevron-right.svg";
import { ReactComponent as ChevronLeftIcon } from "../../../assets/images/chevron-left.svg";

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");

  const DropdownItem = (props) => {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  };

  return (
    <div className="dropdown">
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem></DropdownItem>
          <DropdownItem goToMenu="men" rightIcon={<ChevronRightIcon />}>
            All
          </DropdownItem>
          <DropdownItem goToMenu="women" rightIcon={<ChevronRightIcon />}>
            Women
          </DropdownItem>
          <DropdownItem goToMenu="men" rightIcon={<ChevronRightIcon />}>
            Men
          </DropdownItem>
          <DropdownItem>Store Locator</DropdownItem>
          <DropdownItem>Shop In Vietnam</DropdownItem>
          <DropdownItem>Client service</DropdownItem>
          <DropdownItem>Register</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "women"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ChevronLeftIcon />}>
            <span>Women</span>
          </DropdownItem>
          <DropdownItem>High summer</DropdownItem>
          <DropdownItem>Neo classic</DropdownItem>
          <DropdownItem>Arrivals</DropdownItem>
          <DropdownItem>Ready to wear</DropdownItem>
          <DropdownItem>Sneakers</DropdownItem>
          <DropdownItem>Bags</DropdownItem>
          <DropdownItem>Small leather goods</DropdownItem>
          <DropdownItem>Shoes</DropdownItem>
          <DropdownItem>Accessories</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "men"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ChevronLeftIcon />}>
            <span>Men</span>
          </DropdownItem>
          <DropdownItem>High summer</DropdownItem>
          <DropdownItem>Neo classic</DropdownItem>
          <DropdownItem>Arrivals</DropdownItem>
          <DropdownItem>Ready to wear</DropdownItem>
          <DropdownItem>Sneakers</DropdownItem>
          <DropdownItem>Bags</DropdownItem>
          <DropdownItem>Small leather goods</DropdownItem>
          <DropdownItem>Shoes</DropdownItem>
          <DropdownItem>Accessories</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
