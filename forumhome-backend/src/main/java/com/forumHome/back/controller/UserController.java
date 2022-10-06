package com.forumHome.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.forumHome.back.model.User;
import com.forumHome.back.repository.UserRepository;
import com.forumHome.back.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private UserRepository userRepo;

	@PostMapping("/add")
	public String add(@RequestBody User user) {
		userService.saveUser(user);
		return "New user is added";
	}

	@GetMapping("/getAll")
	public List<User> list() {
		return userService.getAllUsers();
	}

	@GetMapping("/users")
	public String listUsers(Model model) {
		List<User> listUsers = userRepo.findAll();
		model.addAttribute("listUsers", listUsers);

		return "users";
	}
}
