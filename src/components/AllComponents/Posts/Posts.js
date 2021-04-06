import React, {useState, useEffect} from 'react';
import {Link, Redirect, Route, Switch} from "react-router-dom";
import SinglePost from "./SinglePost";


function Posts(props) {
    const [posts, setPosts] = useState([]);


    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await response.json();
        setPosts(data);
    }

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
           <Switch>
               <Route path={'/posts/:id'}>
                   <SinglePost/>
               </Route>
               <Route>
                   <Redirect to={'/posts'}/>
               </Route>
           </Switch>

            <ul>
                {posts.map(post => <Link to={`/posts/${post.id}`}><li key={post.id}>{post.id}-{post.title}-{post.body}</li></Link>)}
            </ul>

        </div>
    );
}

export default Posts;
