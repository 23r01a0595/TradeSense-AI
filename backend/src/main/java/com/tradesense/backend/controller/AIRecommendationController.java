package com.tradesense.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradesense.backend.dto.AIRecommendationDTO;
import com.tradesense.backend.service.AIRecommendationService;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = "*")
public class AIRecommendationController {

    @Autowired
    private AIRecommendationService aiRecommendationService;

    @GetMapping("/{stockId}")
    public AIRecommendationDTO getRecommendation(
            @PathVariable Long stockId) {

        return aiRecommendationService.getRecommendation(stockId);
    }
}