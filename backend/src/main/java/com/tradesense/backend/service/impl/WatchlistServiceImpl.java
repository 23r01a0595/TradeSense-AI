package com.tradesense.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradesense.backend.dto.WatchlistRequestDTO;
import com.tradesense.backend.dto.WatchlistResponseDTO;
import com.tradesense.backend.entity.Stock;
import com.tradesense.backend.entity.User;
import com.tradesense.backend.entity.Watchlist;
import com.tradesense.backend.repository.StockRepository;
import com.tradesense.backend.repository.UserRepository;
import com.tradesense.backend.repository.WatchlistRepository;
import com.tradesense.backend.service.WatchlistService;

@Service
public class WatchlistServiceImpl implements WatchlistService {

    @Autowired
    private WatchlistRepository watchlistRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StockRepository stockRepository;

    @Override
    public WatchlistResponseDTO addStock(WatchlistRequestDTO dto) {

        if (watchlistRepository
                .findByUserIdAndStockId(dto.getUserId(), dto.getStockId())
                .isPresent()) {

            throw new RuntimeException("Stock already exists in watchlist");
        }

        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Stock stock = stockRepository.findById(dto.getStockId())
                .orElseThrow(() -> new RuntimeException("Stock not found"));

        Watchlist watchlist = Watchlist.builder()
                .user(user)
                .stock(stock)
                .build();

        Watchlist saved = watchlistRepository.save(watchlist);

        return WatchlistResponseDTO.builder()
                .id(saved.getId())
                .stockId(saved.getStock().getId())
                .companyName(saved.getStock().getCompanyName())
                .stockSymbol(saved.getStock().getSymbol())
                .currentPrice(saved.getStock().getCurrentPrice())
                .sector(saved.getStock().getSector())
                .build();
    }

    @Override
    public List<WatchlistResponseDTO> getWatchlist(Long userId) {

        return watchlistRepository.findByUserId(userId)
                .stream()
                .map(item -> WatchlistResponseDTO.builder()
                        .id(item.getId())
                        .stockId(item.getStock().getId())
                        .companyName(item.getStock().getCompanyName())
                        .stockSymbol(item.getStock().getSymbol())
                        .currentPrice(item.getStock().getCurrentPrice())
                        .sector(item.getStock().getSector())
                        .build())
                .toList();
    }

    @Override
    public void removeStock(Long userId, Long stockId) {

        Watchlist watchlist = watchlistRepository
                .findByUserIdAndStockId(userId, stockId)
                .orElseThrow(() -> new RuntimeException("Watchlist item not found"));

        watchlistRepository.delete(watchlist);
    }
}