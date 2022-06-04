import { useState, useEffect } from "react";
import AppContext from "./AppContext";
const AppState = ({ children }) => {
  const [clients, setClients] = useState([]);

  // Fetch clients on mount
  useEffect(() => {
    fetch("/api/clients.json").then((response) =>
      response.json().then((data) => setClients(data))
    );
  }, []);

  return (
    <AppContext.Provider value={{ clients, setClients }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppState;
