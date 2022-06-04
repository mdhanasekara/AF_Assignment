import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import styledEdit from '@emotion/styled';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AdminNavBar from './NavBars/AdminNavBar';
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from '@mui/material';
import SupervisorNavBar from './NavBars/SupervisorNavBar';


const Container = styled(FormGroup)`
    width:50%;
    margin: 5% 30%;
    & > div {
        margin-top:20px;
    }
`

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  


const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const AcceptedTopics = () => {
const [topics,setTopics] = useState([]);
const [newData, setNewData] = useState({
    name:"",
    description:"",
    status:"Accept"
})
let navigate = useNavigate(); 


useEffect(()=>{
    getData();
},[])

    const getData = async () => {
      const result = await axios.get("http://localhost:8000/allRegisterTopics");
      setTopics({
          status:"accepted"
      });
    
    }


    const AcceptTopic= (id) => {
        alert(newData.status)
        // setTopics({status:"accepted"});
        //getData();

        axios.put("http://localhost:8000/topic/update/" + id).then(()=>{
            alert("Pannel Added")
        }).catch((err)=>{
            alert(err)
        });
window.location.reload();       
    }

    const DeclineTopic= (id) => {
        alert("declien"+ id)
    }

    return(
        <><SupervisorNavBar /><TableContainer component={Paper} style={{ marginTop: "20px" }}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="right">Name</StyledTableCell>
                                <StyledTableCell align="right">Description</StyledTableCell>
                                <StyledTableCell align="right">status</StyledTableCell>
                                <StyledTableCell align="right">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {topics.map((topic) => (
                                <StyledTableRow key={topic.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {topic.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{topic.description}</StyledTableCell>
                                    <StyledTableCell align="right">{topic.status}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button variant="contained" onClick={() => AcceptTopic(topic._id)}>Accept</Button>
                                        <Button variant="contained" onClick={() => DeclineTopic(topic._id)}>Decline</Button>
                                    </StyledTableCell>

                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer></>)

}

export default AcceptedTopics;