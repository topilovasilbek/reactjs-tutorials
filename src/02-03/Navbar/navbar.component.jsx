import React, { useContext } from "react";
import { NavbarDiv, Item } from "./navbar.style";
import {StudentContext} from '../context/student/student.context'

function Navbar({ length }) {
  const name = useContext(StudentContext);

  return (
    <NavbarDiv>
      <Item>Home - {name}</Item>
      <Item>About</Item>
      <Item>
        Students <span>{length}</span>
      </Item>
    </NavbarDiv>
  );
}

export default Navbar;
