import React from 'react';
import {BrowserRouter as Router,  Routes, Route,} from "react-router-dom";
// import './App.css';
import Home from './screens/Home/Home.jsx';
import Dashboard from './screens/Dashboard/Dashboard.jsx';


function App() {

  // const[user, setLoginUser]=useState({});

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;