import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom'

function SingleUser() {
    const [user, setUser] = useState();
    const {id} = useParams();
    const history = useHistory()

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div>
            {user && (<div key={user.id}>
                <p>{user.id}</p>
                <p>{user.name}</p>
                <p>{user.username}</p>
            </div>)}
            <button onClick={() => history.push(`/users/${+id-1}`)}>Back</button>
            <button onClick={() => history.push(`/users/${+id+1}`)}>To next</button>


        </div>
    );
}

export default SingleUser;
