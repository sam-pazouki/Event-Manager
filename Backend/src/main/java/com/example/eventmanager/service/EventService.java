package com.example.eventmanager.service;

import com.example.eventmanager.entity.Event;
import com.example.eventmanager.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    public Event createEvent(Event event) {
        if (event.getDataInicial().isAfter(event.getDataFinal())) {
            throw new IllegalArgumentException("A data de início deve ser anterior à data de término.");
        }
        event.setAtivo(false);
        return eventRepository.save(event);
    }

    public void checkAndUpdateEventStatus() {
        LocalDateTime now = LocalDateTime.now();
        List<Event> events = eventRepository.findAll();
        for (Event event : events) {
            if (now.isAfter(event.getDataInicial()) && now.isBefore(event.getDataFinal())) {
                event.setAtivo(true);
            } else {
                event.setAtivo(false);
            }
            eventRepository.save(event);
        }
    }

    public List<Event> getAllEvents() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllEvents'");
    }

    public Event getEventById(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getEventById'");
    }

    public Event updateEvent(Long id, Event eventDetails) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateEvent'");
    }

    public void deleteEvent(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteEvent'");
    }
}
