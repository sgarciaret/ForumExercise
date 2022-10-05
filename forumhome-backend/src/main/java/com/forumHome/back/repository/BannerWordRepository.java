package com.forumHome.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forumHome.back.model.BannerWord;

@Repository
public interface BannerWordRepository extends JpaRepository<BannerWord,Integer> {
}

