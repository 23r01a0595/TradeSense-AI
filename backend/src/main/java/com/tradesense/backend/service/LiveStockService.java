package com.tradesense.backend.service;

import com.tradesense.backend.dto.LiveStockPriceDTO;

public interface LiveStockService {

    LiveStockPriceDTO getLivePrice(String symbol);

}