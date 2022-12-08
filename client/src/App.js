import "./App.css";
import styled from "styled-components/macro";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import EditMovie from "./pages/movie/MovieForms/EditMovie";
import AddMovie from "./pages/movie/MovieForms/AddMovie";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import GlobalStyles from './styles/GlobalStyles';
import Media from './styles/Media';

const Main = styled.main`
  /* display: flex;
  justify-content: space-around;
  align-items: center; */
  color: white;
  width: 80%;
  margin: 0 auto;
  max-width: 60rem;
  padding-top: 11rem;


  ${Media.upToDesktop`
    padding-top: 9rem;
  `}

  ${Media.upToLaptop`
    padding-top: 7rem;
  `}

  ${Media.upToTablet`
    padding-top: 4rem;
  `}


  padding-bottom: 4rem;
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
      <GlobalStyles />
    </Router>
  );
}

export default App;
