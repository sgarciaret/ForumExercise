package com.forumHome.back.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Thread {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	
	@OneToMany
	private int userId;
	
	private String title;
	private String date;
	private String body;
	
	public Thread() {
		super();
	}

	public Thread(int id, int userId, String title, String date, String body) {
		super();
		this.id = id;
		this.userId = userId;
		this.title = title;
		this.date = date;
		this.body = body;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	@Override
	public String toString() {
		return "Thread [id=" + id + ", userId=" + userId + ", title=" + title + ", date=" + date + ", body=" + body
				+ "]";
	}
}
