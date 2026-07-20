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
public class WatchlistResponseDTO {

    private Long id;

    private Long stockId;

    private String companyName;

    private String stockSymbol;

    private Double currentPrice;

    private String sector;
}