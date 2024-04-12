// Components/Profile.js
import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Profile = ({ fullName, email }) => {
  const navigate = useNavigate(); // Use useNavigate

  const handleLogout = () => {
    // Clear any session data (e.g., user authentication)
    // You can also remove items from local storage or perform any other necessary cleanup
    // For example:
    // localStorage.removeItem("token");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <img src={"default-profile-photo.jpg"} alt="Profile" />
      </div>
      <h2>{fullName}</h2>
      <p>{email}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero.
      </p>
      <button onClick={handleLogout}>Logout</button> {/* Add the logout button */}
    </div>
  );
};

export default Profile;
