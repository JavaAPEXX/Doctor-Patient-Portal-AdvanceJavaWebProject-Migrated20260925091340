import React, { useState } from 'react';

const User = ({ id, fullName, email, password }) => {
  const [state, setState] = useState({
    fullName,
    email,
    password,
  });

  const handlePasswordChange = (event) => {
    setState({ ...state, password: event.target.value });
  };

  const handlePasswordConfirmChange = (event) => {
    setState({ ...state, passwordConfirm: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TO DO: implement backend API call to create user
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input type="text" value={state.fullName} onChange={(event) => setState({ ...state, fullName: event.target.value })} />
      </label>
      <label>
        Email:
        <input type="email" value={state.email} onChange={(event) => setState({ ...state, email: event.target.value })} />
      </label>
      <label>
        Password:
        <input type="password" value={state.password} onChange={handlePasswordChange} />
      </label>
      <label>
        Password Confirm:
        <input type="password" value={state.passwordConfirm} onChange={handlePasswordConfirmChange} />
      </label>
      <button type="submit">Create User</button>
    </form>
  );
};

export default User;