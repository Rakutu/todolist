import React from "react";
import ItemStatusFilter from "../ItemStatusFilter";

const SearchPanel = ({ onSearchChange, filter, onFilterChange, term }) => {
    const onChange = (e) => {
        const value = e.target.value;
        onSearchChange(value)
    }
	return (
        <div className="input-group mb-4">
            <input className="form-control border border-dark btn-outline-dark" onChange={onChange} value={term} placeholder='Search todo'/>
            <ItemStatusFilter filter={filter} onFilterChange={onFilterChange} />
        </div>
    )
}

export default SearchPanel;