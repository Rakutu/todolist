import React from 'react';

import AppHeader from '../AppHeader';
import Todolist from '../Todolist';
import SearchPanel from '../SearchPanel';
import AddTodoForm from '../AddTodoForm/AddTodoForm';

const generatId = () => Math.random().toString(36).slice(2, 15);

const newItem = (label) => {
    return {
        label,
        important: false,
        done: false,
        id: generatId(),
    }
}

const todos = [
	newItem('Drink cofee'),
	newItem('Build React app'),
	newItem('Byu LoL skin'),
]


const App = () => {
    const [todoList, setList] = React.useState(todos);
    const [term, setTerm] = React.useState('');
    const [filterState, setFilter] = React.useState('all');

    const onDelete = (id) => {
        setList(todoList.filter(todo => todo.id !== id))
    }

    const addTodo = (text) => {
        const newTodoItem = newItem(text);
        const newList = [...todoList, newTodoItem]
        setList(newList)
    }

    const togglePropperty = (arr, id, propName) => {
        const index = arr.findIndex(todo => todo.id === id);
        const newList = [...arr];
        newList[index][propName] = !newList[index][propName];
        setList(newList)
    }

    const search = (items, term) => {
        if (term === '') return items;
        return items.filter(item => item.label.toLowerCase()
                                        .includes(term.toLowerCase()))
    }

    const filter = (items, filter) => {
        switch(filter) {
            case 'all': return items;
            case 'active': return items.filter(item => item.done === false); 
            case 'done': return items.filter(item => item.done === true);
            case 'important': return items.filter(item => item.important === true);
            default: return items;
        }
    }

    const onSearchChange = (term) => {
        setTerm(term)
    }

    const onFilterChange = (filter) => {
        setFilter(filter)
    }

    const visibleItems = filter(search(todoList, term), filterState);

    const onToggleDone = (id) => togglePropperty(todoList, id, 'done')

    const onToggleImportant = (id) => togglePropperty(todoList, id, 'important')

    let doneCount = todoList.filter(todo => todo.done === true).length
    let todoCount = todoList.length - doneCount;

    return (
        <div>
            <AppHeader todo={todoCount} done={doneCount} />
            <SearchPanel onSearchChange={onSearchChange} filter={filterState} onFilterChange={onFilterChange} />
            <Todolist todos={visibleItems} onDelete={onDelete} onToggleDone={onToggleDone} onToggleImportant={onToggleImportant}/>
            <AddTodoForm addTodo={addTodo} />
        </div>
    )}

export default App;