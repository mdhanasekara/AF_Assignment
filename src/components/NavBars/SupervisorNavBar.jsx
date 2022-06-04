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


const SupervisorNavBar = () => {
    return(

        <Header>
            <Toolbar>
                <P to="/acceptTopics">Accept Topics</P>
                <P to="/markingSchemas">Marking Schemas</P>
                <P to="/">Logout</P>
                {/* <P>Chat</P>
                <P>Evaluate Topics</P>
                <P>Evaluate presentations</P> */}
            </Toolbar>
        </Header>  
      )
}

export default SupervisorNavBar;