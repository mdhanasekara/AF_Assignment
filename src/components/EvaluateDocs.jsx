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
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, Checkbox } from '@mui/material';
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

const EvaluateDocs = () => {
const [topics,setTopics] = useState([]);
const [newData, setNewData] = useState({
    name:"",
    description:"",
    status:""
})
let navigate = useNavigate(); 


useEffect(()=>{
    getData();
},[])

    const getData = async () => {
      const result = await axios.get("http://localhost:8000/allMarkingSchema");
      setTopics(result.data.existingMarkingSchema);
    console.log(result)
    }

    const submitData = () => {
        // const newUser = {
        //     name,
        //     description,
        //     accept,
        //     decline
        // }
        // axios.post("http://localhost:8000/AcceptedTopics/save", newUser).then(()=>{
        //     alert("success")
        // }).catch((err)=>{
        //     alert(err)
        // });
        alert("Succssfully Saved");
    }

    const DeclineTopic= (id) => {
        alert("declien"+ id)
    }

    return(
        <><SupervisorNavBar /><TableContainer component={Paper} style={{ marginTop: "90px" }}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="right">Title</StyledTableCell>
                                <StyledTableCell align="right">Description</StyledTableCell>
                                <StyledTableCell align="right">Marks</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {topics.map((topic) => (
                                <StyledTableRow key={topic.title}>
                                    <StyledTableCell component="th" scope="row">
                                        {topic.title}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{topic.description}</StyledTableCell>
                                    <StyledTableCell align="right">{topic.marks}</StyledTableCell>
                                      
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                        </>)

}

export default EvaluateDocs;