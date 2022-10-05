import React, { useEffect, useState } from "react";
import { Container, Paper, Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

function NewUser() {
  const divStyle = {
    display: "flex",
  };

  const aStyle = {
    textDecoration: "none",
  };

  const [newUserName, setNewUserName] = useState("");
  const textNewUserName = (e: any) => setNewUserName(e.target.value);

  const [newEmail, setNewEmail] = useState("");
  const textNewEmail = (e: any) => setNewEmail(e.target.value);

  const [newPassword, setNewPassword] = useState("");
  const textNewPassword = (e: any) => setNewPassword(e.target.value);

  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const textNewPasswordRepeat = (e: any) =>
    setNewPasswordRepeat(e.target.value);

  return (
    <>
      <form>
        <div class="mb-3">
          <label for="newUserName" class="form-label">
            User Name
          </label>
          <input
            type="text"
            onChange={textNewUserName}
            value={newUserName}
            className="form-control"
            placeholder="Username..."
          />
        </div>
        <div class="mb-3">
          <label for="newUserEmail" class="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Password..."
            onChange={textNewEmail}
            value={newEmail}
          />
        </div>
        <div class="mb-3">
          <label for="newUserPassword" class="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password..."
            onChange={textNewPassword}
            value={newPassword}
          />
        </div>
        <div class="mb-3">
          <label for="newUserPasswordRepeat" class="form-label">
            Repeat password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password..."
            onChange={textNewPasswordRepeat}
            value={newPasswordRepeat}
          />
        </div>
        <div class="mb-3">
          <label for="newUserImage" class="form-label">
            User Image
          </label>
          <input type="file" class="form-control" id="newUserImage" />
        </div>
        <button type="submit" className="btn btn-block btn-primary w-100 mt-2">
          Create user
        </button>
      </form>
    </>
  );
}

export default NewUser;
