import React, {useState} from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Login from "./Components/Login";
import CarList from "./Components/CarList";
import './App.scss';

// import router from "../../../Back/routes/cars.route";

function App() {
  const [auth, setAuth ] = useState(false);
  const [user, setUser] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Login auth={auth} setUser={setUser} setAuth={setAuth} />}
        />
        <Route exact path="/admin" element={<CarList authorized={auth} user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
