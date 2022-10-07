import React, { Fragment } from "react";

function CheckBannedWords(props) {
  const {
    onChange,
    data: { id, bannedWord, done },
  } = props;

  return (
    <Fragment>
      <label className="todo new-item">
        <input
          className="todo__state"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className="todo__text">{bannedWord}</div>
      </label>
    </Fragment>
  );
}

export default CheckBannedWords;
