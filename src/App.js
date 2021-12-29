
import { makeStyles } from '@material-ui/core';
import './App.css';
import DashboardPage from './Components/Pages/DashboardPage';
import Header from './Components/Header';
import Sidemenu from './Components/Sidemenu';
import StudentList from './Components/Pages/StudentList';
import CourseFees from './Components/Pages/CourseFees';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Payments from './Components/Pages/Payments';
import StudentsFee from './Components/Pages/StudentsFee';
import PaymentsReport from './Components/Pages/PaymentsReport';
import PopsUp from './Components/Pages/PopsUp';
const useStyles=makeStyles({
  appMain:{
    paddingLeft:'250px',
    width:'100%'
  }
})

function App() {
  const classes= useStyles();
  return (
    <Router>
  
    <div style={{display:'flex'}}>
      <Sidemenu />
      
      <div className={classes.appMain}>
        <Header />
       <Switch>
            <Route path="/coursefees" component={CourseFees} />
            <Route path="/studentsfee" component={StudentsFee} />
            <Route path="/studentfees/:id" component={PopsUp} />
            <Route path="/payments" component={Payments} />
            <Route path="/paymentsreport" component={PaymentsReport} />
            <Route path="/student" component={StudentList} />
            <Route path="/" component={DashboardPage} />
      
        </Switch>
          
         
      </div>
    </div>
    </Router>
  );
}

export default App;
