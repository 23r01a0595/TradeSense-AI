package com.tradesense.backend.service;

import java.util.List;

import com.tradesense.backend.dto.WatchlistRequestDTO;
import com.tradesense.backend.dto.WatchlistResponseDTO;

public interface WatchlistService {

    WatchlistResponseDTO addToWatchlist(WatchlistRequestDTO dto);

    List<WatchlistResponseDTO> getUserWatchlist(Long userId);

    void removeFromWatchlist(Long id);
}