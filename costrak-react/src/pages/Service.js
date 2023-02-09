import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageAbout from "../components/About/page";
import Services from "../components/Services";
import Projects from "../components/Projects"; 
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials/home-two";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/about.jpg'

const PageService = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/page-header.jpg')}
                title="OUR SERVICES"
                content="Our goal is to deliver Excellent Service to our Clients by applying our Knowledge, Skills and Experience by giving them an Honest Assessment that ensures Accuracy and Timely Delivery of Client’s Outlined Goals and Timelines."
            />
            <PageAbout
                title={'Our Services'}
                heading="Provide best <br/> Business Solutions"
                thumb={ServiceThumb}
                content="During the design stage we provide cost planning services to maintain an alignment between project requirements, the design and funding availability. We do this on behalf of the owner or the design team. We understand the connection between schedule, quality, program and cost, and use that to provide our clients with practical, thorough advice that leads to the best possible cost outcomes."
            />
            <Services classes="sm-top"/>
            <Projects classes = "sm-top"/>
            {/*<PricingTable/>*/}
            {/*<Testimonial/>*/}
            {/*<BrandLogo/>*/}
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageService;