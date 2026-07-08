package com.tradesense.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tradesense.backend.dto.StockRequestDTO;
import com.tradesense.backend.dto.StockResponseDTO;
import com.tradesense.backend.service.StockService;

@RestController
@RequestMapping("/api/stocks")
public class StockController {

    @Autowired
    private StockService stockService;

    @PostMapping
    public StockResponseDTO addStock(@RequestBody StockRequestDTO dto) {
        return stockService.addStock(dto);
    }

    @GetMapping
    public List<StockResponseDTO> getAllStocks() {
        return stockService.getAllStocks();
    }

    @GetMapping("/{id}")
    public StockResponseDTO getStockById(@PathVariable Long id) {
        return stockService.getStockById(id);
    }

    @PutMapping("/{id}")
    public StockResponseDTO updateStock(@PathVariable Long id,
                                        @RequestBody StockRequestDTO dto) {
        return stockService.updateStock(id, dto);
    }

    @DeleteMapping("/{id}")
    public String deleteStock(@PathVariable Long id) {
        stockService.deleteStock(id);
        return "Stock deleted successfully";
    }
}