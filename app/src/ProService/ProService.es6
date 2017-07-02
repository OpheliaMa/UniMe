import * as React from "react";
import './ProService.css'
import Footer from "../Footer/Footer";

class ProService extends React.Component {
    render() {
        return (
            <div className="service_container">
                <div className="service_kv">
                </div>

                <div className="service_content_container">

                    <div className="service_content_container_inner">
                        <h1 className="service_content_title">Services</h1>

                        <div className="service_content_desc">
                            <p>International Education Integrated Operations Management</p>
                            <p>International Standard / Synchronous Course Introduction</p>
                            <p>International student society/club/enrichment course introduction management</p>
                            <p>Introduction of foreign expert management</p>
                            <p>International Education Guidance & Test Instruction Introduction Management</p>
                            <p>Introduction of international sports and cultural exchanges Project Management</p>
                            <p>Introduction Management of International Sports Culture Exchange Projects</p>
                        </div>

                        <img src="http://oq9er0rnu.bkt.clouddn.com/icon_service_pen.png"/>
                    </div>

                </div>

                <div className="service_empty">

                </div>

                <Footer />
            </div>
        );
    }
}

export default ProService