import React, { Component } from "react";
import users from "./data";
import "./style.css";

class Crud1 extends Component {
  constructor() {
    super();
    this.state = {
      users,
      sortBy: "name",
    };
  }

  render() {
    const handleDelete = (id) => {
      this.setState({
        users: this.state.users.filter((item) => item.id !== id),
      });
    };

    const handleSelect = ({ target: { value } }) => {
      this.setState({ sortBy: value });
    };

    const handleSort = ({ target: { value } }) => {
      let res = users.filter((item) =>
        item[this.state.sortBy].toLowerCase().includes(value.toLowerCase())
      );
      this.setState({
        users: res,
      });
    };

    const { users: data } = this.state;
    return (
      <div>
        <input onChange={handleSort} type="text" placeholder="filter" />
        <select onChange={handleSelect}>
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="username">Username</option>
        </select>
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
            {/* forEach, if else, for */}
            {data?.map(({ id, name, username, email, website }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{website}</td>
                <td>
                  <button onClick={() => handleDelete(id)}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Crud1;
