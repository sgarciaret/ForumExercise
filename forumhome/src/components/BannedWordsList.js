import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckBannedWords from "./CheckBannedWords";

function BannedWordsList(props){

    const { list, setList } = props;

    const onChangeStatus = e => {
        const { name, checked } = e.target;
       
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
          }));
          setList(updateList);
        };

        const onClickRemoveItem = e => {
            const updateList = list.filter(item => !item.done);
            setList(updateList);
          };

    const chk = list.map(item => (
        <CheckBannedWords key={item.id} data={item} onChange={onChangeStatus} />
      ));


    return (
        <div className="todo-list">
        <h3>List of banned words</h3>
        {list.length ? chk : "No words"}
        {list.length ? (
          <p>
            <button className="button blue" onClick={onClickRemoveItem}>
              Delete all selected
            </button>
          </p>
        ) : null}
      </div>
    )
}

export default BannedWordsList;