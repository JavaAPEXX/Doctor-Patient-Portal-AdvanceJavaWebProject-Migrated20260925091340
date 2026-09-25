import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Navbar, Footer, FooterSimple } from './components/layout';

interface User {
  id: number;
  fullName: string;
  email: string;
  password: string;
}

interface Appointment {
  id: number;
  title: string;
  link: string;
  description: string;
}

interface Doctor {
  id: number;
  title: string;
  link: string;
}

interface Specialist {
  id: number;
  title: string;
}

interface UserResponse {
  id: number;
  fullName: string;
  email: string;
  password: string;
}

interface AppointmentResponse {
  id: number;
  title: string;
  link: string;
  description: string;
}

interface DoctorResponse {
  id: number;
  title: string;
  link: string;
}

interface SpecialistResponse {
  id: number;
  title: string;
}

const User = ({ id, fullName, email, password }: User) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch user data from backend API
    fetch('/api/users/' + id)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.fullName}</h1>
      <p>{user.email}</p>
      <p>{user.password}</p>
    </div>
  );
};

const Appointment = ({ id, title, link, description }: Appointment) => {
  const [appointment, setAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    // Fetch appointment data from backend API
    fetch('/api/appointments/' + id)
      .then(response => response.json())
      .then(data => setAppointment(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!appointment) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{appointment.title}</h1>
      <p>{appointment.link}</p>
      <p>{appointment.description}</p>
    </div>
  );
};

const Doctor = ({ id, title, link }: Doctor) => {
  const [doctor, setDoctor] = useState<Doctor | null>(null);

  useEffect(() => {
    // Fetch doctor data from backend API
    fetch('/api/doctors/' + id)
      .then(response => response.json())
      .then(data => setDoctor(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{doctor.title}</h1>
      <p>{doctor.link}</p>
    </div>
  );
};

const Specialist = ({ id, title }: Specialist) => {
  const [specialist, setSpecialist] = useState<Specialist | null>(null);

  useEffect(() => {
    // Fetch specialist data from backend API
    fetch('/api/specialists/' + id)
      .then(response => response.json())
      .then(data => setSpecialist(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!specialist) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{specialist.title}</h1>
    </div>
  );
};

const Comment = ({ id, title, link, description }: Comment) => {
  const [comment, setComment] = useState<Comment | null>(null);

  useEffect(() => {
    // Fetch comment data from backend API
    fetch('/api/comments/' + id)
      .then(response => response.json())
      .then(data => setComment(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!comment) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{comment.title}</h1>
      <p>{comment.link}</p>
      <p>{comment.description}</p>
    </div>
  );
};

const EditProfile = ({ id, fullName, email, password }: EditProfile) => {
  const [profile, setProfile] = useState<EditProfile | null>(null);

  useEffect(() => {
    // Fetch profile data from backend API
    fetch('/api/profiles/' + id)
      .then(response => response.json())
      .then(data => setProfile(data))
      .catch(error => console.error(error));
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{profile.fullName}</h1>
      <p>{profile.email}</p>
      <p>{profile.password}</p>
    </div>
  );
};

const Navbar = () => {
  return <div>Navbar</div>;
};

const Footer = () => {
  return <div>Footer</div>;
};

const FooterSimple = () => {
  return <div>FooterSimple</div>;
};

const AllCss = () => {
  return <div>AllCss</div>;
};

const Index = () => {
  return <div>Index</div>;
};

const Signup = () => {
  return <div>Signup</div>;
};

const UserLogin = () => {
  return <div>UserLogin</div>;
};

const ViewAppointment = () => {
  return <div>ViewAppointment</div>;
};

const DoctorLogin = () => {
  return <div>DoctorLogin</div>;
};

const ChangePassword = () => {
  return <div>ChangePassword</div>;
};

const ViewDoctor = () => {
  return <div>ViewDoctor</div>;
};

const Patient = () => {
  return <div>Patient</div>;
};

const EditDoctor = () => {
  return <div>EditDoctor</div>;
};

const Comment = () => {
  return <div>Comment</div>;
};

const EditProfile = () => {
  return <div>EditProfile</div>;
};

const routes = [
  { path: '/admin-login', component: UserLogin },
  { path: '/change-password', component: ChangePassword },
  { path: '/doctor-login', component: DoctorLogin },
  { path: '/', component: Index },
  { path: '/signup', component: Signup },
  { path: '/user-appointment', component: ViewAppointment },
  { path: '/user-login', component: UserLogin },
  { path: '/view-appointment', component: ViewAppointment },
  { path: '/doctor', component: Doctor },
  { path: '/edit-doctor', component: EditDoctor },
  { path: '/patient', component: Patient },
  { path: '/view-doctor', component: ViewDoctor },
  { path: '/comment', component: Comment },
  { path: '/edit-profile', component: EditProfile },
];

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>App</h1>
      <Link to="/admin-login">Admin Login</Link>
      <Link to="/change-password">Change Password</Link>
      <Link to="/doctor-login">Doctor Login</Link>
      <Link to="/">Index</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/user-appointment">User Appointment</Link>
      <Link to="/user-login">User Login</Link>
      <Link to="/view-appointment">View Appointment</Link>
      <Link to="/doctor">Doctor</Link>
      <Link to="/edit-doctor">Edit Doctor</Link>
      <Link to="/patient">Patient</Link>
      <Link to="/view-doctor">View Doctor</Link>
      <Link to="/comment">Comment</Link>
      <Link to="/edit-profile">Edit Profile</Link>
    </div>
  );
};

export default App;