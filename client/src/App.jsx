import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import RegisterFan from './pages/register/Register';
import RegisterMem from './pages/member/Register';
import Post from './pages/posts/Post';
import Profile from './pages/profile/Profile';
import Progress from './pages/Progress';
import Sidebar from './pages/Sidebar';
import ErrorPage from './pages/error/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterFan />} />
        <Route path="/member/register" element={<RegisterMem />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;      
