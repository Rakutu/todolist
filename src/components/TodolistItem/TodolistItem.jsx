import React from 'react';
import styles from './TodolistItem.module.css';
import ControlsBtn from '../ControlsBtn';

const TodolistItem = ({ label, important, onDelete, onToggleDone, done, onToggleImportant, id}) => {
    // const [isImportant, setImportant] = React.useState(important);
    const isImp = important ? styles.important : '';
    const classDone = done ? styles.done : '';

    return (
        <>
            <span className={styles.todoItem + ' ' + isImp + ' ' + classDone} onClick={() => onToggleDone(id)}>
                { label }
            </span>
            <ControlsBtn id={id} onToggleImportant={onToggleImportant} important={important} onDelete={onDelete}/>
        </>)
}

export default TodolistItem;