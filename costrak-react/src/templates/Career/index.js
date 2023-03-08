import React from 'react';
import Careers from '../../data/Careers/careers';
import TeamMember from "../../components/Team/home-one/Member";
import Job from "../../components/Careers/Job";

const CareerDetails = () => {
    return (
        <div className="team-page-area-wrapper bg-offwhite sp-y sm-top">
            <div className="container">
                <div className="row mtn-30">
                    {
                        Careers.map(jobs=>(
                            <Job id={jobs.id} name={jobs.name} description={jobs.description}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CareerDetails;