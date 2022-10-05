package com.forumHome.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.forumHome.back.model.Post;
import com.forumHome.back.service.PostService;

@RestController
@RequestMapping("/controller")
@CrossOrigin
public class PostController {
    @Autowired
    private PostService postService;

    @PostMapping("/add")
    public String add(@RequestBody Post  post){
    	postService.savePost(post);
        return "New post is added";
    }

    @GetMapping("/getAll")
    public List<Post> list(){
        return postService.getAllPosts();
    }
}
