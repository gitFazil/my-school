import React from 'react'
import {makeStyles,withStyles} from '@material-ui/core';
import SideList from './SideList';

// withStyles & makeStyles
const useStyles= makeStyles({
    SideMenu:{
        display:'flex',
        flexDirection:'column',
        position: 'fixed',
        left:'0px',
        width:'250px',
        height:'100%',
        backgroundColor:'#253053'
    }
})

export default function Sidemenu() {
    const classes= useStyles();
    return (
        <div className={classes.SideMenu}>
         <SideList />
        </div>
    )
}
