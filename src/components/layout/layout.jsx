import React from 'react';
import Header from "./header/header";
import Body from "./body/body";
import Footer from "./footer/footer";
import classes from "./layout.module.css";

const Layout = () => {
    return (
        <div className={classes.wrapper}>
           <Header/>
           <Body/>
           <Footer/>
        </div>
    );
};

export default Layout;