import React, {useRef, useState} from 'react';

function App() {

// create controlled and uncontrolled checkbox
// create controlled and uncontrolled radio
// 1.1 create controlled and uncontrolled select component
    const selectBox = useRef()
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(selectBox.current.value);
        alert(`ви вибрали ${selectBox.current.value}`)
    }
 // 1.2
    const [item, setItem] = useState();
    const onSubmit1 = () => {
        console.log(item);
    }
    // **********************************************************

    // create controlled and uncontrolled checkbox
    // 2.1


    const checkbox1 = useRef();
    const checkbox2 = useRef();
    const checkbox3 = useRef();

    // const posts = useRef();
    // const todos = useRef();
    const onSubmit2 = (e) => {
        e.preventDefault();
        // console.log(checkbox1.current.value);

        if(checkbox1.checked) console.log(checkbox1.current.value);
        if(checkbox2.checked) console.log(checkbox2.current.value);
        if(checkbox3.checked) console.log(checkbox3.current.value);

    }


    return (
        <div>
            <h3>1.1. Uncontrolled select component:</h3>
            <form onSubmit={onSubmit}>
                <select ref={selectBox} size="4" name="endpoints[]" multiple>
                    <option disabled='disabled'>Вибрати</option>
                    <option value='user'>user</option>
                    <option value='posts'>posts</option>
                    <option value='comments'>comments</option>
                    <option value='photos'>photos</option>
                </select>
                <button type='submit'>Submit</button>
            </form>

            <div>
                <h3>1.2. Controlled select component:</h3>
                <select value={[item]} onChange={({target: {value}}) => setItem(value)} size="4" name="endpoints[]" multiple>
                    <option disabled='disabled'>Вибрати</option>
                    <option value='user'>user</option>
                    <option value='posts'>posts</option>
                    <option value='comments'>comments</option>
                    <option value='photos'>photos</option>
                </select>
                <button onClick={onSubmit1} type='submit'>Submit</button>
            </div>
             {/*// чому value={[item]}???*/}
             <hr/>
             <div>
                 <h3>2.1. Uncontrolled input-checkbox:</h3>
                 <form onSubmit={onSubmit2}>
                     <input ref={checkbox1} type="checkbox" value='user' name="user" id="user"/>
                     <label  htmlFor="user">user</label>
                     <br/>
                     <input  ref={checkbox2} type="checkbox"  value='posts'  name="posts" id="posts"/>
                     <label htmlFor="posts">posts</label>
                     <br/>
                     <input ref={checkbox3} type="checkbox" value='todos' name="todos" id="todos"/>
                     <label htmlFor="todos">todos</label>
                     <br/>
                     <button type='submit'>Submit</button>
                 </form>
             </div>



        </div>
    );
}

export default App;
