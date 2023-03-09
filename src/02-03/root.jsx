import React, { useState } from "react";
import Navbar from "./Navbar/navbar.component";
import Body from "./Body/body.component";
import { StudentProvider } from "./context/student/student.context";

function Root(props) {
  const [length, setLength] = useState(null);

  return (
    <StudentProvider>
      <Navbar length={length} />
      <Body setLength={setLength} />
    </StudentProvider>
  );
}

export default Root;
