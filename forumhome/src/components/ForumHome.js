import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForumHome.css";

function ForumHome() {

    const [thread1, setThread1] = useState("Thread 1");
    const [thread2, setThread2] = useState("Thread 2");
    const [thread3, setThread3] = useState("Thread 3");

  return (
    <>
      <div class="logoutbtn">
        <Link to="/">
          <button class="btn btn-secondary btn-sm me-md-2">Log out</button>
        </Link>
      </div>
      <div
        className="border border-gray border-4 rounded-3 p-5 mt-5"
        class="threads"
      >
        <h2>Threads</h2>
        <div
          className="border border-green border-3 rounded-3 p-4 mt-4 w-80"
        >
          <h3>{thread1}</h3>
          <p>Description Thread 1</p>
        </div>
        <div
          className="border border-green border-3 rounded-3 p-4 mt-4 w-80"
        >
          <h3>{thread2}</h3>
          <p>Description Thread 2</p>
        </div>
        <div
          className="border border-green border-3 rounded-3 p-4 mt-4 w-80"
        >
          <h3>{thread3}</h3>
          <p>Description Thread 3</p>
        </div>
        <div
          className="border border-green border-3 rounded-3 p-4 mt-4 w-80"
        >
          <h3>Thread 4</h3>
          <p>Description Thread 4</p>
        </div>
      </div>
    </>
  );
}

export default ForumHome;
