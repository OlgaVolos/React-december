import React, {useState, useEffect} from 'react';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import SinglePhoto from "../Photos/SinglePhoto";
import SingleTodo from "./SingleTodo";

function Todos(props) {
    const [todos, setTodos] = useState([]);
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json();
        setTodos(data);
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <Switch>
                <Route path={'/todos/:id'}>
                    <SingleTodo/>
                </Route>
                <Route>
                    <Redirect to={'/todos'}/>
                </Route>
            </Switch>
            <ul>
                {todos.map(todo => <Link to={`/todos/${todo.id}`}><li key={todo.id}>{todo.id}-{todo.title}</li></Link> )}
            </ul>
        </div>
    );
}

export default Todos;
