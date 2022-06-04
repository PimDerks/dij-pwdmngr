import PasswordForm from "./components/PasswordForm";
import "./App.css";
import PasswordList from "./components/PasswordList";

function App() {
  const onSubmit = (e) => {
    console.log("on submit");
  };

  const passwords = [
    {
      id: 1,
      name: "Test",
      password: "password",
      client: 1,
    },
  ];

  return (
    <div className="App">
      <PasswordForm onSubmit={onSubmit} />
      <PasswordList passwords={passwords} />
    </div>
  );
}

export default App;
