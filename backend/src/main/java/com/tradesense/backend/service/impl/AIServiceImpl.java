package com.tradesense.backend.service.impl;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tradesense.backend.dto.AIRequestDTO;
import com.tradesense.backend.dto.AIResponseDTO;
import com.tradesense.backend.service.AIService;

@Service
public class AIServiceImpl implements AIService {

    @Value("${openrouter.api.key}")
    private String apiKey;

    @Value("${openrouter.api.url}")
    private String apiUrl;

    private final HttpClient client = HttpClient.newHttpClient();
    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public AIResponseDTO getRecommendation(AIRequestDTO request) {

        try {

            String prompt = """
                    You are an expert stock market analyst.

                    Analyze this stock.

                    Company: %s
                    Sector: %s
                    Current Price: %.2f

                    Return ONLY valid JSON.

                    {
                      "recommendation":"BUY",
                      "reason":"Reason here",
                      "risk":"LOW",
                      "confidence":"90%%"
                    }

                    Return JSON only.
                    """
                    .formatted(
                            request.getCompanyName(),
                            request.getSector(),
                            request.getCurrentPrice()
                    );

            String requestBody = """
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

            HttpRequest httpRequest = HttpRequest.newBuilder()
                    .uri(URI.create(apiUrl))
                    .header("Authorization", "Bearer " + apiKey)
                    .header("Content-Type", "application/json")
                    .header("HTTP-Referer", "https://trade-sense-ai-seven.vercel.app")
                    .header("X-Title", "TradeSense AI")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .build();

            HttpResponse<String> response =
                    client.send(httpRequest, HttpResponse.BodyHandlers.ofString());

            JsonNode root = mapper.readTree(response.body());

System.out.println("OpenRouter Response:");
System.out.println(response.body());

if (!root.has("choices")) {

    throw new RuntimeException(
            "OpenRouter Error: " + response.body()
    );

}

String aiResponse = root
        .get("choices")
        .get(0)
        .get("message")
        .get("content")
        .asText();
            aiResponse = aiResponse
        .replace("```json", "")
        .replace("```", "")
        .trim();

System.out.println("AI Response:");
System.out.println(aiResponse);
            return mapper.readValue(aiResponse, AIResponseDTO.class);

        } catch (Exception e) {

    e.printStackTrace();

    throw new RuntimeException("AI service failed: " + e.getMessage(), e);

}

    }
}