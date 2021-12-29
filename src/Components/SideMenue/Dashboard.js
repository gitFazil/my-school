import { Collapse, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React, { useState } from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import useStyles from './useStyle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {BrowserRouter, Link } from 'react-router-dom';

export default function Dashboard() {
    const classes = useStyles();
    const [open, setopen] = useState(false);
    const handleClick=()=>{
        setopen(!open);
    }

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                <DashboardIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText><Link to="/">Dashboard</Link></ListItemText>
                {open ? <ExpandMore />:<ChevronRightIcon />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    <ListItemIcon>
                    <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                </ListItem>
                </List>
            </Collapse> 
        </>
    )
}
