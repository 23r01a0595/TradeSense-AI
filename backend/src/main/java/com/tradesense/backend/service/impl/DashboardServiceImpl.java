package com.tradesense.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradesense.backend.dto.DashboardResponseDTO;
import com.tradesense.backend.repository.PortfolioRepository;
import com.tradesense.backend.repository.WatchlistRepository;
import com.tradesense.backend.service.DashboardService;

@Service
public class DashboardServiceImpl implements DashboardService {

    @Autowired
    private PortfolioRepository portfolioRepository;

    @Autowired
    private WatchlistRepository watchlistRepository;

    @Override
    public DashboardResponseDTO getDashboard(Long userId) {

        int stocksOwned = portfolioRepository.findByUserId(userId).size();

        int watchlistCount = watchlistRepository.findByUserId(userId).size();

        double totalInvestment = 0;
        double currentValue = 0;

        var portfolios = portfolioRepository.findByUserId(userId);

        for (var portfolio : portfolios) {

            totalInvestment += portfolio.getAverageBuyPrice() * portfolio.getQuantity();

            currentValue += portfolio.getStock().getCurrentPrice() * portfolio.getQuantity();
        }

        double profitLoss = currentValue - totalInvestment;

        double profitPercentage = totalInvestment == 0
                ? 0
                : (profitLoss / totalInvestment) * 100;

        return DashboardResponseDTO.builder()
                .totalInvestment(totalInvestment)
                .currentValue(currentValue)
                .profitLoss(profitLoss)
                .profitPercentage(profitPercentage)
                .stocksOwned(stocksOwned)
                .watchlistCount(watchlistCount)
                .build();
    }
}