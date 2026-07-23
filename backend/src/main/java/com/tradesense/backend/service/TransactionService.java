package com.tradesense.backend.service;

import java.util.List;

import com.tradesense.backend.dto.TransactionResponseDTO;

public interface TransactionService {

    void saveTransaction(
            Long userId,
            Long stockId,
            Integer quantity,
            Double price,
            String type
    );

    List<TransactionResponseDTO> getTransactions(Long userId);
}