import React from "react";
import "./MoreProduct.scss";

function MoreProduct(props) {
  const { onLoadingMore } = props;
  const handleLoadingMore = () => {
    if (!onLoadingMore) return;
    onLoadingMore();
  };

  return (
    <div className="moreProduct">
      <div className="moreProduct__inner">
        <button
          type="button"
          className="moreProduct__button"
          onClick={handleLoadingMore}
        >
          More
        </button>
      </div>
    </div>
  );
}

export default MoreProduct;
