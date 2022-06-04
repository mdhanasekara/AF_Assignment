import React,{useState} from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import axios from 'axios';
import AdminNavBar from './NavBars/AdminNavBar';
import { useNavigate,useParams} from 'react-router-dom';


const Container = styled(FormGroup)`
    width:50%;
    margin: 5% 30%;
    & > div {
        margin-top:20px;
    }
`
const EditUser = () => {
    const {id} = useParams();

   

    return(
        <><AdminNavBar /><Container>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>First Name</InputLabel>
                <Input name="firstName"/>
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input name="lastName"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" >Update User</Button>
            </FormControl>
        </Container></>
    )

}

export default EditUser;