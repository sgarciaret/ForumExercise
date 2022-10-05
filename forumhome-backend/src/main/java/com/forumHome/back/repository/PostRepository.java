package com.forumHome.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forumHome.back.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post,Integer> {
}
