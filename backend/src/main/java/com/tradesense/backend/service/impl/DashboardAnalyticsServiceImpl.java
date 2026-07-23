package com.tradesense.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradesense.backend.dto.DashboardAnalyticsDTO;
import com.tradesense.backend.entity.Portfolio;
import com.tradesense.backend.entity.Watchlist;
import com.tradesense.backend.repository.PortfolioRepository;
import com.tradesense.backend.repository.WatchlistRepository;
import com.tradesense.backend.service.DashboardAnalyticsService;

@Service
public class DashboardAnalyticsServiceImpl implements DashboardAnalyticsService {

    @Autowired
    private PortfolioRepository portfolioRepository;

    @Autowired
    private WatchlistRepository watchlistRepository;

    @Override
    public DashboardAnalyticsDTO getDashboardAnalytics(Long userId) {

        List<Portfolio> portfolio =
                portfolioRepository.findByUserId(userId);

        List<Watchlist> watchlist =
                watchlistRepository.findByUserId(userId);

        double totalInvestment = 0;
        double portfolioValue = 0;

        for (Portfolio item : portfolio) {

            totalInvestment +=
                    item.getAverageBuyPrice() * item.getQuantity();

            portfolioValue +=
                    item.getStock().getCurrentPrice() * item.getQuantity();

        }

        double profitLoss = portfolioValue - totalInvestment;

        double profitLossPercentage = totalInvestment == 0
                ? 0
                : (profitLoss / totalInvestment) * 100;

        return DashboardAnalyticsDTO.builder()
                .portfolioValue(portfolioValue)
                .totalInvestment(totalInvestment)
                .profitLoss(profitLoss)
                .profitLossPercentage(profitLossPercentage)
                .totalHoldings(portfolio.size())
                .watchlistCount(watchlist.size())
                .build();
    }

}