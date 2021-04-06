import React, {useEffect, useState} from 'react';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import SingleComment from "./SingleComment";

function Comments(props) {
    const [comments, setComments] = useState([]);
    const fetchData = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        setComments(data);
    }
    useEffect (()=> {
        fetchData()
    }, [])

    return (
        <div>
            <Switch>
                <Route path={'/comments/:id'}>
                    <SingleComment/>
                </Route>
                <Route>
                    <Redirect to={'/comments'}/>
                </Route>
            </Switch>
            <ul key={comments}>
            {comments.map(comment => <Link to={`/comments/${comment.id}`}><li key={comment.id}>{comment.id}-{comment.name}-{comment.email}</li></Link> )}
                </ul>
            </div>
    );
}

export default Comments;
