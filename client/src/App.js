import "./App.css";
import styled from "styled-components/macro";
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
import EditMovie from "./pages/movie/EditMovie";
import AddMovie from "./pages/movie/AddMovie";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";

const Main = styled.main`
  padding: 60px 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/edit-movie/:id" element={<EditMovie />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
