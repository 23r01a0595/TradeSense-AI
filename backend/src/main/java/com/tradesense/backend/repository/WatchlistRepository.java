package com.tradesense.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradesense.backend.entity.Watchlist;

public interface WatchlistRepository extends JpaRepository<Watchlist, Long> {

    List<Watchlist> findByUserId(Long userId);

    Optional<Watchlist> findByUserIdAndStockId(Long userId, Long stockId);

}