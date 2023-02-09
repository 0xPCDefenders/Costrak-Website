import React from 'react';
import SlickSlider from "../../components/UI/Slick";
import List from "../../components/UI/List";
import LI from "../../components/UI/List/Item";
import IconBox from "../../components/IconBox";
import Text from "../../components/UI/Text";

import HowWeWorksData from "../../data/HowWeWorks/how-we-works";

const ProjectContentWrap = ({project,totalProject,prevProject,nextProject}) => {
    return (
        <div className="col-lg-8">
            <div className="service-details-content">
                <div className="service-thumbnail-wrapper">
                    <SlickSlider settings={{
                        className: "service-details-thumb",
                        arrows: false,
                        dots: true
                    }}>
                        {
                            project.previewImages.map((previewImg, indx) => (
                                <div key={indx}>
                                    <img src={require('../../assets/img/' + previewImg)} alt={project.title} />
                                </div>
                            ))
                        }
                    </SlickSlider>
                </div>

                <div className="service-details-info">
                    <h3>{project.title}</h3>
                    <div className="about-service mt-50 mt-sm-35">
                            <div dangerouslySetInnerHTML={{__html: project.aboutServiceDesc}}/>
                  
                        <List classes="service-feature mt-30">
                            {
                                project.features.map((feature,indx)=>(
                                    <LI key={indx}>{feature}</LI>
                                ))
                            }
                        </List>
                    </div>


                    <div className="pagination-wrap">
                        <ul className="pagination">
                            <li className="prev">
                                <a href={`${process.env.PUBLIC_URL + `/projects/${prevProject.title.split(' ').join('-').toLocaleLowerCase()}?id=${prevProject.id}`}`}
                                   className={project.id === 1 ? "disabled" : null}
                                >
                                    <i className="fa fa-long-arrow-left"/> Previous
                                </a>
                            </li>
                            <li className="next">
                                <a href={`${process.env.PUBLIC_URL + `/projects/${nextProject.title.split(' ').join('-').toLocaleLowerCase()}?id=${nextProject.id}`}`}
                                   className={project.id === totalProject ? "disabled" : null}
                                >
                                    Next <i className="fa fa-long-arrow-right"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectContentWrap;