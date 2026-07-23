package com.tradesense.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DashboardAnalyticsDTO {

    private Double portfolioValue;

    private Double totalInvestment;

    private Double profitLoss;

    private Double profitLossPercentage;

    private Integer totalHoldings;

    private Integer watchlistCount;

}