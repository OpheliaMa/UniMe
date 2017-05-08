import React from "react";
import './TopBar.css'
import {
    Link
} from 'react-router-dom'

class TopBar extends React.Component {

    render() {
        return (
            <div className="top">
                <img src="" />
                <ul className="test">
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/core">Core Projects</Link></li>
                    <li><Link to="/service">Pro Services</Link></li>
                    <li><Link to="/cases">Partners & Cases</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>
        );
    }

}

export default TopBar;