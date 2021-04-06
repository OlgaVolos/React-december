import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom'

function SingleComment() {
    const [comment, setComment] = useState();
    const {id} = useParams();
    const history = useHistory()

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        const data = await response.json();
        setComment(data);
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div>
            {comment && (<div key={comment.id}>
                <p>{comment.id}</p>
                <p>{comment.name}</p>
                <p>{comment.email}</p>
            </div>)}
            <button onClick={() => history.push(`/comments/${+id-1}`)}>Back</button>
            <button onClick={() => history.push(`/comments/${+id+1}`)}>To next</button>


        </div>
    );
}

export default SingleComment;

