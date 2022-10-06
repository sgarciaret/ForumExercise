import { Link } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForumHome.css";

function ForumHome() {
<<<<<<< HEAD
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
=======
    const [threads, setThreads] = useState([]);
    const styleLink = {
      textDecoration : "none",
      color: "black"
    }

    useEffect(() => {
      fetch("http://localhost:8080/thread/getAll")
        .then((res) => res.json())
        .then((result) => {
          setThreads(result);
        });
    }, []);

  return (
    <>
      <div className="logoutbtn">
>>>>>>> 27e76321f0a826d4967809f11d6d91ecd09d7f16
        <Link to="/">
          <button className="btn btn-secondary btn-sm me-md-2">Log out</button>
        </Link>
      </div>
      <div
        className="border border-gray border-4 rounded-3 p-5 mt-5 threads"
      >
        <h2>Threads</h2>
<<<<<<< HEAD
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
=======

        {threads.map(thread=>(
          <Link to="/" style={styleLink}>
            <div
              className="border border-green border-3 rounded-3 p-4 mt-4 w-80"
            >
              <h3>{thread.title}</h3>
              <p>{thread.body}</p>
            </div>
          </Link>
        ))}
>>>>>>> 27e76321f0a826d4967809f11d6d91ecd09d7f16
      </div>
    </>
  );
}

export default ForumHome;
