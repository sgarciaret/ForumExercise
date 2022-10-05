package com.forumHome.back.service;

import java.util.List;

import com.forumHome.back.model.Post;

public interface PostService {
    public Post savePost(Post post);
    public List<Post> getAllPosts();
}
