import { useState, useEffect } from "react";
import AppContext from "./AppContext";
import { slugify } from "../utils/string";

const AppState = ({ children }) => {
  const [clients, setClients] = useState([]);

  // Fetch clients on mount
  useEffect(() => {
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        "https://pastebin.com/raw/zSFTiVWr"
      )}`
    ).then((response) => {
      response.json().then(({ contents }) => {
        const clientsData = JSON.parse(contents).map((client) => {
          return { id: slugify(client.name), ...client };
        });
        setClients(clientsData);
      });
    });
  }, []);

  return (
    <AppContext.Provider value={{ clients, setClients }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppState;
