import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Footer.scss';

import cLogo from '../../assets/images/license.svg';
import gitLogo from '../../assets/images/git.svg';
import faceLogo from '../../assets/images/facebook.svg';
import igLogo from '../../assets/images/instagram.svg';
import logo from '../../assets/images/logomnml.png';

function Footer() {
  return (
    <section className="footer">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <img src={logo} alt="logo" style={{width: '76px'}}/>
            <ul className="footer__connect-list">
                <li><a href="#"><img src={gitLogo} alt="github" style={{width: '24px'}}/></a></li>
                <li><a href="#"><img src={faceLogo} alt="facebook" style={{width: '24px'}}/></a></li>
                <li><a href="#"><img src={igLogo} alt="instagram" style={{width: '24px'}}/></a></li>
            </ul>
          </Col>

          <Col xs="auto">
            <div className="footer__client-service">
                <h6>Client Service</h6>
                <p><a href="">FAQ</a></p>
                <p><a href="">Return</a></p>
                <p><a href="">Shipping & Payment</a></p>
                <p><a href="">Follow Order</a></p>
            </div>
          </Col>

          <Col xs="auto">
          <div className="footer__contact">
                <h6>Contact Us</h6>
                <p><a href="#">Email</a></p>
                <p>Call Us: +84123123</p>
                <p>Mon-Sat.7am-9pm</p>
                <p><a href="#">mnml copyright<img src={cLogo} alt="instagram" style={{width: '10px', margin: '0 0 10px 3px'}}/></a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;