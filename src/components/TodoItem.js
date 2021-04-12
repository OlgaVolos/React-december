import React from 'react';

function TodoItem({todo, onTodoRemove, isDoneToggle, isDone}) {
    // const [markTodo, setMarkTodo] = useState('none');
    // const [deleteTodo, setDeleteTodo] = useState([]);
// const {onTodoRemove} = useContext(TodoContext) // переносячи це в пропси,
// ми зможемо компоненту перевикористовувати, а отримаємо контекст в першому паренті,
    // тобто, в TodoList і там теж прокидуємо пропсами в TodoItem
const toggleText = () => isDoneToggle(todo.id) // ми її тут створили і запхали в контекст


const onTodoDelete = () => {
    const answer = window.confirm("do you want delete todo?");
    if(answer){
        onTodoRemove(todo.id)
    }
};

    return (
        <div>
            <div style={{textDecoration: isDone ? 'line-through' : 'none'}}>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
            </div>
            <button onClick={toggleText}>Mark as {isDone ? 'active' : 'done'}  </button>
            <button onClick={onTodoDelete}>Delete todo</button>
        </div>
    );
}

export default TodoItem;
