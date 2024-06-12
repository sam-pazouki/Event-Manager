package com.example.eventmanager.service;

import com.example.eventmanager.model.Institution;
import com.example.eventmanager.repository.InstitutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstitutionService {
    @Autowired
    private InstitutionRepository institutionRepository;

    public List<Institution> getAllInstitutions() {
        return institutionRepository.findAll();
    }

    public Institution createInstitution(Institution institution) {
        return institutionRepository.save(institution);
    }

    public Institution updateInstitution(Long id, Institution institutionDetails) {
        Institution institution = institutionRepository.findById(id).orElseThrow();
        institution.setNome(institutionDetails.getNome());
        institution.setTipo(institutionDetails.getTipo());
        return institutionRepository.save(institution);
    }

    public void deleteInstitution(Long id) {
        Institution institution = institutionRepository.findById(id).orElseThrow();
        institutionRepository.delete(institution);
    }
}
