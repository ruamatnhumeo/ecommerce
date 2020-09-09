import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./SearchForm.scss";

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

SearchForm.defaultProps = {
  onSubmit: null,
};

export default function SearchForm(props) {
  const { onSubmit, onInputClick, refElement } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const valueTimeoutRef = useRef(null); //to hold value after renders

  function handleSearchTermChange(event) {
    const { target } = event;
    const value = target.value; //avoid when target realizing setTimeout
    setSearchTerm(value);

    if (!onSubmit) {
      return;
    }

    if (valueTimeoutRef.current) {
      clearTimeout(valueTimeoutRef.current);
    }
    //simple-debounce ver
    valueTimeoutRef.current = setTimeout(() => {
      const formValue = {
        searchTerm: value,
      };

      onSubmit(formValue);
    }, 300);
  }

  return (
    <div className="search-form">
      <form action="#">
        <input
          className="search-form__input"
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          onClick={onInputClick}
          placeholder="Search"
          ref={refElement}
        />
      </form>
    </div>
  );
}
