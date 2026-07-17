package com.tradesense.backend.service;

import com.tradesense.backend.dto.AIRequestDTO;
import com.tradesense.backend.dto.AIResponseDTO;

public interface AIService {

    AIResponseDTO getRecommendation(AIRequestDTO request);

}