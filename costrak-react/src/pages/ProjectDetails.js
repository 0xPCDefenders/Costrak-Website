import React,{Fragment} from 'react';
import Header from "../components/Header";
import ProjDet from "../templates/ProjectDetails/index";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import BrandLogo from "../components/BrandLogo";

const ProjectDetails = () => {
    return (
        <Fragment>
            <Header/>
            <ProjDet/>
            {/*<BrandLogo/>*/}
            <Funfact/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default ProjectDetails;