package com.forumHome.back.service;

import java.util.List;

import com.forumHome.back.model.Thread;

public interface ThreadService {
    public Thread saveThread(Thread thread);
    public List<Thread> getAllThreads();
}
