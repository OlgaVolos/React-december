import React, {useRef, useState} from 'react';

function App() {

// create controlled and uncontrolled checkbox

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

    const onSubmit2 = (e) => {
        e.preventDefault();
        // const check = document.getElementsByTagName("input");
        // let checkedArr = [];
        // for (let i = 0; i < check.length; i++) {
        //     if(check[i].checked) checkedArr.push(check[i].value)
        // }
        // console.log(checkedArr)

        if (checkbox1.current.checked) console.log(checkbox1.current.value);
        if (checkbox2.current.checked) console.log(checkbox2.current.value);
        if (checkbox3.current.checked) console.log(checkbox3.current.value);


    }

    // 2.2

    const [chek1, setChek1] = useState(false)
    const [chek2, setChek2] = useState(false)
    const [chek3, setChek3] = useState(false)

    const [input1, setInput1] = useState('user');
    const [input2, setInput2] = useState('posts');
    const [input3, setInput3] = useState('todos');

    const onSubmit3 = () => {
        if (!chek1) console.log(input1);
        console.log(input2);
        console.log(input3);
    }
    // *******************************************************************

    // 3.1. Create uncontrolled radio
    const gend = useRef();
    const [gende, setGende] = useState('Male')


    const changeGender =(e) => {
        e.preventDefault();
        setGende({gende: e.target.value});
        console.log(e.target.value)


    }
    // 3.2. Create controlled radio

    const [gender, setGender] = useState('Male');
    const changeGender1 = () => {

        console.log(gender)
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
                <select value={[item]} onChange={({target: {value}}) => setItem(value)} size="4" name="endpoints[]"
                        multiple>
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
                    <label htmlFor="user">user</label>
                    <br/>
                    <input ref={checkbox2} type="checkbox" value='posts' name="posts" id="posts"/>
                    <label htmlFor="posts">posts</label>
                    <br/>
                    <input ref={checkbox3} type="checkbox" value='todos' name="todos" id="todos"/>
                    <label htmlFor="todos">todos</label>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
            <div>
                <h3>2.2. Controlled input-checkbox:</h3>

                <input type="checkbox" value={input1} defaultChecked={chek1}
                       onChange={({target: {value}}) => setInput1(value)} name="user" id="user"/>
                <label htmlFor="user">user</label>
                <br/>
                <input type="checkbox" value={input2} defaultChecked={chek2}
                       onChange={({target: {value}}) => setInput2(value)} name="posts" id="posts"/>
                <label htmlFor="posts">posts</label>
                <br/>
                <input type="checkbox" value={input3} defaultChecked={chek3}
                       onChange={({target: {value}}) => setInput3(value)} name="todos" id="todos"/>
                <label htmlFor="todos">todos</label>
                <br/>
                <button onClick={onSubmit3} type='submit'>Submit</button>

            </div>
            <hr/>
            <div>
                <h3>3.1. Uncontrolled radio:</h3>
                <fieldset ref={gend}
                          onChange={changeGender}>
                    <label htmlFor="male"><input type="radio" name="gender-option" value="male"
                                                 id="male"/>Male</label>
                    <label htmlFor="female"><input type="radio" name="gender-option" value="female"
                                                   id="female"/>Female</label>
                    <label htmlFor="other"><input type="radio" name="gender-option" value="other"
                                                  id="other"/>Other</label>

                </fieldset>

            </div>
            <div>
                <h3>3.2. Uncontrolled radio:</h3>
                <fieldset value={gender}
                          onChange={({target: {value}}) => setGender(value)}>
                    <label htmlFor="male"><input type="radio" name="gender-option" value="male"
                                                   id="male"/>Male</label>
                    <label htmlFor="female"><input type="radio" name="gender-option" value="female"
                                                   id="female"/>Female</label>
                    <label htmlFor="other"><input type="radio" name="gender-option" value="other"
                                                    id="other"/>Other</label>
                    <button onClick={changeGender1} type='submit'>Submit</button>

                </fieldset>
            </div>


        </div>
);
}

export default App;
