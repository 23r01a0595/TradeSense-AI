package com.tradesense.backend.service.impl;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.tradesense.backend.dto.UserRequestDTO;
import com.tradesense.backend.dto.UserResponseDTO;
import com.tradesense.backend.entity.User;
import com.tradesense.backend.repository.UserRepository;
import com.tradesense.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserResponseDTO saveUser(UserRequestDTO dto) {

        User user = User.builder()
                .fullName(dto.getFullName())
                .email(dto.getEmail())
                .password(passwordEncoder.encode(dto.getPassword()))
                .build();

        User savedUser = userRepository.save(user);

        return UserResponseDTO.builder()
                .id(savedUser.getId())
                .fullName(savedUser.getFullName())
                .email(savedUser.getEmail())
                .build();
    }

    @Override
    public List<UserResponseDTO> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(user -> UserResponseDTO.builder()
                        .id(user.getId())
                        .fullName(user.getFullName())
                        .email(user.getEmail())
                        .build())
                .toList();
    }

    @Override
    public UserResponseDTO getUserById(Long id) {

        User user = userRepository.findById(id).orElse(null);

        if (user == null) {
            return null;
        }

        return UserResponseDTO.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .build();
    }
}