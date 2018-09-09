import React from 'react'
import { NavLink } from 'react-router-dom'
export class Nav extends React.Component {
    render() {
        return (
            <ul className="nav">
                <li><NavLink
                    activeClassName="active"
                    exact to="/">
                    Home
                </NavLink></li>
                <li><NavLink
                    activeClassName="active"
                    to="/about">
                    About Us
                </NavLink></li>
                <li><NavLink
                    activeClassName="active"
                    to="/clients">
                    Clients
                </NavLink></li>
            </ul>
        )
    }
}