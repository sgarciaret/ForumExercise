import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewUser from './components/NewUser';
import Login from './components/Login';
import ForumHome from "./components/ForumHome";
import Thread1 from "./components/threads/Thread1";
import Thread2 from "./components/threads/Thread2";
import Thread3 from "./components/threads/Thread3";
import Thread4 from "./components/threads/Thread4";
import CreatePostT from "./components/CreatePostT";
import CreatePostBody from "./components/CreatePostBody";

function App() {

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
        <Route path="home" element={<ForumHome />} />
        <Route path="thread1" element={<Thread1 />} />
        <Route path="thread2" element={<Thread2 />} />
        <Route path="thread3" element={<Thread3 />} />
        <Route path="thread4" element={<Thread4 />} />
        <Route path="createPostT" element={<CreatePostT />} />
        <Route path="createPostBody" element={<CreatePostBody />} />
      </Routes>
      {/* <div style={styleFooter}>
               
            </div> */}
    </BrowserRouter>
  );
}

export default App;
