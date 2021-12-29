import { withStyles, makeStyles } from '@material-ui/core/styles';

import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import studentData from '../../BackEnd/studentData';
import '../../index.css';
import { Button } from '@material-ui/core';
import { ToWords } from 'to-words';

import Receipt from '../Receipt';

  const useStyles = makeStyles({
    table: {
      minWidth: 200,
    },
  });

export default function PopsUp(props) {
    console.log(props.match.params.id);
    const [modelIsOpen,setModelOpen] = useState(true);
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
      const view=studentData.find(x=>x._id===props.match.params.id);
     
return (
<Modal 
            style={{display:'flex',flexDirection:'row'}}
            style={customStyles}
            isOpen={modelIsOpen}
          >
      <div id='divName' style={{width:'900px',display:'flex',justifyContent:'space-between'}} className="container-fluid">
                <Receipt
                            name={view.name}
                            id={view._id}
                            copy="Institute Copy"
                            due={view.fee.due}
                            paid={view.fee.paid}
                            payble={view.fee.payble}
                            
                        />
                      <div className="vr-dot"></div>
                        <Receipt
                            name={view.name}
                            id={view._id}
                            copy="Student Copy"
                            due={view.fee.due}
                            paid={view.fee.paid}
                            payble={view.fee.payble}
                        />
                      </div>
                      <div className="modal-footer row display py-1">
                        <div className="col-lg-12">
                          <Link to={'/studentsfee'} ><Button variant="contained" color="danger">Close</Button></Link>
                          <Button onClick={()=>{
                              var originalContents = document.body.innerHTML;
                                      var printContents = document.getElementById('divName').innerHTML;
                                      
                              
                                      document.body.innerHTML = printContents;
                              
                                      window.print();
                              
                                      document.body.innerHTML = originalContents;
                          }} variant="contained" color="danger">Print</Button>
                        </div>
                      </div>
                
                    <div id="msg">
                  <pre></pre>
              </div>
  
          
  </Modal>
)
}
