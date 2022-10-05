import Login from './components/Login';
import React, { useEffect, useState } from "react";

function App() {
  const styleBar = {
    backgroundColor: "#5D2B7E",
    width: "100%",
    height: "10vh"
  };

  const styleFooter = {
      backgroundColor: "#5D2B7E",
      width: "100%",
      height: "10vh",
      position: "fixed",
      bottom: "0"
  };
  return (
    <div className="App">
      <div>
            <div style={styleBar}>
               
            </div>

            <div>
               <Login />
            </div>

            <div style={styleFooter}>
               
            </div>
        </div>
    </div>
  );
}

export default App;
