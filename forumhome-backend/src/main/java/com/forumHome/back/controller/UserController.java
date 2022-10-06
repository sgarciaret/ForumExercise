package com.forumHome.back.controller;

import java.util.Iterator;
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

	@PostMapping(path = "/add", consumes = "application/json", produces = "application/json")
	public User add(@RequestBody User user) {
		List<User> usersList = userRepo.findAll();
		String exist = "No existe";
		
		for (User u : usersList) {
			if (u.getUserName().equals(user.getUserName())) {
				exist = "Existe";
			}
		}
		
		if (exist.equals("No existe")) {
			userService.saveUser(user);
			return user;
		} else {
			User user2 = new User();
			return user2;
		}
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
	
	@PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
	public User login (@RequestBody User user) {
		List<User> usersList = userRepo.findAll();
		User loggedUser = new User();
		
		for (User u : usersList) {
			if (u.getUserName().equals(user.getUserName())
					&& u.getPassword().equals(user.getPassword())) {
				loggedUser = user;
			}
		}
		
		return loggedUser;
	}
}
