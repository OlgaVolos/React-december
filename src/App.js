import React, {useState, createContext, useContext} from "react";

const CounterContext = createContext();
console.log(CounterContext);

const ContextProvider = ({children}) => {
  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    setCounter(counter+1)
  };

  const decCounter = () => {
    setCounter(counter-1)
  };
  return(
      <CounterContext.Provider value={{counter,
        incCounter,
        decCounter,}}>
        {children}
      </CounterContext.Provider>

  )
};

const Counter = () => {
    const {counter, decCounter} = useContext(CounterContext);


  return (
      <div>
      <h1>Counter: {counter}</h1>
          <button onClick={decCounter}>DEC</button>
        </div>
  )
};
const Header = () => {
    const {counter, incCounter} = useContext(CounterContext);

// const counterContext = useContext(CounterContext); замість counterContext,
// ми можемо деструктуризувати і витягнути те, що лежить в ньому
//   console.log(counterContext);
  return(
      <h3 onClick={incCounter} style={{color: 'red'}}>Header: {counter} </h3>
  )

};

export default function App() {


  return(
      <ContextProvider>
        <Counter  />
        <Header />
</ContextProvider>
  )
};
