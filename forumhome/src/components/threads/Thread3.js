import { Link } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Thread1.css'

function Thread3(props){
    const styleBar = {
        backgroundColor: "#5D2B7E",
        width: "100%",
        height: "10vh"
      };

    // const [thread1, setThread1] = useState("Thread 1");
    // const [thread2, setThread2] = useState("Thread 2");
    // const [thread3, setThread3] = useState("Thread 3");

  return (
    <>
    <div style={styleBar}>
        <Link to="/home" className="decolink"><h1>Forum</h1></Link>
      </div>
        <div className="newbtn">
        <button type="button" className="btn btn-success btn-bg me-md-2">New post</button>
        </div>
      <div className="logoutbtn">
        <Link to="/">
          <button className="btn btn-secondary btn-sm me-md-2">Log out</button>
        </Link>
      </div>
      <div
        className="border border-gray border-4 rounded-3 p-5 mt-5 posts"
      >
        <h2>Thread 3</h2>
        <div
          className="border border-green border-3 rounded-3 p-4 mt-4 w-80"
        >
          <h3>Post 1</h3>
          <p>Description Post 1</p>
        </div>
        <div
          className="border border-green border-3 rounded-3 p-4 mt-4 w-80"
        >
          <h3>Post 2</h3>
          <p>Description Post 2</p>
        </div>
        <div
          className="border border-green border-3 rounded-3 p-4 mt-4 w-80"
        >
          <h3>Post 3</h3>
          <p>Description Post 3</p>
        </div>
        <div
          className="border border-green border-3 rounded-3 p-4 mt-4 w-80"
        >
          <h3>Post 4</h3>
          <p>Description Posy 4</p>
        </div>
      </div>
    </>
  );
}

export default Thread3;