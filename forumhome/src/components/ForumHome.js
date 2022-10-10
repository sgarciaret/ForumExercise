import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForumHome.css";
import logo from '../images/logo.png';

function ForumHome( { onChangeThreadId, onChangeThreadPath }) {
  const styleBar = {
    backgroundColor: "#5D2B7E",
    width: "100%",
    height: "10vh",
    color: "white"
  };

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
     <div style={styleBar}>
        <img src={logo} className="logo"/>
        <Link to="/home" className="decolink"><h1>Forum</h1></Link>
      </div>
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
          <Link to="/thread" style={styleLink} onClick={() => {
            onChangeThreadId(thread.id)
            }
          }>
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
