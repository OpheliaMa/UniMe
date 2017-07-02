/**
 * Created by xuyanjun on 17/7/2.
 */

import React from "react";
import "./ContactUs.css"

class ContactUs extends React.Component {

    render() {
        return (
            <div className="home_cont_us_container">
                <h6 className="home_cont_us_title">Contact Us</h6>

                <div className="home_cont_us_content">
                    <p>Address: 21F,&nbsp;618 East Yan An Rd,&nbsp;East Ocean Centre,&nbsp;Huangpu</p>
                    <p>District,&nbsp;Shanghai,&nbsp;China</p>
                    <p>Tel: +86 21 8023 6022</p>
                    <p>Email: unime_china@163.com</p>
                    <p>Website: www.unime-china.org.cn </p>
                </div>
            </div>
        );
    }
}

export default ContactUs;