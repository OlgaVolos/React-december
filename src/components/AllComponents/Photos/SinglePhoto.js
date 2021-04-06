import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom'

function SinglePhoto() {
    const [photo, setPhoto] = useState();
    const {id} = useParams();
    const history = useHistory()

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        const data = await response.json();
        setPhoto(data);
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div>
            {photo && (<div key={photo.id}>
                <p>{photo.id}</p>
                <p>{photo.title}</p>
                <p>{photo.body}</p>
            </div>)}
            <button onClick={() => history.push(`/photos/${+id-1}`)}>Back</button>
            <button onClick={() => history.push(`/photos/${+id+1}`)}>To next</button>

        </div>
    );
}

export default SinglePhoto;
