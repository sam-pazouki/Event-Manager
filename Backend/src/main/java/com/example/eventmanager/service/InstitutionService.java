package com.example.eventmanager.service;

import com.example.eventmanager.entity.Institution;
import com.example.eventmanager.repository.InstitutionRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InstitutionService {
    @Autowired
    private InstitutionRepository institutionRepository;

    public Institution createInstitution(Institution institution) {
        return institutionRepository.save(institution);
    }

    public List<Institution> getAllInstitutions() {
        return institutionRepository.findAll();
    }
}
