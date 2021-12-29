import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import studentData from '../../BackEnd/studentData'
import { Button, InputBase, TablePagination, TextField } from '@material-ui/core';
import Modal from 'react-modal';
import jsonfile from 'jsonfile';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  TextField:{
    margin:'10px'
  }
 
}));

const customStyles = {
  content : {
    display:'flex',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var movies=[];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addMovie = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let movie = {
        id: Date.now(),
        title: document.getElementById('name').value,
        year: document.getElementById('class').value
    }
    const file = './data.json';
    
 
    jsonfile.writeFile(file,movie, function (err) {
      alert('done');
      if (err) console.error(err)
    })
    studentData.push(movie);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {studentData} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(movie, '\t', 2);
     //saving to localStorage
     localStorage.setItem('mov', JSON.stringify(movies) );

    //saving to localStorage
  
}



export default function StudentList() {
    const classes = useStyles();
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = event => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, studentData.length - page * rowsPerPage);
  
    return (
        <div style={{margin:'50px'}}>
          <Modal
          style={customStyles}
          isOpen={modalIsOpen}
        >
          
             <form  className={classes.root} noValidate autoComplete="off">
             <h1 style={{borderBottom:'2px solid gray'}}>New Student Addmision</h1>
              <TextField style={{margin:'8px'}} id="name" label="Standard" fullWidth />
              <TextField style={{margin:'8px'}} id="class" label="Standard" fullWidth />
              <TextField style={{margin:'8px'}} id="standard-basic" label="Standard" fullWidth />
              <TextField style={{margin:'8px'}} id="standard-basic" label="Standard" fullWidth />
              <Button onClick={()=>setIsOpen(false)} variant="contained" color="danger">Close</Button>
              <Button onClick={addMovie} variant="contained" color="danger">add</Button>
                  <div id="msg">
                <pre></pre>
            </div>
            </form>
          </Modal>
          {/* <p>Student List</p> */}
           <Paper style={{display:'flex', justifyContent:'space-between',padding:'20px'}}>

            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <Button onClick={()=>setIsOpen(true)} variant="contained" color="primary">
            + New
            </Button>
          </Paper>
            <TableContainer  component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell align='center'>ID</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Contact No.</TableCell>
                    <TableCell align="left">E-mail</TableCell>
                    <TableCell align="left">Address</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {studentData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
                    <TableRow key={row.id}>
                    
                    <TableCell component="th" scope="row" align='center'>
                        {row.id}
                    </TableCell>
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.contact}</TableCell>
                    <TableCell align="left">{row.Email}</TableCell>
                    <TableCell align="left">{row.add}</TableCell>
                    
                    </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
                </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={studentData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            </TableContainer>
            </div>
    )
}
