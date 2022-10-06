import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const aStyle = {
    textDecoration: "none"
  }

  /*    
    EJEMPLO CON REACT
  useEffect(() => {
    fetch("http://localhost:8080/user/getAll")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);
  */
  const u = { userName, password};
  const existUser = false;

  const handleSubmit = (event) => {
    event.preventDefault();
        fetch("http://localhost:8080/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(u),
        }).then(result => result.json()
        ).then( 
           
            data => { 
              if (data.userName !== null) {
                window.location = "/home";
              } else {
                alert("Usuario no existe")
              }

            },
            error => {
              console.log(error)
            })
  };

  return (
    <div className="mt-5 w-50">
      <form
        className="border border-gray border-4 rounded-3 p-5"
        onSubmit={handleSubmit}
      >
        <div className="form-group mb-3">
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            className="form-control"
            placeholder="Username..."
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group mb-5">
          <input
            type="submit"
            value="Login"
            className="btn btn-block btn-primary w-100 mt-2"
          />
        </div>

        <div className="form-group mt-5 text-center">
          <label>Don't have any acount?&nbsp;</label>
          <Link to="/signup" style={aStyle}>Register</Link>
          {/* <a href="">   Register</a> */}
        </div>
      </form>
    </div>
  );
}
