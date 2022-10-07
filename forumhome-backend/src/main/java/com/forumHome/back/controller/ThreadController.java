package com.forumHome.back.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.forumHome.back.model.Post;
import com.forumHome.back.model.Thread;
import com.forumHome.back.service.ThreadService;

@RestController
@RequestMapping("/thread")
@CrossOrigin
public class ThreadController {
    @Autowired
    private ThreadService threadService;

    @PostMapping("/add")
    public String add(@RequestBody Thread thread){
    	threadService.saveThread(thread);
        return "New thread is added";
    }

    @GetMapping("/getAll")
    public List<Thread> list(){
        return threadService.getAllThreads();
    }
    

    @PostMapping("/getAllById/{id}")
    public List<Post> getAllById(@PathVariable String id){
    	List<Post>postList = new ArrayList<Post>();
    	
    	for (Thread thread : threadService.getAllThreads()) {
			if (thread.getId() == Integer.parseInt(id)) {
				for (Post post : postList) {
					postList.add(post);
				}
			}
		}
        return postList;
    }
}