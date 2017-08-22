import React from "react";
import './TopBar.css'
import {
    NavLink
} from 'react-router-dom'

class TopBar extends React.Component {

    render() {
        return (
            <div className="top_fixed">
                <div className="top">
                    <div className="top_logo_container">
                        <NavLink to="/" exactclassName="top_logo_link">
                            <img className="top_logo" src="http://oq9er0rnu.bkt.clouddn.com/logo_top_revised.png"/>
                        </NavLink>
                    </div>
                    <ul className="top_nav">
                        <li><NavLink to="/" exact activeClassName="selected">Homepage</NavLink></li>
                        <li><NavLink to="/core" activeClassName="selected">Core Projects</NavLink></li>
                        <li><NavLink to="/service" activeClassName="selected">Pro Services</NavLink></li>
                        <li><NavLink to="/cases" activeClassName="selected">Partners & Cases</NavLink></li>
                        <li><NavLink to="/about" activeClassName="selected">About Us</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default TopBar;