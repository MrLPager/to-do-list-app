import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>TODO List</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        {/* <NavLink to="/create" activeClassName="is-active">Create TODO List</NavLink> */}
    </header>
);

export default Header;