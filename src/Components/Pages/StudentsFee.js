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
import studentData from '../../BackEnd/studentData';
import Modal from 'react-modal';

import { Button, InputBase, TablePagination, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
  button:{
    marginRight:'10px',
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
}));



export default function StudentsFee() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [modelIsOpen, setIsOpen] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const view=(x)=>{
      // setIsOpen(true);
    }
  
    const handleChangeRowsPerPage = event => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, studentData.length - page * rowsPerPage);
      
  
    return (
        <div style={{margin:'50px'}}>

             
                {/* <Modal
                          style={customStyles}
                          isOpen={modelIsOpen}
                        >

                            <form  className={classes.root} noValidate autoComplete="off">
                            <h1 style={{borderBottom:'2px solid gray'}}>New Student Addmision</h1>
                              <TextField style={{margin:'8px'}} id="name" label="Standard" fullWidth />
                              <TextField style={{margin:'8px'}} id="class" label="Standard" fullWidth />
                              <TextField style={{margin:'8px'}} id="standard-basic" label="Standard" fullWidth />
                              <TextField style={{margin:'8px'}} id="standard-basic" label="Standard" fullWidth />
                              <Button onClick={()=>setIsOpen(false)} variant="contained" color="danger">Close</Button>
                              <Button variant="contained" color="danger">add</Button>
                                  <div id="msg">
                                <pre></pre>
                            </div>
                            </form>
                 </Modal> */}
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
            <Button variant="contained" color="primary">
            + New
            </Button>
          </Paper>
            <TableContainer  component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Id No.</TableCell>
                            <TableCell align='left'>Name</TableCell>
                            <TableCell align="left">Er No.</TableCell>
                            <TableCell align="left">Payble Fee</TableCell>
                            <TableCell align="left">Paid Amount</TableCell>
                            <TableCell align="left">Balence</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
              <TableBody>
                {studentData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
                    <TableRow key={row._id}>
                    <TableCell component="th" scope="row" align='center'>
                        {row._id}
                    </TableCell>
                    
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.contact}</TableCell>
                    <TableCell align="left">{row.contact}</TableCell>
                    <TableCell align="left">{row.contact}</TableCell>
                    <TableCell align="left">{row.contact}</TableCell>
                    <TableCell align="center">
                        <Link to={'/studentfees/'+ row._id}>
                        <Button size='small' className={classes.button} variant="contained" color="primary" >
                        View
                        </Button></Link> 
                        <Button size='small' className={classes.button} variant="contained" color="primary" href="#contained-buttons">
                        Edit
                        </Button>
                        <Button size='small' className={classes.button} variant="contained" color="secondary">
                        Delete
                        </Button>
                        
                    </TableCell>
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
              rowsPerPageOptions={[9, 10, 25]}
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
