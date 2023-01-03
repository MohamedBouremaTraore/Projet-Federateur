import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../index.css';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
      <ul  class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link " href="/about" role="button" data-bs-toggle="dropdown" aria-expanded="true">
             <img src={user.picture} alt={user.name} className="profile-img"/>
          </a>
          <ul class="dropdown-menu profile">
            <li>{user.name}</li>
            <li className='border-top'> {user.email}</li>
            <li className='border-top'><a class="modify-profile" href="/Divers">Parametre</a></li>
          </ul>
        </li>
      </ul>
    )
  )
}

export default Profile
