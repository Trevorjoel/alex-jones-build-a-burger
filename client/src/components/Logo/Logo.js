import React from "react";
import classes from './Logo.module.css';
import burgerLogo from '../../assets/original.png';
const logo = (props) =>(
    <div className={classes.Logo} style={{height: props.height}}><img alt="logo" src={burgerLogo}/></div>
);
export default logo;