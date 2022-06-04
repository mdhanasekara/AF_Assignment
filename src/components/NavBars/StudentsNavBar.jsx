import { AppBar, Toolbar, styled } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background:#111111;
`
const P = styled(NavLink)`
    font-size:15px;
    margin-right:20px;
    text-decoration:none;
    color:white;
`


const StudentsNavBar = () => {
    return(

        <Header>
            <Toolbar>
                <P to="/createStudentGroups">Create Student Groups</P>
                <P to="/registerTopic">Register Topic</P>
                 <P to="/requestSupervisor">Request Supervisor</P>
                <P to="/requestCoSupervisor">Request co-Supervisor</P>
                <P to="/UploadStudent">Upload Documents</P>
                <P to="/">Logout</P>

                {/*<P>Download Templates</P> */}
            </Toolbar>
        </Header>  
      )
}

export default StudentsNavBar;