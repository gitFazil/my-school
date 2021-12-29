
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useState } from 'react';
import { ToWords } from 'to-words';

import '../index.css';

import schoolIcon from '../icons/schoolIcon.png';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor:'white',
      color: theme.palette.common.black,
      borderBottom:'2px solid black',
      borderTop:'2px solid black',
    },
    body: {
      fontSize: 12,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(() => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: 'white',
      },
    },
  }))(TableRow);
  
  function createData(index, name, price,total) {
    total = total + price;
    return { index, name, price,total };
  }
  
  const rows = [
    createData('1', 'Tution',500),
    createData('2', 'Bus', 400),
    createData('3', 'Exam',100),
    createData('4', 'GST', 40),
    createData('5', 'Phone',10),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 200,
    },
  });

   const printDiv=(divName)=> {
    var originalContents = document.body.innerHTML;
        var printContents = document.getElementById(divName).innerHTML;
        
   
        document.body.innerHTML = printContents;
   
        window.print();
   
        document.body.innerHTML = originalContents;
   };
const gTotal = rows.reduce((total,item)=>{
return total+item.price;
},0);

const toWords = new ToWords();

      var words = toWords.convert(gTotal);

export default function Receipt(props) {
    const classes = useStyles();
    return (
        <TableContainer >
         <div style={{marginBottom:'50px',justifyContent:'space-around',}} className="flex">
            <div >
            <img style={{height:'100px'}} src={schoolIcon} alt="Logo" />
            </div>
            <div className="text-center" style={{marginTop:'20px'}} >
                <p><b>MySchool Public School </b></p>
                <p>Handia Ward No. 3 Town Area Allahabad</p>
                
            </div>
        </div>

    <p style={{border:'1px solid black',backgroundColor:'GrayText',padding:'5px'}} className="text-center"><b>Fees Reciept/Invoice: [{props.copy}]</b></p>
        <div style={{justifyContent:'space-between',marginTop:'10px',fontSize:'12px'}} className="flex">
            <div className="w-50">
                <p>EF. No: <b>{props.id}</b></p>
                <p>Student: <b>{props.name}</b></p>
                <p>Class: <b> U.K.G</b></p>
                <p>Section: <b>A</b></p>
            </div>
            <div >
                <p>Session: <b>2015-16</b></p>
                <p>Fees Period: <b>Apr-2015 to  may-2015</b></p>
                <p>Recipt No.: <b>33323</b></p>
                <p>Date: <b>3/4/2015 </b></p>
            </div>
        </div>
        <Table className={classes.table} size='small' aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>S. No.</StyledTableCell>
                <StyledTableCell align="left">Fee Head</StyledTableCell>
                <StyledTableCell align="right">Amount</StyledTableCell>
                
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <StyledTableRow key={row.price}>
                <StyledTableCell component="th" scope="row">
                    {row.index}
                </StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                </StyledTableRow>
                
                
            )) }
            </TableBody>
        </Table>
        <hr />
        <div style={{justifyContent:'space-between',fontSize:'12px'}} className="flex">
            <div className="w-50">
                <p>Amt in Words: <b>{words} Only.</b></p>
                
            </div>
            <div style={{alignItems:'right'}} >
                <p>Total: <b>{gTotal}/-</b></p>
                
            </div>
        </div>
        <hr/>
        <div style={{justifyContent:'space-between',fontSize:'12px'}} className="flex">
            <div className="w-50">
                <p>Payment Mode: <b>2020-654278</b></p>
                <p>Balence: <b>{props.payble-props.paid-gTotal}/-</b></p>
            </div>
            <div style={{alignItems:'right'}} >
                <p>REF#: <b></b></p>
                <p>REMARK: <b>2020-654278</b></p>
            </div>
        </div>
        <hr/>
        </TableContainer>    
    )
}
