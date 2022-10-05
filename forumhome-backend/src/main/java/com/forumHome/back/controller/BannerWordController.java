package com.forumHome.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.forumHome.back.model.BannerWord;
import com.forumHome.back.service.BannerWordService;

@RestController
@RequestMapping("/bannerWordController")
@CrossOrigin
public class BannerWordController {
    @Autowired
    private BannerWordService bannerWordService;

    @PostMapping("/add")
    public String add(@RequestBody BannerWord bannerWord){
    	bannerWordService.saveBannerWord(bannerWord);
        return "New banner word is added";
    }

    @GetMapping("/getAll")
    public List<BannerWord> list(){
        return bannerWordService.getAllBannerWords();
    }
}