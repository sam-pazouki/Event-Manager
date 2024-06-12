package com.example.eventmanager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class SchedulerService {
    @Autowired
    private EventService eventService;

    @Scheduled(fixedRate = 60000)
    public void checkEvents() {
        eventService.checkAndActivateEvents();
    }
}
