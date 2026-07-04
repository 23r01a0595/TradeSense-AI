package com.tradesense.backend.service;

import com.tradesense.backend.dto.UserRequestDTO;
import com.tradesense.backend.dto.UserResponseDTO;

import java.util.List;

public interface UserService {

    UserResponseDTO saveUser(UserRequestDTO userRequestDTO);

    List<UserResponseDTO> getAllUsers();

    UserResponseDTO getUserById(Long id);

}