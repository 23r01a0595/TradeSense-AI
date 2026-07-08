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
public class StockResponseDTO {

    private Long id;

    private String companyName;

    private String symbol;

    private String sector;

    private Double currentPrice;

    private Long marketCap;
}