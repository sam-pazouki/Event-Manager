import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const EventForm = () => {
    const [event, setEvent] = useState({
        name: '',
        institution: '',
        dataInicial: '',
        dataFinal: ''
    });

    // Função para lidar com mudanças nos campos de entrada
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({ ...event, [name]: value });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/events', event);
            console.log('Evento criado:', response.data);
            // Resetar o estado do formulário após a criação do evento
            setEvent({
                name: '',
                institution: '',
                dataInicial: '',
                dataFinal: ''
            });
        } catch (error) {
            console.error('Houve um erro ao criar o evento!', error);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Criar um Evento
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Nome do Evento"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={event.name}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="institution"
                        label="Instituição"
                        name="institution"
                        autoComplete="institution"
                        value={event.institution}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="dataInicial"
                        label="Data e Hora de Início"
                        name="dataInicial"
                        type="datetime-local"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={event.dataInicial}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="dataFinal"
                        label="Data e Hora de Término"
                        name="dataFinal"
                        type="datetime-local"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={event.dataFinal}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Criar Evento
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default EventForm;
