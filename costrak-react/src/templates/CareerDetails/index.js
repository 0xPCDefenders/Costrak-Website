import React,{Fragment} from 'react';
import PageWrapper from "../../components/PageWrapper";
import MemberInfo from "./MemberInfo";
import Careers from '../../data/Careers/careers.json'
import PageHeader from "../../components/PageHeader";

const CareerDetailsPage = () => {
    const memberID = new URLSearchParams(window.location.search).get("id");
    const job = Careers.find(member=> member.id === parseInt(memberID));
    return (
        <Fragment>
            <PageHeader
                bgImg={require('../../assets/img/page-header.jpg')}
                title={job.name}
                content=""
            />

            <PageWrapper classes={'member-details-wrapper sm-top'}>
                <div className="col-12">
                    <MemberInfo job={job}/>
                    <h5>{job.description}</h5>
                    <h6><strong>Salary:</strong> {job.salary}</h6>
                    <h6><strong>Contact Info:</strong> {job.contact}</h6>
                    <h6><strong>Location:</strong> {job.location}</h6>
                </div>
            </PageWrapper>
        </Fragment>
    );
};

export default CareerDetailsPage;