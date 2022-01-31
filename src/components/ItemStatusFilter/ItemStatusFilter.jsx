import React from "react";

const ItemStatusFilter = ({ filter, onFilterChange }) => {
    console.log(filter)

    const buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
        { name: 'important', label: 'Important' },
    ];

    const buttonRender = buttons.map(({ name, label }) => {
        const isActive = filter === name;
        const activeClass = isActive ? 'btn-primary' : 'btn-light';
        return (
            <button type="button" key={name} className={`btn border border-dark ${activeClass}`} onClick={() => onFilterChange(name)}>{label}</button>
        )
    })
    return (
        <div className="btn-group">
            {buttonRender}
        </div>
    )
}

export default ItemStatusFilter;