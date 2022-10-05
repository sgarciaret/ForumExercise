package com.forumHome.back.service;

import java.util.List;

import com.forumHome.back.model.User;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
}
