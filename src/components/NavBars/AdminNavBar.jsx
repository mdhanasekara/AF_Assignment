import { AppBar, Toolbar, styled } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background:#111111;
`
const P = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    text-decoration:none;
    color:white;
`


const AdminNavBar = () => {
    return(

        <Header position='static'>
            <Toolbar>
                <P to='/viewUser'>View Users</P>
                <P to='/AddSubmissionType'>Create Submission Types</P>
                <P to='/AllocatePanel'>Allocate Panel Members</P>
                <P to='/CreateMaarkingScheme'>Create Marking Scheme</P>
                <P to='/UploadAdmin'>Upload</P>
                <P to="/">Logout</P>

            </Toolbar>
        </Header>  
      )
}

export default AdminNavBar;