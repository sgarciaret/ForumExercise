import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewUser() {
  const styleBar = {
    backgroundColor: "#5D2B7E",
    width: "100%",
    height: "10vh"
  };

  const [userName, setuserName] = useState("");

  const [password, setpassword] = useState("");

  const [passwordRepeat, setpasswordRepeat] = useState("");
  const [users, setUsers] = useState([]);

  /*EJEMPLO CON REACT
  useEffect(() => {
    fetch("http://localhost:8080/user/getAll")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const u = { userName, password};
    let userExist = false

    if (password === passwordRepeat) {

      users.forEach(function (user) {
          if (userName === user.userName) {
            console.log("userExist")
            userExist = true
          }

          console.log(userExist)
      });

      if (!userExist) {
        fetch("http://localhost:8080/user/add", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(u),
        }).then(() => {
          console.log("New user added");
        })
        setUsers([...users, u]);
        window.location = '/';
      } else {
        alert("Ya existe un usuario");
      }
    } else {
      alert("La contraseña no coincide");
    }
  };*/

  const handleSubmit = (event) => {
    event.preventDefault();
    const u = { userName, password};
    let userExist = false

    if (password !== passwordRepeat) {
      alert("La contraseña no coincide");
    } else {
      fetch("http://localhost:8080/user/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(u),
      }).then( result => result.json()
      ).then( 
        data => { 
          if (data.userName !== null) {
            window.location = "./";
          } else {
            alert("Usuario ya existe")
          }
          console.log(data.userName) 
        },
        error => {
          console.log(error)
        });
    }
  };

  return (
    <>
    <div style={styleBar}>
        <h1>Forum</h1>
      </div>
    <div className="mt-5 w-50">
      <form
        onSubmit={handleSubmit}
        className="border border-gray border-4 rounded-3 p-5"
      >
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            className="form-control"
            placeholder="Username..."
            pattern="[a-zA-Z0-9_]+"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="form-control"
            placeholder="Password..."
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Repeat password</label>
          <input
            type="password"
            value={passwordRepeat}
            onChange={(e) => setpasswordRepeat(e.target.value)}
            className="form-control"
            placeholder="Password..."
          />
        </div>
        <input
          type="submit"
          value="Create user"
          className="btn btn-block btn-primary w-100 mt-2"
        />
      </form>
    </div>
    </>
  );
}

export default NewUser;
