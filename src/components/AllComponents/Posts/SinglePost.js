import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom'

function SinglePost() {
    const [post, setPost] = useState();
    const {id} = useParams();
    const history = useHistory()

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json();
        setPost(data);
    }

    useEffect(() => {
        fetchData()
    }, [id]);



    return (
        <div>
            {post && (<div key={post.id}>
                <p>{post.id}</p>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </div>)}

            <button onClick={() => history.push(`/posts/${+id-1}`)} >Back</button>
            <button onClick={() => history.push(`/posts/${+id+1}`)}>To next</button>


        </div>
    );
}

export default SinglePost;
