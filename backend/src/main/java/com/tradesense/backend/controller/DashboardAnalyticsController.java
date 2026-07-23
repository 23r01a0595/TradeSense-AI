package com.tradesense.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradesense.backend.dto.DashboardAnalyticsDTO;
import com.tradesense.backend.service.DashboardAnalyticsService;

@RestController
@RequestMapping("/api/dashboard-analytics")
@CrossOrigin(origins = "*")
public class DashboardAnalyticsController {

    @Autowired
    private DashboardAnalyticsService dashboardAnalyticsService;

    @GetMapping("/{userId}")
    public DashboardAnalyticsDTO getDashboardAnalytics(
            @PathVariable Long userId) {

        return dashboardAnalyticsService
                .getDashboardAnalytics(userId);

    }

}