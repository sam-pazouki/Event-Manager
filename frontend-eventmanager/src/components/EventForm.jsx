import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Grid } from '@mui/material';

const EventForm = ({ fetchEvents, eventToEdit, setEventToEdit, onCreateEvent }) => {
    const { register, handleSubmit, reset, setValue } = useForm();

    useEffect(() => {
        if (eventToEdit) {
            setValue('name', eventToEdit.name);
            setValue('startDate', eventToEdit.startDate);
            setValue('endDate', eventToEdit.endDate);
        }
    }, [eventToEdit, setValue]);

    const onSubmit = async (data) => {
        await onCreateEvent(data);
        reset();
        setEventToEdit(null);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Event Name"
                        id="name"
                        {...register('name', { required: true })}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="Start Date"
                        type="date"
                        id="startDate"
                        {...register('startDate', { required: true })}
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="End Date"
                        type="date"
                        id="endDate"
                        {...register('endDate', { required: true })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default EventForm;
