package com.tradesense.backend.service.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tradesense.backend.dto.LiveStockPriceDTO;
import com.tradesense.backend.service.LiveStockService;

@Service
public class LiveStockServiceImpl implements LiveStockService {

    @Value("${alphavantage.api.key}")
    private String apiKey;

    @Value("${alphavantage.api.url}")
    private String apiUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    @Override
    public LiveStockPriceDTO getLivePrice(String symbol) {

        try {

            String apiSymbol = mapSymbol(symbol);

            String url = apiUrl
                    + "?function=GLOBAL_QUOTE"
                    + "&symbol=" + apiSymbol
                    + "&apikey=" + apiKey;

            String response = restTemplate.getForObject(url, String.class);

            System.out.println("=================================");
            System.out.println("Alpha Vantage Response:");
            System.out.println(response);
            System.out.println("=================================");

            ObjectMapper mapper = new ObjectMapper();

            JsonNode root = mapper.readTree(response);

            JsonNode quote = root.get("Global Quote");

            if (quote == null || quote.isEmpty()) {
                throw new RuntimeException(
                        "No live market data found for symbol: " + apiSymbol);
            }

            return LiveStockPriceDTO.builder()
                    .symbol(symbol)
                    .price(quote.get("05. price").asDouble())
                    .change(quote.get("09. change").asDouble())
                    .changePercent(
                            Double.parseDouble(
                                    quote.get("10. change percent")
                                            .asText()
                                            .replace("%", "")
                            )
                    )
                    .build();

        } catch (Exception e) {

            throw new RuntimeException(
                    "Failed to fetch live stock price: " + e.getMessage(), e);

        }

    }

    private String mapSymbol(String symbol) {

        return switch (symbol.toUpperCase()) {

            case "INFY" -> "INFY.BSE";
            case "TCS" -> "TCS.BSE";
            case "RELIANCE" -> "RELIANCE.BSE";
            case "HDFCBANK" -> "HDFCBANK.BSE";
            case "ICICIBANK" -> "ICICIBANK.BSE";
            case "SBIN" -> "SBIN.BSE";
            case "WIPRO" -> "WIPRO.BSE";
            case "LT" -> "LT.BSE";
            case "HCLTECH" -> "HCLTECH.BSE";

            default -> symbol;
        };

    }

}