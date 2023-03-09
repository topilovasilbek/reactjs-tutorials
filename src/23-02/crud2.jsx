import React, { Component } from "react";
import users from "./data";
import "./style.css";
import User from "./user";

class Crud2 extends Component {
  constructor() {
    super();
    this.state = {
      users,
    };
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item) => (
              <User data={item} key={item.id} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Crud2;
