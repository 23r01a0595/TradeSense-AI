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
public class AIRecommendationDTO {

    private String companyName;

    private String stockSymbol;

    private String recommendation;

    private Integer confidence;

    private String risk;

    private Double targetPrice;

    private String reason;
}