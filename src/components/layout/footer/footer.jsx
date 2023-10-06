import React from 'react';
import classes from './footer.module.css';

const Footer = () => {
    return (
        <div className={classes.footerBG + ' bg-content'}>
            <div className='conteiner mx-auto'>
                <div className={classes.footerContent}>
                    <div className={classes.footerCopyright}>© 2023 Weather.com, Inc</div>
                    <div className={classes.socialLinkField}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;