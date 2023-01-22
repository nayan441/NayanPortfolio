import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
  import SchoolIcon from "@material-ui/icons/School";
  import WorkIcon from "@material-ui/icons/Work";


function Experience() {
  return (
    <div className='experience' >
        <VerticalTimeline>

            <VerticalTimelineElement
                lineColor="#3e497a"
                className="vertical-timeline-element--education"
                date="2013 - 2015"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Bethel Higher Secondary School,  Seoni Malwa, Hoshangabad(M.P.)
                    </h3>
                    <p> Higher Secondary School Certificate</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2015 - 2018"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                <h3 className="vertical-timeline-element-title">
                    Depertment Of Computer Science & Application,
                    Dr. Hari Singh Gour Vishwavidlaya, Sagar(M.P.)
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                    Bachelor's Degree (BCA)
                </h4>

                <p> Computer Science</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2020- 2022"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
                >
                <h3 className="vertical-timeline-element-title">
                    School Of Computer Science & IT,
                    Devi Ahilya Vishwavidlaya, Sagar(M.P.)
                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                    Masters's Degree (MCA)
                </h4>

                <p> Computer Science</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022 - 2022"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
                    >
                    <h3 className="vertical-timeline-element-title">
                        Internship - Ideata Analytics Pvt Ltd
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Electronic Complex, Indore(M.P.)
                    </h4>
                    <p>Ideata Analytics is well known in the field of Data Science, Data Analytics, Web Development, mostly they work with European clients as an intern with them. I was the part of there core team. Together we worked on ERP project, Worked on tech stacks Docker, Git, DRF, Azure, EC2, JavaScript, Python, Django and many more. Developed the backend infrastructure for 2 ERP projects.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022 - present"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Jr Software Engineer - Zecdata Technology Pvt Ltd
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Scheme 78, Indore (M.P.)
                    </h4>
                    <p>
                        Helped the team launch 2 major features by working both in the front
                        end and back end.
                    </p>
            </VerticalTimelineElement>



        </VerticalTimeline>
    </div>
  )
}

export default Experience