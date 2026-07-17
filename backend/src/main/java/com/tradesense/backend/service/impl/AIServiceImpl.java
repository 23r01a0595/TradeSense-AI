package com.tradesense.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.tradesense.backend.dto.AIRequestDTO;
import com.tradesense.backend.dto.AIResponseDTO;
import com.tradesense.backend.dto.GeminiRequest;
import com.tradesense.backend.dto.GeminiResponse;
import com.tradesense.backend.service.AIService;

@Service
public class AIServiceImpl implements AIService {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String apiUrl;

    @Override
    public AIResponseDTO getRecommendation(AIRequestDTO request) {

        String prompt = """
You are a professional stock market analyst.

Analyze this stock.

Company: %s
Sector: %s
Current Price: %.2f

Return ONLY valid JSON.

Example:

{
  "recommendation":"BUY",
  "reason":"Strong fundamentals",
  "risk":"Medium",
  "confidence":"8/10"
}

Do not add markdown.
Do not use ```json.
Return only JSON.
""".formatted(
    request.getCompanyName(),
    request.getSector(),
    request.getCurrentPrice()
);

        GeminiRequest.Part part = new GeminiRequest.Part(prompt);
        GeminiRequest.Content content =
                new GeminiRequest.Content(List.of(part));

        GeminiRequest geminiRequest =
                new GeminiRequest(List.of(content));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<GeminiRequest> entity =
                new HttpEntity<>(geminiRequest, headers);

        String url = apiUrl + "?key=" + apiKey;

        GeminiResponse response = restTemplate.postForObject(
                url,
                entity,
                GeminiResponse.class
        );

        String answer = response.getCandidates()
        .get(0)
        .getContent()
        .getParts()
        .get(0)
        .getText();

ObjectMapper mapper = new ObjectMapper();

try {
    AIResponseDTO aiResponse = mapper.readValue(answer, AIResponseDTO.class);
    return aiResponse;
} catch (JsonProcessingException e) {
    throw new RuntimeException("Failed to parse Gemini response", e);
}
    }
}