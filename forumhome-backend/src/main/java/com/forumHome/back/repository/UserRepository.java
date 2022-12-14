package com.forumHome.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.forumHome.back.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
	
	@Query("SELECT u FROM User u WHERE u.userName = ?1")
	public User findByUsername(String username);
	
}
