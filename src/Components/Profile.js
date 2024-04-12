// // Components/Profile.js
// import React from "react";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

// const Profile = ({ fullName, email }) => {
//   const navigate = useNavigate(); // Use useNavigate

  // const handleLogout = () => {
  //   // Clear any session data (e.g., user authentication)
  //   // You can also remove items from local storage or perform any other necessary cleanup
  //   // For example:
  //   // localStorage.removeItem("token");

  //   // Redirect to the login page
  //   navigate("/login");
  // };

//   return (
//     <div>
//       <h1>Profile</h1>
//       <div>
//         <img src={"default-profile-photo.jpg"} alt="Profile" />
//       </div>
//       <h2>{fullName}</h2>
//       <p>Email: {email}</p>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
//         Praesent libero.
//       </p>
//       <button onClick={handleLogout}>Logout</button> {/* Add the logout button */}
//     </div>
//   );
// };

// export default Profile;


// Components/Profile.js
// Components/Profile.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PiUserFocusThin } from "react-icons/pi";

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Use useNavigate

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Assuming the first user in the array is the current user
    if (storedUsers.length > 0) {
      setFullName(storedUsers[0].fullName);
      setEmail(storedUsers[0].email);
    }
  }, []);

  const handleLogout = () => {
    // Clear any session data (e.g., user authentication)
    // You can also remove items from local storage or perform any other necessary cleanup
    // For example:
    // localStorage.removeItem("token");

    // Redirect to the login page
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar">
          <h5>Account Setting</h5>
          <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className="user-pro">
        <PiUserFocusThin className="profileIcon" size={101} />
        <span className="info">
            <h4>{fullName}</h4>
            <p>{email}</p>
        </span>
      </div>
      
      {/* Add other profile information as needed */}
      <div className="loremi">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Profile;
