package com.example.eventmanager.scheduler;

import com.example.eventmanager.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class EventScheduler {
    @Autowired
    private EventService eventService;

    @Scheduled(fixedRate = 60000) 
    public void checkEventStatus() {
        eventService.checkAndUpdateEventStatus();
    }
}
