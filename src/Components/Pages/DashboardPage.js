import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chart from './Chart';
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//icon
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SchoolIcon from '@material-ui/icons/School';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import Facebook from '../../icons/Facebook.svg';
import Googleplus from '../../icons/Googleplus';
import Linkedin from '../../icons/Linkedin';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:'20px',
    marginLeft:'30px',
    marginRight:'40px',
    padding:'15px',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  social:{
      height:'90px',
      width:'265px',
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center'
      
  },
  users:{
    height:'80px',
    width:'265px',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center'
},
vr:{
  borderLeft:'1px solid gray',height:'60px',
},
vrSocial:{
  borderLeft:'1px solid white',
  height:'60px',
  color:'white',
  zIndex:99
},
socialText:{
  color:'white',
  fontSize:'24px',
  fontWeight:'bold'
}
}));


export default function DashboardPage() {
  const [value, setValue] = useState(new Date());
  const classes = useStyles();
  const onChange=()=>{
    setValue(value);
  }
  return (
    <div className={classes.root}>
      <div style={{flex:1}}>
      <Grid container spacing={2}>
           <Grid  item xs={12} sm={6}>
            <Paper className={`${classes.paper} ${classes.users}`}>
              <div>
              <SchoolIcon fontSize={'large'} style={{color:'#72dc72'}}/>
              <p>Students</p>
              </div>
              <div className={classes.vr}></div>
             <p>50000</p>
            </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
            <Paper className={`${classes.paper} ${classes.users}`}>
              <div>
                <SupervisorAccountIcon fontSize={'large'} style={{color:'#dc7990'}}/>
              <p>Parents</p>
              </div>
              <div className={classes.vr}></div>
             <p>50000</p>
            </Paper>
            </Grid>

            <Grid item xs={12} sm={12}>
              <Paper
              style={{height:'200px',width:'575px'}} 
              className={classes.paper}>
                    <Chart/>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
            <Paper style={{height:'290px',width:'575px',alignItems:'center'}} className={classes.paper}>
              <Calender
                onChange={onChange}
                value={value}
              />
            </Paper>
            </Grid>
        </Grid>
      </div>
       <div style={{flex:1,paddingLeft:'20px'}}>
       <Grid container spacing={2}>
           <Grid item xs={6} sm={6}>
            <Paper className={`${classes.paper} ${classes.users}`}>
            <div>
              <GroupAddIcon fontSize={'large'} style={{color:'#30bee9',}}/>
              <p>Teachers</p>
              </div>
              <div className={classes.vr}></div>
             <p>50000</p>
            </Paper>
            </Grid>

            <Grid item xs={6} sm={6}>
            <Paper className={`${classes.paper} ${classes.users}`}>
            <div>
              <LocalAtmIcon fontSize={'large'} style={{color:'#edd05f'}}/>
              <p>Total Earn</p>
              </div>
              <div className={classes.vr}></div>
             <p>50000</p>
            </Paper>
            </Grid>

            <Grid item xs={6} sm={6}>
            <Paper className={`${classes.paper} ${classes.social}`}
             style={{
               backgroundImage:' radial-gradient(rgba(59,89,152,.8),rgba(59,89,152, 1) '}}
            >
              <img src={Facebook} alt="Logo" style={{height:'30px',color:'white',zIndex:99}} />
              <div className={classes.vrSocial}></div>
              <p className={classes.socialText}>2000</p>
            </Paper>
            </Grid>

            <Grid  item xs={6} sm={6}>
              <Paper  className={`${classes.paper} ${classes.social}`}
               style={{
               backgroundImage:' linear-gradient(to right,rgba(0, 153, 255,.8),rgba(0, 153, 255, 1) '}}
              >
                <TwitterIcon fontSize={'large'} style={{color:'white'}} />
                <div className={classes.vrSocial}></div>
                  <p className={classes.socialText}>2000</p>
              </Paper>
            </Grid>

            <Grid item xs={6} sm={6}>
            <Paper className={`${classes.paper} ${classes.social}`} style={{
              backgroundImage:' linear-gradient(to right, rgba(219, 74, 57, 1), rgba(219, 74, 57,0.86))'
              }} >
              <Googleplus style={{height:'40px',color:'white',zIndex:99}} />
              <div className={classes.vrSocial}></div>
              <p className={classes.socialText}>2000</p>
            </Paper>
            </Grid>
            <Grid item xs={6} sm={6}>
            <Paper className={`${classes.paper} ${classes.social}`} style={{
              backgroundImage:' linear-gradient(to right, rgba(54, 162, 235, 1), rgba(14, 118, 168,0.8))'
              }} >
              <Linkedin style={{height:'40px',color:'white',zIndex:99}} />
              <div className={classes.vrSocial}></div>
              <p className={classes.socialText}>2000</p>
            </Paper>
            </Grid>
            <Grid item xs={6} sm={6}>
            <Paper style={{height:'290px',width:'265px'}} className={classes.paper}>xs=6 sm=6</Paper>
            </Grid>
            <Grid item xs={6} sm={6}>
            <Paper style={{height:'290px',width:'265px'}} className={classes.paper}>xs=6 sm=6
           </Paper>
            </Grid>
        </Grid>
       </div>
        
    </div>
  );
}