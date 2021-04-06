import React, {useState, useEffect} from 'react';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import SingleUser from "./SingleUser";

function Users(props) {
    const [users, setUsers] = useState([]);
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <Switch>
                <Route path={'/users/:id'}>
                    <SingleUser/>
                </Route>
                <Route>
                    <Redirect to={'/users'}/>
                </Route>

            </Switch>
            <ul>
                {users.map(user => <Link to={`/users/${user.id}`}> <li key={user.id}>{user.id}-{user.name}-{user.username}</li></Link>)}
            </ul>
        </div>
    );
}

export default Users;
