package com.tradesense.backend.dto;

import java.time.LocalDateTime;

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

    private String userName;

    private String stockSymbol;

    private String companyName;

    private LocalDateTime createdAt;
}