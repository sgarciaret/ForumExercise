package com.forumHome.back.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class BannerWord {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String word;
    
    public BannerWord() {
    }

	public BannerWord(int id, String word) {
		super();
		this.id = id;
		this.word = word;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getWord() {
		return word;
	}

	public void setWord(String word) {
		this.word = word;
	}

	@Override
	public String toString() {
		return "BannerWord [id=" + id + ", word=" + word + "]";
	}
}
