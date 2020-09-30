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
	const [term, setTerm] = useState("");
	const valueTimeoutRef = useRef(null); //to hold value after renders

	const handleTermChange = (event) => {
		const { target } = event;
		const value = target.value.trim(); //avoid when target realizing setTimeout
		setTerm(value);

		if (!onSubmit) {
			return;
		}

		if (valueTimeoutRef.current) {
			clearTimeout(valueTimeoutRef.current);
		}

		//check value to except "" string
		if (value.length <= 0) return;

		//simple-debounce ver
		valueTimeoutRef.current = setTimeout(() => {
			const formValue = {
				term: value.trim(),
			};

			onSubmit(formValue);
		}, 500);
	};

	return (
		<div className="search-form">
			<form>
				<input
					className="search-form__input"
					type="text"
					value={term}
					onChange={handleTermChange}
					onClick={onInputClick}
					placeholder="Search"
					ref={refElement}
				/>
			</form>
		</div>
	);
}
