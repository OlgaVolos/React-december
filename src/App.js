import React, {useState} from 'react';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const AVALAIBLE_RESOURCE =['posts', 'comments', 'albums', 'photos', 'todos', 'users']


function App() {

    const [endpoint, setEndpoint] = useState('')
    const [id, setId] = useState('')

    const [items, setItems] = useState([]);
    const [singleItem, setSingleItem] = useState();
    const [error, setError] = useState('')
    const onSubmit = () => {
        // перевіряємо, чи 1-й інпут не є пустий і чи введено ендпоінт
        if(!endpoint){
            return setError("first input is empty")
        }
        if(!AVALAIBLE_RESOURCE.includes(endpoint.toLowerCase().trim())) {
            return setError("write one of list: 'posts', 'comments', 'albums', 'photos', 'todos', 'users' ")
        }
        // перевіряємо, чи другий інпут є числом і чи є в межах
        const idToNum = Number(id)
        if (!idToNum &&  id !== '' && idToNum !== 0){
            return setError('use numerical value from 1 to 100')
        }
        if((idToNum<1 || idToNum>100) &&  id !== '')  {
            return setError("write from 1 to 100")
        }

        fetchData()
        setError("") //почистить еррор
    }
    const fetchData = async () => {
        const response = await fetch(`${BASE_URL}/${endpoint.toLowerCase().trim()}/${id.trim().toLowerCase()}`);
        const data = await response.json();
        // ми можемо трім і туловеркейс написати лише у value
        if (id){
            setSingleItem(data);
            setItems([]);
            return
        }
        setSingleItem(null);
        setItems(data);
    };


    return (
        <div>
            <input value={endpoint.trim().toLowerCase()} onChange={({target: {value}}) => setEndpoint(value)} type="text" name="" placeholder="write endpoint "/>
            <br/>
            <input value={id} onChange={({target: {value}}) => setId(value)} type="text" name="" />
            <br/>
            <button onClick={onSubmit}>Show info</button>

            <div>
                <h1 style={{color: 'red'}}>{error}</h1>
            </div>

            <div >
                {/*{*/}
                {/*    singleItem && <p>{singleItem.id} - {singleItem.name} - {singleItem.title} - {singleItem.body}</p>*/}
                {/*}*/}
                <hr/>
                {singleItem && JSON.stringify(singleItem, null, 2)}
            </div>
            <hr/>
            <div>
                {items.map(el => (<div key={el.id}>{el.id} <br/> {el.name} <br/> {el.title} <br/> {el.email} </div>))}
            </div>
        </div>
    );
}

export default App;
