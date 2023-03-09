import React, { useContext, useEffect, useState } from "react";
import { BodyDiv } from "./body.style";
import students from "./../mock/students";
import { StudentContext } from "../context/student/student.context";

function Body({ setLength }) {
  const [name, dispatch] = useContext(StudentContext);
  const [student, setStudent] = useState(students);

  const deleteStudent = (id) => {
    let res = student.filter((item) => item.id !== id);
    setStudent(res);
  };

  useEffect(() => {
    setLength(student.length);
    dispatch({ type: "UPDATE", payload: `${name} + 1` });
  }, [student]);

  return (
    <BodyDiv>
      <h2>
        All students - {student.length} - {name}
      </h2>
      {student.map((item) => (
        <h2 key={item.id}>
          {item.id} - {item.name}{" "}
          <button onClick={() => deleteStudent(item.id)}>Delete</button>
        </h2>
      ))}
    </BodyDiv>
  );
}

export default Body;
