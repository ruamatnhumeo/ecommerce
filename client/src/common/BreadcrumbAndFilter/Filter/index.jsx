import React from "react";
import PropTypes from "prop-types";
import "./Filter.scss";

Filter.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  onAddColorCondition: PropTypes.func,
  onRemoveColorCondition: PropTypes.func,
  onAddSizeCondition: PropTypes.func,
  onRemoveSizeCondition: PropTypes.func,
  onSortRequireCondition: PropTypes.func,
};

Filter.defaultProps = {
  onAddColorCondition: null,
  onRemoveColorCondition: null,
  onAddSizeCondition: null,
  onRemoveSizeCondition: null,
  onSortRequireCondition: null,
};

function Filter(props) {
  const {
    filterOpen,
    onFilterClick,
    onAddColorCondition,
    onRemoveColorCondition,
    onAddSizeCondition,
    onRemoveSizeCondition,
    onSortRequireCondition,
  } = props;
  const filterPanelClass = !filterOpen
    ? "filter__panel"
    : "filter__panel filter__panel--open";

  const handleFilterClick = () => {
    if (!onFilterClick) return;

    onFilterClick();
  };

  const handleAddColor = (event) => {
    if (!onAddColorCondition) return;
    if (!event.target.checked) {
      handleRemoveColor(event.target.value);
      return;
    }

    onAddColorCondition(event.target.value);
  };

  const handleRemoveColor = (condition) => {
    if (!onRemoveColorCondition) return;

    onRemoveColorCondition(condition);
  };

  const handleAddSize = (event) => {
    if (!onAddSizeCondition) return;
    if (!event.target.checked) {
      handleRemoveSize(event.target.value);
      return;
    }

    onAddSizeCondition(event.target.value);
  };

  const handleRemoveSize = (condition) => {
    if (!onRemoveSizeCondition) return;

    onRemoveSizeCondition(condition);
  };

  const handleSortRequire = (event) => {
    if (!onSortRequireCondition) return;

    onSortRequireCondition(event.target.value);
  };

  const FilterPanelItem = (props) => {
    return (
      <div className="filter__panel-item" onClick={props.onClick}>
        {props.children}
        <span className="icon-plus">{props.openIcon}</span>
      </div>
    );
  };

  return (
    <div className="filter">
      <div className="filter__button" onClick={handleFilterClick}>
        <span>Filter</span>
      </div>

      <section className={filterPanelClass}>
        <div className="filter__panel__content">
          <div className="filter__panel__part">
            <FilterPanelItem>Color</FilterPanelItem>
            <div>
              <ul className="filter__panel__sort-by-color filter__panel__list">
                <li>
                  <input
                    type="checkbox"
                    id="red"
                    value="red"
                    onClick={handleAddColor}
                  />
                  <label htmlFor="red"></label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="yellow"
                    value="yellow"
                    onClick={handleAddColor}
                  />
                  <label htmlFor="yellow"></label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="blue"
                    value="blue"
                    onClick={handleAddColor}
                  />
                  <label htmlFor="blue"></label>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter__panel__part">
            <FilterPanelItem>Sort by</FilterPanelItem>
            <div>
              <ul className="filter__panel__sort-by-requires filter__panel__list">
                <li>
                  <input
                    type="radio"
                    id="bestMatch"
                    name="sort"
                    value="bestMatch"
                    onClick={handleSortRequire}
                  />
                  <label for="bestMatch">Best match</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="lastestArrivals"
                    name="sort"
                    value="lastestArrivals"
                    onClick={handleSortRequire}
                  />
                  <label htmlFor="lastestArrivals">Lastest arrivals</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="ascendingPrice"
                    name="sort"
                    value="ascendingPrice"
                    onClick={handleSortRequire}
                  />
                  <label htmlFor="ascendingPrice">Ascending price</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="descendingPrice"
                    name="sort"
                    value="descendingPrice"
                    onClick={handleSortRequire}
                  />
                  <label htmlFor="descendingPrice">Descending price</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter__panel__part">
            <FilterPanelItem>Size</FilterPanelItem>
            <div>
              <ul className="filter__panel__list filter__sort-by-size">
                <li>
                  <input
                    type="checkbox"
                    id="s"
                    value="s"
                    onClick={handleAddSize}
                  />
                  <label htmlFor="s">S</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="m"
                    value="m"
                    onClick={handleAddSize}
                  />
                  <label htmlFor="m">M</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="l"
                    value="l"
                    onClick={handleAddSize}
                  />
                  <label for="l">L</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="filter__panel__part"></div>
        </div>
      </section>
    </div>
  );
}

export default Filter;
