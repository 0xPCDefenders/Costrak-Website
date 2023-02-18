import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/page";
import TeamMember from '../templates/Team'
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/about.jpg'

const PageTeam = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/page-header.jpg')}
                title="About Costrak Consulting LLC."
                content="Costrak Consulting LLC ensures that every project is completed on time, within budget, and to the satisfaction of our clients. We use state-of-the-art project management tools and techniques to ensure that every project is efficiently managed from start to finish."
            />
            <About
                title={'Our Team'}
                heading="Meet Our <br/> Expert Member"
                thumb={ServiceThumb}
                content="Costrak Consulting is made up of experienced employees who can provide and manage construction cost services in most sectors of theconstruction industry that include Residential, Hotel, Commercial, Cultural, Institutional, Healthcare, and Infrastructure facilities for prospective building owners, architects, government agencies, lenders, and developers."
            />
            <TeamMember/>
            {/*<BrandLogo/>*/}
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageTeam;