import React, {useContext} from 'react';
import {TodoContext} from "../services/TodoContext";
import TodoItem from "./TodoItem";

function TodosList() {
    const {todos,
        onTodoRemove,
        isDoneToggle,
        doneTodos} = useContext(TodoContext)
        // пропси дублюємо в контексті
    console.log(todos, 'from list');
    console.log(doneTodos);

    return (
        <div>
            {todos.map(el => <TodoItem
                isDone={doneTodos.includes(el.id)}
                isDoneToggle={isDoneToggle}
                onTodoRemove={onTodoRemove}
                todo={el}
                key={el.title+el.description}/> )}
        </div>
        //         можна зробити окремою компонентою і в map() буде
        // <TodoItem todo={todo} key={todo.title+todo.description}/>
        // в пропси покладемо {todo}
    );
}

export default TodosList;
