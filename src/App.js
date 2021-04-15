import React from 'react';
import {useDispatch, useSelector, connect} from "react-redux";
import {
    incAction,
    decAction,
    resetAction,
    customAction,
    incActionTwo,
    decActionTwo,
    resetActionTwo,
    customActionTwo,
} from './redux/actions-creators'
function App() {
    const counter1 = useSelector(({counter1: {counter}})=>{
        return counter
    });
    const counter2 = useSelector(({counter2: {counter}})=>{
        return counter
    });

    // const {counter1, counter2} = useSelector(({counter1, counter2})=> ({
    //     counter1: counter1.counter,
    //     counter2: counter2.counter,
    // }))
    const dispatch = useDispatch()
  return (
      <div>
          <h1>{counter1}</h1>
          <h1>{counter2}</h1>
          <button onClick={() => dispatch(incAction())}>inc</button>
          <button onClick={() => dispatch(decAction())}>dec</button>
          <button onClick={() => dispatch(resetAction())}>reset</button>
          <button onClick={() => dispatch(customAction(Math.random()))}>Custom</button>
<hr/>
          <button onClick={() => dispatch(incActionTwo())}>inc</button>
          <button onClick={() => dispatch(decActionTwo())}>dec</button>
          <button onClick={() => dispatch(resetActionTwo())}>reset</button>
          <button onClick={() => dispatch(customActionTwo(100))}>Custom</button>

          {/*<button onClick={inc}>inc</button>*/}
          {/*<button onClick={dec}>dec</button>*/}
          {/*<button onClick={reset}>reset</button>*/}


      </div>
   );
}

// const mapStateProps = (state) => ({
//     counter: state.counter
// });
//
// const mapDispatchProps = (dispatch) =>({
//     inc: () => dispatch({type: 'INC'}),
//     dec: () => dispatch({type: 'DEC'}),
//     reset: () => dispatch({type: 'RESET'}),
// })
// export default connect(mapStateProps, mapDispatchProps )(App);
// в App пропсами кидаємо counter, inc, dec, reset і в onClick прописуємо просто
// inc, dec, reset
export default App;
