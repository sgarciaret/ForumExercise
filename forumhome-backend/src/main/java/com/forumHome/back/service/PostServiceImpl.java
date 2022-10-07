package com.forumHome.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.forumHome.back.model.Post;
import com.forumHome.back.repository.PostRepository;
import com.forumHome.back.repository.ThreadRepository;
import com.forumHome.back.model.Thread;

@Service
public class PostServiceImpl implements PostService{
	 	@Autowired
	    private PostRepository postRepository;
	 
	 	@Autowired
	 	private ThreadRepository threadRepository;
	 	
	    @Override
	    public Post savePost (Post post) {
	    	Thread thread = threadRepository.findById(post.getThreadfk()).orElseThrow(null);
	    	
	    	post.setThread(thread);
	        return postRepository.save(post);
	    }

	    @Override
	    public List<Post> getAllPosts() {
	        return postRepository.findAll();
	    }
}
