import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="home">
			<div className="home__layout">
				<div className="home__col" style={{ border: "none" }}>
					<Link to="/product/women">Women</Link>
				</div>
			</div>
			<div className="home__layout">
				<div className="home__col">
					<Link to="/product/sneaker">Sneakers</Link>
				</div>
			</div>
			<div className="home__layout">
				<div className="home__col">
					<Link to="/product/men">Men</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
