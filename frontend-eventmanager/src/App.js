import React, { useState, useEffect } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import Layout from './components/Layout'; 
import { getEvents, createEvent, deleteEvent } from './services/EventService';

const App = () => {
    const [events, setEvents] = useState([]);
    const [eventToEdit, setEventToEdit] = useState(null);

    const fetchEvents = async () => {
        try {
            const events = await getEvents();
            setEvents(events);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleCreateEvent = async (eventData) => {
        try {
            await createEvent(eventData);
            fetchEvents(); 
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    const handleDeleteEvent = async (eventId) => {
        try {
            await deleteEvent(eventId);
            fetchEvents(); 
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    return (
        <Layout>
            <EventForm fetchEvents={fetchEvents} eventToEdit={eventToEdit} setEventToEdit={setEventToEdit} onCreateEvent={handleCreateEvent} />
            <EventList events={events} fetchEvents={fetchEvents} setEventToEdit={setEventToEdit} onDeleteEvent={handleDeleteEvent} />
        </Layout>
    );
};

export default App;
