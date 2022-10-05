package com.forumHome.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.forumHome.back.model.Post;
import com.forumHome.back.repository.PostRepository;

@Service
public class PostServiceImpl implements PostService{
	 @Autowired
	    private PostRepository postRepository;

	    @Override
	    public Post savePost (Post post) {
	        return postRepository.save(post);
	    }

	    @Override
	    public List<Post> getAllPosts() {
	        return postRepository.findAll();
	    }
}
