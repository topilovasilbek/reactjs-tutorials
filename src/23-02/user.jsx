import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      data: props.data,
      extraData: props.data,
      notEditable: true,
    };
  }

  render() {
    const handleEdit = () => {
      this.setState({ notEditable: false });
    };

    const handleSave = () => {
      this.setState({ data: this.state.extraData });
      this.setState({ notEditable: true });
    };

    const handleCancel = () => {
      this.setState({ extraData: this.state.data });
      this.setState({ notEditable: true });
    };

    const handleChange = ({ target: { name, value } }) => {
      this.setState({
        extraData: { ...this.state.extraData, [name]: value },
      });
    };

    const { id, name, username, email, website } = this.state.extraData;
    const { notEditable } = this.state;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>
          <input
            type="text"
            name="name"
            value={name}
            readOnly={notEditable}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="username"
            value={username}
            readOnly={notEditable}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="email"
            value={email}
            readOnly={notEditable}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="website"
            value={website}
            readOnly={notEditable}
            onChange={handleChange}
          />
        </td>
        <td>
          {notEditable ? (
            <button onClick={handleEdit}>Edit</button>
          ) : (
            <>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          )}
        </td>
      </tr>
    );
  }
}

export default User;
