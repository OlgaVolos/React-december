import React, {useEffect, useMemo, useReducer, useState} from 'react';
// const fh = (a,b) => {
//     return Math.pow(a,b)
// };

const initialState = {
    counter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, counter: state.counter + 1};
        case 'dec':
            return {...state, counter: state.counter - 1};
        case 'reset':
            return {counter: 0};
        default:
            throw new Error();
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);



    // 1)
    //   const [counter, setCounter] = useState(0);
    // const inc = () => {
    // setCounter(counter+1);
    // setCounter(prev => prev+1); //якщо знаення базується на попередньому
    //   // функція асинхронна. Щоб відловити
    //       // синхронно дої, використовуємо useEffect()
    //   //щоб переконатися, що вона асинхронна, логнемо тут каунтер
    // };
    // useEffect(() => {
    //   console.log(counter);
    // }, [counter])

    // 2) useMemo запам"ятовує якесь значення
// const foo = useMemo(() => {
//     return fh(counter, 2)
// }, [counter]) // якщо без депсів, то запам"ятає останнє значення

    // console.log(foo);
    return (
        <div>
            <h1>{state.counter}</h1>
            <button onClick={() => dispatch({type: 'inc' })}>inc</button>
            <button onClick={() => dispatch({type: 'dec' })}>dec</button>
            <button onClick={() => dispatch({type: 'reset' })}>reset</button>


        </div>
    );
}

export default App;
