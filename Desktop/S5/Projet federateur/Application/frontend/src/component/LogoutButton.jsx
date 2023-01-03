import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout()} className="btn btn-success">
        Log Out
      </button>
    )
  )
}

export default LogoutButton