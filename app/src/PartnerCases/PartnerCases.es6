import * as React from "react";
import "./PartnerCases.css"
import Footer from "../Footer/Footer";

class PartnerCases extends React.Component {
    render() {
        return (
            <div className="pc_container">
                <div className="pc_kv">
                </div>

                <div className="pc_content_container">

                    <div className="pc_content_container_inner pc_content_desc_container">
                        <h1 className="pc_content_title">Partners & Cases</h1>
                        <h2 className="pc_content_sub_title">Our Strategic Partners and Cooperation Projects</h2>

                        <div className="pc_content_desc">
                            <p>SHU-UTS SILC Business School 1 + 3 International Bachelor Program [NZUP Training</p>
                            <p>Shanghai University (Xin Yuan) Overseas Studying Service Centre [authorized regional
                                management and project co-ordination nationwide]</p>
                            <p>Shanghai University - MOD`ART International 3+N International Bachelor & Master Degree
                                Program</p>
                            <p>Shanghai Jianqiao College International Exchange Student and UniMe Camp cooperation
                                project</p>
                            <p>International Department, Bozhou No.1 High School,Anhui Province [Operations Management
                                of International Education Integration]</p>
                        </div>
                    </div>


                    <div className={"pc_content_container_inner pc_content_data_container"}>
                        <h1 className="pc_content_title">案例资料</h1>
                        <div className="pc_content_desc">
                            <p>- 你升学之路上的重要概念和有价值资料 - </p>
                        </div>

                        <a className="pc_content_data_link" href="http://pan.baidu.com" target="_blank">
                            <img src="http://oq9er0rnu.bkt.clouddn.com/download.png"/>
                            <div className="pc_content_data_download_text">
                                点击此处，前往我们的百度云
                            </div>
                        </a>

                    </div>

                </div>

                <div className="pc_empty">
                </div>

                <Footer />
            </div>
        );
    }
}

export default PartnerCases