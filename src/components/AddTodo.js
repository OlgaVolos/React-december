import React, {useContext} from 'react';
import {TodoContext} from "../services/TodoContext";
function AddTodo() {
    const [todoValue, setTodoValue] = React.useState({
        title: '',
        description: '',
        id: null
    })

    const {onTodoCreate} = useContext(TodoContext) //взяли з TodoContext.js
    // console.log(todos); //можемо теж дописати вище todos

    // const onTodoChange = (e) => {setTodoValue({...todoValue, [name]: value})}; //або

    const onTodoChange = ({target: {name, value}}) => {setTodoValue({...todoValue, [name]: value })};

    const onCreate = () => {

        onTodoCreate({...todoValue, id:Math.random()})
        setTodoValue({
            title: '',
            description: '',
            id: null
        })

    }

    return (
        <div>
            <br/>
            <br/>
            <input type="text" value={todoValue.title} onChange={onTodoChange} placeholder={'todo title'} name="title" id="title"/>
            <br/>
            <br/>
            <input type="text" value={todoValue.description} onChange={onTodoChange} placeholder={'todo description'} name="description" id="description"/>
            <br/>
            <br/>
            <button onClick={onCreate}>Add todo</button>

        </div>
    );
}

export default AddTodo;
