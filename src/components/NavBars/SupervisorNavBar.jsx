import { AppBar, Toolbar, styled } from '@mui/material';
import React from 'react';

const Header = styled(AppBar)`
background:#111111;
`
const P = styled('p')`
    font-size:15px;
    margin-right:20px;
`


const StudentsNavBar = () => {
    return(

        <Header>
            <Toolbar>
                <P>Accept Topics</P>
                <P>Chat</P>
                <P>Evaluate Documents</P>
                <P>Evaluate Topics</P>
                <P>Evaluate presentations</P>
            </Toolbar>
        </Header>  
      )
}

export default StudentsNavBar;