import React from 'react';
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
        <div className="col">
			<Link to="/product/women">Women</Link>
		</div>
		<div className="col">
			<Link to="/product/sneaker">Sneakers</Link>
		</div>
		<div className="col">
			<Link to="/product/men">Men</Link>
		</div>
    </div>
  );
}

export default Home;