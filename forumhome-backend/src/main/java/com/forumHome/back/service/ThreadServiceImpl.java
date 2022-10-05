package com.forumHome.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.forumHome.back.model.Thread;
import com.forumHome.back.repository.ThreadRepository;

@Service
public class ThreadServiceImpl implements ThreadService{
	 @Autowired
	    private ThreadRepository threadRepository;

	    @Override
	    public Thread saveThread (Thread thread) {
	        return threadRepository.save(thread);
	    }

	    @Override
	    public List<Thread> getAllThreads() {
	        return threadRepository.findAll();
	    }
}