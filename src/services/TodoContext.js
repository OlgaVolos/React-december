import React, {createContext, useState} from "react";

export const TodoContext = createContext();
const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([]);
    const [doneTodos, setDoneTodos] = useState([]);//заводимо спеціально для маркування тудушок, потім допрокидаємо
    //в провайдер, що всі мали доступ до нього і отримуємо в тудулісті



    const onTodoCreate = (newTodo) => {
        if(!newTodo || !newTodo.title || !newTodo.description){
            console.error('Wrong arg for new todo, should be smth like title and description')
            return
        }
        setTodos([newTodo, ...todos])
    };

    const onTodoRemove = (todoId) => {
        if(!todoId){
            console.error('wrong todo', todoId)
            return
        }

        setTodos(todos.filter(el => el.id !== todoId))
        setDoneTodos(doneTodos.filter(id => id !== todoId))
    };

    const isDoneToggle = (todoId) => {
        const isTodosMarkedAsDone = doneTodos.includes(todoId);
        if(isTodosMarkedAsDone){
         return   setDoneTodos(doneTodos.filter(id => id !== todoId))
        }
        setDoneTodos([...doneTodos, todoId])


    };


    return(
        <TodoContext.Provider value={{
            todos,
            onTodoCreate,
            onTodoRemove,
            isDoneToggle,
            doneTodos
        }}>
        {children}
        </TodoContext.Provider>
    )
};
 export default TodoContextProvider
