import React, { useState } from "react";

function NewUser() {
  const [newUsername, setNewUsername] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewUsername("");
    setNewPassword("");
    setNewPasswordRepeat("");
  };

  return (
    <div className="mt-5 w-50">
      <form
        onSubmit={handleSubmit}
        className="border border-gray border-4 rounded-3 p-5"
      >
        <div class="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="form-control"
            placeholder="Username..."
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="form-control"
            placeholder="Password..."
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Repeat password</label>
          <input
            type="password"
            value={newPasswordRepeat}
            onChange={(e) => setNewPasswordRepeat(e.target.value)}
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
