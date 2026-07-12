package com.tradesense.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
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
public class StockRequestDTO {

    @NotBlank(message = "Company name is required")
    private String companyName;

    @NotBlank(message = "Stock symbol is required")
    private String symbol;

    @NotBlank(message = "Sector is required")
    private String sector;

    @NotNull(message = "Current price is required")
    @Positive(message = "Current price must be greater than zero")
    private Double currentPrice;

    @NotNull(message = "Market cap is required")
    @Positive(message = "Market cap must be greater than zero")
    private Long marketCap;
}