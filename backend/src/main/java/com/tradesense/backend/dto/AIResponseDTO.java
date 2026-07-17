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
public class AIResponseDTO {

    private String recommendation;
    private String reason;
    private String risk;
    private String confidence;
}