import { createContext, useReducer } from "react";
import { StudentReducer } from "./student.reducer";
import { initialState } from "./student.store";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StudentReducer, initialState);

  return (
    <StudentContext.Provider value={[state, dispatch]}>
      {children}
    </StudentContext.Provider>
  );
};
