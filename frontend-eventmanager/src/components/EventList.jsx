import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const EventList = ({ events, onDelete }) => {
    return (
        <TableContainer component={Paper} style={{ marginTop: '2rem' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Event Name</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>End Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {events.map((event) => (
                        <TableRow key={event.id}>
                            <TableCell>{event.name}</TableCell>
                            <TableCell>{event.startDate}</TableCell>
                            <TableCell>{event.endDate}</TableCell>
                            <TableCell>{event.active ? 'Active' : 'Inactive'}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="secondary" onClick={() => onDelete(event.id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EventList;
