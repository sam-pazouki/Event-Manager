package com.example.eventmanager.service;

import com.example.eventmanager.model.Event;
import com.example.eventmanager.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event updateEvent(Long id, Event eventDetails) {
        Event event = eventRepository.findById(id).orElseThrow();
        event.setNome(eventDetails.getNome());
        event.setDataInicial(eventDetails.getDataInicial());
        event.setDataFinal(eventDetails.getDataFinal());
        event.setAtivo(eventDetails.getAtivo());
        event.setInstitution(eventDetails.getInstitution());
        return eventRepository.save(event);
    }

    public void deleteEvent(Long id) {
        Event event = eventRepository.findById(id).orElseThrow();
        eventRepository.delete(event);
    }

    public void checkAndActivateEvents() {
        List<Event> events = eventRepository.findAll();
        LocalDateTime now = LocalDateTime.now();
        for (Event event : events) {
            if (!event.getAtivo() && ((Event) event).getDataInicial().isBefore(now) && event.getDataFinal().isAfter(now)) {
                event.setAtivo(true);
                eventRepository.save(event);
            } else if (event.getAtivo() && event.getDataFinal().isBefore(now)) {
                event.setAtivo(false);
                eventRepository.save(event);
            }
        }
    }

    public void checkAndUpdateEventStatus() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'checkAndUpdateEventStatus'");
    }
}
