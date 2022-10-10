import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Thread.css';
import logo from '../../images/logo.png';

function Thread( props ){
  console.log(props)
    const styleBar = {
        backgroundColor: "#5D2B7E",
        width: "100%",
        height: "10vh"
      };

      const [posts, setPosts] = useState([]);

      const id = props.threadId;
      const t = { id }

      useEffect(() => {
        fetch(`http://localhost:8080/thread/getAllById/${props.threadId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        }).then((res) => res.json())
          .then(
            (result) => {
              setPosts(result)
              console.log(posts)
            },
            error => {
              console.log(error)
            }
          );
      }, []);

  return (
    <>
    <div style={styleBar}>
        <img src={logo} className="logo"/>
        <Link to="/home" className="decolink"><h1>Forum</h1></Link>
      </div>
        <div className="newbtn">
            <Link to="/createPostT"  onClick={() => props.onChangeThreadId(props.threadId)}>
              <button type="button" className="btn btn-success btn-bg me-md-2">New post</button>
            </Link>
        
        </div>
      <div className="logoutbtn">
        <Link to="/">
          <button className="btn btn-secondary btn-sm me-md-2">Log out</button>
        </Link>
      </div>
      <div
        className="border border-gray border-4 rounded-3 p-5 mt-5 posts"
      >
        <h2>Thread {props.threadId}</h2>
        {posts.map(post=>(
          <div
            className="border border-green border-3 rounded-3 p-4 mt-4 w-80"
          >              
            <h3>Post {post.id}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Thread;