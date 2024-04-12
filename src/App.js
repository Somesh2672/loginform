import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Profile from "./Components/Profile";
import Landing from "./Components/Landing";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





// import { BrowserRouter,Route, Routes, Link } from "react-router-dom";
// import './App.css';
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
// import Profile from "./Components/Profile";
// import Landing from "./Components/Landing";

// function App() {
//   return (
//     <div>

//     </div>
   
//   );
// }

// export default App;



