import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home/Home";
import MyHome from "./components/MyHome";
import Movie from "./pages/movie/Movie";
import EditMovie from './pages/movie/EditMovie';
import AddMovie from './pages/movie/AddMovie';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/edit-movie/:id" element={<EditMovie />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
