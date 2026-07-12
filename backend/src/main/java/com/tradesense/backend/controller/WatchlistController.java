package com.tradesense.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradesense.backend.dto.WatchlistRequestDTO;
import com.tradesense.backend.dto.WatchlistResponseDTO;
import com.tradesense.backend.service.WatchlistService;

@RestController
@RequestMapping("/api/watchlist")
@CrossOrigin(origins = "*")
public class WatchlistController {

    @Autowired
    private WatchlistService watchlistService;

    @PostMapping
    public WatchlistResponseDTO addToWatchlist(@RequestBody WatchlistRequestDTO dto) {
        return watchlistService.addToWatchlist(dto);
    }

    @GetMapping("/{userId}")
    public List<WatchlistResponseDTO> getUserWatchlist(@PathVariable Long userId) {
        return watchlistService.getUserWatchlist(userId);
    }

    @DeleteMapping("/{id}")
    public String removeFromWatchlist(@PathVariable Long id) {
        watchlistService.removeFromWatchlist(id);
        return "Stock removed from watchlist successfully.";
    }
}