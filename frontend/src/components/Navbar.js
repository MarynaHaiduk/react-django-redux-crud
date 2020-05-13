import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to={'/about'}>About</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0" >
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                            aria-label="Search" name="search"/>
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Filter</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
