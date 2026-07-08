package com.tradesense.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradesense.backend.dto.StockRequestDTO;
import com.tradesense.backend.dto.StockResponseDTO;
import com.tradesense.backend.entity.Stock;
import com.tradesense.backend.repository.StockRepository;
import com.tradesense.backend.service.StockService;

@Service
public class StockServiceImpl implements StockService {

    @Autowired
    private StockRepository stockRepository;

    @Override
    public StockResponseDTO addStock(StockRequestDTO dto) {

        Stock stock = Stock.builder()
                .companyName(dto.getCompanyName())
                .symbol(dto.getSymbol())
                .sector(dto.getSector())
                .currentPrice(dto.getCurrentPrice())
                .marketCap(dto.getMarketCap())
                .build();

        Stock savedStock = stockRepository.save(stock);

        return StockResponseDTO.builder()
                .id(savedStock.getId())
                .companyName(savedStock.getCompanyName())
                .symbol(savedStock.getSymbol())
                .sector(savedStock.getSector())
                .currentPrice(savedStock.getCurrentPrice())
                .marketCap(savedStock.getMarketCap())
                .build();
    }

    @Override
    public List<StockResponseDTO> getAllStocks() {

        return stockRepository.findAll()
                .stream()
                .map(stock -> StockResponseDTO.builder()
                        .id(stock.getId())
                        .companyName(stock.getCompanyName())
                        .symbol(stock.getSymbol())
                        .sector(stock.getSector())
                        .currentPrice(stock.getCurrentPrice())
                        .marketCap(stock.getMarketCap())
                        .build())
                .toList();
    }

    @Override
    public StockResponseDTO getStockById(Long id) {

        Stock stock = stockRepository.findById(id).orElse(null);

        if (stock == null) {
            return null;
        }

        return StockResponseDTO.builder()
                .id(stock.getId())
                .companyName(stock.getCompanyName())
                .symbol(stock.getSymbol())
                .sector(stock.getSector())
                .currentPrice(stock.getCurrentPrice())
                .marketCap(stock.getMarketCap())
                .build();
    }

    @Override
    public StockResponseDTO updateStock(Long id, StockRequestDTO dto) {

        Stock stock = stockRepository.findById(id).orElse(null);

        if (stock == null) {
            return null;
        }

        stock.setCompanyName(dto.getCompanyName());
        stock.setSymbol(dto.getSymbol());
        stock.setSector(dto.getSector());
        stock.setCurrentPrice(dto.getCurrentPrice());
        stock.setMarketCap(dto.getMarketCap());

        Stock updatedStock = stockRepository.save(stock);

        return StockResponseDTO.builder()
                .id(updatedStock.getId())
                .companyName(updatedStock.getCompanyName())
                .symbol(updatedStock.getSymbol())
                .sector(updatedStock.getSector())
                .currentPrice(updatedStock.getCurrentPrice())
                .marketCap(updatedStock.getMarketCap())
                .build();
    }

    @Override
    public void deleteStock(Long id) {

        stockRepository.deleteById(id);
    }
}