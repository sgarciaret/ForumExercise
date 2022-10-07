package com.forumHome.back.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;

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
	
	@Transient @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private Integer threadfk;
	
	@ManyToOne
    @JoinColumn(name="thread_id")
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	@JsonBackReference
	private Thread thread;
	
	public Post() {
		super();
	}

	public Integer getThreadfk() {
		return threadfk;
	}

	public void setThreadfk(Integer threadfk) {
		this.threadfk = threadfk;
	}

	public Post(int id, Thread thread, String title, String body, String category, String imageString,
			boolean visibility, Integer threadfk) {
		super();
		this.id = id;
		this.title = title;
		this.body = body;
		this.category = category;
		this.imageString = imageString;
		this.visibility = visibility;
		this.threadfk = threadfk;
		this.thread = thread;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Thread getThread() {
		return thread;
	}

	public void setThread(Thread thread) {
		this.thread = thread;
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
