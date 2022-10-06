import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewUser from './components/NewUser';
import Login from './components/Login';

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
    <BrowserRouter className="App">
      <div style={styleBar}></div>
      <Routes>

        <Route index element={<Login />} />
        <Route path="signup" element={<NewUser />} />

      </Routes>
      <div style={styleFooter}>
               
            </div>
    </BrowserRouter>
  );
}

export default App;
