package com.tradesense.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradesense.backend.dto.AIRecommendationDTO;
import com.tradesense.backend.entity.Stock;
import com.tradesense.backend.repository.StockRepository;
import com.tradesense.backend.service.AIRecommendationService;

@Service
public class AIRecommendationServiceImpl implements AIRecommendationService {

    @Autowired
    private StockRepository stockRepository;

    @Override
    public AIRecommendationDTO getRecommendation(Long stockId) {

        Stock stock = stockRepository.findById(stockId)
                .orElseThrow(() -> new RuntimeException("Stock not found"));

        return AIRecommendationDTO.builder()
                .companyName(stock.getCompanyName())
                .stockSymbol(stock.getSymbol())
                .recommendation("BUY")
                .confidence(94)
                .risk("LOW")
                .targetPrice(stock.getCurrentPrice() * 1.15)
                .reason("Strong financials, positive momentum and healthy market outlook.")
                .build();
    }
}