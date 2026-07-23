package com.tradesense.backend.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tradesense.backend.dto.TransactionResponseDTO;
import com.tradesense.backend.entity.Stock;
import com.tradesense.backend.entity.Transaction;
import com.tradesense.backend.entity.User;
import com.tradesense.backend.repository.StockRepository;
import com.tradesense.backend.repository.TransactionRepository;
import com.tradesense.backend.repository.UserRepository;
import com.tradesense.backend.service.TransactionService;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private StockRepository stockRepository;

    @Override
    public void saveTransaction(
            Long userId,
            Long stockId,
            Integer quantity,
            Double price,
            String type) {

        System.out.println("========================================");
        System.out.println("TRANSACTION SERVICE STARTED");
        System.out.println("User ID      : " + userId);
        System.out.println("Stock ID     : " + stockId);
        System.out.println("Quantity     : " + quantity);
        System.out.println("Price        : " + price);
        System.out.println("Type         : " + type);
        System.out.println("========================================");

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Stock stock = stockRepository.findById(stockId)
                .orElseThrow(() -> new RuntimeException("Stock not found"));

        Transaction transaction = Transaction.builder()
                .user(user)
                .stock(stock)
                .quantity(quantity)
                .price(price)
                .type(type)
                .transactionTime(LocalDateTime.now())
                .build();

        System.out.println("Saving transaction to database...");

        transactionRepository.save(transaction);

        System.out.println("Transaction saved successfully.");
        System.out.println("========================================");
    }

    @Override
    public List<TransactionResponseDTO> getTransactions(Long userId) {

        System.out.println("Fetching transactions for User ID: " + userId);

        List<TransactionResponseDTO> transactions = transactionRepository
                .findByUserIdOrderByTransactionTimeDesc(userId)
                .stream()
                .map(transaction -> TransactionResponseDTO.builder()
                        .id(transaction.getId())
                        .companyName(transaction.getStock().getCompanyName())
                        .stockSymbol(transaction.getStock().getSymbol())
                        .quantity(transaction.getQuantity())
                        .price(transaction.getPrice())
                        .type(transaction.getType())
                        .transactionTime(transaction.getTransactionTime())
                        .build())
                .toList();

        System.out.println("Transactions Found: " + transactions.size());

        return transactions;
    }
}