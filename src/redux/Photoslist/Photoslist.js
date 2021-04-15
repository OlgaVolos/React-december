import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onUserLoaded} from "../action-creators";
import {onAddToBad, onRemoveFromBad} from '../action-creators'
const  PhotosList = () => {
    const dispatch = useDispatch();
    const users = useSelector(({userReducer: {users}}) => users)
    const badEmployees = useSelector(({userReducer: {badEmployees}}) => badEmployees)

    const fetchPhotos = async () => {
        const response = await fetch('https://dummyapi.io/data/api/user?limit=10',
            {
                headers: {
                    'app-id': 'lTE5abbDxdjGplutvTuc'
                }
            });
        const data = await response.json();
        console.log(data);
        dispatch(onUserLoaded(data.data))
    };
    // filter: blur(3px);
    useEffect(() => {
        if(!users.length){
            fetchPhotos()
        }

    }, [])
    return (
        <div>
            {users.map(el => (
                <img
                    style={{
                        filter: badEmployees.includes(el.id) ? 'blur(3px)' : ''
                    }}
                    onClick={()=> {
                        const alreadyInList = badEmployees.includes(el.id)
                        const answer = !alreadyInList && window.confirm('do you want to delete item?')
                        if(answer){
                          return  dispatch(onAddToBad(el.id))
                        }
                            dispatch( onRemoveFromBad(el.id))
                    }}
                    key={el.id}
                    src={el.picture}
                    alt={el.firstName}/>
            ))}
        </div>
    )
}

export default PhotosList;
