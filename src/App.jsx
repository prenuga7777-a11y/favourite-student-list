
import { Link, Routes, Route } from "react-router-dom";
import StudentList from "./StudentList.jsx";
import FavouriteStudents from "./FavouriteStudents.jsx";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>Student Portal</h2>

        <div className="nav-links">
          <Link to="/">Student List</Link>
          <Link to="/favourites">Favourite Students</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route
          path="/favourites"
          element={<FavouriteStudents />}
        />
      </Routes>
    </>
  );
}

export default App;