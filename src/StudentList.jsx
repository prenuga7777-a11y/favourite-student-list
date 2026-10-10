
import { useContext } from "react";
import { StudentContext } from "./StudentContext.jsx";

const students = [
  { id: 101, name: "Arun" },
  { id: 102, name: "Priya" },
  { id: 103, name: "Karthik" },
  { id: 104, name: "Divya" },
  { id: 105, name: "Rahul" },
];

function StudentList() {
  const { favourites, addFavourite } =
    useContext(StudentContext);

  return (
    <main className="container">
      <h1>Student List</h1>

      <div className="student-list">
        {students.map((student) => {
          const isFavourite = favourites.some(
            (item) => item.id === student.id
          );

          return (
            <div className="student-card" key={student.id}>
              <h3>{student.name}</h3>
              <p>Roll Number: {student.id}</p>

              <button
                disabled={isFavourite}
                onClick={() => addFavourite(student)}
              >
                {isFavourite
                  ? "Already Added"
                  : "Add to Favourite"}
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default StudentList;