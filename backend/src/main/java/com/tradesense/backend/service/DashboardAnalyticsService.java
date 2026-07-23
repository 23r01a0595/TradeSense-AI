package com.tradesense.backend.service;

import com.tradesense.backend.dto.DashboardAnalyticsDTO;

public interface DashboardAnalyticsService {

    DashboardAnalyticsDTO getDashboardAnalytics(Long userId);

}