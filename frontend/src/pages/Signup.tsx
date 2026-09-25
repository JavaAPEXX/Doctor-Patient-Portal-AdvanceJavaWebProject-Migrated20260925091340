// Import necessary components and libraries
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Navbar, Footer, FooterSimple } from './components/layout';
import { AllCss } from './components/common';

// Define the User entity
interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
}

// Define the Appointment entity
interface Appointment {
  id: number;
  title: string;
  link: string;
  description: string;
}

// Define the Doctor entity
interface Doctor {
  id: number;
  title: string;
  link: string;
  description: string;
}

// Define the Specialist entity
interface Specialist {
  id: number;
  title: string;
  link: string;
  description: string;
}

// Define the User component
const User: React.FC = () => {
  const [user, setUser] = React.useState<User>({
    id: 0,
    fullName: '',
    email: '',
    password: '',
  });

  const history = useHistory();

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Call API endpoint to create or update user
    // For demonstration purposes, assume a successful response
    console.log('User created or updated successfully');
  };

  return (
    <div>
      <Navbar />
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" value={user.fullName} onChange={(event) => setUser({ ...user, fullName: event.target.value })} />
        </label>
        <label>
          Email:
          <input type="email" value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })} />
        </label>
        <label>
          Password:
          <input type="password" value={user.password} onChange={(event) => setUser({ ...user, password: event.target.value })} />
        </label>
        <label>
          Confirm Password:
          <input type="password" value={user.password} onChange={(event) => setUser({ ...user, passwordConfirm: event.target.value })} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Footer />
      <FooterSimple />
    </div>
  );
};

export default User;