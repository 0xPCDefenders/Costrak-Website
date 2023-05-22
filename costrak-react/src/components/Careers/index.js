import React from 'react';
import SectionTitle from "./../UI/SectionTitle";
import Job from "./Job";
import teamBg from './../../assets/img/team/team-bg.jpg';
import Careers from './../../data/Careers/careers';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

const getLargestId = () => {
    let largestId = 0;
    Careers.forEach(job => {
        if (job.id > largestId) {
            largestId = job.id;
        }
    });
    return largestId;
}
function CareerComponent() {
    return (
        <div className="team-area-wrapper bg-img sp-y" style={{backgroundImage: `url(${teamBg})`}}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <SectionTitle variant="light" title= {"Open Positions: (" + getLargestId() + ")"}
                                      heading="We have no open <br /> positions right now."
                                      text=""
                        />
                    </div>

                    <div className="col-lg-8">
                            {
                                Careers.map(jobs => (
                                    <li>
                                    <div key={jobs.id}>
                                        <Job id={jobs.id} name={jobs.name} description={jobs.description}/>
                                        <ColoredLine color="white" />
                                    </div>
                                    </li>
                                ))

                            }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CareerComponent;