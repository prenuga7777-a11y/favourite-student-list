
import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(student) {
    setFavourites((prev) => {
      const alreadyExists = prev.some(
        (item) => item.id === student.id
      );

      if (alreadyExists) {
        return prev;
      }

      return [...prev, student];
    });
  }

  function removeFavourite(id) {
    setFavourites((prev) =>
      prev.filter((student) => student.id !== id)
    );
  }

  return (
    <StudentContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
}