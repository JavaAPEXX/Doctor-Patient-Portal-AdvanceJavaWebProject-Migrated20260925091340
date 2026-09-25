// components/layout/Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
// components/common/AllCss.tsx
import React from 'react';

const AllCss = () => {
  return (
    <style>
      /* allcss styles here */
    </style>
  );
};

export default AllCss;
// components/layout/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023</p>
    </footer>
  );
};

export default Footer;
// components/layout/FooterSimple.tsx
import React from 'react';

const FooterSimple = () => {
  return (
    <footer>
      <p>&copy; 2023</p>
    </footer>
  );
};

export default FooterSimple;
// pages/migrated-repo/AdminLogin.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend API call to login admin
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        <Link to="/signup">Don't have an account? Sign up here.</Link>
      </p>
    </div>
  );
};

export default AdminLogin;
// pages/migrated-repo/ChangePassword.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend API call to change password
  };

  return (
    <div>
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <label>Old Password:</label>
        <input type="password" value={oldPassword} onChange={(event) => setOldPassword(event.target.value)} />
        <br />
        <label>New Password:</label>
        <input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} />
        <br />
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        <br />
        <button type="submit">Change Password</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        <Link to="/login">Go back to login page.</Link>
      </p>
    </div>
  );
};

export default ChangePassword;
// pages/migrated-repo/DoctorLogin.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DoctorLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend API call to login doctor
  };

  return (
    <div>
      <h1>Doctor Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        <Link to="/signup">Don't have an account? Sign up here.</Link>
      </p>
    </div>
  );
};

export default DoctorLogin;
// pages/migrated-repo/Index.tsx
import React from 'react';

const Index = () => {
  return (
    <div>
      <h1>Welcome to the index page!</h1>
    </div>
  );
};

export default Index;
// pages/migrated-repo/Signup.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend API call to signup
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        <br />
        <button type="submit">Signup</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        <Link to="/login">Already have an account? Login here.</Link>
      </p>
    </div>
  );
};

export default Signup;
// pages/migrated-repo/UserAppointment.tsx
import React from 'react';

const UserAppointment = () => {
  return (
    <div>
      <h1>User Appointment</h1>
    </div>
  );
};

export default UserAppointment;
// pages/migrated-repo/UserLogin.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend API call to login user
  };

  return (
    <div>
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        <Link to="/signup">Don't have an account? Sign up here.</Link>
      </p>
    </div>
  );
};

export default UserLogin;
// pages/migrated-repo/ViewAppointment.tsx
import React from 'react';

const ViewAppointment = () => {
  return (
    <div>
      <h1>View Appointment</h1>
    </div>
  );
};

export default ViewAppointment;
// pages/migrated-repo/Doctor.tsx
import React from 'react';

const Doctor = () => {
  return (
    <div>
      <h1>Doctor</h1>
    </div>
  );
};

export default Doctor;
// pages/migrated-repo/EditDoctor.tsx
import React from 'react';

const EditDoctor = () => {
  return (
    <div>
      <h1>Edit Doctor</h1>
    </div>
  );
};

export default EditDoctor;
// pages/migrated-repo/Patient.tsx
import React from 'react';

const Patient = () => {
  return (
    <div>
      <h1>Patient</h1>
    </div>
  );
};

export default Patient;
// pages/migrated-repo/ViewDoctor.tsx
import React from 'react';

const ViewDoctor = () => {
  return (
    <div>
      <h1>View Doctor</h1>
    </div>
  );
};

export default ViewDoctor;
// pages/migrated-repo/Signup.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend API call to signup
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        <br />
        <button type="submit">Signup</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        <Link to="/login">Already have an account? Login here.</Link>
      </p>
    </div>
  );
};

export default Signup;
// pages/migrated-repo/Login.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend API call to login
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        <Link to="/signup">Don't have an account? Sign up here.</Link>
      </p>
    </div>
  );
};

export default Login;
// pages/migrated-repo/Home.tsx
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the home page!</h1>
    </div>
  );
};

export default Home;
// pages/migrated-repo/About.tsx
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About us</h1>
    </div>
  );
};

export default About;
// pages/migrated-repo/Contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Get in touch</h1>
    </div>
  );
};

export default Contact;
// pages/migrated-repo/Signup.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend API call to signup
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        <br />
        <button type="submit">Signup</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        <Link to="/login">Already have an account? Login here.</Link>
      </p>
    </div>
  );
};

export default Signup;
// pages/migrated-repo/Login.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend API call to login
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        <Link to="/signup">Don't have an account? Sign up here.</Link>
      </p>
    </div>
  );
};

export default Login;
// pages/migrated-repo/Home.tsx
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the home page!</h1>
    </div>
  );
};

export default Home;
// pages/migrated-repo/About.tsx
import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About us</h1>
    </div>
  );
};

export default About;
// pages/migrated-repo/Contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Get in touch</h1>
    </div>
  );
};

export default Contact;
// pages/migrated-repo/Signup.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend API call to signup
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        <br />
        <button type="submit">Signup</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <p>
        <Link to="/login">Already have an account? Login here.</Link>
      </p>
    </div>
  );
};

export default Signup;
// pages/migrated-repo/Login.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // backend API call to login
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username