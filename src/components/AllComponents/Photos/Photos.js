import React, {useEffect, useState} from 'react';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import SinglePhoto from "./SinglePhoto";

function Photos(props) {
const [photos, setPhotos] = useState([]);

const fetchData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    setPhotos(data);
};

useEffect(()=> {
    fetchData();
}, [])

    return (
        <div>
            <Switch>
                <Route path={`/photos/:id`}>
                    <SinglePhoto/>
                </Route>
                <Route>
                    <Redirect to={'/photos'}/>
                </Route>
            </Switch>
           <ul>
               {photos.map(photo => <Link to={`/photos/${photo.id}`}> <li key={photo.id}>{photo.id}-{photo.title}-{photo.url}</li></Link>)}
           </ul>
        </div>
    );
}

export default Photos;
