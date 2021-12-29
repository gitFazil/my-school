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

import { Button, InputBase, TablePagination } from '@material-ui/core';

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

export default function PaymentsReport() {
    const classes = useStyles();

  
    return (
        <div style={{margin:'50px'}}>
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
                    <TableCell align='left'>Date</TableCell>
                    
                    <TableCell align="left">Er No.</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Paid Amount</TableCell>
                    <TableCell align="center">Remarks</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {studentData
            .map((row) => (
                    <TableRow key={row.id}>
                    <TableCell component="th" scope="row" align='center'>
                        {row.id}
                    </TableCell>
                    
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.contact}</TableCell>
                    <TableCell align="left">{row.contact}</TableCell>
                    <TableCell align="left">{row.contact}</TableCell>
                    <TableCell align="center">
                    {row.contact}
                    </TableCell>
                 </TableRow>
                ))}
                </TableBody>
               
            </Table>
            </TableContainer>
            <Paper style={{display:'flex', justifyContent:'space-between',padding:'20px',height:'80px'}}>
                <Button style={{position:'absolute',left:'48%',width:'300px',backgroundColor:'#218838'}}  size="small" variant="contained" color="primary">
           Print
            </Button>
            </Paper>
            </div>
    )
}
