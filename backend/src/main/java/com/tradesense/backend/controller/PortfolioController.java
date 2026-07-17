package com.tradesense.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradesense.backend.dto.PortfolioRequestDTO;
import com.tradesense.backend.dto.PortfolioResponseDTO;
import com.tradesense.backend.service.PortfolioService;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = "*")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @PostMapping("/buy")
    public PortfolioResponseDTO buyStock(@RequestBody PortfolioRequestDTO dto) {
        return portfolioService.buyStock(dto);
    }

    @PostMapping("/sell")
    public PortfolioResponseDTO sellStock(@RequestBody PortfolioRequestDTO dto) {
        return portfolioService.sellStock(dto);
    }

    @GetMapping("/{userId}")
    public List<PortfolioResponseDTO> getPortfolio(@PathVariable Long userId) {
        return portfolioService.getPortfolio(userId);
    }
}