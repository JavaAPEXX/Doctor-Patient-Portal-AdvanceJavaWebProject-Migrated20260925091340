import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import "./AdminLogin.css";

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    try {
      const params = new URLSearchParams();
      params.append("email", email);
      params.append("password", password);

      const response = await fetch("/adminLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
        credentials: "include",
      });

      // UNCONFIRMED response shape – adapt as needed
      const data = await response.json();

      if (response.ok) {
        if (data.successMsg) setSuccessMsg(data.successMsg);
        // UNCONFIRMED redirect target after successful login
        navigate("/admin-dashboard");
      } else {
        if (data.errorMsg) setErrorMsg(data.errorMsg);
        else setErrorMsg("Login failed");
      }
    } catch (err) {
      setErrorMsg("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container p-5">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card my-card">
              <div className="card-header text-center text-white my-bg-color">
                <p className="fs-4 text-center text-white mt-2">
                  <i className="fa fa-universal-access"></i> Admin Login
                </p>
              </div>
              <div className="card-body">
                {successMsg && (
                  <p className="text-center text-success fs-5">{successMsg}</p>
                )}
                {errorMsg && (
                  <p className="text-center text-danger fs-5">{errorMsg}</p>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      name="password"
                      type="password"
                      placeholder="Enter password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn my-bg-color text-white col-md-12"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;