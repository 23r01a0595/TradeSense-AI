package com.tradesense.backend.service;

import com.tradesense.backend.dto.AIRecommendationDTO;

public interface AIRecommendationService {

    AIRecommendationDTO getRecommendation(Long stockId);

}