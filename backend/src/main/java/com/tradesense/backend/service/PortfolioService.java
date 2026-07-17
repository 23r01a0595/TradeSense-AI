package com.tradesense.backend.service;

import java.util.List;

import com.tradesense.backend.dto.PortfolioRequestDTO;
import com.tradesense.backend.dto.PortfolioResponseDTO;

public interface PortfolioService {

    PortfolioResponseDTO buyStock(PortfolioRequestDTO dto);

    PortfolioResponseDTO sellStock(PortfolioRequestDTO dto);

    List<PortfolioResponseDTO> getPortfolio(Long userId);
}