import UserContext from "./UserContext";
import useLocalStorage from "../hooks/useLocalStorage";

const UserState = ({ children }) => {
  const [passwords, setPasswords] = useLocalStorage("passwords", []);

  return (
    <UserContext.Provider value={{ passwords, setPasswords }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserState;
