import UserContext from "./UserContext";
import useLocalStorage from "../hooks/useLocalStorage";

const UserState = ({ children }) => {
  const [passwords, setPasswords] = useLocalStorage("passwords", []);
  const [currentFilter, setCurrentFilter] = useLocalStorage("filter", "");

  return (
    <UserContext.Provider
      value={{ passwords, setPasswords, currentFilter, setCurrentFilter }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserState;
