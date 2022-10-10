import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewUser from './components/NewUser';
import Login from './components/Login';
import ForumHome from "./components/ForumHome";
import Thread from "./components/threads/Thread";
import CreatePostT from "./components/CreatePostT";
import CreatePostBody from "./components/CreatePostBody";
import ModeratorWindow from "./components/ModeratorWindow";

function App() {

  const [threadId, setThreadId] = useState();
  const [pathThread, setPathThread] = useState();

  const styleFooter = {
    backgroundColor: "#5D2B7E",
    width: "100%",
    height: "10vh",
    position: "fixed",
    bottom: "0"
};

  return (
    <BrowserRouter className="App">
      <Routes>

        <Route index element={<Login />} />
        <Route path="signup" element={<NewUser />} />
        <Route path="home" element={<ForumHome onChangeThreadId={setThreadId}/>} />
        <Route path="thread" element={<Thread threadId={threadId} onChangeThreadId={setThreadId}/>} />
        <Route path="createPostT" element={<CreatePostT threadId={threadId}/>} />
        <Route path="createPostBody" element={<CreatePostBody />} />
        <Route path="moderator" element={<ModeratorWindow />} />
      </Routes>
      {/* <div style={styleFooter}>
               
            </div> */}
    </BrowserRouter>
  );
}

export default App;
