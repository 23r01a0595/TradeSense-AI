package com.tradesense.backend.service.impl;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tradesense.backend.service.OpenRouterService;

@Service
public class OpenRouterServiceImpl implements OpenRouterService {

    @Value("${openrouter.api.key}")
    private String apiKey;

    @Value("${openrouter.api.url}")
    private String apiUrl;

    private final HttpClient client = HttpClient.newHttpClient();

    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public String analyzeStock(
            String companyName,
            String symbol,
            Double currentPrice,
            String sector) {

        try {

            String prompt = """
                    You are an expert stock market analyst.

                    Analyze the following stock.

                    Company: %s
                    Symbol: %s
                    Sector: %s
                    Current Price: ₹%.2f

                    Give your response in this format:

                    Recommendation:
                    Confidence:
                    Risk:
                    Reason:
                    """
                    .formatted(
                            companyName,
                            symbol,
                            sector,
                            currentPrice
                    );

            String body = """
                    {
                      "model":"deepseek/deepseek-chat",
                      "messages":[
                        {
                          "role":"user",
                          "content":%s
                        }
                      ]
                    }
                    """.formatted(mapper.writeValueAsString(prompt));

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(apiUrl))
                    .header("Authorization", "Bearer " + apiKey)
                    .header("Content-Type", "application/json")
.header("HTTP-Referer", "https://trade-sense-ai-seven.vercel.app")                    .POST(HttpRequest.BodyPublishers.ofString(body))
                    .build();

            HttpResponse<String> response =
                    client.send(request, HttpResponse.BodyHandlers.ofString());

            JsonNode root = mapper.readTree(response.body());

            return root.get("choices")
                    .get(0)
                    .get("message")
                    .get("content")
                    .asText();

        } catch (IOException | InterruptedException e) {

            throw new RuntimeException(e);

        }
    }
}