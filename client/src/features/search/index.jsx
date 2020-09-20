import React, { useRef } from "react";

import "./Search.scss";
import SearchList from "./components/SearchList";
import SearchForm from "./components/SearchForm";

function Search(props) {
	const { searchs, searchPanelOpen, onSearchClick, onSearchChange } = props;
	const inputElement = useRef(null);
	const searchPanelClassName = !searchPanelOpen
		? "search__panel"
		: "search__panel search__panel--open";

	const handleToggleClick = () => {
		if (inputElement) {
			inputElement.current.focus();
		}

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
					<i className="e-search"></i>
				</div>

				<SearchForm
					inputElement={inputElement}
					onInputClick={handleToggleClick}
					refElement={inputElement}
				/>
				{searchPanelOpen && (
					<div
						className="search__close-toggle"
						onClick={handleCloseToggleClick}
					>
						<i className="e-x" style={{ width: "20px" }}></i>
					</div>
				)}
			</div>

			<section className={searchPanelClassName}>
				<div className="search__panel__inner">
					<SearchList searchs={searchs} />
				</div>
			</section>
		</div>
	);
}

export default Search;
