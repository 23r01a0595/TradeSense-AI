package com.tradesense.backend.service;

import com.tradesense.backend.dto.DashboardResponseDTO;

public interface DashboardService {

    DashboardResponseDTO getDashboard(Long userId);

}