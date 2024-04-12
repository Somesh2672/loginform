// Components/Landing

import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';

const Landing = () => {
  return (
    <div className="container">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
      <Link to="/signup"><button className="sign">Create Account</button></Link>
      <Link to="/login"><button className="reg">Already Registered? Login</button></Link>
    </div>
  );
};

export default Landing;




// import React from "react";

// import {Link} from "react-router-dom";

// const Landing  = () => {
//     return (
//         <div className="container">
//             <h1>Welcome to our PopX</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
//             <button>Create Account</button>
//             <button>Already Registered? Login</button>
//         </div>


//     )
// }