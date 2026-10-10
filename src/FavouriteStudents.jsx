
import { useContext } from "react";
import { StudentContext } from "./StudentContext.jsx";

function FavouriteStudents() {
  const { favourites, removeFavourite } =
    useContext(StudentContext);

  return (
    <main className="container">
      <h1>Favourite Students</h1>

      {favourites.length === 0 ? (
        <p className="empty-message">
          No favourite students added yet
        </p>
      ) : (
        <div className="student-list">
          {favourites.map((student) => (
            <div className="student-card" key={student.id}>
              <h3>{student.name}</h3>
              <p>Roll Number: {student.id}</p>

              <button
                className="remove-btn"
                onClick={() => removeFavourite(student.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default FavouriteStudents;