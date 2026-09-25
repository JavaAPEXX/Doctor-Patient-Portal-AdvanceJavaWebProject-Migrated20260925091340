import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';

interface UserObj {
  id: number;
  // Other fields might exist, but id is required for the form
}

const ChangePassword: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // State for form fields
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  
  // State for messages (simulating session attributes passed via location.state)
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Retrieve userObj from localStorage/sessionStorage
  const userObj: UserObj | null = JSON.parse(localStorage.getItem('userObj') || 'null');

  // Auth Guard: If userObj is empty, redirect to user_login
  useEffect(() => {
    if (!userObj) {
      navigate('/user-login', { replace: true });
    }
  }, [userObj, navigate]);

  // Handle messages passed via location.state (common pattern for post-redirect messages in SPAs)
  useEffect(() => {
    const state = location.state as { successMsg?: string; errorMsg?: string } | null;
    if (state) {
      if (state.successMsg) {
        setSuccessMsg(state.successMsg);
      }
      if (state.errorMsg) {
        setErrorMsg(state.errorMsg);
      }
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg(null);
    setErrorMsg(null);

    if (!userObj) return;

    // Construct URLSearchParams to match JSP form encoding (application/x-www-form-urlencoded)
    const formData = new URLSearchParams();
    formData.append('newPassword', newPassword);
    formData.append('oldPassword', oldPassword);
    formData.append('userId', userObj.id.toString());

    try {
      // The JSP action is "userChangePassword" (relative)
      // We assume the backend handles this endpoint.
      const response = await fetch('userChangePassword', {
        method: 'POST',
        body: formData,
        // Include credentials to maintain session
        credentials: 'include',
      });

      if (response.redirected) {
        // If the backend redirects (common in JSP/Spring MVC), we might need to handle the final URL
        // For now, we assume a successful redirect means success or we check the final response
        const finalUrl = response.url;
        // In a real app, you might parse the final URL for error codes or just assume success if 200/302
        if (response.ok) {
          // Success: Clear form and potentially redirect or show message
          // Since we don't know the exact success behavior (redirect vs message), 
          // we will clear the form and show a generic success if no specific message was returned.
          // However, the JSP relies on session attributes. 
          // If the backend sets session attributes and redirects back, the SPA won't see them unless 
          // we implement a mechanism to read them (e.g., via a separate API call or query params).
          // Given the constraints, we will assume a JSON response or a redirect with query params for messages.
          // If the backend returns a redirect to /change_password?success=..., we would need to handle that.
          // For this migration, we will assume the backend returns a JSON response or we handle the redirect manually.
          
          // Let's assume the backend returns a redirect. We will navigate to the final URL if it's internal.
          if (finalUrl.includes(window.location.origin)) {
            navigate(finalUrl.replace(window.location.origin, ''), { replace: true });
          } else {
            // Fallback: Show success message
            setSuccessMsg('Password changed successfully.');
            setNewPassword('');
            setOldPassword('');
          }
        } else {
          setErrorMsg('Failed to change password.');
        }
      } else if (response.ok) {
        // If it's a direct 200 response (e.g., JSON)
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          if (data.success) {
            setSuccessMsg(data.message || 'Password changed successfully.');
            setNewPassword('');
            setOldPassword('');
          } else {
            setErrorMsg(data.message || 'Failed to change password.');
          }
        } else {
          // Assume success if 200 and not JSON
          setSuccessMsg('Password changed successfully.');
          setNewPassword('');
          setOldPassword('');
        }
      } else {
        setErrorMsg('An error occurred while changing password.');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      setErrorMsg('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!userObj) {
    return null; // Redirecting
  }

  return (
    <div>
      <Navbar />
      
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card my-card">
              <div className="card-body">
                <p className="fs-3 text-center myP-color">Change Password</p>

                {/* Success Message */}
                {successMsg && (
                  <p className="text-center text-success fs-5">{successMsg}</p>
                )}

                {/* Error Message */}
                {errorMsg && (
                  <p className="text-center text-danger fs-5">{errorMsg}</p>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Enter New Password</label>
                    <input
                      name="newPassword"
                      type="password"
                      placeholder="Enter new password"
                      className="form-control"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Enter Old Password</label>
                    <input
                      name="oldPassword"
                      type="password"
                      placeholder="Enter old password"
                      className="form-control"
                      required
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />
                  </div>
                  <input type="hidden" value={userObj.id} name="userId" />

                  <button 
                    type="submit" 
                    className="btn my-bg-color text-white col-md-12"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Changing...' : 'Change Password'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;