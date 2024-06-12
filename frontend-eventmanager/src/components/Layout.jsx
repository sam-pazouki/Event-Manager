import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Event Manager
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container style={{ marginTop: '2rem' }}>
                {children}
            </Container>
        </>
    );
};

export default Layout;
