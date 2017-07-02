import * as React from "react";
import Footer from "../Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";
import "./AboutUs.css"

class AboutUs extends React.Component {
    render() {
        return (
            <div className="about_container">
                <div className="about_kv">
                </div>

                <div className="about_content_container">
                    <div className="about_content_desc">
                        <div>
                            <h1 className="about_content_title">About University for Me (UniMe)</h1>
                            <img src="http://oq9er0rnu.bkt.clouddn.com/about_logo1.png" className="about_content_logo1"/>
                        </div>
                        <p><br /></p>
                        <p>Founded in 2014 and headquartered in New Zealand, University For Me (hereinafter to be
                            referred as UniMe) is an official international education organization accredited by the
                            Ministry of Education of New Zealand. Since its inception, UniMe has been committed to
                            advancing the exchange of education and culture between the world and New Zealand, providing
                            international student education and services to larger scope of students from all over the
                            world.</p>
                        <p><br /></p>
                        <p>UniMe China was established in 2014 in order to provide better international education
                            quality resources and New Zealand core education models to Mainland China students. Juntian
                            International, as the sole official institution of UniMe in Mainland China, provides a full
                            range of academic and resource support for Chinese students to achieve higher education,
                            elite education and continuous successful performance in global education.</p>
                        <p><br /></p>
                        <p>UniMe directly manages several New Zealand public high schools and colleges, and delivers
                            more than a thousand international graduates annually, leading to prestigious universities
                            around the world and well-known universities in New Zealand.</p>
                        <p><br /></p>
                        <div>
                            <h1 className="about_content_title">About UniMe China Juntian International</h1>
                            <img src="http://oq9er0rnu.bkt.clouddn.com/about_logo2.png" className="about_content_logo2"/>
                        </div>
                        <p><br /></p>
                        <p>Established in 2009, Juntian International has been focused on the industrial chain layout of
                            international education. Affiliated to University For Me (UniMe), Juntian International is
                            the
                            sole official institution of UniMe in Mainland China. As a professional resource
                            introduction
                            and management company in the field of international education, Juntian International has
                            always
                            been dedicated to providing providing the best resources and integrated operation
                            solutions.</p>
                    </div>
                </div>

                <div className="about_empty"></div>
                <ContactUs/>
                <Footer/>
            </div>
        );
    }
}

export default AboutUs