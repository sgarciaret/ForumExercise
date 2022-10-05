package com.forumHome.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.forumHome.back.model.User;
import com.forumHome.back.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	 @Autowired
	    private UserRepository userRepository;

	    @Override
	    public User saveUser (User user) {
	        return userRepository.save(user);
	    }

	    @Override
	    public List<User> getAllUsers() {
	        return userRepository.findAll();
	    }
}