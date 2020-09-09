import React from "react";
import PropTypes from "prop-types";
import "./SearchList.scss";
import { Link } from "react-router-dom";
const recommendeds = [
  { id: "625361TIM449000", name: "PLEATED SHIRT DRESS" },
  { id: "63852115V171000", name: "NEO CLASSIC SMALL TOP HANDLE BAGa" },
  { id: "628701TEW351105", name: "CREW LARGE FIT JACKET" },
  { id: "541624W2FR110535", name: "TRIPLE S CLEAR SOLE SNEAKER" },
];
SearchList.propTypes = {
  list: PropTypes.array,
};

SearchList.defaultProps = {
  list: recommendeds,
};

function SearchList(props) {
  const { list, onGoToProduct } = props;

  const handleClick = (id) => () => {
    if (!onGoToProduct) return;

    onGoToProduct(id);
  };

  return (
    <div className="search-list">
      <ul>
        {list.map((result) => {
          const url = `/product/${result.id}/detail`;
          return (
            <Link key={result.id} to={url}>
              {result.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default SearchList;
