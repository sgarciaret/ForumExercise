package com.forumHome.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}