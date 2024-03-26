import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import Profile from './pages/Profile';
import Myblogs from './pages/Myblogs';
import Update from './pages/Update';
import CommentPage from './pages/Comments';
import Calender from './pages/Calender';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myblogs" element={<Myblogs />} />
          <Route path="/update/:blogId" element={<Update />} />
          <Route path="/comment/:blogId" element={<CommentPage />} />
          <Route path="/calender" element={<Calender />} />
        </Routes>
      </div>
    </Router>
  )
}
