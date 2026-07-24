package com.tradesense.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tradesense.backend.dto.LoginRequestDTO;
import com.tradesense.backend.dto.LoginResponseDTO;
import com.tradesense.backend.dto.UserRequestDTO;
import com.tradesense.backend.dto.UserResponseDTO;
import com.tradesense.backend.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public UserResponseDTO register(@RequestBody UserRequestDTO request) {
        return userService.saveUser(request);
    }

    @PostMapping("/login")
    public LoginResponseDTO login(@RequestBody LoginRequestDTO request) {
        return userService.login(request);
    }
}