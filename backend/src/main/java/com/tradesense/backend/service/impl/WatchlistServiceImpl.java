package com.tradesense.backend.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradesense.backend.dto.WatchlistRequestDTO;
import com.tradesense.backend.dto.WatchlistResponseDTO;
import com.tradesense.backend.entity.Stock;
import com.tradesense.backend.entity.User;
import com.tradesense.backend.entity.Watchlist;
import com.tradesense.backend.exception.StockNotFoundException;
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
    public WatchlistResponseDTO addToWatchlist(WatchlistRequestDTO dto) {

        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Stock stock = stockRepository.findById(dto.getStockId())
                .orElseThrow(() -> new StockNotFoundException("Stock not found"));

        Watchlist watchlist = Watchlist.builder()
                .user(user)
                .stock(stock)
                .createdAt(LocalDateTime.now())
                .build();

        Watchlist saved = watchlistRepository.save(watchlist);

        return WatchlistResponseDTO.builder()
                .id(saved.getId())
                .userName(saved.getUser().getFullName())
                .stockSymbol(saved.getStock().getSymbol())
                .companyName(saved.getStock().getCompanyName())
                .createdAt(saved.getCreatedAt())
                .build();
    }

    @Override
    public List<WatchlistResponseDTO> getUserWatchlist(Long userId) {

        return watchlistRepository.findByUserId(userId)
                .stream()
                .map(item -> WatchlistResponseDTO.builder()
                        .id(item.getId())
                        .userName(item.getUser().getFullName())
                        .stockSymbol(item.getStock().getSymbol())
                        .companyName(item.getStock().getCompanyName())
                        .createdAt(item.getCreatedAt())
                        .build())
                .toList();
    }

    @Override
    public void removeFromWatchlist(Long id) {

        watchlistRepository.deleteById(id);
    }
}