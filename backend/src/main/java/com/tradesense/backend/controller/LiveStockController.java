package com.tradesense.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradesense.backend.dto.LiveStockPriceDTO;
import com.tradesense.backend.service.LiveStockService;

@RestController
@RequestMapping("/api/live")
@CrossOrigin(origins = "*")
public class LiveStockController {

    @Autowired
    private LiveStockService liveStockService;

    @GetMapping("/{symbol}")
    public LiveStockPriceDTO getLivePrice(@PathVariable String symbol) {

        return liveStockService.getLivePrice(symbol);

    }

}