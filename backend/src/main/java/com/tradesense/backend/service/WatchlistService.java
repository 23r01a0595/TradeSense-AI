package com.tradesense.backend.service;

import java.util.List;

import com.tradesense.backend.dto.WatchlistRequestDTO;
import com.tradesense.backend.dto.WatchlistResponseDTO;

public interface WatchlistService {

    WatchlistResponseDTO addStock(WatchlistRequestDTO dto);

    void removeStock(Long userId, Long stockId);

    List<WatchlistResponseDTO> getWatchlist(Long userId);
}