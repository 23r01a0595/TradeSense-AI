package com.tradesense.backend.service;

import java.util.List;

import com.tradesense.backend.dto.StockRequestDTO;
import com.tradesense.backend.dto.StockResponseDTO;

public interface StockService {

    StockResponseDTO addStock(StockRequestDTO dto);

    List<StockResponseDTO> getAllStocks();

    StockResponseDTO getStockById(Long id);

    StockResponseDTO updateStock(Long id, StockRequestDTO dto);

    void deleteStock(Long id);
}