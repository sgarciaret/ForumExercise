package com.forumHome.back.service;

import java.util.List;

import com.forumHome.back.model.BannerWord;

public interface BannerWordService {
    public BannerWord saveBannerWord(BannerWord bannerWord);
    public List<BannerWord> getAllBannerWords();
}

