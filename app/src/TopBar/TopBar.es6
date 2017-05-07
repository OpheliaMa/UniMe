import React from "react";
import {
    Link
} from 'react-router-dom'

class TopBar extends React.Component {

    render() {
        return (
            <ul>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/core">Core Projects</Link></li>
                <li><Link to="/service">Pro Services</Link></li>
                <li><Link to="/cases">Partners & Cases</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        );
    }

}

export default TopBar;