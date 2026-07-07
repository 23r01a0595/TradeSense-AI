package com.tradesense.backend.service;

import java.util.List;

import com.tradesense.backend.dto.LoginRequestDTO;
import com.tradesense.backend.dto.LoginResponseDTO;
import com.tradesense.backend.dto.UserRequestDTO;
import com.tradesense.backend.dto.UserResponseDTO;

public interface UserService {

    UserResponseDTO saveUser(UserRequestDTO userRequestDTO);

    List<UserResponseDTO> getAllUsers();

    UserResponseDTO getUserById(Long id);

    LoginResponseDTO login(LoginRequestDTO request);

}