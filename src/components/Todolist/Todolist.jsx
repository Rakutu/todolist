import React from 'react';
import TodolistItem from '../TodolistItem';

const Todolist = ({ todos, onDelete, onToggleDone, onToggleImportant }) => {
    const elements = todos.map(({id, important, done, label}) => {
        return (
            <li  className='list-group-item d-flex justify-content-between' key={id}>
                <TodolistItem id={id} onToggleDone={onToggleDone} onToggleImportant={onToggleImportant} onDelete={onDelete} important={important} done={done} label={label}/>
            </li>
        )
    })

	return (
		<ul className='list-group todo-list mb-3'>
            { elements }
		</ul>
	);
}

export default Todolist;