import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Header.scss";
import Menu from "../Menu";
import Search from "../../features/search";
import Login from "../../features/auth/components/Login";
import Cart from "../../features/cart/components/Cart";
import Backdrop from "../Backdrop";

import {
  cartRemove,
  cartCheckOut,
  cartClear,
} from "../../flux/actions/cartAction";
import { clearErrors } from "../../flux/actions/errorAction";
import { login } from "../../flux/actions/authAction";
import productApi from "../../flux/api/productApi";

function Header() {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.error);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const cart = useSelector((state) => state.cart.bag);

  const totalCart = cart.reduce((total, next) => {
    const totalEachProduct = next.quantity * next.price;
    total += totalEachProduct;
  }, 0);

  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [meesage, setMessage] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchPanelOpen, setSearchPanelOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState({});
  const [searchs, setSearchs] = useState([]);

  //handle open&close panel
  const handleBackDropClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else if (loginOpen) {
      setLoginOpen(false);
    } else if (cartOpen) {
      setCartOpen(false);
    } else if (searchPanelOpen) {
      setSearchPanelOpen(false);
    }
  };

  const handleMenuClick = () => {
    if (loginOpen) {
      setLoginOpen(false);
    } else if (cartOpen) {
      setCartOpen(false);
    } else if (searchPanelOpen) {
      setSearchPanelOpen(false);
    }

    setMenuOpen(!menuOpen);
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
    }

    setSearchPanelOpen(!searchPanelOpen);
  };

  useEffect(() => {
    async function fetchSearchs() {
      try {
        const response = await productApi.getSearchProducts(searchTerm);
        const responseJSON = await response.json();
        setSearchs(responseJSON);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchSearchs(searchs);
  }, [searchTerm]);

  const handleSearchChange = (formValue) => {
    setSearchTerm({
      title_like: formValue.searchTerm,
    });
  };

  return (
    <header className="header">
      <nav className="header__viewport">
        <div className="header__part header__logo">
          <div className="header__logo-content">
            <a href="#">TEAMRABBIT</a>
          </div>
        </div>

        <div className="header__part header__search">
          <div className="header__search-content">
            <Search
              searchs={searchs}
              searchPanelOpen={searchPanelOpen}
              onSearchClick={handleSearchClick}
              onSearchChange={handleSearchChange}
            />
          </div>
        </div>

        <div className="header__part header__actions">
          <div className="header__actions-content">
            <ul>
              <li>
                <Login
                  loginOpen={loginOpen}
                  message={meesage}
                  onLoginClick={handleLoginOpenClick}
                  onLoginSubmit={handleLoginSubmit}
                />
              </li>
              <li>
                <Cart
                  cartOpen={cartOpen}
                  cart={cart}
                  total={totalCart}
                  onCartClick={handleCartOpenClick}
                  onRemove={handleRemoveCart}
                  onClear={handleClearCart}
                  onCheckout={handleCheckout}
                />
              </li>
              <li>
                <Menu menu={menuOpen} onMenuClick={handleMenuClick} />
              </li>
            </ul>
          </div>
        </div>
        <Backdrop
          open={menuOpen || cartOpen || loginOpen || searchPanelOpen}
          onClick={handleBackDropClick}
        />
      </nav>
    </header>
  );
}

export default Header;
