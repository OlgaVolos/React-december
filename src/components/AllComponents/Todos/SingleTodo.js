import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom'

function SingleTodo() {
    const [todo, setTodo] = useState();
    const {id} = useParams();
    const history = useHistory()

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await response.json();
        setTodo(data);
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div>
            {todo && (<div key={todo.id}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>

            </div>)}
            <button onClick={() => history.push(`/todos/${+id-1}`)}>Back</button>
            <button onClick={() => history.push(`/todos/${+id+1}`)}>To next</button>


        </div>
    );
}

export default SingleTodo;
