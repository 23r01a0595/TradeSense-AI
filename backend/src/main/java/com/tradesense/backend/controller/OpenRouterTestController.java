package com.tradesense.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradesense.backend.service.OpenRouterService;

@RestController
public class OpenRouterTestController {

    private final OpenRouterService openRouterService;

    public OpenRouterTestController(OpenRouterService openRouterService) {
        this.openRouterService = openRouterService;
    }

    @GetMapping("/api/openrouter/test")
    public String test() {

        return openRouterService.analyzeStock(
                "Infosys",
                "INFY",
                1625.50,
                "Information Technology"
        );
    }
}