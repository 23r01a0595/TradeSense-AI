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
public class DashboardResponseDTO {

    private Double totalInvestment;

    private Double currentValue;

    private Double profitLoss;

    private Double profitPercentage;

    private Integer stocksOwned;

    private Integer watchlistCount;
}