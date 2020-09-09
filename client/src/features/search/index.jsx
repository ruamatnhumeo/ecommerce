import React, { useState, useEffect } from "react";

import "./Search.scss";
import SearchList from "./components/SearchList";
import SearchForm from "./components/SearchForm";
import SearchIcon from "../../assets/images/search.svg";
import CloseIcon from "../../assets/images/remove.svg";
import { useRef } from "react";

function Search(props) {
  const { searchs, searchPanelOpen, onSearchClick, onSearchChange} = props;
  const inputElement = useRef(null);
  const searchPanelClassName = !searchPanelOpen
    ? "search__panel"
    : "search__panel search__panel--open";
  
  const handleToggleClick = () => {
    if (inputElement) {
      inputElement.current.focus();
    }
    console.log(inputElement);
    if (searchPanelOpen) return;

    onSearchClick();
  };

  const handleCloseToggleClick = () => {

    onSearchClick();
  };


  return (
    <div className="search">
      <div className="search__content">
        <div className="search__toggle" onClick={handleToggleClick}>
          <img src={SearchIcon} alt="search" style={{ width: "20px" }} />
        </div>

        <SearchForm inputElement={inputElement} onInputClick={handleToggleClick} refElement={inputElement}/>
        {searchPanelOpen && (
          <div className="search__close-toggle" onClick={handleCloseToggleClick}>
            <img src={CloseIcon} alt="close" style={{ width: "20px" }} />
          </div>
        )}
      </div>

      <section className={searchPanelClassName}>
        <SearchList searchs={searchs}/>
      </section>
    </div>
  );
}

export default Search;
