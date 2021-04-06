import React, {useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom'

function SingleAlbum() {
    const [album, setAlbum] = useState();
    const {id} = useParams();
    const history = useHistory()

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        const data = await response.json();
        setAlbum(data);
    }

    useEffect(() => {
        fetchData()
    }, [id])

    return (
        <div>
            {album && (<div key={album.id}>
                <p>{album.id}</p>
                <p>{album.title}</p>
                <p>{album.body}</p>
            </div>)}

            <button onClick={() => history.push(`/albums/${+id-1}`)}>Back</button>
            <button onClick={() => history.push(`/albums/${+id+1}`)}>To next</button>


        </div>
    );
}

export default SingleAlbum;
