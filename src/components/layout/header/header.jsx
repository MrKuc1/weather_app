import React from 'react';
import classes from "./header.module.css";

const Header = () => {
    return (
        <div className={classes.headerField + " bg-content"}>
            <div className={classes.headerLogo}></div>
            <div className={classes.header}>
                <div className={classes.header + " conteiner" + " mx-auto"}>
                    <ul className={classes.navBar}>
                        <li className={classes.navBarButton}>
                            <a className={classes}>Home</a>
                        </li>
                        <li className={classes.navBarButton}>
                            <a className={classes}>Features</a>
                        </li>
                        <li className={classes.navBarButton}>
                            <a className={classes}>Pricing</a>
                        </li>
                        <li className={classes.navBarButton}>
                            <a className={classes}>FAQs</a>
                        </li>
                        <li className={classes.navBarButton}>
                            <a className={classes}>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;