import React,{Fragment} from 'react';
import PageHeader from "../../components/PageHeader";
import PageWrapper from "../../components/PageWrapper";
import ProjectContentWrap from "./ProjectContentWrap";
import RelatedServices from "../../components/RelatedServices";
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/Sidebar/SidebarItem";
import List from "../../components/UI/List";
import LI from "../../components/UI/List/Item";
import Anchor from "../../components/UI/Anchor";
import ProjectsData from "../../data/Projects/projects";

const ProjectDetails = () => {
    const projectID = new URLSearchParams(window.location.search).get("id");
    const project = ProjectsData.find((projectItem) => projectItem.id === parseInt(projectID));
    const currentProject = ProjectsData.indexOf(project);
    let prevProject;
    let nextProject;
    currentProject === 0 ? prevProject = ProjectsData[currentProject] : prevProject = ProjectsData[currentProject-1];
    currentProject+1 === ProjectsData.length ? nextProject = ProjectsData[currentProject] : nextProject = ProjectsData[currentProject+1];

    return (
        <Fragment>
            <PageHeader
                bgImg={require('../../assets/img/page-header.jpg')}
                title={project.title}
                content={project.shortDesc}
            />

            <PageWrapper classes="sm-top service-details-wrapper">
                <ProjectContentWrap
                    project={project}
                    totalProject={ProjectsData.length}
                    nextProject={nextProject}
                    prevProject={prevProject}
                />

                <Sidebar classes={'col-lg-4 mtn-40'}>
                    <SidebarItem title="Projects">
                        <List classes="service-list">
                            {
                                ProjectsData.map(projectItem=>(
                                    <LI key={projectItem.id}>
                                        <a href={`${process.env.PUBLIC_URL + `/projects/${projectItem.title.split(' ').join('-').toLowerCase()}?id=${projectItem.id}`}`}>
                                            {projectItem.title}
                                        </a>
                                    </LI>
                                ))
                            }
                        </List>
                    </SidebarItem>

                    {/*<SidebarItem title="Download Brochure">
                        <List classes="service-list">
                            <LI><Anchor path='../../assets/Costrak-Brochure.pdf'><i className="fa fa-file-pdf-o"/>Brochures.PDF</Anchor></LI>
                            <LI><Anchor path='/'><i className="fa fa-file-word-o"/>Brochures.DOC</Anchor></LI>
                        </List>
                        </SidebarItem>*/}
                </Sidebar>
            </PageWrapper>

            <RelatedServices/>
        </Fragment>
    );
};

export default ProjectDetails;