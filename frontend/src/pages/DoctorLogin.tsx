import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path="/admin-login" component={AdminLogin} />
      <Route path="/change-password" component={ChangePassword} />
      <Route path="/doctor-login" component={DoctorLogin} />
      <Route path="/" component={Index} />
      <Route path="/signup" component={Signup} />
      <Route path="/user-appointment" component={UserAppointment} />
      <Route path="/user-login" component={UserLogin} />
      <Route path="/view-appointment" component={ViewAppointment} />
      <Route path="/doctor" component={Doctor} />
      <Route path="/edit-doctor" component={EditDoctor} />
      <Route path="/patient" component={Patient} />
      <Route path="/view-doctor" component={ViewDoctor} />
      <Route path="/comment" component={Comment} />
      <Route path="/edit-profile" component={EditProfile} />
    </Switch>
  );
};

const AdminLogin = () => {
  return (
    <div>
      <h1>Admin Login</h1>
      <form>
        <label>Username:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const ChangePassword = () => {
  return (
    <div>
      <h1>Change Password</h1>
      <form>
        <label>Current Password:</label>
        <input type="password" />
        <label>New Password:</label>
        <input type="password" />
        <button type="submit">Change</button>
      </form>
    </div>
  );
};

const DoctorLogin = () => {
  return (
    <div>
      <h1>Doctor Login</h1>
      <form>
        <label>Username:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const Index = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to our website!</p>
    </div>
  );
};

const Signup = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label>Username:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <label>Confirm Password:</label>
        <input type="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

const UserAppointment = () => {
  return (
    <div>
      <h1>User Appointment</h1>
      <p>This is a user appointment page.</p>
    </div>
  );
};

const UserLogin = () => {
  return (
    <div>
      <h1>User Login</h1>
      <form>
        <label>Username:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const ViewAppointment = () => {
  return (
    <div>
      <h1>View Appointment</h1>
      <p>This is a view appointment page.</p>
    </div>
  );
};

const Doctor = () => {
  return (
    <div>
      <h1>Doctor</h1>
      <p>This is a doctor page.</p>
    </div>
  );
};

const EditDoctor = () => {
  return (
    <div>
      <h1>Edit Doctor</h1>
      <form>
        <label>Username:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

const Patient = () => {
  return (
    <div>
      <h1>Patient</h1>
      <p>This is a patient page.</p>
    </div>
  );
};

const ViewDoctor = () => {
  return (
    <div>
      <h1>View Doctor</h1>
      <p>This is a view doctor page.</p>
    </div>
  );
};

const Comment = () => {
  return (
    <div>
      <h1>Comment</h1>
      <p>This is a comment page.</p>
    </div>
  );
};

const EditProfile = () => {
  return (
    <div>
      <h1>Edit Profile</h1>
      <form>
        <label>Username:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default App;