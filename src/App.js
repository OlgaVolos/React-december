import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TodosList from "./components/TodosList";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import './components/style.css'
import TodoContextProvider from "./services/TodoContext";

function App() {
  return (
      <TodoContextProvider>
      <main>
      <Router>
          <Header/>
     <div className={'main'}>
      <Switch>
        <Route path={'/'} exact>
            <TodosList/>
        </Route>

        <Route path={'/create-todo'}>
            <AddTodo/>
        </Route>
      </Switch>
     </div>
      </Router>
      </main>
      </TodoContextProvider>
  );
}

export default App;
