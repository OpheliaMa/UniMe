import * as React from "react";
import './HomePage.css'

class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage_container">
                <div className="homepage_kv">
                </div>

                <div className="homepage_gallery">
                    <div className="home_gal_item home_gal_nzup">
                        <div className="home_gal_item_cover_container">
                            <img className="home_gal_item_cover" src="http://ofnfjq2yy.bkt.clouddn.com/nzup.png" />
                            <img className="home_gal_item_cover_indicator" src="http://ofnfjq2yy.bkt.clouddn.com/icon_cover_indicator.png" />
                        </div>

                        <div className="home_gal_item_des">
                            <div>
                                NZUP Program
                            </div>
                        </div>

                    </div>

                    <div className="home_gal_item home_gal_3plusn">

                        <div className="home_gal_item_cover_container">
                            <img className="home_gal_item_cover" src="http://ofnfjq2yy.bkt.clouddn.com/3plusn.png" />
                            <img className="home_gal_item_cover_indicator" src="http://ofnfjq2yy.bkt.clouddn.com/icon_cover_indicator.png" />
                        </div>
                        <div className="home_gal_item_des">

                        </div>

                    </div>

                    <div className="home_gal_item home_gal_dbm">

                        <div className="home_gal_item_cover_container">
                            <img className="home_gal_item_cover" src="http://ofnfjq2yy.bkt.clouddn.com/dbm.png" />
                            <img className="home_gal_item_cover_indicator" src="http://ofnfjq2yy.bkt.clouddn.com/icon_cover_indicator.png" />
                        </div>
                        <div className="home_gal_item_des">

                        </div>

                    </div>

                    <div className="home_gal_item home_gal_elites">

                        <div className="home_gal_item_cover_container">
                            <img className="home_gal_item_cover" src="http://ofnfjq2yy.bkt.clouddn.com/elites.png" />
                            <img className="home_gal_item_cover_indicator" src="http://ofnfjq2yy.bkt.clouddn.com/icon_cover_indicator.png" />
                        </div>
                        <div className="home_gal_item_des">

                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default HomePage