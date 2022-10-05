package com.forumHome.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.forumHome.back.model.BannerWord;
import com.forumHome.back.repository.BannerWordRepository;

@Service
public class BannerWordServiceImpl implements BannerWordService{
	 @Autowired
	    private BannerWordRepository bannerWordRepository;

	    @Override
	    public BannerWord saveBannerWord (BannerWord bannerWord) {
	        return bannerWordRepository.save(bannerWord);
	    }

	    @Override
	    public List<BannerWord> getAllBannerWords() {
	        return bannerWordRepository.findAll();
	    }
}