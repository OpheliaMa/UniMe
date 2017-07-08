import * as React from "react";
import Footer from "../Footer/Footer";
import "./CoreProject.css"
import CoreProjectItem from "./CoreProjectItem";

const data = [
    {
        imageSrc: "http://oq9er0rnu.bkt.clouddn.com/project_item_nzup.png",
        content: (
            <div id="nzup_high">
                <h4 className="project_content_title">NZUP International Middle & High School Project</h4>
                <p><br /></p>
                <p>NZUP is an International Middle & High School Project run by SHU-UTS SILC Business School
                    commissioned by UniMe</p>

                <h5 className="project_content_sub_title">Prospective Students</h5>
                <p>Domestic Middle and High School in-School Students</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">Academic Requirement</h5>
                <p>1. In-school Test Certification+pass Admission Test
                    Middle School Students: Math and English average score not less than 85 points
                    (100-point scale)
                    High School Students: Math and English average score not less than 85 points (100-point
                    scale)</p>
                <p><br /></p>

                <p>2. No need of high school entrance
                    examination/college entrance examination results</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">Length of Schooling (domestic + abroad) and School Campus</h5>
                <p>Middle School Student：2+1 High School Student：1+1</p>
                <p><br /></p>
                <p>Domestic Stage: SHU-UTS SILC Business School<br/>Stage Abroad：Abacus Institute of Studies
                    (AIS)—directly affiliated to UniMe</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Diploma and Further Education Channel</h5>
                <p>1. NZUP graduates will receive a high school diploma issued by the New Zealand Department
                    of
                    Education</p>
                <p><br /></p>
                <p>2. Upon graduation, students can apply for global elite universities, apply to the
                    Commonwealth country universities without IELTS score and preparatory schools. Oxford
                    University, Cambridge University, Massachusetts Institute of Technology, Stanford
                    University</p>
                <p><br /></p>
                <p>3. NZUP Student Agreement promises that all students will receive offer letters from top
                    8
                    universities in New Zealand, and more than 90% graduates will study at Auckland
                    University
                    [World ranking is equivalent to Shanghai Fudan University]</p>
                <p><br /></p>
                <p>4. NZUP graduates who choose to stay in New Zealand will achieve permanent resident
                    status
                    in New Zealand and skilled migrants</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Tuition: 148,000 / year (Unified costs at home and
                    abroad)</h5>
                <p>Domestic Stage Fees Include: Tuition Fees, Teaching Materials, Accommodation Costs<br />Stage
                    Abroad Fees Include: Tuition Fees</p></div>)
    },
    {
        imageSrc: "http://oq9er0rnu.bkt.clouddn.com/project_item_nzup.png",
        content: (
            <div id="nzup_prep">
                <h4 className="project_content_title">NZUP International Preparatory Course Project</h4>
                <p><br /></p>
                <h5 className="project_content_sub_title">Prospective Students</h5>
                <p>Domestic high school in-school students (secondary school / vocational school / technical school)</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Academic Requirement</h5>
                <p>1. In-school test certification+pass admission test<br />
                    Math and English average score not less than 75 points (100-point scale)</p>
                <p><br /></p>
                <p>2. no need of Chinese College Entrance Examination results but need to hold high school diploma (can
                    be
                    delayed to submit)</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">Length of Schooling and School Campus</h5>
                <p>Length of Schooing:1 Year<br />
                    Schooling Campus：Abacus Institute of Studies (AIS)—directly affiliated to UniMe</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">Diploma and Further Education Channel</h5>
                <p>1. NZUP graduates will receive a high school diploma issued by the New Zealand Department of
                    Education</p>
                <p><br /></p>
                <p>2. Upon graduation, students can apply for global elite universities, apply to the Commonwealth
                    country
                    universities without IELTS score and preparatory schools. Oxford University, Cambridge University,
                    Massachusetts Institute of Technology, Stanford University</p>
                <p><br /></p>
                <p>3. NZUP Student Agreement promises that all students will receive offer letters from top 8
                    universities
                    in New Zealand, and more than 90% graduates will study at Auckland University [World ranking is
                    equivalent to Shanghai Fudan University]</p>
                <p><br /></p>
                <p>4. NZUP graduates who choose to stay in New Zealand will achieve permanent resident status in New
                    Zealand
                    and skilled migrants</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">Tuition: 148,000 / year</h5>
                <p>Fees Include: Tuition Fee</p>
            </div>)
    },
    {
        imageSrc: "http://oq9er0rnu.bkt.clouddn.com/project_item_3pn.png",
        content: (
            <div id="nzup_3pn">
                <h4 className="project_content_title">3+N International Bachelor & Master Degree Program</h4>
                <p><br /></p>
                <p>3+N International Bachelor & Master Degree Program is a co-built two-diploma international
                    bachelor/masters degree program by UniMe and Shanghai University - MOD`ART International
                    College.</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Prospective Students</h5>
                <p>Domestic high school in-school/graduated students (high school / secondary school / vocational school
                    / technical school)</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Academic Requirement</h5>
                <p>1. In-school test certification+pass admission test<br />
                    Math and English average score not less than 75 points (100-point scale)</p>
                <p><br /></p>
                <p>2.No need of Chinese College Entrance Examination results but need to hold high school diploma (can
                    be delayed to submit)</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">Length of Schooling (domestic + abroad) and School Campus</h5>
                <p>Length of Schooing of International Bachelor's Degree:3+1</p>
                <p>Length of Schooing of International Masters's Degree:3+2</p>
                <p><br /></p>
                <p>Domestic Stage: Shanghai University - MOD`ART International College<br />
                    Stage Abroad: UK Cooperate Universities / New Zealand NZIOS Massey University</p>
                <p><br /></p>

                <h5 className="project_content_sub_title">Diploma and Further Education Channel</h5>
                <p><br /></p>
                <h6>3+1 International Bachelor's Degree Program</h6>
                <p>Shanghai University - MOD`ART International College 3 year full-time undergraduate courses + UK
                    cooperative university 1 year bachelor's degree courses</p>
                <p><br /></p>
                <h6>3+2 Internationa Master's Degree Program</h6>
                <p>Shanghai University - MOD`ART International College 3 year full-time undergraduate courses + 2 year
                    master's degree at New Zealand Messey University</p>
                <p><br /></p>
                <p>Upon graduation from programs above, students will receive dual diplomas (Shanghai University and
                    overseas cooperative universities), and all the overseas universities are officially certified by
                    the Chinese Ministry of Education</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Major</h5>
                <p>3 years full-time undergraduate major: clothing design, luxury marketing management, fashion
                    media</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Immigration Channel</h5>
                <p>For 3+2 Internationa Master's Degree Program, graduates who choose to stay in New Zealand will
                    achieve permanent resident status in New Zealand and skilled migrants</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Tuition: 148,000 / year (At home)</h5>
                <p>Domestic stage fees include: Tuition fees, teaching materials, accommodation costs Stage abroad fees
                    include: Reference to overseas university fees</p>
            </div>
        )
    },
    {
        imageSrc: "http://oq9er0rnu.bkt.clouddn.com/project_item_dbm.png",
        content: (
            <div id="nzup_dbm">
                <h4 className="project_content_title">DBM-Massey Master Degree Program</h4>
                <p><br /></p>
                <h5 className="project_content_sub_title">Prospective Students</h5>
                <p>Domestic junior college in-school students/graduates (Open to Adult college/Correspondence)</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Academic Requirement</h5>
                <p>Pass the English Entrance Examination</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Length of Schooling (domestic + abroad) and School Campus</h5>
                <p>Length of School: 2 Years</p>
                <p>Year 1 Campus: Auckland NZIOS</p>
                <p>Year 2 Campus: Massey University (Auckland Campus, Wellington Campus, North Papa Campus)</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Diploma and Further Education Channel</h5>
                <p>Year 1: New Zealand NZIOS Institute DBM Level 7 Diploma</p>
                <p>Year 2: New Zealand Massey University Master's Degree</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Major</h5>
                <p>Accounting, Banking, Management, Media Studies, Eeconomics, Marketing, Finance, Human Resource
                    Management</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Immigration Channel</h5>
                <p>Graduates who choose to stay in New Zealand will achieve permanent resident status in New Zealand and
                    skilled migrants</p>
                <p><br /></p>
                <h5 className="project_content_sub_title">Tuition: 148,000 / year (Year 1)</h5>
                <p>Year 1 Fees Include: Tuition</p>
                <p>Year 2 Fees Include: Reference to Massey University Fees</p>
            </div>
        )
    }
];

