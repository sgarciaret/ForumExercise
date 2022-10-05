package com.forumHome.back.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Post {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
	private String title;
	private String body;
	private String category;
	private String imageString;
	private boolean visibility;
	
	@ManyToOne
    @JoinColumn(name="thread_id")
	private Thread thread;
	
	public Post() {
		super();
	}

	public Post(int id, Thread threadId, String title, String body, String category, String imageString,
			boolean visibility) {
		super();
		this.id = id;
		this.thread = threadId;
		this.title = title;
		this.body = body;
		this.category = category;
		this.imageString = imageString;
		this.visibility = visibility;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Thread getThreadId() {
		return thread;
	}

	public void setThreadId(Thread threadId) {
		this.thread = threadId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getImageString() {
		return imageString;
	}

	public void setImageString(String imageString) {
		this.imageString = imageString;
	}

	public boolean isVisibility() {
		return visibility;
	}

	public void setVisibility(boolean visibility) {
		this.visibility = visibility;
	}

	@Override
	public String toString() {
		return "Post [id=" + id + ", threadId=" + thread + ", title=" + title + ", body=" + body + ", category="
				+ category + ", imageString=" + imageString + ", visibility=" + visibility + "]";
	}
}
