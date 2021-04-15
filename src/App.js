import React from 'react';
import PhotosList from "./redux/Photoslist/Photoslist";
import {useDispatch, useSelector} from "react-redux";
import {decAction, incAction, resetAction,} from './redux/action-creators'


function App() {
    const {counter} = useSelector(({counter}) => ({
       counter: counter.counter
    }));

    const dispatch = useDispatch()


    return (
        <div>
            {!(counter % 2) && <PhotosList/>}
            <div>
                <h2>{counter}</h2>
                <br/>

                <button onClick={() => dispatch(incAction())} >inc</button>
                <br/>
                <button onClick={() => dispatch(decAction())} >dec</button>
                <br/>

                <button onClick={() => dispatch(resetAction())} >reset</button>


            </div>
        </div>
    );
}

export default App;
