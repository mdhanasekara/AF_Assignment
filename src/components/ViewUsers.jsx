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

const ViewUsers = () => {
const [users,setUsers] = useState([]);
const [isPut, setIsPut] = useState(false);
const [newData, setNewData] = useState({
    firstName:"",
    lastName:"",
    id:""
})
let navigate = useNavigate(); 


useEffect(()=>{
    getData();
},[])

    const getData = async () => {
      const result = await axios.get("http://localhost:8000/allUsers");
      setUsers(result.data.existingUsers);
    }

    const moveUpdate = () => {
          let path1 = `/editUser`; 
          navigate(path1);  
        
      }

      const deleteItem = (id) =>{
          axios.delete('http://localhost:8000/users/delete/' + id);
          alert("deleted")
          getData();
      }

      const openUpdate = (id) => {
        let path1 = `/editUser/`+id; 
          navigate(path1); 
      }

      const handleUpdate = (event) => {
        const { name, value } = event.target;
        setNewData((prevInput) => {
          return {
            ...prevInput,
            [name]: value,
          };
        });
      }

      const updateData =(id) => {
          axios.put("http://localhost:8000//users/update/" +id, newData);
          alert("updated successfully");
      }
    return(
        <><AdminNavBar /><TableContainer component={Paper} style={{ marginTop: "20px" }}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="right">First Name</StyledTableCell>
                                <StyledTableCell align="right">Last Name</StyledTableCell>
                                <StyledTableCell align="right">Emails</StyledTableCell>
                                <StyledTableCell align="right">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <StyledTableRow key={user.firstName}>
                                    <StyledTableCell component="th" scope="row">
                                        {user.firstName}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{user.lastName}</StyledTableCell>
                                    <StyledTableCell align="right">{user.email}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button style={{ marginRight: '10px' }} onClick={() => { openUpdate(user._id); } }>Update</Button>

                                        <Button variant="contained" onClick={() => deleteItem(user._id)}>Delete</Button>
                                    </StyledTableCell>

                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer></>)

}

export default ViewUsers;