import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import { Divider } from '@material-ui/core';
import { ListItem, ListItemIcon } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import SchoolIcon from '@material-ui/icons/School';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Link } from 'react-router-dom';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MoneyIcon from '@material-ui/icons/Money';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "#253053",
    color:'#fff'
  },
  link:{textDecoration:'none',color:'white'},
  nested: {
    paddingLeft: theme.spacing(4),
    backgroundColor:'#172245'
  },
  icon:{
      color:'#e3bf0e',
  },
  header:
  {backgroundColor:'#e3bf0e',height:'50px',
  color:'white',fontSize:'30px',fontWeight:'bold',
  alignItems:'center'
}
}));

export default function SideList() {
  const classes = useStyles();
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader className={classes.header} component="div" id="nested-list-subheader">
          My School
        </ListSubheader>
      }
      className={classes.root}
    >
      <Divider/>
      <ListItem button >
                <ListItemIcon>
                <DashboardIcon className={classes.icon} />
                </ListItemIcon>
                <Link className={classes.link}  to="/">Dashboard</Link>
            </ListItem>
      <Divider/>
      <ListItem button >
                <ListItemIcon>
                <SchoolIcon className={classes.icon} />
                </ListItemIcon>
                <Link className={classes.link}  to="/student">Student</Link>
            </ListItem>
      <Divider/>
      <ListItem button >
                <ListItemIcon>
                <SupervisorAccountIcon className={classes.icon} />
                </ListItemIcon>
                <Link className={classes.link}  to="/parents">Parents</Link>
            </ListItem>
      <Divider/>      
      <ListItem button >
                <ListItemIcon>
                <MoneyIcon className={classes.icon} />
                </ListItemIcon>
                <Link className={classes.link}  to="/studentsfee">Student Fees</Link>
            </ListItem>
      <Divider/>
      <ListItem button >
                <ListItemIcon>
                <AccountBalanceWalletIcon className={classes.icon} />
                </ListItemIcon>
                <Link className={classes.link}  to="/payments">Payments</Link>
            </ListItem>
      <Divider/>  
      <ListItem button >
                <ListItemIcon>
                <AssignmentTurnedInIcon className={classes.icon} />
                </ListItemIcon>
                <Link className={classes.link}  to="/courseFees">Course & Fees</Link>
            </ListItem>
      <Divider/> 
      <ListItem button >
                <ListItemIcon>
                <AssessmentIcon className={classes.icon} />
                </ListItemIcon>
                <Link className={classes.link}  to="/paymentsreport">Payments Report</Link>
            </ListItem>
      <Divider/> 
      <ListItem button >
                <ListItemIcon>
                <AccountCircleIcon className={classes.icon} />
                </ListItemIcon>
                <Link className={classes.link}  to="/">Users</Link>
            </ListItem>
      <Divider/> 

    </List>
  );
}