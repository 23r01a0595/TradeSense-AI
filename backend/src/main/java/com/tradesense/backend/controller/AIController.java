package com.tradesense.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradesense.backend.dto.AIRequestDTO;
import com.tradesense.backend.dto.AIResponseDTO;
import com.tradesense.backend.service.AIService;

@RestController
@RequestMapping("/api/ai")
public class AIController {

    @Autowired
    private AIService aiService;

    @PostMapping("/recommend")
    public AIResponseDTO getRecommendation(@RequestBody AIRequestDTO request) {
        return aiService.getRecommendation(request);
    }
}