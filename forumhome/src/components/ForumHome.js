import { Link } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForumHome.css";

function ForumHome() {
    const styleBar = {
        backgroundColor: "#5D2B7E",
        width: "100%",
        height: "10vh"
      };

    const [thread1, setThread1] = useState("Thread 1");
    const [thread2, setThread2] = useState("Thread 2");
    const [thread3, setThread3] = useState("Thread 3");
    const [thread4, setThread4] = useState("Thread 4");

  return (
    <>
    <div style={styleBar}>
        <Link to="/home" className="decolink"><h1>Forum</h1></Link>
      </div>
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
            <Link to="/thread1" className="decolink"><h3>{thread1}</h3></Link>
          
          <p>Description Thread 1</p>
        </div>
        <div
          className="border border-green border-3 rounded-3 p-4 mt-4 w-80"
        >
          <Link to="/thread2" className="decolink"><h3>{thread2}</h3></Link>
          <p>Description Thread 2</p>
        </div>
        <div
          className="border border-green border-3 rounded-3 p-4 mt-4 w-80"
        >
          <Link to="/thread3" className="decolink"><h3>{thread3}</h3></Link>
          <p>Description Thread 3</p>
        </div>
        <div
          className="border border-green border-3 rounded-3 p-4 mt-4 w-80"
        >
          <Link to="/thread4" className="decolink"><h3>{thread4}</h3></Link>
          <p>Description Thread 4</p>
        </div>
      </div>
    </>
  );
}

export default ForumHome;
