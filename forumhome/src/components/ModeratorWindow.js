import React, { useEffect, useState } from "react";
import AddBannedWords from "./AddBannedWord";
import BannedWordsList from "./BannedWordsList";
import { Link } from "react-router-dom";
import './ModeratorWindow.css';
import logo from '../images/logo.png';

function ModeratorWindow(props) {
  const styleBar = {
    backgroundColor: "#5D2B7E",
    width: "100%",
    height: "10vh",
    color: "white"
  };

  const [list, setList] = useState([]);

  const handleAddWord = (addWord) => {
    setList([...list, addWord]);
  };

  return (
    <>
      <div style={styleBar}>
        <img src={logo} className="logo"/>
        <Link to="/home" className="decolink"><h1>Forum</h1></Link>
      </div>
      <AddBannedWords handleAddWord={handleAddWord} />
      <BannedWordsList list={list} setList={setList} />
    </>
  );
}

export default ModeratorWindow;
