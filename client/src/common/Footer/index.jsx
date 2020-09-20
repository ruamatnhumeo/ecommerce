import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Footer.scss";

function Footer() {
	return (
		<section className="footer">
			<Container>
				<Row className="justify-content-between">
					<Col xs="auto">
						<div className="footer__connect-list footer__subcol">
							<h6>Connect</h6>
							<p>
								<a href="#">Github</a>
							</p>
							<p>
								<a href="#">Facebook</a>
							</p>
							<p>
								<a href="#">Instagram</a>
							</p>
						</div>
					</Col>

					<Col xs="auto">
						<div className="footer__client-service footer__subcol">
							<h6>Client Service</h6>
							<p>
								<a href="#">FAQ</a>
							</p>
							<p>
								<a href="#">Return</a>
							</p>
							<p>
								<a href="#">Shipping & Payment</a>
							</p>
							<p>
								<a href="#">Follow Order</a>
							</p>
						</div>
					</Col>

					<Col xs="auto">
						<div className="footer__contact footer__subcol">
							<h6>Contact Us</h6>
							<p>
								<a href="#">Email</a>
							</p>
							<p>Call Us: +84123123</p>
							<p>Mon-Sat.7am-9pm</p>
							<p>
								<a href="#">
									Ruamatnhumeo 2020{" "}
									<i className="e-copyright"></i>
								</a>
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Footer;
