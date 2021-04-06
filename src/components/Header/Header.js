import React from 'react';
import './header.css'
import {Link} from "react-router-dom";

function Header (props) {

    return (
        <div className='header'>
            <button><Link to="/posts">Posts</Link></button>
            <button><Link to="/comments">Comments</Link></button>
            <button><Link to="/albums">Albums</Link></button>
            <button><Link to="/photos">Photos</Link></button>
            <button><Link to="/todos">Todos</Link></button>
            <button><Link to="/users">Users</Link></button>
        </div>
    );
}

export default Header;
