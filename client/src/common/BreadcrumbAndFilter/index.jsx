import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./BreadcrumbAndFilter.scss";

import Breadcrumb from "./Breadcrumb";
import Filter from "./Filter";

import { changeFilter } from "../../flux/actions/filterAction";

function BreadcrumbAndFilter() {
	const dispatch = useDispatch();
	const [filterOpen, setFilterOpen] = useState(false);

	const [filterConditions, setFilterConditions] = useState({
		color: [],
		size: [],
		sortRequire: null,
	});

	const [breadcrumb, setBreadcrumb] = useState([]);

	useEffect(() => {
		dispatch(changeFilter(filterConditions));
	}, [filterConditions]);

	const handleAddSizeCondition = (sizeCondition) => {
		const { size } = filterConditions;
		size.push(sizeCondition);
		const newFilterConditions = { ...filterConditions, size };
		setFilterConditions(newFilterConditions);
	};

	const handleRemoveSizeCondition = (removedCondition) => {
		const { size } = filterConditions;
		const removedConditionIndex = size.findIndex(
			(condition) => condition === removedCondition
		);
		size.splice(removedConditionIndex, 1);
		const newFilterConditions = { ...filterConditions, size };
		setFilterConditions(newFilterConditions);
	};

	const handleSortRequireCondition = (newSortRequireCondition) => {
		const newFilterConditions = {
			...filterConditions,
			sortRequire: newSortRequireCondition,
		};

		setFilterConditions(newFilterConditions);
	};

	const handleAddColorCondition = (colorCondition) => {
		const { color } = filterConditions;
		color.push(colorCondition);
		const newFilterConditions = { ...filterConditions, color };
		setFilterConditions(newFilterConditions);
	};

	const handleRemoveColorCondition = (removedCondition) => {
		const { color } = filterConditions;
		const removedConditionIndex = color.findIndex(
			(condition) => condition === removedCondition
		);
		color.splice(removedConditionIndex, 1);
		const newFilterConditions = { ...filterConditions, color };
		setFilterConditions(newFilterConditions);
	};

	const handleFilterOpen = () => {
		setFilterOpen(!filterOpen);
	};

	return (
		<div className="breadcrumb-and-filter">
			<div className="breadcrumb-and-filter__viewport">
				<Breadcrumb breadcrumb={breadcrumb} />
				<Filter
					filterOpen={filterOpen}
					onFilterClick={handleFilterOpen}
					onAddColorCondition={handleAddColorCondition}
					onRemoveColorCondition={handleRemoveColorCondition}
					onAddSizeCondition={handleAddSizeCondition}
					onRemoveSizeCondition={handleRemoveSizeCondition}
					onSortRequireCondition={handleSortRequireCondition}
				/>
			</div>
		</div>
	);
}

export default BreadcrumbAndFilter;
