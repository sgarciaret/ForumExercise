import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForumHome.css";

function ForumHome() {
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
        <Link to="/">
          <button className="btn btn-secondary btn-sm me-md-2">Log out</button>
        </Link>
      </div>
      <div
        className="border border-gray border-4 rounded-3 p-5 mt-5 threads"
      >
        <h2>Threads</h2>

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
      </div>
    </>
  );
}

export default ForumHome;
