import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./ProductImgList.scss";

ProductImgList.propTypes = {
  imgList: PropTypes.array.isRequired,
};

function ProductImgList(props) {
  const { imgList } = props;

  return (
    <section className="product-img-list">
      <div className="product-img-list__inner">
        <ul className="product-img-list__list-content">
          {imgList.map((img, index) => (
            <li key={index}>
              <img src={img} alt="product image" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProductImgList;