class CoreProject extends React.Component {

    _onReSize() {
        alert("aaa");
    }

    render() {
        return (
            <div className="project_container">
                <div className="project_kv">
                </div>
                <div id="project_content_container" className="project_content_container">
                    <h1 className="project_title">CORE PROJECTS</h1>
                    <div className="project_content_list">
                        {data.map((item, index) => {
                            return <CoreProjectItem key={"item" + index} imageSrc={item.imageSrc}
                                                    content={item.content}/>
                        })}
                    </div>
                </div>
                <div id="project_empty" className="project_empty">
                </div>
                <Footer/>

            </div>
        );
    }

    componentDidMount() {
        var contentDocument = document.getElementById("project_content_container");
        var targetDocument = document.getElementById("project_empty");

        var anchor = window.location.hash;

        if (anchor) {
            var docId = anchor.replace("#", "");
            var targetToScroll;
            if (docId && (targetToScroll = document.getElementById(docId))) {
                targetToScroll.scrollIntoView();
                window.scrollBy(0, -100);
            } else {
                window.scrollTo(0, 0);
            }
        } else {
            window.scrollTo(0, 0);
        }

        this._calcEmptyHeight(contentDocument, targetDocument);
        document.body.onresize = function () {
            this._calcEmptyHeight(contentDocument, targetDocument);
        }.bind(this);
    }

    _calcEmptyHeight(contentDocument, targetDocument) {
        var paddingBottom = contentDocument.offsetHeight;
        targetDocument.style.paddingBottom = paddingBottom + 20 + "px";
    }

    componentWillUnmount() {
        document.body.onresize = null;
    }
}

export default CoreProject