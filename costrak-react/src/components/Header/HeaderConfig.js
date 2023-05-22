import React from 'react';

const HeaderConfig = () => {

    /*
    const LoginRegHandler = () => {
        const offCanvasConfig = document.querySelector('.off-canvas-cog');
        offCanvasConfig.classList.add('active');
        document.querySelector('body').classList.add('fix');
    }
    */


    const MobileMenuHandler = () => {
        const offCanvasMenu = document.querySelector('.off-canvas-menu');
        offCanvasMenu.classList.add('active');
    }

    return (
        <div className="header-action mt-lg-3 text-right">
            <a href="tel:212-880-2657" className="tel-no">+212-880-2657</a>
            <button onClick={MobileMenuHandler} className="btn-menu d-lg-none"><i className="fa fa-bars"/></button>
        </div>
    );
}

export default HeaderConfig;