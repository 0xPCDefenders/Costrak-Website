import React from 'react';
import SectionTitle from '../UI/SectionTitle'
import ProjectItem from  './ProjectItem'
import ProjectsData from '../../data/Projects/projects'

import serviceTopBg from '../../assets/img/service/service-bg.jpg'

function Projects({classes}) {
    return (
        <div className={`service-area-wrapper ${classes}`}>
            <div className="service-area-top" style={{backgroundImage: `url("${serviceTopBg}")`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5 m-auto text-center">
                            <SectionTitle variant="light" title="Our Projects" heading="View our many projects that we've worked on!" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-content-area">
                <div className="container">
                    <div className="row mtn-30">
                        {
                            ProjectsData.map(project=>(
                                <ProjectItem key={project.id} id={project.id} title={project.title} text={project.shortDesc} thumb={project.thumb}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;