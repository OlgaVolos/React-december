import React, {useState, useEffect} from 'react';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import SinglePost from "../Posts/SinglePost";

function Albums(props) {
    const [albums, setAlbums] = useState([]);
    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        setAlbums(data)
    }
    useEffect(()=> {
        fetchData()

    }, [])

    return (
        <div>
            <Switch>
                <Route path={'/albums/:id'}>
                    <SinglePost/>
                </Route>
                <Route>
                    <Redirect to={'/albums'}/>
                </Route>
            </Switch>

            <ul>
            {albums.map(album => <Link to={`/albums/${album.id}`}><li key={album.id}>{album.id} - {album.title}</li></Link> )}
            </ul>
        </div>
    );
}

export default Albums;
