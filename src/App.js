import "./App.css";
import AppState from "./context/AppState";
import UserState from "./context/UserState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Add from "./containers/Add";
import Overview from "./containers/Overview";

const App = () => {
  return (
    <div className="App">
      <AppState>
        <UserState>
          <Router>
            <Navigation />
            <Routes>
              <Route exact path="/" element={<Overview />} />
              <Route exact path="/add" element={<Add />} />
            </Routes>
          </Router>
        </UserState>
      </AppState>
    </div>
  );
};

export default App;
