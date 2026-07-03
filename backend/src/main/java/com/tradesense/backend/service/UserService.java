package com.tradesense.backend.service;

import java.util.List;

import com.tradesense.backend.entity.User;

public interface UserService {

    User saveUser(User user);

    List<User> getAllUsers();

    User getUserById(Long id);

}