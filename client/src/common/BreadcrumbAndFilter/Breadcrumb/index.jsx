import React from "react";
// import PropTypes from "prop-types";
import "./Breadcrumb.scss";

// Breadcrumb.propTypes = {
//   conditions: PropTypes.array,
//   BreadcrumbClick: PropTypes.func.isRequired,
// };

// Breadcrumb.defaultProps = {
//   conditions: [],
//   onRemoveCondition: null
// };

function Breadcrumb(props) {
	// const { breadcrumb, breadcrumbClick } = props;

	//   const BreadcrumbClick = () => {
	//     if (!BreadcrumbClick) return;

	//     BreadcrumbClick();
	//   };

	return (
		<div className="breadcrumbi">
			<div className="breadcrumb__inner">
				<span>Breadcrumb</span>
			</div>
		</div>
	);
}

export default Breadcrumb;
