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
import CareerComponent from "../components/Careers";

import ServiceThumb from '../assets/img/about.jpg'

const Careers = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/page-header.jpg')}
                title="Careers at Costrak Consulting LLC."
                content="Costrak Consulting LLC currently has no positions open for hire! Please see below for more information."
            />
            <CareerComponent/>
            {/*<BrandLogo/>*/}
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default Careers;