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

    const [user, setUser] = useState({
        firstName:"",
        lastName:"",
        email:""
    });

    const {firstName,lastName,email} = user;

    useEffect(()=>{
        loadUser();
    },[]);


    const onInputChange = e => {
        setUser({...user, [e.target.name]:e.target.value});
    }

    const onSubmit = async e =>{
        await axios.put(`http://localhost:8000/users/update/${id}`, user);
        let path1 = `/ViewUsers`; 
      navigate(path1);   
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8000/users/update/${id}`);
        setUser(result.data.existingUsers);
    }

    return(
        <><AdminNavBar /><Container>
            <Typography variant='h4'>Edit User</Typography>
            <FormControl>
                <InputLabel>First Name</InputLabel>
                <Input name="firstName" onChange={onInputChange} />
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input name="lastName" onChange={onInputChange} />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input name="email" onChange={onInputChange} />
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input name="password" type="password" onChange={(e) => { setPassword(e.target.value); } } />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={onSubmit}>Update User</Button>
            </FormControl>
        </Container></>
    )

}

export default EditUser;