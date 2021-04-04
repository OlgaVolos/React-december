import React, {useRef, useState} from "react";

const END_POINT = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']
const BASE_URL = `https://jsonplaceholder.typicode.com`

function App() {

    const inputEndpoint = useRef();
    const inputId = useRef();

    const [items, setItems] = useState([])
    const [singleItem, setSingleItem] = useState()
    let [endpoint, setEndpoint] = useState('')
    let [id, setId] = useState('')
    const [error, setError] = useState('')

    const fetchData = async () => {
        const response = await fetch(`${BASE_URL}/${endpoint}/${id}`);
        const data = await response.json();
        if (id) {
            setSingleItem(data);
            setItems([]);
            return
        }
        setSingleItem(null);
        setItems(data);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        endpoint = inputEndpoint.current.value;
        id = inputId.current.value;
        if (!endpoint) {
            return setError('empty field')
        }
        if (!END_POINT.includes(endpoint.toLowerCase().trim())) {
            return setError("write one of list: 'posts', 'comments', 'albums', 'photos', 'todos', 'users' ")
        }
        const idToNum = Number(id);
        if (!idToNum && id !== '' && idToNum !== 0) {
            return setError('use numerical value from 1 to 100')
        }
        if ((idToNum < 1 || idToNum > 100) && id !== '') {
            return setError('"write from 1 to 100"')
        }
        fetchData();
        setError('')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={inputEndpoint} type="text" placeholder='type some text' name="endpoint"/>
                <br/>
                <input ref={inputId} type="text" placeholder='type some number' name="id"/>
                <br/>
                <button type='submit'>Submit</button>
            </form>

            <div style={{color: 'red'}}>
                {error}
            </div>

            <div>
                {singleItem && JSON.stringify(singleItem, null, 2)}
            </div>

            <div>
                {items.map(el => (<div key={el.id}>{el.id} <br/> {el.name} <br/> {el.title} <br/> {el.email} </div>))}
            </div>

        </div>
    );
}

export default App;
