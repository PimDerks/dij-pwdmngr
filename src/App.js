import "./App.css";
import AppState from "./context/AppState";
import UserState from "./context/UserState";
import PasswordManager from "./containers/PasswordManager";

const App = () => {
  return (
    <div className="App">
      <AppState>
        <UserState>
          <PasswordManager />
        </UserState>
      </AppState>
    </div>
  );
};

export default App;
