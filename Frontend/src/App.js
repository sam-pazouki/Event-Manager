
import React from 'react';
import EventForm from './components/EventForm';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const App = () => {
    return (
        <Container component="main">
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h4" gutterBottom>
                    Event Manager
                </Typography>
                <EventForm />
            </Box>
        </Container>
    );
};

export default App;
