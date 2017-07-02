/**
 * Created by xuyanjun on 17/5/17.
 */

import React from "react";
import './Footer.css'
import {
    NavLink
} from 'react-router-dom'

class Footer extends React.Component {

    render() {
        return (
            <div className="home_footer">

                <div className="home_footer_nav_container">
                    <div className="home_footer_logo_container">
                        <img className="home_footer_logo" src="http://oq9er0rnu.bkt.clouddn.com/logo_bottom.png"/>
                    </div>
                    <div className="home_footer_nav">
                        <div className="home_footer_nav_text"><NavLink to="/" exact activeClassName="selected">Homepage</NavLink></div>
                        <i></i>
                        <div className="home_footer_nav_text"><NavLink to="/core" activeClassName="selected">Core Project</NavLink></div>
                        <i></i>
                        <div className="home_footer_nav_text"><NavLink to="/service" activeClassName="selected">Pro Service</NavLink></div>
                        <i></i>
                        <div className="home_footer_nav_text"><NavLink to="/cases" activeClassName="selected">Partners & Cases</NavLink></div>
                        <i></i>
                        <div className="home_footer_nav_text"><NavLink to="/about" activeClassName="selected">About Us</NavLink></div>
                        <i></i>
                        <div className="home_footer_nav_text"><NavLink to="/">Chinese</NavLink></div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Footer;