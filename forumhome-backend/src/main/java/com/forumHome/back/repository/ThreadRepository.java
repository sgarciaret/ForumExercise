package com.forumHome.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forumHome.back.model.Thread;

@Repository
public interface ThreadRepository extends JpaRepository<Thread,Integer> {
}
