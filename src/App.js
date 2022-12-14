import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Alert from "./components/Alert";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
    <NoteState>
     <BrowserRouter>
       <Navbar/>
       <Alert message="This ia amazing react course" />
      <div className="container">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
      </div>
    </BrowserRouter>
   </NoteState>
    </>
  );
}

export default App;
