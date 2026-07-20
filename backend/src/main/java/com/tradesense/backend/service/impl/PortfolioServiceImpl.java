package com.tradesense.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradesense.backend.dto.PortfolioRequestDTO;
import com.tradesense.backend.dto.PortfolioResponseDTO;
import com.tradesense.backend.entity.Portfolio;
import com.tradesense.backend.entity.Stock;
import com.tradesense.backend.entity.User;
import com.tradesense.backend.repository.PortfolioRepository;
import com.tradesense.backend.repository.StockRepository;
import com.tradesense.backend.repository.UserRepository;
import com.tradesense.backend.service.PortfolioService;

@Service
public class PortfolioServiceImpl implements PortfolioService {

    @Autowired
    private PortfolioRepository portfolioRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StockRepository stockRepository;

    @Override
    public PortfolioResponseDTO buyStock(PortfolioRequestDTO dto) {

        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Stock stock = stockRepository.findById(dto.getStockId())
                .orElseThrow(() -> new RuntimeException("Stock not found"));

        Portfolio portfolio = portfolioRepository
                .findByUserIdAndStockId(dto.getUserId(), dto.getStockId())
                .orElse(null);

        if (portfolio == null) {

            portfolio = Portfolio.builder()
                    .user(user)
                    .stock(stock)
                    .quantity(dto.getQuantity())
                    .averageBuyPrice(dto.getBuyPrice())
                    .build();

        } else {

            int totalQuantity = portfolio.getQuantity() + dto.getQuantity();

            double averagePrice =
                    ((portfolio.getQuantity() * portfolio.getAverageBuyPrice())
                            + (dto.getQuantity() * dto.getBuyPrice()))
                            / totalQuantity;

            portfolio.setQuantity(totalQuantity);
            portfolio.setAverageBuyPrice(averagePrice);
        }

        Portfolio saved = portfolioRepository.save(portfolio);

        return PortfolioResponseDTO.builder()
                .id(saved.getId())
                .stockId(saved.getStock().getId())
                .companyName(saved.getStock().getCompanyName())
                .stockSymbol(saved.getStock().getSymbol())
                .quantity(saved.getQuantity())
                .averageBuyPrice(saved.getAverageBuyPrice())
                .build();
    }

    @Override
    public PortfolioResponseDTO sellStock(PortfolioRequestDTO dto) {

        Portfolio portfolio = portfolioRepository
                .findByUserIdAndStockId(dto.getUserId(), dto.getStockId())
                .orElseThrow(() -> new RuntimeException("Portfolio not found"));

        if (dto.getQuantity() > portfolio.getQuantity()) {
            throw new RuntimeException("Not enough stocks to sell");
        }

        portfolio.setQuantity(portfolio.getQuantity() - dto.getQuantity());

        if (portfolio.getQuantity() == 0) {

            portfolioRepository.delete(portfolio);

            return PortfolioResponseDTO.builder()
                    .companyName(portfolio.getStock().getCompanyName())
                    .stockId(portfolio.getStock().getId())
                    .stockSymbol(portfolio.getStock().getSymbol())
                    .quantity(0)
                    .averageBuyPrice(portfolio.getAverageBuyPrice())
                    .build();
        }

        Portfolio updated = portfolioRepository.save(portfolio);

        return PortfolioResponseDTO.builder()
                .id(updated.getId())
                .companyName(updated.getStock().getCompanyName())
                .stockSymbol(updated.getStock().getSymbol())
                .quantity(updated.getQuantity())
                .averageBuyPrice(updated.getAverageBuyPrice())
                .build();
    }

    @Override
    public List<PortfolioResponseDTO> getPortfolio(Long userId) {

        return portfolioRepository.findByUserId(userId)
                .stream()
                .map(item -> PortfolioResponseDTO.builder()
                        .id(item.getId())
                        .companyName(item.getStock().getCompanyName())
                        .stockId(item.getStock().getId())
                        .stockSymbol(item.getStock().getSymbol())
                        .quantity(item.getQuantity())
                        .averageBuyPrice(item.getAverageBuyPrice())
                        .build())
                .toList();
    }
}