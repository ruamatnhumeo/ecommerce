import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import cartLogo from '../../assets/images/shopping_bag.svg';
import authLogo from '../../assets/images/user.svg';
import searchLogo from '../../assets/images/search.svg';
import menuLogo from '../../assets/images/grid_2.svg';
import logo from '../../assets/images/logomnml.png';
import './Header.scss';


function Header() {

  const handleMenuClick = () => {
    console.log('menu-btn');
  };

  const handleSearchClick = () => {
    console.log('search-btn');
  };

  const handleAuthClick = () => {
    console.log('auth-btn');
  };

  const handleCartClick = () => {
    console.log('cart-btn');
  }

  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <img className="header__logo" src={logo} alt="logo" style={{width: '70px'}}/>
          </Col>

          <Col xs="auto">
            <div className="header__menu">
              <a href="#" className="header__menu-logo" onClick={handleMenuClick}>
                <img src={menuLogo} alt="menu-logo" style={{width: '18px'}}/>
              </a>
            </div>
          </Col>

          <Col xs="auto">
            <ul className="header__actions header--active">
                <li><a href="#" onClick={handleSearchClick}><img src={searchLogo} alt="search" style={{width: '18px'}}/></a></li>
                <li><a href="#" onClick={handleCartClick}><img src={cartLogo} alt="cart" style={{width: '18px'}}/></a></li>
                <li><a href="#" onClick={handleAuthClick}><img src={authLogo} alt="login/register" style={{width: '18px'}}/></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;