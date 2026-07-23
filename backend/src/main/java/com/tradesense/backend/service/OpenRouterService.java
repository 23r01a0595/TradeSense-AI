package com.tradesense.backend.service;

public interface OpenRouterService {

    String analyzeStock(
            String companyName,
            String symbol,
            Double currentPrice,
            String sector
    );

}