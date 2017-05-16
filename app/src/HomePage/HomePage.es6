import * as React from "react";
import './HomePage.css'
import Footer from "../Footer/Footer";

class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage_container">
                <div className="homepage_kv">
                </div>


                <div className="homepage_gallery">
                    <div className="home_gal_item home_gal_nzup">
                        <div className="home_gal_item_cover_container">
                            <img className="home_gal_item_cover" src="http://ofnfjq2yy.bkt.clouddn.com/nzup.png"/>
                            <img className="home_gal_item_cover_indicator"
                                 src="http://ofnfjq2yy.bkt.clouddn.com/icon_cover_indicator.png"/>
                        </div>

                        <div className="home_gal_item_des_container">
                            <div className="home_gal_item_des">
                                <p>NZUP Program</p>
                                <img className="nzup_logo" src="http://ofnfjq2yy.bkt.clouddn.com/nzup_logo.png"/>
                            </div>
                        </div>

                    </div>

                    <div className="home_gal_item home_gal_3plusn">

                        <div className="home_gal_item_cover_container">
                            <img className="home_gal_item_cover" src="http://ofnfjq2yy.bkt.clouddn.com/3plusn.png"/>
                            <img className="home_gal_item_cover_indicator"
                                 src="http://ofnfjq2yy.bkt.clouddn.com/icon_cover_indicator.png"/>
                        </div>
                        <div className="home_gal_item_des_container">
                            <div className="home_gal_item_des">
                                <p>3+N International Bachelor & Master</p>
                                <p>Degree Program</p>
                            </div>
                        </div>

                    </div>

                    <div className="home_gal_item home_gal_dbm">

                        <div className="home_gal_item_cover_container">
                            <img className="home_gal_item_cover" src="http://ofnfjq2yy.bkt.clouddn.com/dbm.png"/>
                            <img className="home_gal_item_cover_indicator"
                                 src="http://ofnfjq2yy.bkt.clouddn.com/icon_cover_indicator.png"/>
                        </div>
                        <div className="home_gal_item_des_container">
                            <div>
                                <div className="home_gal_item_des">
                                    <p>DBM-Massey</p>
                                    <p>Master Degree Program</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="home_gal_item home_gal_elites">

                        <div className="home_gal_item_cover_container">
                            <img className="home_gal_item_cover" src="http://ofnfjq2yy.bkt.clouddn.com/elites.png"/>
                            <img className="home_gal_item_cover_indicator"
                                 src="http://ofnfjq2yy.bkt.clouddn.com/icon_cover_indicator.png"/>
                        </div>
                        <div className="home_gal_item_des_container">
                            <div className="home_gal_item_des">
                                <p>Global Youth Tour of</p>
                                <p>Professional Elites</p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="home_registration">

                    <span className="home_reg_title">Registration</span>

                    <span className="home_reg_title_indicator">&nbsp;</span>

                    <div className="home_reg_form">

                        <label className="home_reg_form_row">
                            <span className="home_reg_form_label">Student Name</span>
                            <div className="home_reg_form_input">
                                <div className="home_reg_form_input_container"></div>
                            </div>
                        </label>

                        <label className="home_reg_form_row">
                            <span className="home_reg_form_label">School</span>
                            <div className="home_reg_form_input">
                                <div className="home_reg_form_input_container"></div>
                            </div>
                        </label>

                        <label className="home_reg_form_row">
                            <span className="home_reg_form_label">Grade</span>
                            <div className="home_reg_form_input">
                                <div className="home_reg_form_input_container"></div>
                            </div>
                        </label>

                        <label className="home_reg_form_row">
                            <span className="home_reg_form_label">Parents Contact No.</span>
                            <div className="home_reg_form_input">
                                <div className="home_reg_form_input_container"></div>
                            </div>
                        </label>

                        <label className="home_reg_form_row">
                            <div className="home_reg_form_input">
                                <button>Register Now</button>
                            </div>
                        </label>

                    </div>


                </div>

                <div className="home_cont_us_container">
                    <h6 className="home_cont_us_title">Contact Us</h6>

                    <div className="home_cont_us_content">
                        <p>Address: 21F,618 East Yan An Rd,East Ocean Centre,Huangpu</p>
                        <p>District,Shanghai,China</p>
                        <p>Tel: +86 21 8023 6022</p>
                        <p>Email: unime_china@163.com</p>
                        <p>Website: www.unime-china.org.cn </p>
                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default HomePage