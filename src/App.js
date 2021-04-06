import React from 'react';
import Header from "./components/Header/Header";
import Posts from "./components/AllComponents/Posts/Posts";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Albums from "./components/AllComponents/Albums/Albums";
import Comments from "./components/AllComponents/Comments/Comments";
import Photos from "./components/AllComponents/Photos/Photos";
import Todos from "./components/AllComponents/Todos/Todos";
import Users from "./components/AllComponents/Users/Users";
import SinglePost from "./components/AllComponents/Posts/SinglePost";
import SingleComment from "./components/AllComponents/Comments/SingleComment";
import SingleAlbum from "./components/AllComponents/Albums/SingleAlbum";
import SinglePhoto from "./components/AllComponents/Photos/SinglePhoto";
import SingleTodo from "./components/AllComponents/Todos/SingleTodo";
import SingleUser from "./components/AllComponents/Users/SingleUser";

function App(props) {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path={'/posts'}>
                        <Posts/>
                    </Route>
                    {/*<Route path={'/posts/:id'}>*/}
                    {/*    <SinglePost/>*/}
                    {/*</Route>*/}
                    <Route path={'/comments'} >
                        <Comments/>
                    </Route>
                    {/*<Route path={'/comments/:id'}>*/}
                    {/*    <SingleComment/>*/}
                    {/*</Route>*/}
                    <Route path={'/albums'} >
                        <Albums/>
                    </Route>
                    {/*<Route path={'/albums/:id'}>*/}
                    {/*    <SingleAlbum/>*/}
                    {/*</Route>*/}
                    <Route path={'/photos'}>
                        <Photos/>
                    </Route>
                    {/*<Route path={'/photos/:id'}>*/}
                    {/*    <SinglePhoto/>*/}
                    {/*</Route>*/}
                    <Route path={'/todos'}>
                        <Todos/>
                    </Route>
                    {/*<Route path={'/todos/:id'}>*/}
                    {/*    <SingleTodo/>*/}
                    {/*</Route>*/}
                    <Route path={'/users'}>
                        <Users/>
                    </Route>
                    {/*<Route path={'/users/:id'}>*/}
                    {/*    <SingleUser/>*/}
                    {/*</Route>*/}
                    {/*<Route path='/' exact>*/}
                    {/*    <Posts/>*/}
                    {/*</Route>*/}
                    {/*<Route>*/}
                    {/*    <Redirect to='/'/>*/}
                    {/*</Route>*/}
                    <Route>
                        <h1>Page not found</h1>
                    </Route>


                </Switch>
            </div>
        </Router>
    );
}

export default App;
