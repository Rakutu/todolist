import React from 'react';

const AddTodoForm = ({ addTodo }) => {
    const [newTodo, setNewTodo] = React.useState('')

    const recordNewTodo = (e) => {
        const value = e.target.value;
        setNewTodo(value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('');
    }

    return (
        <form className='d-flex input-group' onSubmit={onSubmit}>
            <input type="text" name="todo" className='form-control' value={newTodo} onChange={recordNewTodo} />
            <button className='btn btn-primary'>Add</button>
        </form>
    )
}

export default AddTodoForm;