import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import './style.css'
import {TodoContext} from "../services/TodoContext";

function Header () {
    const {
        todos,
        doneTodos, // отримуємо з TodoList
    } = useContext(TodoContext);




    return (
        <header className='header'>
            <Link to={'/'}>List</Link>
            <Link to={'/create-todo'}>Add new todo</Link>

            <div>
                <h3 style={{marginRight: '15px'}}>Total todos: {todos.length}</h3>
                <h3 style={{marginRight: '15px'}}>Active todos: {todos.length - doneTodos.length} </h3>
                <h3 style={{marginRight: '15px'}}>Done todos: {doneTodos.length}  </h3>

            </div>

        {/* total todos   */}
            {/* active todos   */}
            {/* done todos   */}

        </header>
    );
}

export default Header;
