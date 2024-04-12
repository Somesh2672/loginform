// Components/Signup.js
// Components/Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [isCompany, setIsCompany] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password, fullName, company, isCompany };

    // Store user data in local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    existingUsers.push(userData);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Redirect to profile page
    navigate("/profile");
  };

  return (
    <div className="formBox">
      <form className="signUpForm" onSubmit={handleSubmit}>
        <h1>Create your PopX account</h1>
        <div className="input-box">
          <label className="input-label">Full Name:</label>
          <input
            className="input-1"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label className="input-label">Email Address:</label>
          <input
            className="input-1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label className="input-label">Password:</label>
          <input
            className="input-1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <label className="input-label">Company:</label>
          <input
            className="input-1"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div className="radio">
          <h3>Are you a company?</h3>
          <label>
            <input
              type="radio"
              name="company"
              value="yes"
              checked={isCompany}
              onChange={() => setIsCompany(true)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="company"
              value="no"
              checked={!isCompany}
              onChange={() => setIsCompany(false)}
            />
            No
          </label>
        </div>
        <button className="signup" type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;













// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [company, setCompany] = useState("");
//   const [isCompany, setIsCompany] = useState(false);
//   const navigate = useNavigate(); // Use useNavigate instead of useHistory

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = { email, password, fullName, phoneNumber, company, isCompany };
//     // Check if user already exists
//     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
//     const existingUser = existingUsers.find(user => user.email === email);
//     if (existingUser) {
//       alert("User already exists. Please login.");
//       navigate("/login"); // Use navigate to redirect
//     } else {
//       // Store user data in local storage
//       existingUsers.push(userData);
//       localStorage.setItem("users", JSON.stringify(existingUsers));
//       // Redirect to profile page
//       navigate("/profile"); // Use navigate to redirect
//     }
//   };

//   return (
//  <div className="formBox">
//        <form className="signUpForm" onSubmit={handleSubmit}>
//       <h1>Create your PopX account</h1>
//       <div className="input-box">
//             <label className="input-label">Full Name:</label>
//             <input className="input-1" type="text" value={fullName} onfocus="setFocus(true)" onblur="setFocus(false)" onChange={(e) => setFullName(e.target.value)} required />
//       </div>
//       <div className="input-box">
//             <label className="input-label">Phone Number:</label>
//             <input className="input-1" type="text" value={phoneNumber} onfocus="setFocus(true)" onblur="setFocus(false)" onChange={(e) => setPhoneNumber(e.target.value)} required />       
//       </div>
//       <div className="input-box">
//             <label className="input-label">Email Address:</label>
//             <input className="input-1" type="text" value={email} onfocus="setFocus(true)" onblur="setFocus(false)" onChange={(e) => setEmail(e.target.value)} required />     
//       </div>
//       <div className="input-box">
//             <label className="input-label">Password:</label>
//             <input className="input-1" type="text" value={password} onfocus="setFocus(true)" onblur="setFocus(false)" onChange={(e) => setPassword(e.target.value)} required />  
                
//       </div>
//       <div className="input-box">
//             <label className="input-label">Company:</label>
//             <input className="input-1" type="text" value={company} onfocus="setFocus(true)" onblur="setFocus(false)" onChange={(e) => setCompany(e.target.value)} required />
//       </div>
      
      
//       <div className="radio">
//         <h3>Are you a company?</h3>
//         <label>
//           <input
//             type="radio"
//             name="company"
//             value="yes"
//             checked={isCompany}
//             onChange={() => setIsCompany(true)}
//           />
//           Yes
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="company"
//             value="no"
//             checked={!isCompany}
//             onChange={() => setIsCompany(false)}
//           />
//           No
//         </label>
//       </div>
//       <button class="signup" type="submit">Create Account</button>
//     </form>
//  </div>
//   );
// };

// export default Signup;









// import React, {useState} from "react";

// const Signup=()=>{
//     const [email, setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const [fullName, setFullName] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [company, setCompany] = useState("");
//     const[isCompany, setIsCompany] = useState(false);


//     return(
//         <form onSubmit={handleSubmit}>
//             <h1>Create your PopX account</h1>
//             <label>
//                 Full Name:
//                 <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} required/>
//             </label>
//             <label>
//                 Phone Number:
//                 <input type="text" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} required/>
//             </label>
//             <label>
//                 Email Address:
//                 <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
//             </label>
//             <label>
//                 Password:
//                 <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
//             </label>
//             <label>
//                 Company:
//                 <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} required/>
//             </label>
            
//             <div>
//                 <h3>Are you a company?</h3>
//                 <input type="radio" id="yes" name="company" value="yes" checked={isCompany}/>
//                 <label htmlFor="yes">Yes</label>

//                 <input type="radio" id="no" name="company" value="no" checked={!isCompany}/>
//                 <lable htmlFor="no">No</lable>
//             </div>

//             <button type="submit">Craete Account</button>
//         </form>
//     )
// };


// export default Signup;
