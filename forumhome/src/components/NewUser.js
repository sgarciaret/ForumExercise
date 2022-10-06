import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NewUser() {
  const [userName, setuserName] = useState("");

  const [password, setpassword] = useState("");

  const [passwordRepeat, setpasswordRepeat] = useState("");
  const [users, setUsers] = useState([]);

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
  };

  return (
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
  );
}

export default NewUser;
